/* Complète harmonize-legal-nav.js : import robuste CRLF + restauration de la
   media query info-list perdue avec l'ancienne nav. */
const fs = require('fs');
const path = require('path');

const PAGES = [
  'mentions-legales.js',
  'politique-confidentialite.js',
  'politique-cookies.js',
  'cgu.js',
  'cgv.js',
];

const root = path.join(__dirname, '..', 'pages');
const MEDIA = '@media(max-width:768px){#vflp .info-list{grid-template-columns:1fr}}';

for (const file of PAGES) {
  const p = path.join(root, file);
  let src = fs.readFileSync(p, 'utf8');
  const before = src;

  // 1) Import (tolère CRLF et LF)
  if (!src.includes("components/Navbar")) {
    src = src.replace(
      /^(import .*?;\r?\n)/m,
      (m) => m + "import Navbar from '../components/Navbar';\n"
    );
  }

  // 2) Restaure la media query responsive de la grille d'infos
  //    (supprimée par erreur avec les règles de l'ancienne nav)
  if (!src.includes('#vflp .info-list{grid-template-columns:1fr}')) {
    const styleEnd = src.lastIndexOf('`}</style>');
    if (styleEnd !== -1) {
      src = src.slice(0, styleEnd) + '\n          ' + MEDIA + '\n        ' + src.slice(styleEnd);
    }
  }

  if (src !== before) {
    fs.writeFileSync(p, src);
    console.log(`✓ ${file}`);
  } else {
    console.log(`· ${file} (rien à faire)`);
  }

  // Vérifications
  if (!src.includes("import Navbar from '../components/Navbar';")) console.error(`  ✗ import manquant : ${file}`);
  if (!src.includes('<Navbar />')) console.error(`  ✗ <Navbar /> manquant : ${file}`);
}
