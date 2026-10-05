# Homepage information-architecture audit

Audit basis: **Panamensis Website Architecture & Design Blueprint v0.1**, section 6 and Appendix A.

## Implemented in Milestone 01 v0.3

1. Project name, primary navigation, Search and persistent ES/EN switching.
2. Hero definition: “Stories and ideas from science in the Tropics.”
3. One real, six-step “Follow the thread” path generated from public fixture identifiers.
4. Three principal entrances: Explore, Research and Sources.
5. Featured Story editorial position, explicitly marked as pending because no authored Story exists in the fixture.
6. Mixed “From the corpus” selection: Person, Place, Organization and Biological Entity.
7. Active Research Dossier and a separate Open Question.
8. Featured Source with Repository/Collection context and “How do we know?” disclosure.
9. Substantive recent update and collaboration invitation.
10. About/Method explanation and footer links for About, Method, Technical Architecture, Credits, Contact and public data.
11. Meaningful image positions, captions and two edge-to-edge separators.
12. Responsive navigation, semantic headings, visible focus, image alternatives and no JavaScript dependency for core homepage content.
13. A donation call added as a secondary support module without replacing any required research route.

## Deliberate Milestone 01 boundaries

- The Featured Story is a labelled editorial position, not a fabricated publication.
- Only the Explore landing pages exist beyond the homepage. Record-crossroads pages, Research/Stories/Sources indexes, search implementation, maps, timelines and collaboration forms belong to later milestones.
- Full-site acceptance tests for persistent record identity, bilingual record equivalence, rights-aware maps, facets and restricted-data suppression cannot be completed from the homepage package alone.

Run `npm run check` to validate the public projection, build the site and audit both homepage language versions.
