const sharp = require('sharp');

async function generateFavicon(size, outputPath) {
  // Créer un SVG temporaire avec le logo
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00D4FF"/>
          <stop offset="100%" style="stop-color:#0071E3"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="${size * 0.22}" fill="url(#grad)"/>
      <path d="M50 25 L75 65 L60 65 L50 50 L40 65 L25 65 Z" fill="white"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`${outputPath} créé`);
}

async function main() {
  await generateFavicon(16, 'public/favicon-16.png');
  await generateFavicon(32, 'public/favicon-32.png');
  await generateFavicon(180, 'public/apple-touch-icon.png');
  await generateFavicon(192, 'public/icon-192.png');
  await generateFavicon(512, 'public/icon-512.png');
}

main().catch(console.error);