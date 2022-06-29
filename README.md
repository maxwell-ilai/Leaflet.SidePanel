# Leaflet.SidePanel
Slide side panel plugin for [Leaflet](http://leafletjs.com/).

## How to use
Include **leaflet-sidepanel.css** and **leaflet-sidepanel.js** in your page:
```html
<link rel="stylesheet" href="./dist/leaflet-sidepanel.css" />
<script src="./dist/leaflet-sidepanel.min.js"></script>
```

## Options

- panelPosition: _'left' (default)_ | 'right' [string]
- hasTabs: _true (default)_ | false [boolean]
- tabsPosition: _'top' (default)_ | 'right' | 'bottom' | 'left' [string]
- darkMode: true | _false (default)_ [boolean]
- pushControls: true | _false (default)_ [boolean]
- startTab: _1 (default)_ [number | string]

## Example

***Javascript***
```javascript
const panelRight = L.control.sidepanel('panelID', {
  panelPosition: 'right',
  hasTabs: false,
  tabsPosition: 'top',
  pushControls: true,
  darkMode: true,
  startTab: 'tab-5'
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor">
              <path fill-rule="evenodd" />
            </svg>
          </a>
        </li>
        <!-- [...] -->
      </ul>
    </nav>
    <div class="sidepanel-content-wrapper">
      <div class="sidepanel-content">
        <div class="sidepanel-tab-content" data-tab-content="tab-1">
          <p>Content 1.</p>
        </div>
        <!-- [...] -->
      </div>
    </div>
  </div>
  <div class="sidepanel-toggle-container">
    <button class="sidepanel-toggle-button" type="button" aria-label="toggle side panel"></button>
  </div>
</div>
```

## Requirements
Tested in leaflet 1.8.0

## Links
[Example Page](https://maxwell-ilai.github.io/Leaflet.SidePanel/examples/)

[Leaflet](https://leafletjs.com/)