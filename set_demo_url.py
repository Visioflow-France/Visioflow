import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

for demo_id, url in [(b'demo-home-ess', b'https://prestige-flow.vercel.app'),
                     (b'demo-home-prem', b'https://matchaflow.vercel.app')]:
    old = b'id=\\"' + demo_id + b'\\" href=\\"#\\" onclick=\\"openSitePreview(\'ess\')'
    if old not in c:
        old = b'id=\\"' + demo_id + b'\\" href=\\"#\\" onclick=\\"openSitePreview('
    idx = c.find(b'id=\\"' + demo_id + b'\\"')
    if idx >= 0:
        print(repr(c[idx:idx+80]))

print('Checking existing data-url...')
for demo_id in [b'demo-home-ess', b'demo-home-prem']:
    idx = c.find(b'id=\\"' + demo_id + b'\\"')
    print(demo_id.decode(), ':', repr(c[idx:idx+120]))
