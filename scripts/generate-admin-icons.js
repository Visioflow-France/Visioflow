/* Génère les icônes de la PWA admin (public/icon-admin-*.png) à partir
   du « wave » VisioFlow (même tracé que le logo de la page de connexion),
   sur fond bleu nuit pour bien distinguer l'app admin de l'app publique. */
const sharp = require('sharp')
const path = require('path')

const SVG = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6366f1"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="#0f172a"/>
  <path d="M256 256 C209.5 162.9, 93.1 162.9, 93.1 256 C93.1 349.1, 209.5 349.1, 256 256 C302.5 162.9, 418.9 162.9, 418.9 256 C418.9 349.1, 302.5 349.1, 256 256"
        stroke="url(#g)" stroke-width="38" stroke-linecap="round" fill="none"/>
</svg>`

const OUT = path.join(__dirname, '..', 'public')

const TARGETS = [
  ['icon-admin-192.png', 192],
  ['icon-admin-512.png', 512],
  ['icon-admin-apple.png', 180],
]

;(async () => {
  for (const [name, size] of TARGETS) {
    await sharp(Buffer.from(SVG(size))).png().toFile(path.join(OUT, name))
    console.log('OK', name)
  }
})().catch((e) => { console.error(e); process.exit(1) })
