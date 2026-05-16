import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

NL = b'\\n'

# ── 1. Add theme button right after </nav> in PAGE_HTML ───────────────────────
nav_close = content.find(b'</nav>' + NL + b'<!-- ====== PAGE 1')
print('nav closes at:', nav_close)

btn_html = (
    NL
    + b'<button id=\\"vf-theme-btn\\" class=\\"vf-theme-btn\\" '
    + b'onclick=\\"window.toggleVfTheme()\\" aria-label=\\"Mode sombre/clair\\">'
    + b'&#127769;</button>'   # 🌙 moon
)

content = content[:nav_close + len(b'</nav>')] + btn_html + content[nav_close + len(b'</nav>'):]
print('Theme button inserted after nav')

# ── 2. Add JS function near other window.* functions ─────────────────────────
# Insert before window.goHomePack
insert_before = content.find(b'window.goHomePack = function')
print('Inserting JS before goHomePack at:', insert_before)

theme_js = b"""window.toggleVfTheme = function(){
  var cur = document.documentElement.getAttribute('data-theme');
  var next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('vf-theme', next);
  var btn = document.getElementById('vf-theme-btn');
  if(btn) btn.innerHTML = next === 'dark' ? '&#9728;&#65039;' : '&#127769;';
};
(function(){
  var t = localStorage.getItem('vf-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
  var btn = document.getElementById('vf-theme-btn');
  if(btn) btn.innerHTML = t === 'dark' ? '&#9728;&#65039;' : '&#127769;';
})();
"""

content = content[:insert_before] + theme_js + content[insert_before:]
print('Theme JS injected')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
