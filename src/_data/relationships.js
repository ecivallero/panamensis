import fs from "node:fs";
export default JSON.parse(fs.readFileSync("data/public/relationship-index.json", "utf8"));
