Alpine Ascents

A single-page mountaineering website built as an Aptech E-Project. It covers the history, styles, techniques, hazards, records, clubs, success stories, gallery, news and guidelines of mountaineering, in an editorial neo-brutalist style with scroll-driven storytelling.

Live structure

Three files, no build step, no framework:

index.html   the page structure and content mounting points
style.css    all visual design (palette, type, layout, motion states)
script.js    all data, rendering and interactivity

Open index.html directly in a browser — no server required, though a local server (or hosting) is needed for the visitor-location lookup, since some browsers restrict geolocation on file://.

Tech stack
HTML5 / CSS3 / vanilla JavaScript — no React, Vue, jQuery or build tools.
GSAP + ScrollTrigger — the loader sequence and the hero's scroll-driven frame expansion.
Lenis — smooth inertial scrolling.
Leaflet + CARTO Positron tiles — the Clubs map, styled light monochrome, with an automatic fallback to greyed OpenStreetMap tiles if CARTO's tiles fail to load.
All three libraries load from public CDNs; the site still renders and works without them, just without the smooth-scroll and map.
Design system
Token	Value
Ice White	
#F2F8FB
Black	
#000000
Ocean Blue	
#0B5ED7
Display font	Anton (headlines, numerals)
Accent font	Bodoni Moda Italic (pull quotes, "Ascents")
Body font	Space Grotesk (text, UI, labels)

Visual language: 3–4px black borders, hard offset shadows (no blur), square corners, flat color blocks — neo-brutalist, newspaper-influenced editorial layout.

Where the data lives

All site content — history eras, club details, records, news items, gallery captions, sources — is in one DATA object at the top of script.js. There's no external JSON or database; edit the text there and it updates everywhere it's used automatically.

Images

Images are not bundled. Every photo slot looks for a file at:

assets/images/<section>/<slot-name>.jpg   (or .png / .webp)

If the file doesn't exist, a labelled placeholder shows the expected slot name and target size instead of breaking the layout. The exact list of every slot, its folder, its target size and orientation is in IMAGE-SLOTS.md, generated directly from the code so it can't fall out of sync.

Sections and their interaction pattern
#	Section	Pattern
1	History	Sticky year counter that animates as five real eras (1786–present) scroll past
2	Types	Four panels that expand on hover/click/focus
3	Techniques	Sticky photo frame + giant numeral, crossfading through four skills
4	Shelter	List where selecting an item crossfades its photo
5	Hazards	Full-bleed photo stage, black background, giant outline type per hazard
6	Records	Six tiles with count-up numbers on scroll into view
7	Clubs	Leaflet map + club cards, click-to-fly, "find nearest club" via browser geolocation
8	Stories	Same photo-stage pattern as Hazards, with pull quotes over three real expeditions
9	Gallery	Asymmetric photo mosaic with a full keyboard-accessible lightbox
10	News	Stacked cards, each with a dated, sourced real news item
11	Guidelines	Six numbered rules, transitioning into the footer
Accessibility and resilience
Every custom interactive element (type panels, shelter list, club cards, gallery lightbox) works with keyboard alone: Tab, Enter/Space, Arrow keys, Escape.
Respects prefers-reduced-motion: the loader is skipped and all content is shown immediately and fully, with no animation dependency for comprehension.
The map degrades to a plain-text message if tiles can't load; the site never blocks on a failed external resource.
Verified with zero console errors across desktop, tablet and mobile viewports.
Content sourcing

Historical facts, club founding details, and the three "Latest developments" news items are drawn from real, verifiable sources. Every source is listed in the footer's Sources list (18 citations). The three success stories use real events, names and dates; their narrative framing is written for the site.

Known limits
Google Fonts and the GSAP/Lenis/Leaflet CDNs require an internet connection on first load.
The visitor-location feature in the ticker needs geolocation permission and, in most browsers, https:// or localhost rather than a file:// path.
No video anywhere on the site, by deliberate choice — gallery items are photo-only, though the data structure could support video items later without rework.