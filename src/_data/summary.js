import fs from "node:fs";
export default JSON.parse(fs.readFileSync("data/public/projection-summary.json", "utf8"));
