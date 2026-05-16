import subprocess

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    c = f.read()

# Find the if(typeof window) block we added
window_block_start = c.find(b'if (typeof window !== "undefined") {')
window_block_end   = c.find(b'\n}\n', window_block_start) + len(b'\n}\n')

stray = c[window_block_start + len(b'if (typeof window !== "undefined") {\r\n') : window_block_end - len(b'\n}\n')]
print(f'Stray code: {len(stray)} bytes')
print('First 80:', stray[:80].decode('utf-8','replace'))

# Remove the window block from module level
c = c[:window_block_start] + c[window_block_end:]

# Find the useEffect closing }, []) and insert stray code BEFORE it
ue_close = c.find(b'  }, [])\n\n  return (')
if ue_close < 0:
    ue_close = c.find(b'  }, [])\r\n\r\n  return (')
    sep = b'\r\n'
else:
    sep = b'\n'
print('useEffect close at:', ue_close)

c = c[:ue_close] + sep + stray + sep + b'  }, [])' + sep + sep + b'  return ('  + c[ue_close + len(b'  }, [])') + len(sep)*2 + len(b'  return ('):]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(c)

r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr[:300])
