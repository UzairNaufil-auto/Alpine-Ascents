# Alpine Ascents

**An educational, single-page mountaineering website, built as an Aptech E-Project.**

**Live site:** https://alpineascents1.netlify.app/

Alpine Ascents covers the history, styles, techniques, shelter, hazards, records, clubs, success stories, gallery, news and guidelines of mountaineering, in an editorial neo-brutalist style with scroll-driven storytelling. It brings information that is normally scattered across encyclopedias, club sites and news articles into one structured, beginner-friendly page.

## Project structure

Plain HTML, CSS and JavaScript. No build step, no framework, no backend.

```
Alpine Ascents/
├── index.html          page structure and content mounting points
├── css/
│   └── style.css       all visual design (palette, type, layout, motion states)
├── js/
│   └── script.js       all data, rendering and interactivity
├── assets/
│   └── images/         one folder per section:
│                       clubs, gallery, guidelines, hazards, hero, history,
│                       news, records, shelter, stories, techniques, types
└── docs/               project documentation
```

## Running it locally

Open `index.html` in a browser. For the location features (the ticker's place name and "find the club nearest to me"), run it from a local server or use the live site, because browsers restrict geolocation on `file://`:

```
python -m http.server
```

then open `http://localhost:8000`. An internet connection is needed on first load for the external libraries, fonts and map tiles.

## Tech stack

- **HTML5 / CSS3 / vanilla JavaScript.** No React, Vue, jQuery or build tools.
- **GSAP + ScrollTrigger** for the loader sequence and the hero's scroll-driven frame expansion.
- **Lenis** for smooth, inertial scrolling.
- **Leaflet** for the Clubs map, using **Esri Light Gray Canvas** tiles (no API key needed) and map data from OpenStreetMap contributors.
- **OpenStreetMap Nominatim** for the ticker's place name (reverse geocoding).
- **Google Fonts:** Anton, Bodoni Moda and Space Grotesk.

The libraries load from public CDNs. If one fails, the site still renders and works, just without that library's effect (smooth scrolling, animation or the map).

## Design system

| Token | Value |
|---|---|
| Ice White | `#F2F8FB` |
| Black | `#000000` |
| Ocean Blue | `#0B5ED7` |
| Display font | Anton (headlines, numerals) |
| Accent font | Bodoni Moda Italic (pull quotes, "Ascents") |
| Body font | Space Grotesk (text, UI, labels) |

**Visual language:** 3-4px black borders, hard offset shadows (no blur), square corners and flat colour blocks, in a newspaper-influenced editorial layout. The eleven sections alternate between the three colours so each stays visually distinct without extra dividers.

## Where the data lives

All site content (history eras, club details, records, news items, gallery captions and sources) is held in one `DATA` object at the top of `js/script.js`. There is no external JSON or database. Edit the text there and it updates everywhere it is used.

## Images

Images live in `assets/images/<section>/`. All photo slots, including the gallery, are filled. The images are AI-generated or taken from licence-free sources, so historical and story images illustrate the topic rather than being archival photographs of the exact moment. If a slot's file is ever missing, a labelled placeholder shows instead of a broken image.

## Sections and their interaction pattern

| # | Section | Pattern |
|---|---|---|
| 1 | History | Sticky year counter that animates as five real eras (1786 to present) scroll past |
| 2 | Types | Four panels that expand on hover, click or focus |
| 3 | Techniques | Sticky photo frame and giant numeral, crossfading through four skills |
| 4 | Shelter | List where selecting an item crossfades its photo |
| 5 | Hazards | Full-bleed photo stage on a black background, giant outline type per hazard |
| 6 | Records | Six tiles with count-up numbers when scrolled into view |
| 7 | Clubs | Leaflet map and club cards, click-to-fly, and "find the club nearest to me" using browser geolocation |
| 8 | Success Stories | Same photo-stage pattern as Hazards, with pull quotes over three real expeditions |
| 9 | Gallery | Asymmetric photo mosaic with a full keyboard-accessible lightbox |
| 10 | Latest Developments | Stacked cards, each a dated, sourced, real news item |
| 11 | Guidelines | Six numbered rules, flowing into the footer |

Fixed elements: a top strip with the visitor counter and logo plus an 11-link section navigation (a "Menu" button on mobile), and a bottom ticker showing the date, time, the visitor's approximate location (with permission) and mountaineering facts.

## Accessibility and resilience

- Every custom interactive element (type panels, shelter list, club cards, gallery lightbox) works with the keyboard alone: Tab, Enter/Space, Arrow keys and Escape.
- Respects `prefers-reduced-motion`: the loader is skipped and all content is shown immediately and fully, with no animation needed to understand it.
- If the map library fails to load, a plain-text message replaces the map. The site never blocks on a failed external resource.
- Responsive from phone to desktop with no unwanted sideways scrolling. No errors appeared in the browser console during automated test runs at desktop, tablet and phone sizes.

## Content sourcing

Historical facts, club founding details and the three "Latest Developments" news items come from real, verifiable sources. Every source is listed in the footer's Sources list (18 citations). The three success stories use real events, names and dates; their narrative framing was written for this site.

## Documentation

The `docs/` folder holds the project documentation: Problem Definition, Design Specifications, Assumptions and Limitations, Issues and Fixes, Functional Test Coverage, the flowchart and data flow diagram, and the Code Documentation, Design Document and User Guide.

## Known limits

- The visitor counter is stored in each visitor's own browser (`localStorage`), so it counts loads in that browser, not total visitors. A shared counter would need a backend.
- There are no user accounts, login or server-side features. The site is static by design.
- There is no video. Gallery items are photos only, a deliberate scope decision, though the data structure could support video items later without rework.
- The map uses Leaflet with Esri tiles instead of Google Maps, which would need an API key and a billing account.
- The ticker's place name comes from OpenStreetMap's free Nominatim service, which is rate-limited. If it fails, the ticker shows coordinates instead.
- Location features need geolocation permission and, in most browsers, `https://` or `localhost`.
- Facts were verified at build time. Fast-moving topics such as permits, rules and climate figures may change.
- This is an educational overview, not a substitute for real climbing instruction.

## Credits

- The hero's scroll-expanding frame was modelled on a GSAP template called Higher Ground, studied for its scroll behaviour and rebuilt with this project's own layout, colours, type and content.
- Animation: GSAP and ScrollTrigger. Smooth scrolling: Lenis. Maps: Leaflet, with tiles from Esri and map data from OpenStreetMap contributors. Fonts: Google Fonts.
