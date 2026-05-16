with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Fix 1: Change onclick="vfToggleDrop()" to onclick="window.vfToggleDrop&&window.vfToggleDrop()"
old_onclick = b'onclick="vfToggleDrop()"'
new_onclick = b'onclick="if(window.vfToggleDrop)window.vfToggleDrop()"'
if old_onclick in c:
    c = c.replace(old_onclick, new_onclick)
    print('Fixed onclick on vf-pro-btn')
else:
    print('onclick not found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
