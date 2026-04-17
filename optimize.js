// One-time image optimization script — run once, then done.
// Usage: npm install sharp && node optimize.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const BASE = __dirname;

const dirs = [
  'Assets/Photos/gallery',
  'Assets/Photos/thumbs',
  'Assets/lab',
  'Assets/privilege',
];
dirs.forEach(d => fs.mkdirSync(path.join(BASE, d), { recursive: true }));

async function convert(src, dest, width, quality = 82) {
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(dest);
  const before = fs.statSync(src).size;
  const after  = fs.statSync(dest).size;
  console.log(`  ${path.basename(dest)}  ${(before/1e6).toFixed(1)}MB → ${(after/1e3).toFixed(0)}KB`);
}

async function run() {
  // 31 gallery photos → gallery WebP (max 1920px) + thumb WebP (max 400px)
  console.log('\n── Gallery photos ──');
  for (let i = 1; i <= 31; i++) {
    const src = path.join(BASE, `Assets/not used/Photos/Copy of AKMUO_1_360HQ-${i}.JPG`);
    await convert(src, path.join(BASE, `Assets/Photos/gallery/photo-${i}.webp`), 1920, 82);
    await convert(src, path.join(BASE, `Assets/Photos/thumbs/photo-${i}.webp`),  400,  72);
  }

  // Hero image (photo 16 — used as hero bg)
  console.log('\n── Hero ──');
  const heroSrc = path.join(BASE, 'Assets/not used/Photos/Copy of AKMUO_1_360HQ-16.JPG');
  await convert(heroSrc, path.join(BASE, 'Assets/hero.webp'), 1920, 85);

  // Video poster (photo 1)
  console.log('\n── Video poster ──');
  const posterSrc = path.join(BASE, 'Assets/not used/Photos/Copy of AKMUO_1_360HQ-1.JPG');
  await convert(posterSrc, path.join(BASE, 'Assets/poster.webp'), 1280, 75);

  // Lab photo
  console.log('\n── Lab photo ──');
  const labSrc = path.join(BASE, 'Assets/not used/Lab certificate/Lab photo A13896.jpg');
  await convert(labSrc, path.join(BASE, 'Assets/lab/lab-photo.webp'), 1200, 82);

  // Privilege report photos
  console.log('\n── Privilege photos ──');
  const privFiles = ['IMG_2606.jpg', 'IMG_2607.JPG', 'IMG_2608.JPG'];
  for (let i = 0; i < privFiles.length; i++) {
    const src = path.join(BASE, `Assets/not used/Privilege report/${privFiles[i]}`);
    await convert(src, path.join(BASE, `Assets/privilege/img-${i + 1}.webp`), 800, 80);
  }

  console.log('\n✓ Done. All images optimized.\n');
}

run().catch(err => { console.error(err); process.exit(1); });
