import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

check = b'<li><svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"#9ca3af\\"'
check2 = b'<li><svg viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"#2563eb\\"'
suffix = b' stroke-width=\\"2.5\\" stroke-linecap=\\"round\\"><path d=\\"M20 6L9 17l-5-5\\"/></svg>'

seo_ess  = check  + suffix + b'SEO optimis&eacute;</li>'
seo_prem = check2 + suffix + b'SEO optimis&eacute;</li>'

old_end = b'Livraison en 5 jours</li>\\n      </ul>'

# Essentiel (first occurrence)
pos1 = c.find(old_end)
c = c[:pos1 + len(b'Livraison en 5 jours</li>')] + b'\\n        ' + seo_ess + b'\\n      </ul>' + c[pos1 + len(old_end):]

# Premium (second occurrence)
pos2 = c.find(old_end)
c = c[:pos2 + len(b'Livraison en 5 jours</li>')] + b'\\n        ' + seo_prem + b'\\n      </ul>' + c[pos2 + len(old_end):]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
print('SEO count:', c.count(b'SEO optimis'))
