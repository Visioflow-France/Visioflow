/* Remplace les tirets (—) utilisés comme séparateur de deux phrases ou
   propositions par des virgules, sur l'ensemble des pages du site.
   Les tirets des balises <title>/meta et des libellés « Article N - X »
   ne sont pas des séparateurs de phrases : ils sont conservés.
   Exécution unique : node scripts/replace-separator-dashes.js */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'pages');

/* [fichier, ancien, nouveau] */
const REPLACEMENTS = [
  // contact.js
  ['contact.js',
    'Écrivez-nous ou appelez-nous directement — nous répondons',
    'Écrivez-nous ou appelez-nous directement, nous répondons'],

  // comment-ca-marche.js
  ['comment-ca-marche.js',
    'et référencement Google inclus — tout est pris en charge.',
    'et référencement Google inclus, tout est pris en charge.'],
  ['comment-ca-marche.js',
    "nous continuons de le modifier — sans frais supplémentaires.",
    "nous continuons de le modifier, sans frais supplémentaires."],
  ['comment-ca-marche.js',
    'Pas de jargon, pas de surprises — juste des résultats.',
    'Pas de jargon, pas de surprises, juste des résultats.'],

  // a-propos.js
  ['a-propos.js',
    'Pas de jargon, pas de surprises — juste des',
    'Pas de jargon, pas de surprises, juste des'],

  // index.js
  ['index.js',
    'Sites web 100% adaptables — référencement Google inclus —, gestion Google Business,',
    'Sites web 100% adaptables, référencement Google inclus, gestion Google Business,'],
  ['index.js',
    'nous continuons de le modifier — et le',
    'nous continuons de le modifier, et le'],

  // mentions-legales.js
  ['mentions-legales.js',
    'apeCode: "62 01 Z — Programmation informatique"',
    'apeCode: "62 01 Z, Programmation informatique"'],
  ['mentions-legales.js',
    'la <strong>CNIL</strong> (3 place de Fontenoy — TSA 80715 —',
    'la <strong>CNIL</strong> (3 place de Fontenoy, TSA 80715,'],
  ['mentions-legales.js',
    '<strong> Médiateur des entreprises</strong> — 12 square Desnouettes, 75015 Paris.',
    '<strong> Médiateur des entreprises</strong>, 12 square Desnouettes, 75015 Paris.'],

  // politique-confidentialite.js
  ['politique-confidentialite.js',
    '<li>Prestataire de paiement (Stripe Payments Europe) — traitement des transactions ;</li>',
    '<li>Prestataire de paiement (Stripe Payments Europe), traitement des transactions ;</li>'],
  ['politique-confidentialite.js',
    '<li>Hébergeur du site (Vercel Inc.) — stockage et mise en ligne du site ;</li>',
    '<li>Hébergeur du site (Vercel Inc.), stockage et mise en ligne du site ;</li>'],
  ['politique-confidentialite.js',
    '3 place de Fontenoy — TSA 80715 — 75334 PARIS CEDEX 07',
    '3 place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07'],
  ['politique-confidentialite.js',
    "Téléphone : 01 53 73 22 22 — Site web :",
    "Téléphone : 01 53 73 22 22, site web :"],

  // politique-cookies.js
  ['politique-cookies.js',
    "Maintien de la session d'authentification (Firebase Auth) — nécessaire pour accéder",
    "Maintien de la session d'authentification (Firebase Auth), nécessaire pour accéder"],
  ['politique-cookies.js',
    "Mémorisation de votre préférence d'affichage (thème clair/sombre) — déposé via",
    "Mémorisation de votre préférence d'affichage (thème clair/sombre), déposé via"],

  // cgv.js
  ['cgv.js',
    '« Formulaire de rétractation — Addressé à : VisioFlow, Christian Micillo,',
    '« Formulaire de rétractation, adressé à : VisioFlow, Christian Micillo,'],
  ['cgv.js',
    '<strong> Médiateur des entreprises</strong> — 12 square Desnouettes, 75015 Paris',
    '<strong> Médiateur des entreprises</strong>, 12 square Desnouettes, 75015 Paris'],

  // Lignes © des pages légales
  ...['cgu.js', 'cgv.js', 'politique-confidentialite.js', 'politique-cookies.js', 'mentions-legales.js'].map((f) => [
    f,
    'VisioFlow — Tous droits réservés.',
    'VisioFlow, tous droits réservés.',
  ]),
];

let ok = 0;
const missing = [];

for (const [file, from, to] of REPLACEMENTS) {
  const p = path.join(root, file);
  let src = fs.readFileSync(p, 'utf8');
  if (!src.includes(from)) {
    missing.push(`${file} : introuvable → ${from.slice(0, 60)}…`);
    continue;
  }
  src = src.split(from).join(to);
  fs.writeFileSync(p, src);
  ok++;
}

console.log(`✓ ${ok} remplacement(s) effectué(s)`);
if (missing.length) {
  console.log('✗ Non trouvés :');
  missing.forEach((m) => console.log('  - ' + m));
  process.exitCode = 1;
}
