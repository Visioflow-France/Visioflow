with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

old = b'<h3>Vous remplissez</h3>\\n      <p>Un formulaire en ligne. Nom, menu, photos, horaires &mdash; 10&nbsp;minutes depuis votre t&eacute;l&eacute;phone.</p>'
new = b'<h3>Vous remplissez &amp; payez</h3>\\n      <p>Un formulaire en ligne (nom, menu, photos, horaires) &mdash; 10&nbsp;minutes, puis un paiement s&eacute;curis&eacute; par carte. C&rsquo;est tout.</p>'

if old in content:
    content = content.replace(old, new)
    with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
        f.write(content)
    print('Done')
else:
    print('NOT FOUND')
    idx = content.find(b'Vous remplissez')
    print(repr(content[idx:idx+160]))
