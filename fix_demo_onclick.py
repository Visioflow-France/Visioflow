import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old_ess  = b'id=\\"demo-home-ess\\" href=\\"#\\" onclick=\\"openSitePreview(this.dataset.url||null);return false\\"'
new_ess  = b'id=\\"demo-home-ess\\" href=\\"#\\" onclick=\\"openSitePreview(\'ess\');return false\\"'

old_prem = b'id=\\"demo-home-prem\\" href=\\"#\\" onclick=\\"openSitePreview(this.dataset.url||null);return false\\"'
new_prem = b'id=\\"demo-home-prem\\" href=\\"#\\" onclick=\\"openSitePreview(\'prem\');return false\\"'

for old, new, label in [(old_ess, new_ess, 'ess'), (old_prem, new_prem, 'prem')]:
    if old in c:
        c = c.replace(old, new, 1)
        print(f'{label} button fixed')
    else:
        print(f'NOT FOUND: {label}')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
