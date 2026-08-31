const sharp = require('sharp');

async function extractLogo() {
  // First, let's get the image info
  const metadata = await sharp('Gemini_Generated_Image_sdvrysdvrysdvrys.png').metadata();
  console.log(`Image: ${metadata.width}x${metadata.height}`);

  // Based on visual analysis, the logo VF is roughly centered in the image
  // The image is 1408x768, and the VF logo is in the center area
  // Let's try extracting the center square that contains the logo

  // Center coordinates
  const centerX = Math.floor(metadata.width / 2);
  const centerY = Math.floor(metadata.height / 2);

  // The logo appears to be roughly 300x350 pixels
  // Let's extract a square region centered on the image
  const size = Math.min(metadata.width, metadata.height) * 0.6; // 60% of the smaller dimension

  const left = Math.floor(centerX - size / 2);
  const top = Math.floor(centerY - size / 2);

  console.log(`Extracting: ${left},${top} size ${Math.floor(size)}x${Math.floor(size)}`);

  await sharp('Gemini_Generated_Image_sdvrysdvrysdvrys.png')
    .extract({ left, top, width: Math.floor(size), height: Math.floor(size) })
    .png()
    .toFile('public/logo-extracted.png');

  console.log('Logo extracted');

  // Generate favicons
  const sizes = [16, 32, 180, 192, 512];
  const names = ['favicon-16.png', 'favicon-32.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'];

  for (let i = 0; i < sizes.length; i++) {
    await sharp('public/logo-extracted.png')
      .resize(sizes[i], sizes[i], { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(`public/${names[i]}`);
    console.log(`${names[i]} generated`);
  }

  console.log('All favicons generated');
}

extractLogo().catch(console.error);