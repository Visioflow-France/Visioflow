import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1 = c.find(b'PAGE 1')

# Find form-step-0 div and form-step-1 div
DQ = b'\\"'
s0_marker = b'id=' + DQ + b'form-step-0' + DQ
s1_marker = b'id=' + DQ + b'form-step-1' + DQ

s0 = c.find(s0_marker, p1)
s1 = c.find(s1_marker, p1)
print(f'form-step-0 at {s0}, form-step-1 at {s1}')

if s0 > 0 and s1 > s0:
    # The step-0 div: find its opening <div
    div_open = c.rfind(b'<div', 0, s0)
    # The closing </div>\n  comes just before step-1's <div
    div_close_search_end = s1
    div_open_s1 = c.rfind(b'<div', 0, s1)
    # step-0 ends at the opening of step-1's <div
    step0_end = div_open_s1
    # eat leading \n
    while step0_end > div_open and c[step0_end-2:step0_end] == b'\\n':
        step0_end -= 2

    print(f'Removing step-0: bytes {div_open} to {step0_end}')
    print('Preview start:', repr(c[div_open:div_open+60]))
    print('Preview end:', repr(c[step0_end-20:step0_end+40]))

    c = c[:div_open] + c[step0_end:]
    print('Removed step-0')
else:
    print('form-step-0 not found in page-accueil')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
