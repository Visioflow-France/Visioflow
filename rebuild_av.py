with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

def js(html):
    return html.replace('"', '\\"').replace('\n', '\\n').encode('utf-8')

# 1. Remove teaser-sec
ts_start = content.find(b'\\n  <div class=\\"teaser-sec\\">')
ts_end   = content.find(b'\\n\\n<!-- ====== PAGE 2', ts_start)
if ts_start != -1 and ts_end != -1:
    content = content[:ts_start] + content[ts_end:]
    print('Removed teaser-sec')
else:
    print(f'teaser-sec bounds: {ts_start} {ts_end}')

# 2. Replace avantages page
av_start = content.find(b'<!-- ====== PAGE 4')
av_end   = content.find(b'<!-- ====== PAGE 5', av_start + 50)
print(f'Avantages: {av_start} to {av_end}')

new_av_html = (
'<!-- ====== PAGE 4 — AVANTAGES ====== -->\n'
'<div class="page" id="page-avantages">\n'
'\n'
'  <div class="av-wrap av-bg-section">\n'
'    <div class="sh" style="padding-top:44px">\n'
'      <div class="st">Pourquoi VisioFlow</div>\n'
'      <div class="stl">Un site pro.<br/>Sans abonnement mensuel.</div>\n'
'      <div class="sd">Tout ce qu&#8217;il faut pour exister en ligne &mdash; livr&eacute; en max 5 jours, pr&ecirc;t &agrave; l&#8217;emploi. Un paiement unique, c&#8217;est tout.</div>\n'
'    </div>\n'
'\n'
'    <div class="bento">\n'
'      <div class="fc bento-main" data-glow>\n'
'        <div class="fi" style="background:linear-gradient(135deg,#eff6ff,#e0e7ff)">\n'
'          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>\n'
'        </div>\n'
'        <h3>Livr&eacute; en max&nbsp;5&nbsp;jours</h3>\n'
'        <p>Du formulaire compl&eacute;t&eacute; &agrave; votre site mis en ligne &mdash; notre &eacute;quipe g&egrave;re tout. Vous n&#8217;avez rien &agrave; installer, rien &agrave; configurer. Juste attendre 5 jours et ouvrir votre boite mail.</p>\n'
'        <div style="margin-top:24px;padding-top:20px;border-top:.5px solid var(--bord)">\n'
'          <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text2)">\n'
'            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>D&eacute;lai garanti &bull; Validation avant mise en ligne &bull; Remise des acc&egrave;s\n'
'          </div>\n'
'        </div>\n'
'      </div>\n'
'\n'
'      <div class="fc" data-glow>\n'
'        <div class="fi" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7)">\n'
'          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>\n'
'        </div>\n'
'        <h3>SSL &amp; S&eacute;curit&eacute;</h3>\n'
'        <p>Certificat SSL inclus, sauvegardes automatiques et protection anti-DDoS. Votre site est prot&eacute;g&eacute; 24h/24.</p>\n'
'      </div>\n'
'\n'
'      <div class="fc" data-glow>\n'
'        <div class="fi" style="background:linear-gradient(135deg,#fff7ed,#ffedd5)">\n'
'          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2" stroke-linecap="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>\n'
'        </div>\n'
'        <h3>Modifications autonomes</h3>\n'
'        <p>Menu, prix, horaires : modifiables &agrave; tout moment sans faire appel &agrave; un d&eacute;veloppeur.</p>\n'
'      </div>\n'
'    </div>\n'
'\n'
'    <div class="fgrid" style="margin-top:16px">\n'
'      <div class="fc" data-glow>\n'
'        <div class="fi" style="background:linear-gradient(135deg,#faf5ff,#ede9fe)">\n'
'          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>\n'
'        </div>\n'
'        <h3>Google Maps int&eacute;gr&eacute;</h3>\n'
'        <p>Carte interactive avec itin&eacute;raire en un clic. Vos clients vous trouvent plus facilement.</p>\n'
'      </div>\n'
'      <div class="fc" data-glow>\n'
'        <div class="fi" style="background:linear-gradient(135deg,#fefce8,#fef9c3)">\n'
'          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" stroke-width="2" stroke-linecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>\n'
'        </div>\n'
'        <h3>Galerie de plats</h3>\n'
'        <p>Photos de vos plats optimis&eacute;es pour le web. Votre menu devient visuellement irr&eacute;sistible.</p>\n'
'      </div>\n'
'      <div class="fc" data-glow>\n'
'        <div class="fi" style="background:linear-gradient(135deg,#fff1f2,#ffe4e6)">\n'
'          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>\n'
'        </div>\n'
'        <h3>Dashboard admin</h3>\n'
'        <p>Commandes, chiffre d&#8217;affaires et statistiques en temps r&eacute;el. Uniquement avec le pack Premium.</p>\n'
'      </div>\n'
'    </div>\n'
'  </div>\n'
'\n'
'  <div class="proc-sec">\n'
'    <div style="text-align:center;margin-bottom:56px;position:relative;z-index:1">\n'
'      <div class="st">Le processus</div>\n'
'      <div class="stl" style="font-size:clamp(26px,3.5vw,44px);color:#f8fafc">De z&eacute;ro &agrave; en ligne<br/>en 4 &eacute;tapes</div>\n'
'    </div>\n'
'    <div class="proc-steps">\n'
'      <div class="ps"><div class="ps-num">1</div><h4>Formulaire en ligne</h4><p>Remplissez notre formulaire&nbsp;: nom, menu, horaires, style. 10&nbsp;minutes suffisent.</p></div>\n'
'      <div class="ps"><div class="ps-num">2</div><h4>Paiement s&eacute;curis&eacute;</h4><p>Un seul paiement via Stripe. Pas d&#8217;abonnement, pas de surprise. Confirm&eacute; instantan&eacute;ment.</p></div>\n'
'      <div class="ps"><div class="ps-num">3</div><h4>On cr&eacute;e votre site</h4><p>Notre &eacute;quipe d&eacute;veloppe votre site sur-mesure et int&egrave;gre toutes vos informations en max 5&nbsp;jours.</p></div>\n'
'      <div class="ps"><div class="ps-num">4</div><h4>Vous &ecirc;tes en ligne</h4><p>Validation, mise en ligne et remise des acc&egrave;s. Votre restaurant est visible partout.</p></div>\n'
'    </div>\n'
'  </div>\n'
'\n'
'  <div class="av-cta">\n'
'    <h2>Pr&ecirc;t &agrave; digitaliser<br/>votre restaurant&nbsp;?</h2>\n'
'    <p>Rejoignez 350+ restaurateurs qui ont transform&eacute; leur activit&eacute; avec VisioFlow.</p>\n'
'    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">\n'
"      <button class=\"ba\" onclick=\"showPage('form')\">Configurer mon site &rarr;</button>\n"
'    </div>\n'
'  </div>\n'
'  <footer class="foot" style="background:var(--bg-dark);border-top:.5px solid rgba(255,255,255,.06)">\n'
'    <p style="color:rgba(248,250,252,.3)">&copy; 2026 VisioFlow &mdash; Tous droits r&eacute;serv&eacute;s.</p>\n'
'  </footer>\n'
'</div>\n'
)

new_av_bytes = js(new_av_html)
content = content[:av_start] + new_av_bytes + content[av_end:]
print(f'New avantages: {len(new_av_bytes)} bytes')

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    v = f.read()
lines = v.split(b'\n')
print(f'File lines: {len(lines)}')
print(f'Line 7 length: {len(lines[6])}')
print(f'bento OK: {b"bento" in lines[6]}')
print(f'proc-sec OK: {b"proc-sec" in lines[6]}')
print(f'ps-num OK: {b"ps-num" in lines[6]}')
