import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Fix button HTML: replace moon emoji with text
c = c.replace(
    b'>&#127769;</button>',
    b'>Mode sombre</button>',
    1
)

# Fix JS toggle function: replace emoji innerHTML with text
c = c.replace(
    b"btn.innerHTML = next === 'dark' ? '&#9728;&#65039;' : '&#127769;';",
    b"btn.textContent = next === 'dark' ? 'Mode clair' : 'Mode sombre';"
)
c = c.replace(
    b"btn.innerHTML = t === 'dark' ? '&#9728;&#65039;' : '&#127769;';",
    b"btn.textContent = t === 'dark' ? 'Mode clair' : 'Mode sombre';"
)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
