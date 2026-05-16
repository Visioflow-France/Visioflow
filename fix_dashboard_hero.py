with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\dashboard.js', 'rb') as f:
    c = f.read()

old_line = b"    { id: 'hero',    label: '\xf0\x9f\x8f\xa0 Page d\\'accueil' },\r\n"
if old_line in c:
    c = c.replace(old_line, b'')
    print('Removed hero section from tabs')
else:
    # Try LF variant
    old_line2 = b"    { id: 'hero',    label: '\xf0\x9f\x8f\xa0 Page d\\'accueil' },\n"
    if old_line2 in c:
        c = c.replace(old_line2, b'')
        print('Removed hero section (LF)')
    else:
        print('NOT FOUND')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\dashboard.js', 'wb') as f:
    f.write(c)

print('Done')
