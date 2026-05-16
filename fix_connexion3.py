with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Remove the onclick attribute from vf-pro-btn (now using addEventListener instead)
old = b'onclick="if(window.vfToggleDrop)window.vfToggleDrop()" aria-label="Connexion"'
new = b'aria-label="Connexion"'

if old in c:
    c = c.replace(old, new)
    print('Removed onclick from vf-pro-btn button')
else:
    print('onclick pattern not found - checking original')
    old2 = b'onclick="vfToggleDrop()" aria-label="Connexion"'
    if old2 in c:
        c = c.replace(old2, new)
        print('Removed original onclick from vf-pro-btn')
    else:
        print('No onclick found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
