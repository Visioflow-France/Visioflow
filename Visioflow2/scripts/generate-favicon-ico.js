const sharp = require('sharp');
const fs = require('fs');

async function generateFaviconIco() {
  // Generate multiple sizes for favicon.ico
  const sizes = [16, 32, 48];
  const pngBuffers = [];

  for (const size of sizes) {
    const buffer = await sharp('public/favicon-source.png')
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push(buffer);
  }

  // Create a simple ICO header
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type: 1 (ICO)
  icoHeader.writeUInt16LE(sizes.length, 4); // Number of images

  // Calculate offset and write directory entries
  let offset = 22 + (sizes.length * 16);
  let dataOffset = 0;

  const icoData = Buffer.concat([icoHeader]);

  // Write directory entries for each image
  const directoryEntries = Buffer.alloc(sizes.length * 16);
  const pngDatas = [];

  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i] >= 256 ? 0 : sizes[i];
    const pngBuffer = pngBuffers[i];

    directoryEntries.writeUInt8(size, i * 16); // Width
    directoryEntries.writeUInt8(size, i * 16 + 1); // Height
    directoryEntries.writeUInt8(0, i * 16 + 2); // Color palette
    directoryEntries.writeUInt8(0, i * 16 + 3); // Reserved
    directoryEntries.writeUInt16LE(1, i * 16 + 4); // Color planes
    directoryEntries.writeUInt16LE(32, i * 16 + 6); // Bits per pixel
    directoryEntries.writeUInt32LE(pngBuffer.length, i * 16 + 8); // Size
    directoryEntries.writeUInt32LE(offset, i * 16 + 12); // Offset

    pngDatas.push(pngBuffer);
    offset += pngBuffer.length;
  }

  const finalIco = Buffer.concat([icoData, directoryEntries, ...pngDatas]);

  fs.writeFileSync('public/favicon.ico', finalIco);
  console.log('favicon.ico generated successfully');
}

generateFaviconIco().catch(console.error);