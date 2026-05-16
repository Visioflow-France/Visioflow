with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old = b'Votre site restaurant en ligne en <strong>5 jours</strong>. Un seul paiement, z&eacute;ro abonnement.'
new = b'Design professionnel, commandes en ligne, r&eacute;f&eacute;rencement Google \xe2\x80\x94 on g\xe3\xa8re tout \xe3\xa0 votre place.'

if old in c:
    c = c.replace(old, new)
    print('Replaced')
else:
    print('NOT FOUND - trying ascii fallback')
    new2 = b'Design professionnel, commandes en ligne, r&eacute;f&eacute;rencement Google &mdash; on g&egrave;re tout &agrave; votre place.'
    c = c.replace(old, new2)
    print('Replaced with entities')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)
