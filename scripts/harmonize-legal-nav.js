/* Harmonise la barre de navigation des pages légales avec le composant
   <Navbar /> standard (cf. demande : navbar identique à 100 % aux pages
   standards). Exécution unique : node scripts/harmonize-legal-nav.js */
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

for (const file of PAGES) {
  const p = path.join(root, file);
  let src = fs.readFileSync(p, 'utf8');
  const before = src;

  // 1) Import du composant standard (après le premier import)
  if (!src.includes("components/Navbar")) {
    src = src.replace(
      /^(import .*?;\n)/m,
      (m) => m + "import Navbar from '../components/Navbar';\n"
    );
  }

  // 2) Nav custom → <Navbar />
  src = src.replace(
    /<nav className="nav">[\s\S]*?<\/nav>/,
    '{/* Navigation standard, identique au reste du site */}\n      <Navbar />'
  );

  // 3) Suppression des règles CSS de l'ancienne nav
  src = src
    .split('\n')
    .filter((line) =>
      !/#vflp \.nav\{|#vflp \.nav-content|#vflp \.logo|#vflp \.nav-links|#vflp \.nav-cta/.test(line)
    )
    .join('\n');

  // 4) Media query : retire seulement le masquage des liens
  src = src.replace(
    /@media\(max-width:768px\)\{#vflp \.nav-links\{display:none\}\s*/g,
    '@media(max-width:768px){'
  );

  // 5) Padding du hero : laisse la place à la pilule flottante (12px + 64px)
  src = src.replace(
    /(#vflp \.hero\{[^}]*?)padding:80px 20px 40px/g,
    '$1padding:130px 20px 50px'
  );

  if (src !== before) {
    fs.writeFileSync(p, src);
    console.log(`✓ ${file}`);
  } else {
    console.log(`· ${file} (aucun changement)`);
  }
}
