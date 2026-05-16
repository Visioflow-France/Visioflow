import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Replace openSitePreview function with screenshot-based approach
old_fn = b"""window.openSitePreview = function(url){
  var modal = document.getElementById('spm');
  var iframe = document.getElementById('spm-iframe');
  var blocked = document.getElementById('spm-blocked');
  var ext = document.getElementById('spm-ext');
  var blockedLink = document.getElementById('spm-blocked-link');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if(!url || url === '#' || url === 'null' || url === ''){
    iframe.style.display = 'none';
    blocked.style.display = 'flex';
    blocked.querySelector('p').textContent = 'Aucune URL configur\\u00e9e. Ajoutez un lien dans le dashboard.';
    return;
  }
  iframe.style.display = 'block';
  blocked.style.display = 'none';
  ext.href = url;
  blockedLink.href = url;
  iframe.src = url;"""

new_fn = b"""window.openSitePreview = function(url){
  var modal = document.getElementById('spm');
  var ext = document.getElementById('spm-ext');
  var spmImg = document.getElementById('spm-img');
  var spmVisit = document.getElementById('spm-visit');
  var spmNourl = document.getElementById('spm-nourl');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if(!url || url === '#' || url === 'null' || url === ''){
    if(spmImg) spmImg.style.display = 'none';
    if(spmVisit) spmVisit.style.display = 'none';
    if(spmNourl) spmNourl.style.display = 'flex';
    return;
  }
  if(spmNourl) spmNourl.style.display = 'none';
  if(spmImg) {
    spmImg.style.display = 'block';
    spmImg.src = 'https://api.microlink.io/?url=' + encodeURIComponent(url) + '&screenshot=true&meta=false&embed=screenshot.url';
    spmImg.onclick = function(){ window.open(url,'_blank'); };
  }
  if(spmVisit) { spmVisit.style.display = 'flex'; spmVisit.href = url; spmVisit.target = '_blank'; }
  if(ext) { ext.href = url; }"""

if old_fn in c:
    c = c.replace(old_fn, new_fn)
    print('openSitePreview updated')
else:
    print('NOT FOUND')

# Replace modal body HTML: remove iframe, add screenshot img + visit button
old_body = (
    b'    <div class=\\"spm-body\\">' + b'\\n'
    + b'      <iframe id=\\"spm-iframe\\" src=\\"\\" frameborder=\\"0\\" '
    + b'allow=\\"fullscreen\\" title=\\"Aper&ccedil;u du site\\"></iframe>' + b'\\n'
    + b'      <div class=\\"spm-blocked\\" id=\\"spm-blocked\\" style=\\"display:none\\">' + b'\\n'
    + b'        <div class=\\"spm-blocked-ico\\">&#128279;</div>' + b'\\n'
    + b'        <p>Ce site ne peut pas s&apos;&ecirc;tre affich&eacute; ici.</p>' + b'\\n'
    + b'        <a id=\\"spm-blocked-link\\" href=\\"#\\" target=\\"_blank\\" class=\\"spm-ext-btn\\">'
    + b'Ouvrir dans un onglet &rarr;</a>' + b'\\n'
    + b'      </div>' + b'\\n'
    + b'    </div>'
)

new_body = (
    b'    <div class=\\"spm-body\\">' + b'\\n'
    + b'      <div class=\\"spm-nourl\\" id=\\"spm-nourl\\" style=\\"display:none\\">' + b'\\n'
    + b'        <p>Aucune URL configur&eacute;e.</p>' + b'\\n'
    + b'      </div>' + b'\\n'
    + b'      <div class=\\"spm-screenshot-wrap\\">' + b'\\n'
    + b'        <img id=\\"spm-img\\" src=\\"\\" alt=\\"Aper&ccedil;u\\" class=\\"spm-screenshot\\" />' + b'\\n'
    + b'        <div class=\\"spm-screenshot-grad\\"></div>' + b'\\n'
    + b'        <a id=\\"spm-visit\\" href=\\"#\\" class=\\"spm-visit-btn\\" target=\\"_blank\\">' + b'\\n'
    + b'          Visiter le site complet &rarr;' + b'\\n'
    + b'        </a>' + b'\\n'
    + b'      </div>' + b'\\n'
    + b'    </div>'
)

if old_body in c:
    c = c.replace(old_body, new_body)
    print('Modal body updated')
else:
    print('Modal body NOT FOUND - trying alternate search')
    idx = c.find(b'spm-iframe')
    if idx >= 0:
        print(repr(c[idx-30:idx+100]))

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
