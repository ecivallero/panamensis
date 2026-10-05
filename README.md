# Panamensis public website — Milestone 01 v0.3

Static-first Eleventy package for the first Panamensis public website milestone. This revision implements the approved index-page design v0.6 while preserving the public information architecture defined in the Website Architecture & Design Blueprint v0.1.

## Implemented

- shared responsive shell with the agreed primary navigation, global search entry and ES/EN switch;
- parallel English and Spanish homepages over one generated public corpus;
- project definition and research-transect hero without an inner-page side rail;
- one real, fully clickable “Follow the thread” path;
- Explore, Research and Sources entrances;
- early donation call matching the role of the Galapagensis support banner;
- meaningful visual placeholders for Zetek, Barro Colorado, the disputed 1939/1940 transition and RU 134;
- two edge-to-edge image separators with explicit intended subjects;
- Featured Story position, mixed corpus records, active dossier, separate Open Question, featured Source, evidence disclosure, substantive update, collaboration and About/Method sections;
- existing bilingual Explore landing pages generated from public projections;
- validation of public visibility, relationship targets, concept reverse indexes and the restricted synthetic-control record;
- GitHub Pages deployment workflow.

## Repository boundary

`data/public/` and `data/jsonld/` are replaceable outputs from the private Panamensis research build. This repository does not contain or edit the canonical YAML corpus. Canonical records, restricted evidence, private locators and unpublished research files do not belong here.

## Run locally

Node.js 24 is the deployment target.

```bash
npm install
npm run validate:public
npm run build
npm run serve
```

The generated site is written to `_site/`.

## Deploy

Create a GitHub repository from the contents of this package, enable GitHub Pages with **GitHub Actions** as the source, and push the `main` branch. The included workflow validates the public projection before every production build.

## Scope boundary

This is Milestone 01: homepage, shared shell, Explore scaffold and public-data build boundary. Navigation exposes the full agreed architecture, but later destination pages are intentionally not fabricated. The next milestone is the first record-crossroads set: Person, Place, Organization, Source, Research Dossier and Concept/Theme templates.
