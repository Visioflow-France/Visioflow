import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old = b'R&eacute;glez en ligne via Stripe, qui propose un grand nombre de moyens de paiement s&eacute;curis&eacute;s.'
new = b'Payez en ligne via Stripe &mdash; s&eacute;curis&eacute;, rapide, des dizaines d&rsquo;options disponibles.'

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
