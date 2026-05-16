import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

phone_js = b"""
(function(){
  function animPhone(){
    var els = document.querySelectorAll('.hp-site-header,.hp-site-hero,.hp-menu-row,.hp-site-cta');
    els.forEach(function(el, i){
      el.style.opacity='0';
      el.style.transform='translateY(14px)';
      el.style.transition='opacity .45s ease, transform .45s ease';
      setTimeout(function(){ el.style.opacity='1'; el.style.transform='translateY(0)'; }, 500 + i*220);
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',animPhone);}
  else{setTimeout(animPhone,400);}
})();
"""

ue_close = c.find(b'}, [])', c.find(b'export default function Home'))
c = c[:ue_close] + phone_js + c[ue_close:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
