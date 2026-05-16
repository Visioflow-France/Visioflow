import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

# Find the hproc-grid4 opening tag and insert new step + arrow before step 1
grid_open = content.find(b'<div class=\\"hproc-grid4\\">')
step1_start = content.find(b'<div class=\\"hproc-step\\">', grid_open)

NL = b'\\n'
new_step = (
    b'    <div class=\\"hproc-step\\">' + NL
    + b'      <div class=\\"hproc-num\\">1</div>' + NL
    + b'      <h3>Vous choisissez</h3>' + NL
    + b'      <p>S&eacute;lectionnez le pack Essentiel ou Premium selon vos besoins.</p>' + NL
    + b'    </div>' + NL
    + b'    <div class=\\"hproc-arr\\"><svg width=\\"22\\" height=\\"22\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\"><path d=\\"M5 12h14M12 5l7 7-7 7\\"/></svg></div>' + NL
)

# Renumber existing steps: 1→2, 2→3, 3→4, 4→5
# We'll do this by inserting the new step and renumbering
content = content[:step1_start] + new_step + content[step1_start:]

# Renumber: find the 4 old hproc-num divs and increment them
# They are now the 2nd, 3rd, 4th, 5th step numbers (originally 1,2,3,4)
old_nums = [b'>1<', b'>2<', b'>3<', b'>4<']
new_nums = [b'>2<', b'>3<', b'>4<', b'>5<']

# Find hproc-num occurrences after the new step we just inserted
search_from = step1_start + len(new_step)
for old, new in zip(old_nums, new_nums):
    pos = content.find(b'hproc-num\\">' + old[1:], search_from)
    if pos >= 0:
        content = content[:pos + len(b'hproc-num\\">') ] + new[1:] + content[pos + len(b'hproc-num\\">') + 1:]
        search_from = pos + 1
    else:
        print(f'WARNING: {old} not found')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])

# Verify step numbers
with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()
for n in [b'>1<', b'>2<', b'>3<', b'>4<', b'>5<']:
    pos = c.find(b'hproc-num\\">' + n[1:])
    print(f'Step {n[1:-1].decode()}: {"found" if pos>=0 else "MISSING"}')
