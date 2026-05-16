with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

def js(html):
    """Escape HTML for insertion inside a JS double-quoted string."""
    return html.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').encode('utf-8')

nl = b'\\n'  # JS escaped newline as bytes

# ── Find trust-row's closing </div> ──────────────────────────────────────
# The last badge ends with "Stripe Partenaire</div>"
# Then trust-row closes with </div>
stripe_badge = b'Stripe Partenaire</div>'
pos_stripe = content.find(stripe_badge)
print(f'Last badge at: {pos_stripe}')

# The trust-row closing </div> is the next </div> after the badge
trust_row_close = content.find(b'</div>', pos_stripe + len(stripe_badge))
print(f'Trust-row close at: {trust_row_close}')

import sys
sys.stdout.buffer.write(b'After trust-row: ')
sys.stdout.buffer.write(content[trust_row_close:trust_row_close+80])
print()

# ── Find page-accueil closing </div> ─────────────────────────────────────
p2_marker = b'<!-- ====== PAGE 2'
p2_pos = content.find(p2_marker)
# Page-accueil closing: last </div> before \n\n<!-- PAGE 2
page_acc_close = content.rfind(b'</div>', 0, p2_pos)
print(f'Page-accueil close at: {page_acc_close}, PAGE 2 at: {p2_pos}')
sys.stdout.buffer.write(content[page_acc_close:page_acc_close+20])
print()

# ── Insert point: right after trust-row's closing </div> ─────────────────
insert_start = trust_row_close + len(b'</div>')
insert_end   = page_acc_close  # Replace old sections, keep the page-accueil </div>

print(f'Replacing bytes {insert_start} to {insert_end} ({insert_end-insert_start} bytes of old content)')

# ── New sections ─────────────────────────────────────────────────────────
NEW = '''
<!-- PROCESSUS -->
<div class="home-process">
  <div class="sh" style="padding-top:72px">
    <div class="st">Comment &ccedil;a marche</div>
    <div class="stl">3 &eacute;tapes, c&rsquo;est tout.</div>
  </div>
  <div class="hproc-grid">
    <div class="hproc-step">
      <div class="hproc-num">1</div>
      <h3>Vous remplissez</h3>
      <p>Un formulaire en ligne. Nom, menu, photos, horaires &mdash; 10&nbsp;minutes depuis votre t&eacute;l&eacute;phone.</p>
    </div>
    <div class="hproc-arrow">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </div>
    <div class="hproc-step">
      <div class="hproc-num">2</div>
      <h3>On cr&eacute;e</h3>
      <p>Notre &eacute;quipe d&eacute;veloppe votre site sur-mesure. Livr&eacute; en <strong>maximum 5 jours</strong>, cl&eacute; en main.</p>
    </div>
    <div class="hproc-arrow">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </div>
    <div class="hproc-step">
      <div class="hproc-num">3</div>
      <h3>Vous &ecirc;tes en ligne</h3>
      <p>On met tout en ligne et on vous remet les acc&egrave;s. Vous g&eacute;rez votre menu en autonomie.</p>
    </div>
  </div>
</div>

<!-- TARIFS -->
<div class="home-packs-sec">
  <div class="sh" style="padding-top:72px">
    <div class="st">Formules</div>
    <div class="stl">Un seul paiement. Z&eacute;ro abonnement.</div>
    <div class="sd">H&eacute;bergement gratuit &agrave; vie inclus dans les deux formules.</div>
  </div>
  <div class="pgrid">
    <div class="pcard">
      <div class="pcard-n">Essentiel</div>
      <div class="pcard-t" id="desc-home-ess">Site vitrine pour votre restaurant</div>
      <div class="pcard-p" id="price-home-ess">150&euro; <span>/ unique</span></div>
      <div class="pcard-o">&#10003; Z&eacute;ro abonnement</div>
      <ul class="pf">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Menu digital avec photos</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Carte Google Maps + t&eacute;l&eacute;phone</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Horaires + galerie photos</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Parfait sur mobile</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>H&eacute;bergement gratuit &agrave; vie</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Modifications autonomes</li>
      </ul>
      <button class="pbtn-builder" onclick="showPage(\'form\')">Choisir Essentiel &rarr;</button>
    </div>
    <div class="pcard pop">
      <div class="pcard-b">Le + populaire</div>
      <div class="pcard-n">Premium</div>
      <div class="pcard-t" id="desc-home-prem">Commandes en ligne incluses</div>
      <div class="pcard-p" id="price-home-prem">490&euro; <span>/ unique</span></div>
      <div class="pcard-o">&#10003; Z&eacute;ro abonnement</div>
      <ul class="pf">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Tout Essentiel inclus</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Vos clients commandent en ligne</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Paiement par carte sur votre site</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Tableau de bord commandes</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Uber Eats &bull; Deliveroo &bull; Just Eat</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>H&eacute;bergement gratuit &agrave; vie</li>
      </ul>
      <button class="pbtn-builder pr" onclick="showPage(\'form\')">Choisir Premium &rarr;</button>
    </div>
  </div>
</div>

<!-- CTA -->
<div class="av-cta">
  <h2>Votre restaurant en ligne<br/>en 5 jours.</h2>
  <p>Rejoignez 350+ restaurateurs. Paiement unique, z&eacute;ro abonnement.</p>
  <button class="ba" onclick="showPage(\'form\')" style="font-size:16px;padding:15px 40px">Configurer mon site &rarr;</button>
</div>
<footer class="foot" style="background:var(--bg-dark);border-top:.5px solid rgba(255,255,255,.06)">
  <div class="foot-l">
    <button onclick="showPage(\'accueil\')" style="color:rgba(248,250,252,.3)">Accueil</button>
    <button onclick="showPage(\'builder\')" style="color:rgba(248,250,252,.3)">Tarifs</button>
    <button onclick="showPage(\'form\')" style="color:rgba(248,250,252,.3)">Configurer</button>
  </div>
  <p style="color:rgba(248,250,252,.3)">&copy; 2026 VisioFlow &mdash; Tous droits r&eacute;serv&eacute;s.</p>
</footer>
'''

new_bytes = js(NEW)

# Replace old content between trust-row close and page-accueil close
content = content[:insert_start] + nl + new_bytes + nl + content[insert_end:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

# Verify
with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    v = f.read()
vlines = v.split(b'\n')
print(f'Lines: {len(vlines)}, Line 7: {len(vlines[6])} bytes')

p1 = v.find(b'page-accueil')
p2_new = v.find(b'<!-- ====== PAGE 2')
vchunk = v[p1:p2_new]
for chk in [b'home-process', b'hproc-grid', b'home-packs-sec', b'av-cta', b'pgrid']:
    cnt = vchunk.count(chk)
    print(f'  {chk.decode()}: {cnt}')

# Verify page-accueil is closed
closed = b'</footer>' + nl + b'</div>' + nl + nl in vchunk
print(f'  page-accueil properly closed: {closed}')

# Verify trust-row is outside process
tr_pos = vchunk.find(b'trust-row')
proc_pos = vchunk.find(b'home-process')
print(f'  trust-row ({tr_pos}) before home-process ({proc_pos}): {tr_pos < proc_pos}')
