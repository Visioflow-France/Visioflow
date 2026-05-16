import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

NL = b'\\n'
DQ = b'\\"'

sec2_start = c.find(b'<!-- SECTION 2 -->')
sec2_end   = c.find(b'<!-- SECTION 3 -->')

new_sec2 = (
    b'<!-- SECTION 2 -->' + NL
    + b'<div class=' + DQ + b'alt-sec alt-light testi-sec' + DQ + b'>' + NL
    + b'  <div class=' + DQ + b'testi-inner' + DQ + b'>' + NL
    + b'    <div class=' + DQ + b'testi-header' + DQ + b'>' + NL
    + b'      <div class=' + DQ + b'alt-tag' + DQ + b'>T&eacute;moignages</div>' + NL
    + b'      <h2 class=' + DQ + b'alt-h2' + DQ + b'>Ils nous ont fait <span class=' + DQ + b'alt-accent' + DQ + b'>confiance.</span></h2>' + NL
    + b'    </div>' + NL
    + b'    <div class=' + DQ + b'testi-grid' + DQ + b'>' + NL

    + b'      <div class=' + DQ + b'testi-card' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'testi-stars' + DQ + b'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>' + NL
    + b'        <p class=' + DQ + b'testi-q' + DQ + b'>&laquo;&nbsp;Notre site a &eacute;t&eacute; livr&eacute; en 4 jours, exactement comme promis. Les clients r&eacute;servent directement depuis le site maintenant.&nbsp;&raquo;</p>' + NL
    + b'        <div class=' + DQ + b'testi-author' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'testi-avatar' + DQ + b'>M</div>' + NL
    + b'          <div><strong>Marco T.</strong><span>Pizzeria Roma, Paris</span></div>' + NL
    + b'        </div>' + NL
    + b'      </div>' + NL

    + b'      <div class=' + DQ + b'testi-card' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'testi-stars' + DQ + b'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>' + NL
    + b'        <p class=' + DQ + b'testi-q' + DQ + b'>&laquo;&nbsp;Z&eacute;ro prise de t&ecirc;te, on s&apos;est occup&eacute; de tout. J&apos;ai rempli le formulaire en 10 minutes et mon site &eacute;tait en ligne 5 jours apr&egrave;s.&nbsp;&raquo;</p>' + NL
    + b'        <div class=' + DQ + b'testi-author' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'testi-avatar' + DQ + b' style=' + DQ + b'background:#7c3aed' + DQ + b'>A</div>' + NL
    + b'          <div><strong>A&iuml;cha M.</strong><span>Le Taj Mahal, Lyon</span></div>' + NL
    + b'        </div>' + NL
    + b'      </div>' + NL

    + b'      <div class=' + DQ + b'testi-card' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'testi-stars' + DQ + b'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>' + NL
    + b'        <p class=' + DQ + b'testi-q' + DQ + b'>&laquo;&nbsp;Le rapport qualit&eacute;-prix est imbattable. Pour 150&euro; j&apos;ai un site professionnel avec mon menu, ma galerie et mes horaires. Je recommande.&nbsp;&raquo;</p>' + NL
    + b'        <div class=' + DQ + b'testi-author' + DQ + b'>' + NL
    + b'          <div class=' + DQ + b'testi-avatar' + DQ + b' style=' + DQ + b'background:#059669' + DQ + b'>S</div>' + NL
    + b'          <div><strong>S&eacute;bastien R.</strong><span>Burger &amp; Co, Bordeaux</span></div>' + NL
    + b'        </div>' + NL
    + b'      </div>' + NL

    + b'    </div>' + NL
    + b'  </div>' + NL
    + b'</div>' + NL
    + NL
)

c = c[:sec2_start] + new_sec2 + c[sec2_end:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
