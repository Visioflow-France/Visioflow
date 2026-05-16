import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1 = c.find(b'PAGE 1')

# 1. Remove the stl/sd block inside form-wrap (the header text)
# Find it: <div class=\"stl\">Votre site restaurant...
stl_start = c.find(b'<div class=\\"stl\\">Votre site restaurant', p1)
if stl_start > 0:
    # Find the closing </div> of the sd div that comes after
    sd_start = c.find(b'<div class=\\"sd\\">', stl_start)
    sd_end   = c.find(b'</div>', sd_start) + len(b'</div>')
    # eat surrounding \n
    open_pos = stl_start - 2 if c[stl_start-2:stl_start] == b'\\n' else stl_start
    c = c[:open_pos] + c[sd_end:]
    print('Form header stl/sd removed')
else:
    print('stl not found - checking...')
    idx = c.find(b'Votre site restaurant', p1)
    print(repr(c[max(0,idx-50):idx+100]))

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
