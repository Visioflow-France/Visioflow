with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Fix 1: Add id="price-essentiel" to main essentiel pack card
old_ess = b'<div class=\\"pcard-p\\">150&euro; <span>/ unique</span></div>'
new_ess = b'<div class=\\"pcard-p\\" id=\\"price-essentiel\\">150&euro; <span>/ unique</span></div>'
if old_ess in c:
    c = c.replace(old_ess, new_ess, 1)
    print('Added id to essentiel price')
else:
    print('Essentiel price element NOT FOUND')

# Fix 2: Add id="price-premium" to main premium pack card
old_prem = b'<div class=\\"pcard-p\\">490&euro; <span>/ unique</span></div>'
new_prem = b'<div class=\\"pcard-p\\" id=\\"price-premium\\">490&euro; <span>/ unique</span></div>'
if old_prem in c:
    c = c.replace(old_prem, new_prem, 1)
    print('Added id to premium price')
else:
    print('Premium price element NOT FOUND')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
