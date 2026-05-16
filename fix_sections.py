import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1 = c.find(b'PAGE 1')

# Remove Section 2 entirely (feat-grid / Ce qui est inclus)
sec2 = c.find(b'<!-- SECTION 2 -->', p1)
sec3 = c.find(b'<!-- SECTION 3 -->', p1)

if sec2 > 0 and sec3 > sec2:
    c = c[:sec2] + c[sec3:]
    print('Section 2 removed')
else:
    print('Section 2 not found or already removed')

# Check packs are present
p1 = c.find(b'PAGE 1')
tarifs = c.find(b'<!-- TARIFS -->', p1)
pcard  = c.find(b'pcard', p1)
print(f'TARIFS at: {tarifs}, pcard at: {pcard}')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
