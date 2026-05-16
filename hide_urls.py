import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# 1. Remove data-url from demo link HTML, change onclick to pass ID instead
old_ess = (b'id=\\"demo-home-ess\\" href=\\"#\\" data-url=\\"https://prestige-flow.vercel.app\\" '
           b'onclick=\\"openSitePreview(this.dataset.url||null);return false\\"')
new_ess = (b'id=\\"demo-home-ess\\" href=\\"#\\" '
           b'onclick=\\"openSitePreview(\'ess\');return false\\"')

old_prem = (b'id=\\"demo-home-prem\\" href=\\"#\\" data-url=\\"https://matchaflow.vercel.app\\" '
            b'onclick=\\"openSitePreview(this.dataset.url||null);return false\\"')
new_prem = (b'id=\\"demo-home-prem\\" href=\\"#\\" '
            b'onclick=\\"openSitePreview(\'prem\');return false\\"')

if old_ess in c:
    c = c.replace(old_ess, new_ess); print('ess link updated')
else:
    print('ess NOT FOUND')

if old_prem in c:
    c = c.replace(old_prem, new_prem); print('prem link updated')
else:
    print('prem NOT FOUND')

# 2. Add private URL map before openSitePreview function, update function
old_fn_start = b'window.openSitePreview = function(url){'

url_map = b"""var _DEMO_ = {ess:'https://prestige-flow.vercel.app',prem:'https://matchaflow.vercel.app'};
window.openSitePreview = function(key){
  var url = _DEMO_[key] || null;"""

c = c.replace(old_fn_start, url_map, 1)
print('URL map + function signature updated')

# 3. Remove "Ouvrir dans un onglet" button from modal header (shows URL on hover)
old_ext_btn = (b'        <a id=\\"spm-ext\\" href=\\"#\\" target=\\"_blank\\" rel=\\"noopener\\" class=\\"spm-ext-btn\\">'
               b'Ouvrir dans un onglet &rarr;</a>')
if old_ext_btn in c:
    c = c.replace(old_ext_btn, b'')
    print('External link button removed from header')

# 4. Change visit button from <a href> to <button onclick=window.open>
old_visit = b'<a id=\\"spm-visit\\" href=\\"#\\" class=\\"spm-visit-btn\\" target=\\"_blank\\">'
new_visit = b'<button id=\\"spm-visit\\" class=\\"spm-visit-btn\\" onclick=\\"window._spmOpen&&window._spmOpen();\\">'
if old_visit in c:
    c = c.replace(old_visit, new_visit)
    c = c.replace(b'          Visiter le site complet &rarr;' + b'\\n'
                  + b'        </a>',
                  b'          Visiter le site complet &rarr;' + b'\\n'
                  + b'        </button>')
    print('Visit button changed to JS open')

# 5. Update openSitePreview to set window._spmOpen instead of href
old_visit_set = b"  if(spmVisit) { spmVisit.style.display = 'flex'; spmVisit.href = url; spmVisit.target = '_blank'; }"
new_visit_set = b"  window._spmOpen = function(){ window.open(url,'_blank','noopener'); };\n  if(spmVisit) spmVisit.style.display = 'flex';"
if old_visit_set in c:
    c = c.replace(old_visit_set, new_visit_set)
    print('Visit button JS updated')

# Also update ext button reference (now removed, but clean up the var)
c = c.replace(b"  if(ext) { ext.href = url; }\n", b'')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
