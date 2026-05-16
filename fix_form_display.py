import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# 1. Add goHomePack function before goToForm
insert_before = c.find(b'window.goToForm = function')

gohome_js = b"""window.goHomePack = function(pack){
  var hf = document.getElementById('home-form');
  if(hf){
    hf.style.display = 'block';
    setTimeout(function(){ hf.scrollIntoView({behavior:'smooth',block:'start'}); }, 80);
  }
  if(window.goToForm) window.goToForm(pack);
};
"""
c = c[:insert_before] + gohome_js + c[insert_before:]
print('goHomePack inserted')

# 2. Fix goToForm to not switch pages (remove the page switching logic)
old_goto = (b"window.goToForm = function(pack){\r\n"
            b"  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});\r\n"
            b"  var pg=document.getElementById('page-form');\r\n"
            b"  if(pg) pg.classList.add('active');\r\n"
            b"  document.querySelectorAll('.nl').forEach(function(b){b.classList.remove('on');});\r\n"
            b"  var nav=document.getElementById('mainNav');\r\n"
            b"  if(nav) nav.classList.remove('light-nav');\r\n"
            b"  window.scrollTo({top:0,behavior:'smooth'});")

new_goto = (b"window.goToForm = function(pack){\r\n"
            b"  var nav=document.getElementById('mainNav');\r\n"
            b"  if(nav) nav.classList.remove('light-nav');")

if old_goto in c:
    c = c.replace(old_goto, new_goto, 1)
    print('goToForm patched')
else:
    # Try with \n instead of \r\n
    old_goto2 = (b"window.goToForm = function(pack){\n"
                 b"  document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active');});\n"
                 b"  var pg=document.getElementById('page-form');\n"
                 b"  if(pg) pg.classList.add('active');\n"
                 b"  document.querySelectorAll('.nl').forEach(function(b){b.classList.remove('on');});\n"
                 b"  var nav=document.getElementById('mainNav');\n"
                 b"  if(nav) nav.classList.remove('light-nav');\n"
                 b"  window.scrollTo({top:0,behavior:'smooth'});")
    new_goto2 = (b"window.goToForm = function(pack){\n"
                 b"  var nav=document.getElementById('mainNav');\n"
                 b"  if(nav) nav.classList.remove('light-nav');")
    if old_goto2 in c:
        c = c.replace(old_goto2, new_goto2, 1)
        print('goToForm patched (LF)')
    else:
        print('WARNING: goToForm pattern not found')
        # Find and show the actual content
        idx = c.find(b'window.goToForm = function')
        print(repr(c[idx:idx+300]))

# 3. Also fix formGoStep to show the right step in home-form
# formGoStep hides all form-step-N then shows the requested one
# This should work since the IDs are the same in home-form
# But it might also scroll to top - let's check

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
print('goHomePack def count:', c.count(b'window.goHomePack = function'))
print('page.forEach in goToForm:', c.count(b"querySelectorAll('.page').forEach"))
