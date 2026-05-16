import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

demo_link_ess = (
    b'\\n      <a class=\\"pcard-demo\\" id=\\"demo-home-ess\\" href=\\"\\" '
    b'target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"display:none\\">'
    b'Voir un exemple de site &rarr;</a>'
)

demo_link_prem = (
    b'\\n      <a class=\\"pcard-demo\\" id=\\"demo-home-prem\\" href=\\"\\" '
    b'target=\\"_blank\\" rel=\\"noopener noreferrer\\" style=\\"display:none\\">'
    b'Voir un exemple de site &rarr;</a>'
)

# Insert after each button's closing tag
ess_btn_end  = b'Choisir Essentiel &rarr;</button>'
prem_btn_end = b'Choisir Premium &rarr;</button>'

c = c.replace(ess_btn_end,  ess_btn_end  + demo_link_ess,  1)
c = c.replace(prem_btn_end, prem_btn_end + demo_link_prem, 1)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
print('demo-home-ess:', c.count(b'demo-home-ess'))
print('demo-home-prem:', c.count(b'demo-home-prem'))
