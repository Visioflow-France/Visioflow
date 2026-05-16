import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old = b'Modifiez vos plats, vos prix, vos horaires depuis votre t&eacute;l&eacute;phone. Les changements s&apos;affichent instantan&eacute;ment sur votre site. Pas besoin d&apos;un d&eacute;veloppeur.'
new = b'Modifiez vos plats, vos prix, vos horaires depuis votre t&eacute;l&eacute;phone <strong>ou votre ordinateur</strong>. Les changements s&apos;affichent instantan&eacute;ment sur votre site. Pas besoin d&apos;un d&eacute;veloppeur.'

if old in c:
    c = c.replace(old, new)
    print('Updated')
else:
    print('NOT FOUND')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
