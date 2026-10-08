# Panamensis public website — Milestone 01 v0.4

Static-first Eleventy package for the Panamensis public website. This revision implements the approved reader-first homepage while preserving the public-data build boundary and bilingual site structure.

## Implemented

- fixed responsive header with the temporary Panamensis SVG mark, primary navigation and ES/EN switch;
- parallel English and Spanish homepages generated over the existing public corpus;
- direct project definition and introductory explanation;
- early donation banner;
- four principal routes into stories, people and places, sources, and research;
- grouped browsing routes for lives and institutions, geography and environment, and evidence and time;
- three narrow, edge-to-edge photographic separators;
- Featured Story, featured Source, research agenda, active dossier, Open Question, update, collaboration and About sections;
- no inner-page side rail on the homepage, no decorative arrows on principal links, and no production-note language visible to visitors;
- existing bilingual Explore landing pages generated from public projections;
- validation of public visibility, relationship targets, concept reverse indexes and the restricted synthetic-control record;
- GitHub Pages deployment workflow.

## Image replacement

The current photographs are temporary. See `docs/HOMEPAGE-IMAGES.md` for the filenames, roles and replacement guidance. Keeping the filenames unchanged allows photographs and the final logo to be replaced without editing the templates.

## Repository boundary

`data/public/` and `data/jsonld/` are replaceable outputs from the private Panamensis research build. This repository does not contain or edit the canonical YAML corpus. Canonical records, restricted evidence, private locators and unpublished research files do not belong here.

## Run locally

Node.js 24 is the deployment target.

```bash
npm ci
npm run check
npm run serve
```

The generated site is written to `_site/`. Do not upload `_site/` to the repository.

## Deploy

Upload the contents of this package to the root of the existing `ecivallero/panamensis` repository, preserving the folder structure and replacing files with the same paths. Commit the changes to `main`. The included GitHub Action validates the public projection, builds `_site/`, and deploys it to GitHub Pages.

## Scope boundary

This remains Milestone 01: homepage, shared shell, Explore scaffold and public-data build boundary. Later destination pages are intentionally not fabricated. The next milestone is the first record-crossroads set: Person, Place, Organization, Source, Research Dossier and Concept/Theme templates.
