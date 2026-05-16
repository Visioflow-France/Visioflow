with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# After _nav.appendChild(_proArea), add a direct event listener on the button
# This is more reliable than onclick="" attribute
old = b"_nav.appendChild(_proArea);\r\n  document.addEventListener('click'"
new = b"_nav.appendChild(_proArea);\r\n  document.getElementById('vf-pro-btn').addEventListener('click', function(e){ e.stopPropagation(); if(window.vfToggleDrop) window.vfToggleDrop(); });\r\n  document.addEventListener('click'"

if old in c:
    c = c.replace(old, new)
    print('Added direct event listener to vf-pro-btn')
else:
    print('Pattern not found')
    # Try with \n instead of \r\n
    old2 = b"_nav.appendChild(_proArea);\n  document.addEventListener('click'"
    new2 = b"_nav.appendChild(_proArea);\n  document.getElementById('vf-pro-btn').addEventListener('click', function(e){ e.stopPropagation(); if(window.vfToggleDrop) window.vfToggleDrop(); });\n  document.addEventListener('click'"
    if old2 in c:
        c = c.replace(old2, new2)
        print('Added direct event listener (LF variant)')
    else:
        print('Neither pattern found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

import subprocess
r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
