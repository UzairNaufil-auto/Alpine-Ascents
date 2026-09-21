# Alpine Ascents — Project README

## What this is

A single-page editorial mountaineering website built as an Aptech E-Project. The site is **Alpine Ascents**, not Higher Ground — the reference site is inspiration only.

## Project status (as of 2026-09-20)

**Phase 1 complete.** All 11 sections built with placeholder images.

- Hero ✅ — framed photo, ALPINE/Ascents headline, fact row, circular CTA, scroll expansion, parallax, mouse depth
- History ✅ — 5 eras, sticky year, era body, era images (placeholder)
- Types ✅ — 4 panels, portrait images, expand on hover
- Techniques ✅ — sticky visual frame, 4 steps (01→04), technique images
- Shelter ✅ — 4 cards (tent, snow cave, bivouac, hut)
- Hazards ✅ — 4 warnings (avalanche, crevasse, snow storm, high altitude)
- Records ✅ — giant numbers, count-up animation
- Clubs ✅ — Leaflet + CARTO Positron map, 4 club pins, 4 club cards, Near Me button, geolocation
- Stories ✅ — 3 full-bleed slides with pull quotes (illustrative)
- Gallery ✅ — 10-image asymmetric grid, lightbox (Esc/click/arrow keys)
- News ✅ — 3 stacked editorial cards with date metadata
- Guidelines ✅ — 6 stacked statements
- Footer ✅ — wordmark, "Alpine Ascents" echo
- Ticker ✅ — date + live clock (10s) + location (geolocation + Nominatim fallback)
- Mobile menu ✅ — Menu+ button, full-screen overlay, Escape to close
- Visitor counter ✅ — localStorage, padded 4 digits
- Loader ✅ — black curtain, counter, progress bar, GSAP curtain wipe on load
- Reduced motion ✅ — ticker animation paused, transforms/transitions disabled

## Design language

- **Neo-brutalism + editorial typography + mountain photography + sticky storytelling + crossfades**
- Palette: Ice White `#F2F8FB`, Black `#000000`, Ocean Blue `#0B5ED7`
- Typography: Anton (display), Bodoni Moda Italic (accent), Space Grotesk (body/UI)
- Hard 3–4px black borders, hard offset shadows, no soft shadows, square corners

## Project structure

```
E:\Aptech E Project\Alpine Ascents
├── index.html          # single self-contained page (CSS + JS inline + defer script)
├── css/
│   ├── styles.css        # global tokens, base, loader, ticker, footer, section placeholders
│   ├── components.css    # header strip + index + overlay, hero
│   └── responsive.css    # viewport-specific tweaks (grows as sections are built)
├── js/
│   └── main.js           # init, counter, ticker (date+clock+location), menu, nav, lenis,
│                          # GSAP hero + section entrances, active link, lightbox, map,
│                          # build functions for all 11 sections
├── assets/
│   ├── images/           # per-section folders; WebP placeholders (owner-supplied images pending)
│   │   ├── hero/
│   │   ├── history/
│   │   ├── types/
│   │   ├── techniques/
│   │   ├── shelter/
│   │   ├── hazards/
│   │   ├── records/
│   │   ├── stories/
│   │   ├── gallery/
│   │   ├── news/
│   │   ├── clubs/
│   │   └── guidelines/
│   ├── icons/
│   └── diagrams/
├── data/                # (unused — all data inlined in js/main.js)
│   ├── clubs.js
│   └── content.js
└── docs/
    ├── IMAGE-SLOTS.md       # one line per slot: path, what to show, orientation, size, order
    ├── ASSET-MANIFEST.md    # image manifest (updated after real images placed)
    ├── README.md            # this file
    └── screenshots/
        ├── phase1-desktop.png   # 1280×720 desktop
        └── phase1-mobile.png    # 390×844 mobile (3.5× pixel ratio)
```

## Image placeholders

Every slot has a flat ice-white or ocean-blue WebP placeholder labeled with the slot name and target size. Placeholders let the layout and effects be built and tested while images are gathered. When real images arrive:

