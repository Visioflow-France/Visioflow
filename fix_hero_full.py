import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1   = c.find(b'PAGE 1')
NL   = b'\\n'
DQ   = b'\\"'

# Find start: hero-overlay div
start = c.find(b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>', p1)
# Find end: <!-- SECTION 1 -->
sec1  = c.find(b'<!-- SECTION 1 -->', p1)
end   = c.rfind(b'</div>', start, sec1) + len(b'</div>')

new_hero = (
    b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>' + NL

    # Eyebrow
    + b'    <div class=' + DQ + b'h-eyebrow' + DQ + b'>' + NL
    + b'      <span class=' + DQ + b'h-dot' + DQ + b'></span>' + NL
    + b'      Sites web pour restaurateurs &mdash; Livraison en 5 jours' + NL
    + b'    </div>' + NL

    # H1 - 2 lignes distinctes
    + b'    <h1 id=' + DQ + b'hero-title' + DQ + b' class=' + DQ + b'hero-h1-big' + DQ + b'>' + NL
    + b'      Votre restaurant' + NL
    + b'      <span class=' + DQ + b'gr hero-h1-line2' + DQ + b'>m&eacute;rite d&rsquo;&ecirc;tre vu.</span>' + NL
    + b'    </h1>' + NL

    # Subtitle
    + b'    <p class=' + DQ + b'hero-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>' + NL
    + b'      On cr&eacute;e votre site web sur-mesure. Menu, commandes, h&eacute;bergement &mdash;' + NL
    + b'      tout inclus. <strong>Vous vous occupez de votre cuisine.</strong>' + NL
    + b'    </p>' + NL

    # 3 feature cards
    + b'    <div class=' + DQ + b'hero-feats' + DQ + b'>' + NL
    + b'      <div class=' + DQ + b'hero-feat' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hf-ico' + DQ + b'>&#9889;</div>' + NL
    + b'        <div><strong>5 jours max</strong><span>De la commande &agrave; la mise en ligne</span></div>' + NL
    + b'      </div>' + NL
    + b'      <div class=' + DQ + b'hero-feat' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hf-ico' + DQ + b'>&#9775;</div>' + NL
    + b'        <div><strong>Z&eacute;ro abonnement</strong><span>Paiement unique, pour toujours</span></div>' + NL
    + b'      </div>' + NL
    + b'      <div class=' + DQ + b'hero-feat' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hf-ico' + DQ + b'>&#127760;</div>' + NL
    + b'        <div><strong>H&eacute;bergement offert</strong><span>Gratuit &agrave; vie, inclus dans toutes les formules</span></div>' + NL
    + b'      </div>' + NL
    + b'    </div>' + NL

    # Discover
    + b'    <div class=' + DQ + b'hero-discover' + DQ + b'>' + NL
    + b'      <svg width=' + DQ + b'18' + DQ + b' height=' + DQ + b'18' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M12 5v14M5 12l7 7 7-7' + DQ + b'/></svg>' + NL
    + b'      D&eacute;couvrir' + NL
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
