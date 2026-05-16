import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Remove the _DEMO_ map and rewrite openSitePreview to fetch from API
old_fn = (b"var _DEMO_ = {ess:'https://prestige-flow.vercel.app',prem:'https://matchaflow.vercel.app'};\n"
          b"window.openSitePreview = function(key){\n"
          b"  var url = _DEMO_[key] || null;")

new_fn = (b"window.openSitePreview = function(key){\n"
          b"  fetch('/api/demo-url?pack=' + key)\n"
          b"    .then(function(r){ return r.ok ? r.json() : null; })\n"
          b"    .then(function(data){ _openPreviewWithUrl(data ? data.url : null); })\n"
          b"    .catch(function(){ _openPreviewWithUrl(null); });\n"
          b"};\n"
          b"function _openPreviewWithUrl(url){")

if old_fn in c:
    c = c.replace(old_fn, new_fn)
    print('openSitePreview updated to use API')
else:
    print('NOT FOUND - checking...')
    idx = c.find(b'_DEMO_')
    if idx >= 0:
        print(repr(c[idx:idx+120]))

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])

# Verify no trace of real URLs in client JS
with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()
for url in [b'prestige-flow', b'matchaflow']:
    print(f'{url.decode()} in client JS:', url in c)
