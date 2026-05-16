import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

old = (b"const formData = {\r\n"
       b"      type: 'form_submission',\r\n"
       b"      pack: formPack,\r\n"
       b"      cities: formCities,\r\n"
       b"      menuItems: cleanMenu,\r\n"
       b"      restaurantName: restoName,\r\n"
       b"      logoUrl: window._logoUrl || '',\r\n"
       b"      menuCardPhotoUrl: window._menuCardPhotoUrl || '',\r\n"
       b"    };")

new = (b"var g = function(id){ var el=document.getElementById(id); return el?el.value.trim():''; };\r\n"
       b"    const formData = {\r\n"
       b"      type: 'form_submission',\r\n"
       b"      pack: formPack,\r\n"
       b"      cities: formCities,\r\n"
       b"      menuItems: cleanMenu,\r\n"
       b"      restaurantName: restoName,\r\n"
       b"      logoUrl:          window._logoUrl || '',\r\n"
       b"      menuCardPhotoUrl: window._menuCardPhotoUrl || '',\r\n"
       b"      restaurantPhotos: window._restaurantPhotos || [],\r\n"
       b"      slogan:    g('f-slogan'),\r\n"
       b"      cuisine:   g('f-cuisine-type'),\r\n"
       b"      color:     g('f-color'),\r\n"
       b"      instagram: g('f-instagram'),\r\n"
       b"      facebook:  g('f-facebook'),\r\n"
       b"      tiktok:    g('f-tiktok'),\r\n"
       b"      website:   g('f-website'),\r\n"
       b"      phone:     g('f-tel'),\r\n"
       b"      address:   g('f-address'),\r\n"
       b"      horaires:  g('f-horaires'),\r\n"
       b"      ubereats:  g('f-ubereats'),\r\n"
       b"      deliveroo: g('f-deliveroo'),\r\n"
       b"      justeat:   g('f-justeat'),\r\n"
       b"      remarks:   (document.querySelector('#form-step-3 textarea')||{}).value||'',\r\n"
       b"    };")

if old in c:
    c = c.replace(old, new)
    print('formData updated')
else:
    print('NOT FOUND')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:200])
