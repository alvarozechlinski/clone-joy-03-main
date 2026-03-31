import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();

const imageConfigs = [
  { input: "src/assets/hero-home.jpg", output: "src/assets/hero-home.jpg", width: 1920, quality: 74 },
  { input: "src/assets/hero-solar.jpg", output: "src/assets/hero-solar.jpg", width: 1920, quality: 74 },
  { input: "src/assets/solar-field.jpg", output: "src/assets/solar-field.jpg", width: 1920, quality: 74 },
  { input: "src/assets/solar-rooftop.jpg", output: "src/assets/solar-rooftop.jpg", width: 1600, quality: 72 },
  { input: "src/assets/solar-residential.png", output: "src/assets/solar-residential.jpg", width: 1600, quality: 72 },
  { input: "src/assets/consulting.avif", output: "src/assets/consulting.avif", width: 1600, quality: 60 },
  { input: "src/assets/nossa-historia.jpg", output: "src/assets/nossa-historia.jpg", width: 1600, quality: 72 },
  { input: "src/assets/sobre-hero.jpg", output: "src/assets/sobre-hero.jpg", width: 1920, quality: 72 },
  { input: "src/assets/sao-jose-hero.jpg", output: "src/assets/sao-jose-hero.jpg", width: 1920, quality: 72 },
  { input: "src/assets/sao-jose.jpg", output: "src/assets/sao-jose.jpg", width: 1600, quality: 72 },
  { input: "src/assets/projeto-antigo-4.jpg", output: "src/assets/projeto-antigo-4.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-antigo-5.jpg", output: "src/assets/projeto-antigo-5.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-antigo-6.jpg", output: "src/assets/projeto-antigo-6.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-1.jpg", output: "src/assets/projeto-1.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-2.jpg", output: "src/assets/projeto-2.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-3.jpg", output: "src/assets/projeto-3.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-4.jpg", output: "src/assets/projeto-4.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-5.jpg", output: "src/assets/projeto-5.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-6.jpg", output: "src/assets/projeto-6.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-7.jpg", output: "src/assets/projeto-7.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-8.jpg", output: "src/assets/projeto-8.jpg", width: 1600, quality: 70 },
  { input: "src/assets/projeto-9.png", output: "src/assets/projeto-9.jpg", width: 1600, quality: 70 },
];

const mirroredFiles = [
  ["src/assets/hero-home.jpg", "html-version/assets/hero-home.jpg"],
  ["src/assets/hero-solar.jpg", "html-version/assets/hero-solar.jpg"],
  ["src/assets/solar-field.jpg", "html-version/assets/solar-field.jpg"],
  ["src/assets/solar-rooftop.jpg", "html-version/assets/solar-rooftop.jpg"],
  ["src/assets/solar-residential.jpg", "html-version/assets/solar-residential.jpg"],
  ["src/assets/consulting.avif", "html-version/assets/consulting.avif"],
  ["src/assets/nossa-historia.jpg", "html-version/assets/nossa-historia.jpg"],
  ["src/assets/sobre-hero.jpg", "html-version/assets/sobre-hero.jpg"],
  ["src/assets/sao-jose-hero.jpg", "html-version/assets/sao-jose-hero.jpg"],
  ["src/assets/sao-jose.jpg", "html-version/assets/sao-jose.jpg"],
  ["src/assets/projeto-1.webp", "html-version/assets/projeto-1.webp"],
  ["src/assets/projeto-2.webp", "html-version/assets/projeto-2.webp"],
  ["src/assets/projeto-3.webp", "html-version/assets/projeto-3.webp"],
  ["src/assets/projeto-antigo-4.jpg", "html-version/assets/projeto-antigo-4.jpg"],
  ["src/assets/projeto-antigo-5.jpg", "html-version/assets/projeto-antigo-5.jpg"],
  ["src/assets/projeto-antigo-6.jpg", "html-version/assets/projeto-antigo-6.jpg"],
  ["src/assets/projeto-1.jpg", "html-version/assets/projeto-1.jpg"],
  ["src/assets/projeto-2.jpg", "html-version/assets/projeto-2.jpg"],
  ["src/assets/projeto-3.jpg", "html-version/assets/projeto-3.jpg"],
  ["src/assets/projeto-4.jpg", "html-version/assets/projeto-4.jpg"],
  ["src/assets/projeto-5.jpg", "html-version/assets/projeto-5.jpg"],
  ["src/assets/projeto-6.jpg", "html-version/assets/projeto-6.jpg"],
  ["src/assets/projeto-7.jpg", "html-version/assets/projeto-7.jpg"],
  ["src/assets/projeto-8.jpg", "html-version/assets/projeto-8.jpg"],
  ["src/assets/projeto-9.jpg", "html-version/assets/projeto-9.jpg"],
];

async function optimizeImage({ input, output, width, quality }) {
  const absoluteInput = path.join(root, input);
  const absoluteOutput = path.join(root, output);
  const metadata = await sharp(absoluteInput).metadata();
  const targetWidth = metadata.width && metadata.width > width ? width : metadata.width;
  const tempPath = `${absoluteOutput}.tmp`;
  const pipeline = sharp(absoluteInput).rotate().resize({ width: targetWidth, withoutEnlargement: true });
  const extension = path.extname(output).toLowerCase();

  if (extension === ".avif") {
    await pipeline.avif({ quality }).toFile(tempPath);
  } else if (extension === ".webp") {
    await pipeline.webp({ quality }).toFile(tempPath);
  } else {
    await pipeline.jpeg({ quality, mozjpeg: true, progressive: true }).toFile(tempPath);
  }

  await fs.rename(tempPath, absoluteOutput);
}

for (const config of imageConfigs) {
  await optimizeImage(config);
}

for (const [from, to] of mirroredFiles) {
  await fs.copyFile(path.join(root, from), path.join(root, to));
}

console.log("Image optimization complete.");
