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

    # Droite — phone mockup animé
    + b'      <div class=' + DQ + b'hero-phone-wrap' + DQ + b'>' + NL

    # Notification flottante
    + b'        <div class=' + DQ + b'hp-notif' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'hp-notif-ico' + DQ + b'>&#128276;</div>' + NL
    + b'          <div>' + NL
    + b'            <div class=' + DQ + b'hp-notif-title' + DQ + b'>Nouvelle commande !</div>' + NL
    + b'            <div class=' + DQ + b'hp-notif-sub' + DQ + b'>Pizza Margherita &times;2 &mdash; 24&euro;</div>' + NL
    + b'          </div>' + NL
    + b'          <div class=' + DQ + b'hp-notif-dot' + DQ + b'></div>' + NL
    + b'        </div>' + NL

    # Phone frame
    + b'        <div class=' + DQ + b'hp-frame' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'hp-notch' + DQ + b'></div>' + NL
    + b'          <div class=' + DQ + b'hp-screen' + DQ + b'>' + NL

    # Contenu du site dans le téléphone
    + b'            <div class=' + DQ + b'hp-site-header' + DQ + b'>' + NL
    + b'              <div class=' + DQ + b'hp-site-logo' + DQ + b'>Le Petit Bistrot</div>' + NL
    + b'              <div class=' + DQ + b'hp-site-nav' + DQ + b'>Menu &bull; R&eacute;server</div>' + NL
    + b'            </div>' + NL
    + b'            <div class=' + DQ + b'hp-site-hero' + DQ + b'>' + NL
    + b'              <div class=' + DQ + b'hp-site-title' + DQ + b'>Bienvenue</div>' + NL
    + b'              <div class=' + DQ + b'hp-site-sub' + DQ + b'>Cuisine fran&ccedil;aise &bull; Paris 11e</div>' + NL
    + b'            </div>' + NL
    + b'            <div class=' + DQ + b'hp-menu-row' + DQ + b'>' + NL
    + b'              <div class=' + DQ + b'hp-menu-img' + DQ + b'></div>' + NL
    + b'              <div class=' + DQ + b'hp-menu-info' + DQ + b'><div class=' + DQ + b'hp-menu-name' + DQ + b'>Boeuf Bourguignon</div><div class=' + DQ + b'hp-menu-price' + DQ + b'>18&euro;</div></div>' + NL
    + b'            </div>' + NL
    + b'            <div class=' + DQ + b'hp-menu-row' + DQ + b'>' + NL
    + b'              <div class=' + DQ + b'hp-menu-img hp-img2' + DQ + b'></div>' + NL
    + b'              <div class=' + DQ + b'hp-menu-info' + DQ + b'><div class=' + DQ + b'hp-menu-name' + DQ + b'>Tarte Tatin</div><div class=' + DQ + b'hp-menu-price' + DQ + b'>9&euro;</div></div>' + NL
    + b'            </div>' + NL
    + b'            <div class=' + DQ + b'hp-site-cta' + DQ + b'>Commander &rarr;</div>' + NL
    + b'          </div>' + NL
    + b'        </div>' + NL

    # Badge "En ligne"
    + b'        <div class=' + DQ + b'hp-online' + DQ + b'>' + NL
    + b'          <span class=' + DQ + b'hp-online-dot' + DQ + b'></span>En ligne' + NL
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
