import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1 = c.find(b'PAGE 1')
sec2_start = c.find(b'<!-- SECTION 2 -->', p1)
sec3_start = c.find(b'<!-- SECTION 3 -->', p1)

if sec2_start > 0 and sec3_start > sec2_start:
    c = c[:sec2_start] + c[sec3_start:]
    print('Section témoignages supprimée')
else:
    print('NOT FOUND')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
