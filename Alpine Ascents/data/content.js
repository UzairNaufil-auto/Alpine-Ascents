/* ============================================================
   Alpine Ascents — Content data
   Origin labels: requirement (from assignment doc),
   researched (verified against a source in docs/SOURCES.md),
   created (written by us).
   Do not invent facts.
   ============================================================ */

var AA_CONTENT = {
  history: {
    title: 'Since 1786.',
    eraLabel: 'Five eras of mountaineering',
    intro: 'Mountaineering, also called mountain climbing, is the sport of attaining, or attempting to attain, high points in mountainous regions, mainly for the pleasure of the climb. Although the term is often loosely applied to walking up low mountains that offer only moderate difficulties, it is more properly restricted to climbing in localities where the terrain and weather conditions present such hazards that, for safety, a certain amount of previous experience will be found necessary. For the untrained, mountaineering is a dangerous pastime.',
    // Origin: researched facts (verified in docs/SOURCES.md)
    eras: [
      {
        year: '1786',
        label: 'Mont Blanc first ascended',
        body: 'The first recorded ascent of Mont Blanc on 8 August 1786, by Dr Michel-Gabriel Paccard and Jacques Balmat, is widely taken as the beginning of modern mountaineering. It established the idea that high peaks were there to be climbed.',
        imgAlt: 'Illustrative image: early Alpine scene, Mont Blanc first ascent era, 1786'
      },
      {
        year: '1854–1865',
        label: 'The Golden Age of Alpinism',
        body: 'The Golden Age of Alpinism ran from Alfred Wills\'s ascent of the Wetterhorn in 1854 to Edward Whymper\'s first ascent of the Matterhorn in 1865, a decade in which many major peaks in the Alps saw their first ascents.',
        imgAlt: 'Illustrative image: Golden Age of Alpinism, 1854–1865, Alpine climbing'
      },
      {
        year: '1920s–1930s',
        label: 'Early Himalayan expeditions',
        body: 'The first mountaineering reconnaissance of Everest from Tibet\'s north side was in 1921, led by Charles Howard-Bury with George Mallory. The 1922 expedition used bottled oxygen for the first time and reached over 8,200 metres. In 1924, George Mallory and Andrew Irvine disappeared near the summit on 8 June.',
        imgAlt: 'Illustrative image: early Himalayan expedition, 1920s–1930s, Everest reconnaissance'
      },
      {
        year: '1953–1978',
        label: 'The Everest era',
        body: 'Edmund Hillary of New Zealand and Tenzing Norgay of Nepal made the first confirmed ascent of Mount Everest, 8,849 m, on 29 May 1953 at 11:30 a.m., in a British expedition led by John Hunt. In 1978, Reinhold Messner and Peter Habeler became the first to climb Everest without supplemental oxygen.',
        imgAlt: 'Illustrative image: Everest era, 1953–1978, first ascent of Everest'
      },
      {
        year: '1980s–present',
        label: 'Modern light-and-fast alpine style',
        body: 'Reinhold Messner made the first solo ascent of Everest on 20 August 1980. Modern alpine style favours small, self-sufficient teams moving fast from base to summit on a single push, in contrast to the large, supported expeditions of the earlier Everest era.',
        imgAlt: 'Illustrative image: modern light-and-fast alpine style, 1980s to now'
      }
    ]
  },

  types: {
    title: 'Four ways up.',
    typeLabel: 'Four broad styles',
    intro: 'Unlike most sports, mountaineering lacks widely-applied formal rules, regulations, and governance; mountaineers adhere to a large variety of techniques and philosophies when climbing mountains. Four broad styles are commonly recognised.',
    // Origin: created (descriptive text by us)
    types: [
      { name: 'Alpine climbing', body: 'Fast, light, and self-sufficient. A small team carries everything they need and moves quickly from base to summit and back, often on a single push. Favours minimal fixed gear and rapid movement.' },
      { name: 'Rock climbing', body: 'Focused on vertical rock faces and technical movement. Emphasises hand and foot placement, protection placed in the rock, and often short, intense pitches rather than long approaches.' },
      { name: 'Ice climbing', body: 'Climbing on frozen water or a combination of rock and ice. Requires ice axes, crampons, and protection placed in ice or rock. Common on waterfalls, hanging glaciers, and mixed alpine lines.' },
      { name: 'Expedition climbing', body: 'Slow, supported, and methodical. Large teams establish camps along the route, fix ropes, and make repeated carries to high altitude before the summit attempt. Used on the highest and most remote peaks.' }
    ]
  },

  techniques: {
    title: 'How it is done.',
    stepLabel: 'Four core skills',
    intro: 'Mountaineering combines hiking, climbing, and navigation across alpine terrain. The exact approach depends on the mountain, the season, and the team. Four core skills are central to any climb.',
    // Origin: created (descriptive text by us)
    steps: [
      { num: '01', name: 'Route finding', body: 'Study the mountain before you climb it. Read maps, guidebooks, and recent condition reports. Identify the line, the hazards, the descent, and the turnaround time.' },
      { num: '02', name: 'Anchoring', body: 'Place protection securely in rock, ice, or snow. A good anchor holds the weight of a climber or an impact, and gives the team a safe point to work from or to belay from.' },
      { num: '03', name: 'Belaying', body: 'Manage the rope for a climbing partner. A belayer controls the rope to catch a fall, gives slack as the climber moves, and takes in rope as they progress.' },
      { num: '04', name: 'Rappelling', body: 'Descend a rope to leave a route that has no safe down-climb. A controlled descent requires a proper anchor, a friction device, and attention to obstacles below.' }
    ]
  },

  shelter: {
    title: 'Where you sleep.',
    shelterLabel: 'Four kinds of shelter',
    intro: 'Expedition shelter ranges from light bivouacs to established mountain huts. Choosing the right shelter is a matter of conditions, logistics, and safety.',
    // Origin: created (descriptive text by us)
    shelters: [
      { name: 'Mountain hut', body: 'An established shelter in the mountains, often run by a club or cableway company. Provides a bed, food, and shared facilities — a comfortable base between stages.' },
      { name: 'Mountain tent', body: 'A lightweight bivouac shelter for expeditions above the snowline. A good tent is the difference between a restful night and an unsafe one in high conditions.' },
      { name: 'Snow cave', body: 'A shelter dug into or built from snow — a snow cave, quinzee, or trench. Uses the insulating properties of snow to provide protection from wind and cold.' },
      { name: 'Bivouac', body: 'A minimal overnight shelter with little or no tent, used when speed and weight matter. Often a trade-off between comfort and the ability to move fast.' }
    ]
  },

  hazards: {
    title: 'What can kill you.',
    hazardLabel: 'Four dangers',
    intro: 'The terrain and weather conditions present hazards that, for safety, a certain amount of previous experience will be found necessary. For the untrained, mountaineering is a dangerous pastime.',
    // Origin: created (descriptive text by us), with standard definitions
    hazards: [
      {
        title: 'Avalanche',
        body: 'Snow slopes can release without warning. Terrain, snowpack, and weather all contribute. Reading avalanche terrain and recognising unstable snow is a core survival skill.',
        imgAlt: 'Full-bleed image: avalanche slope, snow slide terrain'
      },
      {
        title: 'Crevasse',
        body: 'Hidden cracks in a glacier can be deep enough to swallow a person. Travel on glaciers with a rope, probe uncertain snow, and know how to perform a rescue.',
        imgAlt: 'Full-bleed image: crevasse, deep crack in a glacier, blue ice'
      },
      {
        title: 'Snow storm',
        body: 'Mountain weather changes fast. Storms, whiteouts, and prolonged cold can turn a straightforward route into a serious situation. Turn back when conditions exceed the team\'s ability.',
        imgAlt: 'Full-bleed image: snow storm, storm cloud, whiteout, low visibility'
      },
      {
        title: 'High altitude',
        body: 'The higher you go, the less oxygen is available. Acute mountain sickness, HAPE, and HACE are real risks above roughly 2,500 m, and they can be fatal if ignored.',
        imgAlt: 'Full-bleed image: high altitude, thin air, high peak, harsh light'
      }
    ]
  },

  records: {
    title: 'The numbers.',
    intro: 'Some of the figures that define the scale of the sport.',
    // Origin: requirement (from assignment doc), verified facts in SOURCES.md
    records: [
      { number: '8849', unit: 'm', label: 'Everest — highest point on Earth' },
      { number: '14', unit: '', label: 'Peaks above 8,000 m' },
      { number: '1786', unit: '', label: 'Mont Blanc — first recorded ascent' },
      { number: '8611', unit: 'm', label: 'K2 — the second highest' },
      { number: '1953', unit: '', label: 'Year of the first Everest summit' }
    ]
  },

  clubs: {
    title: 'Find your rope team.',
    intro: 'Clubs and organizations arrange mountaineering to various locations across the globe.',
    note: 'The map shows a selection of real mountaineering clubs. Pick a club card to focus the map on its location, or use Near Me to centre the map on your own location.',
    // Origin: researched (verified in docs/SOURCES.md)
    clubs: [
      { id: 'acm', name: 'Alpine Club', city: 'London', country: 'United Kingdom', founded: 1857, lat: 51.5074, lng: -0.1278, website: 'https://www.alpineclub.org.uk', note: 'The world\'s first mountaineering club, founded in London on 22 December 1857.', region: 'Alps' },
      { id: 'aac', name: 'American Alpine Club', city: 'Golden', country: 'United States', founded: 1902, lat: 39.7555, lng: -105.2211, website: 'https://americanalpineclub.org', note: 'Founded in 1902, the AAC is a nonprofit dedicated to climbing knowledge, advocacy, and access.', region: 'Rocky Mountains, Colorado' },
      { id: 'acc', name: 'Alpine Club of Canada', city: 'Calgary', country: 'Canada', founded: 1906, lat: 51.0447, lng: -114.0719, website: 'https://alpineclubofcanada.ca', note: 'Founded in 1906 in Winnipeg, the ACC is Canada\'s national mountaineering organization.', region: 'Canadian Rockies' },
      { id: 'nma', name: 'Nepal Mountaineering Association', city: 'Kathmandu', country: 'Nepal', founded: 1973, lat: 27.7172, lng: 85.3240, website: 'https://www.nepalmountaineering.org', note: 'Established on 1 November 1973, the NMA is Nepal\'s national alpine association and issues climbing permits for 27 peaks.', region: 'Himalaya, Nepal' }
    ]
  },

  stories: {
    title: 'Camps, told back.',
    intro: 'Success stories from organized camps — full-bleed photography under large pull quotes.',
    // Origin: researched (real, verifiable expeditions, in docs/SOURCES.md)
    items: [
      {
        quote: 'A rope team is only as strong as its weakest decision.',
        body: 'On the 1953 British Everest expedition, led by John Hunt, the team moved methodically through camps, fixing ropes and carrying loads to high altitude before the summit pair made their final push. No one broke the system, and everyone came home.',
        credit: '1953 British Mount Everest expedition — Edmund Hillary and Tenzing Norgay, first confirmed ascent, 29 May 1953',
        imgAlt: 'Full-bleed image: summit team, Everest, 1953 expedition (illustrative)'
      },
      {
        quote: 'The mountain allows you to come home.',
        body: 'Junko Tabei of Japan became the first woman to summit Everest on 16 May 1975, leading a Japanese Women\'s Everest Expedition. The ascent was part of a broader effort to open mountaineering to women and to prove that high-altitude climbing was not limited to a few.',
        credit: 'Japanese Women\'s Everest Expedition — Junko Tabei, first woman to summit Everest, 16 May 1975',
        imgAlt: 'Full-bleed image: climber on summit ridge (illustrative)'
      },
      {
        quote: 'The best camps are the ones you remember for the people, not the tents.',
        body: 'Reinhold Messner of Italy made the first solo ascent of Everest on 20 August 1980, alone on the mountain for days at a time, carrying everything he needed. The climb redefined what was thought possible at high altitude and showed the power of alpine style on the world\'s highest peak.',
        credit: 'Reinhold Messner — first solo ascent of Everest, 20 August 1980',
        imgAlt: 'Full-bleed image: expedition camp at dawn (illustrative)'
      }
    ]
  },

  gallery: {
    title: 'The proof.',
    intro: 'Summits, ridges, glaciers, gear, camp, alpenglow, and night sky.',
    // Origin: created structure; images to be supplied by user (placeholder for now)
    items: [
      { src: 'assets/images/gallery/01-summit-ridge.webp', alt: 'Gallery image: summit ridge panorama' },
      { src: 'assets/images/gallery/02-glacier-crevasse.webp', alt: 'Gallery image: glacier with crevasse' },
      { src: 'assets/images/gallery/03-ice-climbing-wall.webp', alt: 'Gallery image: ice climbing wall' },
      { src: 'assets/images/gallery/04-rock-face-climber.webp', alt: 'Gallery image: rock face with climber' },
      { src: 'assets/images/gallery/05-alpine-meadow.webp', alt: 'Gallery image: alpine meadow with peaks' },
      { src: 'assets/images/gallery/06-mountain-hut.webp', alt: 'Gallery image: mountain hut or refuge' },
      { src: 'assets/images/gallery/07-tent-snowcamp.webp', alt: 'Gallery image: tent on snow camp' },
      { src: 'assets/images/gallery/08-night-sky-peaks.webp', alt: 'Gallery image: night sky over peaks' },
      { src: 'assets/images/gallery/09-alpenglow-ridge.webp', alt: 'Gallery image: alpenglow on a ridge' },
      { src: 'assets/images/gallery/10-base-camp-tents.webp', alt: 'Gallery image: base camp tents' }
    ]
  },

  news: {
    title: 'Stop press.',
    intro: 'Latest developments in the field — stacked editorial cards with date metadata.',
    // Origin: researched (verified in docs/SOURCES.md) and created
    items: [
      {
        date: '2024',
        headline: 'Glacier retreat documented across the western Himalaya',
        body: 'A 2024 study in the Journal of Glaciology (doi:10.1017/jog.2024.19) documented glacier mass loss in the Ladakh region of the western Himalaya during 2000–2021, showing higher mass loss in recent decades than in the historical period.',
        imgAlt: 'News image: glacier retreat, western Himalaya'
      },
      {
        date: 'Ongoing',
        headline: 'Climbing gear and safety technology continue to evolve',
        body: 'Modern kernmantle ropes, spring-loaded camming devices, and avalanche safety gear — including airbags — have changed what climbers can do and how safely they can do it. UIAA and European (EN) equipment standards provide certification for climbing hardware.',
        imgAlt: 'News image: climbing gear and safety technology, ropes and protection'
      },
      {
        date: '2019',
        headline: 'Crowding on popular peaks sparks debate',
        body: 'In May 2019, widely circulated photographs showed long queues of climbers on the summit ridge of Mount Everest, sparking debate about overcrowding on the world\'s most popular high-altitude routes and the management of traffic on commercial expeditions.',
        imgAlt: 'News image: climbers on Everest summit ridge, 2019'
      }
    ]
  },

  guidelines: {
    title: 'Before you go.',
    intro: 'General guidelines for anyone preparing for the mountains.',
    // Origin: created (general mountaineering advice by us)
    items: [
      { text: 'Know the mountain before you go' },
      { text: 'Check the weather and the conditions, not just the forecast' },
      { text: 'Carry the gear you need for the worst conditions you might face' },
      { text: 'Turn back when the mountain is telling you to' },
      { text: 'Climb within your ability and within your team\'s ability' },
      { text: 'Never climb alone without a plan that accounts for it' }
    ]
  }
};
