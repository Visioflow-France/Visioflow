import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Find getServerSideProps and its try/catch end
gss = c.find(b'export async function getServerSideProps')

# Find the end of the catch block: the } that closes catch
catch_end = c.find(b"return { props: { siteConfig: null } }\r\n  }\r\n", gss)
if catch_end < 0:
    catch_end = c.find(b"return { props: { siteConfig: null } }\n  }\n", gss)

print('catch_end at:', catch_end)

# Position right after the catch closing }
insert_at = catch_end + len(b"return { props: { siteConfig: null } }\r\n  }\r\n")
print('insert_at:', insert_at, repr(c[insert_at:insert_at+50]))

# Find the final } that currently closes getServerSideProps (last } in the function)
gss_close = c.rfind(b'\n}', insert_at, insert_at + 5000)
print('gss_close at:', gss_close, repr(c[gss_close:gss_close+5]))

# Extract the stray window.* code (between insert_at and gss_close)
stray_code = c[insert_at:gss_close]
print('Stray code length:', len(stray_code))
print('First 100:', stray_code[:100].decode('utf-8','replace'))

# Fix:
# 1. Close getServerSideProps right after catch
# 2. Wrap the stray code in typeof window check at module level
# 3. Remove the duplicate closing }

fixed = (
    c[:insert_at]
    + b'}\r\n\r\n'  # close getServerSideProps
    + b'if (typeof window !== "undefined") {\r\n'
    + stray_code
    + b'}\r\n'
    # Skip the old closing } (gss_close)
    + c[gss_close + len(b'\n}'):]
)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(fixed)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:400])