1. Back up originals to `assets/images/_originals/<section>/`
2. Convert to WebP at quality ~75, within weight limits in `docs/IMAGE-SLOTS.md`
3. Crop to slot shape, keep subject in frame — flag any crop that cuts off the subject
4. Apply one common light cool grade (slightly desaturated, cool)
5. Wire images in
6. Remove every placeholder including `hero/placeholder.svg`
7. Update manifest: filename, section, alt text (draft for confirmation), origin note ("images are AI-generated or license-free"). Caption History and Stories images as illustrative.
8. List any slots still empty

See `docs/IMAGE-SLOTS.md` for exact paths, sizes, and order per slot.

## Source-of-truth hierarchy

1. **Official requirement document** (`CONTEXT/Alpine Ascents.doc`) — highest authority
2. **ASSET-BRIEF.md** (`CONTEXT/ASSET-BRIEF.md`) — image spec and delivery order
3. **Current prototype** — existing visual/technical foundation to extend
4. **Design direction** defined in this README
5. **Higher Ground reference** — inspiration only, never copy

## Content: origin labels

Every piece of content in `js/main.js` is labeled by origin:

- **requirement** — from the assignment document (`CONTEXT/Alpine Ascents.doc`)
- **researched** — verified against a source (recorded in `docs/SOURCES.md`)
- **created** — written by us (descriptive/instructional copy)

Do not invent facts. If a fact has no source in `docs/SOURCES.md`, it is not verified.

### History eras (researched, verified)

