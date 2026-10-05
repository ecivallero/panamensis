import fs from "node:fs";

const source = "_site";
const destination = "preview";

if (!fs.existsSync(source)) throw new Error("Build the Eleventy site before creating the preview.");
fs.rmSync(destination, { recursive: true, force: true });
fs.cpSync(source, destination, { recursive: true });
console.log(`Exact production preview copied to ${destination}/.`);
