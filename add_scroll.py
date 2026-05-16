import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

NL = b'\\n'

# ── 1. Add scroll hint HTML after the theme button (after </nav>) ─────────────
btn_marker = b'<button id=\\"vf-theme-btn\\"'
idx = content.find(btn_marker)
# Find end of the theme button tag
btn_end = content.find(b'</button>', idx) + len(b'</button>')

scroll_html = (
    NL
    + b'<div id=\\"vf-scroll-hint\\">'
    + b'<span>D&eacute;filer</span>'
    + b'<span class=\\"scroll-chevron\\">'
    + b'<svg width=\\"14\\" height=\\"9\\" viewBox=\\"0 0 14 9\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2.2\\" stroke-linecap=\\"round\\">'
    + b'<path d=\\"M1 1l6 6 6-6\\"/></svg>'
    + b'<svg width=\\"14\\" height=\\"9\\" viewBox=\\"0 0 14 9\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2.2\\" stroke-linecap=\\"round\\" style=\\"opacity:.45\\">'
    + b'<path d=\\"M1 1l6 6 6-6\\"/></svg>'
    + b'</span>'
    + b'</div>'
)

content = content[:btn_end] + scroll_html + content[btn_end:]
print('Scroll hint HTML inserted')

# ── 2. Add JS to show hint after hero + hide on scroll ───────────────────────
insert_before = content.find(b'window.toggleVfTheme = function')

scroll_js = b"""(function(){
  function initScrollHint(){
    var hint = document.getElementById('vf-scroll-hint');
    if(!hint) return;
    // Show after 1.2s
    setTimeout(function(){ hint.style.opacity='1'; }, 1200);
    // Hide when user scrolls 80px
    window.addEventListener('scroll', function onScroll(){
      if(window.scrollY > 80){
        hint.style.opacity='0';
        window.removeEventListener('scroll', onScroll);
      }
    }, {passive:true});
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initScrollHint);
  } else {
    initScrollHint();
  }
})();
"""

content = content[:insert_before] + scroll_js + content[insert_before:]
print('Scroll JS inserted')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
