const sharp = require('sharp');

/* Extraction du badge : masque rounded-rect supersamplé x4 → anti-aliasing parfait */
(async () => {
  const SRC = 'Gemini_Generated_Image_pfe143pfe143pfe1.png';
  const img = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = img.info.width, H = img.info.height, CH = img.info.channels, d = img.data;

  const minx = 169, miny = 168, maxx = 854, maxy = 851;
  const w = maxx - minx + 1, h = maxy - miny + 1;
  const R = 140; // rayon mesuré

  // Masque 4x supersamplé
  const SS = 4;
  const sw = w * SS, sh = h * SS, sR = R * SS;
  const inside = (x, y) => {
    const cx = Math.min(Math.max(x, sR), sw - 1 - sR);
    const cy = Math.min(Math.max(y, sR), sh - 1 - sR);
    const dx = x - cx, dy = y - cy;
    return dx * dx + dy * dy <= sR * sR;
  };
  // Cumulative par pixel cible : moyenne des 4x4 sous-pixels
  const out = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let cov = 0;
      for (let sy = 0; sy < SS; sy++) for (let sx = 0; sx < SS; sx++) if (inside(x * SS + sx, y * SS + sy)) cov++;
      const alpha = Math.round((cov / (SS * SS)) * 255);
      const si = ((miny + y) * W + (minx + x)) * CH;
      const di = (y * w + x) * 4;
      out[di] = d[si]; out[di + 1] = d[si + 1]; out[di + 2] = d[si + 2]; out[di + 3] = alpha;
    }
  }
  await sharp(out, { raw: { width: w, height: h, channels: 4 } }).png({ compressionLevel: 9 }).toFile('public/logo-navbar-icon.png');
  console.log('OK public/logo-navbar-icon.png', w + 'x' + h);

  // Vérification ASCII du résultat
  const v = await sharp('public/logo-navbar-icon.png').resize(60, 30, { fit: 'fill' }).greyscale().raw().toBuffer({ resolveWithObject: true });
  for (let y = 0; y < v.info.height; y++) {
    let l = '';
    for (let x = 0; x < v.info.width; x++) {
      const i = (y * v.info.width + x) * 1;
      const a = v.data[i];
      l += a < 40 ? '#' : (a < 100 ? '+' : (a < 200 ? '.' : ' '));
    }
    console.log(l);
  }
})();
