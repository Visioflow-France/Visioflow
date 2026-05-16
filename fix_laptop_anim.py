import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

laptop_js = b"""
(function(){
  function initLaptopAnim(){
    var lid  = document.querySelector('.lp-lid');
    var notif = document.querySelector('.lp-notif');
    if(!lid) return;

    // Float organique du laptop
    var t0 = null;
    function floatLaptop(ts){
      if(!t0) t0 = ts;
      var t = (ts - t0) / 1000;
      var y  = Math.sin(t * 0.8) * 10 + Math.sin(t * 0.5) * 4;
      var rx = Math.sin(t * 0.6) * 1.5;
      var ry = Math.sin(t * 0.4) * 2;
      var wrap = document.querySelector('.hero-laptop-wrap');
      if(wrap) wrap.style.transform = 'translateY('+y+'px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
      requestAnimationFrame(floatLaptop);
    }
    requestAnimationFrame(floatLaptop);

    // Contenu qui apparait dans l'ordi
    var els = document.querySelectorAll('.lp-site-nav,.lp-site-hero,.lp-card');
    els.forEach(function(el,i){
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity .4s ease, transform .4s ease';
      setTimeout(function(){ el.style.opacity='1'; el.style.transform='translateY(0)'; }, 400 + i*150);
    });

    // Glare sur ecran
    var screen = document.querySelector('.lp-screen');
    if(screen){
      var glare = document.createElement('div');
      glare.style.cssText = 'position:absolute;top:0;left:-100%;width:40%;height:100%;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.12) 50%,transparent 70%);pointer-events:none;z-index:50;animation:glareSweep 4s ease-in-out 1.5s infinite';
      screen.style.position = 'relative';
      screen.appendChild(glare);
      if(!document.getElementById('glareStyle')){
        var s = document.createElement('style');
        s.id = 'glareStyle';
        s.textContent = '@keyframes glareSweep{0%,100%{left:-100%;opacity:0}8%{opacity:1}55%{left:150%;opacity:1}60%{opacity:0}}';
        document.head.appendChild(s);
      }
    }

    // Ping notification
    if(notif){
      setTimeout(function(){
        var ping = document.createElement('div');
        ping.style.cssText = 'position:absolute;inset:-4px;border-radius:18px;border:2px solid rgba(37,99,235,.4);animation:pingRing .8s ease-out forwards;pointer-events:none';
        if(!document.getElementById('pingStyle')){
          var ps = document.createElement('style');
          ps.id = 'pingStyle';
          ps.textContent = '@keyframes pingRing{from{transform:scale(1);opacity:1}to{transform:scale(1.2);opacity:0}}';
          document.head.appendChild(ps);
        }
        notif.style.position = 'relative';
        notif.appendChild(ping);
      }, 2700);
    }
  }

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initLaptopAnim);}
  else{setTimeout(initLaptopAnim,300);}
})();
"""

# Replace old phone animation
old_phone = c.find(b'(function(){\n  function initPhoneAnim()')
if old_phone > 0:
    old_end = c.find(b'})();', old_phone) + len(b'})();')
    c = c[:old_phone] + laptop_js + c[old_end:]
    print('Replaced phone anim with laptop anim')
else:
    ue_close = c.find(b'}, [])', c.find(b'export default function Home'))
    c = c[:ue_close] + laptop_js + c[ue_close:]
    print('Appended laptop anim')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
