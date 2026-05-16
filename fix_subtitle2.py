with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Remove any bad bytes introduced by previous script
bad = b'Design professionnel, commandes en ligne, r&eacute;f&eacute;rencement Google \xe2\x80\x94 on g\xe3\xa8re tout \xe3\xa0 votre place.'
good = b'Design professionnel, commandes en ligne, r&eacute;f&eacute;rencement Google &mdash; on g&egrave;re tout &agrave; votre place.'

if bad in c:
    c = c.replace(bad, good)
    print('Fixed bad bytes')
else:
    print('Bad bytes not found, checking what is there...')
    idx = c.find(b'Design professionnel')
    if idx >= 0:
        print(repr(c[idx:idx+200]))
    else:
        print('Subtitle not found at all')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)
