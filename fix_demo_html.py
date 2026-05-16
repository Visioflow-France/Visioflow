import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

def make_demo(demo_id):
    return (
        b'\\n      <a class=\\"pcard-demo\\" id=\\"' + demo_id + b'\\" href=\\"\\" '
        b'target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"display:none\\">'
        b'<span class=\\"demo-ico\\">&#128196;</span>'
        b'<span class=\\"demo-text\\">'
        b'<span class=\\"demo-label\\">Voir un exemple de site</span>'
        b'<span class=\\"demo-sub\\">Ouvre dans un nouvel onglet</span>'
        b'</span>'
        b'<span class=\\"demo-arrow\\">&rarr;</span>'
        b'</a>'
    )

old_ess  = (b'\\n      <a class=\\"pcard-demo\\" id=\\"demo-home-ess\\" href=\\"\\" '
            b'target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"display:none\\">'
            b'Voir un exemple de site &rarr;</a>')

old_prem = (b'\\n      <a class=\\"pcard-demo\\" id=\\"demo-home-prem\\" href=\\"\\" '
            b'target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"display:none\\">'
            b'Voir un exemple de site &rarr;</a>')

if old_ess in c:
    c = c.replace(old_ess,  make_demo(b'demo-home-ess'),  1)
    print('Essentiel demo updated')
else:
    print('WARNING: essentiel demo not found')

if old_prem in c:
    c = c.replace(old_prem, make_demo(b'demo-home-prem'), 1)
    print('Premium demo updated')
else:
    print('WARNING: premium demo not found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
