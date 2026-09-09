/* Trace final : crop baseline, nettoyage, split couleurs Visio/flow */
const sharp = require('sharp');
const potrace = require('potrace');
const fs = require('fs');

(async () => {
  const UP = 8;
  // crop y: 0..35 (baseline à 34), x: 3..184 pour retirer les bords
  const png = await sharp('IMG_4782.jpg')
    .greyscale()
    .normalise()
    .extract({ left: 3, top: 0, width: 181, height: 35 })
    .linear(1.4, -80)
    .resize(181 * UP, 35 * UP, { kernel: 'lanczos3' })
    .png()
    .toBuffer();

  potrace.trace(png, {
    threshold: 150,
    turdSize: 26,
    optTolerance: 0.22,
    optCurve: true,
    turnPolicy: 'minority',
  }, (err, svg) => {
    if (err) throw err;
    // parse le path d et split par sous-chemins
    const dMatch = svg.match(/<path d="([^"]+)"[^>]*>/);
    const d = dMatch[1];
    const parts = d.split(/(?=M )/g).filter(s => s.trim());
    // frontière Visio|flow : dans l'espace original x=92.5-3=89.5 → *8 = 716
    const BOUND = 716;
    const A = [], B = [];
    for (const p of parts) {
      const xs = [...p.matchAll(/([-\d.]+) ([-\d.]+)/g)].map(m => parseFloat(m[1]));
      const cx = xs.reduce((a, b) => a + b, 0) / xs.length;
      (cx < BOUND ? A : B).push(p.trim());
    }
    console.log('subpaths Visio:', A.length, 'flow:', B.length);
    const W = 181 * UP, H = 35 * UP;
    const out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <path fill="#2A2C32" fill-rule="evenodd" d="${A.join(' ')}"/>
  <path fill="#3A62E0" fill-rule="evenodd" d="${B.join(' ')}"/>
</svg>`;
    fs.writeFileSync('public/wordmark-navbar.svg', out);
    fs.writeFileSync('_fontmatch/wordmark_final.svg', out);
    console.log('écrit public/wordmark-navbar.svg,', out.length, 'octets');
  });
})();
