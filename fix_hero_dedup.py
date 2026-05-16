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
    + b'    <div class=' + DQ + b'hero-main' + DQ + b'>' + NL

    # Gauche
    + b'      <div class=' + DQ + b'hero-left' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'alt-tag' + DQ + b'>Sites web pour restaurateurs</div>' + NL
    + b'        <h1 class=' + DQ + b'hero-title-new' + DQ + b' id=' + DQ + b'hero-title' + DQ + b'>' + NL
    + b'          On s&rsquo;occupe de tout.' + NL
    + b'          <span class=' + DQ + b'gr' + DQ + b'>Vous de votre cuisine.</span>' + NL
    + b'        </h1>' + NL
    + b'        <p class=' + DQ + b'alt-desc' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>Votre site en ligne en <strong>5 jours</strong>. Un seul paiement.</p>' + NL
    + b'      </div>' + NL

    # Droite - 3 points seulement, concis
    + b'      <div class=' + DQ + b'hero-right-clean' + DQ + b'>' + NL

    + b'        <div class=' + DQ + b'hrc-item' + DQ + b'>' + NL
    + b'          <svg class=' + DQ + b'hrc-check' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2.5' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M20 6L9 17l-5-5' + DQ + b'/></svg>' + NL
    + b'          <div><strong>Site sur-mesure</strong><span>Page d&rsquo;accueil, menu, galerie, Maps, horaires</span></div>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hrc-item' + DQ + b'>' + NL
    + b'          <svg class=' + DQ + b'hrc-check' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2.5' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M20 6L9 17l-5-5' + DQ + b'/></svg>' + NL
    + b'          <div><strong>Gestion autonome</strong><span>Modifiez menu, horaires et photos vous-m&ecirc;me</span></div>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hrc-item' + DQ + b'>' + NL
    + b'          <svg class=' + DQ + b'hrc-check' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2.5' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M20 6L9 17l-5-5' + DQ + b'/></svg>' + NL
    + b'          <div><strong>H&eacute;bergement &agrave; vie offert</strong><span>SSL, domaine, mise en ligne &mdash; inclus</span></div>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hrc-item' + DQ + b'>' + NL
    + b'          <svg class=' + DQ + b'hrc-check' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2.5' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M20 6L9 17l-5-5' + DQ + b'/></svg>' + NL
    + b'          <div><strong>Commandes en ligne</strong><span>Stripe int&eacute;gr&eacute;, tableau de bord &mdash; Pack Premium</span></div>' + NL
    + b'        </div>' + NL

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
