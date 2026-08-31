const fs = require('fs');
let content = fs.readFileSync('pages/index.js', 'utf8');
const origLen = content.length;

// Helper: verify removal is reasonable
function removeSection(label, startStr, endStr) {
  const startPos = content.indexOf(startStr);
  const endPos = content.indexOf(endStr);
  if (startPos < 0) { console.log(label + ': START not found'); return; }
  if (endPos < 0) { console.log(label + ': END not found'); return; }
  if (endPos <= startPos) { console.log(label + ': END before START'); return; }
  const len = endPos - startPos;
  if (len > 5000) { console.log(label + ': range too large (' + len + '), skipping'); return; }
  console.log(label + ': removing ' + len + ' chars from ' + startPos + ' to ' + endPos);
  content = content.substring(0, startPos) + content.substring(endPos);
  console.log(label + ': OK');
}

// =====================================================================
// FIX 1: Fix setCuisine scope - add proper closing after DOM updates
// =====================================================================
// The setCuisine function currently doesn't have a closing } before the VFA section
// We need to add: renderBControls();renderSim();\r\n}\r\n\r\n before ADMIN VISIOFLOW

const setCuisineTarget = "  if(aw) aw.className='autre-wrap'+(id==='autre'?' show':'');\r\n  /* ===== ADMIN VISIOFLOW =====";
const setCuisineReplace = "  if(aw) aw.className='autre-wrap'+(id==='autre'?' show':'');\r\n  renderBControls();renderSim();\r\n}\r\n\r\n/* ===== ADMIN VISIOFLOW =====";

if (content.includes(setCuisineTarget)) {
  content = content.replace(setCuisineTarget, setCuisineReplace);
  console.log('Fix1: setCuisine closing added OK');
} else {
  // Try LF version
  const setCuisineTargetLF = "  if(aw) aw.className='autre-wrap'+(id==='autre'?' show':'');\n  /* ===== ADMIN VISIOFLOW =====";
  const setCuisineReplaceLF = "  if(aw) aw.className='autre-wrap'+(id==='autre'?' show':'');\n  renderBControls();renderSim();\n}\n\n/* ===== ADMIN VISIOFLOW =====";
  if (content.includes(setCuisineTargetLF)) {
    content = content.replace(setCuisineTargetLF, setCuisineReplaceLF);
    console.log('Fix1: setCuisine closing added OK (LF version)');
  } else {
    console.log('Fix1: FAILED - target not found');
    // Debug: show what's around this area
    const p = content.indexOf("aw.className='autre-wrap'");
    if (p >= 0) console.log('  Found autre-wrap at', p, ':', JSON.stringify(content.substring(p, p + 80)));
  }
}

// Remove old setCuisine closing at end of form block (was: renderBControls();renderSim();\n}  just before function setAutreName)
const oldClose1 = "renderBControls();renderSim();\r\n}\r\nfunction setAutreName";
const newClose1 = "function setAutreName";
if (content.includes(oldClose1)) {
  content = content.replace(oldClose1, newClose1);
  console.log('Fix1b: old setCuisine close removed OK (CRLF)');
} else {
  const oldClose1LF = "renderBControls();renderSim();\nfunction setAutreName";
  if (content.includes(oldClose1LF)) {
    content = content.replace(oldClose1LF, "function setAutreName");
    console.log('Fix1b: old setCuisine close removed OK (LF)');
  } else {
    console.log('Fix1b: old close pattern not found');
  }
}

// =====================================================================
// FIX 2: Remove menu photo toggle + photo zone from step 2
// =====================================================================
const toggleComment = '<!-- Menu toggle: plat par plat ou photo -->';
const menuSingleComment = '<!-- Menu pour Essentiel';
removeSection('Fix2(toggle)', toggleComment, menuSingleComment);

// =====================================================================
// FIX 3: Remove "Vos comptes de paiement" section from step 3
// =====================================================================
// The payment section starts with this UNIQUE string (credit card SVG + title):
// In the raw JS file (with escaped quotes), the SVG has: <rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\"/>
// We use the text just before the section title as the start marker

// Find payment section: look for the unique credit card SVG path in the form area
// The payment section title SVG is: <rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\"/><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"/>
// This appears in the PAGE_HTML string as escaped text

// Since the PAGE_HTML is on a single line with escaped newlines,
// let's find the specific pattern around the payment section

// The payment section div opens as: \n      <div class=\"form-section\"><div class=\"form-section-title\">
// We can identify it by the unique payment title text: Vos comptes de paiement

// Strategy: find the specific html comment or text that UNIQUELY precedes the payment section
// The payment section is the 2nd form-section in step 3
// Step 3 starts with the delivery section (id="form-delivery-section")
// Payment section follows right after delivery section ends

