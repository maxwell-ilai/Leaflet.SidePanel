/**
 * @name Leaflet.SidePanel
 * @link https://github.com/maxwell-ilai/Leaflet.SidePanel
 */

L.Control.SidePanel = L.Control.extend({
	includes: L.Evented.prototype,

	options: {
		panelPosition: 'left',
		hasTabs: true,
		tabsPosition: 'top',
		darkMode: false,
		pushControls: false
	},

	initialize: function (id, options) {
		// Get panel HTMLElement
		this._panel = L.DomUtil.get(id);

		// Merge options
		L.setOptions(this, options);
	},

	addTo: function (map) {
		// Attach panel direction class
		L.DomUtil.addClass(this._panel, 'sidepanel-' + this.options.panelPosition);

		// Enable dark mode
		if (this.options.darkMode) {
			L.DomUtil.addClass(this._panel, 'sidepanel-dark');
		}

		// Adds stopPropagation to the element's 'wheel' events (plus browser variants).
		L.DomEvent.disableScrollPropagation(this._panel);
		// Adds stopPropagation to the element's 'click', 'dblclick', 'contextmenu', 'mousedown' and 'touchstart' events (plus browser variants).
		L.DomEvent.disableClickPropagation(this._panel);

		// If there are tabs, start them.
		if (this.options.hasTabs) {
			this.initTabs(map, this.options.tabsPosition);
		}
	},

	initTabs: function (map, tabsPosition) {
		if (typeof tabsPosition === 'string') {
			L.DomUtil.addClass(this._panel, 'tabs-' + tabsPosition);
		}

		let tabsContainer = this._panel.querySelector('.sidepanel-tabs');
		let tabsLinks = tabsContainer.querySelectorAll('.sidepanel-tab');
		let tabsContents = this._panel.querySelectorAll('.sidepanel-tab-content');

		tabsLinks.forEach(function (tab) {
			const link = tab.querySelector('a.sidebar-tab-link');

			// Shows the first active tab
			if (L.DomUtil.hasClass(link, 'active')) {
				tabsContents.forEach(function (element) {
					if (link.dataset.tabLink === element.dataset.tabContent) {
						L.DomUtil.addClass(element, 'active');
					}
				});
			}

			L.DomEvent.on(link, 'click', function (e) {
				L.DomEvent.preventDefault(e);

				if (!L.DomUtil.hasClass(link, 'active')) {
					// Remove active links
					for (let i = 0; i < tabsLinks.length; i++) {
						let linkActive = tabsLinks[i].querySelector('a.sidebar-tab-link');

						if (L.DomUtil.hasClass(linkActive, 'active')) {
							L.DomUtil.removeClass(linkActive, 'active');
						}
					}

					// Add current active link
					L.DomUtil.addClass(link, 'active');

					// Shows current active content
					tabsContents.forEach(function (element) {
						if (link.dataset.tabLink === element.dataset.tabContent) {
							L.DomUtil.addClass(element, 'active');
						} else {
							L.DomUtil.removeClass(element, 'active');
						}
					});
				}
			}, tab);
		});

		this._toggleButton(map);
	},

	_toggleButton: function (map) {
		const container = this._panel.querySelector('.sidepanel-toggle-container');
		const button = container.querySelector('.sidepanel-toggle-button');

		L.DomEvent.on(button, 'click', function (e) {
			let IS_OPENED = true;
			let opened = L.DomUtil.hasClass(this._panel, 'opened');
			let closed = L.DomUtil.hasClass(this._panel, 'closed');

			if (!opened && !closed) {
				L.DomUtil.addClass(this._panel, 'opened');
			} else if (!opened && closed) {
				L.DomUtil.addClass(this._panel, 'opened');
				L.DomUtil.removeClass(this._panel, 'closed');
			} else if (opened && !closed) {
				IS_OPENED = false;
				L.DomUtil.removeClass(this._panel, 'opened');
				L.DomUtil.addClass(this._panel, 'closed');
			} else {
				L.DomUtil.addClass(this._panel, 'opened');
			}

			if (this.options.pushControls) {
				let controlsContainer = map.getContainer().querySelector('.leaflet-control-container');

				L.DomUtil.addClass(controlsContainer, 'leaflet-anim-control-container');

				if (IS_OPENED) {
					L.DomUtil.removeClass(controlsContainer,  this.options.panelPosition + '-closed');
					L.DomUtil.addClass(controlsContainer, this.options.panelPosition + '-opened');
				} else {
					L.DomUtil.removeClass(controlsContainer, this.options.panelPosition + '-opened');
					L.DomUtil.addClass(controlsContainer, this.options.panelPosition + '-closed');
				}
			}


		}.bind(this), container);
	},
});

L.control.sidepanel = function (id, options) {
	return new L.Control.SidePanel(id, options);
};