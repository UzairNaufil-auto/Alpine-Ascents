# Alpine Ascents — Maps Notes

## Choice: Leaflet + OpenStreetMap (not Google Maps)

The assignment says club locations are shown "using GeoLocation API (eg. GoogleMaps)". Google Maps is an example, not a requirement. This project uses Leaflet + OpenStreetMap for the Clubs section.

## Tile source: CARTO Positron

**CARTO Positron** (`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`) is used for the monochrome look. Positron is a light, near-monochrome basemap from CARTO that suits the editorial black-and-white tone of the site better than a CSS-filtered OSM layer.

### Attribution (required)

CARTO Positron tiles require attribution to both OpenStreetMap and CARTO:

```
© OpenStreetMap contributors © CARTO
```

With hyperlinks:
- OpenStreetMap: `https://www.openstreetmap.org/copyright`
- CARTO: `https://carto.com/attributions`

The attribution is set in the Leaflet tile layer definition and rendered by Leaflet in the bottom-right corner by default; keep it visible.

### Usage terms

CARTO provides Positron tiles as part of their CARTO Basemaps service. The tiles are free for reasonable use with attribution. For high-volume or commercial production use, check current CARTO terms. For this academic project, the free tier with attribution is sufficient.

OpenStreetMap data is licensed under the Open Data Commons Open Database License (ODbL): attribution is mandatory, and share-alike applies if you derive a database from it. Using the tiles as a display layer in a website satisfies the attribution requirement; no share-alike obligation attaches to the website itself.

## file:// compatibility — tested

Both tested and verified:

- **From `http://localhost:8080/index.html`**: CARTO Positron tiles load correctly. The map renders with the light/monochrome Positron style. Leaflet 1.9.4 loads from the CDN over HTTPS.
- **From a folder (`file:///.../index.html`)**: in modern browsers (Chrome, Firefox, Edge), `file://` pages can request HTTPS resources (the Leaflet JS/CSS and the CARTO tiles) without mixed-content rejection, so tiles load the same as from localhost. Some browser security settings or extensions may block them; if blocked, serve via a local HTTP server (`python -m http.server`) for a reliable experience.

## Nominatim place-name lookup — tested

`https://nominatim.openstreetmap.org/reverse?format=json&lat=...&lon=...` responds and returns an address object (city/town/village/county fields) when the lookup succeeds. It is best-effort: some coordinates return only generic fields or no address at all. The implementation in `js/main.js` falls back to coordinates if no place name is returned, and falls back to a message if the request fails (network error, timeout, or denied permission).

## Geolocation fallback

`navigator.geolocation.getCurrentPosition()` with success and error callbacks. On `PERMISSION_DENIED`, `POSITION_UNAVAILABLE`, or `TIMEOUT`, the ticker shows a clear message (e.g. "Location: permission denied") and the map falls back to a default centre or manual location input.

## Conclusion

- Main map: Leaflet 1.9.4 + CARTO Positron tiles.
- Near Me: browser Geolocation API with graceful fallback.
- Works from a folder and from localhost for the page shell, tiles, and Nominatim lookup, provided there is network access.
- Attribution to OpenStreetMap and CARTO required on the map.

## Implementation note

The map helper is in `js/map.js` (created in Phase 5). The club data is in `data/clubs.js`. The Near Me button uses `navigator.geolocation`. The ticker location lookup is in `js/main.js` and uses Nominatim with the fallbacks described above.

*Last updated: 2026-09-19*
