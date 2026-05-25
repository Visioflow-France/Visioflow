const sharp = require('sharp');

async function extractLogo() {
  const image = await sharp('Gemini_Generated_Image_sdvrysdvrysdvrys.png').raw().toBuffer({ resolveWithObject: true });
  const { data, info } = image;
  const { width, height, channels } = info;

  console.log(`Image dimensions: ${width}x${height}, channels: ${channels}`);

  // Find the logo boundaries by detecting purple/blue gradient colors
  let minX = width, maxX = 0, minY = height, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      // Skip transparent pixels
      if (a < 50) continue;

      // Check if pixel is part of the purple/blue gradient logo
      // The logo has bright purple and blue colors, while background is black
      const brightness = (r + g + b) / 3;
      const isPurpleBlue = (r > 50 && r < 255 && b > 100 && g < 200) &&
                           (b > r * 0.8 && r > g * 1.2);

      if (isPurpleBlue) {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      }
    }
  }

  console.log(`Logo bounds: x=${minX}-${maxX}, y=${minY}-${maxY}`);
  console.log(`Logo size: ${maxX - minX}x${maxY - minY}`);

  // Add padding
  const padding = 100;
  const logoWidth = maxX - minX + padding * 2;
  const logoHeight = maxY - minY + padding * 2;

  const centerX = Math.floor((minX + maxX) / 2);
  const centerY = Math.floor((minY + maxY) / 2);

  const left = Math.max(0, centerX - Math.floor(logoWidth / 2));
  const top = Math.max(0, centerY - Math.floor(logoHeight / 2));

  console.log(`Cropped area: ${left},${top} size ${logoWidth}x${logoHeight}`);

  // Extract and save the logo
  await sharp('Gemini_Generated_Image_sdvrysdvrysdvrys.png')
    .extract({ left, top, width: logoWidth, height: logoHeight })
    .png()
    .toFile('public/logo-extracted.png');

  console.log('Logo extracted to public/logo-extracted.png');

  // Generate favicons from extracted logo
  await sharp('public/logo-extracted.png')
    .resize(16, 16, { fit: 'cover' })
    .png()
    .toFile('public/favicon-16.png');

  await sharp('public/logo-extracted.png')
    .resize(32, 32, { fit: 'cover' })
    .png()
    .toFile('public/favicon-32.png');

  await sharp('public/logo-extracted.png')
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile('public/apple-touch-icon.png');

  await sharp('public/logo-extracted.png')
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toFile('public/icon-192.png');

  await sharp('public/logo-extracted.png')
    .resize(512, 512, { fit: 'cover' })
    .png()
    .toFile('public/icon-512.png');

  console.log('Favicons generated successfully');
}

extractLogo().catch(console.error);