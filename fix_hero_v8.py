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

    # Mesh gradient blobs
    + b'    <div class=' + DQ + b'hv8-blob hv8-b1' + DQ + b'></div>' + NL
    + b'    <div class=' + DQ + b'hv8-blob hv8-b2' + DQ + b'></div>' + NL
    + b'    <div class=' + DQ + b'hv8-blob hv8-b3' + DQ + b'></div>' + NL

    + b'    <div class=' + DQ + b'hv8-content' + DQ + b'>' + NL

    # Tag
    + b'      <div class=' + DQ + b'hv8-tag' + DQ + b'>' + NL
    + b'        <span class=' + DQ + b'hv8-dot' + DQ + b'></span>' + NL
    + b'        Votre site web restaurant en 5 jours' + NL
    + b'      </div>' + NL

    # Headline
    + b'      <h1 class=' + DQ + b'hv8-h1' + DQ + b' id=' + DQ + b'hero-title' + DQ + b'>' + NL
    + b'        On s&rsquo;occupe de tout.' + NL
    + b'        <span>Vous r&eacute;galez vos clients.</span>' + NL
    + b'      </h1>' + NL

    # Sub
    + b'      <p class=' + DQ + b'hv8-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>Site vitrine ou commandes en ligne &mdash; livr&eacute; en 5 jours, z&eacute;ro abonnement, h&eacute;bergement offert &agrave; vie.</p>' + NL

    # Pills row
    + b'      <div class=' + DQ + b'hv8-pills' + DQ + b'>' + NL
    + b'        <span>&#9889; 5 jours max</span>' + NL
    + b'        <span>&#10003; Z&eacute;ro abonnement</span>' + NL
    + b'        <span>&#127760; H&eacute;bergement offert</span>' + NL
    + b'        <span>&#128241; 100&nbsp;% mobile</span>' + NL
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