| Era | Fact | Source |
|---|---|---|
| 1786 | First ascent of Mont Blanc, 8 August 1786, Paccard & Balmat | [Wikipedia](https://en.wikipedia.org/wiki/Mont_Blanc) |
| 1854–1865 | Golden Age of Alpinism, Wetterhorn (1854) → Matterhorn (1865) | [Wikipedia](https://en.wikipedia.org/wiki/Golden_Age_of_Alpinism) |
| 1920s–30s | 1921 Everest reconnaissance (Howard-Bury, Mallory); 1922 bottled oxygen, >8,200 m; 1924 Mallory & Irvine, 8 June | [Wikipedia](https://en.wikipedia.org/wiki/Mount_Everest) |
| 1953–1978 | Hillary & Norgay, 29 May 1953, 11:30 a.m., Hunt expedition; 1978 Messner & Habeler, no oxygen | [Wikipedia](https://en.wikipedia.org/wiki/Mount_Everest) |
| 1980s–now | Messner solo Everest, 20 Aug 1980; modern alpine style | [Wikipedia](https://en.wikipedia.org/wiki/Reinhold_Messner) |

### Club facts (researched, verified)

| Club | Founded | City | Source |
|---|---|---|---|
| Alpine Club | 1857 (22 Dec) | London | [alpineclub.org.uk](https://www.alpineclub.org.uk) |
| American Alpine Club | 1902 | Golden, CO | [americanalpineclub.org](https://americanalpineclub.org) |
| Alpine Club of Canada | 1906 (28 Mar) | Calgary (Winnipeg origin) | [alpineclubofcanada.ca](https://alpineclubofcanada.ca) |
| Nepal Mountaineering Association | 1973 (1 Nov) | Kathmandu | [nepalmountaineering.org](https://www.nepalmountaineering.org) |

**Corrections from earlier entries:**
- DAV (Deutscher Alpenverein): user stated founded in **1869, not 1862** — verified via DW and UIAA sources: founded 9 May 1869 in Munich. **Removed from clubs.js** since the user asked for 4 specific clubs (Alpine Club London, AAC, ACC, NMA) and did not list DAV.
- UIAA: user expressed doubt about UIAA facts — **removed from clubs.js** for the same reason. UIAA (founded 1932, Chamonix; HQ Bern, Switzerland) remains documented in `docs/SOURCES.md` as verified but excluded from the site per user's 4-club specification.

### Records (requirement document)

| Figure | Value | Source |
|---|---|---|
| Everest height | 8,849 m | Requirement doc (also [Wikipedia](https://en.wikipedia.org/wiki/Mount_Everest)) |
| K2 height | 8,611 m | Requirement doc + general reference |
| Peaks above 8,000 m | 14 | Requirement doc + [Wikipedia](https://en.wikipedia.org/wiki/Eight-thousander) |
| Mont Blanc first ascent | 1786 | Requirement doc + [Wikipedia](https://en.wikipedia.org/wiki/Mont_Blanc) |
| First Everest summit | 1953 | Requirement doc + [Wikipedia](https://en.wikipedia.org/wiki/Mount_Everest) |

### Stories (researched, verified real expeditions)

| Story | Expedition | Date | Source |
|---|---|---|---|
| Hillary & Norgay | 1953 British Everest expedition, John Hunt | 29 May 1953 | [Wikipedia](https://en.wikipedia.org/wiki/1953_British_Everest_expedition) |
| Junko Tabei | Japanese Women's Everest Expedition | 16 May 1975 | [Wikipedia](https://en.wikipedia.org/wiki/Junko_Tabei) |
| Reinhold Messner solo | First solo ascent of Everest | 20 August 1980 | [Wikipedia](https://en.wikipedia.org/wiki/Reinhold_Messner) |

**Important:** These stories use real expedition facts for the quote/credit/body, but the images are **illustrative placeholders**. The images show imagined scenes from these expeditions (which cannot be photographed today). Caption: "Illustrative image." This is documented in `IMAGE-SLOTS.md` and will appear in the final manifest.

### News (researched where dated, created where general)

| Item | Date | Source |
|---|---|---|
| Glacier retreat, western Himalaya | 2024 (study published) | [Journal of Glaciology](https://doi.org/10.1017/jog.2024.19) — Ladakh region, 2000–2021 |
| Climbing gear and safety technology | Ongoing | Created (general mountaineering equipment evolution) |
| Crowding on Everest summit ridge | May 2019 | Created (widely reported; photos circulated globally in May 2019) |

### Guidelines (created)

General mountaineering advice written by us. Not facts requiring sources.

## Maps: CARTO Positron + Leaflet

The requirement document (§4) says club locations shown "using GeoLocation API (eg. GoogleMaps)". Google Maps is an example, not a requirement. This project uses **Leaflet 1.9.4 + OpenStreetMap** with **CARTO Positron** tiles for the Clubs section:

- Tile URL: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`
- Attribution: "© OpenStreetMap contributors © CARTO"
- Club pins + cards with click-to-focus
- Near Me button using browser Geolocation API
- Graceful fallback if permission denied

See `docs/MAPS-NOTES.md` for tile source, attribution, and `file://` compatibility.

**Tested:** tiles load from localhost (`http://localhost:8080`); folder behavior (`file://`) generally works but some browser security settings/extensions may block HTTPS tiles — a local HTTP server is the reliable fallback. Nominatim reverse geocode responds.

## No video

Gallery is photography + lightbox only. **No video anywhere on the site.** The requirement document (§5) asks for "videos and pictures" in the gallery, which outranks the directive on this point. This is logged as a **known deviation**:

> Gallery video required by assignment — not implemented. Gallery is data-driven: each item in `AA_CONTENT.gallery.items` may be `{ type: 'photo', src, alt }` or `{ type: 'video', src, poster, alt }`. Video playback code is reserved but not written. If the assignment is later amended, add a video branch to the lightbox.

## Ticker

The ticker shows **date + live clock + location** (per requirement §"continuous scrolling ticker... current date, time, and location (hint: Use geolocation features of HTML5)").

- Date: formatted once on load ("Today: Sun, 20 Sept 2026")
- Clock: updated every 10s
- Location: browser Geolocation API → coordinates → best-effort reverse geocode via OpenStreetMap Nominatim (no key). Falls back to coordinates; falls back to a message if permission denied.

## Reduced motion

`prefers-reduced-motion: reduce` must leave the site coherent and functional. Animations are enhancements, not requirements.

## Browser support

Target: Chrome, Firefox, Safari, Edge. IE is listed in the requirement but is not a primary target for GSAP/ScrollTrigger/modern CSS — graceful fallback where needed.

## Run from a folder

The site must work when `index.html` is opened from a folder (`file://`). This means:

- Classic `<script defer>` files — no ES modules, no `import()`
- No `fetch()` for local data — all data is inlined in `js/main.js`
- External libs (GSAP 3.12.5, ScrollTrigger 3.12.5, Lenis 1.1.13, Leaflet 1.9.4) load over HTTPS; offline use requires those files be present locally
- Geolocation works on `file://` in most browsers; Nominatim reverse geocode needs network

## Known deviations

| Requirement | Implemented | Note |
|---|---|---|
| Gallery video | **No** | Logged above. Data-driven for future. |
| Google Maps | **No** | Leaflet + CARTO Positron + OSM instead. |
| Ticker time + location | **Yes** | Clock + geolocation in main.js. |
| Hero template placeholder | **Removed (pending owner photo)** | Cool-toned placeholder WebP shown during build; owner-supplied photo will replace. |
| Images | **Placeholders** | Owner supplying all images (AI-generated or license-free). Placeholders built and tested. |

## Build order (revised)

0. Discovery ✅ — read requirements, ASSET-BRIEF, prototype, reference; copied prototype to working dir
1. Architecture ✅ — file split, ticker enhancement, data inlining, hero placeholder, asset research (background), maps research (background)
1.5 Content pack + asset pack ✅ — verified content per section (inlined in main.js), image slots defined, 44 placeholder images generated
2. Foundation ✅ — all 11 sections built with placeholders, screenshot verification (desktop + mobile)
3. Core storytelling ✅ — Hero, History, Types, Techniques
4. Environmental/educational ✅ — Shelter, Hazards, Records
5. Interactive systems ✅ — Clubs (Leaflet), Stories
6. Editorial media ✅ — Gallery, News, Guidelines, footer
7. Final verification ✅ — desktop + mobile screenshots saved to `docs/screenshots/`

**Next:** Phase after images arrive — convert to WebP, apply grade, wire in, remove placeholders, update manifest, final verification, Phase 9 documentation.

## Phase 1.5 deliverables

| File | Status |
|---|---|
| `docs/IMAGE-SLOTS.md` | ✅ Written — one line per slot: path, what to show, orientation, target size, order |
| `docs/ASSET-MANIFEST.md` | ✅ Updated — placeholder rows + empty-slots list |
| `js/main.js` | ✅ All content inlined, all sections built, all placeholders wired |
| Placeholder images (44 WebP files) | ✅ Generated at target sizes with slot labels |
| `docs/screenshots/phase1-desktop.png` | ✅ 1280×720 |
| `docs/screenshots/phase1-mobile.png` | ✅ 390×844 |

## Documentation to add (Phase 9, after images)

Per ASSET-BRIEF.md, the following documentation is required:

1. **Problem definition** — what problem the site solves, who the audience is, why a single-page editorial site
2. **Design specifications** — visual language, typography, color, layout, responsive breakpoints, interaction patterns
3. **Flowcharts and data flow diagrams** — page flow (loader → hero → sections → footer), data flow (data in main.js → DOM builders → rendered HTML), map data flow (AA_CLUBS → Leaflet markers → popups), lightbox data flow
4. **Test data** — placeholder images as test data; club coordinates; ticker date/clock/location test cases; gallery lightbox test cases; Near Me geolocation test cases (allowed / denied / unavailable)
5. **Installation instructions** — how to open from a folder, how to run a local server, how to replace placeholder images, how to add new sections, dependencies (GSAP, ScrollTrigger, Lenis, Leaflet — all CDN), how to deploy
6. **ReadMe** listing assumptions:
   - Images are AI-generated or license-free (owner-supplied)
   - Gallery video was deliberately left out (known deviation, logged)
   - Maps use Leaflet + CARTO Positron + OSM, not Google Maps
   - Ticker shows date + live clock + location
   - All content facts verified against sources in `docs/SOURCES.md`
   - History and Stories images are illustrative (show historical scenes that cannot be photographed)

*Last updated: 2026-09-20*
