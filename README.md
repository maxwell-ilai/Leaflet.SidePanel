# Leaflet.SidePanel
Leaflet plugin

# How to use
Include **leaflet-sidepanel.css** and **leaflet-sidepanel.js** in your page:
```html
<link rel="stylesheet" href="./dist/leaflet-sidepanel.css" />
<script src="./dist/leaflet-sidepanel.js"></script>
```
or use minified files
```html
<link rel="stylesheet" href="./dist/leaflet-sidepanel.min.css" />
<script src="./dist/leaflet-sidepanel.min.js"></script>
```

## Options

- panelPosition: _'left' (default)_ | 'right'
- hasTabs: _true (default)_ | false
- tabsPosition: _'top' (default)_ | 'right' | 'bottom' | 'left'
- darkMode: true | _false (default)_
- pushControls: true | _false (default)_

## Example

***Javascript***
```javascript
const panelRight = L.control.sidepanel('panelID', {
    panelPosition: 'right',
    tabsPosition: 'top',
    pushControls: true,
    darkMode: true
}).addTo(map);
```

***Html***
```html
<div id="panelID" class="sidepanel" aria-label="side panel" aria-hidden="false">
			<div class="sidepanel-inner-wrapper">
				<nav class="sidepanel-tabs-wrapper" aria-label="sidepanel tab navigation">
					<ul class="sidepanel-tabs">
						<li class="sidepanel-tab">
							<a href="#" class="sidebar-tab-link" role="tab" data-tab-link="tab-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
									<path fill-rule="evenodd"
										d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
								</svg>
							</a>
						</li>
                        [...]
					</ul>
				</nav>
				<div class="sidepanel-content-wrapper">
					<div class="sidepanel-content">
						<div class="sidepanel-tab-content" data-tab-content="tab-1">
							<p>Content 1.</p>
						</div>
                        [...]
					</div>
				</div>
			</div>
			<div class="sidepanel-toggle-container">
				<button class="sidepanel-toggle-button" type="button" aria-label="toggle side panel"></button>
			</div>
		</div>
```

# Links