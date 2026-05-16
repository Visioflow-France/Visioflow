with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'r', encoding='utf-8') as f:
    content = f.read()

original_len = len(content)

# 1. Remove ShowcaseIntro import line
old = "const ShowcaseIntro = dynamic(() => import('../components/ShowcaseIntro'), { ssr: false })\n"
content = content.replace(old, '')

# 2. Fix heroComplete: set to true by default, remove setter
content = content.replace(
    'const [heroComplete, setHeroComplete] = useState(false)',
    'const [heroComplete] = useState(true)'
)

# 3. Remove ShowcaseIntro JSX usage
content = content.replace(
    '      {!heroComplete && <ShowcaseIntro onComplete={() => setHeroComplete(true)} />}\n',
    ''
)

# 4. Remove Avantages/Paiements nav buttons from PAGE_HTML
# These are inside a JS double-quoted string, so \n = \\n and " = \"
# The actual bytes in the file are: \\n  <button class=\"nl\" id=\"nl-avantages\" ...>Avantages</button>
avantages = '\\n  <button class=\\"nl\\" id=\\"nl-avantages\\" onclick=\\"showPage(\'avantages\')\\">Avantages</button>'
paiements = '\\n  <button class=\\"nl\\" id=\\"nl-paiements\\" onclick=\\"showPage(\'paiements\')\\">Paiements</button>'

if avantages in content:
    content = content.replace(avantages, '')
    print('Removed Avantages button')
else:
    print('WARNING: Avantages button not found, trying alternate search...')
    idx = content.find('nl-avantages')
    if idx >= 0:
        print(repr(content[idx-80:idx+100]))

if paiements in content:
    content = content.replace(paiements, '')
    print('Removed Paiements button')
else:
    print('WARNING: Paiements button not found')
    idx = content.find('nl-paiements')
    if idx >= 0:
        print(repr(content[idx-80:idx+100]))

print(f'Length change: {len(content) - original_len}')
print('ShowcaseIntro import present:', 'ShowcaseIntro = dynamic' in content)
print('heroComplete true:', 'useState(true)' in content)
print('setHeroComplete present:', 'setHeroComplete' in content)
print('nl-avantages present:', 'nl-avantages' in content)
print('nl-paiements present:', 'nl-paiements' in content)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Saved.')
