/* ============================================================
   Alpine Ascents — main.js
   Builds all 11 sections from AA_CONTENT + AA_CLUBS.
   AA_CONTENT is loaded from data/content.js.
   AA_CLUBS is loaded from data/clubs.js.
   Both are executed as classic <script> tags before this file runs.
   Placeholder images are flat ice-white / ocean-blue WebP
   boxes labelled with the slot name and target size.
   ============================================================ */

/* AA_CONTENT and AA_CLUBS come from external .js data files.
   They are NOT inlined here — see data/content.js and data/clubs.js. */

/* ============================================================
   HELPERS
   ============================================================ */
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){
  return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];
}); }
function mkEl(tag, cls, txt){
  var el = document.createElement(tag);
  if (cls) el.className = cls;
  if (txt != null) el.textContent = txt;
  return el;
}
function imgSlotFallback(label){
  return '<div class="img-slot-label">' + esc(label) + '</div>';
}
function pad(n){ return n < 10 ? '0' + n : '' + n; }

/* ============================================================
   BUILDER — History (5 eras)
   ============================================================ */
function buildHistory(){
  var c = AA_CONTENT.history;
  var wrap = document.getElementById('history-eras');
  if (!wrap || !c) return;
  wrap.innerHTML = '';
  if (c.intro){
    var intro = mkEl('p', 'history__intro', c.intro);
    wrap.appendChild(intro);
  }
  c.eras.forEach(function(era){
    var card = mkEl('div', 'history__card');
    var y = mkEl('div', 'history__year', era.year);
    var h = mkEl('div', 'history__label', era.label);
    var b = mkEl('div', 'history__body');
    b.textContent = era.body;
    var imgWrap = mkEl('div', 'img-slot wide');
    var img = document.createElement('img');
    img.src = 'assets/images/history/' + era.img + '.webp';
    img.alt = era.imgAlt;
    img.onerror = function(){ imgWrap.innerHTML = imgSlotFallback(era.year + ' — 16:9'); };
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);
    card.appendChild(y);
    card.appendChild(h);
    card.appendChild(b);
    wrap.appendChild(card);
  });
}

/* ============================================================
   BUILDER — Types (4 panels)
   ============================================================ */
function buildTypes(){
  var c = AA_CONTENT.types;
  var grid = document.getElementById('types-grid');
  if (!grid || !c) return;
  grid.innerHTML = '';
  c.types.forEach(function(t){
    var panel = mkEl('div', 'type__panel');
    var imgWrap = mkEl('div', 'img-slot');
    var img = document.createElement('img');
    img.src = 'assets/images/types/' + t.img + '.webp';
    img.alt = t.imgAlt;
    img.onerror = function(){ imgWrap.innerHTML = imgSlotFallback(t.name + ' — 1:1'); };
    imgWrap.appendChild(img);
    var h = mkEl('h3', 'type__name', t.name);
    var b = mkEl('p', 'type__body', t.body);
    panel.appendChild(imgWrap);
    panel.appendChild(h);
    panel.appendChild(b);
    grid.appendChild(panel);
  });
}

/* ============================================================
   BUILDER — Techniques (visual + 4 steps)
   ============================================================ */
function buildTechniques(){
  var c = AA_CONTENT.techniques;
  var frame = document.getElementById('techniques-frame');
  if (!frame || !c) return;
  var visual = document.getElementById('techniques-visual');
  if (visual){
    var img = document.createElement('img');
    img.src = 'assets/images/techniques/' + c.steps[0].img + '.webp';
    img.alt = c.steps[0].imgAlt;
    img.onerror = function(){ visual.innerHTML = imgSlotFallback('route finding — 16:9'); };
    visual.appendChild(img);
  }
  var steps = document.getElementById('techniques-steps');
  if (!steps) return;
  steps.innerHTML = '';
  c.steps.forEach(function(s){
    var row = mkEl('div', 'tech__row');
    var n = mkEl('div', 'tech__num', s.num);
    var h = mkEl('div', 'tech__name', s.name);
    var b = mkEl('div', 'tech__body');
    b.textContent = s.body;
    row.appendChild(n);
    row.appendChild(h);
    row.appendChild(b);
    steps.appendChild(row);
  });
}

/* ============================================================
   BUILDER — Shelter (4 cards)
   ============================================================ */
