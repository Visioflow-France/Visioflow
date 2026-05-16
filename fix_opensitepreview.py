import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Find the useEffect closing }, []) inside the Home component
# and insert openSitePreview just before it
comp_start = c.find(b'export default function Home')
ue_close = c.find(b'}, [])', comp_start)

# Make sure it's the right }, []) - show context
print('useEffect close context:', repr(c[ue_close-30:ue_close+20]))

# Insert openSitePreview + goHomePack BEFORE }, [])
insert = (
    b"\n"
    b"window.openSitePreview = function(key){\n"
    b"  window.location.href = '/preview?pack=' + key;\n"
    b"};\n"
    b"window.goHomePack = function(pack){\n"
    b"  var hf = document.getElementById('home-form');\n"
    b"  if(hf){ hf.style.display='block'; setTimeout(function(){ hf.scrollIntoView({behavior:'smooth',block:'start'}); },80); }\n"
    b"  if(window.goToForm) window.goToForm(pack);\n"
    b"};\n"
)

c = c[:ue_close] + insert + c[ue_close:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])

# Verify
with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()
print('openSitePreview in useEffect:', c.count(b'window.openSitePreview = function'))
