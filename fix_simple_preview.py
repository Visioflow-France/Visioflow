import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Replace BOTH openSitePreview definitions with a simple window.open
old1 = (b"window.openSitePreview = function(key){\n"
        b"  window.location.href = '/preview?pack=' + key;\n"
        b"};")
new_fn = (b"window.openSitePreview = function(key){\n"
          b"  var urls = {ess:'https://prestige-flow.vercel.app',prem:'https://matchaflow.vercel.app'};\n"
          b"  var url = urls[key];\n"
          b"  if(url) window.open(url,'_blank','noopener');\n"
          b"};")

count = c.count(old1)
print(f'Found {count} occurrences')
c = c.replace(old1, new_fn)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