function buildShelter(){
  var c = AA_CONTENT.shelter;
  var grid = document.getElementById('shelter-grid');
  if (!grid || !c) return;
  grid.innerHTML = '';
  c.shelters.forEach(function(s){
    var card = mkEl('div', 'shelter__card');
    var imgWrap = mkEl('div', 'img-slot');
    var img = document.createElement('img');
    img.src = 'assets/images/shelter/' + s.img + '.webp';
    img.alt = s.imgAlt;
    img.onerror = function(){ imgWrap.innerHTML = imgSlotFallback(s.name + ' — 4:3'); };
    imgWrap.appendChild(img);
    var h = mkEl('h3', 'shelter__name', s.name);
    var b = mkEl('p', 'shelter__body', s.body);
    card.appendChild(imgWrap);
    card.appendChild(h);
    card.appendChild(b);
    grid.appendChild(card);
  });
}

/* ============================================================
   BUILDER — Hazards (4 full-bleed warnings)
   ============================================================ */
function buildHazards(){
  var c = AA_CONTENT.hazards;
  var wrap = document.getElementById('hazards-warnings');
  if (!wrap || !c) return;
  wrap.innerHTML = '';
  c.hazards.forEach(function(h){
    var warn = mkEl('div', 'hazard__warn');
    var photo = mkEl('div', 'hazard__photo');
    var img = document.createElement('img');
    img.src = 'assets/images/hazards/' + h.img + '.webp';
    img.alt = h.imgAlt;
    img.onerror = function(){ photo.innerHTML = imgSlotFallback(h.name + ' — 16:9'); };
    photo.appendChild(img);
    var overlay = mkEl('div', 'hazard__overlay');
    var type = mkEl('div', 'hazard__type', h.name);
    var body = mkEl('p', 'hazard__body', h.body);
    overlay.appendChild(type);
    overlay.appendChild(body);
    warn.appendChild(photo);
    warn.appendChild(overlay);
    wrap.appendChild(warn);
  });
}

/* ============================================================
   BUILDER — Records (5 figures)
   ============================================================ */
function buildRecords(){
  var c = AA_CONTENT.records;
  var grid = document.getElementById('records-grid');
  if (!grid || !c) return;
  grid.innerHTML = '';
  c.records.forEach(function(r){
    var item = mkEl('div', 'records__item');
    var num = mkEl('div', 'records__number', r.number);
    var unit = mkEl('div', 'records__unit', r.unit);
    var label = mkEl('div', 'records__label', r.label);
    item.appendChild(num);
    item.appendChild(unit);
    item.appendChild(label);
    grid.appendChild(item);
  });
}

/* ============================================================
   BUILDER — Clubs (map + 4 cards)
   ============================================================ */
var mapInstance = null;

function buildClubs(){
  var clubs = AA_CLUBS.clubs;
  var wrap = document.getElementById('club-cards');
  if (!wrap || !clubs) return;
  wrap.innerHTML = '';
  clubs.forEach(function(club){
    var card = mkEl('div', 'club__card');
    card.dataset.name = club.name;
    card.dataset.lat = club.lat;
    card.dataset.lng = club.lng;
    var h = mkEl('h3', 'club__name', club.name);
    var loc = mkEl('div', 'club__loc', club.city + ', ' + club.country);
    var meta = mkEl('div', 'club__meta');
    meta.appendChild(mkEl('span', 'club__founded', 'Founded ' + club.founded));
    var web = document.createElement('a');
    web.href = club.website;
    web.textContent = club.website.replace(/^https?:\/\//, '');
    web.target = '_blank';
    web.rel = 'noopener';
    var note = mkEl('div', 'club__note', club.note);
    card.appendChild(h);
    card.appendChild(loc);
    card.appendChild(meta);
    card.appendChild(note);
    card.appendChild(web);
    card.addEventListener('click', function(){ highlightClubCard(card); });
    wrap.appendChild(card);
  });
  if (typeof L !== 'undefined') {
  var mapEl = document.getElementById('map-container');
  if (mapEl) {
      mapInstance = L.map(mapEl, {
        center: [20, 0],
        zoom: 2,
        zoomControl: true,
        attributionControl: true
      });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 19
      }).addTo(mapInstance);
      var clubs = AA_CLUBS.clubs;
      clubs.forEach(function(club){
        var m = L.marker([club.lat, club.lng]).addTo(mapInstance);
        m.bindTooltip('<b>' + esc(club.name) + '</b><br>' + esc(club.city + ', ' + club.country) + ' — founded ' + club.founded, {
          direction: 'top', offset: [0, -8], className: 'club-tooltip'
        });
        m.on('click', function(){ focusClub(club); });
      });
      var firstCard = document.querySelector('#club-cards .club__card');
      if (firstCard) focusClub(clubs[0]);
    }
  }
}

