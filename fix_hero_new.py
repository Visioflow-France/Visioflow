import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1  = c.find(b'PAGE 1')
NL  = b'\\n'
DQ  = b'\\"'

start = c.find(b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>', p1)
sec1  = c.find(b'<!-- SECTION 1 -->', p1)
end   = c.rfind(b'</div>', start, sec1) + len(b'</div>')

new_hero = (
    b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>' + NL

    + b'    <div class=' + DQ + b'hero-poster' + DQ + b'>' + NL

    # Gros "5" décoratif en arrière-plan
    + b'      <div class=' + DQ + b'poster-bg-num' + DQ + b'>5</div>' + NL

    # Contenu
    + b'      <div class=' + DQ + b'poster-content' + DQ + b'>' + NL

    + b'        <div class=' + DQ + b'poster-tag' + DQ + b'>Votre restaurant &bull; En ligne</div>' + NL

    + b'        <h1 class=' + DQ + b'poster-h1' + DQ + b' id=' + DQ + b'hero-title' + DQ + b'>' + NL
    + b'          De votre t&eacute;l&eacute;phone<br/>' + NL
    + b'          &agrave; votre site&nbsp;<em>en 5 jours.</em>' + NL
    + b'        </h1>' + NL

    + b'        <p class=' + DQ + b'poster-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>Z&eacute;ro abonnement &bull; H&eacute;bergement gratuit &agrave; vie &bull; Cl&eacute; en main</p>' + NL

    + b'        <button class=' + DQ + b'poster-cta' + DQ + b' onclick=' + DQ + b"goHomePack('essentiel')" + DQ + b'>Voir les formules</button>' + NL

    + b'      </div>' + NL
    + b'    </div>' + NL

    + b'  </div>'
)

c = c[:start] + new_hero + c[end:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
