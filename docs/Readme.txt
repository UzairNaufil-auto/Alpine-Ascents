README
Alpine Ascents

A single-page mountaineering website built as an Aptech E-Project. It covers the history, styles, techniques, hazards, records, clubs, success stories, gallery, news and guidelines of mountaineering, in an editorial neo-brutalist style with scroll-driven storytelling.

Live site: https://alpineascents1.netlify.app/
Github Page: https://github.com/UzairNaufil-auto/Alpine-Ascents

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
Leaflet — the map library, using Esri's Light Gray Canvas tiles for the Clubs map, which need no API key.

These libraries load from public CDNs; the site still renders and works without them, just without the smooth-scroll, animation and map.

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

Images are stored in assets/images/<section>/, matching the names in IMAGE-SLOTS.md. All slots, including the gallery, are filled. Images are AI-generated or license-free rather than photographs of the exact events, expeditions or people described; historical and story images illustrate the topic.

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
The map shows a plain-text message if the map library fails to load; the site never blocks on a failed external resource.
No errors appeared in the browser console during automated test runs at desktop, tablet and phone sizes.
Content sourcing

Historical facts, club founding details, and the three "Latest developments" news items are drawn from real, verifiable sources. Every source is listed in the footer's Sources list. The three success stories use real events, names and dates; their narrative framing is written for the site.

Known limits
Google Fonts, GSAP/Lenis and the Esri map tiles require an internet connection on first load.
The visitor-location feature in the ticker needs geolocation permission and, in most browsers, https:// or localhost rather than a file:// path.
No video anywhere on the site, by deliberate choice — gallery items are photo-only, though the data structure could support video items later without rework.
The visitor counter is stored per-browser, not shared across visitors.

See Assumptions and Limitations for the full list of assumptions made during this project.

Problem Definition
Project Title

Alpine Ascents — An Educational Mountaineering Website

Background

Mountaineering is a specialized sport with its own history, techniques, equipment, hazards and community structures, but this information is scattered across many different sources: encyclopedias, club websites, gear manufacturer blogs and news articles. There is no single, structured, beginner-friendly resource that brings the history, styles, safety knowledge and current developments of mountaineering together in one place.

Problem Statement

Someone with a beginner-to-intermediate interest in mountaineering — a student, a hobbyist, or someone considering the sport — has no single website that:

Explains the sport's history and how it evolved into its modern form
Distinguishes between the different styles and types of mountaineering
Introduces the core techniques and safety practices without requiring prior expertise
Explains the hazards involved and how to reduce risk
Lists real mountaineering clubs and organizations a beginner could actually join or contact
Documents real records and milestones with verified facts
Reports on recent, real developments in the sport
Presents this information in a way that is engaging to explore rather than a wall of text
Objective

To design and develop a single-page educational website, Alpine Ascents, that presents mountaineering knowledge across eleven structured sections (History, Types, Techniques, Shelter, Hazards, Records, Clubs, Success Stories, Gallery, Latest Developments, Guidelines).
Using scroll-driven interaction and visual storytelling to make the content easier to explore and retain, while keeping every factual claim
traceable to a real source.

Scope

In scope:

A responsive, single-page website covering all eleven required sections
An interactive map showing real mountaineering clubs, with geolocation-based "nearest club" lookup
A photo gallery with lightbox viewing
A live ticker showing date, time and (with permission) the visitor's approximate location
A visitor counter
Verified factual content with a visible source list

Out of scope:

Video content (a deliberate design decision, documented as a known deviation from the brief; the data structure supports adding it later without rework)
User accounts, comments, or any server-side/database functionality
E-commerce or booking functionality for clubs or expeditions
Real-time multi-user data (the visitor counter and location display are local to each visitor's own browser, not a shared server-side count)
Target Users
Students studying or researching mountaineering as a topic
Beginners considering the sport who want an accessible overview
Anyone looking for a quick reference on mountaineering history, hazards, or verified records
Proposed Solution

A static HTML/CSS/JavaScript website (no backend, no build tools) styled in a neo-brutalist editorial visual language, using GSAP and Lenis for scroll-driven animation and Leaflet with Esri Light Gray Canvas tiles for an interactive club map.
Content is centralized in a single data structure in the script file, sourced from verifiable references (Wikipedia, official club websites, and recent verified news articles), 
with every source listed in the site's footer.

Deliverables
A working, responsive website (index.html, style.css, script.js)
Supporting documentation (this problem definition, design specifications, flowchart and data flow diagram, an issue log with test coverage, and a ReadMe listing assumptions and limitations)
A complete set of site images, including the gallery