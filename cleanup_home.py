import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1 = c.find(b'PAGE 1')

# 1. Remove CTA section (from <!-- CTA --> to <!-- FORM -->)
cta_start = c.find(b'<!-- CTA -->', p1)
form_start = c.find(b'<!-- FORM -->', p1)
if cta_start > 0 and form_start > cta_start:
    c = c[:cta_start] + c[form_start:]
    print('CTA removed')
else:
    print('CTA not found or already removed')

# 2. Remove footer with foot-l inside page-accueil
p1 = c.find(b'PAGE 1')
foot_l = c.find(b'foot-l', p1)
if foot_l > 0:
    foot_open = c.rfind(b'<footer', 0, foot_l)
    foot_close = c.find(b'</footer>', foot_l) + len(b'</footer>')
    # eat surrounding \n
    if c[foot_open-2:foot_open] == b'\\n':
        foot_open -= 2
    c = c[:foot_open] + c[foot_close:]
    print('Footer with nav links removed')

# 3. Remove the form header inside home-form (sh/stl/sd block)
# Find the sh block inside form-wrap
p1 = c.find(b'PAGE 1')
sh_start = c.find(b'<div class=\\"sh\\" style=\\"padding-top:36px\\">', p1)
if sh_start > 0:
    # End of sh block: closing </div> of the sh
    sh_end = c.find(b'</div>', sh_start) + len(b'</div>')
    # eat leading \\n
    if c[sh_start-2:sh_start] == b'\\n':
        sh_start -= 2
    c = c[:sh_start] + c[sh_end:]
    print('Form header sh block removed')
else:
    print('Form header not found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
