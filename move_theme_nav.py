import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Find the theme button currently sitting after </nav>
btn_start = c.find(b'<button id=\\"vf-theme-btn\\"')
btn_end   = c.find(b'</button>', btn_start) + len(b'</button>')
btn_bytes = c[btn_start:btn_end]

# Remove it from current position (include leading \n)
if c[btn_start-2:btn_start] == b'\\n':
    btn_start -= 2
c = c[:btn_start] + c[btn_end:]

# Insert inside nav before </nav>
nav_close = c.find(b'\\n</nav>')
c = c[:nav_close] + b'\\n  ' + btn_bytes + c[nav_close:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()
nav = c.find(b'mainNav')
print(repr(c[nav:nav+350]))
