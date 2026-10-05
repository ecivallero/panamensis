import fs from "node:fs";
const records = JSON.parse(fs.readFileSync("data/public/public-records.json", "utf8"));
const rels = JSON.parse(fs.readFileSync("data/public/relationship-index.json", "utf8"));
const concepts = JSON.parse(fs.readFileSync("data/public/concept-pages.json", "utf8"));
const summary = JSON.parse(fs.readFileSync("data/public/projection-summary.json", "utf8"));
const errors = [];
const ids = new Set(records.map(r => r.id));
if (records.length !== summary.public_records) errors.push(`record count ${records.length} != summary ${summary.public_records}`);
for (const r of records) {
  if (r.visibility && r.visibility !== "public") errors.push(`non-public record leaked: ${r.id}`);
  const text = JSON.stringify(r);
  if (/PNS-SRC-000012|private locator/i.test(text)) errors.push(`restricted-control token found in ${r.id}`);
}
for (const e of rels) if (!ids.has(e.from) || !ids.has(e.to)) errors.push(`relationship points outside public set: ${e.from} -> ${e.to}`);
for (const c of concepts) for (const id of c.record_refs || []) if (!ids.has(id)) errors.push(`concept ${c.id} points outside public set: ${id}`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`PASS: ${records.length} public records, ${rels.length} relationship edges, ${concepts.length} public concepts. No restricted-control leak detected.`);
