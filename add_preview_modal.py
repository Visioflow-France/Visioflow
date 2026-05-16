import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

NL = b'\\n'

# ── 1. Add modal HTML right after </nav> ──────────────────────────────────────
nav_close = c.find(b'\\n<div id=\\"vf-scroll-hint\\"')

modal_html = (
    NL
    + b'<!-- SITE PREVIEW MODAL -->'
    + NL
    + b'<div id=\\"spm\\" style=\\"display:none;position:fixed;inset:0;z-index:9000;'
    + b'display:none;align-items:center;justify-content:center\\">'
    + NL
    + b'  <div class=\\"spm-ov\\" onclick=\\"closeSitePreview()\\"></div>'
    + NL
    + b'  <div class=\\"spm-box\\">'
    + NL
    + b'    <div class=\\"spm-head\\">'
    + NL
    + b'      <span class=\\"spm-brand\\">Visio<span style=\\"color:var(--blue)\\">Flow</span>'
    + b' &mdash; Aper&ccedil;u du site</span>'
    + NL
    + b'      <div class=\\"spm-acts\\">'
    + NL
    + b'        <a id=\\"spm-ext\\" href=\\"#\\" target=\\"_blank\\" rel=\\"noopener\\" class=\\"spm-ext-btn\\">'
    + b'Ouvrir dans un onglet &rarr;</a>'
    + NL
    + b'        <button class=\\"spm-close\\" onclick=\\"closeSitePreview()\\">&#10005;</button>'
    + NL
    + b'      </div>'
    + NL
    + b'    </div>'
    + NL
    + b'    <div class=\\"spm-body\\">'
    + NL
    + b'      <iframe id=\\"spm-iframe\\" src=\\"\\" frameborder=\\"0\\" '
    + b'allow=\\"fullscreen\\" title=\\"Aper&ccedil;u du site\\"></iframe>'
    + NL
    + b'      <div class=\\"spm-blocked\\" id=\\"spm-blocked\\" style=\\"display:none\\">'
    + NL
    + b'        <div class=\\"spm-blocked-ico\\">&#128279;</div>'
    + NL
    + b'        <p>Ce site ne peut pas s&apos;&ecirc;tre affich&eacute; ici.</p>'
    + NL
    + b'        <a id=\\"spm-blocked-link\\" href=\\"#\\" target=\\"_blank\\" class=\\"spm-ext-btn\\">'
    + b'Ouvrir dans un onglet &rarr;</a>'
    + NL
    + b'      </div>'
    + NL
    + b'    </div>'
    + NL
    + b'  </div>'
    + NL
    + b'</div>'
)

c = c[:nav_close] + modal_html + c[nav_close:]
print('Modal HTML inserted')

# ── 2. Update demo links to call openSitePreview() ───────────────────────────
for demo_id in [b'demo-home-ess', b'demo-home-prem']:
    old = b'id=\\"' + demo_id + b'\\" href=\\"#\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"'
    new = b'id=\\"' + demo_id + b'\\" href=\\"#\\" onclick=\\"openSitePreview(this.dataset.url);return false\\"'
    if old in c:
        c = c.replace(old, new)
        print(demo_id.decode(), 'onclick updated')
    else:
        print('NOT FOUND:', demo_id.decode())

# ── 3. Add JS functions before goHomePack ────────────────────────────────────
insert_before = c.find(b'window.goHomePack = function')

preview_js = b"""window.openSitePreview = function(url){
  if(!url || url === '#' || url === '') return;
  var modal = document.getElementById('spm');
  var iframe = document.getElementById('spm-iframe');
  var blocked = document.getElementById('spm-blocked');
  var ext = document.getElementById('spm-ext');
  var blockedLink = document.getElementById('spm-blocked-link');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  iframe.style.display = 'block';
  blocked.style.display = 'none';
  ext.href = url;
  blockedLink.href = url;
  iframe.src = url;
  // Detect if iframe is blocked (X-Frame-Options)
  iframe.onload = function(){
    try {
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      if(!doc || doc.body.innerHTML === ''){
        iframe.style.display = 'none';
        blocked.style.display = 'flex';
      }
    } catch(e){
      iframe.style.display = 'none';
      blocked.style.display = 'flex';
    }
  };
};
window.closeSitePreview = function(){
  var modal = document.getElementById('spm');
  var iframe = document.getElementById('spm-iframe');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  setTimeout(function(){ iframe.src = ''; }, 300);
};
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') window.closeSitePreview && window.closeSitePreview();
});
"""

c = c[:insert_before] + preview_js + c[insert_before:]
print('Preview JS inserted')

# ── 4. Also update applyConfigToHTML to set data-url instead of href ──────────
# When URL is set via dashboard, update data-url on demo links
old_replace = (b'h = h.replace(new RegExp(`(id="${homeId}" href=")[^"]*"`), `$1${url}"`)\r\n'
               b'      // show the link if url set\r\n'
               b'      h = h.replace(new RegExp(`(id="${homeId}"[^>]*)style="display:none"`), `$1style=""`)')

new_replace = (b'h = h.replace(new RegExp(`(id="${homeId}" href=")[^"]*"`), `$1#"`)\r\n'
               b'      h = h.replace(new RegExp(`(id="${homeId}"[^>]*data-url=")[^"]*"`), `$1${url}"`)\r\n'
               b'      // show the link if url set\r\n'
               b'      h = h.replace(new RegExp(`(id="${homeId}"[^>]*)style="display:none"`), `$1style=""`)')

if old_replace in c:
    c = c.replace(old_replace, new_replace)
    print('applyConfigToHTML updated for data-url')
else:
    print('WARNING: applyConfigToHTML pattern not found (non-critical)')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
