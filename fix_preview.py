import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Fix onclick: use data-url if set, else signal "no url"
for demo_id in [b'demo-home-ess', b'demo-home-prem']:
    old = b'id=\\"' + demo_id + b'\\" href=\\"#\\" onclick=\\"openSitePreview(this.dataset.url);return false\\"'
    new = b'id=\\"' + demo_id + b'\\" href=\\"#\\" onclick=\\"openSitePreview(this.dataset.url||null);return false\\"'
    if old in c:
        c = c.replace(old, new)
        print(demo_id.decode(), 'onclick fixed')

# Fix openSitePreview to open modal even without URL
old_fn = b"""window.openSitePreview = function(url){
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
  iframe.src = url;"""

new_fn = b"""window.openSitePreview = function(url){
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

if old_fn in c:
    c = c.replace(old_fn, new_fn)
    print('openSitePreview fixed')
else:
    print('WARNING: openSitePreview not found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
