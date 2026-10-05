export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "data/jsonld": "data" });
  eleventyConfig.addPassthroughCopy({ "data/public": "data/public" });

  eleventyConfig.addFilter("recordById", (records, id) => records.find((r) => r.id === id));
  eleventyConfig.addFilter("labelFor", (record, lang = "en") => {
    if (!record) return "";
    const localized = (record.labels || []).find((x) => x.lang === lang);
    return localized?.value || record.preferred_label || record.id;
  });
  eleventyConfig.addFilter("conceptLabel", (concept, lang = "en") => {
    const localized = (concept?.labels || []).find((x) => x.lang === lang);
    return localized?.value || concept?.id || "";
  });
  eleventyConfig.addFilter("slug", (value = "") => value.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
  eleventyConfig.addFilter("publicPath", (record, lang = "en") => {
    if (!record) return "#";
    const base = `/${lang}`;
    const slug = (record.preferred_label || record.id).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const map = {
      Person: "people", Place: "places", GroupOrganization: "organizations", ActivityProject: "activities",
      Event: "events", Source: "sources", ResearchDossier: "research/dossiers", ConceptTheme: "themes",
      BiologicalEntity: "nature", MaterialEntity: "material", Collection: "collections", Repository: "repositories"
    };
    return map[record.class] ? `${base}/${map[record.class]}/${slug}/` : `/id/${record.id}/`;
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"]
  };
}
