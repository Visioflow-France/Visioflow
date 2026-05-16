import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

for demo_id in [b'demo-home-ess', b'demo-home-prem']:
    old = b'id=\\"' + demo_id + b'\\" href=\\"\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"display:none\\"'
    new = b'id=\\"' + demo_id + b'\\" href=\\"#\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"'
    if old in c:
        c = c.replace(old, new)
        print(demo_id.decode(), 'made visible')
    else:
        print('NOT FOUND:', demo_id.decode())
        idx = c.find(demo_id)
        if idx >= 0:
            print(repr(c[idx:idx+120]))

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
