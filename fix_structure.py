import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1    = c.find(b'PAGE 1')
trust = c.find(b'<!-- Trust badges -->', p1)
packs = c.find(b'<!-- TARIFS -->', p1)

NL = b'\\n'
DQ = b'\\"'

# Replace everything from trust badges to just before <!-- TARIFS -->
# with 3 alternating sections

NEW_SECTIONS = (
# ── SECTION 1 : Comment ça marche (dark, texte gauche | étapes droite) ──
NL + b'<!-- SECTION 1 -->' + NL
+ b'<div class=' + DQ + b'alt-sec alt-dark' + DQ + b'>' + NL
+ b'  <div class=' + DQ + b'alt-inner' + DQ + b'>' + NL
+ b'    <div class=' + DQ + b'alt-text' + DQ + b'>' + NL
+ b'      <div class=' + DQ + b'alt-tag' + DQ + b'>Notre processus</div>' + NL
+ b'      <h2 class=' + DQ + b'alt-h2' + DQ + b'>Votre site, livr&eacute; en <span class=' + DQ + b'alt-accent' + DQ + b'>5&nbsp;jours.</span></h2>' + NL
+ b'      <p class=' + DQ + b'alt-desc' + DQ + b'>De votre formulaire au site en ligne &mdash; on g&egrave;re tout. Vous n&apos;avez rien &agrave; installer, rien &agrave; coder.</p>' + NL
+ b'    </div>' + NL
+ b'    <div class=' + DQ + b'alt-visual' + DQ + b'>' + NL
+ b'      <div class=' + DQ + b'steps-list' + DQ + b'>' + NL
+ b'        <div class=' + DQ + b'step-row' + DQ + b'><span class=' + DQ + b'step-n' + DQ + b'>1</span><div><strong>Vous choisissez votre formule</strong><p>Essentiel ou Premium selon vos besoins.</p></div></div>' + NL
+ b'        <div class=' + DQ + b'step-row' + DQ + b'><span class=' + DQ + b'step-n' + DQ + b'>2</span><div><strong>Vous remplissez le formulaire</strong><p>Infos, menu, photos &mdash; quelques minutes.</p></div></div>' + NL
+ b'        <div class=' + DQ + b'step-row' + DQ + b'><span class=' + DQ + b'step-n' + DQ + b'>3</span><div><strong>Vous payez</strong><p>Via Stripe &mdash; s&eacute;curis&eacute;, des dizaines de moyens.</p></div></div>' + NL
+ b'        <div class=' + DQ + b'step-row' + DQ + b'><span class=' + DQ + b'step-n' + DQ + b'>4</span><div><strong>On cr&eacute;e votre site</strong><p>Livr&eacute; en maximum 5&nbsp;jours, cl&eacute; en main.</p></div></div>' + NL
+ b'        <div class=' + DQ + b'step-row' + DQ + b'><span class=' + DQ + b'step-n' + DQ + b'>5</span><div><strong>Vous &ecirc;tes en ligne</strong><p>On vous remet les acc&egrave;s. Vous g&eacute;rez en autonomie.</p></div></div>' + NL
+ b'      </div>' + NL
+ b'    </div>' + NL
+ b'  </div>' + NL
+ b'</div>' + NL

# ── SECTION 2 : Ce qui est inclus (light, visuel gauche | texte droite) ──
+ NL + b'<!-- SECTION 2 -->' + NL
+ b'<div class=' + DQ + b'alt-sec alt-light' + DQ + b'>' + NL
+ b'  <div class=' + DQ + b'alt-inner alt-rev' + DQ + b'>' + NL
+ b'    <div class=' + DQ + b'alt-visual' + DQ + b'>' + NL
+ b'      <div class=' + DQ + b'feat-grid' + DQ + b'>' + NL
+ b'        <div class=' + DQ + b'feat-card' + DQ + b'><div class=' + DQ + b'feat-ico' + DQ + b'>&#128247;</div><div>Menu digital &amp; photos</div></div>' + NL
+ b'        <div class=' + DQ + b'feat-card' + DQ + b'><div class=' + DQ + b'feat-ico' + DQ + b'>&#128205;</div><div>Google Maps &amp; t&eacute;l&eacute;phone</div></div>' + NL
+ b'        <div class=' + DQ + b'feat-card' + DQ + b'><div class=' + DQ + b'feat-ico' + DQ + b'>&#128241;</div><div>100&nbsp;% responsive</div></div>' + NL
+ b'        <div class=' + DQ + b'feat-card' + DQ + b'><div class=' + DQ + b'feat-ico' + DQ + b'>&#128274;</div><div>SSL &amp; HTTPS</div></div>' + NL
+ b'        <div class=' + DQ + b'feat-card' + DQ + b'><div class=' + DQ + b'feat-ico' + DQ + b'>&#9832;</div><div>H&eacute;bergement gratuit &agrave; vie</div></div>' + NL
+ b'        <div class=' + DQ + b'feat-card' + DQ + b'><div class=' + DQ + b'feat-ico' + DQ + b'>&#128200;</div><div>SEO optimis&eacute;</div></div>' + NL
+ b'      </div>' + NL
+ b'    </div>' + NL
+ b'    <div class=' + DQ + b'alt-text' + DQ + b'>' + NL
+ b'      <div class=' + DQ + b'alt-tag' + DQ + b'>Ce qui est inclus</div>' + NL
+ b'      <h2 class=' + DQ + b'alt-h2' + DQ + b'>Tout ce qu&apos;il faut,<br/><span class=' + DQ + b'alt-accent' + DQ + b'>sans exception.</span></h2>' + NL
+ b'      <p class=' + DQ + b'alt-desc' + DQ + b'>Menu digital, galerie photos, horaires, carte Maps, liens plateformes de livraison, SSL, h&eacute;bergement gratuit &agrave; vie &mdash; tout est inclus dans les deux formules.</p>' + NL
+ b'      <div class=' + DQ + b'alt-badge-row' + DQ + b'>' + NL
+ b'        <span class=' + DQ + b'alt-badge' + DQ + b'>&#10003; Z&eacute;ro abonnement</span>' + NL
+ b'        <span class=' + DQ + b'alt-badge' + DQ + b'>&#10003; H&eacute;bergement gratuit &agrave; vie</span>' + NL
+ b'        <span class=' + DQ + b'alt-badge' + DQ + b'>&#10003; Modifications autonomes</span>' + NL
+ b'      </div>' + NL
+ b'    </div>' + NL
+ b'  </div>' + NL
+ b'</div>' + NL

# ── SECTION 3 : Gérez en autonomie (dark, texte gauche | visuel droite) ──
+ NL + b'<!-- SECTION 3 -->' + NL
+ b'<div class=' + DQ + b'alt-sec alt-dark' + DQ + b'>' + NL
+ b'  <div class=' + DQ + b'alt-inner' + DQ + b'>' + NL
+ b'    <div class=' + DQ + b'alt-text' + DQ + b'>' + NL
+ b'      <div class=' + DQ + b'alt-tag' + DQ + b'>Votre site, vos r&egrave;gles</div>' + NL
+ b'      <h2 class=' + DQ + b'alt-h2' + DQ + b'>Mettez &agrave; jour votre menu<br/><span class=' + DQ + b'alt-accent' + DQ + b'>en 30 secondes.</span></h2>' + NL
+ b'      <p class=' + DQ + b'alt-desc' + DQ + b'>Modifiez vos plats, vos prix, vos horaires depuis votre t&eacute;l&eacute;phone. Les changements s&apos;affichent instantan&eacute;ment sur votre site. Pas besoin d&apos;un d&eacute;veloppeur.</p>' + NL
+ b'    </div>' + NL
+ b'    <div class=' + DQ + b'alt-visual' + DQ + b'>' + NL
+ b'      <div class=' + DQ + b'autonomy-card' + DQ + b'>' + NL
+ b'        <div class=' + DQ + b'auto-row' + DQ + b'><span class=' + DQ + b'auto-dot green' + DQ + b'></span>Pizza Margherita &mdash; 12&euro; <span class=' + DQ + b'auto-live' + DQ + b'>En ligne</span></div>' + NL
+ b'        <div class=' + DQ + b'auto-row' + DQ + b'><span class=' + DQ + b'auto-dot green' + DQ + b'></span>Burger Classic &mdash; 15&euro; <span class=' + DQ + b'auto-live' + DQ + b'>En ligne</span></div>' + NL
+ b'        <div class=' + DQ + b'auto-row' + DQ + b'><span class=' + DQ + b'auto-dot amber' + DQ + b'></span>Salade C&eacute;sar &mdash; 11&euro; <span class=' + DQ + b'auto-upd' + DQ + b'>Mise &agrave; jour...</span></div>' + NL
+ b'        <div class=' + DQ + b'auto-row dim' + DQ + b'><span class=' + DQ + b'auto-dot grey' + DQ + b'></span>P&acirc;tes Carbonara &mdash; 14&euro;</div>' + NL
+ b'        <div class=' + DQ + b'auto-footer' + DQ + b'>' + NL
+ b'          <svg width=' + DQ + b'14' + DQ + b' height=' + DQ + b'14' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2' + DQ + b'><polyline points=' + DQ + b'20 6 9 17 4 12' + DQ + b'/></svg>' + NL
+ b'          Modifications enregistr&eacute;es automatiquement' + NL
+ b'        </div>' + NL
+ b'      </div>' + NL
+ b'    </div>' + NL
+ b'  </div>' + NL
+ b'</div>' + NL
+ NL
)

c = c[:trust] + NEW_SECTIONS + c[packs:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
print('Sections:', c.count(b'alt-sec'))
