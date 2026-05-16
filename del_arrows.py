import subprocess, re

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

# Remove all hproc-arr divs (the arrow elements between steps)
arr_open  = b'<div class=\\"hproc-arr\\">'
arr_close = b'</div>'

count = 0
while True:
    start = content.find(arr_open)
    if start < 0:
        break
    end = content.find(arr_close, start) + len(arr_close)
    # also eat a leading \\n if present
    prefix = content[start-2:start]
    if prefix == b'\\n':
        start -= 2
    content = content[:start] + content[end:]
    count += 1

print(f'Removed {count} hproc-arr divs')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