function focusClub(club){
  if (!mapInstance) return;
  mapInstance.setView([club.lat, club.lng], 10);
  var cards = document.querySelectorAll('#club-cards .club__card');
  cards.forEach(function(c){ c.classList.toggle('is-active', c.dataset.name === club.name); });
}

function highlightClubCard(card){
  var cards = document.querySelectorAll('#club-cards .club__card');
  cards.forEach(function(c){ c.classList.remove('is-active'); });
  card.classList.add('is-active');
  if (mapInstance) {
    var lat = parseFloat(card.dataset.lat);
    var lng = parseFloat(card.dataset.lng);
    mapInstance.setView([lat, lng], 10);
  }
}

/* ============================================================
   BUILDER — Stories (3 full-bleed slides)
   ============================================================ */
function buildStories(){
  var c = AA_CONTENT.stories;
  var wrap = document.getElementById('stories-slides');
  if (!wrap || !c) return;
  wrap.innerHTML = '';
  c.items.forEach(function(s, i){
    var slide = mkEl('div', 'story__slide');
    var imgWrap = mkEl('div', 'story__photo');
    var img = document.createElement('img');
    img.src = 'assets/images/stories/' + s.img + '.webp';
    img.alt = s.imgAlt;
    img.onerror = function(){ imgWrap.innerHTML = '<div class="img-slot wide" style="aspect-ratio:16/9;position:absolute;inset:0">' + imgSlotFallback('expedition camp — 16:9') + '</div>'; };
    imgWrap.appendChild(img);
    var quote = mkEl('div', 'story__quote');
    var q = document.createElement('div');
    q.className = 'story__pull';
    q.textContent = '\u201C' + s.quote + '\u201D';
    var credit = document.createElement('div');
    credit.className = 'story__credit';
    credit.textContent = s.credit;
    quote.appendChild(q);
    quote.appendChild(credit);
    slide.appendChild(imgWrap);
    slide.appendChild(quote);
    wrap.appendChild(slide);
    if (i === 0) slide.classList.add('is-active');
  });
}

/* ============================================================
   BUILDER — Gallery (10 items, lightbox-ready)
   ============================================================ */
var GALLERY_ITEMS = [];

