// Front-page entry: carry the finished newspaper image to /output/entry.png.
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const frontPage = resolve(import.meta.dirname, "entry.png");
const outputFile = resolve("/output", "entry.png");

if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}

cpSync(frontPage, outputFile);
