const fs = require('fs');
const filePath = 'c:/Users/User/Desktop/Visioflow2/Visioflow2/Visioflow2/pages/index.js';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Wave SVGs — with ESCAPED quotes (backslash-quote) to match PAGE_HTML convention
// In the file, all HTML attributes use \" not "
const waveSvg1 = '<div class=\\"wave-divider wave-1\\"><svg viewBox=\\"0 0 1440 100\\" preserveAspectRatio=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M0,40 C240,90 480,100 720,60 C960,20 1200,80 1440,45 L1440,100 L0,100 Z\\"/></svg></div>';
const waveSvg2 = '<div class=\\"wave-divider wave-2\\"><svg viewBox=\\"0 0 1440 100\\" preserveAspectRatio=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M0,45 C360,100 600,10 900,60 C1100,90 1300,30 1440,55 L1440,100 L0,100 Z\\"/></svg></div>';
const waveSvg3 = '<div class=\\"wave-divider wave-3\\"><svg viewBox=\\"0 0 1440 100\\" preserveAspectRatio=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M0,55 C200,10 480,90 720,50 C960,10 1200,80 1440,40 L1440,100 L0,100 Z\\"/></svg></div>';

// Build wave strings with literal \n (backslash-n) for the JS string
const bslash = String.fromCharCode(92); // backslash character
const newlineEsc = bslash + 'n'; // literal \n (two chars)

const wave1 = newlineEsc + waveSvg1 + newlineEsc;
const wave2 = newlineEsc + waveSvg2 + newlineEsc;
const wave3 = newlineEsc + waveSvg3 + newlineEsc;

let modified = lines[5];

// Insert wave 1 before <!-- SECTION 1 -->
const marker1 = '<!-- SECTION 1 -->';
const idx1 = modified.indexOf(marker1);
if (idx1 === -1) { console.log('ERROR: Cannot find SECTION 1 marker'); process.exit(1); }
modified = modified.substring(0, idx1) + wave1 + modified.substring(idx1);
console.log('Inserted wave 1 before SECTION 1 at char ' + idx1);

// Insert wave 2 before <!-- TARIFS -->
const marker2 = '<!-- TARIFS -->';
const idx2 = modified.indexOf(marker2);
if (idx2 === -1) { console.log('ERROR: Cannot find TARIFS marker'); process.exit(1); }
modified = modified.substring(0, idx2) + wave2 + modified.substring(idx2);
console.log('Inserted wave 2 before TARIFS at char ' + idx2);

// Insert wave 3 before <!-- FORM -->
const marker3 = '<!-- FORM -->';
const idx3 = modified.indexOf(marker3);
if (idx3 === -1) { console.log('ERROR: Cannot find FORM marker'); process.exit(1); }
modified = modified.substring(0, idx3) + wave3 + modified.substring(idx3);
console.log('Inserted wave 3 before FORM at char ' + idx3);

// Verify no actual newlines were introduced
const newlineCount = (modified.match(/\n/g) || []).length;
console.log('Actual newlines in modified line: ' + newlineCount + ' (should be 0)');

if (newlineCount > 0) {
  console.log('ERROR: Actual newlines detected! Aborting write.');
  process.exit(1);
}

// Verify escaped quotes
const unescapedQuotePattern = /[^\\]"/g;
const wave1Match = modified.substring(idx1, idx1 + 500).match(unescapedQuotePattern);
console.log('Unescaped quotes check in wave-1 area:', wave1Match ? 'WARNING: found ' + wave1Match.length : 'OK (none)');

lines[5] = modified;
fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('File written successfully');
console.log('New line 6 length: ' + modified.length);
console.log('wave-1 present:', modified.includes('wave-1'));
console.log('wave-2 present:', modified.includes('wave-2'));
console.log('wave-3 present:', modified.includes('wave-3'));
