import fs from "node:fs";
export default JSON.parse(fs.readFileSync("data/public/public-records.json", "utf8"));