// Find the end of the delivery section (the closing </div></div> after minimum de commande input)
// Unique string near delivery section end:
const deliveryEndMarker = 'placeholder="Ex: 15&euro;"/></div></div></div>';
const paymentSectionStart = 'Vos comptes de paiement';
const nomSectionStart = 'Nom de domaine';

const delivEnd = content.indexOf(deliveryEndMarker);
const payStart = content.indexOf(paymentSectionStart);
const nomStart = content.indexOf(nomSectionStart);

console.log('Delivery end marker at:', delivEnd);
console.log('Payment at:', payStart);
console.log('Nom at:', nomStart);

if (delivEnd >= 0 && payStart > delivEnd && nomStart > payStart) {
  // The payment section includes the </div>\n      <div ... before Vos comptes
  // and ends just before the Nom de domaine section opening
  // Find the exact start: after deliveryEndMarker, there should be \n      <div ...payment section...
  const afterDelivEnd = delivEnd + deliveryEndMarker.length;

  // Find end of payment section: the <div that opens the Nom de domaine section
  // The Nom section is preceded by: </div></div>\n      <div class=\"form-section\">\n        <div class=\"form-section-title\">
  // Let's look for the Nom section opening by finding the content between payment end and Nom title
  // The nom section uses a globe SVG with: <circle cx=\"12\" cy=\"12\" r=\"10\"/>
  // But this might appear elsewhere too. Let's use a more specific context.

  // Find the text just before Nom de domaine title:
  // In the raw file: ...\n        <div class=\"form-section-title\"><svg...globe...Nom de domaine
  // Look for "Nom de domaine" and then go back to find "\n      <div" that starts the section

  // The payment section content between afterDelivEnd and nomStart:
  const paymentContent = content.substring(afterDelivEnd, nomStart);
  console.log('Content between delivery end and Nom:', paymentContent.length, 'chars');
  console.log('First 80 chars:', paymentContent.substring(0, 80).replace(/\n/g, '[N]'));
  console.log('Last 80 chars:', paymentContent.substring(paymentContent.length - 80).replace(/\n/g, '[N]'));

  // The payment section ends and the Nom section starts
  // Find the "\n      <div" that starts the Nom section (the last one before Nom title text)
  // Look backwards from nomStart
  const beforeNom = content.substring(afterDelivEnd, nomStart);
  const lastNomSectionDiv = beforeNom.lastIndexOf('\n      <div');
  console.log('Last \\n      <div before Nom at offset:', lastNomSectionDiv);

  if (lastNomSectionDiv >= 0) {
    const nomSectionAbsolute = afterDelivEnd + lastNomSectionDiv;
    console.log('Nom section absolute start:', nomSectionAbsolute);
    console.log('Content:', content.substring(nomSectionAbsolute, nomSectionAbsolute + 60).replace(/\n/g, '[N]'));

    // Remove from afterDelivEnd to nomSectionAbsolute
    const toRemoveLen = nomSectionAbsolute - afterDelivEnd;
    console.log('Removing payment section:', toRemoveLen, 'chars');
    content = content.substring(0, afterDelivEnd) + content.substring(nomSectionAbsolute);
    console.log('Fix3: Payment section removed OK');
  } else {
    console.log('Fix3: Could not find Nom section boundary');
  }
} else {
  console.log('Fix3: FAILED - markers not found properly');
}

// Verify
const verifyChecks = [
  ['setCuisine fixed', content.indexOf('renderBControls();renderSim();\r\n}\r\n\r\n/* ===== ADMIN') >= 0 || content.indexOf('renderBControls();renderSim();\n}\n\n/* ===== ADMIN') >= 0],
  ['form-step-0 exists', content.indexOf('form-step-0') >= 0],
  ['form-step-1 exists', content.indexOf('form-step-1') >= 0],
  ['form-step-2 exists', content.indexOf('form-step-2') >= 0],
  ['form-step-3 exists', content.indexOf('form-step-3') >= 0],
  ['menu toggle removed', content.indexOf('Menu toggle: plat par plat') < 0],
  ['Photos du restaurant kept', content.indexOf('Photos du restaurant') >= 0],
  ['Payment removed', content.indexOf('Vos comptes de paiement') < 0],
  ['Nom de domaine kept', content.indexOf('Nom de domaine') >= 0],
  ['file length OK', content.length > origLen * 0.7],
];

console.log('\n=== VERIFICATION ===');
verifyChecks.forEach(([name, ok]) => console.log((ok ? 'OK' : 'FAIL') + ': ' + name));

fs.writeFileSync('pages/index.js', content, 'utf8');
console.log('\nSaved. Original:', origLen, 'chars | New:', content.length, 'chars | Removed:', origLen - content.length);
