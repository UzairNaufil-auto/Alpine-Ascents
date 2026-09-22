/* ==========================================================================
   Alpine Ascents: script.js
   1. DATA        all site content lives in this one object (edit text here)
   2. Helpers
   3. Renderers   build each section from DATA
   4. Interactions
   5. Motion      loader, hero scroll, smooth scroll
   6. Boot
   Images: put files in assets/images/<section>/<name>.jpg (or .png / .webp).
   Until a file exists, a labelled placeholder shows the exact name to use.
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     1. DATA
     ====================================================================== */
  var DATA = {

    history: [
      {
        year: 1786, era: "The first ascents", title: "The first ascent of Mont Blanc",
        text: "On 8 August 1786, Jacques Balmat and Michel-Gabriel Paccard reached the summit of Mont Blanc, the highest peak in the Alps. A prize offered by the scientist Horace-Bénédict de Saussure had encouraged the attempt. Many people date the beginning of mountaineering as a sport to this climb.",
        facts: ["Summit height: over 4,800 m", "Route: from Chamonix, France"],
        slot: "history/01-mont-blanc-first-ascent", alt: "Old print of Mont Blanc rising above the Chamonix valley"
      },
      {
        year: 1854, era: "The Golden Age of alpinism", title: "The Golden Age of alpinism",
        text: "Between 1854 and 1865, climbers, many of them British, made the first ascents of most of the great Alpine summits. The Alpine Club, the world's first mountaineering club, was founded in London in 1857. The age ended in July 1865 with the first ascent of the Matterhorn, when four members of the party of seven died on the descent.",
        facts: ["Alpine Club founded: 1857", "Matterhorn first climbed: 14 July 1865"],
        slot: "history/02-golden-age-alpine", alt: "Nineteenth-century climbers on an Alpine glacier with the Matterhorn behind"
      },
      {
        year: 1921, era: "Into the Himalaya", title: "Early Himalayan expeditions",
        text: "In 1921 a British reconnaissance expedition explored a way toward Mount Everest. In 1922, climbers using bottled oxygen reached over 8,300 m. In June 1924, George Mallory and Andrew Irvine disappeared high on the mountain, and historians still debate whether they reached the summit.",
        facts: ["1921: first Everest reconnaissance", "1924: Mallory and Irvine disappear near the summit"],
        slot: "history/03-early-himalayan-expedition", alt: "An early Himalayan expedition with porters and tents"
      },
      {
        year: 1953, era: "The Everest era", title: "The Everest era",
        text: "On 29 May 1953, Edmund Hillary and Tenzing Norgay made the first confirmed ascent of Mount Everest, on a British expedition led by John Hunt. By 1964 all fourteen of the world's eight-thousanders had been climbed. In 1978, Reinhold Messner and Peter Habeler reached the summit of Everest without supplemental oxygen, showing that it could be done.",
        facts: ["First Everest ascent: 29 May 1953", "All 14 eight-thousanders first climbed: 1950 to 1964", "First Everest ascent without oxygen: 1978"],
        slot: "history/04-everest-1953-era", alt: "Mid-twentieth-century expedition climbers high on Everest"
      },
      {
        year: 1980, era: "The 1980s to today", title: "Light, fast and modern",
        text: "In recent decades, small teams have increasingly climbed fast and light, carrying little and skipping fixed camps. In 1986, Reinhold Messner became the first person to climb all fourteen eight-thousanders. In 2019, Nirmal Purja climbed all fourteen in six months and six days.",
        facts: ["First to climb all 14: Messner, 1986", "All 14 in 6 months and 6 days: Purja, 2019"],
        slot: "history/05-modern-alpine-style", alt: "A modern climber on a snow ridge in light modern gear"
      }
    ],

    types: [
      {
        name: "Alpine climbing",
        text: "Climbing big mountain routes over mixed ground of snow, ice and rock. Climbers usually go fast and light, often reaching the summit and returning in one push or a few days.",
        facts: [["Terrain", "Snow, ice and rock at altitude"], ["Gear", "Ice axe, crampons, rope, harness, helmet"], ["Example", "Matterhorn and Eiger, Alps"]],
        slot: "types/01-alpine-climbing", alt: "Climbers on a snow and rock ridge in the Alps"
      },
      {
        name: "Rock climbing",
        text: "Climbing cliffs and crags using the rock's own holds, with a rope and protection to stop a fall. Routes range from short single pitches to walls that take days.",
        facts: [["Terrain", "Cliffs, crags and big walls"], ["Gear", "Rope, harness, helmet, nuts and cams, climbing shoes"], ["Example", "El Capitan, Yosemite, USA"]],
        slot: "types/02-rock-climbing", alt: "A climber on a steep granite wall"
      },
      {
        name: "Ice climbing",
        text: "Climbing frozen waterfalls, glacier ice and steep snow with an ice tool in each hand and spikes on the boots. Ice conditions change with the temperature, so timing matters.",
        facts: [["Terrain", "Frozen waterfalls and glacier ice"], ["Gear", "Two ice tools, crampons, ice screws, helmet"], ["Example", "Rjukan, Norway"]],
        slot: "types/03-ice-climbing", alt: "A climber with two ice axes on a frozen waterfall"
      },
      {
        name: "Expedition climbing",
        text: "Climbing the world's great mountains over weeks or months. Teams build a chain of camps, climb high and return to sleep low to acclimatise, and use supplemental oxygen on the highest peaks.",
        facts: [["Terrain", "Great ranges above 6,000 m"], ["Gear", "Fixed ropes, high camps, oxygen on the highest peaks"], ["Example", "Everest and K2, Himalaya and Karakoram"]],
        slot: "types/04-expedition-climbing", alt: "An expedition team climbing a high-altitude peak"
      }
    ],

    techniques: [
      {
        title: "Route finding",
        text: "Study the mountain before you climb it, using photos, maps, guidebooks and the day's conditions. Choose a line, find the hardest section, and note where you can escape.",
        points: ["Read the terrain: ridges, gullies, glaciers and cliff bands", "Know your turnaround time before you leave", "Recheck the route as you climb, because conditions change"],
        watch: "Following footprints or a line of ropes without checking where they lead.",
        slot: "techniques/01-route-finding", alt: "A climber studying a mountain ridge to plan a route"
      },
      {
        title: "Anchoring",
        text: "An anchor is the point that everything hangs from. Build it from solid pieces of rock, ice or snow, and make it redundant so that one failure does not mean disaster.",
        points: ["Use at least two independent, solid placements", "Share the load between the pieces", "Test the anchor before you trust it"],
        watch: "Relying on a single piece, or one placed in loose rock or rotten ice.",
        slot: "techniques/02-anchoring", alt: "Close-up of climbing protection placed in a rock crack"
      },
      {
        title: "Belaying",
        text: "Belaying manages the rope so that a fall is stopped short. The belayer's attention matters as much as the device in their hands.",
        points: ["Keep a brake hand on the rope at all times", "Agree clear signals with your partner", "Check knots, harness and device together before every climb"],
        watch: "Distraction, or slack left in the system.",
        slot: "techniques/03-belaying", alt: "A belayer feeding rope to a climber above"
      },
      {
        title: "Rappelling",
        text: "Sliding down a rope is a fast way off a mountain, and also where many accidents happen, often at the end of a long, tiring day.",
        points: ["Check the anchor and tie knots in the rope ends", "Add a backup, such as a friction hitch, below the device", "Test the system before you lean back on it"],
        watch: "Rushing at the anchor when you are tired.",
        slot: "techniques/04-rappelling", alt: "A climber rappelling down a rock face"
      }
    ],

    shelter: [
      {
        name: "Mountain tent",
        text: "A four-season mountain tent is built to shrug off wind and the weight of snow. Pitch it on flat, sheltered ground and guy it out well.",
        best: "Best for: camps on snow and glaciers.",
        slot: "shelter/01-mountain-tent", alt: "A mountain tent pitched on snow"
      },
      {
        name: "Snow cave",
        text: "Dug into a deep, stable snowdrift, a snow cave uses the snow itself as insulation. Keep a ventilation hole open and never dig where avalanches can reach.",
        best: "Best for: winter camps and emergencies where snow is deep.",
        slot: "shelter/02-snow-cave", alt: "The entrance to a snow cave"
      },
      {
        name: "Bivouac",
        text: "A bivouac means sleeping out with minimal shelter, such as a bivy sack or, in an emergency, whatever you carry. It is light and fast, but exposed.",
        best: "Best for: fast climbs and unplanned nights out.",
        slot: "shelter/03-bivouac", alt: "A climber in a bivy sack on a mountain ledge"
      },
      {
        name: "Mountain hut",
        text: "Huts run by alpine clubs and local operators offer beds and shelter high in the mountains, from simple refuges to staffed lodges. Book ahead in busy seasons.",
        best: "Best for: multi-day routes and treks in well-visited ranges.",
        slot: "shelter/04-mountain-hut", alt: "A stone mountain hut in a high alpine landscape"
      }
    ],

    hazards: [
      {
        name: "Avalanche",
        text: "A slab of snow releases and slides down a slope, often triggered by the climber. Most avalanches that catch people happen on slopes of about 30 to 45 degrees, especially after heavy snowfall or wind.",
        todo: ["Read the avalanche bulletin before you go", "Carry a transceiver, probe and shovel, and practise with them", "Avoid steep slopes after heavy snow, wind or fast warming"],
        slot: "hazards/01-avalanche", alt: "An avalanche or an avalanche-prone snow slope"
      },
      {
        name: "Crevasse",
        text: "Crevasses are deep cracks in glacier ice, often hidden under a thin bridge of snow. A fall can cause serious injury or trap the climber.",
        todo: ["Travel roped up on glaciers", "Probe and test snow bridges before crossing", "Learn crevasse rescue before you need it"],
        slot: "hazards/02-crevasse", alt: "A deep blue crevasse in a glacier"
      },
      {
        name: "Snow storm",
        text: "Storms and whiteouts cut visibility to a few metres, bring extreme wind and cold, and hide the route. Frostbite and hypothermia can develop quickly.",
        todo: ["Check the forecast and be ready to turn back", "Carry a map, compass and GPS and know how to use them", "Shelter early instead of moving on blind"],
        slot: "hazards/03-snow-storm", alt: "A snow storm and whiteout on a mountain"
      },
      {
        name: "High altitude",
        text: "Air pressure falls with height, so every breath carries less oxygen. Altitude illness can strike from about 2,500 m, and above about 8,000 m, the death zone, the body cannot fully acclimatise.",
        todo: ["Ascend gradually and rest to acclimatise", "Know the signs: headache, nausea, confusion, breathlessness at rest", "If symptoms get worse, go down: descent is the treatment"],
        slot: "hazards/04-high-altitude", alt: "A windswept summit ridge above the clouds"
      }
    ],

    records: [
      { value: 8849, from: 0, fmt: "comma", suffix: " m", label: "Mount Everest", note: "The highest mountain above sea level, at the height agreed by Nepal and China in 2020.", tone: "ocean" },
      { value: 8611, from: 0, fmt: "comma", suffix: " m", label: "K2", note: "The second highest mountain, on the Pakistan and China border.", tone: "ice" },
      { value: 14, from: 0, fmt: "plain", suffix: "", label: "Eight-thousanders", note: "Peaks above 8,000 m, all in the Himalaya and Karakoram.", tone: "black" },
      { value: 1953, from: 1880, fmt: "plain", suffix: "", label: "First Everest ascent", note: "Edmund Hillary and Tenzing Norgay reached the summit on 29 May.", tone: "black" },
      { value: 1975, from: 1900, fmt: "plain", suffix: "", label: "First woman on Everest", note: "Junko Tabei of Japan reached the summit on 16 May.", tone: "ocean" },
      { value: 1986, from: 1910, fmt: "plain", suffix: "", label: "All 14 eight-thousanders", note: "Reinhold Messner became the first person to climb them all.", tone: "ice" }
    ],

    clubs: [
      {
        name: "Alpine Club", city: "London", country: "United Kingdom", founded: 1857, lat: 51.5074, lng: -0.1278,
        region: "The Alps and mountain ranges worldwide", url: "https://www.alpine-club.org.uk",
        text: "The world's first mountaineering club, founded in London in 1857. Its members made many of the first ascents of the Golden Age of alpinism.",
        slot: "clubs/01-alps", alt: "The European Alps"
      },
      {
        name: "American Alpine Club", city: "Golden, Colorado", country: "United States", founded: 1902, lat: 39.7555, lng: -105.2211,
        region: "North America and beyond", url: "https://americanalpineclub.org",
        text: "A non-profit climbing organisation founded in 1902 and based in Golden, Colorado. It works for climbers and for the protection of climbing areas.",
        slot: "clubs/02-rocky-mountains-colorado", alt: "The Rocky Mountains in Colorado"
      },
      {
        name: "Alpine Club of Canada", city: "Canmore, Alberta", country: "Canada", founded: 1906, lat: 51.0884, lng: -115.3592,
        region: "The Canadian Rockies and Coast Mountains", url: "https://www.alpineclubofcanada.ca",
        text: "Founded in 1906, the club promotes climbing and mountain safety and runs a network of huts in the Canadian Rockies.",
        slot: "clubs/03-canadian-rockies", alt: "The Canadian Rockies"
      },
      {
        name: "Nepal Mountaineering Association", city: "Kathmandu", country: "Nepal", founded: 1973, lat: 27.7172, lng: 85.3240,
        region: "The Nepal Himalaya", url: "https://www.nepalmountaineering.org",
        text: "Nepal's national mountaineering association, founded on 1 November 1973. It provides climbing training and rescue support and works on mountain safety and conservation.",
        slot: "clubs/04-himalaya-nepal", alt: "The Himalaya in Nepal"
      }
    ],

    stories: [
      {
        pull: "One expedition, one route, two people on the summit.",
        title: "Everest, 1953", place: "Mount Everest, Nepal and Tibet", date: "29 May 1953", team: "British expedition led by John Hunt",
        text: "A large, carefully organised British expedition set up a chain of camps up the mountain. Edmund Hillary and Tenzing Norgay, the second pair sent for the summit, reached the top on 29 May 1953. The news reached Britain in time for the coronation of Queen Elizabeth II on 2 June.",
        link: ["Read more", "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition"],
        slot: "stories/01-summit-team", alt: "A team of climbers standing on a summit"
      },
      {
        pull: "She was buried by an avalanche, and still reached the top.",
        title: "Everest, 1975", place: "Mount Everest, Nepal", date: "16 May 1975", team: "Japanese Women's Everest Expedition",
        text: "Junko Tabei was part of an all-women Japanese team. Twelve days before the summit, an avalanche hit Camp II and buried her, and a Sherpa guide dug her out. She kept climbing, and on 16 May 1975 became the first woman to stand on the summit of Mount Everest.",
        link: ["Read more", "https://en.wikipedia.org/wiki/Junko_Tabei"],
        slot: "stories/02-base-camp", alt: "A busy expedition base camp with colourful tents"
      },
      {
        pull: "Ten climbers stopped just short of the top, to step onto it together.",
        title: "K2 in winter, 2021", place: "K2, Pakistan and China border", date: "16 January 2021", team: "Ten Nepali climbers from several teams",
        text: "K2 had never been climbed in winter. On 16 January 2021, ten Nepali climbers reached the summit together, the first winter ascent of the world's second highest mountain. Just below the top they paused, then walked the last steps as a group.",
        link: ["Read more", "https://en.wikipedia.org/wiki/K2"],
        slot: "stories/03-camp-at-dawn", alt: "Tents at dawn below a huge mountain"
      }
    ],

    gallery: [
      { slot: "gallery/01-summit-ridge", cap: "Summit ridge", alt: "A narrow summit ridge in snow" },
      { slot: "gallery/02-glacier", cap: "Glacier", alt: "A glacier winding between peaks" },
      { slot: "gallery/03-cloud-inversion", cap: "Above the clouds", alt: "Peaks rising above a sea of cloud" },
      { slot: "gallery/04-night-sky", cap: "Night sky", alt: "Stars over a mountain camp" },
      { slot: "gallery/05-gear", cap: "Gear check", alt: "Climbing gear laid out on the snow" },
      { slot: "gallery/06-camp", cap: "Camp", alt: "Tents pitched on a snowfield" },
      { slot: "gallery/07-ice-wall", cap: "Ice wall", alt: "A steep wall of blue ice" },
      { slot: "gallery/08-climber-silhouette", cap: "Climber on the skyline", alt: "A climber silhouetted on a ridge" },
      { slot: "gallery/09-valley-mist", cap: "Valley mist", alt: "Mist filling a mountain valley" },
      { slot: "gallery/10-snow-peak", cap: "Snow peak", alt: "A lone snow-covered peak" }
    ],

    news: [
      {
        tag: "Climate", dateLabel: "September 2026", iso: "2026-09",
        title: "A Swiss glacier is declared extinct",
        text: "Bella Tola Glacier, near Saint-Luc in Switzerland, was officially declared extinct in August 2026 after almost completely disappearing, following a thin winter snowpack and several summer heatwaves. Researchers at ETH Zurich and Vrije Universiteit Brussel have launched a public map showing when individual glaciers are projected to vanish. A UNESCO and WMO report in late 2025 found that glaciers worldwide have lost more than 6,500 billion tonnes of ice since 2000.",
        links: [["Phys.org, September 2026", "https://phys.org/news/2026-09-glacier-website-users-explore-worldwide.html"], ["Newcastle University, November 2025", "https://www.ncl.ac.uk/press/articles/latest/2025/11/unescoglacierlossreport/"]],
        slot: "news/01-glacier-retreat", alt: "A glacier shrinking back from a rocky valley"
      },
      {
        tag: "Safety technology", dateLabel: "April 2025", iso: "2025-04",
        title: "Rescue technology becomes compulsory on Everest",
        text: "After one of its deadliest seasons in 2023, Nepal required Everest climbers to carry rescue-aiding devices such as GPS tracking chips or reflectors. In 2025 it added a ban on solo expeditions and helicopter-mounted detectors that can find buried reflectors. One expert notes that helicopters rarely fly safely above about 7,000 m, so rescue near the summit still depends on people.",
        links: [["ABC News, April 2025", "https://www.abc.net.au/news/2025-04-26/mount-everest-new-safety-rules-guides-sherpa/105198130"], ["AFP via Malay Mail, March 2024", "https://malaymail.com/news/life/2024/03/14/poo-bags-and-trackers-nepal-orders-new-everest-rules/123326"]],
        slot: "news/02-climbing-gear-technology", alt: "Modern climbing and rescue gear"
      },
      {
        tag: "Crowding", dateLabel: "May 2026", iso: "2026-05",
        title: "Record permits on Everest, and a tougher front door",
        text: "Nepal issued a record 492 Everest permits for spring 2026, according to its Department of Tourism, after raising the permit fee for foreign climbers on the standard route from $11,000 to $15,000 on 1 September 2025. A new Tourism Bill would require climbers to have summited a 7,000 m peak in Nepal first. It had passed the upper house but, in June 2026 reports, was not yet law.",
        links: [["Kathmandu Post, 8 May 2026", "https://kathmandupost.com/money/2026/05/08/everest-season-sees-historic-permit-surge-testing-nepal-s-crowd-control-plans"], ["Travel Himalaya, 15 June 2026", "https://travelhimalayanepal.com/news/everest-7000m-peak-rule-new-bill-2026-06"]],
        slot: "news/03-crowded-mountain-route", alt: "A line of climbers on a crowded mountain route"
      }
    ],

    guidelines: [
      { t: "Train first", d: "Build your fitness and learn your skills on smaller mountains, with a qualified instructor, before you go high." },
      { t: "Read the sky and the snow", d: "Check the weather forecast and the avalanche bulletin every time. Conditions change fast." },
      { t: "Tell someone your plan", d: "Leave your route and your return time with someone you trust, and tell them when you are back." },
      { t: "Carry it and know it", d: "Take the essentials: map, compass, headlamp, first aid, warm layers, food, water and shelter. Know how to use every item." },
      { t: "Set a turnaround time", d: "Decide in advance when you will turn back, and keep to it, even if the summit is close." },
      { t: "Leave nothing behind", d: "Carry out all your waste, and respect the mountain, its wildlife and the people who live near it." }
    ],

    sources: [
      ["Mont Blanc (first ascent, 1786)", "https://en.wikipedia.org/wiki/Mont_Blanc"],
      ["Golden age of alpinism", "https://en.wikipedia.org/wiki/Golden_age_of_alpinism"],
      ["Alpine Club (UK)", "https://en.wikipedia.org/wiki/Alpine_Club_(UK)"],
      ["Matterhorn (first ascent, 1865)", "https://en.wikipedia.org/wiki/Matterhorn"],
      ["Mount Everest (height, early expeditions)", "https://en.wikipedia.org/wiki/Mount_Everest"],
      ["1953 British Mount Everest expedition", "https://en.wikipedia.org/wiki/1953_British_Mount_Everest_expedition"],
      ["Eight-thousander", "https://en.wikipedia.org/wiki/Eight-thousander"],
      ["K2 (height, 2021 winter ascent)", "https://en.wikipedia.org/wiki/K2"],
      ["Reinhold Messner", "https://en.wikipedia.org/wiki/Reinhold_Messner"],
      ["Junko Tabei", "https://en.wikipedia.org/wiki/Junko_Tabei"],
      ["Nirmal Purja", "https://en.wikipedia.org/wiki/Nirmal_Purja"],
      ["Avalanche", "https://en.wikipedia.org/wiki/Avalanche"],
      ["Crevasse", "https://en.wikipedia.org/wiki/Crevasse"],
      ["Altitude sickness", "https://en.wikipedia.org/wiki/Altitude_sickness"],
      ["American Alpine Club", "https://en.wikipedia.org/wiki/American_Alpine_Club"],
      ["Alpine Club of Canada", "https://en.wikipedia.org/wiki/Alpine_Club_of_Canada"],
      ["Nepal Mountaineering Association (official site)", "https://www.nepalmountaineering.org/about-nma"],
      ["Map tiles: Esri, HERE, Garmin and OpenStreetMap contributors", "https://www.esri.com/en-us/legal/terms/data-attributions"],
    ]
  };

  /* ======================================================================
     2. HELPERS
     ====================================================================== */
  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var lenis = null;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function safe(fn, name) {
    try { fn(); } catch (e) { console.error('[Alpine Ascents] ' + (name || fn.name) + ' failed:', e); }
  }

  var SIZES = {
    hero: '2400 x 1600 px', history: '2400 x 1500 px', types: '1200 x 1800 px', techniques: '1600 x 1067 px',
    shelter: '1600 x 1067 px', hazards: '2400 x 1500 px', stories: '2400 x 1350 px', gallery: '1600 px long side',
    news: '1200 x 800 px', clubs: '1200 x 800 px'
  };
  var EXTS = ['jpg', 'png', 'webp'];

  function imgBox(slot, alt, cls) {
    var sec = slot.split('/')[0];
    return '<span class="img ' + (cls || '') + '" data-slot="' + slot + '" data-size="' + (SIZES[sec] || '') + ' (.jpg .png .webp)" data-alt="' + esc(alt) + '"></span>';
  }

  /* load assets/images/<slot>.jpg, then .png, then .webp; show a labelled placeholder if none exists */
  function loadSlot(box, slot) {
    slot = slot || box.getAttribute('data-slot');
    box.setAttribute('data-slot', slot);
    box.classList.remove('is-missing', 'is-loaded');
    box.textContent = '';
    var img = document.createElement('img');
    img.alt = box.getAttribute('data-alt') || '';
    img.decoding = 'async';
    if (!box.hasAttribute('data-eager')) img.loading = 'lazy';
    var i = 0, base = 'assets/images/' + slot;
    img.onload = function () { box.classList.add('is-loaded'); };
    img.onerror = function () {
      i++;
      if (i < EXTS.length) { img.src = base + '.' + EXTS[i]; }
      else { img.onerror = null; box.classList.add('is-missing'); }
    };
    box.appendChild(img);
    img.src = base + '.' + EXTS[0];
  }
  function initImages(root) {
    $$('.img[data-slot]', root).forEach(function (box) {
      if (box.getAttribute('data-init')) return;
      box.setAttribute('data-init', '1');
      loadSlot(box);
    });
  }

  /* calls onActive(index) for whichever element crosses the middle band of the screen */
  function watchActive(els, onActive, margin) {
    if (!('IntersectionObserver' in window) || !els.length) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) onActive(els.indexOf(e.target)); });
    }, { rootMargin: margin || '-45% 0px -45% 0px', threshold: 0 });
    els.forEach(function (el) { io.observe(el); });
  }
  function toggleOn(list, i, cls) { list.forEach(function (el, j) { el.classList.toggle(cls || 'is-on', j === i); }); }

  /* ======================================================================
     3. RENDERERS
     ====================================================================== */
  function factList(arr) { return '<ul class="facts">' + arr.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>'; }

  function renderHistory(root) {
    var h = DATA.history;
    root.innerHTML =
      '<div class="hist">' +
        '<div class="hist__side" aria-hidden="true"><div class="hist__plate card">' +
          '<div class="hist__year">' + h[0].year + '</div>' +
          '<div class="hist__era">' + esc(h[0].era) + '</div>' +
          '<ol class="hist__dots">' + h.map(function (_, i) { return '<li' + (i === 0 ? ' class="is-on"' : '') + '></li>'; }).join('') + '</ol>' +
        '</div></div>' +
        '<div class="hist__list">' + h.map(function (e, i) {
          return '<article class="era card' + (i === 0 ? ' is-active' : '') + '">' + imgBox(e.slot, e.alt) +
            '<div class="era__body"><h3>' + esc(e.title) + '</h3><p>' + esc(e.text) + '</p>' + factList(e.facts) + '</div></article>';
        }).join('') + '</div>' +
      '</div>';
  }

  function renderTypes(root) {
    root.innerHTML = '<div class="types">' + DATA.types.map(function (t, i) {
      return '<article class="type' + (i === 0 ? ' is-active' : '') + '">' + imgBox(t.slot, t.alt, 'type__img') + '<div class="type__shade"></div>' +
        '<h3 class="type__vlabel"><button type="button" class="type__btn" aria-expanded="' + (i === 0) + '">' + esc(t.name) + '</button></h3>' +
        '<div class="type__content"><p class="type__title">' + esc(t.name) + '</p><p>' + esc(t.text) + '</p>' +
        '<dl class="dl">' + t.facts.map(function (f) { return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>'; }).join('') + '</dl></div></article>';
    }).join('') + '</div>';
  }

  function renderTechniques(root) {
    var t = DATA.techniques;
    root.innerHTML =
      '<div class="tech">' +
        '<div class="tech__stage"><div class="tech__frame">' +
          t.map(function (s, i) { return imgBox(s.slot, s.alt, i === 0 ? 'is-on' : ''); }).join('') +
          '<div class="tech__num" aria-hidden="true"><span class="tech__track">' + t.map(function (_, i) { return '<span>0' + (i + 1) + '</span>'; }).join('') + '</span></div>' +
        '</div></div>' +
        '<div class="tech__steps">' + t.map(function (s, i) {
          return '<article class="step' + (i === 0 ? ' is-on' : '') + '"><p class="step__n">Step 0' + (i + 1) + '</p><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p>' +
            factList(s.points) + '<p class="step__watch">Watch out: ' + esc(s.watch) + '</p></article>';
        }).join('') + '</div>' +
      '</div>';
  }

  function renderShelter(root) {
    var s = DATA.shelter;
    root.innerHTML =
      '<div class="shl">' +
        '<ul class="shl__list">' + s.map(function (it, i) {
          return '<li class="shl__item' + (i === 0 ? ' is-active' : '') + '"><button type="button" class="shl__btn" aria-expanded="' + (i === 0) + '"><span class="shl__name">' + esc(it.name) + '</span></button>' +
            '<div class="shl__desc"><div><p>' + esc(it.text) + '</p><p>' + esc(it.best) + '</p></div></div></li>';
        }).join('') + '</ul>' +
        '<div class="shl__stage"><div class="shl__frame">' + s.map(function (it, i) { return imgBox(it.slot, it.alt, i === 0 ? 'is-on' : ''); }).join('') + '</div></div>' +
      '</div>';
  }

  function renderHazards(root) {
    var h = DATA.hazards;
    root.innerHTML =
      '<div class="hz">' +
        '<div class="hz__stage">' +
          h.map(function (z, i) {
            return '<div class="hz__layer' + (i === 0 ? ' is-on' : '') + '">' + imgBox(z.slot, z.alt) + '<div class="hz__shade"></div>' +
              '<p class="hz__word" aria-hidden="true">' + esc(z.name) + '</p>' +
              '<div class="hz__card"><h3>' + esc(z.name) + '</h3><p>' + esc(z.text) + '</p><ul>' + z.todo.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div></div>';
          }).join('') +
          '<div class="hz__count" aria-hidden="true">1 / ' + h.length + '</div>' +
        '</div>' +
        '<div class="hz__steps" aria-hidden="true">' + h.map(function () { return '<div class="hz__step"></div>'; }).join('') + '</div>' +
      '</div>';
  }

  function renderRecords(root) {
    root.innerHTML = '<div class="rec">' + DATA.records.map(function (r) {
      return '<article class="rec__tile rec__tile--' + r.tone + '"><div class="rec__num" data-to="' + r.value + '" data-from="' + r.from + '" data-fmt="' + r.fmt + '">' +
        '<span class="rec__val">' + (r.fmt === 'comma' ? r.value.toLocaleString('en-US') : r.value) + '</span>' + (r.suffix ? '<span class="rec__unit">' + esc(r.suffix.trim()) + '</span>' : '') + '</div>' +
        '<div><h3 class="rec__label">' + esc(r.label) + '</h3><p class="rec__note">' + esc(r.note) + '</p></div></article>';
    }).join('') + '</div>';
  }

  function renderClubs(root) {
    root.innerHTML =
      '<div class="clubs">' +
        '<div class="clubs__map">' +
          '<div class="clubs__bar"><button type="button" class="btn" id="nearMe">Find the club nearest to me</button><p class="note-line" id="nearMsg" role="status"></p></div>' +
          '<div id="map" role="region" aria-label="Map of mountaineering clubs"></div>' +
        '</div>' +
        '<div class="club-list">' + DATA.clubs.map(function (c, i) {
          return '<article class="club card" tabindex="0" data-i="' + i + '"><h3>' + esc(c.name) + '</h3>' +
            '<p class="club__meta">' + esc(c.city) + ', ' + esc(c.country) + '. Founded ' + c.founded + '.</p>' +
            '<p>' + esc(c.text) + '</p><p class="club__meta" style="margin-top:8px">Areas: ' + esc(c.region) + '</p>' +
            '<a href="' + c.url + '" target="_blank" rel="noopener">Visit website</a></article>';
        }).join('') + '</div>' +
      '</div>';
  }

  function renderStories(root) {
    var s = DATA.stories;
    root.innerHTML =
      '<div class="hz st">' +
        '<div class="hz__stage">' +
          s.map(function (x, i) {
            return '<div class="st__layer' + (i === 0 ? ' is-on' : '') + '">' + imgBox(x.slot, x.alt) + '<div class="st__shade"></div>' +
              '<p class="st__pull">' + esc(x.pull) + '</p>' +
              '<div class="st__card"><h3>' + esc(x.title) + '</h3><p class="st__meta">' + esc(x.date) + '. ' + esc(x.place) + '.</p><p class="st__meta">' + esc(x.team) + '</p><p>' + esc(x.text) + '</p>' +
              '<a href="' + x.link[1] + '" target="_blank" rel="noopener">' + esc(x.link[0]) + '</a></div></div>';
          }).join('') +
          '<div class="hz__count" aria-hidden="true">1 / ' + s.length + '</div>' +
        '</div>' +
        '<div class="hz__steps" aria-hidden="true">' + s.map(function () { return '<div class="hz__step"></div>'; }).join('') + '</div>' +
      '</div>';
    /* the story layers reuse the hazard stage; give the layers their own class hooks */
    $$('.st__layer', root).forEach(function (l) { l.classList.add('hz__layer'); });
  }

  function renderGallery(root) {
    root.innerHTML = '<div class="gal">' + DATA.gallery.map(function (g, i) {
      return '<button type="button" class="g g' + (i + 1) + '" data-i="' + i + '" aria-label="Open photo: ' + esc(g.cap) + '">' + imgBox(g.slot, g.alt) + '<span class="g__cap">' + esc(g.cap) + '</span></button>';
    }).join('') + '</div>';
  }

  function renderNews(root) {
    root.innerHTML = '<div class="news">' + DATA.news.map(function (n, i) {
      return '<article class="ncard card" style="--n:' + i + '">' + imgBox(n.slot, n.alt) +
        '<div class="ncard__body"><div class="ncard__meta"><span class="tag tag--date"><time datetime="' + n.iso + '">' + esc(n.dateLabel) + '</time></span><span class="tag">' + esc(n.tag) + '</span></div>' +
        '<h3>' + esc(n.title) + '</h3><p>' + esc(n.text) + '</p>' +
        '<p class="ncard__src">' + n.links.map(function (l) { return '<a href="' + l[1] + '" target="_blank" rel="noopener">' + esc(l[0]) + '</a>'; }).join('') + '</p></div></article>';
    }).join('') + '</div>';
  }

  function renderGuidelines(root) {
    root.innerHTML = '<ol class="gl">' + DATA.guidelines.map(function (g, i) {
      return '<li><span class="gl__n">0' + (i + 1) + '</span><div><h3 class="gl__t">' + esc(g.t) + '</h3><p class="gl__d">' + esc(g.d) + '</p></div></li>';
    }).join('') + '</ol>';
  }

  function renderSources(root) {
    root.innerHTML = DATA.sources.map(function (s) { return '<li><a href="' + s[1] + '" target="_blank" rel="noopener">' + esc(s[0]) + '</a></li>'; }).join('');
  }

  var RENDER = {
    history: renderHistory, types: renderTypes, techniques: renderTechniques, shelter: renderShelter, hazards: renderHazards,
    records: renderRecords, clubs: renderClubs, stories: renderStories, gallery: renderGallery, news: renderNews,
    guidelines: renderGuidelines, sources: renderSources
  };
  function renderAll() {
    $$('[data-render]').forEach(function (el) {
      var fn = RENDER[el.getAttribute('data-render')];
      if (fn) safe(function () { fn(el); }, 'render ' + el.getAttribute('data-render'));
    });
  }

  /* ======================================================================
     4. INTERACTIONS
     ====================================================================== */
  function headH() { return $('.site-header').offsetHeight; }

  function goTo(hash) {
    var el = hash === '#top' ? null : $(hash);
    var y = el ? el.getBoundingClientRect().top + window.scrollY - headH() : 0;
    if (lenis) { lenis.scrollTo(y, { duration: 1.1, easing: function (t) { return 1 - Math.pow(1 - t, 4); } }); }
    else { window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' }); }
  }

  /* visitor counter, date/time/location ticker, mobile menu, anchor links, active menu item */
  function initChrome() {
    var visits = 1;
    try {
      visits = (parseInt(localStorage.getItem('aa_visits'), 10) || 0) + 1;
      localStorage.setItem('aa_visits', String(visits));
    } catch (e) { visits = 1; }
    var counter = $('#counter');
    counter.innerHTML = String(visits).padStart(6, '0').split('').map(function (d) { return '<b>' + d + '</b>'; }).join('');
    counter.setAttribute('aria-label', visits + ' visitors');

    /* ticker: duplicate the group for a seamless loop, then keep date, time and location fresh */
    var track = $('.ticker__track');
    var clone = $('.ticker__group').cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
    function setAll(sel, text) { $$(sel).forEach(function (n) { n.textContent = text; }); }
    function tickTime() {
      var d = new Date();
      setAll('.tk-date', d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }));
      setAll('.tk-clock', d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }
    tickTime();
    setInterval(tickTime, 1000);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        var lat = pos.coords.latitude, lng = pos.coords.longitude;
        setAll('.tk-loc', Math.abs(lat).toFixed(2) + (lat >= 0 ? ' N, ' : ' S, ') + Math.abs(lng).toFixed(2) + (lng >= 0 ? ' E' : ' W'));
        if (window.fetch) {
          fetch('https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=10&accept-language=en&lat=' + lat + '&lon=' + lng)
            .then(function (r) { return r.json(); })
            .then(function (j) {
              var a = j && j.address ? j.address : {};
              var place = a.city || a.town || a.village || a.county || a.state;
              if (place) setAll('.tk-loc', place + (a.country ? ', ' + a.country : ''));
            })
            .catch(function () { /* keep the coordinates */ });
        }
      }, function (err) {
        setAll('.tk-loc', err && err.code === 1 ? 'permission not given' : 'not available');
      }, { timeout: 10000, maximumAge: 600000 });
    } else {
      setAll('.tk-loc', 'not supported by this browser');
    }

    /* mobile menu overlay built from the desktop links */
    var links = $$('.index a');
    var overlay = document.createElement('nav');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    overlay.setAttribute('aria-label', 'Sections');
    overlay.innerHTML = links.map(function (a) { return '<a href="' + a.getAttribute('href') + '">' + a.textContent.trim() + '</a>'; }).join('');
    document.body.appendChild(overlay);
    var btn = $('.menu-btn');
    function setMenu(open) {
      overlay.classList.toggle('is-open', open);
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      if (lenis) { open ? lenis.stop() : lenis.start(); }
      else { doc.classList.toggle('no-scroll', open); }
    }
    btn.addEventListener('click', function () { setMenu(!overlay.classList.contains('is-open')); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1040 && overlay.classList.contains('is-open')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('is-open')) setMenu(false); });

    /* active menu item: set on click, and kept in sync while scrolling */
    var all = $$('.index a, .overlay a');
    function setActive(id) { all.forEach(function (a) { a.classList.toggle('is-active', !!id && a.getAttribute('href') === '#' + id); }); }
    document.addEventListener('click', function (e) {
      var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var h = a.getAttribute('href');
      if (h.length < 2) return;
      e.preventDefault();
      if (overlay.classList.contains('is-open')) setMenu(false);
      if (h !== '#top') setActive(h.slice(1));
      goTo(h);
    });
    var secs = [$('.hero-shell')].concat($$('main .sec'));
    watchActive(secs, function (i) { setActive(i === 0 ? null : secs[i].id); }, '-48% 0px -48% 0px');
  }

  function initHistory() {
    var root = $('.hist'); if (!root) return;
    var eras = $$('.era', root), dots = $$('.hist__dots li', root), yearEl = $('.hist__year', root), eraEl = $('.hist__era', root);
    var st = { v: DATA.history[0].year }, cur = -1;
    function set(i) {
      if (i === cur) return;
      cur = i;
      toggleOn(eras, i, 'is-active');
      dots.forEach(function (d, j) { d.classList.toggle('is-on', j <= i); });
      eraEl.textContent = DATA.history[i].era;
      var target = DATA.history[i].year;
      if (reduce || !window.gsap) { yearEl.textContent = target; st.v = target; return; }
      gsap.killTweensOf(st);
      gsap.to(st, { v: target, duration: 0.9, ease: 'power3.out', onUpdate: function () { yearEl.textContent = Math.round(st.v); } });
    }
    watchActive(eras, set);
    set(0);
  }

  function initTypes() {
    var items = $$('.type'); if (!items.length) return;
    function set(i) {
      toggleOn(items, i, 'is-active');
      items.forEach(function (el, j) { $('.type__btn', el).setAttribute('aria-expanded', String(j === i)); });
    }
    items.forEach(function (el, i) {
      $('.type__btn', el).addEventListener('click', function () { set(i); });
      $('.type__btn', el).addEventListener('focus', function () { set(i); });
      if (finePointer) el.addEventListener('mouseenter', function () { set(i); });
    });
  }

  function initTechniques() {
    var root = $('.tech'); if (!root) return;
    var steps = $$('.step', root), layers = $$('.tech__frame .img', root), track = $('.tech__track', root);
    function set(i) { toggleOn(steps, i); toggleOn(layers, i); track.style.setProperty('--i', i); }
    watchActive(steps, set);
    set(0);
  }

  function initShelter() {
    var items = $$('.shl__item'), layers = $$('.shl__frame .img'); if (!items.length) return;
    function set(i) {
      toggleOn(items, i, 'is-active'); toggleOn(layers, i);
      items.forEach(function (el, j) { $('.shl__btn', el).setAttribute('aria-expanded', String(j === i)); });
    }
    items.forEach(function (el, i) {
      $('.shl__btn', el).addEventListener('click', function () { set(i); });
      if (finePointer) el.addEventListener('mouseenter', function () { set(i); });
    });
    set(0);
  }

  /* hazards and stories: a sticky photo stage that changes as you scroll past invisible steps */
  function initStage(root) {
    if (!root) return;
    var layers = $$('.hz__layer', root), steps = $$('.hz__step', root), count = $('.hz__count', root);
    function set(i) { toggleOn(layers, i); if (count) count.textContent = (i + 1) + ' / ' + layers.length; }
    watchActive(steps, set, '-45% 0px -45% 0px');
    set(0);
  }

  function initRecords() {
    var nums = $$('.rec__num'); if (!nums.length) return;
    function fmt(n, mode) { return mode === 'comma' ? n.toLocaleString('en-US') : String(n); }
    function run(el) {
      var val = $('.rec__val', el), to = +el.getAttribute('data-to'), from = +el.getAttribute('data-from') || 0, mode = el.getAttribute('data-fmt');
      var t0 = null, dur = 1600;
      function frame(t) {
        if (t0 === null) t0 = t;
        var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
        val.textContent = fmt(Math.round(from + (to - from) * e), mode);
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    if (!('IntersectionObserver' in window) || reduce) return;   /* final numbers stay as written */
    nums.forEach(function (n) { $('.rec__val', n).textContent = fmt(+n.getAttribute('data-from') || 0, n.getAttribute('data-fmt')); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io.observe(n); });
  }

  function initClubs() {
    var mapEl = $('#map'); if (!mapEl) return;
    var cards = $$('.club');
    var msg = $('#nearMsg');
    if (!window.L) {
      mapEl.innerHTML = '<p class="map__fallback">The map could not load. Check your internet connection and reload the page. The clubs are still listed beside the map.</p>';
      $('#nearMe').addEventListener('click', function () { msg.textContent = 'The map is not available right now.'; });
      return;
    }
    var map = L.map(mapEl, { scrollWheelZoom: false, worldCopyJump: true, minZoom: 2 }).setView([30, 15], 2);
    map.on('click', function () { map.scrollWheelZoom.enable(); });
    mapEl.addEventListener('mouseleave', function () { map.scrollWheelZoom.disable(); });

    /* CARTO Positron tiles; if they fail to load, fall back to OpenStreetMap tiles shown in grey */
    var tileErrors = 0, usedFallback = false, layer;
    function addCarto() {
  layer = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: 'Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors, GIS User Community'
  });
  layer.addTo(map);
}
    addCarto();

    var markers = DATA.clubs.map(function (c, i) {
      var m = L.marker([c.lat, c.lng], {
        title: c.name, keyboard: true,
        icon: L.divIcon({ className: 'pin-wrap', html: '<span class="pin"></span>', iconSize: [26, 26], iconAnchor: [13, 13] })
      }).addTo(map);
      m.bindTooltip(c.name, { direction: 'top', offset: [0, -14], className: 'pin-tip' });
      m.on('click', function () { setActive(i, true); });
      return m;
    });

    function setActive(i, fly) {
      toggleOn(cards, i, 'is-active');
      markers.forEach(function (m, j) { var el = m.getElement(); if (el) { var p = el.querySelector('.pin'); if (p) p.classList.toggle('is-active', j === i); } });
      if (fly) {
        var c = DATA.clubs[i];
        if (reduce) map.setView([c.lat, c.lng], 5); else map.flyTo([c.lat, c.lng], 5, { duration: 1.2 });
      }
    }
    cards.forEach(function (el, i) {
      el.addEventListener('click', function (e) { if (e.target.tagName !== 'A') setActive(i, true); });
      el.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target === el) { e.preventDefault(); setActive(i, true); } });
    });

    function km(a, b, c, d) {
      var R = 6371, toRad = Math.PI / 180, dLat = (c - a) * toRad, dLng = (d - b) * toRad;
      var x = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(a * toRad) * Math.cos(c * toRad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
      return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
    }
    var youMarker = null;
    $('#nearMe').addEventListener('click', function () {
      if (!navigator.geolocation) { msg.textContent = 'Your browser does not support location. The map still works without it.'; return; }
      msg.textContent = 'Finding your location...';
      navigator.geolocation.getCurrentPosition(function (pos) {
        var lat = pos.coords.latitude, lng = pos.coords.longitude, best = 0, bestKm = Infinity;
        DATA.clubs.forEach(function (c, i) { var d = km(lat, lng, c.lat, c.lng); if (d < bestKm) { bestKm = d; best = i; } });
        if (youMarker) map.removeLayer(youMarker);
        youMarker = L.marker([lat, lng], { icon: L.divIcon({ className: 'pin-wrap', html: '<span class="pin is-you"></span>', iconSize: [26, 26], iconAnchor: [13, 13] }) }).addTo(map);
        youMarker.bindTooltip('You are here', { direction: 'top', offset: [0, -14], className: 'pin-tip' });
        var c = DATA.clubs[best];
        msg.textContent = 'Nearest club: ' + c.name + ', ' + c.city + ', about ' + Math.round(bestKm).toLocaleString('en-US') + ' km away.';
        setActive(best, false);
        map.fitBounds([[lat, lng], [c.lat, c.lng]], { padding: [60, 60], maxZoom: 6 });
      }, function (err) {
        msg.textContent = err && err.code === 1 ? 'Location permission was not given. The map still works without it.' : 'Your location could not be found. The map still works without it.';
      }, { timeout: 10000 });
    });
    setActive(0, false);
    setTimeout(function () { map.invalidateSize(); }, 400);
    window.addEventListener('load', function () { map.invalidateSize(); });
  }

  function initGallery() {
    var lb = $('#lb'); if (!lb) return;
    var box = $('.lb__img', lb), cap = $('.lb__cap', lb), closeBtn = $('.lb__close', lb), prev = $('.lb__prev', lb), next = $('.lb__next', lb);
    var cur = 0, opener = null;
    function show(i) {
      var n = DATA.gallery.length;
      cur = (i + n) % n;
      var g = DATA.gallery[cur];
      box.setAttribute('data-alt', g.alt);
      box.setAttribute('data-size', SIZES.gallery);
      box.setAttribute('data-eager', '1');
      loadSlot(box, g.slot);
      cap.textContent = g.cap + '  (' + (cur + 1) + ' of ' + n + ')';
    }
    function open(i, from) {
      opener = from;
      show(i);
      lb.hidden = false;
      if (lenis) lenis.stop(); else doc.classList.add('no-scroll');
      closeBtn.focus();
    }
    function close() {
      lb.hidden = true;
      if (lenis) lenis.start(); else doc.classList.remove('no-scroll');
      if (opener) opener.focus();
    }
    $$('.g').forEach(function (b, i) { b.addEventListener('click', function () { open(i, b); }); });
    closeBtn.addEventListener('click', close);
    prev.addEventListener('click', function () { show(cur - 1); });
    next.addEventListener('click', function () { show(cur + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(cur - 1);
      else if (e.key === 'ArrowRight') show(cur + 1);
      else if (e.key === 'Tab') {
        var f = [closeBtn, prev, next], i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
  }

  /* ======================================================================
     5. MOTION: loader, hero scroll expansion, smooth scroll
     ====================================================================== */
  function removeLoader() {
    doc.classList.remove('is-loading');
    var l = $('.loader');
    if (l && l.parentNode) l.parentNode.removeChild(l);
    if (lenis) lenis.start();
  }

  function initMotion() {
    var loader = $('.loader');
    if (!(window.gsap && window.ScrollTrigger)) { removeLoader(); return; }
    gsap.registerPlugin(ScrollTrigger);

    if (!reduce && window.Lenis) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    /* hero: the framed photo expands to full width while the photo and headline drift apart */
    var mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', function () {
      var shell = $('.hero-shell'), hero = $('.hero'), img = $('.hero__img'), title = $('.hero__title');
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: shell, start: 'top top',
          end: function () { return '+=' + Math.round(window.innerHeight * 0.6); },
          pin: true, scrub: 0.25, invalidateOnRefresh: true
        }
      });
      tl.fromTo(hero,
        { marginLeft: 28, marginRight: 28, marginTop: 24, marginBottom: 24, boxShadow: '10px 10px 0px 0px #0B5ED7' },
        { marginLeft: 0, marginRight: 0, marginTop: 0, marginBottom: 0, boxShadow: '0px 0px 0px 0px #0B5ED7', ease: 'power2.inOut', duration: 1 }, 0);
      tl.fromTo(shell, { paddingBottom: 40 }, { paddingBottom: 0, ease: 'power2.inOut', duration: 1 }, 0);
      tl.to(img, { yPercent: 12, ease: 'none', duration: 1 }, 0);
      tl.to(title, { yPercent: -34, ease: 'none', duration: 1 }, 0);
    });
    mm.add('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)', function () {
      var hero = $('.hero'), depth = $('.hero__depth');
      var qx = gsap.quickTo(depth, 'x', { duration: 0.9, ease: 'power3.out' });
      var qy = gsap.quickTo(depth, 'y', { duration: 0.9, ease: 'power3.out' });
      function move(e) {
        var r = hero.getBoundingClientRect();
        qx(((e.clientX - r.left) / r.width - 0.5) * 14);
        qy(((e.clientY - r.top) / r.height - 0.5) * 10);
      }
      function leave() { qx(0); qy(0); }
      hero.addEventListener('pointermove', move);
      hero.addEventListener('pointerleave', leave);
      return function () { hero.removeEventListener('pointermove', move); hero.removeEventListener('pointerleave', leave); };
    });

    /* intro: counter, black curtain lifts, headline rises from a mask */
    var lines = $$('.hero h1 .line__in');
    if (reduce) { removeLoader(); }
    else {
      if (lenis) lenis.stop();
      gsap.set(lines, { yPercent: 115 });
      gsap.set(['.hero__facts', '.cta'], { autoAlpha: 0, y: 24 });
      var countEl = $('#count'), bar = $('.loader__bar i'), p = { v: 0 };
      gsap.timeline()
        .to(p, {
          v: 100, duration: 1.5, ease: 'power2.inOut',
          onUpdate: function () {
            countEl.textContent = String(Math.round(p.v)).padStart(3, '0');
            bar.style.transform = 'scaleX(' + (p.v / 100) + ')';
          }
        })
        .to('.loader__inner', { autoAlpha: 0, duration: 0.25 }, '+=0.1')
        .add(function () { doc.classList.remove('is-loading'); if (lenis) lenis.start(); })
        .to(loader, { yPercent: -100, duration: 0.9, ease: 'power4.inOut', onComplete: function () { loader.style.display = 'none'; } })
        .to(lines, { yPercent: 0, duration: 1, stagger: 0.12, ease: 'power4.out' }, '-=0.45')
        .to(['.hero__facts', '.cta'], { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', clearProps: 'transform,opacity,visibility' }, '-=0.6');
    }

    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(function () { ScrollTrigger.refresh(); }); }
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  }

  /* if motion fails for any reason, make sure the page is visible and usable */
  function motionFallback() {
    if (window.gsap) { gsap.set($$('.hero h1 .line__in, .hero__facts, .cta'), { clearProps: 'all' }); }
    removeLoader();
  }

  /* ======================================================================
     6. BOOT
     ====================================================================== */
  function boot() {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    setTimeout(function () { if ($('.loader')) removeLoader(); }, 8000);   /* the loader can never get stuck */
    safe(renderAll, 'renderAll');
    safe(function () { initImages(document); }, 'initImages');
    safe(initChrome, 'initChrome');
    safe(initHistory, 'initHistory');
    safe(initTypes, 'initTypes');
    safe(initTechniques, 'initTechniques');
    safe(initShelter, 'initShelter');
    safe(function () { initStage($('#hazards .hz')); }, 'initHazards');
    safe(function () { initStage($('#stories .hz')); }, 'initStories');
    safe(initRecords, 'initRecords');
    safe(initClubs, 'initClubs');
    safe(initGallery, 'initGallery');
    try { initMotion(); } catch (e) { console.error('[Alpine Ascents] initMotion failed:', e); motionFallback(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