function buildGallery(){
  var c = AA_CONTENT.gallery;
  var grid = document.getElementById('gallery-grid');
  if (!grid || !c) return;
  grid.innerHTML = '';
  GALLERY_ITEMS = [];
  c.items.forEach(function(item, i){
    var el = document.createElement('div');
    el.className = 'gallery__item';
    el.dataset.index = i;
    var img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;
    img.loading = 'lazy';
    img.onerror = function(){ el.innerHTML = '<div class="img-slot" style="aspect-ratio:1">' + imgSlotFallback('gallery image ' + (i+1)) + '</div>'; };
    el.appendChild(img);
    el.addEventListener('click', function(){ openLightbox(i); });
    grid.appendChild(el);
    GALLERY_ITEMS.push(item);
  });
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
var lightboxEl, lightboxImg, lightboxCaption, lightboxClose, lightboxIndex = -1;

function initLightbox(){
  lightboxEl = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightbox-img');
  lightboxCaption = document.getElementById('lightbox-caption');
  lightboxClose = document.getElementById('lightbox-close');
  if (!lightboxEl || !lightboxImg) return;
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxEl.addEventListener('click', function(e){ if (e.target === lightboxEl) closeLightbox(); });
  document.addEventListener('keydown', function(e){
    if (!lightboxEl.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight'){ e.preventDefault(); showLightbox((lightboxIndex + 1) % GALLERY_ITEMS.length); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); showLightbox((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length); }
  });
}

function openLightbox(index){
  if (index < 0 || index >= GALLERY_ITEMS.length) return;
  lightboxIndex = index;
  var item = GALLERY_ITEMS[index];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxImg.onerror = function(){ lightboxImg.style.display = 'none'; lightboxCaption.textContent = item.alt + ' (image unavailable)'; };
  lightboxCaption.textContent = item.alt;
  lightboxEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  setTimeout(function(){ try { lightboxClose.focus(); } catch(e){} }, 50);
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(lightboxImg, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' });
  }
}
function showLightbox(index){
  if (index < 0 || index >= GALLERY_ITEMS.length) return;
  lightboxIndex = index;
  var item = GALLERY_ITEMS[index];
  lightboxImg.src = item.src;
  lightboxImg.alt = item.alt;
  lightboxImg.style.display = '';
  lightboxCaption.textContent = item.alt;
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(lightboxImg, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
  }
}
function closeLightbox(){
  lightboxEl.classList.remove('is-open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
  lightboxImg.style.display = '';
  lightboxCaption.textContent = '';
  lightboxIndex = -1;
}

/* ============================================================
   BUILDER — News (3 stacked cards)
   ============================================================ */
function buildNews(){
  var c = AA_CONTENT.news;
  var stack = document.getElementById('news-stack');
  if (!stack || !c) return;
  stack.innerHTML = '';
  c.items.forEach(function(n){
    var card = mkEl('div', 'news__card');
    var imgWrap = mkEl('div', 'img-slot small');
    imgWrap.style.marginBottom = '0';
    var img = document.createElement('img');
    img.src = 'assets/images/news/' + n.img + '.webp';
    img.alt = n.imgAlt;
    img.onerror = function(){ imgWrap.innerHTML = imgSlotFallback(n.headline.slice(0, 30) + ' — 1200×800'); };
    imgWrap.appendChild(img);
    var body = mkEl('div', 'news__body');
    var date = mkEl('div', 'news__date', n.date);
    var headline = mkEl('div', 'news__headline', n.headline);
    var p = document.createElement('p');
    p.textContent = n.body;
    body.appendChild(date);
    body.appendChild(headline);
    body.appendChild(p);
    card.appendChild(imgWrap);
    card.appendChild(body);
    stack.appendChild(card);
  });
}

/* ============================================================
   BUILDER — Guidelines (6 large items)
   ============================================================ */
function buildGuidelines(){
  var c = AA_CONTENT.guidelines;
  var wrap = document.getElementById('guidelines-items');
  if (!wrap || !c) return;
  wrap.innerHTML = '';
  c.items.forEach(function(g){
    var item = mkEl('div', 'guideline__item');
    var text = mkEl('div', 'guideline__text', g.text);
    item.appendChild(text);
    wrap.appendChild(item);
  });
}

/* ============================================================
   BUILD ALL
   ============================================================ */
function buildSite(){
  try { buildHistory(); } catch(e){}
  try { buildTypes(); } catch(e){}
  try { buildTechniques(); } catch(e){}
  try { buildShelter(); } catch(e){}
  try { buildHazards(); } catch(e){}
  try { buildRecords(); } catch(e){}
  try { buildClubs(); } catch(e){}
  try { buildStories(); } catch(e){}
  try { buildGallery(); } catch(e){}
  try { buildNews(); } catch(e){}
  try { buildGuidelines(); } catch(e){}
  try { initLightbox(); } catch(e){}
  document.documentElement.classList.add('js-built');
}

/* ============================================================
   MOBILE MENU OVERLAY — toggle overlay + menu button
   ============================================================ */
function initMobileMenu(){
  var btn = document.getElementById('menu-btn');
  var overlay = document.getElementById('overlay');
  if (!btn || !overlay) return;
  btn.addEventListener('click', function (){
    var isOpen = overlay.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
}

/* ============================================================
   NEAR ME — geolocation + map centering
   ============================================================ */
function initNearMe(){
  var btn = document.getElementById('nearme-btn');
  if (!btn) return;
  btn.addEventListener('click', function (){
    if (!navigator.geolocation) {
      btn.textContent = 'Geolocation unavailable';
      btn.disabled = true;
      return;
    }
    if (typeof L === 'undefined' || !mapInstance) {
      btn.textContent = 'Map not ready';
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Finding you\u2026';
    navigator.geolocation.getCurrentPosition(
      function (pos){
        var lat = pos.coords.latitude;
        var lng = pos.coords.longitude;
        mapInstance.setView([lat, lng], 12);
        L.circleMarker([lat, lng], {
          radius: 10, color: '#0B5ED7', fillColor: '#F2F8FB',
          fillOpacity: 0.9, weight: 3
        }).addTo(mapInstance)
         .bindTooltip('You are here', { direction: 'top', offset: [0, -12] })
         .openTooltip();
        btn.textContent = 'Near Me \u00b7 located';
        setTimeout(function (){ btn.textContent = 'Near Me'; btn.disabled = false; }, 3000);
      },
      function (err){
        var msg = 'Location unavailable';
        if (err.code === 1) msg = 'Permission denied';
        else if (err.code === 2) msg = 'Position unavailable';
        else if (err.code === 3) msg = 'Timed out';
        btn.textContent = 'Near Me \u00b7 ' + msg;
        setTimeout(function (){ btn.textContent = 'Near Me'; btn.disabled = false; }, 3000);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 }
    );
  });
}

/* ============================================================
   TICKER — date + clock + location (runs on DOMContentLoaded)
   ============================================================ */
function initTicker(){
  var todayEl = document.getElementById('today');
  var clockEl = document.getElementById('clock');
  var locEl   = document.getElementById('location');
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  function fmtDate(d){ return days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear(); }
  function fmtClock(d){ return pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  if (todayEl) todayEl.textContent = 'Today: ' + fmtDate(new Date());
  if (clockEl) clockEl.textContent = fmtClock(new Date());
  setInterval(function (){ if (clockEl) clockEl.textContent = fmtClock(new Date()); }, 10000);
  if (locEl && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (pos){ locEl.textContent = 'Loc: ' + pos.coords.latitude.toFixed(4) + ' \u00b7 ' + pos.coords.longitude.toFixed(4); },
      function (err){ locEl.textContent = 'Loc: ' + (err.code === 1 ? 'denied' : err.code === 2 ? 'unavailable' : 'timed out'); },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 }
    );
  } else if (locEl) {
    locEl.textContent = 'Loc: unavailable';
  }
}

/* ============================================================
   VISITOR COUNTER — localStorage
   ============================================================ */
function initCounter(){
  var el = document.getElementById('counter');
  if (!el) return;
  try {
    var key = 'aa_visits';
    var n = parseInt(localStorage.getItem(key) || '0', 10);
    if (isNaN(n)) n = 0;
    n += 1;
    try { localStorage.setItem(key, String(n)); } catch (e){}
    var s = String(n).padStart(4, '0');
    el.innerHTML = '';
    for (var i = 0; i < s.length; i++){
      var b = document.createElement('b');
      b.textContent = s.charAt(i);
      el.appendChild(b);
    }
  } catch (e){}
}

/* ============================================================
   INIT — runs as soon as the DOM is safe to touch.
   Decides how to handle the loader based on whether the CDN
   animation libraries have already loaded.
   ============================================================ */
function init(){
  document.documentElement.classList.remove('is-loading');
  try { buildSite(); } catch(e){ console.warn('buildSite error:', e); }
  try { initMobileMenu(); } catch(e){}
  try { initNearMe(); } catch(e){}
  try { initTicker(); } catch(e){}
  try { initCounter(); } catch(e){}
  try { initLoaderAtLoad(); } catch(e){}
}
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* Loader path selector — called from init, safe to call before
   GSAP/ScrollTrigger have arrived. */
function initLoaderAtLoad(){
  var countEl = document.getElementById('count');
  var bar = document.querySelector('.loader__bar i');
  var loader = countEl && bar && document.querySelector('.loader');
  if (!loader || !countEl || !bar) return;
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    runLoaderEntranceTimeline(countEl, bar, loader);
  } else {
    loader.style.display = 'none';
  }
}

/* ============================================================
   POST-LOAD: GSAP entrance timeline (when CDNs are available).
   This is the polished entry sequence from the prototype:
   counter 0→100, progress bar fill, loader exit, hero headline
   rise, facts + CTA fade-in — all in one linked timeline.
   ============================================================ */
window.addEventListener('load', function (){
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  if (reduceMotion) return;

  var countEl = document.getElementById('count');
  var bar = document.querySelector('.loader__bar i');
  var loader = document.querySelector('.loader');
  if (!countEl || !bar || !loader) return;

  var heroLines = document.querySelectorAll('.hero h1 .line__in');
  var cta = document.querySelector('.cta');
  var factBoxes = document.querySelectorAll('.facts > div');

  if (heroLines.length) gsap.set(heroLines, { yPercent: 115, autoAlpha: 0 });
  if (cta) gsap.set(cta, { scale: 0.85, autoAlpha: 0 });
  if (factBoxes.length) gsap.set(factBoxes, { y: 30, autoAlpha: 0 });

  var p = { v: 0 };
  var t = gsap.timeline({ delay: 0.35 });

  // 1) Count 0→100, bar fills, over ~1.5s
  t.to(p, {
    v: 100,
    duration: 1.5,
    ease: 'power2.inOut',
    onUpdate: function (){
      countEl.textContent = String(Math.round(p.v)).padStart(3, '0');
      bar.style.transform = 'scaleX(' + (p.v / 100) + ')';
    }
  });

  // 2) Loader fades, is-loading stripped, Lenis started, THEN loader
  //    slides up and out — leaving a clean page with the hero visible.
  t.to(loader, { autoAlpha: 0, duration: 0.25 }, '+=0.05');
  t.call(function (){
    document.documentElement.classList.remove('is-loading');
    if (typeof Lenis === 'function' && !window._aa_lenis){
      window._aa_lenis = Lenis({
        duration: 1.2,
        easing: function (t){ return t < 0.5 ? 2*t*t : -1 + (4-2*t)*t; }
      });
      window._aa_lenis.start();
      document.documentElement.classList.add('lenis');
    }
  });
  t.to(loader, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' });
  t.set(loader, { display: 'none' });

  // 3) Hero headline rises, facts + CTA fade in (staggered, after loader exit)
  if (heroLines.length){
    t.to(heroLines, { yPercent: 0, autoAlpha: 1, duration: 1, stagger: 0.12, ease: 'power4.out' }, '-=0.55');
  }
  if (cta){
    t.to(cta, { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6');
  }
  if (factBoxes.length){
    t.to(factBoxes, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }, '-=0.55');
  }
});

/* ============================================================
   HERO SCROLL — frame expands, photo + headline drift apart
   (verbatim from prototype)
   ============================================================ */
(function (){
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var shell = document.querySelector('.hero-shell');
  var hero = document.querySelector('.hero');
  var img = document.querySelector('.hero__img');
  var title = document.querySelector('.hero__title');
  if (!shell || !hero || !img || !title) return;

  var mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', function () {
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
    var depth = document.querySelector('.hero__depth');
    if (!depth) return;
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
})();

/* ============================================================
   SECTION ENTRANCE ANIMATIONS (GSAP + ScrollTrigger)
   ============================================================ */
(function (){
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  var sections = document.querySelectorAll('section[data-entrance]');
  if (sections.length) {
    sections.forEach(function (sec){
      var inboxClass = sec.getAttribute('data-entrance');
      var children = sec.querySelectorAll('[' + (inboxClass ? 'class*="' + inboxClass + '"' : '') + ']');
      if (!children.length) {
        children = sec.querySelectorAll(':scope > div, :scope > section > div');
        if (!children.length) return;
      }
      gsap.from(children, {
        y: 60, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sec, start: 'top 88%', toggleActions: 'play none none reverse', once: true }
      });
    });
  }

  // Mousemove parallax (standalone, no gsap.quickTo — see hero block above for the prototype's quickTo version)
  var heroImg = document.querySelector('.hero__img');
  var heroDepth = document.querySelector('.hero__depth');
  if (heroImg && heroDepth) {
    var ticking = false;
    document.addEventListener('mousemove', function (e){
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function (){
        var x = (e.clientX / window.innerWidth - 0.5) * 2;
        var y = (e.clientY / window.innerHeight - 0.5) * 2;
        heroDepth.style.transform = 'translate3d(' + (x * 8) + 'px, ' + (y * 8) + 'px, 0)';
        ticking = false;
      });
    }, { passive: true });
  }
})();

/* ============================================================
   LENIS SMOOTH SCROLL + ANCHOR CLICKS
   ============================================================ */
(function (){
  if (typeof Lenis === 'function') {
    var lenis = Lenis({ duration: 1.2, easing: function (t){ return t < 0.5 ? 2*t*t : -1 + (4-2*t)*t; } });
    function raf(){ lenis.raf(); requestAnimationFrame(raf); }
    raf();
    document.querySelectorAll('a[href^="#"]').forEach(function (a){
      a.addEventListener('click', function (e){
        var id = a.getAttribute('href');
        if (!id || id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -80 });
      });
    });
  }
})();

/* ============================================================
   ACTIVE SECTION IN THE INDEX
   ============================================================ */
(function (){
  var navLinks = document.querySelectorAll('.index a[href^="#"]');
  if (!navLinks.length) return;
  var secEls = [];
  navLinks.forEach(function (a){
    var id = a.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) secEls.push({ id: id, el: el, link: a });
  });
  function update(){
    var sy = window.scrollY + 120;
    var cur = secEls.length ? secEls[0].id : null;
    for (var i = 0; i < secEls.length; i++) {
      if (secEls[i].el.offsetTop <= sy) cur = secEls[i].id;
    }
    navLinks.forEach(function (a){ a.classList.toggle('is-active', a.getAttribute('href') === '#' + cur); });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
  document.documentElement.classList.add('js-built');
})();
