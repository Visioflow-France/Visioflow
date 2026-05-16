import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old = (b"window.formGoStep = function(s){\r\n"
       b"  [0,1,2,3].forEach(function(n){var e=document.getElementById('form-step-'+n);if(e)e.style.display=n===s?'':'none';});\r\n"
       b"  var pi=document.getElementById('form-pack-info');if(pi)pi.style.display=s===0?'none':'';\r\n"
       b"  window.scrollTo({top:0,behavior:'smooth'});\r\n"
       b"};")

new = (b"window.formGoStep = function(s){\r\n"
       b"  [0,1,2,3].forEach(function(n){var e=document.getElementById('form-step-'+n);if(e)e.style.display=n===s?'':'none';});\r\n"
       b"  var pi=document.getElementById('form-pack-info');if(pi)pi.style.display=s===0?'none':'';\r\n"
       b"  var step=document.getElementById('form-step-'+s);\r\n"
       b"  if(step){setTimeout(function(){step.scrollIntoView({behavior:'smooth',block:'start'});},50);}\r\n"
       b"};")

print('found:', old in c)
if old in c:
    c = c.replace(old, new)
    with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
        f.write(c)
    r = subprocess.run(['node', '--check',
        r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
        capture_output=True, text=True)
    print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
