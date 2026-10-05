import fs from "node:fs";

const pages = ["_site/en/index.html", "_site/es/index.html"];
const orderedIds = ["thread", "explore", "donate", "story", "corpus", "research", "sources", "collaborate", "about"];
const errors = [];

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  const positions = orderedIds.map((id) => html.indexOf(`id="${id}"`));
  if (positions.some((position) => position < 0)) errors.push(`${page}: missing required homepage section`);
  if (positions.some((position, index) => index > 0 && position <= positions[index - 1])) errors.push(`${page}: homepage sections are out of architectural order`);
  if ((html.match(/class="step"/g) || []).length !== 6) errors.push(`${page}: expected six Follow the thread steps`);
  if ((html.match(/class="entrance"/g) || []).length !== 3) errors.push(`${page}: expected three principal entrances`);
  if ((html.match(/class="photo-separator"/g) || []).length !== 2) errors.push(`${page}: expected two full-width image separators`);
  if ((html.match(/class="image-placeholder"/g) || []).length !== 4) errors.push(`${page}: expected four evidence-specific image positions`);
  if (!html.includes("class=\"support-button\"")) errors.push(`${page}: Donate button missing`);
  if (!html.includes("evidence-disclosure")) errors.push(`${page}: evidence disclosure missing`);
  if (/PNS-SRC-000012|private locator/i.test(html)) errors.push(`${page}: restricted-control token leaked into homepage`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("PASS: bilingual homepage structure matches the Milestone 01 information-architecture checklist.");
