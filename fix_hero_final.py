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

    + b'    <div class=' + DQ + b'hw-wrap' + DQ + b'>' + NL

    # Top bar
    + b'      <div class=' + DQ + b'hw-top' + DQ + b'>' + NL
    + b'        <span>VisioFlow</span>' + NL
    + b'        <span>Sites web &bull; Restauration &bull; France</span>' + NL
    + b'      </div>' + NL

    # Wall text
    + b'      <div class=' + DQ + b'hw-main' + DQ + b' id=' + DQ + b'hero-title' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hw-line hw-l1' + DQ + b'>Votre</div>' + NL
    + b'        <div class=' + DQ + b'hw-line hw-l2' + DQ + b'>restaurant</div>' + NL
    + b'        <div class=' + DQ + b'hw-line hw-l3' + DQ + b'>en ligne.</div>' + NL
    + b'      </div>' + NL

    # Bottom strip
    + b'      <div class=' + DQ + b'hw-bottom' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'hw-badge' + DQ + b'>En 5 jours maximum</div>' + NL
    + b'        <div class=' + DQ + b'hw-badge' + DQ + b'>Z&eacute;ro abonnement</div>' + NL
    + b'        <div class=' + DQ + b'hw-badge' + DQ + b'>H&eacute;bergement gratuit &agrave; vie</div>' + NL
    + b'        <div class=' + DQ + b'hw-badge' + DQ + b'>Cl&eacute; en main</div>' + NL
    + b'        <div class=' + DQ + b'hw-scroll' + DQ + b'>' + NL
    + b'          <svg width=' + DQ + b'14' + DQ + b' height=' + DQ + b'14' + DQ + b' viewBox=' + DQ + b'0 0 24 24' + DQ + b' fill=' + DQ + b'none' + DQ + b' stroke=' + DQ + b'currentColor' + DQ + b' stroke-width=' + DQ + b'2' + DQ + b'><path d=' + DQ + b'M12 5v14M5 12l7 7 7-7' + DQ + b'/></svg>' + NL
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
