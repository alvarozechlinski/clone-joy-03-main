import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const imageConfigs = [
  { file: "src/assets/hero-home.jpg", width: 1920, quality: 74 },
  { file: "src/assets/projeto-5.jpg", width: 1800, quality: 72 },
  { file: "src/assets/projeto-6.jpg", width: 1800, quality: 72 },
  { file: "src/assets/projeto-4.jpg", width: 1800, quality: 74 },
  { file: "src/assets/hero-solar.jpg", width: 1920, quality: 74 },
  { file: "src/assets/solar-field.jpg", width: 1920, quality: 74 },
];

const mirroredFiles = [
  ["src/assets/projeto-1.webp", "html-version/assets/projeto-1.webp"],
  ["src/assets/projeto-2.webp", "html-version/assets/projeto-2.webp"],
  ["src/assets/projeto-3.webp", "html-version/assets/projeto-3.webp"],
  ["src/assets/projeto-4.jpg", "html-version/assets/projeto-4.jpg"],
  ["src/assets/projeto-5.jpg", "html-version/assets/projeto-5.jpg"],
  ["src/assets/projeto-6.jpg", "html-version/assets/projeto-6.jpg"],
  ["src/assets/hero-home.jpg", "html-version/assets/hero-home.jpg"],
  ["src/assets/hero-solar.jpg", "html-version/assets/hero-solar.jpg"],
  ["src/assets/solar-field.jpg", "html-version/assets/solar-field.jpg"],
];

for (const { file, width, quality } of imageConfigs) {
  const absolutePath = path.join(root, file);
  const input = await sharp(absolutePath);
  const metadata = await input.metadata();
  const targetWidth = metadata.width && metadata.width > width ? width : metadata.width;
  const tempPath = `${absolutePath}.tmp`;

  await input
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(tempPath);

  await fs.rename(tempPath, absolutePath);
}

for (const [from, to] of mirroredFiles) {
  await fs.copyFile(path.join(root, from), path.join(root, to));
}

console.log("Image optimization complete.");
