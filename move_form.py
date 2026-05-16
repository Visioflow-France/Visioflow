import subprocess

SQ = b"'"     # single quote
DQ = b'"'     # double quote
BS = b'\\'    # backslash
BSDQ = b'\\"' # backslash + double-quote (as appears in JS strings)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

# ── Boundaries ────────────────────────────────────────────────────────────────
p1_start  = content.find(b'<!-- ====== PAGE 1')
pf_pos    = content.find(b'page-form')
pf_start  = content.rfind(b'<div class=' + BSDQ + b'page' + BSDQ, 0, pf_pos)
pf_footer = content.find(b'<footer class=' + BSDQ + b'foot' + BSDQ, pf_start)
pf_end    = content.find(b'<!-- ====== SYST', pf_pos)

fw_start  = content.find(b'<div class=' + BSDQ + b'form-wrap' + BSDQ + b'>', pf_start)
fw_end    = content.rfind(b'</div>', fw_start, pf_footer) + len(b'</div>')

form_wrap_bytes = content[fw_start:fw_end]
print('form-wrap bytes:', fw_end - fw_start)

# ── Remove nav CTA button ─────────────────────────────────────────────────────
idx = content.find(b'nav-cta')
if idx >= 0:
    # Find opening of this button tag
    btn_open = content.rfind(b'<button', 0, idx)
    btn_close = content.find(b'</button>', idx) + len(b'</button>')
    # also grab the leading \n
    if content[btn_open-2:btn_open] == b'\\n':
        btn_open -= 2
    nav_btn = content[btn_open:btn_close]
    content = content[:btn_open] + content[btn_close:]
    print('nav-cta removed:', len(nav_btn), 'bytes')
else:
    print('WARNING: nav-cta not found')

# ── Update pack buttons ───────────────────────────────────────────────────────
# showPage('form') -> goHomePack('essentiel') or goHomePack('premium')
old_show = b"showPage(" + SQ + b"form" + SQ + b")"

# Find the Essentiel button: the pbtn-builder (not .pr) that calls showPage form
ess_ctx = b'pbtn-builder' + BSDQ + b' onclick=' + BSDQ + old_show
ess_pos = content.find(ess_ctx)
if ess_pos >= 0:
    content = content[:ess_pos] + content[ess_pos:].replace(
        old_show, b"goHomePack(" + SQ + b"essentiel" + SQ + b")", 1)
    print('Essentiel btn updated')
else:
    print('WARNING: essentiel btn not found')

# Find the Premium button: pbtn-builder pr
prem_ctx = b'pbtn-builder pr' + BSDQ + b' onclick=' + BSDQ + old_show
prem_pos = content.find(prem_ctx)
if prem_pos >= 0:
    content = content[:prem_pos] + content[prem_pos:].replace(
        old_show, b"goHomePack(" + SQ + b"premium" + SQ + b")", 1)
    print('Premium btn updated')
else:
    print('WARNING: premium btn not found, remaining showPage(form):', content.count(old_show))

# Update any remaining showPage('form') to goHomePack('essentiel')
remaining = content.count(old_show)
if remaining:
    content = content.replace(old_show, b"goHomePack(" + SQ + b"essentiel" + SQ + b")")
    print('Updated', remaining, 'remaining showPage(form) calls')

# ── Insert form section before page-accueil footer ────────────────────────────
foot_pos = content.find(b'<footer class=' + BSDQ + b'foot' + BSDQ, p1_start)
NL = b'\\n'
form_section = (
    NL + b'<!-- FORM -->' + NL
    + b'<div id=' + BSDQ + b'home-form' + BSDQ
    + b' style=' + BSDQ + b'display:none;width:100%' + BSDQ + b'>' + NL
    + b'  ' + form_wrap_bytes + NL
    + b'</div>' + NL
)
content = content[:foot_pos] + form_section + content[foot_pos:]
print('Form section inserted before footer')

# ── Remove page-form ──────────────────────────────────────────────────────────
pf_pos2   = content.find(b'page-form')
if pf_pos2 >= 0:
    pf_start2 = content.rfind(b'<div class=' + BSDQ + b'page' + BSDQ, 0, pf_pos2 + 20)
    pf_end2   = content.find(b'<!-- ====== SYST', pf_start2)
    removed   = pf_end2 - pf_start2
    content   = content[:pf_start2] + content[pf_end2:]
    print('Removed page-form:', removed, 'bytes')
else:
    print('page-form already gone')

# ── Write & verify ────────────────────────────────────────────────────────────
with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:400])

for c in [b'home-form', b'goHomePack', b'page-form', b'nav-cta']:
    print(c.decode(), ':', content.count(c))
