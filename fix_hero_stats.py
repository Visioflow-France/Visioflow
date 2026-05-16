import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

p1 = c.find(b'PAGE 1')
NL = b'\\n'
DQ = b'\\"'

# Find hero-stats start
old_start = c.find(b'<div class=' + DQ + b'hero-stats' + DQ + b'>', p1)
# Find hero-discover as end boundary (comes right after hero-stats)
discover  = c.find(b'<div class=' + DQ + b'hero-discover' + DQ + b'>', p1)
# hero-stats ends with </div>\n right before hero-discover
old_end   = c.rfind(b'</div>', old_start, discover) + len(b'</div>')

print(f'hero-stats: {old_start} to {old_end} ({old_end-old_start} bytes)')
print('Preview:', repr(c[old_start:old_start+60]))
print('End preview:', repr(c[old_end-10:old_end+20]))

new_stats = (
    b'<div class=' + DQ + b'hero-badges' + DQ + b'>' + NL
    + b'      <span class=' + DQ + b'hero-badge' + DQ + b'>&#10003; Site sur-mesure</span>' + NL
    + b'      <span class=' + DQ + b'hero-badge' + DQ + b'>&#10003; Livr&eacute; en 5 jours max</span>' + NL
    + b'      <span class=' + DQ + b'hero-badge' + DQ + b'>&#10003; Z&eacute;ro abonnement</span>' + NL
    + b'      <span class=' + DQ + b'hero-badge' + DQ + b'>&#10003; H&eacute;bergement gratuit &agrave; vie</span>' + NL
    + b'    </div>'
)

c = c[:old_start] + new_stats + c[old_end:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
