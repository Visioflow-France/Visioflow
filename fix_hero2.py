import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old_hero = (
    b'ss="hero-overlay"></div>\n'
    b'    <div class="h-eyebrow"><span class="h-dot"></span>350+ restaurants &eacute;quip&eacute;s &bull; Livr&eacute; en max 5 jours</div>\n'
    b'    <h1 id="hero-title">Votre restaurant,<br/><span class="gr">en ligne en max 5 jours.</span></h1>\n'
    b'    <p class="hero-sub" id="hero-subtitle">Sites web premium pour restaurateurs. Menu digital, commandes en ligne, paiements int&eacute;gr&eacute;s &mdash; tout ce qu\'il faut pour digitaliser votre &eacute;tablissement.</p>\n'
    b'    <div class="hero-stats">\n'
    b'      <div class="hs"><div class="hsv">350+</div><div class="hsl">Restaurants &eacute;quip&eacute;s</div></div>\n'
    b'      <div class="hs"><div class="hsv">98%</div><div class="hsl">Satisfaction client</div></div>\n'
    b'      <div class="hs"><div class="hsv">max 5 jours</div><div class="hsl">Mise en ligne</div></div>\n'
    b'      <div class="hs"><div class="hsv">0&euro;</div><div class="hsl">Abonnement mensuel</div></div>\n'
    b'    </div>\n'
    b'  </div>'
)

new_hero = (
    b'ss="hero-overlay"></div>\n'
    b'    <div class="h-eyebrow">\n'
    b'      <span class="h-dot"></span>\n'
    b'      350+ restaurants d&eacute;j&agrave; en ligne\n'
    b'    </div>\n'
    b'    <h1 id="hero-title">\n'
    b'      <span class="hero-line1">On cr&eacute;e votre site.</span><br/>\n'
    b'      <span class="gr">Vous g&eacute;rez votre restaurant.</span>\n'
    b'    </h1>\n'
    b'    <p class="hero-sub" id="hero-subtitle">\n'
    b'      Livr&eacute; en <strong>maximum 5&nbsp;jours</strong>. Z&eacute;ro abonnement. H&eacute;bergement gratuit &agrave; vie.\n'
    b'    </p>\n'
    b'    <div class="hero-stats">\n'
    b'      <div class="hs"><div class="hsv">350+</div><div class="hsl">Restaurants &eacute;quip&eacute;s</div></div>\n'
    b'      <div class="hs"><div class="hsv">98%</div><div class="hsl">Satisfaction client</div></div>\n'
    b'      <div class="hs"><div class="hsv">5&nbsp;jours</div><div class="hsl">D&eacute;lai maximum</div></div>\n'
    b'      <div class="hs"><div class="hsv">0&euro;</div><div class="hsl">Abonnement mensuel</div></div>\n'
    b'    </div>\n'
    b'    <div class="hero-discover">\n'
    b'      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>\n'
    b'      D&eacute;couvrir\n'
    b'    </div>\n'
    b'  </div>'
)

print('found:', old_hero in c)
if old_hero in c:
    c = c.replace(old_hero, new_hero)

    with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
        f.write(c)

    r = subprocess.run(['node', '--check',
        r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
        capture_output=True, text=True)
    print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
