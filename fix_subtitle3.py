with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old = b'<p class=\\"alt-desc\\" id=\\"hero-subtitle\\">Design professionnel, commandes en ligne, r&eacute;f&eacute;rencement Google &mdash; on g&egrave;re tout &agrave; votre place.</p>'

if old in c:
    c = c.replace(old, b'')
    print('Removed')
else:
    print('NOT FOUND')
    idx = c.find(b'alt-desc')
    print(repr(c[idx:idx+200]))

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)
