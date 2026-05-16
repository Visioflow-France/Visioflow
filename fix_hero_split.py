import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1  = c.find(b'PAGE 1')
NL  = b'\\n'
DQ  = b'\\"'

# Find hero inner content boundaries
start = c.find(b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>', p1)
sec1  = c.find(b'<!-- SECTION 1 -->', p1)
end   = c.rfind(b'</div>', start, sec1) + len(b'</div>')

new_hero = (
    b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>' + NL

    + b'    <div class=' + DQ + b'hero-split' + DQ + b'>' + NL

    # LEFT
    + b'      <div class=' + DQ + b'hero-left' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'h-eyebrow' + DQ + b'><span class=' + DQ + b'h-dot' + DQ + b'></span>Sites web &bull; Restauration</div>' + NL
    + b'        <h1 id=' + DQ + b'hero-title' + DQ + b'>' + NL
    + b'          Votre restaurant<br/>' + NL
    + b'          <span class=' + DQ + b'gr' + DQ + b'>m&eacute;rite d&rsquo;&ecirc;tre vu.</span>' + NL
    + b'        </h1>' + NL
    + b'        <p class=' + DQ + b'hero-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>On cr&eacute;e votre site web sur-mesure en <strong>5 jours maximum</strong>. Vous vous occupez de votre cuisine, on s&rsquo;occupe du reste.</p>' + NL
    + b'        <div class=' + DQ + b'hero-discover' + DQ + b'>' + NL
    + b'          <svg width=' + DQ + b'16' + DQ + b' height=' + DQ + b'16' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M12 5v14M5 12l7 7 7-7' + DQ + b'/></svg>' + NL
    + b'          D&eacute;couvrir les formules' + NL
    + b'        </div>' + NL
    + b'      </div>' + NL

    # RIGHT
    + b'      <div class=' + DQ + b'hero-right' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hero-card' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'hc-item' + DQ + b'>' + NL
    + b'            <div class=' + DQ + b'hc-ico' + DQ + b'>&#9889;</div>' + NL
    + b'            <div><strong>Livr&eacute; en 5 jours</strong><span>De votre formulaire &agrave; votre site en ligne</span></div>' + NL
    + b'          </div>' + NL
    + b'          <div class=' + DQ + b'hc-item' + DQ + b'>' + NL
    + b'            <div class=' + DQ + b'hc-ico' + DQ + b'>&#10003;</div>' + NL
    + b'            <div><strong>Z&eacute;ro abonnement</strong><span>Paiement unique, aucune surprise mensuelle</span></div>' + NL
    + b'          </div>' + NL
    + b'          <div class=' + DQ + b'hc-item' + DQ + b'>' + NL
    + b'            <div class=' + DQ + b'hc-ico' + DQ + b'>&#127760;</div>' + NL
    + b'            <div><strong>H&eacute;bergement &agrave; vie</strong><span>Gratuit, inclus dans toutes les formules</span></div>' + NL
    + b'          </div>' + NL
    + b'          <div class=' + DQ + b'hc-item' + DQ + b'>' + NL
    + b'            <div class=' + DQ + b'hc-ico' + DQ + b'>&#128241;</div>' + NL
    + b'            <div><strong>100&nbsp;% responsive</strong><span>Parfait sur mobile, tablette et ordinateur</span></div>' + NL
    + b'          </div>' + NL
    + b'          <button class=' + DQ + b"hc-cta" + DQ + b' onclick=' + DQ + b"goHomePack('essentiel')" + DQ + b'>Voir les formules &darr;</button>' + NL
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
