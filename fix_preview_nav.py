import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Replace openSitePreview to navigate to /preview page instead of opening modal
old = (b"window.openSitePreview = function(key){\n"
       b"  fetch('/api/demo-url?pack=' + key)\n"
       b"    .then(function(r){ return r.ok ? r.json() : null; })\n"
       b"    .then(function(data){ _openPreviewWithUrl(data ? data.url : null); })\n"
       b"    .catch(function(){ _openPreviewWithUrl(null); });\n"
       b"};")

new = (b"window.openSitePreview = function(key){\n"
       b"  window.location.href = '/preview?pack=' + key;\n"
       b"};")

if old in c:
    c = c.replace(old, new)
    print('openSitePreview updated')
else:
    print('NOT FOUND')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
