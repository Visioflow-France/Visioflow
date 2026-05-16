import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1   = c.find(b'PAGE 1')
# Find start: right after <div class=\"hero\">
hero_open = c.find(b'class=\\"hero\\">', p1) + len(b'class=\\"hero\\">')
# skip the \n after it
hero_open = c.find(b'<div class=\\"hero-overlay\\">', hero_open)

# Find end: closing </div> of hero = right before <!-- SECTION 1 -->
sec1 = c.find(b'<!-- SECTION 1 -->', p1)
hero_close = c.rfind(b'</div>', 0, sec1) + len(b'</div>')

print(f'Replacing bytes {hero_open} to {hero_close}')
print('Current content preview:', repr(c[hero_open:hero_open+100]))

NL   = b'\\n'    # 0x5c 0x6e
DQ   = b'\\"'   # 0x5c 0x22  (escaped double-quote in JS string)

new_hero = (
    b'<div class=' + DQ + b'hero-overlay' + DQ + b'></div>' + NL
    + b'    <div class=' + DQ + b'h-eyebrow' + DQ + b'>' + NL
    + b'      <span class=' + DQ + b'h-dot' + DQ + b'></span>' + NL
    + b'      350+ restaurants d&eacute;j&agrave; en ligne' + NL
    + b'    </div>' + NL
    + b'    <h1 id=' + DQ + b'hero-title' + DQ + b'>' + NL
    + b'      <span class=' + DQ + b'hero-line1' + DQ + b'>On cr&eacute;e votre site.</span><br/>' + NL
    + b'      <span class=' + DQ + b'gr' + DQ + b'>Vous g&eacute;rez votre restaurant.</span>' + NL
    + b'    </h1>' + NL
    + b'    <p class=' + DQ + b'hero-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>' + NL
    + b'      Livr&eacute; en <strong>maximum 5&nbsp;jours</strong>. Z&eacute;ro abonnement. H&eacute;bergement gratuit &agrave; vie.' + NL
    + b'    </p>' + NL
    + b'    <div class=' + DQ + b'hero-stats' + DQ + b'>' + NL
    + b'      <div class=' + DQ + b'hs' + DQ + b'><div class=' + DQ + b'hsv' + DQ + b'>350+</div><div class=' + DQ + b'hsl' + DQ + b'>Restaurants &eacute;quip&eacute;s</div></div>' + NL
    + b'      <div class=' + DQ + b'hs' + DQ + b'><div class=' + DQ + b'hsv' + DQ + b'>98%</div><div class=' + DQ + b'hsl' + DQ + b'>Satisfaction client</div></div>' + NL
    + b'      <div class=' + DQ + b'hs' + DQ + b'><div class=' + DQ + b'hsv' + DQ + b'>5&nbsp;jours</div><div class=' + DQ + b'hsl' + DQ + b'>D&eacute;lai maximum</div></div>' + NL
    + b'      <div class=' + DQ + b'hs' + DQ + b'><div class=' + DQ + b'hsv' + DQ + b'>0&euro;</div><div class=' + DQ + b'hsl' + DQ + b'>Abonnement mensuel</div></div>' + NL
    + b'    </div>' + NL
    + b'    <div class=' + DQ + b'hero-discover' + DQ + b'>' + NL
    + b'      <svg width=' + DQ + b'18' + DQ + b' height=' + DQ + b'18' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2' + DQ + b' stroke-linecap=' + DQ + b'round' + DQ + b'><path d=' + DQ + b'M12 5v14M5 12l7 7 7-7' + DQ + b'/></svg>' + NL
    + b'      D&eacute;couvrir' + NL
    + b'    </div>' + NL
    + b'  </div>'
)

c = c[:hero_open] + new_hero + c[hero_close:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
