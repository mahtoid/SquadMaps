# Version 3 - NextJS (June 2026 - PRESENT)

Complete rewrite on NextJS

---

### 3.1.0 (20/06/2026)

#### Added

- Construction Calculator
- Custom Shortcuts (can customise from keyboard shortcuts screen)
- Multi-Mortar Support (with ability to select and mix different mortar weapon types)

#### Fixed

- Mestia RAAS v1 and Sumari RAAS v1 lanes not displaying
- Squad server sync not cleaning up previous servers correctly

#### Improved

- Added Al Basrah Heightmap for LOS
- Minor styling improvements

---

### 3.0.3 (13/06/2026)

#### Fixed

- Following a server from the server browser no longer immediately navigates back instead of loading the server

#### Changed

- Live server list sync interval: 30s → 5s (background sync on server)
- Followed server refresh interval: 30s → 10s (while viewing `?server=`)
- Line of Sight enabled/disabled state persists for the session

---

### 3.0.2 (11/06/2026)

#### Fixed

- Dialogs add history entries to support browser back/forward
- Proxy resolve for old links to redirect

#### Changed

- Layout on 'Change Map' and 'Layer Selection' for better readability

---

### 3.0.1 (10/06/2026)

#### Fixed

- Dialogs add history entries to support browser back/forward
- Default stroke colour (for brush) not rendering as green
- Heightmaps incorrectly requesting `.webp` instead of `.json`
- Terrain / Topology basemaps not displaying on Seed and Skirmish layers

#### Changed

- Capture Zones now appear at a closer zoom level
- Right-click interactive context menu closes on map pan
- Heatmap now stores `layerId` internally (no functionality change currently)
- Disable mortar usage when brush tool is active

#### Improved

- 'Squad Servers' column sorting
- 'Live Server' section within 'Change Map' now hidden on Mobile
- Server panel closes on background click

---

### 3.0.0 (08/06/2026)

Complete rewrite of SquadMaps on NextJS - faster, more capable, and built to become your tactical companion in-game.

#### New in 3.0

- **Live Servers** - browse Squad servers, open the active layer in one click, and follow a server so the map updates when the match changes
- **Line of Sight** (beta) - place an observer on the map and see which ground is visible from that position
- **Sonar** - community heatmaps for common placements (weapons, targets, HABs, FOB radios)
- **Interactive Strategy map** - draw markers, paths, circles, and text on the map; share your setup via link or `.squadmaps` file
- **Team Intel** - track vehicles and commander abilities, mark assets as destroyed with respawn timers, compare teams side by side, and pin a live asset monitor on the map
- **Command palette** - jump to maps, servers, panels, share actions, and common toggles from one search bar (`⌘K` / `Ctrl+Alt+K`)
- **Shareable links** - bookmark map, layer, team picks (`?t1` / `?t2`), and tactical overlays in a single URL
- **Keyboard shortcuts** - quick access to panels, map tools, mortar controls, and more (cheatsheet available `⌘⌥` / `Ctrl+Alt+/`)
- **Colour-blind mode** - higher-contrast lane and capture-point colours for easier reading
- **Open community hub** - contribute translations, report bugs, and request features on GitHub

#### Improved

- **Full UI redesign** - responsive sidebar and tactical panels for overlays, strategy, mortar, and intel
- **RAAS / Invasion** - lane prediction with probability indicators, lane highlighting on hover, and auto-complete as flags are taken; updated from the latest Squad map data pipeline
- **Mortar calculator** - heightmap-aware ballistics, spread and damage overlays, grid coordinates, multiple target markers, and grid-coordinate target entry; share placements via link or file
- **Map overlays** - military grid, capture zones, protection zones, vehicle spawn pads, and playable border
- **Map views** - standard, terrain, and topographic basemaps, with opacity, brightness, and grayscale controls
- **Translations** - English (reference), Chinese (`zh-CN`), and Ukrainian (`ua`); (German, French and Russian are in progress)

#### Fixed

- Smoother map zooming and snappier overlay rendering on large maps

---

# Version 2 - React (January 2024 - May 2026)

Modern React rewrite with Leaflet map layers, RAAS lane prediction, search, i18n, and later a mortar calculator.

---

### 2.9.0 (04/10/2025)

#### Added

- Squad v9.0 game data update

---

### 2.8.0 (14/09/2025)

#### Added

- Game data and layer refresh

---

### 2.7.1 (20/12/2024)

#### Fixed

- RAAS prediction fixes

---

### 2.7.0 (06/12/2024)

#### Added

- Squad v8.2 game data update

---

### 2.6.1 (20/10/2024)

#### Changed

- Updated RAAS and Invasion lane data for Squad v8.1

---

### 2.6.0 (25/09/2024)

#### Added

- Squad v8.1 game data update

---

### 2.5.0 (08/07/2024)

#### Fixed

- Search bug fixes
- Mortar calculator bug fixes

---

### 2.4.2 (29/06/2024)

#### Fixed

- Mobile viewport and unit-select fixes
- Leaflet tile keepBuffer and performance tuning
- Deploy script improvements

---

### 2.4.1 (26/06/2024)

#### Added

- Squad v8.0.1 data update

#### Fixed

- Mobile and mortar QoL improvements

---

### 2.4.0 (12/06/2024)

#### Added

- Squad v8.0 game data update
- RAAS and Invasion lane data for v8
- Chinese (`zh-CN`) translation updates

---

### 2.3.0 (12/05/2024)

#### Added

- Mortar calculator - first public release on v2
- Mortar and target placement on the map
- Weapon select, time-of-flight, spread ellipse
- Heightmap-aware calculations
- Mortar settings dialog and focus mode

---

### 2.2.0 (20/04/2024)

#### Added

- Squad v7.3 game data update
- Map unit search

---

### 2.1.0 (11/02/2024)

#### Added

- Squad v7.1 game data update

#### Fixed

- Jensen's Range wrong team flags
- Map re-centering issues
- Vehicle list overflow
- Capture points showing undefined
- Dual-objective lane probabilities

#### Changed

- Layer ordering improvements
- AAS team naming fixes
- German hotkeys adjustments
- UI reset behavior improvements
- Chinese translations

---

### 2.0.0 (28/01/2024)

Official v2 launch at squadmaps.com.

#### Added

- React + Leaflet redesign
- RAAS/Invasion lane prediction
- Layer intelligence system
- Map search and filtering
- i18n system
- Protection zones
- Mobile improvements

---

### 2.0.0-beta (07/11/2023)

Public beta at beta.squadmaps.com.

#### Added

- Initial v2 map system
- Early RAAS/Invasion work
- Gamemode framework
- Search + i18n foundation

---

# Version 1 - Classic (2017–2023)

Original static site era.

---

### 1.final (19/08/2023)

#### Added

- Chinese localisation
- Contributor modal

---

### 1.5.0 (27/06/2023)

#### Added

- Squad v5 data update

---

### 1.4.x series (2023)

#### Changed

- v4.x updates, transfers, and patch syncs

---

### Earlier (2017–2022)

- 2017 initial launch
- v10–v12 syncs
- Data restructuring
- WebP + performance updates
- SquadLanes integration era