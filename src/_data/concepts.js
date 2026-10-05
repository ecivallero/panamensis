import fs from "node:fs";
export default JSON.parse(fs.readFileSync("data/public/concept-pages.json", "utf8"));
