import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

NL = b'\\n'
DQ = b'\\"'

# Find and replace ONLY the eyebrow and h1 content — use tight markers
old_eyebrow = (b'<div class=' + DQ + b'h-eyebrow' + DQ + b'>' + NL
               + b'      <span class=' + DQ + b'h-dot' + DQ + b'></span>' + NL
               + b'      350+ restaurants d&eacute;j&agrave; en ligne' + NL
               + b'    </div>')
new_eyebrow = (b'<div class=' + DQ + b'h-eyebrow' + DQ + b'>' + NL
               + b'      <span class=' + DQ + b'h-dot' + DQ + b'></span>' + NL
               + b'      Agence web &mdash; Sp&eacute;cialiste restauration' + NL
               + b'    </div>')

old_h1 = (b'<h1 id=' + DQ + b'hero-title' + DQ + b'>' + NL
          + b'      <span class=' + DQ + b'hero-line1' + DQ + b'>On cr&eacute;e votre site.</span><br/>' + NL
          + b'      <span class=' + DQ + b'gr' + DQ + b'>Vous g&eacute;rez votre restaurant.</span>' + NL
          + b'    </h1>')
new_h1 = (b'<h1 id=' + DQ + b'hero-title' + DQ + b'>' + NL
          + b'      <span class=' + DQ + b'hero-line1' + DQ + b'>Fini le restaurant invisible.</span><br/>' + NL
          + b'      <span class=' + DQ + b'gr' + DQ + b'>On vous met en ligne.</span>' + NL
          + b'    </h1>')

old_sub = (b'<p class=' + DQ + b'hero-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>' + NL
           + b'      Livr&eacute; en <strong>maximum 5&nbsp;jours</strong>. Z&eacute;ro abonnement. H&eacute;bergement gratuit &agrave; vie.' + NL
           + b'    </p>')
new_sub = (b'<p class=' + DQ + b'hero-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>' + NL
           + b'      Site professionnel livr&eacute; en <strong>maximum 5&nbsp;jours</strong>. Menu, galerie, commandes &mdash; tout inclus. Z&eacute;ro abonnement.' + NL
           + b'    </p>')

for old, new, label in [(old_eyebrow, new_eyebrow, 'eyebrow'),
                        (old_h1, new_h1, 'h1'),
                        (old_sub, new_sub, 'subtitle')]:
    if old in c:
        c = c.replace(old, new, 1)
        print(label, 'updated')
    else:
        print('NOT FOUND:', label)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
