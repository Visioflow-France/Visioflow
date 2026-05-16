def js(html):
    return html.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').encode('utf-8')

nl = b'\\n'

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'rb') as f:
    content = f.read()

# Replace from <!-- PROCESSUS --> up to (not including) <!-- CTA -->
start = content.find(b'<!-- PROCESSUS -->')
end   = content.find(b'<!-- CTA -->')
print(f'Replacing bytes {start} to {end}')

NEW = '''\
<!-- PROCESSUS -->
<div class="home-process">
  <div class="sh" style="padding-top:72px">
    <div class="st">Comment &ccedil;a marche</div>
    <div class="stl">Votre site en 4 &eacute;tapes.</div>
  </div>
  <div class="hproc-grid4">
    <div class="hproc-step">
      <div class="hproc-num">1</div>
      <h3>Formulaire</h3>
      <p>Remplissez notre formulaire en ligne &mdash; nom, menu, photos, horaires.</p>
    </div>
    <div class="hproc-arr"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="hproc-step">
      <div class="hproc-num">2</div>
      <h3>Paiement</h3>
      <p>R&eacute;glez en ligne par carte, en toute s&eacute;curit&eacute; via Stripe.</p>
    </div>
    <div class="hproc-arr"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="hproc-step">
      <div class="hproc-num">3</div>
      <h3>On cr&eacute;e</h3>
      <p>Notre &eacute;quipe d&eacute;veloppe votre site sur-mesure. Livr&eacute; en <strong>5&nbsp;jours</strong>.</p>
    </div>
    <div class="hproc-arr"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    <div class="hproc-step">
      <div class="hproc-num">4</div>
      <h3>En ligne</h3>
      <p>On met tout en ligne et on vous remet les acc&egrave;s. Cl&eacute; en main.</p>
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
      <div class="pcard-p">150&euro; <span>/ unique</span></div>
      <div class="pcard-o">&#10003; Z&eacute;ro abonnement</div>
      <ul class="pf">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Page d&rsquo;accueil personnalis&eacute;e</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Menu digital avec photos &amp; prix</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Galerie photos</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Horaires d&rsquo;ouverture</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Carte Google Maps + t&eacute;l&eacute;phone cliquable</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Liens Uber Eats &bull; Deliveroo &bull; Just Eat</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>100&nbsp;% responsive (mobile, tablette, PC)</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>SSL / HTTPS inclus</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>H&eacute;bergement gratuit &agrave; vie</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Modifications autonomes (menu, horaires, photos)</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Livraison en 5 jours</li>
      </ul>
      <button class="pbtn-builder" onclick="showPage(\'form\')">Choisir Essentiel &rarr;</button>
    </div>
    <div class="pcard pop">
      <div class="pcard-b">Le + populaire</div>
      <div class="pcard-n">Premium</div>
      <div class="pcard-p">490&euro; <span>/ unique</span></div>
      <div class="pcard-o">&#10003; Z&eacute;ro abonnement</div>
      <ul class="pf">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Tout ce qui est inclus dans Essentiel</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Syst&egrave;me de commande en ligne</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Paiement par carte sur votre site (Stripe)</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Tableau de bord commandes en temps r&eacute;el</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Notifications de nouvelles commandes</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Gestion des plats en autonomie</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Uber Eats &bull; Deliveroo &bull; Just Eat</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>100&nbsp;% responsive (mobile, tablette, PC)</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>SSL / HTTPS inclus</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>H&eacute;bergement gratuit &agrave; vie</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>Livraison en 5 jours</li>
      </ul>
      <button class="pbtn-builder pr" onclick="showPage(\'form\')">Choisir Premium &rarr;</button>
    </div>
  </div>
</div>

'''

new_bytes = js(NEW)
content = content[:start] + new_bytes + content[end:]

with open(r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js', 'wb') as f:
    f.write(content)

# Verify syntax via node
import subprocess
r = subprocess.run(['node', '--check',
    r'C:\Users\clayt\OneDrive\Desktop\Visioflow-Projet\Visioflow2\pages\index.js'],
    capture_output=True, text=True)
print('Syntax:', 'OK' if r.returncode == 0 else r.stderr)
print('Done')
