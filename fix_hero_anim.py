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
    + b'    <div class=' + DQ + b'hero-poster' + DQ + b'>' + NL
    + b'      <div class=' + DQ + b'poster-bg-num' + DQ + b'>5</div>' + NL
    + b'      <div class=' + DQ + b'poster-content' + DQ + b'>' + NL
    + b'        <div class=' + DQ + b'poster-tag' + DQ + b' id=' + DQ + b'hero-title' + DQ + b'>Votre restaurant &bull; En ligne</div>' + NL
    + b'        <h1 class=' + DQ + b'poster-h1' + DQ + b'>' + NL
    + b'          <span class=' + DQ + b'ph-line' + DQ + b'>Votre</span>' + NL
    + b'          <span class=' + DQ + b'ph-cycle-wrap' + DQ + b'>' + NL
    + b'            <span class=' + DQ + b'ph-cycle' + DQ + b' id=' + DQ + b'heroCycle' + DQ + b'>pizzeria</span>' + NL
    + b'          </span>' + NL
    + b'          <span class=' + DQ + b'ph-line' + DQ + b'>en ligne.</span>' + NL
    + b'        </h1>' + NL
    + b'        <p class=' + DQ + b'poster-sub' + DQ + b' id=' + DQ + b'hero-subtitle' + DQ + b'>En <strong>5 jours</strong>, cl&eacute; en main &mdash; z&eacute;ro abonnement, h&eacute;bergement offert.</p>' + NL
    + b'      </div>' + NL
    + b'    </div>' + NL
    + b'  </div>'
)

c = c[:start] + new_hero + c[end:]

# Add the cycle animation JS to the useEffect
cycle_js = b"""
// Hero word cycle
(function(){
  var words = ['pizzeria','sushi bar','bistrot','boulangerie','kebab','restaurant','burger','cr\xeaperie','brasserie','traiteur'];
  var el = document.getElementById('heroCycle');
  if(!el) return;
  var i = 0;
  setInterval(function(){
    el.classList.add('ph-out');
    setTimeout(function(){
      i = (i+1) % words.length;
      el.textContent = words[i];
      el.classList.remove('ph-out');
    }, 300);
  }, 2000);
})();
"""

ue_close = c.find(b'}, [])', c.find(b'export default function Home'))
c = c[:ue_close] + cycle_js + c[ue_close:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
