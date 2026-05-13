import sharp from "sharp";
import { readFileSync, statSync } from "fs";
import { resolve } from "path";

const assetsDir = resolve(process.cwd(), "src/assets");

const targets = [
  "toyota-rav4-collision-repair-after-charleston.webp",
  "toyota-rav4-collision-repair-after-side-charleston.webp",
  "bmw-sedan-collision-repair-before-charleston.webp",
  "lexus-lc-collision-repair-after-charleston.webp",
];

async function compress(filename) {
  const inputPath = resolve(assetsDir, filename);
  const outputPath = resolve(assetsDir, filename);

  const before = statSync(inputPath).size;

  // Try quality 75 first, drop to 65 if still over 200KB
  let quality = 75;
  let buf = await sharp(inputPath).webp({ quality }).toBuffer();

  if (buf.byteLength > 200_000) {
    quality = 65;
    buf = await sharp(inputPath).webp({ quality }).toBuffer();
  }

  if (buf.byteLength > 200_000) {
    quality = 55;
    buf = await sharp(inputPath).webp({ quality }).toBuffer();
  }

  const { writeFileSync } = await import("fs");
  writeFileSync(outputPath, buf);

  const after = statSync(outputPath).size;
  console.log(
    `${filename}: ${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB (q${quality})`
  );
}

for (const target of targets) {
  await compress(target);
}
