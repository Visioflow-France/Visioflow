const sharp = require('sharp');

async function generateFavicon(sourcePath, size, outputPath) {
  await sharp(sourcePath)
    .resize(size, size, { fit: 'cover' })
    .png()
    .toFile(outputPath);

  console.log(`${outputPath} créé`);
}

async function main() {
  const source = 'public/favicon-source.png';
  await generateFavicon(source, 16, 'public/favicon-16.png');
  await generateFavicon(source, 32, 'public/favicon-32.png');
  await generateFavicon(source, 180, 'public/apple-touch-icon.png');
  await generateFavicon(source, 192, 'public/icon-192.png');
  await generateFavicon(source, 512, 'public/icon-512.png');
}

main().catch(console.error);