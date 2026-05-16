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
    + b'        <p class=' + DQ + b'alt-desc' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>Votre site restaurant en ligne en <strong>5 jours</strong>. Un seul paiement, z&eacute;ro abonnement.</p>' + NL
    + b'      </div>' + NL

    # Droite - laptop mockup
    + b'      <div class=' + DQ + b'hero-laptop-wrap' + DQ + b'>' + NL

    # Notification
    + b'        <div class=' + DQ + b'lp-notif' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'lp-notif-ico' + DQ + b'>&#128276;</div>' + NL
    + b'          <div>' + NL
    + b'            <div class=' + DQ + b'lp-notif-title' + DQ + b'>Nouvelle commande !</div>' + NL
    + b'            <div class=' + DQ + b'lp-notif-sub' + DQ + b'>Pizza &times;2 &mdash; 28&euro;</div>' + NL
    + b'          </div>' + NL
    + b'          <div class=' + DQ + b'lp-notif-dot' + DQ + b'></div>' + NL
    + b'        </div>' + NL

    # Laptop lid
    + b'        <div class=' + DQ + b'lp-lid' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'lp-cam' + DQ + b'></div>' + NL
    + b'          <div class=' + DQ + b'lp-screen' + DQ + b'>' + NL

    # Site dans l'ordi
    + b'            <div class=' + DQ + b'lp-browser' + DQ + b'>' + NL
    + b'              <div class=' + DQ + b'lp-bar' + DQ + b'>' + NL
    + b'                <span class=' + DQ + b'lp-dot r' + DQ + b'></span><span class=' + DQ + b'lp-dot y' + DQ + b'></span><span class=' + DQ + b'lp-dot g' + DQ + b'></span>' + NL
    + b'                <div class=' + DQ + b'lp-url' + DQ + b'>lepetitbistrot.fr</div>' + NL
    + b'              </div>' + NL
    + b'              <div class=' + DQ + b'lp-content' + DQ + b'>' + NL
    + b'                <div class=' + DQ + b'lp-site-nav' + DQ + b'><span>Le Petit Bistrot</span><span>Menu &bull; Horaires &bull; Nous contacter</span></div>' + NL
    + b'                <div class=' + DQ + b'lp-site-hero' + DQ + b'>' + NL
    + b'                  <div class=' + DQ + b'lp-hero-text' + DQ + b'>' + NL
    + b'                    <div class=' + DQ + b'lp-hero-title' + DQ + b'>Cuisine fran&ccedil;aise</div>' + NL
    + b'                    <div class=' + DQ + b'lp-hero-sub' + DQ + b'>Paris 11e &bull; Ouvert tous les jours</div>' + NL
    + b'                    <div class=' + DQ + b'lp-hero-cta' + DQ + b'>Voir la carte &rarr;</div>' + NL
    + b'                  </div>' + NL
    + b'                </div>' + NL
    + b'                <div class=' + DQ + b'lp-cards' + DQ + b'>' + NL
    + b'                  <div class=' + DQ + b'lp-card' + DQ + b'><div class=' + DQ + b'lp-card-img lp-img1' + DQ + b'></div><div class=' + DQ + b'lp-card-name' + DQ + b'>Boeuf Bourguignon</div><div class=' + DQ + b'lp-card-price' + DQ + b'>18&euro;</div></div>' + NL
    + b'                  <div class=' + DQ + b'lp-card' + DQ + b'><div class=' + DQ + b'lp-card-img lp-img2' + DQ + b'></div><div class=' + DQ + b'lp-card-name' + DQ + b'>Entrecote grill&eacute;e</div><div class=' + DQ + b'lp-card-price' + DQ + b'>24&euro;</div></div>' + NL
    + b'                  <div class=' + DQ + b'lp-card' + DQ + b'><div class=' + DQ + b'lp-card-img lp-img3' + DQ + b'></div><div class=' + DQ + b'lp-card-name' + DQ + b'>Tarte Tatin</div><div class=' + DQ + b'lp-card-price' + DQ + b'>9&euro;</div></div>' + NL
    + b'                </div>' + NL
    + b'              </div>' + NL
    + b'            </div>' + NL
    + b'          </div>' + NL
    + b'        </div>' + NL
    # Base laptop
    + b'        <div class=' + DQ + b'lp-base' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'lp-keyboard' + DQ + b'></div>' + NL
    + b'        </div>' + NL
    + b'        <div class=' + DQ + b'lp-foot' + DQ + b'></div>' + NL

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
