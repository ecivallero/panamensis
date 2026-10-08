import fs from "node:fs";

const pages = ["_site/en/index.html", "_site/es/index.html"];
const orderedIds = ["donate", "explore", "stories", "sources", "research", "collaborate", "about"];
const errors = [];

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const positions = orderedIds.map((id) => html.indexOf(`id="${id}"`));
  if (positions.some((position) => position < 0)) errors.push(`${page}: missing required homepage section`);
  if (positions.some((position, index) => index > 0 && position <= positions[index - 1])) errors.push(`${page}: homepage sections are out of architectural order`);
  if ((html.match(/class="route"/g) || []).length !== 4) errors.push(`${page}: expected four principal routes`);
  if ((html.match(/class="browse-group"/g) || []).length !== 3) errors.push(`${page}: expected three grouped browsing routes`);
  if ((html.match(/class="separator(?:\s|\")/g) || []).length !== 3) errors.push(`${page}: expected three full-width image separators`);
  if (!html.includes('class="support" id="donate"')) errors.push(`${page}: Donate section missing`);
  if (!html.includes('class="brand-mark"')) errors.push(`${page}: header mark missing`);
  if (/arrow-link|class="arrow"|Concept image|Imagen prevista|Research method|Método de investigación/i.test(html)) errors.push(`${page}: retired homepage language or arrow styling remains`);
  if (/PNS-SRC-000012|private locator/i.test(html)) errors.push(`${page}: restricted-control token leaked into homepage`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("PASS: bilingual homepage matches the approved reader-first architecture.");
