# Repository structure

```text
panamensis-site/
├── data/
│   ├── public/                 # generated public-safe inputs only
│   │   ├── public-records.json
│   │   ├── relationship-index.json
│   │   ├── search-index.json
│   │   ├── concept-pages.json
│   │   ├── concept-facets.json
│   │   ├── concept-a-z-en.json
│   │   ├── concept-a-z-es.json
│   │   ├── map-index.json
│   │   ├── timeline-index.json
│   │   └── projection-summary.json
│   └── jsonld/                 # generated public JSON-LD only
├── src/
│   ├── _data/                  # Eleventy adapters + UI configuration
│   ├── _includes/
│   │   ├── layouts/            # shared shell
│   │   └── components/         # thread, relationship, evidence, cards
│   ├── assets/css/             # design tokens + component CSS
│   ├── en/                     # English public routes
│   └── es/                     # Spanish public routes
├── scripts/
│   ├── validate-public-layer.mjs
│   └── build-preview.mjs
├── docs/
├── eleventy.config.js
└── package.json
```

The future private research repository remains separate and upstream. Its validation/build process publishes safe projections into `data/public/` and `data/jsonld/`; the website never reads private YAML at render time.
