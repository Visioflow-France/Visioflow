import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Remove hero-actions div (the button)
old_btn = (b'    <div class=\\"hero-actions\\">\\n'
           b'      <button id=\\"hero-cta\\" class=\\"ba\\" onclick=\\"goHomePack(\'essentiel\')\\">Configurer mon site &rarr;</button>\\n'
           b'    </div>\\n')
if old_btn in c:
    c = c.replace(old_btn, b'')
    print('Button removed')
else:
    # try alternate subtitle
    idx = c.find(b'hero-actions')
    if idx >= 0:
        open_tag = c.rfind(b'<div', 0, idx)
        close_tag = c.find(b'</div>', idx) + len(b'</div>') + 1  # +1 for \n
        print('Found hero-actions at', idx, '- removing', repr(c[open_tag:open_tag+60]))
        c = c[:open_tag] + c[close_tag:]
        print('Button removed (alternate)')
    else:
        print('hero-actions NOT FOUND')

# Update subtitle to be shorter and sharper
old_sub = b'Sites web premium pour restaurateurs. Menu digital, commandes en ligne, paiements int&eacute;gr&eacute;s &mdash; tout ce qu&apos;il faut pour digitaliser votre &eacute;tablissement.'
new_sub = b'Site vitrine ou commandes en ligne &mdash; livr&eacute; cl&eacute; en main, z&eacute;ro abonnement.'
if old_sub in c:
    c = c.replace(old_sub, new_sub)
    print('Subtitle updated')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
