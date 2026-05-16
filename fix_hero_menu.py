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

    + b'    <div class=' + DQ + b'hmenu-wrap' + DQ + b'>' + NL

    # En-tête style restaurant
    + b'      <div class=' + DQ + b'hmenu-header' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hmenu-logo' + DQ + b' id=' + DQ + b'hero-title' + DQ + b'>VisioFlow</div>' + NL
    + b'        <div class=' + DQ + b'hmenu-tagline' + DQ + b'>Agence Web &bull; Sp&eacute;cialiste Restauration</div>' + NL
    + b'        <div class=' + DQ + b'hmenu-rule' + DQ + b'></div>' + NL
    + b'      </div>' + NL

    # Corps du menu
    + b'      <div class=' + DQ + b'hmenu-body' + DQ + b'>' + NL

    + b'        <div class=' + DQ + b'hmenu-section' + DQ + b'>Ce que vous obtenez</div>' + NL

    + b'        <div class=' + DQ + b'hmenu-row' + DQ + b'>' + NL
    + b'          <span class=' + DQ + b'hmenu-dish' + DQ + b'>Site web professionnel sur-mesure</span>' + NL
    + b'          <span class=' + DQ + b'hmenu-dots' + DQ + b'></span>' + NL
    + b'          <span class=' + DQ + b'hmenu-price' + DQ + b'>livr&eacute; en 5 jours</span>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hmenu-row' + DQ + b'>' + NL
    + b'          <span class=' + DQ + b'hmenu-dish' + DQ + b'>Menu digital, galerie, horaires, Maps</span>' + NL
    + b'          <span class=' + DQ + b'hmenu-dots' + DQ + b'></span>' + NL
    + b'          <span class=' + DQ + b'hmenu-price' + DQ + b'>tout inclus</span>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hmenu-row' + DQ + b'>' + NL
    + b'          <span class=' + DQ + b'hmenu-dish' + DQ + b'>Commandes en ligne &amp; paiement Stripe</span>' + NL
    + b'          <span class=' + DQ + b'hmenu-dots' + DQ + b'></span>' + NL
    + b'          <span class=' + DQ + b'hmenu-price hmenu-opt' + DQ + b'>Pack Premium</span>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hmenu-row' + DQ + b'>' + NL
    + b'          <span class=' + DQ + b'hmenu-dish' + DQ + b'>H&eacute;bergement</span>' + NL
    + b'          <span class=' + DQ + b'hmenu-dots' + DQ + b'></span>' + NL
    + b'          <span class=' + DQ + b'hmenu-price' + DQ + b'>gratuit &agrave; vie</span>' + NL
    + b'        </div>' + NL

    + b'        <div class=' + DQ + b'hmenu-rule' + DQ + b'></div>' + NL

    + b'        <div class=' + DQ + b'hmenu-total' + DQ + b'>' + NL
    + b'          <span>Abonnement mensuel</span>' + NL
    + b'          <span>0&euro;</span>' + NL
    + b'        </div>' + NL

    + b'      </div>' + NL

    # Footer style restaurant
    + b'      <div class=' + DQ + b'hmenu-footer' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hmenu-rule' + DQ + b'></div>' + NL
    + b'        <p id=' + DQ + b'hero-subtitle' + DQ + b'>Paiement unique &bull; Service compris &bull; Satisfaction garantie</p>' + NL
    + b'        <div class=' + DQ + b'hmenu-scroll' + DQ + b'>' + NL
    + b'          <svg width=' + DQ + b'16' + DQ + b' height=' + DQ + b'16' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'1.5' + DQ + b'><path d=' + DQ + b'M12 5v14M5 12l7 7 7-7' + DQ + b'/></svg>' + NL
    + b'          Voir les formules' + NL
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
