import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Add enhanced phone animation JS before }, [])
enhanced_js = b"""
(function(){
  function initPhoneAnim(){
    var frame = document.querySelector('.hp-frame');
    var wrap  = document.querySelector('.hero-phone-wrap');
    var notif = document.querySelector('.hp-notif');
    var badge = document.querySelector('.hp-online');
    if(!frame) return;

    // Float organique avec JS pour plus de contr\xc3\xb4le
    var startTime = null;
    function floatPhone(ts){
      if(!startTime) startTime = ts;
      var t = (ts - startTime) / 1000;
      var y  = Math.sin(t * 1.1) * 18 + Math.sin(t * 0.7) * 6;
      var rx = Math.sin(t * 0.8) * 2.5;
      var rz = -3 + Math.sin(t * 0.6) * 1.5;
      frame.style.transform = 'translateY('+y+'px) rotateX('+rx+'deg) rotateZ('+rz+'deg)';
      // Ombre dynamique
      var shadowY = 50 - y * 0.8;
      var shadowBlur = 80 + y * 1.5;
      var shadowOp = 0.35 - y * 0.005;
      frame.style.boxShadow = '0 '+shadowY+'px '+shadowBlur+'px rgba(0,0,0,'+Math.max(0.15,shadowOp)+'),0 20px 40px rgba(37,99,235,.2),0 0 0 1px rgba(255,255,255,.08)';
      requestAnimationFrame(floatPhone);
    }
    requestAnimationFrame(floatPhone);

    // Glare sweep sur l'\xe9cran
    var screen = frame.querySelector('.hp-screen');
    if(screen){
      var glare = document.createElement('div');
      glare.style.cssText = 'position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.18) 50%,transparent 60%);pointer-events:none;z-index:50;animation:glareSweep 3.5s ease-in-out 1s infinite';
      screen.style.position = 'relative';
      screen.appendChild(glare);
      var style = document.createElement('style');
      style.textContent = '@keyframes glareSweep{0%,100%{left:-100%;opacity:0}10%{opacity:1}50%{left:150%;opacity:1}55%{opacity:0}}';
      document.head.appendChild(style);
    }

    // Ping autour de la notification \xe0 l'arriv\xe9e
    if(notif){
      setTimeout(function(){
        var ping = document.createElement('div');
        ping.style.cssText = 'position:absolute;inset:-4px;border-radius:20px;border:2px solid rgba(37,99,235,.5);animation:pingRing .8s ease-out forwards;pointer-events:none';
        var ps = document.createElement('style');
        ps.textContent = '@keyframes pingRing{from{transform:scale(1);opacity:1}to{transform:scale(1.15);opacity:0}}';
        document.head.appendChild(ps);
        notif.style.position = 'relative';
        notif.appendChild(ping);
      }, 2200);
    }
  }

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initPhoneAnim);}
  else{setTimeout(initPhoneAnim,200);}
})();
"""

# Remove old basic phone animation
old_basic = b"""
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

if old_basic in c:
    c = c.replace(old_basic, enhanced_js)
    print('Replaced old animation with enhanced version')
else:
    # Just append before }, [])
    ue_close = c.find(b'}, [])', c.find(b'export default function Home'))
    c = c[:ue_close] + enhanced_js + c[ue_close:]
    print('Appended enhanced animation')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
