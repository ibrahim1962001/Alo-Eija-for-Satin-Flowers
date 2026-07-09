import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..", "..");
const publicImages = join(__dirname, "..", "public", "images");

const folderMapping = {
  "صواني ومرايات شبكه": "sawani-wmarayat-shabaka",
  "مناديل كتب الكتاب": "mandil-kotob-alkitab",
  "هواية العروسه": "hawyet-alaroosa",
};

if (existsSync(publicImages)) {
  rmSync(publicImages, { recursive: true });
}
mkdirSync(publicImages, { recursive: true });

const sourceDirs = readdirSync(rootDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name !== "website")
  .map((d) => d.name);

for (const folderName of sourceDirs) {
  const slug = folderMapping[folderName] ?? folderName;
  const sourcePath = join(rootDir, folderName);
  const targetPath = join(publicImages, slug);

  mkdirSync(targetPath, { recursive: true });

  const images = readdirSync(sourcePath)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  images.forEach((file, index) => {
    const ext = file.match(/\.(jpe?g|png|webp)$/i)?.[1].toLowerCase() ?? "jpg";
    const normalizedExt = ext === "jpeg" ? "jpg" : ext;
    cpSync(
      join(sourcePath, file),
      join(targetPath, `product-${index + 1}.${normalizedExt}`)
    );
  });

  console.log(`✓ ${folderName} → ${slug} (${images.length} صورة)`);
}

console.log("\nتم مزامنة الصور بنجاح!");
