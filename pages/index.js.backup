import Head from 'next/head'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import AssistanceWidget from '../components/AssistanceWidget'

const PAGE_HTML = "<!-- ====== MODAL 1 — ACHAT RESTOFLOW (3 methodes, sans Swile) ====== -->\n<div class=\"pay-overlay\" id=\"buyOverlay\" onclick=\"if(event.target===this)closeBuy()\">\n  <div class=\"pay-modal\">\n    <div class=\"pay-header\">\n      <div>\n        <div class=\"pay-badge\">\n          <svg width=\"10\" height=\"10\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0110 0v4\"/></svg>\n          Achat s&eacute;curis&eacute; &middot; SSL 256-bit\n        </div>\n        <div class=\"pay-title\" id=\"mTitle\">Pack Essentiel</div>\n        <div class=\"pay-sub\" id=\"mSub\">Site vitrine pour votre restaurant</div>\n      </div>\n      <button class=\"pay-close\" onclick=\"closeBuy()\">&times;</button>\n    </div>\n    <div style=\"padding:16px 24px 0\">\n      <div class=\"pay-summ\">\n        <div class=\"pr\"><span class=\"prl\">Offre</span><span class=\"prr\" id=\"mPack\">Essentiel</span></div>\n        <div class=\"pr\"><span class=\"prl\">Type de restaurant</span><span class=\"prr\" id=\"mCuisine\">&mdash;</span></div>\n        <div class=\"pr\"><span class=\"prl\">Style configur&eacute;</span><span class=\"prr\" id=\"mStyle\">Liste</span></div>\n        <div class=\"pr\"><span class=\"prl\">H&eacute;bergement &agrave; vie</span><span class=\"prr\" style=\"color:#34C759\">Inclus &#10003;</span></div>\n        <div class=\"pr tot\"><span class=\"prl\">Total paiement unique</span><span class=\"prr\" id=\"mPrice\">150&euro;</span></div>\n      </div>\n    </div>\n    <div style=\"padding:18px 24px 0\">\n      <div class=\"pm-label\">Mode de paiement</div>\n      <div class=\"pm-grid3\">\n        <button class=\"pm-btn on\" data-m=\"stripe\" onclick=\"selMethod('stripe')\">\n          <div class=\"pm-ico\" style=\"background:#635BFF\"><svg width=\"12\" height=\"16\" viewBox=\"0 0 14 18\" fill=\"none\"><path d=\"M6.2 6.8C6.2 5.9 6.9 5.5 8 5.5c1.5 0 3 .5 4 1.2V2.3C10.8 1.5 9.4 1 8 1 4.7 1 2.5 2.7 2.5 5.2c0 4.2 5.8 3.5 5.8 5.3 0 1-.8 1.4-2 1.4-1.7 0-3.3-.7-4.4-1.6v4.5c1.2.5 2.7.8 4.4.8 3.4 0 5.7-1.7 5.7-4.2-.1-4.5-5.8-3.6-5.8-4.6z\" fill=\"white\"/></svg></div>\n          <div class=\"pm-name\">Carte</div>\n        </button>\n        <button class=\"pm-btn\" data-m=\"apple\" onclick=\"selMethod('apple')\">\n          <div class=\"pm-ico\" style=\"background:#000;border:.5px solid rgba(255,255,255,.15)\"><svg width=\"12\" height=\"15\" viewBox=\"0 0 14 17\" fill=\"white\"><path d=\"M11.8 8.9c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7C3 4.1 1.2 5.1.4 6.7c-1.6 2.8-.4 7 1.1 9.3.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.8-2.2.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.4-.9-2.4-3.7zM9.7 2.3C10.4 1.4 10.9.2 10.7-.1 9.5 0 8.1.8 7.4 1.7c-.6.8-1.2 2-1 3.1 1.3.1 2.6-.7 3.3-2.5z\"/></svg></div>\n          <div class=\"pm-name\">Apple Pay</div>\n        </button>\n        <button class=\"pm-btn\" data-m=\"paypal\" onclick=\"selMethod('paypal')\">\n          <div class=\"pm-ico\" style=\"background:#003087\"><svg width=\"12\" height=\"15\" viewBox=\"0 0 14 16\" fill=\"none\"><path d=\"M11.5 2.3C10.8 1.5 9.5 1 7.8 1H3.2c-.4 0-.7.3-.8.6L.6 13.4c0 .3.2.5.5.5h2.8l.7-4.3v.1c.1-.4.4-.6.8-.6h1.7c3.2 0 5.7-1.3 6.4-5 .1-.3.1-.6.1-.9-.2-1-.6-1.6-1.1-1.9z\" fill=\"#009cde\"/><path d=\"M5.8 5.4c.1-.4.3-.6.7-.6h4.4c.5 0 1 .1 1.4.2.4.1.8.4 1 .7.1-.3.1-.6.1-.9C13.8 3.8 12.3 3 10.3 3H5.7c-.4 0-.7.3-.8.6L3.1 14.5c0 .3.2.5.5.5h2.5l1.7-9.6z\" fill=\"#012169\"/></svg></div>\n          <div class=\"pm-name\">PayPal</div>\n        </button>\n      </div>\n    </div>\n    <div class=\"pay-form-s\">\n      <label class=\"pay-lbl\">Votre email (confirmation de commande)</label>\n      <input class=\"pay-inp\" type=\"email\" id=\"mEmail\" placeholder=\"votre@email.com\" oninput=\"valEmail()\"/>\n      <button class=\"pay-go b-stripe\" id=\"payGoBtn\" onclick=\"doPay()\" disabled>\n        <span id=\"payGoTxt\">Entrez votre email</span>\n        <div class=\"spinner\" id=\"paySpin\"></div>\n      </button>\n      <div class=\"pay-sec-note\" id=\"paySecNote\">\n        <svg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0110 0v4\"/></svg>\n        Paiement s&eacute;curis&eacute; par Stripe &middot; SSL 256-bit &middot; PCI-DSS\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- ====== MODAL 2 — COMMANDE RESTAURANT (avec Swile) ====== -->\n<div class=\"rp-overlay\" id=\"restoOverlay\" onclick=\"if(event.target===this)closeResto()\">\n  <div class=\"rp-modal\" id=\"restoModal\">\n    <div class=\"rp-handle\"></div>\n    <div class=\"rp-header\">\n      <div class=\"rp-title\" id=\"rpTitle\">Votre commande</div>\n      <div class=\"rp-sub\" id=\"rpSub\">Livraison 25&ndash;35 min</div>\n    </div>\n    <div class=\"rp-items\" id=\"rpItems\"></div>\n    <div class=\"rp-total\">\n      <span class=\"rp-total-l\">Total</span>\n      <span class=\"rp-total-r\" id=\"rpTotal\">0.00&euro;</span>\n    </div>\n    <div class=\"rp-methods\">\n      <div class=\"rp-methods-label\">Payer avec</div>\n      <div class=\"rp-grid\">\n        <button class=\"rp-btn on\" data-rm=\"stripe\" onclick=\"selRMethod('stripe')\"><div class=\"rp-btn-ico\" style=\"background:#635BFF\"><svg width=\"10\" height=\"14\" viewBox=\"0 0 14 18\" fill=\"none\"><path d=\"M6.2 6.8C6.2 5.9 6.9 5.5 8 5.5c1.5 0 3 .5 4 1.2V2.3C10.8 1.5 9.4 1 8 1 4.7 1 2.5 2.7 2.5 5.2c0 4.2 5.8 3.5 5.8 5.3 0 1-.8 1.4-2 1.4-1.7 0-3.3-.7-4.4-1.6v4.5c1.2.5 2.7.8 4.4.8 3.4 0 5.7-1.7 5.7-4.2-.1-4.5-5.8-3.6-5.8-4.6z\" fill=\"white\"/></svg></div><div class=\"rp-btn-name\">CB</div></button>\n        <button class=\"rp-btn\" data-rm=\"apple\" onclick=\"selRMethod('apple')\"><div class=\"rp-btn-ico\" style=\"background:#000;border:.5px solid rgba(255,255,255,.15)\"><svg width=\"10\" height=\"13\" viewBox=\"0 0 14 17\" fill=\"white\"><path d=\"M11.8 8.9c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7C3 4.1 1.2 5.1.4 6.7c-1.6 2.8-.4 7 1.1 9.3.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.8-2.2.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.4-.9-2.4-3.7zM9.7 2.3C10.4 1.4 10.9.2 10.7-.1 9.5 0 8.1.8 7.4 1.7c-.6.8-1.2 2-1 3.1 1.3.1 2.6-.7 3.3-2.5z\"/></svg></div><div class=\"rp-btn-name\"> Pay</div></button>\n        <button class=\"rp-btn\" data-rm=\"paypal\" onclick=\"selRMethod('paypal')\"><div class=\"rp-btn-ico\" style=\"background:#003087\"><svg width=\"10\" height=\"13\" viewBox=\"0 0 14 16\" fill=\"none\"><path d=\"M11.5 2.3C10.8 1.5 9.5 1 7.8 1H3.2c-.4 0-.7.3-.8.6L.6 13.4c0 .3.2.5.5.5h2.8l.7-4.3v.1c.1-.4.4-.6.8-.6h1.7c3.2 0 5.7-1.3 6.4-5 .1-.3.1-.6.1-.9-.2-1-.6-1.6-1.1-1.9z\" fill=\"#009cde\"/><path d=\"M5.8 5.4c.1-.4.3-.6.7-.6h4.4c.5 0 1 .1 1.4.2.4.1.8.4 1 .7.1-.3.1-.6.1-.9C13.8 3.8 12.3 3 10.3 3H5.7c-.4 0-.7.3-.8.6L3.1 14.5c0 .3.2.5.5.5h2.5l1.7-9.6z\" fill=\"#012169\"/></svg></div><div class=\"rp-btn-name\">PayPal</div></button>\n        <button class=\"rp-btn\" data-rm=\"swile\" onclick=\"selRMethod('swile')\"><div class=\"rp-btn-ico\" style=\"background:#5F2EEA\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"><rect width=\"16\" height=\"16\" rx=\"4\" fill=\"#5F2EEA\"/><circle cx=\"7.5\" cy=\"8.5\" r=\"2.5\" fill=\"white\"/><circle cx=\"11.5\" cy=\"4.5\" r=\"1.5\" fill=\"#FF6B6B\"/></svg></div><div class=\"rp-btn-name\">Swile</div></button>\n      </div>\n    </div>\n    <div class=\"rp-confirm\">\n      <button class=\"rp-confirm-btn\" id=\"rpConfirmBtn\" style=\"background:var(--blue)\" onclick=\"confirmRestoOrder()\">Confirmer &amp; Payer</button>\n    </div>\n  </div>\n</div>\n<!-- ====== NAV ====== -->\n<nav class=\"nav\" id=\"mainNav\">\n  <span class=\"nav-logo\" style=\"font-family:Outfit;font-weight:800\" onclick=\"showPage('accueil')\">Visio<span style=\"color:var(--blue)\">Flow</span></span>\n  \n  <button id=\"vf-theme-btn\" class=\"vf-theme-btn\" onclick=\"window.toggleVfTheme()\" aria-label=\"Mode sombre/clair\">Mode sombre</button>\n</nav>\n<!-- SITE PREVIEW MODAL -->\n<div id=\"spm\" style=\"display:none;position:fixed;inset:0;z-index:9000;display:none;align-items:center;justify-content:center\">\n  <div class=\"spm-ov\" onclick=\"closeSitePreview()\"></div>\n  <div class=\"spm-box\">\n    <div class=\"spm-head\">\n      <span class=\"spm-brand\">Visio<span style=\"color:var(--blue)\">Flow</span> &mdash; Aper&ccedil;u du site</span>\n      <div class=\"spm-acts\">\n\n        <button class=\"spm-close\" onclick=\"closeSitePreview()\">&#10005;</button>\n      </div>\n    </div>\n    <div class=\"spm-body\">\n      <iframe id=\"spm-iframe\" src=\"\" frameborder=\"0\" allow=\"fullscreen\" title=\"Aper&ccedil;u du site\"></iframe>\n      <div class=\"spm-blocked\" id=\"spm-blocked\" style=\"display:none\">\n        <div class=\"spm-blocked-ico\">&#128279;</div>\n        <p>Ce site ne peut pas s&apos;&ecirc;tre affich&eacute; ici.</p>\n        <a id=\"spm-blocked-link\" href=\"#\" target=\"_blank\" class=\"spm-ext-btn\">Ouvrir dans un onglet &rarr;</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"vf-scroll-hint\"><span>D&eacute;filer</span><span class=\"scroll-chevron\"><svg width=\"14\" height=\"9\" viewBox=\"0 0 14 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"><path d=\"M1 1l6 6 6-6\"/></svg><svg width=\"14\" height=\"9\" viewBox=\"0 0 14 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" style=\"opacity:.45\"><path d=\"M1 1l6 6 6-6\"/></svg></span></div>\n<!-- ====== PAGE 1 — ACCUEIL ====== -->\n<div class=\"page active\" id=\"page-accueil\">\n  <div class=\"hero\">\n    <div class=\"hero-overlay\"></div>\n    <div class=\"hero-main\">\n      <div class=\"hero-left\">\n        <div class=\"alt-tag\">Sites web pour restaurateurs</div>\n        <h1 class=\"hero-title-new\" id=\"hero-title\">\n          On s&rsquo;occupe de tout.\n          <span class=\"gr\">Vous de votre cuisine.</span>\n        </h1>\n        \n      </div>\n      <div class=\"hero-laptop-wrap\">\n        <div class=\"lp-notif\">\n          <div class=\"lp-notif-ico\">&#128276;</div>\n          <div>\n            <div class=\"lp-notif-title\">Nouvelle commande !</div>\n            <div class=\"lp-notif-sub\">Pizza &times;2 &mdash; 28&euro;</div>\n          </div>\n          <div class=\"lp-notif-dot\"></div>\n        </div>\n        <div class=\"lp-photo\"><img src=\"/hero-laptop.png\" alt=\"Aperçu d'un site de restaurant sur ordinateur portable\" width=\"1195\" height=\"896\" loading=\"eager\" decoding=\"async\" /></div>\n        <div class=\"lp-lid\">\n          <div class=\"lp-cam\"></div>\n          <div class=\"lp-screen\">\n            <div class=\"lp-browser\">\n              <div class=\"lp-bar\">\n                <span class=\"lp-dot r\"></span><span class=\"lp-dot y\"></span><span class=\"lp-dot g\"></span>\n                <div class=\"lp-url\">lepetitbistrot.fr</div>\n              </div>\n              <div class=\"lp-content\">\n                <div class=\"lp-site-nav\"><span>Le Petit Bistrot</span><span>Menu &bull; Horaires &bull; Nous contacter</span></div>\n                <div class=\"lp-site-hero\">\n                  <div class=\"lp-hero-text\">\n                    <div class=\"lp-hero-title\">Cuisine fran&ccedil;aise</div>\n                    <div class=\"lp-hero-sub\">Paris 11e &bull; Ouvert tous les jours</div>\n                    <div class=\"lp-hero-cta\">Voir la carte &rarr;</div>\n                  </div>\n                </div>\n                <div class=\"lp-cards\">\n                  <div class=\"lp-card\"><div class=\"lp-card-img lp-img1\"></div><div class=\"lp-card-name\">Boeuf Bourguignon</div><div class=\"lp-card-price\">18&euro;</div></div>\n                  <div class=\"lp-card\"><div class=\"lp-card-img lp-img2\"></div><div class=\"lp-card-name\">Entrecote grill&eacute;e</div><div class=\"lp-card-price\">24&euro;</div></div>\n                  <div class=\"lp-card\"><div class=\"lp-card-img lp-img3\"></div><div class=\"lp-card-name\">Tarte Tatin</div><div class=\"lp-card-price\">9&euro;</div></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"lp-base\">\n          <div class=\"lp-keyboard\"></div>\n        </div>\n        <div class=\"lp-foot\"></div>\n      </div>\n    </div>\n  </div>\n\n  \n\n<!-- SECTION 1 -->\n<div class=\"alt-sec alt-dark\">\n  <div class=\"alt-inner\">\n    <div class=\"alt-text\">\n      <div class=\"alt-tag\">Notre processus</div>\n      <h2 class=\"alt-h2\">Votre site, livr&eacute; en <span class=\"alt-accent\">5&nbsp;jours.</span></h2>\n      <p class=\"alt-desc\">De votre formulaire au site en ligne &mdash; on g&egrave;re tout. Vous n&apos;avez rien &agrave; installer, rien &agrave; coder.</p>\n    </div>\n    <div class=\"alt-visual\">\n      <div class=\"steps-list\">\n        <div class=\"step-row\"><span class=\"step-n\">1</span><div><strong>Vous choisissez votre formule</strong><p>Essentiel ou Premium selon vos besoins.</p></div></div>\n        <div class=\"step-row\"><span class=\"step-n\">2</span><div><strong>Vous remplissez le formulaire</strong><p>Infos, menu, photos &mdash; quelques minutes.</p></div></div>\n        <div class=\"step-row\"><span class=\"step-n\">3</span><div><strong>Vous payez</strong><p>Via Stripe &mdash; s&eacute;curis&eacute;, des dizaines de moyens.</p></div></div>\n        <div class=\"step-row\"><span class=\"step-n\">4</span><div><strong>On cr&eacute;e votre site</strong><p>Livr&eacute; en maximum 5&nbsp;jours, cl&eacute; en main.</p></div></div>\n        <div class=\"step-row\"><span class=\"step-n\">5</span><div><strong>Vous &ecirc;tes en ligne</strong><p>On vous remet les acc&egrave;s. Vous g&eacute;rez en autonomie.</p></div></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- SECTION 3 -->\n<div class=\"alt-sec alt-dark\">\n  <div class=\"alt-inner\">\n    <div class=\"alt-text\">\n      <div class=\"alt-tag\">Votre site, vos r&egrave;gles</div>\n      <h2 class=\"alt-h2\">Mettez &agrave; jour votre menu<br/><span class=\"alt-accent\">en 30 secondes.</span></h2>\n      <p class=\"alt-desc\">Modifiez vos plats, vos prix, vos horaires depuis votre t&eacute;l&eacute;phone <strong>ou votre ordinateur</strong>. Les changements s&apos;affichent instantan&eacute;ment sur votre site. Pas besoin d&apos;un d&eacute;veloppeur.</p>\n    </div>\n    <div class=\"alt-visual\">\n      <div class=\"autonomy-card\">\n        <div class=\"auto-row\"><span class=\"auto-dot green\"></span>Pizza Margherita &mdash; 12&euro; <span class=\"auto-live\">En ligne</span></div>\n        <div class=\"auto-row\"><span class=\"auto-dot green\"></span>Burger Classic &mdash; 15&euro; <span class=\"auto-live\">En ligne</span></div>\n        <div class=\"auto-row\"><span class=\"auto-dot amber\"></span>Salade C&eacute;sar &mdash; 11&euro; <span class=\"auto-upd\">Mise &agrave; jour...</span></div>\n        <div class=\"auto-row dim\"><span class=\"auto-dot grey\"></span>P&acirc;tes Carbonara &mdash; 14&euro;</div>\n        <div class=\"auto-footer\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polyline points=\"20 6 9 17 4 12\"/></svg>\n          Modifications enregistr&eacute;es automatiquement\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- TARIFS -->\n<div class=\"home-packs-sec\">\n  <div class=\"sh\" style=\"padding-top:72px\">\n    <div class=\"st\">Formules</div>\n    <div class=\"stl\">Un seul paiement. Z&eacute;ro abonnement.</div>\n    <div class=\"sd\">H&eacute;bergement gratuit &agrave; vie inclus dans les deux formules.</div>\n  </div>\n  <div style=\"display:flex;align-items:flex-start;gap:10px;background:rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.1);border-radius:10px;padding:12px 16px;font-size:12.5px;color:#6b7280;line-height:1.6;max-width:800px;margin:0 auto 20px;\"><svg style=\"flex-shrink:0;margin-top:2px\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6b7280\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg><span><strong>Nom de domaine :</strong> offert la 1&egrave;re ann&eacute;e. &Agrave; partir de la 2&egrave;me ann&eacute;e, son renouvellement (env. 10&ndash;15&euro;/an) est &agrave; votre charge.</span></div>\n  <div class=\"pgrid\">\n    <div class=\"pcard\">\n      <div class=\"pcard-n\">Essentiel</div>\n      <div class=\"pcard-p\" id=\"price-essentiel\">150&euro; <span>/ unique</span></div>\n      <div class=\"pcard-o\">&#10003; Z&eacute;ro abonnement</div>\n      <ul class=\"pf\">\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Page d&rsquo;accueil personnalis&eacute;e</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Menu digital avec photos &amp; prix</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Galerie photos</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Horaires d&rsquo;ouverture</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Carte Google Maps + t&eacute;l&eacute;phone cliquable</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Liens Uber Eats &bull; Deliveroo &bull; Just Eat</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>100&nbsp;% responsive (mobile, tablette, PC)</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>SSL / HTTPS inclus</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>H&eacute;bergement gratuit &agrave; vie</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Modifications autonomes (menu, horaires, photos)</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Livraison en 5 jours</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>SEO optimis&eacute;</li>\n      </ul>\n      <button class=\"pbtn-builder\" onclick=\"goHomePack('essentiel')\">Choisir Essentiel &rarr;</button>\n      <a class=\"pcard-demo\" id=\"demo-home-ess\" href=\"#\" onclick=\"openSitePreview('ess');return false\"><span class=\"demo-ico\">&#128196;</span><span class=\"demo-text\"><span class=\"demo-label\">Voir un exemple de site</span><span class=\"demo-sub\">Ouvre dans un nouvel onglet</span></span><span class=\"demo-arrow\">&rarr;</span></a>\n    </div>\n    <div class=\"pcard pop\">\n      <div class=\"pcard-b\">Le + populaire</div>\n      <div class=\"pcard-n\">Premium</div>\n      <div class=\"pcard-p\" id=\"price-premium\">490&euro; <span>/ unique</span></div>\n      <div class=\"pcard-o\">&#10003; Z&eacute;ro abonnement</div>\n      <ul class=\"pf\">\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Tout ce qui est inclus dans Essentiel</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Syst&egrave;me de commande en ligne</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Paiement par carte sur votre site (Stripe)</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Tableau de bord commandes en temps r&eacute;el</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Notifications de nouvelles commandes</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Gestion des plats en autonomie</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Uber Eats &bull; Deliveroo &bull; Just Eat</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>100&nbsp;% responsive (mobile, tablette, PC)</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>SSL / HTTPS inclus</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>H&eacute;bergement gratuit &agrave; vie</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Livraison en 5 jours</li>\n        <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>SEO optimis&eacute;</li>\n      </ul>\n      <button class=\"pbtn-builder pr\" onclick=\"goHomePack('premium')\">Choisir Premium &rarr;</button>\n      <a class=\"pcard-demo\" id=\"demo-home-prem\" href=\"#\" onclick=\"openSitePreview('prem');return false\"><span class=\"demo-ico\">&#128196;</span><span class=\"demo-text\"><span class=\"demo-label\">Voir un exemple de site</span><span class=\"demo-sub\">Ouvre dans un nouvel onglet</span></span><span class=\"demo-arrow\">&rarr;</span></a>\n    </div>\n  </div>\n</div>\n\n\n<!-- FORM -->\n<div id=\"home-form\" style=\"display:none;width:100%\">\n  <div class=\"form-wrap\">\n    \n      \n    </div>\n\n    <!-- Pack info bar -->\n    <div class=\"form-pack-info\" id=\"form-pack-info\" style=\"display:none\">\n      <div class=\"form-pack-dot\" id=\"form-pack-dot\" style=\"background:var(--blue)\"></div>\n      <div>\n        <div class=\"form-pack-name\" id=\"form-pack-name\">Pack Premium</div>\n        <div style=\"font-size:11px;color:var(--text3)\">Formulaire adapt&eacute; &agrave; votre offre</div>\n      </div>\n      <div class=\"form-pack-price\" id=\"form-pack-price\">490&euro;</div>\n    </div>\n\n    <!-- STEP 0: Choix du plan -->\n    <div id=\"form-step-1\" style=\"display:none\">\n      <div class=\"form-section\">\n        <div class=\"form-section-title\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg>Informations g&eacute;n&eacute;rales</div>\n        <div class=\"form-section-sub\">Les informations de base de votre restaurant.</div>\n        <div class=\"form-group\">\n          <label class=\"form-label\">Nom du restaurant <span class=\"req\">*</span></label>\n          <input class=\"form-input\" type=\"text\" id=\"f-resto-name\" placeholder=\"Ex: Le Petit Bistrot\" oninput=\"window.syncRestoName&&window.syncRestoName(this.value)\"/>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group\">\n            <label class=\"form-label\">Type de restaurant <span class=\"req\">*</span></label>\n            <input class=\"form-input\" type=\"text\" id=\"f-cuisine-type\" placeholder=\"Ex: Pizzeria, Bistrot Français, Sushi, Burger...\"/>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Couleur dominante souhait&eacute;e</label>\n            <input class=\"form-input\" type=\"text\" id=\"f-color\" placeholder=\"Ex: Rouge, #E85D04, etc.\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"form-label\">Slogan / phrase d&apos;accroche</label>\n          <input class=\"form-input\" type=\"text\" id=\"f-slogan\" placeholder=\"Ex: Le meilleur burger de Paris depuis 2018\"/>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"form-label\">Logo du restaurant</label>\n          <div class=\"form-upload\" onclick=\"document.getElementById('f-logo-file').click()\">\n            <div class=\"form-upload-ico\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text3)\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"/></svg></div>\n            <div class=\"form-upload-txt\">Cliquez pour uploader votre logo</div>\n            <div class=\"form-upload-hint\">PNG ou SVG recommand&eacute; &bull; Fond transparent id&eacute;al</div>\n            <input type=\"file\" id=\"f-logo-file\" accept=\"image/*\" style=\"display:none\" onchange=\"window.handleLogoUpload(this)\"/>\n            <div id=\"f-logo-preview\" style=\"margin-top:10px;display:flex;justify-content:center\"></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-section\">\n        <div class=\"form-section-title\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15z\"/></svg>Contact &amp; Localisation</div>\n        <div class=\"form-section-sub\" id=\"form-contact-sub\">Coordonn&eacute;es de votre &eacute;tablissement.</div>\n        <!-- Bloc unique pour Essentiel/Premium -->\n        <div id=\"form-single-location\">\n          <div class=\"form-row\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Adresse compl&egrave;te <span class=\"req\">*</span></label>\n              <input class=\"form-input\" type=\"text\" id=\"f-address\" placeholder=\"12 Rue de la Paix, 75001 Paris\"/>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">T&eacute;l&eacute;phone <span class=\"req\">*</span></label>\n              <input class=\"form-input\" type=\"tel\" id=\"f-tel\" placeholder=\"01 23 45 67 89\"/>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Email du restaurant</label>\n              <input class=\"form-input\" type=\"email\" id=\"f-email\" placeholder=\"contact@monrestaurant.fr\"/>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Site web actuel (si existant)</label>\n              <input class=\"form-input\" type=\"url\" placeholder=\"https://...\"/>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-label\">Horaires d&apos;ouverture <span class=\"req\">*</span></label>\n            <textarea class=\"form-input\" id=\"f-horaires\" placeholder=\"Lun-Ven: 12h-14h30 / 19h-22h30&#10;Sam: 12h-23h&#10;Dim: Ferm&eacute;\"></textarea>\n          </div>\n        </div>\n\n        \n        <div class=\"form-group\" style=\"margin-top:8px\">\n          <div class=\"form-section-title\" style=\"font-size:13px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #f1f5f9\">Informations légales <span style=\"opacity:.55;font-weight:400;font-size:12px\">(pour vos mentions légales — optionnel mais recommandé)</span></div>\n          <p style=\"font-size:12px;opacity:.6;margin-bottom:14px;line-height:1.5\">Ces infos figurent sur votre Kbis ou l&rsquo;avis de situation INSEE. Elles servent à générer automatiquement vos mentions légales conformes.</p>\n          <div class=\"form-group\"><label class=\"form-label\">Raison sociale</label><input class=\"form-input\" type=\"text\" id=\"f-legal-raison\" placeholder=\"SARL Le Petit Bistrot\"/></div>\n          <div class=\"form-row\">\n            <div class=\"form-group\"><label class=\"form-label\">Forme juridique</label><select class=\"form-input\" id=\"f-legal-forme\"><option value=\"\">— Choisir —</option><option>Auto-entrepreneur</option><option>Entreprise individuelle</option><option>EURL</option><option>SARL</option><option>SAS</option><option>SASU</option><option>SCI</option><option>Autre</option></select></div>\n            <div class=\"form-group\"><label class=\"form-label\">Nom et prénom du dirigeant</label><input class=\"form-input\" type=\"text\" id=\"f-legal-gerant\" placeholder=\"Jean Dupont\"/></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group\"><label class=\"form-label\">SIRET (14 chiffres)</label><input class=\"form-input\" type=\"text\" id=\"f-legal-siret\" placeholder=\"123 456 789 00012\"/></div>\n            <div class=\"form-group\"><label class=\"form-label\">N° RCS ou RM</label><input class=\"form-input\" type=\"text\" id=\"f-legal-rcs\" placeholder=\"RCS Paris 123 456 789\"/></div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group\"><label class=\"form-label\">Capital social</label><input class=\"form-input\" type=\"text\" id=\"f-legal-capital\" placeholder=\"5 000 €\"/></div>\n            <div class=\"form-group\"><label class=\"form-label\">N° TVA intracommunautaire</label><input class=\"form-input\" type=\"text\" id=\"f-legal-tva\" placeholder=\"FR12345678901 (vide si franchise)\"/></div>\n          </div>\n        </div>\n\n<div class=\"form-group\" style=\"margin-top:8px\">\n          <div class=\"form-section-title\" style=\"font-size:13px;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #f1f5f9\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.3 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z\"/></svg>R&eacute;seaux sociaux <span style=\"font-size:11px;font-weight:400;color:#9ca3af\">(optionnel)</span></div>\n          <div class=\"form-row\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">Instagram</label>\n              <input class=\"form-input\" type=\"url\" id=\"f-instagram\" placeholder=\"https://instagram.com/monrestaurant\"/>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Facebook</label>\n              <input class=\"form-input\" type=\"url\" id=\"f-facebook\" placeholder=\"https://facebook.com/monrestaurant\"/>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group\">\n              <label class=\"form-label\">TikTok</label>\n              <input class=\"form-input\" id=\"f-tiktok\" placeholder=\"@monrestaurant\"/>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"form-label\">Site web existant</label>\n              <input class=\"form-input\" type=\"url\" id=\"f-website\" placeholder=\"https://monrestaurant.fr\"/>\n            </div>\n          </div>\n        </div>\n\n        \n\n      </div>\n      <div class=\"form-nav-btns\">\n        <div></div>\n        <button class=\"form-btn-next\" onclick=\"window.formGoStep(2)\">Suivant : Menu &amp; Photos &rarr;</button>\n      </div>\n    </div>\n\n    <!-- STEP 2: Menu & Photos -->\n    <div id=\"form-step-2\" style=\"display:none\">\n      <div class=\"form-section\">\n        <div class=\"form-section-title\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2\"/><path d=\"M7 2v20\"/><path d=\"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7\"/></svg>Votre menu</div>\n        <div class=\"form-section-sub\" id=\"form-menu-sub\">Listez vos plats par cat&eacute;gorie avec les prix. </div>\n\n        <!-- Menu toggle: plat par plat ou photo -->\n        <div style=\"display:flex;gap:8px;margin:12px 0 16px\">\n          <button id=\"menu-mode-items\" onclick=\"window.setMenuMode('items')\" style=\"flex:1;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px;border:1.5px solid var(--blue);background:var(--blue);color:#fff\">&#128203; Plat par plat</button>\n          <button id=\"menu-mode-photo\" onclick=\"window.setMenuMode('photo')\" style=\"flex:1;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px;border:1.5px solid #e5e7eb;background:#fff;color:#6b7280\">&#128247; Photo du menu</button><button id=\"menu-mode-both\" onclick=\"window.setMenuMode('both')\" style=\"flex:1;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px;border:1.5px solid #e5e7eb;background:#fff;color:#6b7280\">&#128203;&#128247; Les deux</button>\n        </div>\n        <div id=\"form-menu-photo-zone\" style=\"display:none\">\n          <div id=\"menu-photo-upload-area\" onclick=\"document.getElementById('f-menu-photo-file').click()\" class=\"form-upload\" style=\"min-height:120px\">\n            <div class=\"form-upload-ico\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text3)\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/></svg></div>\n            <div class=\"form-upload-txt\">Cliquez pour uploader une photo de votre menu</div>\n            <div class=\"form-upload-hint\">JPG, PNG, PDF accept&eacute;s</div>\n            <input type=\"file\" id=\"f-menu-photo-file\" accept=\"image/*\" multiple style=\"display:none\" onchange=\"window.handleMenuPhotoUpload(this)\"/>\n          </div>\n        </div>\n\n        <!-- Menu pour Essentiel / Premium -->\n        <div id=\"form-menu-single\">\n          <div class=\"form-cat-title\">Entr&eacute;es</div>\n          <div id=\"form-menu-entrees\"></div>\n          <button class=\"form-add-item\" onclick=\"window.formAddMenuItem('entrees')\">+ Ajouter une entr&eacute;e</button>\n\n          <div class=\"form-cat-title\">Plats</div>\n          <div id=\"form-menu-plats\"></div>\n          <button class=\"form-add-item\" onclick=\"window.formAddMenuItem('plats')\">+ Ajouter un plat</button>\n\n          <div class=\"form-cat-title\">Desserts</div>\n          <div id=\"form-menu-desserts\"></div>\n          <button class=\"form-add-item\" onclick=\"window.formAddMenuItem('desserts')\">+ Ajouter un dessert</button>\n\n          <div class=\"form-cat-title\">Boissons</div>\n          <div id=\"form-menu-boissons\"></div>\n          <button class=\"form-add-item\" onclick=\"window.formAddMenuItem('boissons')\">+ Ajouter une boisson</button>\n        </div>\n\n        \n      </div>\n\n      <div class=\"form-section\">\n        <div class=\"form-section-title\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/></svg>Photos du restaurant</div>\n        <div class=\"form-section-sub\">Envoyez vos plus belles photos (salle, fa&ccedil;ade, plats). Minimum 3 recommand&eacute;.</div>\n        <div class=\"form-upload\" onclick=\"document.getElementById('f-photos-file').click()\" style=\"min-height:120px\">\n          <div class=\"form-upload-ico\"><svg width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--text3)\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><polyline points=\"17 8 12 3 7 8\"/><line x1=\"12\" y1=\"3\" x2=\"12\" y2=\"15\"/></svg></div>\n          <div class=\"form-upload-txt\">Cliquez pour uploader vos photos</div>\n          <div class=\"form-upload-hint\">JPG, PNG &bull; Plusieurs fichiers accept&eacute;s &bull; Haute r&eacute;solution recommand&eacute;e</div>\n          <input type=\"file\" id=\"f-photos-file\" accept=\"image/*\" multiple style=\"display:none\" onchange=\"window.handleRestaurantPhotos(this)\"/>\n          <div id=\"f-photos-preview\" style=\"display:flex;flex-wrap:wrap;gap:6px;margin-top:10px\"></div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:14px\">\n          <label class=\"form-label\">Lien Google Drive / Dropbox (alternative)</label>\n          <input class=\"form-input\" type=\"url\" placeholder=\"https://drive.google.com/... ou https://dropbox.com/...\"/>\n        </div>\n      </div>\n\n      <div class=\"form-nav-btns\">\n        <button class=\"form-btn-prev\" onclick=\"window.formGoStep(1)\">&larr; Retour</button>\n        <button class=\"form-btn-next\" onclick=\"window.formGoStep(3)\">Suivant : Configuration &rarr;</button>\n      </div>\n    </div>\n\n    <!-- STEP 3: Config technique -->\n    <div id=\"form-step-3\" style=\"display:none\">\n      \n      \n      \n      <div class=\"form-section\" id=\"form-delivery-section\"><div class=\"form-section-title\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"1\" y=\"3\" width=\"15\" height=\"13\"/><polygon points=\"16 8 20 8 23 11 23 16 16 16 16 8\"/><circle cx=\"5.5\" cy=\"18.5\" r=\"2.5\"/><circle cx=\"18.5\" cy=\"18.5\" r=\"2.5\"/></svg>Plateformes de livraison</div><div class=\"form-section-sub\">Vos liens sur les plateformes de livraison.</div><div class=\"form-row\"><div class=\"form-group\"><label class=\"form-label\">Lien Uber Eats</label><input class=\"form-input\" type=\"url\" id=\"f-ubereats\" placeholder=\"https://www.ubereats.com/store/...\"/></div><div class=\"form-group\"><label class=\"form-label\">Lien Deliveroo</label><input class=\"form-input\" type=\"url\" id=\"f-deliveroo\" placeholder=\"https://deliveroo.fr/menu/...\"/></div><div class=\"form-group\"><label class=\"form-label\">Lien Just Eat</label><input class=\"form-input\" type=\"url\" id=\"f-justeat\" placeholder=\"https://www.just-eat.fr/restaurants/...\"/></div></div></div>\n      <div class=\"form-section\">\n        <div class=\"form-section-title\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--blue)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/></svg>Remarques compl&eacute;mentaires</div>\n        <div class=\"form-section-sub\">Tout ce que vous souhaitez nous pr&eacute;ciser.</div>\n        <div class=\"form-group\">\n          <textarea class=\"form-input\" placeholder=\"Ex: Je voudrais un style sombre, mettre en avant nos pizzas au feu de bois, ajouter un lien vers notre page Instagram...\" style=\"min-height:100px\"></textarea>\n        </div>\n      </div>\n\n      <div id=\"form-assist-block\" style=\"background:rgba(0,113,227,.06);border:1px solid rgba(0,113,227,.2);border-radius:12px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;gap:12px\">\n        <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z\"/></svg>\n        <div>\n          <div style=\"font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px\">Besoin d&apos;aide ?</div>\n          <div style=\"display:flex;gap:14px;flex-wrap:wrap;align-items:center\">\n            <a id=\"assist-p1-lnk\" href=\"tel:\" style=\"font-size:14px;font-weight:700;color:#0071E3;text-decoration:none\"><span id=\"assist-p1\">...</span></a>\n            <span style=\"color:#e5e7eb\">|</span>\n            <a id=\"assist-p2-lnk\" href=\"tel:\" style=\"font-size:14px;font-weight:700;color:#0071E3;text-decoration:none\"><span id=\"assist-p2\">...</span></a>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-nav-btns\">\n        <button class=\"form-btn-prev\" onclick=\"window.formGoStep(2)\">&larr; Retour</button>\n        <button class=\"form-btn-next\" onclick=\"window.formSubmit()\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:5px\"><polyline points=\"20 6 9 17 4 12\"/></svg>Envoyer le formulaire</button>\n      </div>\n    </div>\n\n    <!-- STEP SUCCESS -->\n    <div id=\"form-step-success\" style=\"display:none\">\n      <div class=\"form-success\">\n        <div class=\"form-success-ico\"><svg width=\"64\" height=\"64\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><polyline points=\"9 12 11 14 15 10\"/></svg></div>\n        <div class=\"stl\" style=\"font-size:32px;margin-bottom:8px\">Formulaire envoy&eacute; !</div>\n        <div class=\"sd\" style=\"margin-bottom:28px\">Merci ! Vous allez &ecirc;tre redirig&eacute; vers le paiement s&eacute;curis&eacute; dans quelques instants&hellip;</div>\n        \n        <button class=\"ba\" onclick=\"showPage('accueil')\">Retour &agrave; l&apos;accueil &rarr;</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- ====== PAGE 2 — TARIFS ====== -->\n<div class=\"page\" id=\"page-builder\">\n  <div class=\"offres-wrap\">\n    <div class=\"sh\" style=\"padding-top:36px\">\n      <div class=\"st\">Choisissez votre formule</div>\n      <div class=\"stl\">Votre site livr&eacute; en max 5 jours,<br/>cl&eacute; en main.</div>\n      <div class=\"sd\">Paiement unique &bull; Z&eacute;ro abonnement &bull; H&eacute;bergement &agrave; vie inclus &mdash; un lien, un formulaire, et c&rsquo;est parti.</div>\n    </div>\n    <div style=\"display:flex;align-items:flex-start;gap:10px;background:rgba(0,0,0,.04);border:1px solid rgba(0,0,0,.1);border-radius:10px;padding:12px 16px;font-size:12.5px;color:#6b7280;line-height:1.6;max-width:800px;margin:0 auto 20px;\"><svg style=\"flex-shrink:0;margin-top:2px\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#6b7280\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg><span><strong>Nom de domaine :</strong> offert la 1&egrave;re ann&eacute;e. &Agrave; partir de la 2&egrave;me ann&eacute;e, son renouvellement (env. 10&ndash;15&euro;/an) est &agrave; votre charge.</span></div>\n    <div class=\"pgrid\">\n      <div class=\"pcard\">\n        <div class=\"pcard-n\">Essentiel</div><div class=\"pcard-t\" id=\"desc-b-essentiel\">Site vitrine + gestion autonome</div>\n        <div class=\"pcard-p\" id=\"price-b-essentiel\">150&euro; <span>/ unique</span></div>\n        <div class=\"pcard-o\">&#10003; Z&eacute;ro abonnement</div>\n        <ul class=\"pf\">\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Menu digital interactif</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Google Maps + t&eacute;l&eacute;phone</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Horaires + adresse</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Design responsive mobile</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#9ca3af\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>SSL + h&eacute;bergement 1 an</li>\n        </ul>\n        <a class=\"pcard-demo\" id=\"demo-b-essentiel\" href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>\n          Voir un exemple de site complet\n        </a>\n        <button class=\"pbtn-builder\" onclick=\"goHomePack('essentiel')\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z\"/></svg>\n          Remplir le formulaire &rarr;\n        </button>\n      </div>\n      <div class=\"pcard pop\">\n        <div class=\"pcard-b\">Le + populaire</div>\n        <div class=\"pcard-n\">Premium</div><div class=\"pcard-t\" id=\"desc-b-premium\">Commandes en ligne &amp; livraison</div>\n        <div class=\"pcard-p\" id=\"price-b-premium\">490&euro; <span>/ unique</span></div>\n        <div class=\"pcard-o\">&#10003; Z&eacute;ro abonnement</div>\n        <ul class=\"pf\">\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Tout Essentiel inclus</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Panier &amp; commande en ligne</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Stripe &bull; Apple Pay &bull; PayPal</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>Dashboard administrateur</li>\n          <li><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2.5\" stroke-linecap=\"round\"><path d=\"M20 6L9 17l-5-5\"/></svg>SEO optimis&eacute; + Analytics</li>\n        </ul>\n        <a class=\"pcard-demo\" id=\"demo-b-premium\" href=\"#\" target=\"_blank\" rel=\"noopener noreferrer\">\n          <svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>\n          Voir un exemple de site complet\n        </a>\n        <button class=\"pbtn-builder pr\" onclick=\"goHomePack('essentiel')\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z\"/></svg>\n          Remplir le formulaire &rarr;\n        </button>\n      </div>\n      \n    </div>\n  </div>\n  <footer class=\"foot\">\n    <div class=\"foot-l\">\n      <button onclick=\"showPage('accueil')\">Accueil</button>\n      <button onclick=\"goHomePack('essentiel')\">Offres</button>\n      <button onclick=\"showPage('avantages')\">Avantages</button>\n    </div>\n    <p>&copy; 2026 VisioFlow &mdash; Tous droits r&eacute;serv&eacute;s.</p>\n  </footer>\n</div>\n<!-- ====== PAGE 4 — AVANTAGES ====== -->\n<div class=\"page\" id=\"page-avantages\">\n  <div class=\"av-wrap av-bg-section\">\n    <div class=\"sh\" style=\"padding-top:36px\">\n      <div class=\"st\">Avantages</div>\n      <div class=\"stl\">Tout est inclus<br/>d&egrave;s le premier jour.</div>\n      <div class=\"sd\">Chaque fonctionnalit&eacute; est pens&eacute;e pour maximiser vos commandes et votre visibilit&eacute;.</div>\n    </div>\n    <div class=\"fgrid\">\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#eff6ff\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg></div><h3>Ultra rapide</h3><p>Score Lighthouse 95+. Moins de 2 secondes sur mobile et desktop.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#f0fdf4\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"2\" width=\"14\" height=\"20\" rx=\"2\"/><line x1=\"12\" y1=\"18\" x2=\"12.01\" y2=\"18\"/></svg></div><h3>100% Responsive</h3><p>Parfait sur iPhone, Android, tablette et desktop.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#fefce8\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><line x1=\"21\" y1=\"21\" x2=\"16.65\" y2=\"16.65\"/></svg></div><h3>SEO Google</h3><p>R&eacute;f&eacute;rencement naturel optimis&eacute; d&egrave;s le lancement.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#faf5ff\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#7c3aed\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\"/><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"/></svg></div><h3>Paiements int&eacute;gr&eacute;s</h3><p>Stripe, Apple Pay, PayPal, Swile &mdash; tous les modes.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#fff1f2\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#e11d48\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"/><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"/><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"/></svg></div><h3>Dashboard admin</h3><p>Commandes, chiffre d&apos;affaires et stats en temps r&eacute;el.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#f0f9ff\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0369a1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></svg></div><h3>SSL &amp; S&eacute;curit&eacute;</h3><p>Certificat SSL A+, sauvegardes quotidiennes, DDoS.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#f0fdf4\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#16a34a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg></div><h3>Google Maps</h3><p>Carte interactive avec itin&eacute;raire en un clic.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#fefce8\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#ca8a04\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\"/><circle cx=\"12\" cy=\"13\" r=\"4\"/></svg></div><h3>Galerie photos</h3><p>Photos optimis&eacute;es web pour vos plats.</p></div>\n      <div class=\"fc\" data-glow><div class=\"fi\" style=\"background:#eff6ff\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#0071E3\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"23 4 23 10 17 10\"/><path d=\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\"/></svg></div><h3>Mises &agrave; jour</h3><p>Menu, prix et horaires modifiables en autonomie.</p></div>\n    </div>\n  </div>\n\n  <div style=\"padding:60px 24px;background:var(--bg-alt)\">\n    <div class=\"sgrid\" style=\"margin-bottom:60px\">\n      <div class=\"sc\"><div class=\"sv\">350+</div><div class=\"sl\">Restaurants &eacute;quip&eacute;s</div></div>\n      <div class=\"sc\"><div class=\"sv\">98%</div><div class=\"sl\">Satisfaction client</div></div>\n      <div class=\"sc\"><div class=\"sv\">max 5 jours</div><div class=\"sl\">D&eacute;lai de livraison</div></div>\n      <div class=\"sc\"><div class=\"sv\">+34%</div><div class=\"sl\">Commandes en moyenne</div></div>\n    </div>\n    <div style=\"text-align:center;margin-bottom:32px\">\n      <div class=\"st\">Processus</div>\n      <div class=\"stl\" style=\"font-size:clamp(24px,3vw,38px)\">Votre site en 4 &eacute;tapes</div>\n    </div>\n    <div class=\"psteps\" style=\"max-width:900px;margin:0 auto\">\n      <div class=\"ps\"><div class=\"ps-n\">01</div><h4>Vous configurez</h4><p>Choisissez cuisine, couleur et offre dans le Builder.</p></div>\n      <div class=\"ps\"><div class=\"ps-n\">02</div><h4>Vous commandez</h4><p>Paiement s&eacute;curis&eacute; en quelques minutes.</p></div>\n      <div class=\"ps\"><div class=\"ps-n\">03</div><h4>On cr&eacute;e votre site</h4><p>Notre &eacute;quipe d&eacute;veloppe et int&egrave;gre tout en max 5 jours.</p></div>\n      <div class=\"ps\"><div class=\"ps-n\">04</div><h4>Vous &ecirc;tes en ligne</h4><p>Validation, mise en ligne et remise des acc&egrave;s.</p></div>\n    </div>\n  </div>\n\n  <div class=\"av-cta\">\n    <div class=\"av-cta-ov\"></div>\n    <h2>Pr&ecirc;t &agrave; digitaliser<br/>votre restaurant&nbsp;?</h2>\n    <p>Rejoignez 350+ restaurateurs qui ont transform&eacute; leur activit&eacute;.</p>\n    <div style=\"display:flex;gap:14px;justify-content:center;flex-wrap:wrap\">\n      <button class=\"ba\" onclick=\"goHomePack('essentiel')\">Configurer mon site &rarr;</button>\n    </div>\n  </div>\n  <footer class=\"foot\"><p>&copy; 2026 VisioFlow &mdash; Tous droits r&eacute;serv&eacute;s.</p></footer>\n</div>\n<!-- ====== PAGE 5 — PAIEMENTS ====== -->\n<div class=\"page\" id=\"page-paiements\">\n  <div class=\"pp-wrap\">\n    <div class=\"sh\" style=\"padding-top:36px\">\n      <div class=\"st\">Paiements</div>\n      <div class=\"stl\">Tous les modes<br/>de paiement.</div>\n      <div class=\"sd\">Vos clients paient avec leur m&eacute;thode pr&eacute;f&eacute;r&eacute;e. Int&eacute;gration Stripe s&eacute;curis&eacute;e.</div>\n    </div>\n    <div id=\"pay-orbital-container\"></div>\n    <div class=\"pp-grid\">\n      <div class=\"pp-card\">\n        <div class=\"pp-head\"><div class=\"pp-logo\" style=\"background:#635BFF\"><svg width=\"18\" height=\"24\" viewBox=\"0 0 14 18\" fill=\"none\"><path d=\"M6.2 6.8C6.2 5.9 6.9 5.5 8 5.5c1.5 0 3 .5 4 1.2V2.3C10.8 1.5 9.4 1 8 1 4.7 1 2.5 2.7 2.5 5.2c0 4.2 5.8 3.5 5.8 5.3 0 1-.8 1.4-2 1.4-1.7 0-3.3-.7-4.4-1.6v4.5c1.2.5 2.7.8 4.4.8 3.4 0 5.7-1.7 5.7-4.2-.1-4.5-5.8-3.6-5.8-4.6z\" fill=\"white\"/></svg></div><div><div class=\"pp-name\">Stripe</div><div class=\"pp-sub\">Carte bancaire en ligne</div></div></div>\n        <div class=\"pp-desc\">Le leader mondial du paiement. Acceptez toutes les cartes Visa, Mastercard, CB, American Express. Virements automatiques sur votre compte.</div>\n        <div class=\"pp-tags\"><span class=\"pp-tag\">Visa</span><span class=\"pp-tag\">Mastercard</span><span class=\"pp-tag\">CB</span><span class=\"pp-tag\">3D Secure</span></div>\n      </div>\n      <div class=\"pp-card\">\n        <div class=\"pp-head\"><div class=\"pp-logo\" style=\"background:#000;border:1px solid #333\"><svg width=\"18\" height=\"22\" viewBox=\"0 0 14 17\" fill=\"white\"><path d=\"M11.8 8.9c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.6 0-1.6-.7-2.7-.7C3 4.1 1.2 5.1.4 6.7c-1.6 2.8-.4 7 1.1 9.3.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1.1 2.8-2.2.9-1.2 1.2-2.4 1.2-2.5-.1 0-2.4-.9-2.4-3.7zM9.7 2.3C10.4 1.4 10.9.2 10.7-.1 9.5 0 8.1.8 7.4 1.7c-.6.8-1.2 2-1 3.1 1.3.1 2.6-.7 3.3-2.5z\"/></svg></div><div><div class=\"pp-name\">Apple Pay</div><div class=\"pp-sub\">Paiement biom&eacute;trique</div></div></div>\n        <div class=\"pp-desc\">Un tap, Touch ID ou Face ID &mdash; c&apos;est pay&eacute;. R&eacute;duit l&apos;abandon panier de 40% sur mobile. Z&eacute;ro saisie requise.</div>\n        <div class=\"pp-tags\"><span class=\"pp-tag\">Face ID</span><span class=\"pp-tag\">Touch ID</span><span class=\"pp-tag\">Z&eacute;ro saisie</span></div>\n      </div>\n      <div class=\"pp-card\">\n        <div class=\"pp-head\"><div class=\"pp-logo\" style=\"background:#003087\"><svg width=\"18\" height=\"22\" viewBox=\"0 0 14 16\" fill=\"none\"><path d=\"M11.5 2.3C10.8 1.5 9.5 1 7.8 1H3.2c-.4 0-.7.3-.8.6L.6 13.4c0 .3.2.5.5.5h2.8l.7-4.3v.1c.1-.4.4-.6.8-.6h1.7c3.2 0 5.7-1.3 6.4-5 .1-.3.1-.6.1-.9-.2-1-.6-1.6-1.1-1.9z\" fill=\"#009cde\"/><path d=\"M5.8 5.4c.1-.4.3-.6.7-.6h4.4c.5 0 1 .1 1.4.2.4.1.8.4 1 .7.1-.3.1-.6.1-.9C13.8 3.8 12.3 3 10.3 3H5.7c-.4 0-.7.3-.8.6L3.1 14.5c0 .3.2.5.5.5h2.5l1.7-9.6z\" fill=\"#012169\"/></svg></div><div><div class=\"pp-name\">PayPal</div><div class=\"pp-sub\">435M+ utilisateurs</div></div></div>\n        <div class=\"pp-desc\">La m&eacute;thode la plus connue. Compte PayPal ou carte directement. Protection acheteur incluse. 200+ pays.</div>\n        <div class=\"pp-tags\"><span class=\"pp-tag\">Compte PayPal</span><span class=\"pp-tag\">Protection</span><span class=\"pp-tag\">200 pays</span></div>\n      </div>\n      <div class=\"pp-card\">\n        <div class=\"pp-head\"><div class=\"pp-logo\" style=\"background:#5F2EEA\"><svg width=\"22\" height=\"22\" viewBox=\"0 0 16 16\"><rect width=\"16\" height=\"16\" rx=\"4\" fill=\"#5F2EEA\"/><circle cx=\"7.5\" cy=\"8.5\" r=\"2.5\" fill=\"white\"/><circle cx=\"11.5\" cy=\"4.5\" r=\"1.5\" fill=\"#FF6B6B\"/></svg></div><div><div class=\"pp-name\">Swile</div><div class=\"pp-sub\">Titres restaurant digitaux</div></div></div>\n        <div class=\"pp-desc\">Vos clients paient avec leur carte Swile. Id&eacute;al pour les zones d&apos;activit&eacute; et livraisons de bureau. <strong>Sur les sites restaurants uniquement.</strong></div>\n        <div class=\"pp-tags\"><span class=\"pp-tag\">Titre restaurant</span><span class=\"pp-tag\">Carte Swile</span><span class=\"pp-tag\">Pro</span></div>\n        <div class=\"swile-note\">\n          <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg>\n          Swile est activ&eacute; sur vos sites restaurants. Non disponible pour l&apos;achat d&apos;une prestation VisioFlow.\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"pp-showcase\">\n    <div class=\"pp-showcase-label\">Paiements s\u00e9curis\u00e9s</div>\n    <div class=\"pp-card-stage\" id=\"pp-card-3d\">\n      <div class=\"pp-card-inner\"><img src=\"/velocity-card.png\" class=\"pp-amex-img\" alt=\"Carte bancaire s\u00e9curis\u00e9e\"/></div>\n    </div>\n  </div>\n    <div class=\"swile-note\" style=\"margin-top:28px;max-width:920px;margin-left:auto;margin-right:auto;padding:18px 22px\">\n      <svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#1d4ed8\" stroke-width=\"2\" style=\"flex-shrink:0;margin-top:2px\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"12\"/><line x1=\"12\" y1=\"16\" x2=\"12.01\" y2=\"16\"/></svg>\n      <div><strong>Important &mdash; Vos propres comptes :</strong> Les moyens de paiement (Stripe, Apple Pay, PayPal, Swile) sont connect&eacute;s &agrave; VOS propres comptes. Vous les configurez vous-m&ecirc;me, comme pour Uber Eats ou Deliveroo : il suffit de remplacer les liens URL dans le code de votre site. <strong>Si c'est trop compliqu&eacute;, on vous aide par appel t&eacute;l&eacute;phonique</strong> gratuitement.</div>\n    </div>\n<div class=\"sec-dark\">\n    <div class=\"sec-dark-ov\"></div>\n    <div class=\"sec-inner\">\n      <div class=\"st\" style=\"color:rgba(255,255,255,.45)\">S&eacute;curit&eacute;</div>\n      <div class=\"stl\" style=\"color:#fff\">Vos transactions<br/>100% s&eacute;curis&eacute;es.</div>\n      <div class=\"sec-grid\">\n        <div class=\"sec-cell\"><div class=\"sec-ico\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"rgba(255,255,255,.7)\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"11\" rx=\"2\"/><path d=\"M7 11V7a5 5 0 0110 0v4\"/></svg></div><h4>SSL 256-bit</h4><p>Donn&eacute;es chiffr&eacute;es de bout en bout entre vos clients et les serveurs.</p></div>\n        <div class=\"sec-cell\"><div class=\"sec-ico\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"rgba(255,255,255,.7)\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"/></svg></div><h4>PCI-DSS Niveau 1</h4><p>Stripe est certifi&eacute; PCI-DSS niveau 1, la plus haute certification bancaire.</p></div>\n        <div class=\"sec-cell\"><div class=\"sec-ico\"><svg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"rgba(255,255,255,.7)\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"13 2 3 14 12 14 11 22 21 10 12 10 13 2\"/></svg></div><h4>3D Secure 2.0</h4><p>Authentification forte automatique pour chaque transaction (DSP2).</p></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"pay-cta\">\n    <div class=\"st\">Prochaine &eacute;tape</div>\n    <h2>Pr&ecirc;t &agrave; encaisser<br/>vos premi&egrave;res commandes&nbsp;?</h2>\n    <p>Configurez votre site et acceptez tous les paiements en max 5 jours.</p>\n    <div style=\"display:flex;gap:14px;justify-content:center;flex-wrap:wrap\">\n      <button class=\"ba\" onclick=\"goHomePack('essentiel')\">Configurer mon site &rarr;</button>\n    </div>\n  </div>\n  <div class=\"pay-page-foot\"><p>&copy; 2026 VisioFlow &mdash; Tous droits r&eacute;serv&eacute;s.</p></div>\n</div>\n\n<!-- PAGE 6 ADMIN VISIOFLOW (pour toi Yanis) -->\n<div class=\"page\" id=\"page-admin\">\n  <div class=\"vf-admin\">\n    <div class=\"vf-topbar\">\n      <h1>Visio<span>Flow</span> Admin</h1>\n      <div class=\"vf-topbar-right\">\n        <button class=\"vf-btn-sm vf-btn-ghost\" onclick=\"goHomePack('essentiel')\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:4px\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/></svg>Voir le formulaire</button>\n        <button class=\"vf-btn-sm vf-btn-blue\" onclick=\"showPage('builder')\"><svg width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:4px\"><path d=\"M12 20h9\"/><path d=\"M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z\"/></svg>Builder</button>\n      </div>\n    </div>\n    <div class=\"vf-stat-row\">\n      <div class=\"vf-scard\">\n        <div class=\"vf-scard-label\">Revenus totaux</div>\n        <div class=\"vf-scard-value\" id=\"vfa-revenue\">4 610&euro;</div>\n        <div class=\"vf-scard-trend up\">&uarr; +34% ce mois</div>\n      </div>\n      <div class=\"vf-scard\">\n        <div class=\"vf-scard-label\">Commandes re&ccedil;ues</div>\n        <div class=\"vf-scard-value\" id=\"vfa-orders\">7</div>\n        <div class=\"vf-scard-trend up\">&uarr; 3 cette semaine</div>\n      </div>\n      <div class=\"vf-scard\">\n        <div class=\"vf-scard-label\">Sites en ligne</div>\n        <div class=\"vf-scard-value\" id=\"vfa-live\">4</div>\n        <div class=\"vf-scard-trend up\">2 en construction</div>\n      </div>\n      <div class=\"vf-scard\">\n        <div class=\"vf-scard-label\">Formulaires re&ccedil;us</div>\n        <div class=\"vf-scard-value\" id=\"vfa-forms\">5</div>\n        <div class=\"vf-scard-trend up\">&uarr; 2 &agrave; traiter</div>\n      </div>\n    </div>\n\n    <div class=\"vf-tabs\">\n      <button class=\"vf-tab a\" onclick=\"vfaTab(this,'clients')\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:5px\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>Clients</button>\n      <button class=\"vf-tab\" onclick=\"vfaTab(this,'commandes')\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:5px\"><circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/></svg>Commandes</button>\n      <button class=\"vf-tab\" onclick=\"vfaTab(this,'formulaires')\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:5px\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>Formulaires</button>\n      <button class=\"vf-tab\" onclick=\"vfaTab(this,'revenus')\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:5px\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>Revenus</button>\n      <button class=\"vf-tab\" onclick=\"vfaTab(this,'parametres')\"><svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:5px\"><circle cx=\"12\" cy=\"12\" r=\"3\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z\"/></svg>Param&egrave;tres</button>\n    </div>\n\n    <!-- Panel Clients -->\n    <div class=\"vf-panel\" id=\"vfa-p-clients\">\n      <div class=\"vf-panel-head\">\n        <div class=\"vf-panel-title\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:6px\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>Tous les clients</div>\n        <button class=\"vf-btn-sm vf-btn-blue\" onclick=\"vfaAddClient()\">+ Ajouter un client</button>\n      </div>\n      <div class=\"vf-panel-body\" style=\"padding:0;overflow-x:auto\">\n        <table class=\"vf-table\">\n          <thead><tr>\n            <th>Client</th><th>Pack</th><th>Cuisine</th><th>Statut</th><th>Date</th><th>Actions</th>\n          </tr></thead>\n          <tbody id=\"vfa-clients-body\"></tbody>\n        </table>\n      </div>\n    </div>\n\n    <!-- Panel Commandes -->\n    <div class=\"vf-panel\" id=\"vfa-p-commandes\" style=\"display:none\">\n      <div class=\"vf-panel-head\">\n        <div class=\"vf-panel-title\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:6px\"><circle cx=\"9\" cy=\"21\" r=\"1\"/><circle cx=\"20\" cy=\"21\" r=\"1\"/><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"/></svg>Historique des commandes</div>\n        <div style=\"display:flex;gap:8px\">\n          <button class=\"vf-btn-sm vf-btn-ghost\">Exporter CSV</button>\n        </div>\n      </div>\n      <div class=\"vf-panel-body\" style=\"padding:0;overflow-x:auto\">\n        <table class=\"vf-table\">\n          <thead><tr>\n            <th>ID</th><th>Client</th><th>Pack</th><th>Montant</th><th>Paiement</th><th>Date</th>\n          </tr></thead>\n          <tbody id=\"vfa-orders-body\"></tbody>\n        </table>\n      </div>\n    </div>\n\n    <!-- Panel Formulaires -->\n    <div class=\"vf-panel\" id=\"vfa-p-formulaires\" style=\"display:none\">\n      <div class=\"vf-panel-head\">\n        <div class=\"vf-panel-title\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:6px\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"/><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"/></svg>Formulaires post-achat re&ccedil;us</div>\n      </div>\n      <div class=\"vf-panel-body\" style=\"padding:0;overflow-x:auto\">\n        <table class=\"vf-table\">\n          <thead><tr>\n            <th>Client</th><th>Pack</th><th>Restaurant</th><th>Villes</th><th>Re&ccedil;u le</th><th>Actions</th>\n          </tr></thead>\n          <tbody id=\"vfa-forms-body\"></tbody>\n        </table>\n      </div>\n    </div>\n\n    <!-- Panel Revenus -->\n    <div class=\"vf-panel\" id=\"vfa-p-revenus\" style=\"display:none\">\n      <div class=\"vf-panel-head\">\n        <div class=\"vf-panel-title\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" style=\"vertical-align:-2px;margin-right:6px\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"/><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"/></svg>R&eacute;capitulatif des revenus</div>\n      </div>\n      <div class=\"vf-panel-body\">\n        <div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:20px\">\n          <div style=\"background:rgba(255,255,255,.04);border:.5px solid rgba(255,255,255,.06);border-radius:12px;padding:16px;text-align:center\">\n            <div style=\"font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px\">Essentiel (150&euro;)</div>\n            <div style=\"font-family:'Fraunces';font-size:24px;font-weight:800;color:#9ca3af\" id=\"vfa-rev-ess\">600&euro;</div>\n            <div style=\"font-size:11px;color:rgba(255,255,255,.3);margin-top:2px\">4 ventes</div>\n          </div>\n          <div style=\"background:rgba(255,255,255,.04);border:.5px solid rgba(255,255,255,.06);border-radius:12px;padding:16px;text-align:center\">\n            <div style=\"font-size:10px;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px\">Premium (490&euro;)</div>\n            <div style=\"font-family:'Fraunces';font-size:24px;font-weight:800;color:#60a5fa\" id=\"vfa-rev-prem\">1 960&euro;</div>\n            <div style=\"font-size:11px;color:rgba(255,255,255,.3);margin-top:2px\">4 ventes</div>\n          </div>\n        </div>\n        <div style=\"font-size:12px;color:rgba(255,255,255,.3);text-align:center\">Les donn&eacute;es ci-dessus sont un exemple &mdash; connectez votre Stripe Dashboard pour les donn&eacute;es r&eacute;elles.</div>\n      </div>\n    </div>\n    <div class=\"vf-panel\" id=\"vfa-p-parametres\" style=\"display:none\">\n      <div class=\"vf-panel-head\">\n        <div class=\"vf-panel-title\">Param&egrave;tres</div>\n      </div>\n      <div style=\"padding:20px\">\n        <div style=\"background:rgba(255,255,255,.04);border:.5px solid rgba(255,255,255,.1);border-radius:16px;padding:24px;max-width:480px\">\n          <div style=\"font-family:Outfit;font-size:16px;font-weight:700;color:#fff;margin-bottom:6px\">Num&eacute;ros d&apos;assistance</div>\n          <div style=\"font-size:12px;color:rgba(255,255,255,.4);margin-bottom:20px\">Affich&eacute;s dans le formulaire client.</div>\n          <div style=\"margin-bottom:14px\">\n            <label style=\"display:block;font-size:11px;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px\">Num&eacute;ro 1 (le v&ocirc;tre)</label>\n            <input id=\"admin-assist-p1\" type=\"tel\" placeholder=\"06 12 34 56 78\" style=\"width:100%;padding:11px 14px;background:rgba(255,255,255,.06);border:.5px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box\"/>\n          </div>\n          <div style=\"margin-bottom:20px\">\n            <label style=\"display:block;font-size:11px;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px\">Num&eacute;ro 2 (assistance)</label>\n            <input id=\"admin-assist-p2\" type=\"tel\" placeholder=\"06 12 34 56 78\" style=\"width:100%;padding:11px 14px;background:rgba(255,255,255,.06);border:.5px solid rgba(255,255,255,.12);border-radius:10px;color:#fff;font-size:14px;font-family:inherit;outline:none;box-sizing:border-box\"/>\n          </div>\n          <button onclick=\"window.saveAssistancePhones()\" style=\"padding:12px 24px;background:#0071E3;border:none;border-radius:10px;color:#fff;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;width:100%;margin-top:4px\">Sauvegarder</button>\n          <div id=\"admin-assist-msg\" style=\"margin-top:10px;font-size:12px;text-align:center;min-height:18px\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"vf-admin-foot\">&copy; 2026 VisioFlow Admin &mdash; Espace r&eacute;serv&eacute;</div>\n  </div>\n</div>\n\n<!-- PAGE 7 FORMULAIRE POST-ACHAT -->\n<!-- ====== SYSTÈME COMPTES CLIENTS VISIOFLOW ====== -->\n<!-- Coller ce bloc JUSTE AVANT le bloc auth admin (ou avant </body>) -->\n\n<!-- ====== FIREBASE ADMIN DASHBOARD VISIOFLOW ====== -->\n<!-- ⚠️ REMPLACE le bloc page-admin existant ET colle ceci AVANT </body> -->\n\n<!-- Firebase SDK -->\n\n\n\n\n\n<!-- ====== SYSTÈME D'AUTHENTIFICATION ADMIN VISIOFLOW ====== -->\n<!-- Coller ce bloc JUSTE AVANT </body> dans votre fichier HTML -->\n\n\n<!-- ====== SYSTÈME AUTH FIREBASE + ESPACE CLIENT + TUNNEL PRÉ-PAIEMENT ====== -->"

function parseFirestoreValue(v) {
  if (!v) return null
  if ('stringValue' in v) return v.stringValue
  if ('integerValue' in v) return parseInt(v.integerValue)
  if ('booleanValue' in v) return v.booleanValue
  if ('nullValue' in v) return null
  if ('mapValue' in v) {
    const obj = {}
    for (const [k, val] of Object.entries(v.mapValue?.fields || {})) obj[k] = parseFirestoreValue(val)
    return obj
  }
  if ('arrayValue' in v) return (v.arrayValue?.values || []).map(parseFirestoreValue)
  return null
}

const OPAQUE_CSS = `
<style>
/* OMEGA · LOI I — tokens gouvernés par styles/globals.css (source de vérité unique) */
</style>
<script>
(function(){
  /* OMEGA · LOI II — opacité des panneaux selon le thème RÉEL (data-theme), pas l'OS */
  function isDark(){ try{return document.documentElement.getAttribute('data-theme')==='dark';}catch(e){return false;} }
  var panelSelectors=['.vf-pp-wrap','.vf-pp-cbar','.pp-city-item','.pp-menu-item','.pp-radio-card','.fr-section-head','.vf-pp-feat','.vf-auth-card','.ec-card','.vf-auth-tabs','.form-section','.form-wrap','.form-block','.form-card'];
  var inputSelectors=['input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=color]):not([type=file])','textarea','select','.vf-form-input','.vf-pp-inp','.vf-af-i','.cl-field input','.login-field input'];
  function applyOpaque(){
    var dark=isDark();
    var panelBg=dark?'#0b1426':'#ffffff';
    var inputBg=dark?'#0e1830':'#ffffff';
    panelSelectors.forEach(function(sel){document.querySelectorAll(sel).forEach(function(el){el.style.setProperty('background',panelBg,'important');});});
    inputSelectors.forEach(function(sel){try{document.querySelectorAll(sel).forEach(function(el){el.style.setProperty('background',inputBg,'important');});}catch(e){}});
  }
  applyOpaque();
  document.addEventListener('DOMContentLoaded',applyOpaque);
  new MutationObserver(applyOpaque).observe(document.body||document.documentElement,{childList:true,subtree:true});
  new MutationObserver(applyOpaque).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
})();
</script>`

function applyConfigToHTML(html, config) {
  // Always inject responsive device mockups regardless of config
  const _screenInner = '<div class="lp-browser"><div class="lp-bar"><span class="lp-dot r"></span><span class="lp-dot y"></span><span class="lp-dot g"></span><div class="lp-url">lepetitbistrot.fr</div></div><div class="lp-content"><div class="lp-site-nav"><span>Le Petit Bistrot</span><span>Menu &bull; Horaires &bull; Nous contacter</span></div><div class="lp-site-hero"><div class="lp-hero-text"><div class="lp-hero-title">Cuisine fran&ccedil;aise</div><div class="lp-hero-sub">Paris 11e &bull; Ouvert tous les jours</div><div class="lp-hero-cta">Voir la carte &rarr;</div></div></div><div class="lp-cards"><div class="lp-card"><div class="lp-card-img lp-img1"></div><div class="lp-card-name">Boeuf Bourguignon</div><div class="lp-card-price">18&euro;</div></div><div class="lp-card"><div class="lp-card-img lp-img2"></div><div class="lp-card-name">Entrecote grill&eacute;e</div><div class="lp-card-price">24&euro;</div></div><div class="lp-card"><div class="lp-card-img lp-img3"></div><div class="lp-card-name">Tarte Tatin</div><div class="lp-card-price">9&euro;</div></div></div></div></div>';
  const _phoneWrap = `<div class="hero-phone-wrap"><div class="hp-notif"><div class="hp-notif-ico">&#128276;</div><div><div class="hp-notif-title">Nouvelle commande !</div><div class="hp-notif-sub">Pizza &times;2 &mdash; 28&euro;</div></div><div class="hp-notif-dot"></div></div><div class="hp-photo"><img src="/hero-phone.png" alt="Aper&ccedil;u d'un site de restaurant sur mobile" width="389" height="746" loading="eager" decoding="async" /></div><div class="hp-frame"><div class="hp-notch"></div><div class="hp-screen"><div class="lp-screen">${_screenInner}</div></div></div></div>`;
  const _tabletWrap = `<div class="hero-tablet-wrap"><div class="ht-notif"><div class="ht-notif-ico">&#128276;</div><div><div class="ht-notif-title">Nouvelle commande !</div><div class="ht-notif-sub">Pizza &times;2 &mdash; 28&euro;</div></div><div class="ht-notif-dot"></div></div><div class="ht-photo"><img src="/hero-tablet.png" alt="Aperçu d'un site de restaurant sur tablette" width="1195" height="896" loading="eager" decoding="async" /></div><div class="ht-frame"><div class="ht-screen"><div class="lp-screen">${_screenInner}</div></div></div></div>`;
  let h = html.replace('<div class="hero-laptop-wrap">', _phoneWrap + _tabletWrap + '<div class="hero-laptop-wrap">');

  if (!config) return h + OPAQUE_CSS

  const packs = config.packs || {}
  ;['essentiel', 'premium'].forEach(pack => {
    const data = packs[pack]
    if (data?.price) {
      h = h.replace(new RegExp(`(id="price-${pack}">)[^<]+`),   `$1${data.price} `)
      h = h.replace(new RegExp(`(id="price-b-${pack}">)[^<]+`), `$1${data.price} `)
      if (pack === 'premium') {
        h = h.replace(/(id="form-pack-price"[^>]*>)[^<]+/, `$1${data.price}`)
        h = h.replace(/(id="mPrice"[^>]*>)[^<]+/, `$1${data.price}`)
      }
      if (pack === 'essentiel') {
        h = h.replace(/(class="prr" id="mPrice"[^>]*>)[^<]+/, `$1${data.price}`)
      }
    }
    if (data?.desc) {
      h = h.replace(new RegExp(`(id="desc-${pack}">)[^<]+`),   `$1${data.desc}`)
      h = h.replace(new RegExp(`(id="desc-b-${pack}">)[^<]+`), `$1${data.desc}`)
    }
  })
  const exampleUrls = config.exampleUrls || {}
  ;['essentiel', 'premium'].forEach(pack => {
    let url = (exampleUrls[pack] || '').trim()
    if (url && !/^https?:\/\//i.test(url)) url = 'https://' + url
    if (url) {
      h = h.replace(new RegExp(`(id="demo-${pack}" href=")[^"]*"`),   `$1${url}"`)
      h = h.replace(new RegExp(`(id="demo-b-${pack}" href=")[^"]*"`), `$1${url}"`)
    }
  })

  h += OPAQUE_CSS
  return h
}

function normalizeUrl(url) {
  if (!url) return '';
  url = url.trim();
  if (url && !/^https?:\/\//i.test(url)) url = 'https://' + url;
  return url;
}

function applyDemoUrls(exampleUrls) {
  if (!exampleUrls) return;
  ['essentiel','premium'].forEach(function(pack) {
    var url = normalizeUrl(exampleUrls[pack]);
    if (!url) return;
    ['demo-'+pack, 'demo-b-'+pack].forEach(function(id) {
      var el = document.getElementById(id);
      if (!el) return;
      el.href = url;
      el.classList.remove('empty');
    });
  });
}

export default function Home({ siteConfig }) {
  const [heroComplete] = useState(true)
  let pageHTML = applyConfigToHTML(PAGE_HTML, siteConfig)

  // SVG wave shapes (different curves for variety)
  const waveShapes = [
    'M0,40 C240,90 480,100 720,60 C960,20 1200,80 1440,45 L1440,100 L0,100 Z',
    'M0,45 C360,100 600,10 900,60 C1100,90 1300,30 1440,55 L1440,100 L0,100 Z',
    'M0,55 C200,10 480,90 720,50 C960,10 1200,80 1440,40 L1440,100 L0,100 Z'
  ]
  // Wave config: [background-top-color, fill-color] for light mode
  const waveColors = {
    1: { bgTop: '#ffffff', fill: '#0b1628' },     // Hero → Section 1
    2: { bgTop: '#0b1628', fill: '#f8fafc' },     // Section 3 → Tarifs
    3: { bgTop: '#f8fafc', fill: '#ffffff' },     // Tarifs → Form
  }
  function makeWave(idx) {
    const c = waveColors[idx]
    return '<div class="wave-divider wave-' + idx + '" style="background:' + c.bgTop + '">'
      + '<svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:100%">'
      + '<path d="' + waveShapes[(idx - 1) % 3] + '" fill="' + c.fill + '"/>'
      + '</svg></div>'
  }

  // Wave 1: before first alt-sec (Hero → Section 1)
  pageHTML = pageHTML.replace(
    /(<div class="alt-sec alt-dark">)/,
    makeWave(1) + '\n  $1'
  )
  // Wave 2: between second alt-sec closing and tarifs
  pageHTML = pageHTML.replace(
    /(<\/div>\s*)(<!-- TARIFS -->)/,
    '$1' + makeWave(2) + '\n$2'
  )
  // Wave 3: between tarifs closing and form
  pageHTML = pageHTML.replace(
    /(<\/div>\s*)(<!-- FORM -->)/,
    '$1' + makeWave(3) + '\n$2'
  )

  useEffect(() => {
    if (siteConfig?.exampleUrls) applyDemoUrls(siteConfig.exampleUrls);
  }, [heroComplete])

  // Add responsive phone and tablet mockups
  useEffect(() => {
    function addResponsiveDevices(){
      const laptopScreen = document.querySelector('.lp-screen');
      if(!laptopScreen) return;

      // Already inserted — don't duplicate
      if(document.querySelector('.hero-phone-wrap') || document.querySelector('.hero-tablet-wrap')) return;

      const laptopContent = '<div class="lp-screen">' + laptopScreen.innerHTML + '</div>';

      // Create phone version
      const phoneHTML = '<div class="hero-phone-wrap"><div class="hp-notif"><div class="hp-notif-ico">&#128276;</div><div><div class="hp-notif-title">Nouvelle commande !</div><div class="hp-notif-sub">Pizza &times;2 &mdash; 28&euro;</div></div><div class="hp-notif-dot"></div></div><div class="hp-photo"><img src="/hero-phone.png" alt="Aper&ccedil;u d\'un site de restaurant sur mobile" width="389" height="746" loading="eager" decoding="async" /></div><div class="hp-frame"><div class="hp-notch"></div><div class="hp-screen">' + laptopContent + '</div></div></div>';

      // Create tablet version
      const tabletHTML = '<div class="hero-tablet-wrap"><div class="ht-notif"><div class="ht-notif-ico">&#128276;</div><div><div class="ht-notif-title">Nouvelle commande !</div><div class="ht-notif-sub">Pizza &times;2 &mdash; 28&euro;</div></div><div class="ht-notif-dot"></div></div><div class="ht-photo"><img src="/hero-tablet.png" alt="Aperçu d\'un site de restaurant sur tablette" width="1195" height="896" loading="eager" decoding="async" /></div><div class="ht-frame"><div class="ht-screen">' + laptopContent + '</div></div></div>';

      // Insert before the laptop wrap
      const laptopWrap = document.querySelector('.hero-laptop-wrap');
      if(laptopWrap){
        laptopWrap.insertAdjacentHTML('beforebegin', phoneHTML);
        laptopWrap.insertAdjacentHTML('beforebegin', tabletHTML);
      }
    }

    // Wait for DOM to be ready
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', addResponsiveDevices);
    } else {
      addResponsiveDevices();
    }

    // Retry after delay in case elements aren't ready
    setTimeout(addResponsiveDevices, 1000);
    setTimeout(addResponsiveDevices, 2000);
  }, [pageHTML])

  useEffect(() => {
    // Fix SEO: Ensure only one descriptive H1 on the page
    const allH1s = document.querySelectorAll('h1');
    if (allH1s.length > 0) {
      allH1s.forEach(h1 => {
        h1.style.display = 'none';
      });
      // Find the most appropriate H1 and make it visible with descriptive content
      const heroTitleEl = document.getElementById('hero-title');
      if (heroTitleEl) {
        heroTitleEl.style.display = 'block';
      }
    }
  }, [heroComplete])

  useEffect(() => {

/* Declares ici pour être accessibles a toutes les fonctions (formSubmit, doPay, etc.) */
let db;
let firebaseReady = false;

/* ===== LIENS DE PAIEMENT (remplace par tes vrais liens) ===== */
const PAYMENT_LINKS={
  essentiel:{stripe:"https://buy.stripe.com/8x228kbpzaHz8CHajjdUY07",apple:"https://buy.stripe.com/TON_LIEN_ESSENTIEL",paypal:"https://paypal.me/AdelinaLallinaj/150EUR"},
  premium:  {stripe:"https://buy.stripe.com/7sYbIUfFPdTL1afdvvdUY06",  apple:"https://buy.stripe.com/TON_LIEN_PREMIUM",  paypal:"https://paypal.me/AdelinaLallinaj/490EUR"},
};

/* ===== EXEMPLES DE SITES ===== */
const EXAMPLE_URLS={
  essentiel: siteConfig?.exampleUrls?.essentiel || '',
  premium:   siteConfig?.exampleUrls?.premium   || '',
};

/* Fetch direct des URLs d'exemple depuis Firestore REST (independant de Firebase SDK) */
(function applyExampleUrlsDirect() {
  fetch('https://firestore.googleapis.com/v1/projects/visioflow-cb6eb-9d051/databases/(default)/documents/site_config/main?key=AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY')
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(doc){
      if (!doc || !doc.fields || !doc.fields.exampleUrls || !doc.fields.exampleUrls.mapValue) return;
      var fields = doc.fields.exampleUrls.mapValue.fields || {};
      ['essentiel','premium'].forEach(function(pack){
        var rawUrl = fields[pack] && fields[pack].stringValue;
        var url = rawUrl ? (rawUrl.trim().match(/^https?:\/\//i) ? rawUrl.trim() : 'https://' + rawUrl.trim()) : '';
        if (!url) return;
        EXAMPLE_URLS[pack] = url;
        ['demo-'+pack, 'demo-b-'+pack].forEach(function(id){
          var el = document.getElementById(id);
          if (!el) return;
          el.href = url;
          el.classList.remove('empty');
        });
      });
    })
    .catch(function(){});
})();

/* ===== ROUTEUR DE PAGES ===== */
const LIGHT_PAGES=['paiements'];
function showPage(id,preselect){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nl').forEach(b=>b.classList.remove('on'));
  const nb=document.getElementById('nl-'+id);
  if(nb) nb.classList.add('on');
  document.getElementById('mainNav').classList.toggle('light-nav',LIGHT_PAGES.includes(id));
  window.scrollTo({top:0,behavior:'smooth'});
  if(preselect&&id==='builder') selectPack(preselect);
  if(id==='admin') { try { if(typeof window.vfaInit==='function') window.vfaInit(); } catch(e) {} }
  if(id==='form') { try { if(typeof window.formInit==='function') window.formInit(); } catch(e) {} }
}

/* ===== MODAL 1 — ACHAT RESTOFLOW (sans Swile) ===== */
const PACKS={
  essentiel:{name:'Essentiel',price:(siteConfig?.packs?.essentiel?.price)||'150\u20ac',sub:(siteConfig?.packs?.essentiel?.desc)||'Site vitrine pour votre restaurant'},
  premium:  {name:'Premium',  price:(siteConfig?.packs?.premium?.price)  ||'490\u20ac',sub:(siteConfig?.packs?.premium?.desc)  ||'Commandes en ligne & dashboard admin'},
};
const METHODS={
  stripe: {label:'Payer par carte \u2192',   cls:'b-stripe',note:'Paiement s\u00e9curis\u00e9 \u00b7 Stripe \u00b7 SSL 256-bit \u00b7 PCI-DSS'},
  apple:  {label:' Pay \u2192',            cls:'b-apple', note:'Paiement natif Apple \u00b7 Aucune saisie de carte'},
  paypal: {label:'Continuer sur PayPal \u2192',cls:'b-paypal',note:'PayPal \u00b7 Protection acheteur incluse'},
};
let curPack='essentiel',curMethod='stripe';

function openBuyModal(packId){
  curPack=packId; curMethod='stripe';
  const p=PACKS[packId];
  const c=CUISINES.find(x=>x.id===bState.cuisine)||CUISINES[0];
  const lbl=c.custom?(bState.autreName||'Mon Restaurant'):c.label;
  const styleLabel=bState.layout==='grid'?'Grille':'Liste';
  document.getElementById('mTitle').textContent='Pack '+p.name;
  document.getElementById('mSub').textContent=p.sub;
  document.getElementById('mPack').textContent=p.name;
  document.getElementById('mCuisine').textContent=lbl;
  document.getElementById('mStyle').textContent=styleLabel+' \u00b7 '+bState.color;
  document.getElementById('mPrice').textContent=p.price;
  document.getElementById('mEmail').value='';
  document.querySelectorAll('.pm-btn').forEach(b=>b.classList.toggle('on',b.dataset.m==='stripe'));
  updMethodUI();
  document.getElementById('buyOverlay').classList.add('open');
  document.body.style.overflow='hidden';
  setTimeout(()=>document.getElementById('mEmail').focus(),100);
}
function openBuyFromBuilder(){openBuyModal(bState.curPack);}
function openBuyFromPack(packId){
  bState.curPack=packId;
  if(typeof window.openBuyFromBuilder==='function') window.openBuyFromBuilder();
  else openBuyFromBuilder();
}
function closeBuy(){document.getElementById('buyOverlay').classList.remove('open');document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeBuy();closeResto();}});
function selMethod(m){
  curMethod=m;
  document.querySelectorAll('.pm-btn').forEach(b=>b.classList.toggle('on',b.dataset.m===m));
  updMethodUI();
}
function updMethodUI(){
  const mc=METHODS[curMethod];
  document.getElementById('payGoBtn').className='pay-go '+mc.cls;
  document.getElementById('paySecNote').innerHTML='<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> '+mc.note;
  valEmail();
}
function valEmail(){
  const v=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('mEmail').value.trim());
  document.getElementById('payGoTxt').textContent=v?METHODS[curMethod].label:'Entrez votre email';
  document.getElementById('payGoBtn').disabled=!v;
}
function doPay(){
  const email=document.getElementById('mEmail').value.trim();
  document.getElementById('payGoBtn').disabled=true;
  document.getElementById('payGoTxt').textContent='Redirection\u2026';
  document.getElementById('paySpin').style.display='block';
  const base=PAYMENT_LINKS[curPack][curMethod];
  const url=base+'?prefilled_email='+encodeURIComponent(email)+'&client_reference_id='+encodeURIComponent(curPack+'_'+bState.cuisine+'_'+bState.layout+'_'+bState.color.replace('#',''));
  // Save builder config to Firebase
  if(firebaseReady && db){
    try{
      db.collection('submissions').add({
        type:'builder_config',
        pack: curPack,
        email: email,
        cuisine: bState.cuisine,
        color: bState.color,
        layout: bState.layout,
        paymentMethod: curMethod,
        restaurantName: bState.autreName||'',
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        status:'new'
      });
    }catch(e){ console.warn('doPay save:', e); }
  }
  setTimeout(()=>{window.location.href=url;},400);
}

/* ===== MODAL 2 — COMMANDE RESTAURANT (avec Swile) ===== */
let restoMethod='stripe';
function openRestoOrderModal(){
  const cart=bState.cart;
  if(!cart.length) return;
  const c=CUISINES.find(x=>x.id===bState.cuisine)||CUISINES[0];
  const lbl=c.custom?(bState.autreName||'Mon Restaurant'):c.label;
  const total=cart.reduce((s,i)=>s+parseFloat(i.price),0).toFixed(2);
  document.getElementById('rpTitle').textContent=lbl;
  document.getElementById('rpTotal').textContent=total+'\u20ac';
  document.getElementById('rpItems').innerHTML=cart.map(i=>'<div class="rp-item"><span class="rp-item-name">'+i.name+'</span><span class="rp-item-price">'+i.price+'\u20ac</span></div>').join('');
  restoMethod='stripe';
  document.querySelectorAll('.rp-btn').forEach(b=>b.classList.toggle('on',b.dataset.rm==='stripe'));
  const color=bState.color;
  document.getElementById('rpConfirmBtn').style.background=color;
  document.getElementById('restoOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeResto(){document.getElementById('restoOverlay').classList.remove('open');document.body.style.overflow='';}
function selRMethod(m){
  restoMethod=m;
  document.querySelectorAll('.rp-btn').forEach(b=>b.classList.toggle('on',b.dataset.rm===m));
}
function confirmRestoOrder(){
  const btn=document.getElementById('rpConfirmBtn');
  btn.textContent='Redirection\u2026';
  btn.disabled=true;
  setTimeout(()=>{closeResto();btn.textContent='Confirmer & Payer';btn.disabled=false;bState.cart=[];renderSim();},800);
}

/* ===== BUILDER DATA ===== */
const CUISINES=[
  {id:'burger',  label:'Burger & Grill',          short:'Burger',      emoji:'\uD83C\uDF54',hero:'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=1200&q=90',accent:'#E85D04'},
  {id:'sushi',   label:'Japonais & Sushi',         short:'Japonais',    emoji:'\uD83C\uDF63',hero:'https://images.unsplash.com/photo-1617196034183-421b4040d20d?w=1200&q=90',accent:'#D4233C'},
  {id:'pizza',   label:'Pizzeria',                 short:'Pizzeria',    emoji:'\uD83C\uDF55',hero:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=90',accent:'#F4A261'},
  {id:'thai',    label:'Thai & Asiatique',         short:'Thai',        emoji:'\uD83C\uDF5C',hero:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=1200&q=90',accent:'#2EC4B6'},
  {id:'bistrot', label:'Bistrot Fran\u00e7ais',   short:'Bistrot',     emoji:'\uD83E\uDD56',hero:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90',accent:'#8338EC'},
  {id:'cafe',    label:'Coffee & Brunch',          short:'Brunch',      emoji:'\u2615',      hero:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=90',accent:'#A68A64'},
  {id:'indien',  label:'Indien & Curry',           short:'Indien',      emoji:'\uD83C\uDF5B',hero:'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=90',accent:'#F59E0B'},
  {id:'mexicain',label:'Mexicain & Tacos',         short:'Mexicain',    emoji:'\uD83C\uDF2E',hero:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&q=90',accent:'#EF4444'},
  {id:'libanais',label:'Libanais & M\u00e9diterran\u00e9en',short:'Libanais',emoji:'\uD83E\uDDC6',hero:'https://images.unsplash.com/photo-1561043433-aaf687c4cf04?w=1200&q=90',accent:'#10B981'},
  {id:'kebab',   label:'Kebab & Grill',            short:'Kebab',       emoji:'\uD83E\uDD59',hero:'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=1200&q=90',accent:'#B45309'},
  {id:'chinois', label:'Chinois & Wok',            short:'Chinois',     emoji:'\uD83E\uDD62',hero:'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&q=90',accent:'#DC2626'},
  {id:'crepe',   label:'Cr\u00eaperie',            short:'Cr\u00eaperie',emoji:'\uD83E\uDD5E',hero:'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=1200&q=90',accent:'#D97706'},
  {id:'veggie',  label:'V\u00e9g\u00e9tarien & Vegan',short:'V\u00e9g\u00e9tarien',emoji:'\uD83E\uDD57',hero:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=90',accent:'#16A34A'},
  {id:'brasserie',label:'Brasserie & Fruits de mer',short:'Brasserie',  emoji:'\uD83E\uDD9E',hero:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=90',accent:'#1D4ED8'},
  {id:'autre',   label:'Votre Restaurant',         short:'Autre',       emoji:'\u270F\uFE0F',hero:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=90',accent:'#6B7280',custom:true},
];

/* Items par cuisine, organis\u00e9s par cat\u00e9gorie */
const MI={
  burger:[
    {name:'Onion Rings',price:'5.50',img:'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=90',cat:'entrees',desc:'Rondelles d\'oignon dor\u00e9es, sauce ranch maison'},
    {name:'Wings BBQ x6',price:'7.90',img:'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=90',cat:'entrees',desc:'Ailes de poulet sauce barbecue maison, c\u00e9leri'},
    {name:'Smash Burger Classic',price:'9.90',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=90',cat:'plats',desc:'Double steak, cheddar fondu, cornichons, sauce sp\u00e9ciale'},
    {name:'Bacon Cheeseburger',price:'12.90',img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=90',cat:'plats',desc:'Bacon croustillant, double cheddar, laitue iceberg'},
    {name:'Chicken Avocado',price:'11.90',img:'https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=90',cat:'plats',desc:'Blanc de poulet grill\u00e9, avocat cremeux, tomate s\u00e9ch\u00e9e'},
    {name:'Milkshake Vanille',price:'5.90',img:'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=90',cat:'desserts',desc:'Milk-shake ultra-\u00e9pais, glace vanille de Madagascar'},
    {name:'Frites Maison',price:'4.50',img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=90',cat:'boissons',desc:'Frites coup\u00e9es \u00e0 la main, sel de gu\u00e9rande'},
    {name:'Soda 33cl',price:'3.50',img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600&q=90',cat:'boissons',desc:'Cola, Citron, Orange au choix'},
  ],
  sushi:[
    {name:'Edamame',price:'5.00',img:'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=600&q=90',cat:'entrees',desc:'F\u00e8ves de soja \u00e0 la fleur de sel'},
    {name:'Gyoza x5',price:'7.90',img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=90',cat:'entrees',desc:'Raviolis japonais grill\u00e9s, sauce ponzu maison'},
    {name:'Sashimi Saumon x8',price:'14.90',img:'https://images.unsplash.com/photo-1617196034096-12b6a4d02ced?w=600&q=90',cat:'plats',desc:'Saumon Atlantique ultra-frais, wasabi et gingembre'},
    {name:'California Roll x6',price:'9.90',img:'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&q=90',cat:'plats',desc:'Avocat, concombre, crabe, tobiko dor\u00e9'},
    {name:'Dragon Roll',price:'13.90',img:'https://images.unsplash.com/photo-1617196034183-421b4040d20d?w=600&q=90',cat:'plats',desc:'Crevette tempura, avocat glac\u00e9, sauce anguille'},
    {name:'Mochi Glac\u00e9 x3',price:'6.50',img:'https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=600&q=90',cat:'desserts',desc:'Mochi riz gluant, c\u0153ur glac\u00e9 fraise des bois'},
    {name:'Miso Soup',price:'3.50',img:'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=90',cat:'boissons',desc:'Bouillon miso traditionnel, tofu soyeux, wakam\u00e9'},
    {name:'Th\u00e9 Gyokuro',price:'4.50',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=90',cat:'boissons',desc:'Th\u00e9 vert japonais haut de gamme, 1re r\u00e9colte'},
  ],
  pizza:[
    {name:'Bruschetta',price:'7.50',img:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=90',cat:'entrees',desc:'Tomates fra\u00eeches, basilic, ail confit, huile d\'olive'},
    {name:'Burrata Caprese',price:'9.90',img:'https://images.unsplash.com/photo-1615374999206-2d78e27a1e11?w=600&q=90',cat:'entrees',desc:'Burrata cr\u00e9meuse, tomates cerises, pesto au basilic'},
    {name:'Margherita',price:'10.90',img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=90',cat:'plats',desc:'Sauce tomate San Marzano, mozzarella di buffala, basilic'},
    {name:'Quattro Formaggi',price:'13.90',img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=90',cat:'plats',desc:'Mozzarella, gorgonzola, parmesan, provolone affin\u00e9'},
    {name:'Diavola',price:'12.90',img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=90',cat:'plats',desc:'Salami picante, piments, mozzarella fior di latte'},
    {name:'Tiramisu',price:'6.90',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=90',cat:'desserts',desc:'Recette traditionnelle, mascarpone, caf\u00e9 espresso'},
    {name:'Pannacotta',price:'5.90',img:'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&q=90',cat:'desserts',desc:'Panna cotta vanille, coulis fruits rouges maison'},
    {name:'Limonade italienne',price:'4.50',img:'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=600&q=90',cat:'boissons',desc:'Citron sicilien press\u00e9, menthe fra\u00eeche, eau gazeuse'},
  ],
  thai:[
    {name:'Spring Rolls x4',price:'6.90',img:'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=90',cat:'entrees',desc:'Rouleaux de printemps fra\u00eeches, sauce nuoc-cham'},
    {name:'Tom Yum Soup',price:'8.90',img:'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=90',cat:'entrees',desc:'Bouillon \u00e9pic\u00e9, champignons, citronnelle, crevettes tigrees'},
    {name:'Pad Tha\u00ef Crevettes',price:'13.90',img:'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=90',cat:'plats',desc:'Nouilles riz saut\u00e9es, oeufs, cacahu\u00e8tes torr\u00e9fi\u00e9es, citron vert'},
    {name:'Curry Vert Poulet',price:'12.90',img:'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=90',cat:'plats',desc:'Lait de coco, curry vert tha\u00ef, aubergines, kaffir'},
    {name:'Bao Buns x3',price:'8.50',img:'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=600&q=90',cat:'plats',desc:'Brioche vapeur, porc brais\u00e9 12h, concombre, sriracha'},
    {name:'Sticky Rice Mangue',price:'6.50',img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=90',cat:'desserts',desc:'Riz gluant, mangue Ataulfo, lait de coco chaud'},
    {name:'Th\u00e9 Tha\u00ef',price:'4.50',img:'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=90',cat:'boissons',desc:'Th\u00e9 \u00e9pic\u00e9, lait concentr\u00e9 sucr\u00e9, servi glac\u00e9'},
  ],
  bistrot:[
    {name:'Soupe \u00e0 l\'Oignon',price:'8.50',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=90',cat:'entrees',desc:'Gratinee au comte, cro\u00fbtons maison dores'},
    {name:'Oeuf Parfait',price:'9.90',img:'https://images.unsplash.com/photo-1608039829572-9b1234ef0d8f?w=600&q=90',cat:'entrees',desc:'63\u00b0C, cr\u00e8me de truffe noire, mouillettes grillees'},
    {name:'Steak Frites',price:'18.90',img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=90',cat:'plats',desc:'Entrecote matur\u00e9e 28 jours, frites maison, b\u00e9arnaise'},
    {name:'Confit de Canard',price:'17.90',img:'https://images.unsplash.com/photo-1432139509613-5c4255a1d277?w=600&q=90',cat:'plats',desc:'Cuisse confite 8h, pommes sarladaises, salade mesclun'},
    {name:'Tartare de Boeuf',price:'16.90',img:'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=90',cat:'plats',desc:'Taille au couteau, c\u00e2pres, \u00e9chalote, oeuf de caille'},
    {name:'Cr\u00e8me Br\u00fbl\u00e9e',price:'7.90',img:'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&q=90',cat:'desserts',desc:'Vanille de Madagascar, sucre caram\u00e9lis\u00e9 \u00e0 la flamme'},
    {name:'Plateau Fromages',price:'12.90',img:'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=90',cat:'desserts',desc:'S\u00e9lection affin\u00e9e de 5 fromages, pain aux noix'},
    {name:'Pichet Bordeaux',price:'9.50',img:'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=90',cat:'boissons',desc:'50cl, AOC Bordeaux contr\u00f4l\u00e9e, millesime 2022'},
  ],
  cafe:[
    {name:'Granola Bowl',price:'8.90',img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=90',cat:'entrees',desc:'Granola maison toaste, fruits de saison, yaourt grec'},
    {name:'Açaï Bowl',price:'9.90',img:'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&q=90',cat:'entrees',desc:'Base açaï, banane, myrtilles, granola, miel'},
    {name:'Avocado Toast',price:'11.90',img:'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=90',cat:'plats',desc:'Pain levain, avocat, oeuf poche, graines de sesame'},
    {name:'Eggs Benedict',price:'13.90',img:'https://images.unsplash.com/photo-1608039829572-9b1234ef0d8f?w=600&q=90',cat:'plats',desc:'Muffins maison, oeuf poche parfait, hollandaise au beurre'},
    {name:'Pancakes Stack',price:'9.90',img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=90',cat:'plats',desc:'Stack x5, sirop d\u2019\u00e9rable pur, beurre noisette, myrtilles'},
    {name:'Carrot Cake',price:'6.50',img:'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=90',cat:'desserts',desc:'Glaçage cream cheese genereux, noix de p\u00e9can, caramel'},
    {name:'Flat White',price:'4.90',img:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=90',cat:'boissons',desc:'Double espresso, lait micro-texture, art latte maison'},
    {name:'Smoothie Tropical',price:'6.90',img:'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=600&q=90',cat:'boissons',desc:'Mangue, ananas, gingembre frais, lait de coco'},
  ],
  autre:[
    {name:'Entr\u00e9e Maison',price:'8.90',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=90',cat:'entrees',desc:'Sp\u00e9cialit\u00e9 maison du chef'},
    {name:'Notre Sp\u00e9cialit\u00e9',price:'12.90',img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90',cat:'plats',desc:'La recette incontournable de notre \u00e9tablissement'},
    {name:'Plat du Jour',price:'14.90',img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=90',cat:'plats',desc:'Selon arriv\u00e9age du march\u00e9'},
    {name:'Menu Enfant',price:'7.90',img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=90',cat:'plats',desc:'Plat + dessert + boisson adapt\u00e9s aux enfants'},
    {name:'Dessert du Chef',price:'6.90',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=90',cat:'desserts',desc:'Cr\u00e9ation originale qui change chaque semaine'},
    {name:'Boisson Maison',price:'4.50',img:'https://images.unsplash.com/photo-1596803244536-2ab9e4e0f0de?w=600&q=90',cat:'boissons',desc:'Infusion, limonade ou jus press\u00e9 du jour'},
  ],
};
// Fallback pour les cuisines sans items d\u00e9taill\u00e9s
['indien','mexicain','libanais','kebab','chinois','crepe','veggie','brasserie'].forEach(id=>{
  if(!MI[id]) MI[id]=[
    {name:'Entr\u00e9e sp\u00e9cialit\u00e9',price:'8.90',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=90',cat:'entrees',desc:'Sp\u00e9cialit\u00e9 maison'},
    {name:'Plat signature',price:'13.90',img:'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90',cat:'plats',desc:'La recette incontournable'},
    {name:'Second plat',price:'11.90',img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=90',cat:'plats',desc:'Un classique revisit\u00e9'},
    {name:'D\u00e9ssert maison',price:'6.50',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=90',cat:'desserts',desc:'Fait maison chaque jour'},
    {name:'Boisson du jour',price:'4.50',img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=90',cat:'boissons',desc:'Fra\u00eeche et maison'},
  ];
});

const COLORS=['#E85D04','#D4233C','#F4A261','#2EC4B6','#8B5CF6','#0071E3','#EC4899','#22C55E'];
const BPACKS={essentiel:'150',premium:'490'};
const CAT_LABELS={entrees:'Entr\u00e9es',plats:'Plats',desserts:'Desserts',boissons:'Boissons'};

let bState={cuisine:'burger',color:'#E85D04',layout:'list',device:'iphone',cart:[],autreName:'Mon Restaurant',curPack:'essentiel',cityIdx:0,previewTab:'site',simPage:'accueil'};

/* ===== VILLES & MENUS ===== */
const CITIES=['Paris Centre','Lyon Part-Dieu','Marseille Vieux-Port','Bordeaux St-Michel','Lille Grand Place'];

// Chaque ville a ses propres plats exclusifs + un plat signature local
// Ils s'ajoutent (ou remplacent) certains items du menu de base
const CITY_SPECIALS=[
  // 0 — Paris Centre
  {
    label:'Paris Centre',flag:'🗼',
    badge:'Sp\u00e9cialit\u00e9 parisienne',
    entrees:[{name:'Tartine Montmartre',price:'8.50',img:'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=90',cat:'entrees',desc:'Pain Poil\u00e2ne, burrata, tomates s\u00e9ch\u00e9es, basilic frais'}],
    plats:[{name:'Entrecote Sauce Poivre',price:'21.90',img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=90',cat:'plats',desc:'Pi\u00e8ce paris-brest, poivre vert du Cambodge, frites maison'}],
    desserts:[{name:'Op\u00e9ra Maison',price:'7.50',img:'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=90',cat:'desserts',desc:'Biscuit joconde, ganache caf\u00e9, gla\u00e7age chocolat noir'}],
    boissons:[{name:'Kir Parisien',price:'5.50',img:'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=600&q=90',cat:'boissons',desc:'Vin blanc sec, cr\u00e8me de cassis de Bourgogne'}],
  },
  // 1 — Lyon Part-Dieu
  {
    label:'Lyon Part-Dieu',flag:'🦁',
    badge:'Sp\u00e9cialit\u00e9 lyonnaise',
    entrees:[{name:'Salade Lyonnaise',price:'9.90',img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=90',cat:'entrees',desc:'F\u00e9e de lard, oeuf poche, croutons ail, vinaigrette moutarde'}],
    plats:[{name:'Quenelles Sauce Nantua',price:'17.90',img:'https://images.unsplash.com/photo-1432139509613-5c4255a1d277?w=600&q=90',cat:'plats',desc:'Quenelles brochet maison, sauce ecrevisse, gratin'}],
    desserts:[{name:'Tarte aux Pralines Roses',price:'6.90',img:'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&q=90',cat:'desserts',desc:'Pralines roses de Saint-Genix, cr\u00e8me fra\u00eeche epaisse'}],
    boissons:[{name:'Beaujolais Villages',price:'6.00',img:'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=600&q=90',cat:'boissons',desc:'AOC Beaujolais Villages, millesime 2023'}],
  },
  // 2 — Marseille Vieux-Port
  {
    label:'Marseille Vieux-Port',flag:'âš“',
    badge:'Sp\u00e9cialit\u00e9 marseillaise',
    entrees:[{name:'Soupe de Poisson',price:'10.90',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=90',cat:'entrees',desc:'Rouille maison, croutons frottes ail, gruyère râpe'}],
    plats:[{name:'Bouillabaisse du Chef',price:'24.90',img:'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=90',cat:'plats',desc:'Rascasse, vive, grondin, safran, fenouil &mdash; recette traditionnelle'}],
    desserts:[{name:'Navettes de Marseille x4',price:'5.90',img:'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&q=90',cat:'desserts',desc:'Biscuits a la fleur d\'oranger, four artisanal depuis 1781'}],
    boissons:[{name:'Pastis Maison 25cl',price:'4.50',img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=90',cat:'boissons',desc:'Pastis de Marseille, pichet d\'eau glacee'}],
  },
  // 3 — Bordeaux St-Michel
  {
    label:'Bordeaux St-Michel',flag:'🍷',
    badge:'Sp\u00e9cialit\u00e9 bordelaise',
    entrees:[{name:'Huîtres du Bassin x6',price:'14.90',img:'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=90',cat:'entrees',desc:'Hu\u00eetres d\'Arcachon n°3, mignonette au vinaigre de Cabernet'}],
    plats:[{name:'Entrecote a la Bordelaise',price:'22.90',img:'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=90',cat:'plats',desc:'Sauce bordelaise au Saint-Émilion, os a moelle, pommes sarladaises'}],
    desserts:[{name:'Caneles x4',price:'6.50',img:'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&q=90',cat:'desserts',desc:'Caneles bordelais au rhum ambre et vanille de Madagascar'}],
    boissons:[{name:'Bordeaux Grand Cru',price:'9.00',img:'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=600&q=90',cat:'boissons',desc:'S\u00e9lection vigneron local, Merlot-Cabernet 2021'}],
  },
  // 4 — Lille Grand Place
  {
    label:'Lille Grand Place',flag:'🍺',
    badge:'Sp\u00e9cialit\u00e9 ch\'ti',
    entrees:[{name:'Potjevleesch Maison',price:'9.50',img:'https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?w=600&q=90',cat:'entrees',desc:'Terrine 4 viandes en gel\u00e9e, cornichons, pain de campagne'}],
    plats:[{name:'Carbonade Flamande',price:'17.90',img:'https://images.unsplash.com/photo-1432139509613-5c4255a1d277?w=600&q=90',cat:'plats',desc:'Boeuf braise 4h a la bière Ch\'ti, pain d\'epices, frites belges'}],
    desserts:[{name:'Gaufre de Liège x2',price:'5.50',img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=90',cat:'desserts',desc:'Gaufre perle-sucre, chantilly maison, coulis fruits rouges'}],
    boissons:[{name:'Bière Ch\'ti Blonde 33cl',price:'4.50',img:'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=600&q=90',cat:'boissons',desc:'Brasserie Ch\'ti, houblon Alsace, ambree doree'}],
  },
];

function setPreviewTab(tab){
  bState.previewTab=tab;
  document.getElementById('ptab-site').className='ptab'+(tab==='site'?' a':'');
  document.getElementById('ptab-admin').className='ptab'+(tab==='admin'?' a':'');
  renderSim();
}

function setCityIdx(idx){
  bState.cityIdx=idx;
  bState.cart=[];    // vider le panier au changement de ville
  renderSim();
}
function setSimPage(page){bState.simPage=page;renderSim();}
window.setSimPage=setSimPage;
function sPick(el,g){
  const root=el.closest('.ss')||document;
  root.querySelectorAll('[data-sg="'+g+'"]').forEach(e=>{e.style.background='rgba(255,255,255,.06)';e.style.borderColor='rgba(255,255,255,.1)';e.style.color='#fff';});
  el.style.background=bState.color;el.style.borderColor=bState.color;el.style.color='#fff';
}
function sConfirm(btn){
  btn.style.background='#22c55e';btn.style.cursor='default';btn.onclick=null;
  btn.innerHTML='<div style="font-family:Outfit,sans-serif;font-size:14px;font-weight:700;color:#fff">✓ Reservation confirmee !</div><div style="font-size:9.5px;color:rgba(255,255,255,.8);margin-top:2px">SMS envoye • Nous vous attendons !</div>';
}
function sToast(msg){
  document.querySelectorAll('.sim-toast').forEach(e=>e.remove());
  const t=document.createElement('div');t.className='sim-toast';
  t.style.cssText='position:fixed;left:50%;bottom:100px;transform:translateX(-50%);z-index:9999;background:rgba(18,18,28,.97);color:#fff;padding:9px 18px;border-radius:20px;font-size:11px;font-weight:600;border:.5px solid rgba(255,255,255,.14);pointer-events:none;white-space:nowrap';
  t.textContent=msg;document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .25s';setTimeout(()=>t.remove(),250);},2200);
}
window.sPick=sPick;window.sConfirm=sConfirm;window.sToast=sToast;

/* ===== PACK SELECTOR ===== */
function selectPack(packId){
  bState.curPack=packId;
  bState.cart=[];                         // reset panier au changement de pack
  ['essentiel','premium'].forEach(id=>{
    document.getElementById('ps-'+id).classNameL='pselbtn'+(id===packId?' a':'');
  });
  renderSim();                            // preview se met a jour immediatement
}

/* ===== CUISINE ===== */
function setCuisine(id){
  const c=CUISINES.find(x=>x.id===id);
  bState.cuisine=id;
  if(!c.custom) bState.color=c.accent;
  bState.cart=[];
  const ab=document.getElementById('autre-btn');
  if(ab) ab.className='autre-btn'+(id==='autre'?' a':'');
  const aw=document.getElementById('autre-wrap');
  if(aw) aw.className='autre-wrap'+(id==='autre'?' show':'');
  renderBControls();renderSim();
}

/* ===== ADMIN VISIOFLOW ===== */
const VFA_CLIENTS=[
  {name:'Le Petit Bistrot',email:'contact@petitbistrot.fr',pack:'premium',cuisine:'Bistrot Français',status:'live',date:'28/03/2026',tel:'01 42 33 12 87'},
  {name:'Sushi Zen',email:'info@sushizen.fr',pack:'essentiel',cuisine:'Japonais & Sushi',status:'live',date:'25/03/2026',tel:'01 48 05 22 14'},
  {name:'Pizza Roma',email:'roma@pizza.fr',pack:'premium',cuisine:'Pizzeria',status:'building',date:'01/04/2026',tel:'06 12 34 56 78'},
  {name:'Burger Factory',email:'hello@burgerfactory.fr',pack:'premium',cuisine:'Burger & Grill',status:'live',date:'15/03/2026',tel:'01 55 66 77 88'},
  {name:'Thai Garden',email:'thai@garden.fr',pack:'essentiel',cuisine:'Thai & Asiatique',status:'live',date:'10/03/2026',tel:'06 98 76 54 32'},
  {name:'Le Comptoir Libanais',email:'comptoir@libanais.fr',pack:'premium',cuisine:'Libanais & Med.',status:'building',date:'02/04/2026',tel:'01 44 55 66 77'},
  {name:'Chez Marcel',email:'marcel@brasserie.fr',pack:'premium',cuisine:'Brasserie & Mer',status:'paid',date:'03/04/2026',tel:'06 11 22 33 44'},
];

const VFA_ORDERS=[
  {id:'VF-2026-007',client:'Chez Marcel',pack:'premium',amount:'490€',payment:'Stripe',date:'03/04/2026'},
  {id:'VF-2026-006',client:'Le Comptoir Libanais',pack:'premium',amount:'490€',payment:'Stripe',date:'02/04/2026'},
  {id:'VF-2026-005',client:'Pizza Roma',pack:'premium',amount:'490€',payment:'PayPal',date:'01/04/2026'},
  {id:'VF-2026-004',client:'Le Petit Bistrot',pack:'premium',amount:'490€',payment:'Stripe',date:'28/03/2026'},
  {id:'VF-2026-003',client:'Sushi Zen',pack:'essentiel',amount:'150€',payment:'Stripe',date:'25/03/2026'},
  {id:'VF-2026-002',client:'Burger Factory',pack:'premium',amount:'490€',payment:'Apple Pay',date:'15/03/2026'},
  {id:'VF-2026-001',client:'Thai Garden',pack:'essentiel',amount:'150€',payment:'Stripe',date:'10/03/2026'},
];

const VFA_FORMS=[
  {client:'Le Petit Bistrot',pack:'premium',resto:'Le Petit Bistrot',cities:'Paris',date:'28/03/2026',complete:true},
  {client:'Sushi Zen',pack:'essentiel',resto:'Sushi Zen',cities:'Paris',date:'26/03/2026',complete:true},
  {client:'Pizza Roma',pack:'premium',resto:'Pizza Roma',cities:'Lyon',date:'01/04/2026',complete:false},
  {client:'Burger Factory',pack:'premium',resto:'Burger Factory',cities:'Paris',date:'16/03/2026',complete:true},
  {client:'Thai Garden',pack:'essentiel',resto:'Thai Garden',cities:'Bordeaux',date:'11/03/2026',complete:true},
];

function vfaRenderClients(){
  const tb=document.getElementById('vfa-clients-body');
  if(!tb) return;
  tb.innerHTML=VFA_CLIENTS.map(c=>{
    const packCls=c.pack==='essentiel'?'vf-badge-ess':c.pack==='premium'?'vf-badge-prem':'vf-badge-fran';
    const statusCls=c.status==='live'?'vf-badge-live':c.status==='building'?'vf-badge-building':'vf-badge-paid';
    const statusTxt=c.status==='live'?'En ligne':c.status==='building'?'En construction':'Paye';
    return '<tr><td><div style="font-weight:600">'+c.name+'</div><div style="font-size:11px;color:rgba(255,255,255,.35)">'+c.email+'</div></td>'
      +'<td><span class="vf-badge-sm '+packCls+'">'+c.pack.charAt(0).toUpperCase()+c.pack.slice(1)+'</span></td>'
      +'<td>'+c.cuisine+'</td>'
      +'<td><span class="vf-badge-sm '+statusCls+'">'+statusTxt+'</span></td>'
      +'<td>'+c.date+'</td>'
      +'<td><button class="vf-btn-sm vf-btn-ghost" style="font-size:10px">Voir</button></td></tr>';
  }).join('');
}
function vfaRenderOrders(){
  const tb=document.getElementById('vfa-orders-body');
  if(!tb) return;
  tb.innerHTML=VFA_ORDERS.map(o=>{
    const packCls=o.pack==='essentiel'?'vf-badge-ess':o.pack==='premium'?'vf-badge-prem':'vf-badge-fran';
    return '<tr><td style="font-family:Outfit;font-weight:700;color:rgba(255,255,255,.4)">'+o.id+'</td>'
      +'<td style="font-weight:600">'+o.client+'</td>'
      +'<td><span class="vf-badge-sm '+packCls+'">'+o.pack.charAt(0).toUpperCase()+o.pack.slice(1)+'</span></td>'
      +'<td style="font-family:Outfit;font-weight:800">'+o.amount+'</td>'
      +'<td>'+o.payment+'</td>'
      +'<td>'+o.date+'</td></tr>';
  }).join('');
}
function vfaRenderForms(){
  const tb=document.getElementById('vfa-forms-body');
  if(!tb) return;
  tb.innerHTML=VFA_FORMS.map(f=>{
    const packCls=f.pack==='essentiel'?'vf-badge-ess':f.pack==='premium'?'vf-badge-prem':'vf-badge-fran';
    const statusCls=f.complete?'vf-badge-live':'vf-badge-pending';
    const statusTxt=f.complete?'Complet':'Incomplet';
    return '<tr><td style="font-weight:600">'+f.client+'</td>'
      +'<td><span class="vf-badge-sm '+packCls+'">'+f.pack.charAt(0).toUpperCase()+f.pack.slice(1)+'</span></td>'
      +'<td>'+f.resto+'</td>'
      +'<td>'+f.cities+'</td>'
      +'<td>'+f.date+'</td>'
      +'<td><button class="vf-btn-sm vf-btn-ghost" style="font-size:10px">'+(f.complete?'Voir':'Relancer')+'</button></td></tr>';
  }).join('');
}
function vfaTab(btn,panel){
  document.querySelectorAll('.vf-tab').forEach(t=>t.classList.remove('a'));
  btn.classList.add('a');
  ['clients','commandes','formulaires','revenus'].forEach(p=>{
    const el=document.getElementById('vfa-p-'+p);
    if(el) el.style.display=p===panel?'':'none';
  });
}
function vfaAddClient(){alert('Fonctionnalite a connecter avec votre backend.');}
function vfaInit(){vfaRenderClients();vfaRenderOrders();vfaRenderForms();}

/* ===== FORMULAIRE POST-ACHAT ===== */
let formPack='premium';
let formCities=[{name:'',address:'',tel:'',email:'',horaires:''}];
let formMenuCityIdx=0;

// Setters exposes a window pour les handlers inline HTML
window.syncRestoName=function(val){
  if(formCities&&formCities[0]) formCities[0].name=val;
};
window.setCity=function(i,field,val){
  if(formCities&&formCities[i]) formCities[i][field]=val;
};

function setFormPack(pack){
  formPack=pack;
  const info={
    essentiel:{name:'Pack Essentiel',price:(PACKS.essentiel&&PACKS.essentiel.price)||'150€',col:'#6B7280'},
    premium:  {name:'Pack Premium',  price:(PACKS.premium&&PACKS.premium.price)||'490€',    col:'#0071E3'}
  };
  const p=info[pack];
  const dot=document.getElementById('form-pack-dot');
  const nm=document.getElementById('form-pack-name');
  const pr=document.getElementById('form-pack-price');
  if(dot) dot.style.background=p.col;
  if(nm) nm.textContent=p.name;
  if(pr) pr.textContent=p.price;

}

function formShowError(msg){
  let err=document.getElementById('form-val-error');
  if(!err){
    err=document.createElement('div');
    err.id='form-val-error';
    err.style.cssText='background:#fee2e2;border:1.5px solid #fca5a5;color:#dc2626;border-radius:10px;padding:12px 16px;font-size:13.5px;font-weight:600;margin-bottom:16px;display:flex;align-items:center;gap:8px';
  }
  err.innerHTML='<span style="font-size:18px">⚠️</span><span>'+msg+'</span>';
  const step=document.querySelector('[id^="form-step-"]:not([style*="display: none"]):not([style*="display:none"])');
  if(step) step.insertBefore(err,step.firstChild);
  err.scrollIntoView({behavior:'smooth',block:'center'});
}

function formClearError(){
  const err=document.getElementById('form-val-error');
  if(err) err.remove();
}

function formValidateStep1(){
  const g=function(id){ const el=document.getElementById(id); return el?el.value.trim():''; };
  const name    =g('f-resto-name');
  const cuisine =g('f-cuisine-type');
  const address =g('f-address');
  const tel     =g('f-tel');
  const email   =g('f-email');
  const horaires=g('f-horaires');
  if(formCities[0]){
    if(name)     formCities[0].name     =name;
    if(address)  formCities[0].address  =address;
    if(tel)      formCities[0].tel      =tel;
    if(email)    formCities[0].email    =email;
    if(horaires) formCities[0].horaires =horaires;
  }
  if(!name){    formShowError('Le nom du restaurant est obligatoire.');  document.getElementById('f-resto-name')?.focus();  return false; }
  if(!cuisine){ formShowError('Le type de restaurant est obligatoire.'); document.getElementById('f-cuisine-type')?.focus(); return false; }
  if(!address){ formShowError('L\'adresse est obligatoire.');            document.getElementById('f-address')?.focus();     return false; }
  if(!tel){     formShowError('Le telephone est obligatoire.');          document.getElementById('f-tel')?.focus();         return false; }
  if(!email){   formShowError('L\'email est obligatoire.');              document.getElementById('f-email')?.focus();       return false; }
  return true;
}

function formValidateStep2(){
  // Vérifier si au moins un plat est rempli
  const items = window._getMenuItems ? window._getMenuItems() : {};
  const allItems = Object.values(items).flat();
  const filledItems = allItems.filter(function(it){ return it.name&&it.name.trim()&&it.price&&it.price.trim(); });
  const hasItems = filledItems.length > 0;
  // Vérifier si au moins une photo de menu est uploadée
  const photoInput = document.getElementById('f-menu-photo-file');
  const photoImgs = document.querySelectorAll('#menu-photo-upload-area img');
  const hasPhoto = (photoInput && photoInput.files && photoInput.files.length > 0) || photoImgs.length > 0;
  // Au moins un des deux doit être rempli
  if(!hasItems && !hasPhoto){
    formShowError('Remplissez au moins un plat, ou uploadez une photo de votre carte.');
    return false;
  }
  // Si des plats sont saisis, vérifier qu'aucun n'a un nom sans prix
  const missingPrice = allItems.find(function(it){ return it.name&&it.name.trim()&&(!it.price||!it.price.trim()); });
  if(missingPrice){
    formShowError('Le plat "'+missingPrice.name+'" n\'a pas de prix.');
    return false;
  }
  return true;
}

function formGoStep(step){
  // Validation avant d'avancer
  if(step===2 && !formValidateStep1()) return;
  if(step===3 && !formValidateStep2()) return;
  formClearError();
  [0,1,2,3].forEach(s=>{
    const el=document.getElementById('form-step-'+s);
    if(el) el.style.display=s===step?'':'none';
  });
  const pi=document.getElementById('form-pack-info');
  if(pi) pi.style.display=step===0?'none':'';
  const target=document.getElementById('form-step-'+step)||document.getElementById('home-form');
  if(target) setTimeout(()=>target.scrollIntoView({behavior:'smooth',block:'start'}),50);
}

function renderFormCities(){
  const container=document.getElementById('form-cities-container');
  if(!container) return;
  container.innerHTML=formCities.map((c,i)=>{
    return '<div class="form-city-block">'
      +'<div class="form-city-header"><div class="form-city-num">'+(i+1)+'</div>'
      +'<div class="form-city-title">Établissement '+(i+1)+'</div>'
      +(i>0?'<button class="form-city-remove" onclick="window.formRemoveCity('+i+')">&times;</button>':'')
      +'</div>'
      +'<div class="form-group"><label class="form-label">Nom de l\'etablissement <span class="req">*</span></label>'
      +'<input class="form-input" type="text" placeholder="Ex: Burger Factory Paris" value="'+c.name+'" oninput="window.setCity('+i+',\'name\',this.value)"/></div>'
      +'<div class="form-row">'
      +'<div class="form-group"><label class="form-label">Adresse <span class="req">*</span></label>'
      +'<input class="form-input" type="text" placeholder="12 Rue..., 75001 Paris" value="'+c.address+'" oninput="window.setCity('+i+',\'address\',this.value)"/></div>'
      +'<div class="form-group"><label class="form-label">Telephone <span class="req">*</span></label>'
      +'<input class="form-input" type="tel" placeholder="01 23 45 67 89" value="'+c.tel+'" oninput="window.setCity('+i+',\'tel\',this.value)"/></div>'
      +'</div>'
      +'<div class="form-row">'
      +'<div class="form-group"><label class="form-label">Email <span class="req">*</span></label>'
      +'<input class="form-input" type="email" placeholder="contact@..." value="'+c.email+'" oninput="window.setCity('+i+',\'email\',this.value)"/></div>'
      +'<div class="form-group"><label class="form-label">Horaires</label>'
      +'<input class="form-input" type="text" placeholder="Lun-Sam 12h-22h" value="'+c.horaires+'" oninput="window.setCity('+i+',\'horaires\',this.value)"/></div>'
      +'</div></div>';
  }).join('');
  
  // Also update menu city tabs
  renderMenuCityTabs();
}

function formAddCity(){
  formCities.push({name:'',address:'',tel:'',email:'',horaires:''});
  renderFormCities();
}
function formRemoveCity(i){
  formCities.splice(i,1);
  if(formMenuCityIdx>=formCities.length) formMenuCityIdx=0;
  renderFormCities();
}

function renderMenuCityTabs(){
  const tabs=document.getElementById('form-menu-cities-tabs');
  if(!tabs) return;
  tabs.innerHTML=formCities.map((c,i)=>{
    const label=c.name||'Établissement '+(i+1);
    return '<button class="dtb'+(i===formMenuCityIdx?' a':'')+'" onclick="formMenuCityIdx='+i+';renderMenuCityTabs()" style="font-size:11px;padding:5px 12px">'+label+'</button>';
  }).join('');
  
  const content=document.getElementById('form-menu-city-content');
  if(!content) return;
  const cityLabel=formCities[formMenuCityIdx]?.name||'Établissement '+(formMenuCityIdx+1);
  content.innerHTML='<div style="font-size:13px;color:var(--text2);margin-bottom:12px">Menu pour <strong>'+cityLabel+'</strong> :</div>'
    +'<div class="form-cat-title">Entr\u00e9es</div>'
    +'<button class="form-add-item">+ Ajouter une entr\u00e9e</button>'
    +'<div class="form-cat-title">Plats</div>'
    +'<button class="form-add-item">+ Ajouter un plat</button>'
    +'<div class="form-cat-title">Desserts</div>'
    +'<button class="form-add-item">+ Ajouter un dessert</button>'
    +'<div class="form-cat-title">Boissons</div>'
    +'<button class="form-add-item">+ Ajouter une boisson</button>';
}

function setMenuMode(mode){
  const itemsZone = document.getElementById('form-menu-single');
  const photoZone = document.getElementById('form-menu-photo-zone');
  const btnItems  = document.getElementById('menu-mode-items');
  const btnPhoto  = document.getElementById('menu-mode-photo');
  const btnBoth   = document.getElementById('menu-mode-both');
  if(!itemsZone) return;
  const on  = 'flex:1;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px;border:1.5px solid var(--blue);background:var(--blue);color:#fff';
  const off = 'flex:1;padding:10px 14px;border-radius:12px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:6px;border:1.5px solid #e5e7eb;background:#fff;color:#6b7280';
  if(mode==='items'){
    itemsZone.style.display=''; photoZone.style.display='none';
    if(btnItems) btnItems.style.cssText=on;
    if(btnPhoto) btnPhoto.style.cssText=off;
    if(btnBoth)  btnBoth.style.cssText=off;
  } else if(mode==='photo'){
    itemsZone.style.display='none'; photoZone.style.display='';
    if(btnItems) btnItems.style.cssText=off;
    if(btnPhoto) btnPhoto.style.cssText=on;
    if(btnBoth)  btnBoth.style.cssText=off;
  } else {
    itemsZone.style.display=''; photoZone.style.display='';
    if(btnItems) btnItems.style.cssText=off;
    if(btnPhoto) btnPhoto.style.cssText=off;
    if(btnBoth)  btnBoth.style.cssText=on;
  }
}
function handleMenuPhotoUpload(input){
  const files=Array.from(input.files); if(!files.length) return;
  const drop=document.getElementById('menu-photo-upload-area');
  if(!drop) return;
  drop.innerHTML='<div style="display:flex;flex-wrap:wrap;gap:6px;padding:6px;justify-content:center"></div>'
    +'<div style="font-size:11px;color:#6b7280;margin-top:6px">'+files.length+' photo(s) — cliquer pour changer</div>'
    +'<input type="file" id="f-menu-photo-file" accept="image/*" multiple style="display:none" onchange="window.handleMenuPhotoUpload(this)"/>';
  const grid=drop.querySelector('div');
  files.forEach(function(file){
    const r=new FileReader();
    r.onload=function(e){
      const img=document.createElement('img');
      img.src=e.target.result;
      img.style.cssText='width:80px;height:60px;object-fit:cover;border-radius:8px';
      grid.appendChild(img);
    };
    r.readAsDataURL(file);
  });
}
window.handleRestaurantPhotos=function(input){
  const files=Array.from(input.files); if(!files.length) return;
  const prev=document.getElementById('f-photos-preview');
  if(!prev) return;
  prev.innerHTML='';
  files.forEach(function(file){
    const r=new FileReader();
    r.onload=function(e){
      const img=document.createElement('img');
      img.src=e.target.result;
      img.style.cssText='width:80px;height:60px;object-fit:cover;border-radius:8px';
      prev.appendChild(img);
    };
    r.readAsDataURL(file);
  });
};
window.handleLogoUpload=async function(input){
  const file=input.files[0]; if(!file) return;
  const r=new FileReader();
  r.onload=function(e){
    const prev=document.getElementById('f-logo-preview');
    if(prev){ prev.innerHTML='<img src="'+e.target.result+'" style="max-width:160px;max-height:100px;object-fit:contain;border-radius:8px"/>'; }
    const wrap=input.closest('.form-upload');
    const txt=wrap&&wrap.querySelector('.form-upload-txt');
    if(txt) txt.textContent='Logo charge ✓';
  };
  r.readAsDataURL(file);
  if(window.uploadToStorage){
    const slug=((formCities[0]&&formCities[0].name)||'restaurant').toLowerCase().replace(/s+/g,'-').replace(/[^a-z0-9-]/g,'');
    const ext=file.name.split('.').pop();
    const url=await window.uploadToStorage(file,'forms/'+slug+'/logo-'+Date.now()+'.'+ext);
    if(url) window._logoUrl=url;
  }
};
window.menuItemPhoto=async function(input,cat,i){
  const file=input.files[0]; if(!file) return;
  const r=new FileReader();
  r.onload=function(e){ menuItems[cat][i].photo=e.target.result; renderMenuItems(cat); };
  r.readAsDataURL(file);
  if(window.uploadToStorage){
    const slug=((formCities[0]&&formCities[0].name)||'restaurant').toLowerCase().replace(/s+/g,'-').replace(/[^a-z0-9-]/g,'');
    const ext=file.name.split('.').pop();
    const url=await window.uploadToStorage(file,'forms/'+slug+'/menu-'+cat+'-'+i+'-'+Date.now()+'.'+ext);
    if(url) menuItems[cat][i].photoUrl=url;
  }
};

let menuItems={entrees:[],plats:[],desserts:[],boissons:[]};
window._getMenuItems   = function(){ return menuItems; };
window._setMenuItem    = function(cat,i,field,val){ if(menuItems[cat]&&menuItems[cat][i]) menuItems[cat][i][field]=val; };
window._removeMenuItem = function(cat,i){ if(menuItems[cat]){ menuItems[cat].splice(i,1); if(typeof renderMenuItems==='function') renderMenuItems(cat); } };
function formAddMenuItem(cat){
  menuItems[cat].push({name:'',price:'',desc:'',photo:''});
  renderMenuItems(cat);
}
function renderMenuItems(cat){
  const container=document.getElementById('form-menu-'+cat);
  if(!container) return;
  container.innerHTML=menuItems[cat].map((item,i)=>{
    const photoThumb = item.photo
      ? '<img src="'+item.photo+'" style="width:100%;height:100%;object-fit:cover;border-radius:6px"/>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>';
    return '<div class="form-menu-item">'
      +'<div class="form-menu-item-fields">'
      +'<input class="form-input" style="padding:8px 10px;font-size:12px" type="text" placeholder="Nom du plat" value="'+item.name+'" oninput="window._setMenuItem(\''+cat+'\','+i+',\'name\',this.value)"/>'
      +'<input class="form-input" style="padding:8px 10px;font-size:12px" type="text" placeholder="Prix €" value="'+item.price+'" oninput="window._setMenuItem(\''+cat+'\','+i+',\'price\',this.value)"/>'
      +'</div>'
      +'<label title="Photo du plat" style="position:relative;width:40px;height:40px;min-width:40px;border-radius:8px;border:1.5px dashed rgba(0,0,30,.2);cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:hidden;background:rgba(0,0,30,.02)">'
      +photoThumb
      +'<input type="file" accept="image/*" style="position:absolute;inset:0;opacity:0;cursor:pointer" onchange="window.menuItemPhoto(this,\''+cat+'\','+i+')"/>'
      +'</label>'
      +'<button style="width:24px;height:24px;border-radius:6px;border:none;background:rgba(239,68,68,.1);color:#ef4444;font-size:12px;cursor:pointer;flex-shrink:0" onclick="window._removeMenuItem(\''+cat+'\','+i+')">&times;</button>'
      +'</div>';
  }).join('');
}

function formSubmit(){
  // Validation finale
  if(!formValidateStep1()) return;
  if(!formValidateStep2()) return;
  formClearError();
  const restoName = formCities[0]&&formCities[0].name ? formCities[0].name : (document.getElementById('f-resto-name')&&document.getElementById('f-resto-name').value||'');
  // Save form submission to Firebase + recuperer l'ID du document
  async function saveAndRedirect(){
    // Nettoyer menuItems : supprimer les base64
    const cleanMenu = {};
    const rawMenu = window._getMenuItems ? window._getMenuItems() : menuItems;
    Object.entries(rawMenu).forEach(function([cat, items]){
      cleanMenu[cat] = (items||[]).map(function(it){
        return { name: it.name||'', price: it.price||'', desc: it.desc||'', photoUrl: it.photoUrl||'' };
      });
    });

    // Sauvegarder les donnees dans sessionStorage — Firebase uniquement APRÈS paiement
    var g = function(id){ var el=document.getElementById(id); return el?el.value.trim():''; };
    const formData = {
      type: 'form_submission',
      pack: formPack,
      cities: formCities,
      menuItems: cleanMenu,
      restaurantName: restoName,
      logoUrl:          window._logoUrl || '',
      menuCardPhotoUrl: window._menuCardPhotoUrl || '',
      restaurantPhotos: window._restaurantPhotos || [],
      slogan:    g('f-slogan'),
      cuisine:   g('f-cuisine-type'),
      color:     g('f-color'),
      instagram: g('f-instagram'),
      facebook:  g('f-facebook'),
      tiktok:    g('f-tiktok'),
      website:   g('f-website'),
      phone:     g('f-tel'),
      address:   g('f-address'),
      horaires:  g('f-horaires'),
      ubereats:  g('f-ubereats'),
      deliveroo: g('f-deliveroo'),
      justeat:   g('f-justeat'),
      remarks:   (document.querySelector('#form-step-3 textarea')||{}).value||'',
      // Informations légales (pour générer les mentions légales du site livré).
      // Optionnelles mais fortement recommandées — voir le générateur /outils/generateur-mentions-legales
      legalInfo: {
        raisonSociale: g('f-legal-raison'),
        forme:         g('f-legal-forme'),
        gerant:        g('f-legal-gerant'),
        siret:         g('f-legal-siret'),
        rcsRm:         g('f-legal-rcs'),
        capital:       g('f-legal-capital'),
        tva:           g('f-legal-tva'),
      },
    };
    try {
      sessionStorage.setItem('vf_pending_form', JSON.stringify(formData));
      console.log('✅ Donnees formulaire prêtes, en attente du paiement');
    } catch(e) {
      console.warn('sessionStorage indisponible:', e.message);
    }

    window.location.href = '/paiement?pack=' + encodeURIComponent(formPack) + '&resto=' + encodeURIComponent(restoName);
  }
  saveAndRedirect();
}

function formInit(){
  formGoStep(0);
  setFormPack(formPack);
  ['entrees','plats','desserts','boissons'].forEach(cat=>{
    menuItems[cat]=[];
    formAddMenuItem(cat);
    formAddMenuItem(cat);
  });
}


/* expose form functions to window while still in scope */
window.setFormPack    = setFormPack;
window.formGoStep     = formGoStep;
window.formInit       = formInit;
window.formSubmit     = formSubmit;
window.formAddCity    = formAddCity;
window.formRemoveCity = formRemoveCity;
window.formAddMenuItem= formAddMenuItem;
function setAutreName(v){bState.autreName=v||'Mon Restaurant';renderSim();}
function setColor(c){bState.color=c;bState.cart=[];renderBControls();renderSim();}
function setLayout(l){bState.layout=l;renderBControls();renderSim();}
function setDevice(d){
  bState.device=d;
  if(!document.getElementById('iphone-wrap')) return;
  document.getElementById('iphone-wrap').style.display=d==='iphone'?'':'none';
  document.getElementById('mac-wrap').style.display=d==='macbook'?'':'none';
  document.getElementById('btn-iphone').className='dtb'+(d==='iphone'?' a':'');
  document.getElementById('btn-macbook').className='dtb'+(d==='macbook'?' a':'');
}
function addToCart(item){bState.cart.push(item);renderSim();}

function scrollSimCat(el,catId){
  const nav=el.closest('.ss-nav');
  if(nav){nav.querySelectorAll('.ss-ni').forEach(n=>{n.classList.remove('a');n.style.borderBottomColor='transparent';n.style.color='rgba(255,255,255,.3)';});el.classList.add('a');el.style.borderBottomColor=bState.color;el.style.color='#fff';}
  const container=el.closest('.ic')||el.closest('.mac-c');
  if(!container) return;
  const section=container.querySelector('[data-cat="'+catId+'"]');
  if(section) container.scrollTop=Math.max(0,section.offsetTop-160);
}

/* ===== RENDER CONTROLS ===== */
function renderBControls(){
  if(!document.getElementById('cuisine-btns')) return;
  const reg=CUISINES.filter(c=>!c.custom);
  document.getElementById('cuisine-btns').innerHTML=reg.map(c=>'<button class="cbtn'+(bState.cuisine===c.id?' a':'')+'" onclick="setCuisine(\''+c.id+'\')">'+c.emoji+' '+c.short+'</button>').join('');
  document.getElementById('color-swatches').innerHTML=COLORS.map(c=>'<div class="sw'+(bState.color===c?' a':'')+'" style="background:'+c+'" onclick="setColor(\''+c+'\')"></div>').join('');
  document.getElementById('btn-grid').className='lbtn'+(bState.layout==='grid'?' a':'');
  document.getElementById('btn-list').className='lbtn'+(bState.layout==='list'?' a':'');
}


/* ===== PRIX ÉDITABLES ===== */
const editablePrices={};
function getItemPrice(cuisineId,itemName,defaultPrice){return(editablePrices[cuisineId]&&editablePrices[cuisineId][itemName])||defaultPrice;}
function setItemPrice(cuisineId,itemName,price){if(!editablePrices[cuisineId])editablePrices[cuisineId]={};editablePrices[cuisineId][itemName]=price;}
window.onPriceInput=function(inp){inp.style.borderColor='rgba(52,211,153,.4)';};
window.onPriceBlur=function(inp,cuisineId,itemName){
  let raw=inp.value.replace(/[^0-9.,]/g,'').replace(',','.');
  let num=parseFloat(raw);
  if(isNaN(num)||num<=0)num=parseFloat(inp.dataset.orig)||0;
  num=Math.round(num*100)/100;
  const formatted=num.toFixed(2);
  inp.value=formatted;inp.dataset.orig=formatted;
  setItemPrice(cuisineId,itemName,formatted);
  inp.style.borderColor='';
  inp.classList.add('saved');setTimeout(()=>inp.classList.remove('saved'),700);
  const badge=inp.parentElement.querySelector('.adm-plat-saved-badge');
  if(badge){badge.style.opacity='1';setTimeout(()=>badge.style.opacity='0',1200);}
};
window.onPriceKeydown=function(e,inp,cuisineId,itemName){if(e.key==='Enter')inp.blur();if(e.key==='Escape'){inp.value=inp.dataset.orig;inp.blur();}};
window.focusPriceInp=function(inp){inp.select();};
window.toggleHoraire=function(tog){tog.classList.toggle('on');tog.classList.toggle('off');};
window.adminTab=function(el){const all=el.closest('.adm-nav').querySelectorAll('.adm-ni');all.forEach(t=>t.classList.remove('a'));el.classList.add('a');};

/* Commandes fictives par ville */
const CITY_ORDERS=[
  [{id:'#2314',client:'Sophie M.',items:'Tartine Montmartre, Kir Parisien',total:'14.00',status:'new'},{id:'#2313',client:'Thomas D.',items:'Entrecote x2',total:'43.80',status:'enc'},{id:'#2312',client:'Lea V.',items:'Opera Maison, Kir',total:'13.00',status:'done'},{id:'#2311',client:'Marc L.',items:'Tartine x2, Entrecote',total:'57.30',status:'done'}],
  [{id:'#1087',client:'Pierre B.',items:'Quenelles x2',total:'35.80',status:'new'},{id:'#1086',client:'Isabelle R.',items:'Salade Lyonnaise, Beaujolais',total:'15.90',status:'new'},{id:'#1085',client:'Julien F.',items:'Tarte Pralines x3',total:'20.70',status:'enc'},{id:'#1084',client:'Nathalie C.',items:'Quenelles + Tarte',total:'24.80',status:'done'}],
  [{id:'#0756',client:'Karim A.',items:'Bouillabaisse x2',total:'49.80',status:'new'},{id:'#0755',client:'Fatima H.',items:'Soupe, Pastis x2',total:'19.90',status:'enc'},{id:'#0754',client:'Xavier P.',items:'Navettes x4, Pastis',total:'10.40',status:'enc'},{id:'#0753',client:'Celine T.',items:'Bouillabaisse + Soupe',total:'35.80',status:'done'}],
  [{id:'#0432',client:'Guillaume S.',items:'Huîtres x6, Bordeaux',total:'23.90',status:'new'},{id:'#0431',client:'Amelie R.',items:'Entrecote x2',total:'45.80',status:'enc'},{id:'#0430',client:'Paul M.',items:'Caneles x4, Bordeaux',total:'15.50',status:'done'},{id:'#0429',client:'Claire D.',items:'Huîtres + Entrecote',total:'44.30',status:'done'}],
  [{id:'#0198',client:'Kevin L.',items:"Carbonade x2, Bière Ch'ti",total:'40.30',status:'new'},{id:'#0197',client:'Marie-Jo B.',items:'Potjevleesch, Gaufre x2',total:'20.50',status:'enc'},{id:'#0196',client:'Romain V.',items:"Bière x3, Gaufres x2",total:'24.50',status:'enc'},{id:'#0195',client:'Sylvie G.',items:'Carbonade + Potjevleesch',total:'27.40',status:'done'}],
];
const CITY_STATS=[
  {ca:'4 213\u20ac',orders:'187',pending:'2',trend:'+18%'},
  {ca:'3 087\u20ac',orders:'142',pending:'3',trend:'+11%'},
  {ca:'5 640\u20ac',orders:'231',pending:'1',trend:'+24%'},
  {ca:'2 890\u20ac',orders:'118',pending:'4',trend:'+9%'},
  {ca:'3 455\u20ac',orders:'158',pending:'2',trend:'+15%'},
];

/* ===== BUILD ADMIN DASHBOARD ===== */
function buildAdminHTML(){
  const c=CUISINES.find(x=>x.id===bState.cuisine)||CUISINES[0];
  const label=c.custom?(bState.autreName||'Mon Restaurant'):c.label;
  const color=bState.color;
  const pack=bState.curPack;
  const hasCart=(pack==='premium');
  const hasMulti=false;
  const hasDelivery=hasCart;
  const citySpec=CITY_SPECIALS[bState.cityIdx]||CITY_SPECIALS[0];

  const ADMIN_TABS=[{id:'apercu',label:'Aper\u00e7u'},{id:'menu',label:'Menu'},hasCart?{id:'commandes',label:'Commandes'}:null,hasDelivery?{id:'livraison',label:'Livraison'}:null,{id:'horaires',label:'Horaires'}].filter(Boolean);
  const BAR_DAYS=['L','M','M','J','V','S','D'];
  const barVariants=[[30,55,42,70,90,65,48],[50,40,70,60,85,75,55],[60,80,50,90,70,95,40],[35,45,55,50,65,80,70],[45,60,75,55,80,70,50]];
  const bars=hasMulti?barVariants[bState.cityIdx]:barVariants[0];

  let navHtml='<div class="adm-nav"><div class="adm-logo">Visio<span>Flow</span></div>'
    +ADMIN_TABS.map((t,i)=>'<div class="adm-ni'+(i===0?' a':'')+'" onclick="adminTab(this,\''+t.id+'\')">'+t.label+'</div>').join('')
    +'</div>';

  let cityBar2='';
  if(hasMulti){
    const cs=CITY_STATS[bState.cityIdx];
    cityBar2='<div style="display:flex;align-items:center;gap:6px;padding:6px 10px;background:rgba(131,56,236,.1);border-bottom:.5px solid rgba(131,56,236,.2);margin-bottom:4px">'
      +'<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(180,160,255,.7)" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
      +'<select onchange="setCityIdx(this.selectedIndex);renderSim()" style="background:transparent;border:none;color:rgba(200,180,255,.9);font-size:10px;font-family:inherit;flex:1;outline:none">'
      +CITIES.map((ci,i)=>'<option style="background:#1a1a2e"'+(i===bState.cityIdx?' selected':'')+'>'+CITY_SPECIALS[i].flag+' '+ci+'</option>').join('')
      +'</select>'
      +'<span style="font-size:9px;color:rgba(255,255,255,.3)">'+cs.ca+' ce mois</span></div>';
  }

  let stats='<div class="adm-stats">';
  if(hasMulti){
    const cs=CITY_STATS[bState.cityIdx];
    stats+='<div class="adm-stat"><div class="adm-stat-v" style="color:'+color+'">'+cs.ca+'</div><div class="adm-stat-l">CA ce mois</div><div class="adm-stat-t up">\u2191 '+cs.trend+'</div></div>';
    stats+='<div class="adm-stat"><div class="adm-stat-v">'+cs.orders+'</div><div class="adm-stat-l">Commandes</div><div class="adm-stat-t up">\u2191 +8%</div></div>';
    stats+='<div class="adm-stat"><div class="adm-stat-v" style="color:#fbbf24">'+cs.pending+'</div><div class="adm-stat-l">En attente</div><div class="adm-stat-t warn">\u00c0 traiter</div></div>';
  } else if(hasCart){
    stats+='<div class="adm-stat"><div class="adm-stat-v" style="color:'+color+'">2 847\u20ac</div><div class="adm-stat-l">CA ce mois</div><div class="adm-stat-t up">\u2191 +12%</div></div>';
    stats+='<div class="adm-stat"><div class="adm-stat-v">143</div><div class="adm-stat-l">Commandes</div><div class="adm-stat-t up">\u2191 +8%</div></div>';
    stats+='<div class="adm-stat"><div class="adm-stat-v" style="color:#fbbf24">3</div><div class="adm-stat-l">En attente</div><div class="adm-stat-t warn">\u00c0 traiter</div></div>';
  } else {
    stats+='<div class="adm-stat"><div class="adm-stat-v" style="color:'+color+'">847</div><div class="adm-stat-l">Visites ce mois</div><div class="adm-stat-t up">\u2191 +22%</div></div>';
    stats+='<div class="adm-stat"><div class="adm-stat-v">94</div><div class="adm-stat-l">Appels re\u00e7us</div><div class="adm-stat-t up">\u2191 +5%</div></div>';
    stats+='<div class="adm-stat"><div class="adm-stat-v" style="color:#34d399">4.8</div><div class="adm-stat-l">Note Google</div><div class="adm-stat-t up">\u2191 Super</div></div>';
  }
  stats+='</div>';

  const chart='<div class="adm-chart">'
    +'<div style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:9px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.08em">'+(hasCart?'Commandes / semaine':'Visites / semaine')+'</span>'
    +(hasMulti?'<span style="font-size:8px;color:rgba(255,255,255,.25)">'+CITY_SPECIALS[bState.cityIdx].flag+' '+CITIES[bState.cityIdx]+'</span>':'')+'</div>'
    +'<div class="adm-chart-bars">'+bars.map((h,i)=>'<div style="flex:1;display:flex;flex-direction:column;align-items:center"><div class="adm-bar" style="height:'+h+'%;background:'+color+'30;border-top:2px solid '+color+'"></div><div class="adm-bar-label">'+BAR_DAYS[i]+'</div></div>').join('')+'</div></div>';

  const cuisineId=bState.cuisine;
  const items=MI[bState.cuisine]||MI.autre;
  const plats=items.filter(i=>i.cat==='plats').slice(0,3);
  const menuBlock='<div class="adm-row"><div class="adm-row-head"><span class="adm-row-title"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:-1px"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Modifier les prix</span><button class="adm-btn-sm adm-btn-blue">+ Ajouter</button></div>'
    +plats.map(p=>{
      const currentPrice=getItemPrice(cuisineId,p.name,p.price);
      return '<div class="adm-plat">'
        +'<img src="'+p.img+'" class="adm-plat-img"/>'
        +'<span class="adm-plat-name">'+p.name+'</span>'
        +'<div class="adm-plat-price-wrap">'
        +'<input class="adm-plat-inp" type="text" value="'+currentPrice+'" data-orig="'+currentPrice+'"'
        +' oninput="onPriceInput(this)"'
        +' onblur="onPriceBlur(this,\''+cuisineId+'\',\''+p.name+'\')"'
        +' onkeydown="onPriceKeydown(event,this,\''+cuisineId+'\',\''+p.name+'\')"'
        +' onfocus="focusPriceInp(this)"/>'
        +'<span class="adm-plat-inp-suffix">\u20ac</span>'
        +'<div class="adm-plat-saved-badge">\u2713 Enregistr\u00e9</div>'
        +'</div></div>';
    }).join('')
    +'<div style="font-size:8px;color:rgba(255,255,255,.25);margin-top:6px;padding-top:6px;border-top:.5px solid rgba(255,255,255,.05)">Cliquez sur un prix pour le modifier \u2014 Entr\u00e9e pour valider</div></div>';

  let ordersBlock='';
  if(hasCart){
    const orders=hasMulti?CITY_ORDERS[bState.cityIdx]:CITY_ORDERS[0];
    const cityLabel=hasMulti?(CITY_SPECIALS[bState.cityIdx].flag+' '+CITIES[bState.cityIdx]):'';
    ordersBlock='<div class="adm-row"><div class="adm-row-head"><span class="adm-row-title"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:-1px"><path d="M16 11c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4 4 1.791 4 4z"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>Commandes r\u00e9centes'+(cityLabel?' \u2014 '+cityLabel:'')+'</span><button class="adm-btn-sm adm-btn-ghost">Tout voir</button></div>'
      +orders.map(o=>{const bc=o.status==='new'?'new':o.status==='enc'?'enc':'done';const bl=o.status==='new'?'Nouvelle':o.status==='enc'?'En cours':'Livr\u00e9e';return'<div class="adm-order"><span class="adm-order-id">'+o.id+'</span><span class="adm-order-name">'+o.client+'</span><span class="adm-badge '+bc+'">'+bl+'</span><span class="adm-order-total">'+o.total+'\u20ac</span></div>';}).join('')
      +'</div>';
  }

  let integBlock='';
  if(hasDelivery){
    integBlock='<div class="adm-row"><div class="adm-row-head"><span class="adm-row-title"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:-1px"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>Plateformes livraison</span></div>'
      +'<div class="adm-integrations">'
      +'<div class="adm-integ"><div class="adm-integ-ico" style="background:#000;color:#fff">UE</div><div style="flex:1"><div class="adm-integ-name">Uber Eats</div><div class="adm-integ-status">Sync\u00e9 il y a 3 min</div></div><div class="adm-integ-dot on"></div></div>'
      +'<div class="adm-integ"><div class="adm-integ-ico" style="background:#00ccbc;color:#fff">DV</div><div style="flex:1"><div class="adm-integ-name">Deliveroo</div><div class="adm-integ-status">Sync\u00e9 il y a 5 min</div></div><div class="adm-integ-dot on"></div></div>'
      +'<div class="adm-integ"><div class="adm-integ-ico" style="background:#635BFF;color:#fff">VF</div><div style="flex:1"><div class="adm-integ-name">Site VisioFlow</div><div class="adm-integ-status">En ligne \u2022 14 commandes</div></div><div class="adm-integ-dot on"></div></div>'
      +'<div class="adm-integ" style="opacity:.4"><div class="adm-integ-ico" style="background:#f97316;color:#fff">JE</div><div style="flex:1"><div class="adm-integ-name">Just Eat</div><div class="adm-integ-status">Non connect\u00e9</div></div><div class="adm-integ-dot off"></div></div>'
      +'</div></div>';
  }

  const JOURS_ABBR=['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  const HEURES=['12h\u201314h30 / 19h\u201322h','12h\u201314h30 / 19h\u201322h','12h\u201314h30 / 19h\u201322h','12h\u201314h30 / 19h\u201322h','12h\u201314h30 / 19h\u201323h','11h\u201323h','Ferm\u00e9'];
  const horairesBlock='<div class="adm-row"><div class="adm-row-head"><span class="adm-row-title"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px;vertical-align:-1px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Horaires</span><button class="adm-btn-sm adm-btn-blue">Modifier</button></div>'
    +JOURS_ABBR.map((j,i)=>'<div class="adm-horaire-row"><span class="adm-horaire-day">'+j+'</span><span class="adm-horaire-time" style="'+(i===6?'color:rgba(255,255,255,.3)':'')+'">'+HEURES[i]+'</span><div class="adm-tog '+(i===6?'off':'on')+'" onclick="toggleHoraire(this)"></div></div>').join('')
    +'</div>';

  const PACK_CONF={essentiel:{col:'#6B7280',title:'Dashboard Essentiel'},premium:{col:'#0071E3',title:'Dashboard Premium'}};
  const pc2=PACK_CONF[pack];
  const packBanner2='<div style="display:flex;align-items:center;gap:6px;padding:4px 10px;background:'+pc2.col+'18;border-bottom:.5px solid '+pc2.col+'40"><span style="font-size:9px;font-weight:700;color:'+pc2.col+'">'+pc2.title+'</span><span style="font-size:8px;color:rgba(255,255,255,.25);margin-left:auto">'+label+'</span></div>';

  return '<div class="adm">'+navHtml+packBanner2+cityBar2
    +'<div class="adm-body">'
    +'<div class="adm-sec-title">Vue d\'ensemble</div>'
    +stats+chart+ordersBlock+integBlock+menuBlock+horairesBlock
    +'</div></div>';
}

/* ===== BUILD RESTAURANT PREVIEW — ADAPTE AU PACK ===== */
function buildSimHTML(){
  if(bState.previewTab==='admin') return buildAdminHTML();

  const c=CUISINES.find(x=>x.id===bState.cuisine)||CUISINES[0];
  const allItems=MI[bState.cuisine]||MI.autre;
  const cart=bState.cart;
  const total=cart.reduce((s,i)=>s+parseFloat(i.price),0).toFixed(2);
  const color=bState.color;
  const label=c.custom?(bState.autreName||'Mon Restaurant'):c.label;
  const pack=bState.curPack;

  const hasCart=(pack==='premium');
  const hasMulti=false;

  const PACK_CONF={
    essentiel:{col:'#6B7280',title:'Site Vitrine'},
    premium:  {col:'#0071E3',title:'Commandes en ligne'},
  };
  const pc=PACK_CONF[pack];

  // Pack badge (minimal, haut de page)
  const packBanner='<div style="display:flex;align-items:center;gap:5px;padding:4px 12px;background:'+pc.col+'18;border-bottom:.5px solid '+pc.col+'28">'
    +'<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="'+pc.col+'" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>'
    +'<span style="font-size:9px;font-weight:700;color:'+pc.col+'">'+pc.title+'</span>'
    +'<span style="font-size:8px;color:rgba(255,255,255,.2);margin-left:auto">'+(hasCart?'Panier actif':'Menu digital')+'</span></div>';

  // Selecteur de ville
  const citySpec=CITY_SPECIALS[bState.cityIdx]||CITY_SPECIALS[0];
  const cityBar=hasMulti
    ?'<div style="display:flex;align-items:center;gap:6px;padding:6px 12px;background:rgba(131,56,236,.12);border-bottom:.5px solid rgba(131,56,236,.22)">'
      +'<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(200,180,255,.8)" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
      +'<select onchange="setCityIdx(this.selectedIndex)" style="background:transparent;border:none;color:rgba(220,200,255,.95);font-size:10px;font-family:inherit;flex:1;outline:none">'
      +CITIES.map((ci,i)=>'<option style="background:#1a1a2e"'+(i===bState.cityIdx?' selected':'')+'>'+CITY_SPECIALS[i].flag+' '+ci+'</option>').join('')
      +'</select>'
      +'<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(200,180,255,.4)" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg></div>'
    :'';

  // Items par categorie
  const cats=['entrees','plats','desserts','boissons'];
  const catItems={};
  cats.forEach(cat=>{
    const base=allItems.filter(i=>i.cat===cat);
    catItems[cat]=(hasMulti&&citySpec[cat]&&citySpec[cat].length>0)?[...citySpec[cat],...base]:base;
  });

  // --- HERO PREMIUM ---
  const heroHtml=
    '<div style="position:relative;height:200px;overflow:hidden">'
    +'<img src="'+c.hero+'" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"/>'
    +'<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.08) 0%,rgba(0,0,0,.55) 55%,rgba(0,0,0,.96) 100%)"></div>'
    // Bouton retour
    +'<div style="position:absolute;top:10px;left:10px;width:28px;height:28px;border-radius:50%;background:rgba(0,0,0,.5);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center">'
    +'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg></div>'
    // Bouton favori
    +'<div style="position:absolute;top:10px;right:10px;width:28px;height:28px;border-radius:50%;background:rgba(0,0,0,.5);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center">'
    +'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>'
    // Infos restaurant
    +'<div style="position:absolute;bottom:0;left:0;right:0;padding:12px 14px">'
    +'<div style="display:flex;align-items:flex-end;justify-content:space-between;gap:8px">'
    +'<div style="flex:1;min-width:0">'
    // Badge type
    +'<div style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:50px;background:'+color+';font-size:8px;font-weight:700;color:#fff;margin-bottom:5px;letter-spacing:.04em">'
    +(hasCart?'<svg width="7" height="7" viewBox="0 0 24 24" fill="#fff"><circle cx="9" cy="21" r="2"/><circle cx="20" cy="21" r="2"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" fill="none" stroke="#fff" stroke-width="2"/></svg> Commande en ligne':'<svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> Menu digital')
    +'</div>'
    // Nom
    +'<div style="font-family:\'Outfit\',sans-serif;font-size:20px;font-weight:800;color:#fff;letter-spacing:-.3px;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+label+'</div>'
    // Note & infos
    +'<div style="display:flex;align-items:center;gap:5px;margin-top:4px">'
    +'<svg width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
    +'<span style="font-size:11px;font-weight:700;color:#fff">4.8</span>'
    +'<span style="font-size:10px;color:rgba(255,255,255,.45)">(124 avis)</span>'
    +'<span style="color:rgba(255,255,255,.2);font-size:9px;margin:0 1px">·</span>'
    +(hasCart?'<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="font-size:10px;color:rgba(255,255,255,.5)">25–35 min</span>':'<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12A19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6z"/></svg><span style="font-size:10px;color:rgba(255,255,255,.5)">Reservation</span>')
    +'</div>'
    +'</div>'
    // Badge ouvert
    +'<div style="flex-shrink:0;padding:6px 8px;border-radius:10px;background:rgba(0,0,0,.55);backdrop-filter:blur(10px);border:.5px solid rgba(255,255,255,.1);text-align:center">'
    +'<div style="display:flex;align-items:center;gap:3px;margin-bottom:1px">'
    +'<div style="width:5px;height:5px;border-radius:50%;background:#22c55e;animation:pulse 2s ease infinite;flex-shrink:0"></div>'
    +'<span style="font-size:9px;font-weight:700;color:#22c55e">Ouvert</span>'
    +'</div>'
    +'<span style="font-size:8px;color:rgba(255,255,255,.35)">–22h30</span>'
    +'</div>'
    +'</div>'
    +'</div>'
    +'</div>';

  // Navigation categories
  const navHtml='<div style="display:flex;padding:0 2px;border-bottom:.5px solid rgba(255,255,255,.07);overflow-x:auto;position:sticky;top:0;background:#0d0d0d;z-index:5;scrollbar-width:none">'
    +cats.filter(cat=>catItems[cat].length>0).map((cat,i)=>{
      const active=i===0;
      return '<div class="ss-ni'+(active?' a':'')+'" style="'+(active?'border-bottom:2px solid '+color+';color:#fff;':'')+'padding:9px 12px;font-size:10.5px;font-weight:'+(active?'600':'400')+'" onclick="scrollSimCat(this,\''+cat+'\')">'+CAT_LABELS[cat]+'</div>';
    }).join('')+'</div>';

  // --- Sections menu ---
  let menuHtml='';
  cats.filter(cat=>catItems[cat].length>0).forEach(cat=>{
    menuHtml+='<div data-cat="'+cat+'">';
    menuHtml+='<div style="font-size:10.5px;font-weight:700;color:rgba(255,255,255,.35);padding:12px 12px 4px;text-transform:uppercase;letter-spacing:.1em">'+CAT_LABELS[cat]+'</div>';
    if(bState.layout==='grid'){
      // VUE GRILLE premium
      menuHtml+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:2px 10px 8px">';
      catItems[cat].forEach(item=>{
        const oc=hasCart?'onclick="addToCart({name:\''+item.name.replace(/'/g,"\\'")+'\',price:\''+item.price+'\',img:\''+item.img+'\'})"':'';
        menuHtml+='<div '+oc+' style="border-radius:12px;overflow:hidden;background:#161616;border:.5px solid rgba(255,255,255,.07);cursor:'+(hasCart?'pointer':'default')+';transition:all .15s">';
        menuHtml+='<div style="position:relative;height:80px;overflow:hidden">'
          +'<img src="'+item.img+'" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"/>'
          +'<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),transparent 50%)"></div>';
        if(hasCart) menuHtml+='<div style="position:absolute;bottom:5px;right:5px;width:20px;height:20px;border-radius:50%;background:'+color+';display:flex;align-items:center;justify-content:center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>';
        menuHtml+='</div>';
        menuHtml+='<div style="padding:7px 9px">'
          +'<div style="font-size:10.5px;font-weight:700;color:#fff;margin-bottom:2px;line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+item.name+'</div>'
          +'<div style="font-size:9px;color:rgba(255,255,255,.35);margin-bottom:5px;line-height:1.3;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">'+item.desc+'</div>'
          +'<div style="font-size:13px;font-weight:800;color:'+color+'">'+item.price+'\u20ac</div>'
          +'</div></div>';
      });
      menuHtml+='</div>';
    } else {
      // VUE LISTE premium
      menuHtml+='<div style="padding:0 10px 6px;display:flex;flex-direction:column">';
      catItems[cat].forEach((item,itemIdx)=>{
        const isLocal=hasMulti&&itemIdx<(citySpec[cat]||[]).length;
        menuHtml+='<div style="display:flex;align-items:center;gap:10px;padding:9px 2px;border-bottom:.5px solid rgba(255,255,255,.05);cursor:'+(hasCart?'pointer':'default')+'">';
        // Image
        menuHtml+='<div style="position:relative;flex-shrink:0">';
        menuHtml+='<img src="'+item.img+'" alt="" loading="lazy" style="width:58px;height:58px;border-radius:10px;object-fit:cover;display:block;border:.5px solid rgba(255,255,255,.07)"/>';
        if(isLocal) menuHtml+='<div style="position:absolute;top:-3px;right:-3px;width:14px;height:14px;border-radius:50%;background:'+color+';border:1.5px solid #0d0d0d;display:flex;align-items:center;justify-content:center;font-size:8px">'+citySpec.flag+'</div>';
        menuHtml+='</div>';
        // Texte
        menuHtml+='<div style="flex:1;min-width:0">';
        menuHtml+='<div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+item.name+'</div>';
        if(isLocal) menuHtml+='<div style="display:inline-flex;align-items:center;gap:3px;padding:1px 5px;border-radius:50px;background:rgba(131,56,236,.2);border:.5px solid rgba(131,56,236,.4);font-size:7.5px;font-weight:700;color:#c084fc;margin-bottom:2px">'+citySpec.flag+' Specialite locale</div>';
        menuHtml+='<div style="font-size:9.5px;color:rgba(255,255,255,.33);line-height:1.4;margin-bottom:4px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">'+item.desc+'</div>';
        menuHtml+='<div style="font-size:12px;font-weight:800;color:'+color+'">'+item.price+'\u20ac</div>';
        menuHtml+='</div>';
        // Bouton +
        if(hasCart){
          menuHtml+='<button style="width:28px;height:28px;border-radius:8px;background:'+color+';border:none;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer" onclick="addToCart({name:\''+item.name.replace(/'/g,"\\'")+'\',price:\''+item.price+'\',img:\''+item.img+'\'})">'
            +'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>';
        }
        menuHtml+='</div>';
      });
      menuHtml+='</div>';
    }
    menuHtml+='</div>';
  });

  // --- Bloc info restaurant ---
  const CITY_ADDRESSES=['12 Rue de la Paix, Paris 75001','23 Place Bellecour, Lyon 69002','8 Quai du Port, Marseille 13002','15 Place du Parlement, Bordeaux 33000','42 Grand Place, Lille 59000'];
  const address=hasMulti?CITY_ADDRESSES[bState.cityIdx]:CITY_ADDRESSES[0];
  const infoHtml=
    '<div style="margin:10px 10px 6px">'
    +'<div style="border-radius:14px;background:#141414;border:.5px solid rgba(255,255,255,.07);overflow:hidden">'
    +'<div style="padding:12px 14px;display:flex;flex-direction:column;gap:8px">'
    +'<div style="font-size:9px;font-weight:700;color:rgba(255,255,255,.28);text-transform:uppercase;letter-spacing:.1em">Informations</div>'
    // Telephone
    +'<div style="display:flex;align-items:center;gap:10px">'
    +'<div style="width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">'
    +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12A19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 15z"/></svg>'
    +'</div>'
    +'<div style="flex:1"><div style="font-size:11px;font-weight:600;color:#fff">01 23 45 67 89</div><div style="font-size:9px;color:rgba(255,255,255,.3)">Lun–Sam · 12h–22h30</div></div>'
    +(hasCart?'':'<div style="padding:5px 12px;border-radius:8px;background:'+color+';font-size:10px;font-weight:700;color:#fff;cursor:pointer;white-space:nowrap">Appeler</div>')
    +'</div>'
    // Adresse
    +'<div style="display:flex;align-items:center;gap:10px">'
    +'<div style="width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;flex-shrink:0">'
    +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
    +'</div>'
    +'<div style="flex:1;min-width:0"><div style="font-size:10.5px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+address+'</div><div style="font-size:9px;color:'+color+';cursor:pointer">Voir sur Maps →</div></div>'
    +'</div>'
    +'</div>'
    +(hasCart?'<div style="padding:10px 14px;border-top:.5px solid rgba(255,255,255,.05)">'
      +'<div style="display:flex;align-items:center;gap:6px;padding:9px 12px;border-radius:10px;background:rgba(255,255,255,.03);border:.5px solid rgba(255,255,255,.05)">'
      +'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'
      +'<span style="font-size:9.5px;color:rgba(255,255,255,.3)">Ajoutez des articles pour commander</span>'
      +'</div></div>'
    :'')
    +'</div>'
    +'</div>';

  // --- Panier sticky ---
  let cartHtml='';
  if(hasCart&&cart.length>0){
    cartHtml='<div style="position:sticky;bottom:0;z-index:10;padding:10px 12px;background:rgba(10,10,10,.95);backdrop-filter:blur(20px);border-top:.5px solid rgba(255,255,255,.1);cursor:pointer;display:flex;align-items:center;justify-content:space-between" onclick="openRestoOrderModal()">'
      +'<div style="display:flex;align-items:center;gap:9px">'
      +'<div style="width:26px;height:26px;border-radius:8px;background:'+color+';display:flex;align-items:center;justify-content:center;font-family:\'Outfit\';font-size:11px;font-weight:800;color:#fff">'+cart.length+'</div>'
      +'<span style="font-size:12px;font-weight:600;color:#fff">Voir mon panier</span>'
      +'</div>'
      +'<div style="display:flex;align-items:center;gap:5px">'
      +'<span style="font-family:\'Outfit\';font-size:14px;font-weight:800;color:#fff">'+total+'\u20ac</span>'
      +'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>'
      +'</div></div>';
  }

  // â”€â”€ Multi-page navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const page=bState.simPage||'accueil';

  // Bottom nav bar
  const BN_SVGS={
    accueil:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    menu:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    reserver:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    infos:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
  };
  const bottomNavBar='<div style="flex-shrink:0;display:flex;background:#0a0a0a;border-top:.5px solid rgba(255,255,255,.09)">'
    +[{id:'accueil',lbl:'Accueil'},{id:'menu',lbl:'Menu'},{id:'reserver',lbl:'R\u00e9server'},{id:'infos',lbl:'Infos'}].map(n=>{
      const a=page===n.id;
      return '<div onclick="setSimPage(\''+n.id+'\')" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:7px 0 9px;gap:3px;cursor:pointer;position:relative">'
        +'<div style="color:'+(a?color:'rgba(255,255,255,.3)')+'">'+BN_SVGS[n.id]+'</div>'
        +'<span style="font-size:8.5px;font-weight:'+(a?'700':'400')+';color:'+(a?color:'rgba(255,255,255,.3)')+'">'+n.lbl+'</span>'
        +(a?'<div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:18px;height:2px;border-radius:0 0 2px 2px;background:'+color+'"></div>':'')
        +'</div>';
    }).join('')
    +'</div>';

  // Cart bar (menu page only)
  const cartBarHTML=(hasCart&&cart.length>0&&page==='menu')?cartHtml:'';

  // â”€â”€ Page: Accueil â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  let pageHTML='';
  if(page==='accueil'){
    const featItems=(MI[bState.cuisine]||MI.autre).filter(i=>i.cat==='plats').slice(0,3);
    const starSvg='<svg width="9" height="9" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
    const reviews=[
      {n:'Sophie M.',r:5,t:'Incroyable\u00a0! Les plats sont d\u00e9licieux et la livraison ultra-rapide. Je recommande \u00e0\u00a0100\u00a0%.'},
      {n:'Thomas D.',r:5,t:'La meilleure adresse du quartier. Qualit\u00e9 irr\u00e9prochable et service au top.'},
      {n:'L\u00e9a V.',r:4,t:'Tr\u00e8s bon rapport qualit\u00e9-prix. Les portions sont g\u00e9n\u00e9reuses. Revenu avec plaisir\u00a0!'},
    ];
    pageHTML=
      '<div style="position:relative;height:260px;overflow:hidden">'
      +'<img src="'+c.hero+'" alt="" loading="lazy" style="width:100%;height:110%;object-fit:cover;object-position:center 35%"/>'
      +'<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.1) 0%,rgba(0,0,0,.2) 30%,rgba(0,0,0,.75) 65%,rgba(0,0,0,.98) 100%)"></div>'
      +'<div style="position:absolute;top:12px;left:12px;display:flex;align-items:center;gap:4px;padding:5px 10px;border-radius:50px;background:rgba(0,0,0,.5);backdrop-filter:blur(12px);border:.5px solid rgba(255,255,255,.15)">'
      +'<span style="font-size:11px">'+c.emoji+'</span>'
      +'<span style="font-size:9px;font-weight:600;color:rgba(255,255,255,.85)">'+c.short+'</span></div>'
      +'<div style="position:absolute;top:12px;right:12px;display:flex;align-items:center;gap:4px;padding:5px 10px;border-radius:50px;background:rgba(0,0,0,.5);backdrop-filter:blur(12px);border:.5px solid rgba(255,255,255,.12)">'
      +'<div style="width:6px;height:6px;border-radius:50%;background:#22c55e;animation:pulse 2s ease infinite"></div>'
      +'<span style="font-size:9px;font-weight:700;color:#22c55e">Ouvert</span></div>'
      +'<div style="position:absolute;bottom:0;left:0;right:0;padding:18px 14px 16px;backdrop-filter:blur(0px)">'
      +'<div style="font-family:\'Outfit\',sans-serif;font-size:24px;font-weight:800;color:#fff;letter-spacing:-.5px;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-shadow:0 2px 12px rgba(0,0,0,.5)">'+label+'</div>'
      +'<div style="display:flex;align-items:center;gap:5px;margin-top:5px">'
      +starSvg+starSvg+starSvg+starSvg+starSvg
      +'<span style="font-size:11px;font-weight:700;color:#fff">4.8</span>'
      +'<span style="font-size:10px;color:rgba(255,255,255,.45)">(218 avis)</span>'
      +(hasCart?'<span style="color:rgba(255,255,255,.2);margin:0 2px">\u00b7</span><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span style="font-size:10px;color:rgba(255,255,255,.45)">25\u201340 min</span>':'')
      +'</div>'
      +(hasCart
        ?'<button onclick="setSimPage(\'menu\')" style="margin-top:13px;width:100%;padding:12px;border-radius:14px;background:'+color+';border:none;font-family:\'Outfit\',sans-serif;font-size:13px;font-weight:700;color:#fff;cursor:pointer;letter-spacing:-.1px;box-shadow:0 4px 20px '+color+'55">Commander maintenant \u2192</button>'
        :'<div style="display:flex;gap:8px;margin-top:13px"><button onclick="setSimPage(\'reserver\')" style="flex:1;padding:12px;border-radius:14px;background:'+color+';border:none;font-family:\'Outfit\',sans-serif;font-size:12px;font-weight:700;color:#fff;cursor:pointer;box-shadow:0 4px 20px '+color+'55">R\u00e9server \u2192</button><button onclick="setSimPage(\'menu\')" style="padding:12px 16px;border-radius:14px;background:rgba(255,255,255,.12);border:.5px solid rgba(255,255,255,.2);backdrop-filter:blur(8px);font-family:\'Outfit\',sans-serif;font-size:12px;font-weight:600;color:#fff;cursor:pointer">Menu</button></div>')
      +'</div></div>'
      // Incontournables
      +'<div style="padding:18px 0 10px">'
      +'<div style="display:flex;align-items:center;justify-content:space-between;padding:0 14px;margin-bottom:12px">'
      +'<div style="font-size:13px;font-weight:700;color:#fff">\u2b50 Nos incontournables</div>'
      +'<div onclick="setSimPage(\'menu\')" style="font-size:10px;color:'+color+';cursor:pointer;font-weight:600;padding:4px 10px;border-radius:20px;background:'+color+'18;border:.5px solid '+color+'30">Tout voir \u2192</div></div>'
      +'<div style="display:flex;gap:10px;padding:0 14px;overflow-x:auto;scrollbar-width:none">'
      +featItems.map(item=>{const sn=item.name.replace(/'/g,"\\'");return(
        '<div style="flex-shrink:0;width:140px;border-radius:16px;overflow:hidden;background:#161616;border:.5px solid rgba(255,255,255,.08);box-shadow:0 4px 20px rgba(0,0,0,.4)">'
        +'<div style="position:relative;height:100px"><img src="'+item.img+'" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"/>'
        +'<div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.55),transparent 55%)"></div>'
        +(hasCart?'<div onclick="addToCart({name:\''+sn+'\',price:\''+item.price+'\',img:\''+item.img+'\'})" style="position:absolute;bottom:7px;right:7px;width:26px;height:26px;border-radius:8px;background:'+color+';display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 2px 8px '+color+'66"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>':'')
        +'</div><div style="padding:9px 10px">'
        +'<div style="font-size:10.5px;font-weight:700;color:#fff;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+item.name+'</div>'
        +'<div style="font-size:13px;font-weight:800;color:'+color+'">'+item.price+'\u20ac</div>'
        +'</div></div>'
      );}).join('')+'</div></div>'
      // Promo livraison (premium)
      +(hasCart?'<div style="margin:4px 14px 14px;padding:13px 14px;border-radius:16px;background:linear-gradient(135deg,'+color+'20,'+color+'08);border:.5px solid '+color+'30;display:flex;align-items:center;gap:12px">'
        +'<div style="width:40px;height:40px;border-radius:12px;background:'+color+'18;border:.5px solid '+color+'30;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">\uD83C\uDF89</div>'
        +'<div><div style="font-size:12px;font-weight:700;color:#fff">Livraison offerte d\u00e8s 25\u20ac</div>'
        +'<div style="font-size:9.5px;color:rgba(255,255,255,.4);margin-top:2px">Commandez en ligne \u00b7 25\u201340 min</div></div></div>':'')
      // Notre histoire
      +'<div style="margin:0 14px 14px;border-radius:18px;overflow:hidden;background:#141414;border:.5px solid rgba(255,255,255,.07);box-shadow:0 4px 24px rgba(0,0,0,.35)">'
      +'<div style="position:relative;height:100px;overflow:hidden">'
      +'<img src="'+c.hero+'" alt="" loading="lazy" style="width:100%;height:150%;object-fit:cover;object-position:center 40%"/>'
      +'<div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,.65),rgba(0,0,0,.3))"></div>'
      +'<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:14px 16px">'
      +'<span style="font-size:8px;font-weight:700;color:rgba(255,255,255,.5);letter-spacing:.12em;text-transform:uppercase;margin-bottom:4px">Notre histoire</span>'
      +'<span style="font-size:14px;font-weight:800;color:#fff;font-family:Outfit,sans-serif;letter-spacing:-.2px">Depuis 2018</span>'
      +'</div></div>'
      +'<div style="padding:12px 14px 14px">'
      +'<div style="font-size:10.5px;color:rgba(255,255,255,.5);line-height:1.65">Nous proposons une cuisine authentique et g\u00e9n\u00e9reuse, pr\u00e9par\u00e9e chaque jour avec les meilleurs produits de saison. Une adresse appr\u00e9ci\u00e9e par plus de 2\u202f000 clients fid\u00e8les.</div>'
      +'<div onclick="sToast(\'\uD83D\uDCD6 Notre histoire depuis 2018\u00a0!\')" style="margin-top:9px;display:inline-flex;align-items:center;gap:4px;font-size:10px;font-weight:600;color:'+color+';cursor:pointer">D\u00e9couvrir notre histoire <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg></div>'
      +'</div></div>'
      // Avis clients
      +'<div style="padding:0 14px 16px">'
      +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">'
      +'<div style="font-size:13px;font-weight:700;color:#fff">\uD83D\uDCAC Avis clients</div>'
      +'<div style="display:flex;align-items:center;gap:4px;padding:3px 8px;border-radius:20px;background:rgba(245,158,11,.1);border:.5px solid rgba(245,158,11,.2)">'
      +'<svg width="9" height="9" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'
      +'<span style="font-size:9px;font-weight:700;color:#f59e0b">4.8 \u00b7 218 avis</span></div></div>'
      +reviews.map((rv,ri)=>(
        '<div style="background:#141414;border:.5px solid rgba(255,255,255,.'+(ri===0?'12':'07')+');border-radius:14px;padding:11px 13px;margin-bottom:8px'+(ri===0?';box-shadow:0 2px 12px rgba(0,0,0,.3)':'')+'">'
        +'<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">'
        +'<div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,'+color+','+color+'aa);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#fff;flex-shrink:0">'+rv.n[0]+'</div>'
        +'<div style="flex:1"><div style="font-size:10.5px;font-weight:700;color:#fff">'+rv.n+'</div>'
        +'<div style="display:flex;align-items:center;gap:3px;margin-top:1px"><div style="display:flex;gap:1px">'+starSvg.repeat(rv.r)+'</div>'
        +'<span style="font-size:8px;color:rgba(255,255,255,.2)">\u00b7 Client v\u00e9rifi\u00e9</span></div></div>'
        +'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.15)" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
        +'</div>'
        +'<div style="font-size:9.5px;color:rgba(255,255,255,.5);line-height:1.6;font-style:italic">\u201c'+rv.t+'\u201d</div>'
        +'</div>'
      )).join('')
      +'</div>';

  // â”€â”€ Page: Reservation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  } else if(page==='reserver'){
    const td=new Date();
    const DNS=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
    const MNS=['jan','f\u00e9v','mars','avr','mai','juin','juil','ao\u00fbt','sep','oct','nov','d\u00e9c'];
    const dpills=[0,1,2,3].map(off=>{
      const d=new Date(td);d.setDate(d.getDate()+off);
      const lbl=off===0?"Aujourd'hui":off===1?'Demain':DNS[d.getDay()]+' '+d.getDate()+' '+MNS[d.getMonth()];
      const sel=off===0;
      return '<div data-sg="res-date" onclick="sPick(this,\'res-date\')" style="flex-shrink:0;padding:8px 14px;border-radius:10px;background:'+(sel?color:'rgba(255,255,255,.06)')+';border:.5px solid '+(sel?color:'rgba(255,255,255,.1)')+';font-size:10px;font-weight:600;color:#fff;cursor:pointer;white-space:nowrap">'  +lbl+'</div>';
    }).join('');
    const times=['12:00','12:30','13:00','13:30','19:00','19:30','20:00','20:30','21:00'];
    const guests=['1','2','3','4','5','6+'];
    pageHTML=
      '<div style="padding:0 0 20px">'
      +'<div style="padding:16px 14px 12px">'
      +'<div style="font-size:16px;font-weight:800;font-family:Outfit,sans-serif;color:#fff;letter-spacing:-.3px;margin-bottom:2px">Reserver une table</div>'
      +'<div style="font-size:11px;color:rgba(255,255,255,.4)">'+label+'</div></div>'
      +'<div style="padding:0 14px;margin-bottom:14px">'
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Date</div>'
      +'<div style="display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;padding-bottom:2px">'+dpills+'</div></div>'
      +'<div style="padding:0 14px;margin-bottom:14px">'
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Heure</div>'
      +'<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px">'
      +times.map((t,i)=>'<div data-sg="res-time" onclick="sPick(this,\'res-time\')" style="padding:9px 0;text-align:center;border-radius:10px;background:'+(i===2?color:'rgba(255,255,255,.06)')+';border:.5px solid '+(i===2?color:'rgba(255,255,255,.08)')+';font-size:11px;font-weight:600;color:#fff;cursor:pointer">'+t+'</div>').join('')
      +'</div></div>'
      +'<div style="padding:0 14px;margin-bottom:14px">'
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Personnes</div>'
      +'<div style="display:flex;gap:7px">'
      +guests.map((g,i)=>'<div data-sg="res-guests" onclick="sPick(this,\'res-guests\')" style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;background:'+(i===1?color:'rgba(255,255,255,.06)')+';border:.5px solid '+(i===1?color:'rgba(255,255,255,.08)')+';font-size:11px;font-weight:700;color:#fff;cursor:pointer">'+g+'</div>').join('')
      +'</div></div>'
      +'<div style="padding:0 14px;margin-bottom:16px">'
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Note (optionnel)</div>'
      +'<div style="height:56px;border-radius:12px;background:rgba(255,255,255,.05);border:.5px solid rgba(255,255,255,.1);padding:10px 12px">'
      +'<div style="font-size:10px;color:rgba(255,255,255,.25)">Allergies, occasion speciale…</div></div></div>'
      +'<div style="padding:0 14px">'
      +'<div onclick="sConfirm(this)" style="padding:13px;border-radius:14px;background:'+color+';text-align:center;cursor:pointer">'
      +'<div style="font-family:Outfit,sans-serif;font-size:14px;font-weight:700;color:#fff">Confirmer la reservation</div>'
      +'<div style="font-size:9.5px;color:rgba(255,255,255,.7);margin-top:2px">Confirmation immediate par SMS</div>'
      +'</div></div></div>';

  // â”€â”€ Page: Infos â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  } else if(page==='infos'){
    const CITY_ADDR=['12 Rue de la Paix, Paris','23 Place Bellecour, Lyon','8 Quai du Port, Marseille','15 Place du Parlement, Bordeaux','42 Grand Place, Lille'];
    const addr=hasMulti?CITY_ADDR[bState.cityIdx]:CITY_ADDR[0];
    const photoItms=(MI[bState.cuisine]||MI.autre).slice(0,3);
    const mLines=Array(7).fill(0).map((_,i)=>'<div style="position:absolute;left:0;right:0;height:.5px;background:rgba(255,255,255,.35);top:'+(14+i*12)+'%"></div>').join('');
    const mCols=Array(9).fill(0).map((_,i)=>'<div style="position:absolute;top:0;bottom:0;width:.5px;background:rgba(255,255,255,.35);left:'+(10+i*10)+'%"></div>').join('');
    pageHTML=
      '<div style="padding:0 0 20px">'
      +'<div style="padding:16px 14px 12px">'
      +'<div style="font-size:16px;font-weight:800;font-family:\'Outfit\',sans-serif;color:#fff;letter-spacing:-.3px;margin-bottom:2px">Infos &amp; Contact</div>'
      +'<div style="font-size:11px;color:rgba(255,255,255,.4)">'+label+'</div></div>'
      // Carte stylisee
      +'<div style="margin:0 14px 14px;height:120px;border-radius:16px;overflow:hidden;background:#0f1a2b;border:.5px solid rgba(255,255,255,.08);position:relative">'
      +'<div style="position:absolute;inset:0;opacity:.2">'+mLines+mCols+'</div>'
      +'<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px">'
      +'<div style="width:36px;height:36px;border-radius:50%;background:'+color+';display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 8px '+color+'28">'
      +'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>'
      +'<div style="padding:4px 12px;border-radius:20px;background:rgba(0,0,0,.75);backdrop-filter:blur(8px)">'
      +'<div style="font-size:9px;font-weight:600;color:#fff">'+addr+'</div></div></div></div>'
      // Infos carte
      +'<div style="margin:0 14px 12px;border-radius:14px;background:#141414;border:.5px solid rgba(255,255,255,.07);overflow:hidden">'
      +'<div style="padding:12px 14px;display:flex;flex-direction:column;gap:10px">'
      +'<div style="display:flex;align-items:center;gap:10px">'
      +'<div style="width:32px;height:32px;border-radius:10px;background:rgba(52,211,153,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0">'
      +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6z"/></svg>'
      +'</div>'
      +'<div style="flex:1"><div style="font-size:11px;font-weight:600;color:#fff">01 23 45 67 89</div><div style="font-size:9px;color:rgba(255,255,255,.3)">Lun\u2013Sam \u00b7 12h\u201322h30</div></div>'
      +'<div onclick="sToast(\'📞 Appel en cours\u2026\')" style="padding:5px 12px;border-radius:8px;background:'+color+';font-size:10px;font-weight:700;color:#fff;cursor:pointer">Appeler</div></div>'
      +'<div style="display:flex;align-items:center;gap:10px;padding-top:8px;border-top:.5px solid rgba(255,255,255,.05)">'
      +'<div style="width:32px;height:32px;border-radius:10px;background:rgba(0,113,227,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0">'
      +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0071E3" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>'
      +'</div>'
      +'<div style="flex:1;min-width:0"><div style="font-size:10.5px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+addr+'</div>'
      +'<div onclick="sToast(\'\uD83D\uDCCD Ouverture de Google Maps…\')" style="font-size:9px;color:'+color+';cursor:pointer">Voir sur Google Maps \u2192</div></div></div>'
      +'<div style="display:flex;align-items:flex-start;gap:10px;padding-top:8px;border-top:.5px solid rgba(255,255,255,.05)">'
      +'<div style="width:32px;height:32px;border-radius:10px;background:rgba(251,191,36,.12);display:flex;align-items:center;justify-content:center;flex-shrink:0">'
      +'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      +'</div>'
      +'<div style="flex:1"><div style="font-size:10.5px;font-weight:600;color:#fff;margin-bottom:5px">Horaires</div>'
      +'<div style="display:grid;grid-template-columns:auto 1fr;gap:2px 10px">'
      +[['Lun\u2013Jeu','12h\u201314h30 / 19h\u201322h'],['Vendredi','12h\u201314h30 / 19h\u201323h'],['Samedi','12h\u201323h00'],['Dimanche','Ferm\u00e9']].map(([j,h])=>'<div style="font-size:8.5px;color:rgba(255,255,255,.4)">'+j+'</div><div style="font-size:8.5px;color:rgba(255,255,255,.6)">'+h+'</div>').join('')
      +'</div></div></div>'
      +'</div></div>'
      // Reseaux sociaux
      +'<div style="margin:0 14px 12px">'
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Nous suivre</div>'
      +'<div style="display:flex;gap:8px">'
      +'<div onclick="sToast(\'\uD83D\uDCF7 Abonn\u00e9(e) \u00e0 notre Instagram !\')" style="flex:1;padding:10px 8px;border-radius:12px;background:#141414;border:.5px solid rgba(255,255,255,.07);text-align:center;cursor:pointer"><div style="font-size:16px;margin-bottom:3px">\uD83D\uDCF7</div><div style="font-size:9px;font-weight:600;color:rgba(255,255,255,.55)">Instagram</div></div>'
      +'<div onclick="sToast(\'\uD83D\uDC4D Page Facebook aim\u00e9e !\')" style="flex:1;padding:10px 8px;border-radius:12px;background:#141414;border:.5px solid rgba(255,255,255,.07);text-align:center;cursor:pointer"><div style="font-size:16px;margin-bottom:3px">\uD83D\uDC4D</div><div style="font-size:9px;font-weight:600;color:rgba(255,255,255,.55)">Facebook</div></div>'
      +'<div onclick="sToast(\'\u2b50 Avis TripAdvisor publi\u00e9 !\')" style="flex:1;padding:10px 8px;border-radius:12px;background:#141414;border:.5px solid rgba(255,255,255,.07);text-align:center;cursor:pointer"><div style="font-size:16px;margin-bottom:3px">\u2b50</div><div style="font-size:9px;font-weight:600;color:rgba(255,255,255,.55)">TripAdvisor</div></div>'
      +'</div></div>'
      // Galerie
      +'<div style="margin:0 14px">'
      +'<div style="font-size:10px;font-weight:700;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">Galerie</div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px">'
      +photoItms.map(item=>'<div style="height:64px;border-radius:10px;overflow:hidden"><img src="'+item.img+'" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"/></div>').join('')
      +'</div></div></div>';

  // â”€â”€ Page: Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  } else {
    pageHTML=packBanner+heroHtml+cityBar+navHtml+menuHtml+infoHtml;
  }

  return '<div class="ss" style="height:100%;display:flex;flex-direction:column;background:#0d0d0d">'
    +'<div style="flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none">'
    +pageHTML
    +'</div>'
    +cartBarHTML
    +bottomNavBar
    +'</div>';
}

function renderSim(){
  const html=buildSimHTML();
  const sI=document.getElementById('sim-iphone');
  const sM=document.getElementById('sim-mac');
  if(sI)sI.innerHTML=html;
  if(sM)sM.innerHTML=html;
  const c=CUISINES.find(x=>x.id===bState.cuisine);
  const urlEl=document.getElementById('mac-url');
  if(urlEl&&c){
    const slug=c.custom?(bState.autreName||'mon-restaurant').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,''):c.label.toLowerCase().replace(/ &amp; /g,'-').replace(/ /g,'-').replace(/[^a-z0-9-]/g,'');
    urlEl.textContent=(bState.previewTab==='admin'?'admin.visioflow.app/'+slug:'visioflow.app/'+slug);
  }
}

/* ===== INIT ===== */
renderBControls();
renderSim();
try { if(typeof window.vfaInit==='function') window.vfaInit(); } catch(e) {}
try { if(typeof formInit!=='undefined') formInit(); } catch(e) {}




/* ===== EXPOSE FONCTIONS GLOBALES POUR ONCLICK ===== */
window.showPage        = typeof showPage        !== 'undefined' ? showPage        : window.showPage;
window.openBuy         = typeof openBuy         !== 'undefined' ? openBuy         : window.openBuy;
window.openBuyFromBuilder = typeof openBuyFromBuilder !== 'undefined' ? openBuyFromBuilder : window.openBuyFromBuilder;
window.openBuyFromPack = typeof openBuyFromPack !== 'undefined' ? openBuyFromPack : window.openBuyFromPack;
window.closeBuy        = typeof closeBuy        !== 'undefined' ? closeBuy        : window.closeBuy;
window.selectPack      = typeof selectPack      !== 'undefined' ? selectPack      : window.selectPack;
window.selMethod       = typeof selMethod       !== 'undefined' ? selMethod       : window.selMethod;
window.selRMethod      = typeof selRMethod      !== 'undefined' ? selRMethod      : window.selRMethod;
window.setCuisine      = typeof setCuisine      !== 'undefined' ? setCuisine      : window.setCuisine;
window.setSimPage      = typeof setSimPage      !== 'undefined' ? setSimPage      : window.setSimPage;
window.setDevice       = typeof setDevice       !== 'undefined' ? setDevice       : window.setDevice;
window.setLayout       = typeof setLayout       !== 'undefined' ? setLayout       : window.setLayout;
window.setPreviewTab   = typeof setPreviewTab   !== 'undefined' ? setPreviewTab   : window.setPreviewTab;
window.doPay           = typeof doPay           !== 'undefined' ? doPay           : window.doPay;
window.confirmRestoOrder = typeof confirmRestoOrder !== 'undefined' ? confirmRestoOrder : window.confirmRestoOrder;
window.formAddCity     = typeof formAddCity     !== 'undefined' ? formAddCity     : window.formAddCity;
window.formAddMenuItem        = typeof formAddMenuItem        !== 'undefined' ? formAddMenuItem        : window.formAddMenuItem;
window.setFormPack            = typeof setFormPack            !== 'undefined' ? setFormPack            : window.setFormPack;
window.setMenuMode            = typeof setMenuMode            !== 'undefined' ? setMenuMode            : window.setMenuMode;
window.handleMenuPhotoUpload  = typeof handleMenuPhotoUpload  !== 'undefined' ? handleMenuPhotoUpload  : window.handleMenuPhotoUpload;
window.goHomePack = function(pack){
  var hf = document.getElementById('home-form');
  if(hf){
    hf.style.display = 'block';
    setTimeout(function(){ hf.scrollIntoView({behavior:'smooth',block:'start'}); }, 80);
  }
  if(window.goToForm) window.goToForm(pack);
};
window.goToForm = function(pack){
  var nav=document.getElementById('mainNav');
  if(nav) nav.classList.remove('light-nav');
  var info={
    essentiel:{name:'Pack Essentiel',price:(typeof PACKS!=='undefined'&&PACKS.essentiel&&PACKS.essentiel.price)||'150€',col:'#6B7280'},
    premium:  {name:'Pack Premium',  price:(typeof PACKS!=='undefined'&&PACKS.premium&&PACKS.premium.price)||'490€',    col:'#0071E3'}
  };
  var p=info[pack]||info.essentiel;
  var dot=document.getElementById('form-pack-dot');
  var nm=document.getElementById('form-pack-name');
  var pr=document.getElementById('form-pack-price');
  if(dot) dot.style.background=p.col;
  if(nm) nm.textContent=p.name;
  if(pr) pr.textContent=p.price;
  if(window.setFormPack) window.setFormPack(pack);
  window._vfPack=pack;
  window.formGoStep(1);
};
window.formGoStep = function(s){
  [0,1,2,3].forEach(function(n){var e=document.getElementById('form-step-'+n);if(e)e.style.display=n===s?'':'none';});
  var pi=document.getElementById('form-pack-info');if(pi)pi.style.display=s===0?'none':'';
  var step=document.getElementById('form-step-'+s);
  if(step){setTimeout(function(){step.scrollIntoView({behavior:'smooth',block:'start'});},50);}
};
window.formSubmit = window.formSubmit || function(){
  var pack=window._vfPack||'essentiel';
  var restoName = (typeof formCities!=='undefined'&&formCities[0]&&formCities[0].name)||'';
  window.location.href='/paiement?pack='+encodeURIComponent(pack)+'&resto='+encodeURIComponent(restoName);
};

window.formInit       = typeof formInit       !== 'undefined' ? formInit       : window.formInit;
window.formGoStep      = typeof formGoStep      !== 'undefined' ? formGoStep      : window.formGoStep;
window.formSubmit      = typeof formSubmit      !== 'undefined' ? formSubmit      : window.formSubmit;
window.renderBControls = typeof renderBControls !== 'undefined' ? renderBControls : window.renderBControls;
window.renderSim       = typeof renderSim       !== 'undefined' ? renderSim       : window.renderSim;
window.setAutreName    = typeof setAutreName    !== 'undefined' ? setAutreName    : window.setAutreName;
window.setColor        = typeof setColor        !== 'undefined' ? setColor        : window.setColor;
window.vfaAddClient    = window.vfaAddClient    || function(){alert('Admin: connecter avec votre backend.');};
window.vfaTab          = window.vfaTab          || function(t){document.querySelectorAll('.vfa-tab').forEach(el=>el.classList.remove('active'));const tab=document.getElementById('vfa-tab-'+t);if(tab)tab.classList.add('active');document.querySelectorAll('.vfa-section').forEach(el=>el.style.display='none');const sec=document.getElementById('vfa-section-'+t);if(sec)sec.style.display='block';};

(function(){

/* ===== 1. INJECT CSS ===== */
const clientCSS = document.createElement('style');
clientCSS.textContent = `
/* â”€â”€ CLIENT AUTH PAGE â”€â”€ */
#page-client-login{background:#0b0d14;min-height:100dvh}
#page-client-login.active{display:flex;align-items:center;justify-content:center}
.cl-container{width:100%;max-width:420px;padding:24px;animation:modalIn .4s cubic-bezier(.25,1,.5,1)}
.cl-card{background:#141724;border:.5px solid rgba(255,255,255,.1);border-radius:24px;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,.4)}
.cl-header{padding:36px 32px 0;text-align:center}
.cl-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--blue),#38bdf8);display:flex;align-items:center;justify-content:center;font-size:24px;margin:0 auto 16px;box-shadow:0 8px 24px rgba(0,113,227,.3)}
.cl-title{font-family:'Fraunces';font-weight:800;font-size:24px;color:#fff;letter-spacing:-.5px;margin-bottom:4px}
.cl-subtitle{font-size:13px;color:rgba(255,255,255,.35);margin-bottom:24px;line-height:1.5}
.cl-tabs{display:flex;background:rgba(255,255,255,.05);border-radius:12px;padding:3px;margin:0 32px 24px}
.cl-tab{flex:1;padding:10px;border:none;background:none;color:rgba(255,255,255,.4);font-size:13px;font-weight:600;cursor:pointer;border-radius:10px;font-family:inherit;transition:all .2s}
.cl-tab.active{background:var(--blue);color:#fff;box-shadow:0 2px 8px rgba(0,113,227,.3)}
.cl-form{padding:0 32px 28px}
.cl-field{margin-bottom:14px}
.cl-field label{display:block;font-size:11px;font-weight:600;color:rgba(255,255,255,.4);margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em}
.cl-field input{width:100%;padding:12px 16px;background:rgba(255,255,255,.06);border:.5px solid rgba(255,255,255,.1);border-radius:12px;color:#fff;font-size:14px;font-family:inherit;outline:none;transition:all .2s}
.cl-field input:focus{border-color:var(--blue);background:rgba(0,113,227,.06);box-shadow:0 0 0 3px rgba(0,113,227,.12)}
.cl-field input::placeholder{color:rgba(255,255,255,.2)}
.cl-submit{width:100%;padding:14px;border:none;border-radius:14px;background:var(--blue);color:#fff;font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;margin-top:6px;display:flex;align-items:center;justify-content:center;gap:8px;box-shadow:0 4px 16px rgba(0,113,227,.3)}
.cl-submit:hover{background:var(--blue-h);transform:translateY(-1px)}
.cl-submit:disabled{opacity:.5;cursor:not-allowed;transform:none}
.cl-error{padding:10px 14px;background:rgba(239,68,68,.12);border:.5px solid rgba(239,68,68,.25);border-radius:10px;font-size:12px;color:#f87171;margin-bottom:14px;display:none;align-items:center;gap:8px}
.cl-error.show{display:flex}
.cl-success{padding:10px 14px;background:rgba(52,211,153,.12);border:.5px solid rgba(52,211,153,.25);border-radius:10px;font-size:12px;color:#34d399;margin-bottom:14px;display:none;align-items:center;gap:8px}
.cl-success.show{display:flex}
.cl-footer{text-align:center;padding:16px 32px;border-top:.5px solid rgba(255,255,255,.06)}
.cl-footer p{font-size:11px;color:rgba(255,255,255,.2)}
.cl-shake{animation:loginShake .4s ease-out}
@keyframes loginShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}

/* â”€â”€ CLIENT NAV BUTTONS â”€â”€ */
.nav-client-area{display:flex;align-items:center;gap:6px}
.nav-client-btn{padding:5px 14px;border-radius:980px;background:none;border:.5px solid var(--bord-md);color:var(--text2);font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;gap:5px}
.nav-client-btn:hover{border-color:var(--blue);color:var(--blue);background:rgba(0,113,227,.05)}
.nav-client-badge{padding:5px 12px;border-radius:980px;background:rgba(52,211,153,.1);border:.5px solid rgba(52,211,153,.2);color:#34d399;font-size:11px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;align-items:center;gap:5px;border:none}
.nav-client-badge:hover{background:rgba(52,211,153,.18)}
.nav-client-logout{padding:5px 10px;border-radius:980px;background:none;border:.5px solid var(--bord-md);color:var(--text3);font-size:10px;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s}
.nav-client-logout:hover{color:#f87171;border-color:rgba(239,68,68,.3)}

/* â”€â”€ MON COMPTE PAGE â”€â”€ */
#page-mon-compte{background:#0b0d14;min-height:100dvh}
.mc-wrap{max-width:700px;margin:0 auto;padding:80px 24px 60px}
.mc-header{display:flex;align-items:center;gap:16px;margin-bottom:32px}
.mc-avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--blue),#38bdf8);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;box-shadow:0 4px 16px rgba(0,113,227,.3)}
.mc-info .mc-user-name{font-family:'Fraunces';font-size:24px;font-weight:800;color:#fff;letter-spacing:-.5px}
.mc-info p{font-size:13px;color:rgba(255,255,255,.35)}
.mc-section{background:#141724;border:.5px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;margin-bottom:18px}
.mc-section-head{padding:18px 22px;border-bottom:.5px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between}
.mc-section-title{font-family:'Fraunces';font-size:16px;font-weight:700;color:#fff;display:flex;align-items:center;gap:8px}
.mc-section-body{padding:16px 22px}
.mc-empty{text-align:center;padding:32px 20px;color:rgba(255,255,255,.3);font-size:13px;line-height:1.6}
.mc-empty-ico{font-size:40px;margin-bottom:12px;opacity:.5}
.mc-cart-item{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:.5px solid rgba(255,255,255,.05)}
.mc-cart-item:last-child{border-bottom:none}
.mc-cart-img{width:48px;height:48px;border-radius:10px;object-fit:cover;flex-shrink:0}
.mc-cart-info{flex:1}
.mc-cart-name{font-size:13px;font-weight:600;color:#e5e7eb}
.mc-cart-desc{font-size:11px;color:rgba(255,255,255,.3);margin-top:2px}
.mc-cart-price{font-family:'Fraunces';font-size:14px;font-weight:800;color:#fff}
.mc-cart-remove{width:28px;height:28px;border-radius:8px;border:none;background:rgba(239,68,68,.1);color:#f87171;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0}
.mc-cart-remove:hover{background:rgba(239,68,68,.2)}
.mc-cart-total{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;border-top:.5px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02)}
.mc-cart-total-label{font-size:14px;font-weight:600;color:rgba(255,255,255,.5)}
.mc-cart-total-value{font-family:'Fraunces';font-size:22px;font-weight:800;color:#fff}
.mc-cart-actions{padding:0 22px 18px;display:flex;gap:10px}
.mc-cart-btn{flex:1;padding:13px;border:none;border-radius:14px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;text-align:center}
.mc-cart-btn.primary{background:var(--blue);color:#fff;box-shadow:0 4px 16px rgba(0,113,227,.3)}
.mc-cart-btn.primary:hover{background:var(--blue-h)}
.mc-cart-btn.ghost{background:rgba(255,255,255,.06);color:rgba(255,255,255,.5);border:.5px solid rgba(255,255,255,.1)}
.mc-cart-btn.ghost:hover{background:rgba(255,255,255,.1);color:#fff}
.mc-stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.mc-stat{text-align:center;padding:14px;background:rgba(255,255,255,.03);border-radius:12px;border:.5px solid rgba(255,255,255,.06)}
.mc-stat-v{font-family:'Fraunces';font-size:20px;font-weight:800;color:#fff}
.mc-stat-l{font-size:10px;color:rgba(255,255,255,.3);margin-top:2px}
.mc-cart-count-nav{width:16px;height:16px;border-radius:50%;background:#ef4444;color:#fff;font-size:9px;font-weight:800;display:flex;align-items:center;justify-content:center;line-height:1}
`;
document.head.appendChild(clientCSS);

/* ===== 2. STORAGE HELPERS ===== */
function getClientAccounts(){
  try{ return JSON.parse(localStorage.getItem('vf_clients')||'[]'); }catch(e){ return []; }
}
function saveClientAccounts(accounts){
  try{ localStorage.setItem('vf_clients', JSON.stringify(accounts)); }catch(e){}
}
function getClientCart(email){
  try{ return JSON.parse(localStorage.getItem('vf_cart_'+email)||'[]'); }catch(e){ return []; }
}
function saveClientCart(email, cart){
  try{ localStorage.setItem('vf_cart_'+email, JSON.stringify(cart)); }catch(e){}
}
function getClientOrders(email){
  try{ return JSON.parse(localStorage.getItem('vf_orders_'+email)||'[]'); }catch(e){ return []; }
}
function saveClientOrders(email, orders){
  try{ localStorage.setItem('vf_orders_'+email, JSON.stringify(orders)); }catch(e){}
}

/* ===== 3. CLIENT STATE ===== */
let clientUser = null; // {name, email, password}
// Try to restore session
try{
  const saved = localStorage.getItem('vf_client_session');
  if(saved) clientUser = JSON.parse(saved);
}catch(e){}

/* ===== 4. CREATE CLIENT LOGIN PAGE ===== */
const clientLoginPage = document.createElement('div');
clientLoginPage.className = 'page';
clientLoginPage.id = 'page-client-login';
clientLoginPage.innerHTML = `
  <div class="cl-container">
    <div class="cl-card">
      <div class="cl-header">
        <div class="cl-avatar">\uD83D\uDC64</div>
        <div class="cl-title">Mon Compte</div>
        <div class="cl-subtitle">Connectez-vous pour retrouver votre panier<br/>et passer commande plus rapidement.</div>
      </div>
      <div class="cl-tabs">
        <button class="cl-tab active" id="cl-tab-login" onclick="switchClientTab('login')">Connexion</button>
        <button class="cl-tab" id="cl-tab-register" onclick="switchClientTab('register')">Inscription</button>
      </div>
      <!-- LOGIN -->
      <div class="cl-form" id="cl-login-form">
        <div class="cl-error" id="cl-login-error">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <span id="cl-login-error-txt"></span>
        </div>
        <div class="cl-field">
          <label>Email</label>
          <input type="email" id="cl-log-email" placeholder="votre@email.com" onkeydown="if(event.key==='Enter')doClientLogin()"/>
        </div>
        <div class="cl-field">
          <label>Mot de passe</label>
          <div style="position:relative"><input type="password" id="cl-log-pw" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" onkeydown="if(event.key==='Enter')doClientLogin()" style="width:100%;box-sizing:border-box;padding-right:44px"/><button type="button" onclick="var i=this.parentElement.querySelector('input');if(i){var s=i.type==='password';i.type=s?'text':'password';this.textContent=s?'🙈':'👁️'}" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;line-height:1;z-index:2;padding:4px">\ud83d\udc41\ufe0f</button></div>
        </div>
        <button class="cl-submit" onclick="doClientLogin()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          Se connecter
        </button>
      </div>
      <!-- REGISTER -->
      <div class="cl-form" id="cl-register-form" style="display:none">
        <div class="cl-error" id="cl-reg-error">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <span id="cl-reg-error-txt"></span>
        </div>
        <div class="cl-success" id="cl-reg-success">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
          <span>Compte cr\u00e9\u00e9 ! Connectez-vous maintenant.</span>
        </div>
        <div class="cl-field">
          <label>Votre nom</label>
          <input type="text" id="cl-reg-name" placeholder="Pr\u00e9nom Nom" onkeydown="if(event.key==='Enter')doClientRegister()"/>
        </div>
        <div class="cl-field">
          <label>Email</label>
          <input type="email" id="cl-reg-email" placeholder="votre@email.com" onkeydown="if(event.key==='Enter')doClientRegister()"/>
        </div>
        <div class="cl-field">
          <label>Mot de passe <span style="color:rgba(255,255,255,.2)">(min. 6 caract.)</span></label>
          <div style="position:relative"><input type="password" id="cl-reg-pw" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" onkeydown="if(event.key==='Enter')doClientRegister()" style="width:100%;box-sizing:border-box;padding-right:44px"/><button type="button" onclick="var i=this.parentElement.querySelector('input');if(i){var s=i.type==='password';i.type=s?'text':'password';this.textContent=s?'🙈':'👁️'}" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;line-height:1;z-index:2;padding:4px">\ud83d\udc41\ufe0f</button></div>
        </div>
        <div class="cl-field">
          <label>Confirmer</label>
          <div style="position:relative"><input type="password" id="cl-reg-pw2" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" onkeydown="if(event.key==='Enter')doClientRegister()" style="width:100%;box-sizing:border-box;padding-right:44px"/><button type="button" onclick="var i=this.parentElement.querySelector('input');if(i){var s=i.type==='password';i.type=s?'text':'password';this.textContent=s?'🙈':'👁️'}" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;line-height:1;z-index:2;padding:4px">\ud83d\udc41\ufe0f</button></div>
        </div>
        <button class="cl-submit" onclick="doClientRegister()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          Cr\u00e9er mon compte
        </button>
      </div>
      <div class="cl-footer">
        <p>Vos donn\u00e9es sont stock\u00e9es localement sur votre appareil.</p>
      </div>
    </div>
  </div>
`;
const navEl = document.getElementById('mainNav');
navEl.parentNode.insertBefore(clientLoginPage, navEl);

/* ===== 5. CREATE MON COMPTE PAGE ===== */
const monComptePage = document.createElement('div');
monComptePage.className = 'page';
monComptePage.id = 'page-mon-compte';
monComptePage.innerHTML = '<div class="mc-wrap" id="mc-content"></div>';
navEl.parentNode.insertBefore(monComptePage, navEl);

/* ===== 6. ADD CLIENT NAV BUTTONS ===== */
const clientNav = document.createElement('div');
clientNav.className = 'nav-client-area';
clientNav.id = 'nav-client-area';
clientNav.innerHTML = `
  <button class="nav-client-btn" id="nav-client-login-btn" onclick="showPage('client-login')">
    \uD83D\uDC64 Mon Compte
  </button>
  <div id="nav-client-logged" style="display:none">
    <button class="nav-client-badge" id="nav-client-name-btn" onclick="showPage('mon-compte')">
      <span id="nav-client-name-txt">Mon Compte</span>
      <span class="mc-cart-count-nav" id="nav-cart-count" style="display:none">0</span>
    </button>
    <button class="nav-client-logout" onclick="doClientLogout()">Quitter</button>
  </div>
`;
// Insert before any existing auth div
const existingAuth = document.getElementById('nav-auth');
if(existingAuth) navEl.insertBefore(clientNav, existingAuth);
else navEl.appendChild(clientNav);

/* ===== 7. AUTH FUNCTIONS ===== */
window.switchClientTab = function(tab){
  document.getElementById('cl-tab-login').className = 'cl-tab'+(tab==='login'?' active':'');
  document.getElementById('cl-tab-register').className = 'cl-tab'+(tab==='register'?' active':'');
  document.getElementById('cl-login-form').style.display = tab==='login'?'':'none';
  document.getElementById('cl-register-form').style.display = tab==='register'?'':'none';
  document.getElementById('cl-login-error').classList.remove('show');
  document.getElementById('cl-reg-error').classList.remove('show');
  document.getElementById('cl-reg-success').classList.remove('show');
};


window.doClientLogin = function(){
  const email = document.getElementById('cl-log-email').value.trim().toLowerCase();
  const pw = document.getElementById('cl-log-pw').value;
  const err = document.getElementById('cl-login-error');
  const errT = document.getElementById('cl-login-error-txt');
  const card = document.querySelector('#page-client-login .cl-card');
  err.classList.remove('show');
  if(!email||!pw){ errT.textContent='Veuillez remplir tous les champs.'; err.classList.add('show'); card.classList.add('cl-shake'); setTimeout(()=>card.classList.remove('cl-shake'),400); return; }
  const accounts = getClientAccounts();
  const user = accounts.find(a=>a.email===email && a.password===pw);
  if(!user){ errT.textContent='Email ou mot de passe incorrect.'; err.classList.add('show'); card.classList.add('cl-shake'); setTimeout(()=>card.classList.remove('cl-shake'),400); return; }
  // Success
  clientUser = {...user};
  try{ localStorage.setItem('vf_client_session', JSON.stringify(clientUser)); }catch(e){}
  // Restore saved cart into bState
  const savedCart = getClientCart(clientUser.email);
  if(savedCart.length > 0 && typeof bState !== 'undefined'){
    bState.cart = savedCart;
    if(typeof renderSim === 'function') renderSim();
  }
  updateClientUI();
  showPage('mon-compte');
};

window.doClientRegister = function(){
  const name = document.getElementById('cl-reg-name').value.trim();
  const email = document.getElementById('cl-reg-email').value.trim().toLowerCase();
  const pw = document.getElementById('cl-reg-pw').value;
  const pw2 = document.getElementById('cl-reg-pw2').value;
  const err = document.getElementById('cl-reg-error');
  const errT = document.getElementById('cl-reg-error-txt');
  const suc = document.getElementById('cl-reg-success');
  err.classList.remove('show'); suc.classList.remove('show');
  if(!name||!email||!pw||!pw2){ errT.textContent='Veuillez remplir tous les champs.'; err.classList.add('show'); return; }
  if(pw.length<6){ errT.textContent='Mot de passe : 6 caract\u00e8res minimum.'; err.classList.add('show'); return; }
  if(pw!==pw2){ errT.textContent='Les mots de passe ne correspondent pas.'; err.classList.add('show'); return; }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ errT.textContent='Email invalide.'; err.classList.add('show'); return; }
  const accounts = getClientAccounts();
  if(accounts.find(a=>a.email===email)){ errT.textContent='Un compte existe d\u00e9j\u00e0 avec cet email.'; err.classList.add('show'); return; }
  accounts.push({name, email, password:pw, createdAt:new Date().toLocaleDateString('fr-FR'), verified:false});
  saveClientAccounts(accounts);
  // Envoyer le code de vérification
  fetch('/api/auth/send-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).catch(function(){});
  // Afficher la modale de vérification
  document.getElementById('cl-reg-name').value='';
  document.getElementById('cl-reg-email').value='';
  document.getElementById('cl-reg-pw').value='';
  document.getElementById('cl-reg-pw2').value='';
  showVerificationModal(email, name);
};

function showVerificationModal(email, name) {
  var existing = document.getElementById('vf-verif-modal');
  if(existing) existing.remove();
  var modal = document.createElement('div');
  modal.id = 'vf-verif-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML = `
    <div style="background:#141724;border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:36px 32px;max-width:400px;width:100%;box-shadow:0 40px 80px rgba(0,0,0,.5)">
      <div style="text-align:center;margin-bottom:24px">
        <div style="font-size:36px;margin-bottom:10px">🔐</div>
        <div style="font-family:Outfit,sans-serif;font-size:22px;font-weight:800;color:#fff;margin-bottom:6px">Vérifiez votre email</div>
        <div style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.6">Un code à 6 chiffres a été envoyé à<br><strong style="color:#60a5fa">${email}</strong></div>
      </div>
      <div id="vf-verif-error" style="display:none;background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:10px 14px;font-size:12px;color:#f87171;margin-bottom:14px"></div>
      <input id="vf-verif-code" type="text" inputmode="numeric" maxlength="6" placeholder="000000"
        style="width:100%;box-sizing:border-box;background:#1a2035;border:1px solid rgba(255,255,255,.18);border-radius:12px;padding:14px 16px;color:#fff;font-size:28px;font-weight:700;letter-spacing:10px;text-align:center;font-family:monospace;outline:none;margin-bottom:16px;color-scheme:dark"
        oninput="this.value=this.value.replace(/\\D/g,'').slice(0,6)"/>
      <button onclick="window.submitVerifCode('${email}','${name}')"
        style="width:100%;padding:14px;border:none;border-radius:14px;background:#0071E3;color:#fff;font-size:15px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;margin-bottom:12px">
        Confirmer →
      </button>
      <div style="text-align:center">
        <button id="vf-verif-resend" onclick="window.resendVerifCode('${email}')"
          style="background:none;border:none;color:#60a5fa;font-size:13px;cursor:pointer;font-family:Inter,sans-serif">
          Renvoyer le code
        </button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  setTimeout(function(){ var i=document.getElementById('vf-verif-code'); if(i) i.focus(); }, 100);
}

window.submitVerifCode = async function(email, name) {
  var codeEl = document.getElementById('vf-verif-code');
  var errEl  = document.getElementById('vf-verif-error');
  var code   = codeEl ? codeEl.value.trim() : '';
  if(code.length < 6){ if(errEl){ errEl.textContent='Entrez le code à 6 chiffres.'; errEl.style.display='block'; } return; }
  if(errEl) errEl.style.display='none';
  try {
    var r = await fetch('/api/auth/verify-code', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ email, code }),
    });
    var data = await r.json();
    if(!r.ok){ if(errEl){ errEl.textContent = data.error || 'Code invalide.'; errEl.style.display='block'; } return; }
    // Marquer le compte comme vérifié dans localStorage
    var accounts = getClientAccounts();
    var acc = accounts.find(function(a){ return a.email===email; });
    if(acc){ acc.verified=true; saveClientAccounts(accounts); }
    // Connecter l'utilisateur
    clientUser = { name: name||data.name||'', email: email };
    try{ localStorage.setItem('vf_client_session', JSON.stringify(clientUser)); }catch(e){}
    var modal = document.getElementById('vf-verif-modal');
    if(modal) modal.remove();
    updateClientUI();
    showPage('mon-compte');
  } catch(e) {
    if(errEl){ errEl.textContent='Erreur réseau. Réessayez.'; errEl.style.display='block'; }
  }
};

window.resendVerifCode = async function(email) {
  var btn = document.getElementById('vf-verif-resend');
  if(btn){ btn.disabled=true; btn.style.color='rgba(255,255,255,.2)'; }
  await fetch('/api/auth/send-verification', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ email }),
  }).catch(function(){});
  var countdown = 30;
  var interval = setInterval(function(){
    countdown--;
    if(btn) btn.textContent = 'Renvoyer dans '+countdown+'s';
    if(countdown <= 0){
      clearInterval(interval);
      if(btn){ btn.textContent='Renvoyer le code'; btn.disabled=false; btn.style.color='#60a5fa'; }
    }
  }, 1000);
};

window.doClientLogout = function(){
  // Save current cart before logout
  if(clientUser && typeof bState!=='undefined' && bState.cart.length>0){
    saveClientCart(clientUser.email, bState.cart);
  }
  clientUser = null;
  try{ localStorage.removeItem('vf_client_session'); }catch(e){}
  updateClientUI();
  showPage('accueil');
};

/* ===== 8. CART SYNC ===== */
// Override addToCart to auto-save
const _origAddToCart = window.addToCart;
window.addToCart = function(item){
  if(_origAddToCart) _origAddToCart(item);
  else if(typeof bState!=='undefined'){ bState.cart.push(item); if(typeof renderSim==='function') renderSim(); }
  // Save to localStorage if logged in
  if(clientUser && typeof bState!=='undefined'){
    saveClientCart(clientUser.email, bState.cart);
  }
  updateCartBadge();
};

// Also sync when restaurant order modal confirms
const _origConfirmResto = window.confirmRestoOrder;
window.confirmRestoOrder = function(){
  if(_origConfirmResto) _origConfirmResto();
  // After order, save the order to history and clear saved cart
  if(clientUser){
    const orders = getClientOrders(clientUser.email);
    orders.unshift({
      id:'CMD-'+Date.now().toString(36).toUpperCase(),
      items: typeof bState!=='undefined' ? [...bState.cart] : [],
      total: typeof bState!=='undefined' ? bState.cart.reduce((s,i)=>s+parseFloat(i.price),0).toFixed(2) : '0',
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})
    });
    saveClientOrders(clientUser.email, orders);
    saveClientCart(clientUser.email, []);
  }
  updateCartBadge();
};

/* ===== 9. MON COMPTE RENDER ===== */
function renderMonCompte(){
  const el = document.getElementById('mc-content');
  if(!el || !clientUser) return;
  const cart = getClientCart(clientUser.email);
  const orders = getClientOrders(clientUser.email);
  const total = cart.reduce((s,i)=>s+parseFloat(i.price),0).toFixed(2);
  // Charger les projets VisioFlow en async
  loadClientProjects();

  let cartItemsHTML = '';
  if(cart.length === 0){
    cartItemsHTML = '<div class="mc-empty"><div class="mc-empty-ico">\uD83D\uDED2</div>Votre panier est vide.<br/>Ajoutez des articles depuis le Builder pour les retrouver ici.</div>';
  } else {
    cartItemsHTML = cart.map((item,i)=>`
      <div class="mc-cart-item">
        <img class="mc-cart-img" src="${item.img}" alt=""/>
        <div class="mc-cart-info">
          <div class="mc-cart-name">${item.name}</div>
        </div>
        <div class="mc-cart-price">${item.price}\u20ac</div>
        <button class="mc-cart-remove" onclick="removeClientCartItem(${i})">\u00d7</button>
      </div>
    `).join('');
  }

  let ordersHTML = '';
  if(orders.length === 0){
    ordersHTML = '<div class="mc-empty"><div class="mc-empty-ico">\uD83D\uDCE6</div>Aucune commande pour le moment.</div>';
  } else {
    ordersHTML = orders.slice(0,5).map(o=>`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:.5px solid rgba(255,255,255,.05)">
        <div>
          <div style="font-size:12px;font-weight:600;color:#e5e7eb">${o.id}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.3)">${o.date} \u00e0 ${o.time} \u2022 ${o.items.length} article${o.items.length>1?'s':''}</div>
        </div>
        <div style="font-family:'Fraunces';font-size:14px;font-weight:800;color:#fff">${o.total}\u20ac</div>
      </div>
    `).join('');
  }

  el.innerHTML = `
    <div class="mc-header">
      <div class="mc-avatar">\uD83D\uDC64</div>
      <div class="mc-info">
        <div class="mc-user-name">${clientUser.name}</div>
        <p>${clientUser.email}</p>
      </div>
    </div>

    <div class="mc-section" id="mc-projects-section">
      <div class="mc-section-head">
        <div class="mc-section-title">\uD83C\uDF10 Mes sites command\u00E9s</div>
      </div>
      <div class="mc-section-body" id="mc-projects-body">
        <div class="mc-empty" style="padding:20px 0"><div style="font-size:20px;margin-bottom:6px">\u23F3</div>Chargement\u2026</div>
      </div>
    </div>

    <div class="mc-section">
      <div class="mc-section-head">
        <div class="mc-section-title">\uD83D\uDED2 Mon Panier <span style="font-size:12px;font-weight:400;color:rgba(255,255,255,.3);margin-left:4px">${cart.length} article${cart.length!==1?'s':''}</span></div>
      </div>
      <div class="mc-section-body" style="padding:${cart.length?'8px 22px':'0'}">${cartItemsHTML}</div>
      ${cart.length ? `
        <div class="mc-cart-total">
          <span class="mc-cart-total-label">Total</span>
          <span class="mc-cart-total-value">${total}\u20ac</span>
        </div>
        <div class="mc-cart-actions">
          <button class="mc-cart-btn ghost" onclick="clearClientCart()">Vider le panier</button>
          <button class="mc-cart-btn primary" onclick="loadCartAndGo()">Commander \u2192</button>
        </div>
      ` : ''}
    </div>

    <div class="mc-section">
      <div class="mc-section-head">
        <div class="mc-section-title">\uD83D\uDCE6 Mes Commandes</div>
      </div>
      <div class="mc-section-body">${ordersHTML}</div>
    </div>

    <div class="mc-section">
      <div class="mc-section-head">
        <div class="mc-section-title">\u2699\uFE0F Mon Compte</div>
      </div>
      <div class="mc-section-body">
        <div class="mc-stat-row">
          <div class="mc-stat"><div class="mc-stat-v">${cart.length}</div><div class="mc-stat-l">Dans le panier</div></div>
          <div class="mc-stat"><div class="mc-stat-v">${orders.length}</div><div class="mc-stat-l">Commandes</div></div>
          <div class="mc-stat"><div class="mc-stat-v">${clientUser.createdAt||'--'}</div><div class="mc-stat-l">Membre depuis</div></div>
        </div>
        <button class="mc-cart-btn ghost" style="width:100%;margin-top:16px" onclick="doClientLogout()">Se d\u00e9connecter</button>
      </div>
    </div>
  `;
}

/* ===== 10. CART ACTIONS ===== */
var _clientProjectsCache = [];

async function loadClientProjects(){
  var container = document.getElementById('mc-projects-body');
  if(!container || !clientUser) return;
  try {
    var r = await fetch('/api/public/my-projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: clientUser.email }),
    });
    var data = await r.json();
    var projects = data.projects || [];
    _clientProjectsCache = projects;

    var STATUS = {
      new:       { label: 'Commande reçue',  color: '#0071E3', step: 1 },
      viewed:    { label: 'Dossier en cours', color: '#f59e0b', step: 2 },
      contacted: { label: 'En production',   color: '#a855f7', step: 3 },
      completed: { label: 'Site livré ✓',    color: '#10b981', step: 4 },
    };
    var STEPS = ['Commande reçue', 'Dossier en cours', 'En production', 'Site livré'];

    if(projects.length === 0){
      container.innerHTML = '<div class="mc-empty"><div style="font-size:20px;margin-bottom:6px">🌐</div>Aucun site commandé pour le moment.<br/><span style="font-size:11px;color:rgba(255,255,255,.25)">Votre commande apparaîtra ici après le paiement.</span></div>';
      return;
    }

    container.innerHTML = projects.map(function(p, idx){
      var s = STATUS[p.status] || STATUS.new;
      var packLabel = p.pack === 'premium' ? 'Pack Premium' : 'Pack Essentiel';
      var date = p.createdAt ? new Date(p.createdAt).toLocaleDateString('fr-FR') : '';
      var stepsHtml = STEPS.map(function(lbl, i){
        var done = (i + 1) <= s.step;
        return '<div style="display:flex;align-items:center;gap:5px;flex:1;min-width:0">'
          + '<div style="width:18px;height:18px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;'
          + (done ? 'background:'+s.color+';color:#fff' : 'background:rgba(255,255,255,.07);color:rgba(255,255,255,.2)')
          + '">' + (done ? '✓' : (i+1)) + '</div>'
          + '<div style="font-size:10px;color:'+(done?'rgba(255,255,255,.65)':'rgba(255,255,255,.18)')+';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + lbl + '</div>'
          + (i < STEPS.length - 1 ? '<div style="flex:1;height:1px;background:'+(done&&s.step>i+1?s.color:'rgba(255,255,255,.07)')+';min-width:4px"></div>' : '')
          + '</div>';
      }).join('');

      return '<div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:18px 20px;margin-bottom:12px">'
        + '<div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;gap:10px">'
        +   '<div style="min-width:0">'
        +     '<div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:3px">' + (p.siteName || 'Site web') + '</div>'
        +     '<div style="font-size:11px;color:rgba(255,255,255,.3)">' + packLabel + (date ? ' · ' + date : '') + '</div>'
        +   '</div>'
        +   '<div style="padding:4px 10px;border-radius:980px;font-size:11px;font-weight:700;background:'+s.color+'22;color:'+s.color+';white-space:nowrap;flex-shrink:0">' + s.label + '</div>'
        + '</div>'
        + '<div style="display:flex;align-items:center;gap:3px;overflow:hidden;margin-bottom:14px">' + stepsHtml + '</div>'
        + '<button onclick="window.showProjectModal('+idx+')" style="width:100%;padding:9px 14px;border-radius:10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.75);font-size:12px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px">'
        +   '📋 Voir mon projet'
        + '</button>'
        + '</div>';
    }).join('');
  } catch(e) {
    var c2 = document.getElementById('mc-projects-body');
    if(c2) c2.innerHTML = '<div class="mc-empty">Impossible de charger vos projets. Réessayez plus tard.</div>';
  }
}

window.showProjectModal = function(idx) {
  var p = _clientProjectsCache[idx];
  if(!p) return;

  var STATUS = {
    new:       { label: 'Commande reçue',  color: '#0071E3' },
    viewed:    { label: 'Dossier en cours', color: '#f59e0b' },
    contacted: { label: 'En production',   color: '#a855f7' },
    completed: { label: 'Site livré ✓',    color: '#10b981' },
  };
  var s = STATUS[p.status] || STATUS.new;
  var packLabel = p.pack === 'premium' ? 'Pack Premium' : 'Pack Essentiel';
  var date = p.createdAt ? new Date(p.createdAt).toLocaleDateString('fr-FR') : '';

  function row(icon, label, val) {
    if(!val) return '';
    return '<div style="display:flex;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)">'
      + '<div style="font-size:14px;flex-shrink:0;width:20px;text-align:center">'+icon+'</div>'
      + '<div style="flex:1;min-width:0">'
      +   '<div style="font-size:10px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.05em;margin-bottom:2px">'+label+'</div>'
      +   '<div style="font-size:13px;color:rgba(255,255,255,.85);word-break:break-word">'+val+'</div>'
      + '</div>'
      + '</div>';
  }

  // Menu items
  var menuHtml = '';
  if(p.menuCardPhotoUrl) {
    menuHtml = '<div style="margin-top:4px"><img src="'+p.menuCardPhotoUrl+'" style="max-width:100%;border-radius:8px;border:1px solid rgba(255,255,255,.08)"/></div>';
  } else if(p.menuItems && p.menuItems.length) {
    menuHtml = '<div style="margin-top:4px;display:flex;flex-direction:column;gap:4px">'
      + p.menuItems.map(function(m){
          return '<div style="display:flex;justify-content:space-between;font-size:12px;color:rgba(255,255,255,.7);padding:4px 8px;background:rgba(255,255,255,.04);border-radius:6px">'
            + '<span>'+(m.category ? '<span style="color:rgba(255,255,255,.3);margin-right:6px">'+m.category+'</span>' : '')+m.name+'</span>'
            + '<span style="font-weight:600;color:#60a5fa">'+(m.price ? m.price+'€' : '')+'</span>'
            + '</div>';
        }).join('')
      + '</div>';
  }

  // Réseaux sociaux
  var socials = [p.instagram&&('Instagram: @'+p.instagram), p.facebook&&('Facebook: '+p.facebook), p.tiktok&&('TikTok: @'+p.tiktok), p.website&&p.website].filter(Boolean).join('<br/>');

  // Livraison
  var delivery = [p.ubereatsUrl&&'Uber Eats', p.deliverooUrl&&'Deliveroo', p.justEatUrl&&'Just Eat'].filter(Boolean).join(', ');

  var existing = document.getElementById('vf-project-modal');
  if(existing) existing.remove();
  var modal = document.createElement('div');
  modal.id = 'vf-project-modal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.75);backdrop-filter:blur(8px);display:flex;align-items:flex-start;justify-content:center;padding:20px 16px;overflow-y:auto';
  modal.onclick = function(e){ if(e.target===modal) modal.remove(); };
  modal.innerHTML = '<div style="background:#141724;border:1px solid rgba(255,255,255,.1);border-radius:20px;width:100%;max-width:520px;overflow:hidden;margin:auto">'
    // Header
    + '<div style="background:linear-gradient(135deg,rgba(0,113,227,.15),rgba(168,85,247,.1));padding:24px;border-bottom:1px solid rgba(255,255,255,.07)">'
    +   '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px">'
    +     '<div>'
    +       '<div style="font-size:18px;font-weight:800;color:#fff;margin-bottom:4px">' + (p.siteName || 'Mon site') + '</div>'
    +       '<div style="font-size:12px;color:rgba(255,255,255,.4)">' + packLabel + (date ? ' · Commandé le ' + date : '') + '</div>'
    +     '</div>'
    +     '<button onclick="document.getElementById(\'vf-project-modal\').remove()" style="background:rgba(255,255,255,.08);border:none;color:rgba(255,255,255,.5);width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;flex-shrink:0;display:flex;align-items:center;justify-content:center">×</button>'
    +   '</div>'
    +   '<div style="margin-top:14px;display:inline-flex;padding:5px 12px;border-radius:980px;font-size:12px;font-weight:700;background:'+s.color+'22;color:'+s.color+'">'+s.label+'</div>'
    + '</div>'
    // Body
    + '<div style="padding:20px 24px;display:flex;flex-direction:column;gap:2px">'
    +   '<div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.25);text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px">Votre commande</div>'
    +   row('📦', 'Pack', packLabel)
    +   row('🍽️', 'Type de cuisine', p.cuisine)
    +   row('📍', 'Adresse', p.address)
    +   row('📞', 'Téléphone', p.phone)
    +   row('🎨', 'Couleur principale', p.color ? '<span style="display:inline-block;width:14px;height:14px;border-radius:3px;background:'+p.color+';vertical-align:middle;margin-right:6px"></span>'+p.color : '')
    +   row('📐', 'Mise en page menu', p.layout === 'grille' ? 'Grille de cartes' : p.layout === 'liste' ? 'Liste élégante' : p.layout)
    +   (delivery ? row('🛵', 'Livraison', delivery) : '')
    +   (socials ? row('🔗', 'Réseaux sociaux', socials) : '')
    +   (p.notes || p.story ? row('📝', 'Remarques', (p.notes||p.story)) : '')
    +   '<div style="font-size:11px;font-weight:700;color:rgba(255,255,255,.25);text-transform:uppercase;letter-spacing:.08em;margin-top:14px;margin-bottom:6px">Menu / Carte</div>'
    +   (p.menuCardPhotoUrl
        ? '<div>'+menuHtml+'</div>'
        : (p.menuItems && p.menuItems.length
           ? menuHtml
           : '<div style="font-size:12px;color:rgba(255,255,255,.25);padding:8px 0">Aucun menu fourni</div>'
          )
       )
    + '</div>'
    // Footer
    + '<div style="padding:16px 24px;border-top:1px solid rgba(255,255,255,.07)">'
    +   '<button onclick="document.getElementById(\'vf-project-modal\').remove()" style="width:100%;padding:11px;border-radius:10px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.6);font-size:13px;font-weight:600;cursor:pointer;font-family:inherit">Fermer</button>'
    + '</div>'
    + '</div>';
  document.body.appendChild(modal);
};

window.removeClientCartItem = function(idx){
  if(!clientUser) return;
  const cart = getClientCart(clientUser.email);
  cart.splice(idx,1);
  saveClientCart(clientUser.email, cart);
  // Sync with bState
  if(typeof bState!=='undefined'){ bState.cart = cart; if(typeof renderSim==='function') renderSim(); }
  updateCartBadge();
  renderMonCompte();
};

window.clearClientCart = function(){
  if(!clientUser) return;
  saveClientCart(clientUser.email, []);
  if(typeof bState!=='undefined'){ bState.cart = []; if(typeof renderSim==='function') renderSim(); }
  updateCartBadge();
  renderMonCompte();
};

window.loadCartAndGo = function(){
  if(!clientUser) return;
  const cart = getClientCart(clientUser.email);
  if(typeof bState!=='undefined'){
    bState.cart = cart;
    if(typeof renderSim==='function') renderSim();
  }
  showPage('builder');
  // Open order modal after a short delay
  setTimeout(()=>{ if(typeof openRestoOrderModal==='function' && cart.length>0) openRestoOrderModal(); }, 400);
};

/* ===== 11. UI UPDATES ===== */
function updateCartBadge(){
  const badge = document.getElementById('nav-cart-count');
  if(!badge) return;
  if(clientUser){
    const cart = getClientCart(clientUser.email);
    if(cart.length > 0){ badge.style.display='flex'; badge.textContent=cart.length; }
    else { badge.style.display='none'; }
  } else {
    badge.style.display='none';
  }
}

function updateClientUI(){
  const loginBtn = document.getElementById('nav-client-login-btn');
  const loggedArea = document.getElementById('nav-client-logged');
  const nameTxt = document.getElementById('nav-client-name-txt');
  if(clientUser){
    loginBtn.style.display='none';
    loggedArea.style.display='flex';
    nameTxt.textContent=clientUser.name;
  } else {
    loginBtn.style.display='';
    loggedArea.style.display='none';
  }
  updateCartBadge();
}

/* ===== 12. OVERRIDE showPage ===== */
const _prevShowPage = window.showPage;
window.showPage = function(id, preselect){
  if(id==='client-login'){
    if(clientUser){ id='mon-compte'; } // Already logged in, go to account
    else {
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById('page-client-login').classList.add('active');
      document.querySelectorAll('.nl').forEach(b=>b.classList.remove('on'));
      document.getElementById('mainNav').classList.toggle('light-nav',false);
      window.scrollTo({top:0,behavior:'smooth'});
      setTimeout(()=>{const f=document.getElementById('cl-log-email');if(f)f.focus();},200);
      return;
    }
  }
  if(id==='mon-compte'){
    if(!clientUser){ showPage('client-login'); return; }
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    document.getElementById('page-mon-compte').classList.add('active');
    document.querySelectorAll('.nl').forEach(b=>b.classList.remove('on'));
    document.getElementById('mainNav').classList.toggle('light-nav',false);
    window.scrollTo({top:0,behavior:'smooth'});
    renderMonCompte();
    return;
  }
  _prevShowPage(id, preselect);
};

/* ===== 13. AUTO-SAVE CART ON PAGE UNLOAD ===== */
window.addEventListener('beforeunload', function(){
  if(clientUser && typeof bState!=='undefined' && bState.cart.length>0){
    saveClientCart(clientUser.email, bState.cart);
  }
});

/* ===== 14. INIT ===== */
// Restore cart if session exists
if(clientUser && typeof bState!=='undefined'){
  const savedCart = getClientCart(clientUser.email);
  if(savedCart.length > 0){
    bState.cart = savedCart;
    if(typeof renderSim==='function') renderSim();
  }
}
updateClientUI();

})();



(function(){

/* â•”â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•—
   â•‘  1. CRÉE UN PROJET FIREBASE (gratuit) :                    â•‘
   â•‘     → https://console.firebase.google.com                  â•‘
   â•‘     → Clique "Ajouter un projet" → donne un nom            â•‘
   â•‘     → Desactive Google Analytics (pas besoin)               â•‘
   â•‘     → Dans le projet : Creer > Firestore Database           â•‘
   â•‘       → Choisir "Mode test" pour commencer                  â•‘
   â•‘     → Paramètres projet > Ajouter une appli Web (icone </>)â•‘
   â•‘     → Copie les valeurs ci-dessous                          â•‘
   â• â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•£
   â•‘  2. REMPLACE LES VALEURS CI-DESSOUS PAR LES TIENNES :      â•‘
   â•šâ•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

const firebaseConfig = {
  apiKey:            "AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY",
  authDomain:        "visioflow-cb6eb.firebaseapp.com",
  projectId: "visioflow-cb6eb-9d051",
  storageBucket:     "visioflow-cb6eb.firebasestorage.app",
  messagingSenderId: "208625257783",
  appId:             "1:208625257783:web:903429389d81159833deb2"
};

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ NE TOUCHE PLUS RIEN EN DESSOUS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

/* ===== FIREBASE INIT ===== */
try {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  db = firebase.firestore();
  firebaseReady = true;
  console.log('âœ… Firebase connecte : ' + firebaseConfig.projectId);
  loadSiteConfig();
} catch(e){
  console.warn('⚠️ Firebase non connecte :', e.message);
}

/* ===== FIREBASE STORAGE UPLOAD HELPER ===== */
window.uploadToStorage = async function(file, path) {
  try {
    const ref = firebase.storage().ref(path);
    const snap = await ref.put(file);
    return await snap.ref.getDownloadURL();
  } catch(e) {
    console.warn('Storage upload:', e.message);
    return null;
  }
};
window._logoUrl = '';

async function loadSiteConfig(){
  try{
    const doc = await db.collection('site_config').doc('main').get();
    if(!doc.exists) return;
    const config = doc.data();
    // Apply example URLs (offres page + builder page)
    if(config.exampleUrls){
      Object.assign(EXAMPLE_URLS, config.exampleUrls);
      Object.entries(EXAMPLE_URLS).forEach(([pack,url])=>{
        ['demo-'+pack, 'demo-b-'+pack].forEach(id=>{
          const el=document.getElementById(id);
          if(!el)return;
          if(url){el.href=url;el.classList.remove('empty');}
          else{el.classList.add('empty');}
        });
      });
    }
    // Apply payment links
    if(config.payment){
      Object.entries(config.payment).forEach(([pack,methods])=>{
        if(PAYMENT_LINKS[pack]) Object.assign(PAYMENT_LINKS[pack], methods);
      });
    }
    // Apply pack prices and descriptions (offres page + builder page + formulaires)
    if(config.packs){
      Object.entries(config.packs).forEach(([pack,data])=>{
        if(data.price){
          ['price-'+pack, 'price-b-'+pack].forEach(id=>{
            const el=document.getElementById(id);
            if(el) el.innerHTML=data.price+' <span>/ unique</span>';
          });
          // Mettre a jour les objets JS utilises par les formulaires et la modal de paiement
          if(PACKS[pack]) PACKS[pack].price = data.price;
          if(typeof BPACKS!=='undefined' && BPACKS[pack]!==undefined)
            BPACKS[pack] = String(parseFloat(data.price)||'');
          // Mettre a jour l'affichage du prix dans le vieux formulaire si affiche
          const prEl = document.getElementById('form-pack-price');
          if(prEl && window._vfPack === pack) prEl.textContent = data.price;
        }
        if(data.desc){
          ['desc-'+pack, 'desc-b-'+pack].forEach(id=>{
            const el=document.getElementById(id);
            if(el) el.textContent=data.desc;
          });
          if(PACKS[pack]) PACKS[pack].sub = data.desc;
        }
      });
    }
    // Apply hero texts
    if(config.hero){
      if(false && config.hero.title){
        const el=document.getElementById('hero-title');
        if(el) el.innerHTML=config.hero.title;
      }
      if(false && config.hero.subtitle){
        const el=document.getElementById('hero-subtitle');
        if(el) el.textContent=config.hero.subtitle;
      }
      if(false && config.hero.ctaText){
        const el=document.getElementById('hero-cta');
        if(el) el.textContent=config.hero.ctaText;
      }
    }
  }catch(e){ console.warn('loadSiteConfig:', e); }
}

/* ===== INJECT CSS ===== */
const fbCSS = document.createElement('style');
fbCSS.textContent = `
/* Admin Live Dashboard */
.vf-live-status{display:flex;align-items:center;gap:6px;padding:5px 12px;border-radius:980px;font-size:11px;font-weight:600}
.vf-live-status.on{background:rgba(52,211,153,.1);color:#34d399;border:.5px solid rgba(52,211,153,.2)}
.vf-live-status.off{background:rgba(251,191,36,.1);color:#fbbf24;border:.5px solid rgba(251,191,36,.2)}
.vf-live-dot{width:7px;height:7px;border-radius:50%;animation:pulse 2s infinite}
.vf-live-status.on .vf-live-dot{background:#34d399}
.vf-live-status.off .vf-live-dot{background:#fbbf24}

/* Edit Modal */
.vf-modal-overlay{display:none;position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.7);backdrop-filter:blur(10px);align-items:center;justify-content:center;padding:24px}
.vf-modal-overlay.open{display:flex}
.vf-modal{background:#141724;border:.5px solid rgba(255,255,255,.12);border-radius:20px;width:100%;max-width:500px;max-height:85vh;overflow-y:auto;animation:modalIn .3s cubic-bezier(.25,1,.5,1)}
.vf-modal-head{padding:22px 24px;border-bottom:.5px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:#141724;z-index:1;border-radius:20px 20px 0 0}
.vf-modal-title{font-family:'Fraunces';font-size:18px;font-weight:800;color:#fff}
.vf-modal-close{width:32px;height:32px;border-radius:10px;border:none;background:rgba(255,255,255,.08);color:#9ca3af;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
.vf-modal-close:hover{background:rgba(255,255,255,.15);color:#fff}
.vf-modal-body{padding:20px 24px}
.vf-form-field{margin-bottom:16px}
.vf-form-label{display:block;font-size:11px;font-weight:600;color:rgba(255,255,255,.4);margin-bottom:5px;text-transform:uppercase;letter-spacing:.06em}
.vf-form-input{width:100%;padding:11px 14px;background:rgba(255,255,255,.06);border:.5px solid rgba(255,255,255,.1);border-radius:10px;color:#fff;font-size:13px;font-family:inherit;outline:none;transition:all .2s}
.vf-form-input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(0,113,227,.12)}
.vf-form-input::placeholder{color:rgba(255,255,255,.2)}
textarea.vf-form-input{min-height:70px;resize:vertical}
select.vf-form-input{cursor:pointer}
select.vf-form-input option{background:#1a1d2a}
.vf-form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.vf-modal-foot{padding:16px 24px;border-top:.5px solid rgba(255,255,255,.06);display:flex;gap:10px;justify-content:flex-end;position:sticky;bottom:0;background:#141724;border-radius:0 0 20px 20px}
.vf-modal-btn{padding:10px 22px;border-radius:10px;border:none;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s}
.vf-modal-btn.save{background:var(--blue);color:#fff;box-shadow:0 4px 12px rgba(0,113,227,.3)}
.vf-modal-btn.save:hover{background:var(--blue-h)}
.vf-modal-btn.cancel{background:rgba(255,255,255,.06);color:rgba(255,255,255,.5)}
.vf-modal-btn.cancel:hover{background:rgba(255,255,255,.1);color:#fff}
.vf-modal-btn.danger{background:rgba(239,68,68,.15);color:#f87171}
.vf-modal-btn.danger:hover{background:rgba(239,68,68,.25)}

/* Menu item card in admin */
.vf-menu-card{display:flex;align-items:center;gap:14px;padding:14px;background:rgba(255,255,255,.03);border:.5px solid rgba(255,255,255,.06);border-radius:12px;margin-bottom:8px;transition:all .2s}
.vf-menu-card:hover{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1)}
.vf-menu-img{width:52px;height:52px;border-radius:10px;object-fit:cover;flex-shrink:0;background:rgba(255,255,255,.05)}
.vf-menu-info{flex:1;min-width:0}
.vf-menu-name{font-size:13px;font-weight:600;color:#e5e7eb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vf-menu-cat{font-size:10px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em;margin-top:2px}
.vf-menu-price{font-family:'Fraunces';font-size:15px;font-weight:800;color:#fff;flex-shrink:0;margin:0 10px}
.vf-menu-actions{display:flex;gap:5px;flex-shrink:0}
.vf-menu-act{width:30px;height:30px;border-radius:8px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;transition:all .2s}
.vf-menu-edit{background:rgba(0,113,227,.12);color:#60a5fa}
.vf-menu-edit:hover{background:rgba(0,113,227,.25)}
.vf-menu-del{background:rgba(239,68,68,.1);color:#f87171}
.vf-menu-del:hover{background:rgba(239,68,68,.2)}

/* Toast notification */
.vf-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(100px);background:#141724;border:.5px solid rgba(52,211,153,.3);border-radius:14px;padding:12px 24px;display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600;color:#34d399;z-index:2000;box-shadow:0 8px 32px rgba(0,0,0,.4);transition:transform .35s cubic-bezier(.25,1,.5,1);pointer-events:none}
.vf-toast.show{transform:translateX(-50%) translateY(0)}
.vf-toast.error{border-color:rgba(239,68,68,.3);color:#f87171}

/* Info edit grid */
.vf-info-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:.5px solid rgba(255,255,255,.05)}
.vf-info-row:last-child{border-bottom:none}
.vf-info-label{font-size:11px;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.06em;min-width:100px}
.vf-info-value{font-size:13px;color:#e5e7eb;font-weight:500;flex:1;text-align:right;margin:0 12px}
.vf-info-edit{width:28px;height:28px;border-radius:7px;border:none;background:rgba(0,113,227,.1);color:#60a5fa;font-size:11px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0}
.vf-info-edit:hover{background:rgba(0,113,227,.25)}

/* Loading skeleton */
.vf-skeleton{background:linear-gradient(90deg,rgba(255,255,255,.04) 25%,rgba(255,255,255,.08) 50%,rgba(255,255,255,.04) 75%);background-size:200% 100%;animation:vfShimmer 1.5s infinite;border-radius:8px;height:16px;margin-bottom:8px}
@keyframes vfShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
`;
document.head.appendChild(fbCSS);

/* ===== TOAST ===== */
const toastEl = document.createElement('div');
toastEl.className = 'vf-toast';
toastEl.id = 'vf-toast';
document.body.appendChild(toastEl);

function showToast(msg, isError){
  toastEl.textContent = (isError ? '\u274c ' : '\u2705 ') + msg;
  toastEl.className = 'vf-toast show' + (isError ? ' error' : '');
  setTimeout(()=> toastEl.classList.remove('show'), 2500);
}

/* ===== EDIT MODAL ===== */
const modalOverlay = document.createElement('div');
modalOverlay.className = 'vf-modal-overlay';
modalOverlay.id = 'vf-edit-modal';
modalOverlay.onclick = function(e){ if(e.target===this) closeEditModal(); };
modalOverlay.innerHTML = `<div class="vf-modal">
  <div class="vf-modal-head">
    <div class="vf-modal-title" id="vf-modal-title">Modifier</div>
    <button class="vf-modal-close" onclick="closeEditModal()">\u00d7</button>
  </div>
  <div class="vf-modal-body" id="vf-modal-body"></div>
  <div class="vf-modal-foot" id="vf-modal-foot"></div>
</div>`;
document.body.appendChild(modalOverlay);

window.openEditModal = function(title, bodyHTML, footHTML){
  document.getElementById('vf-modal-title').textContent = title;
  document.getElementById('vf-modal-body').innerHTML = bodyHTML;
  document.getElementById('vf-modal-foot').innerHTML = footHTML;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeEditModal = function(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
};

/* ===== FIRESTORE HELPERS ===== */
// Default data (used if Firebase empty or offline)
const DEFAULT_INFO = {
  name: 'Mon Restaurant',
  slogan: 'Le meilleur de la cuisine',
  phone: '01 23 45 67 89',
  address: '12 Rue de la Paix, 75001 Paris',
  email: 'contact@monrestaurant.fr',
  hours: 'Lun-Sam 12h\u201314h30 / 19h\u201322h30\nDim: Ferm\u00e9',
  color: '#E85D04'
};

let liveInfo = {...DEFAULT_INFO};
let liveMenu = [];
let liveOrders = [];

// â”€â”€ Read info â”€â”€
async function fbLoadInfo(){
  if(!firebaseReady) return liveInfo;
  try {
    const doc = await db.collection('config').doc('restaurant').get();
    if(doc.exists){ liveInfo = {...DEFAULT_INFO, ...doc.data()}; }
    else { await db.collection('config').doc('restaurant').set(DEFAULT_INFO); }
  } catch(e){ console.warn('FB info load error:', e); }
  return liveInfo;
}

// â”€â”€ Save info â”€â”€
async function fbSaveInfo(data){
  liveInfo = {...liveInfo, ...data};
  if(!firebaseReady) { showToast('Sauvegard\u00e9 localement (Firebase non connect\u00e9)', true); return; }
  try {
    await db.collection('config').doc('restaurant').set(liveInfo, {merge:true});
    showToast('Information mise \u00e0 jour');
  } catch(e){ showToast('Erreur de sauvegarde', true); }
}

// â”€â”€ Read menu â”€â”€
async function fbLoadMenu(){
  if(!firebaseReady) return liveMenu;
  try {
    const snap = await db.collection('menu').orderBy('order','asc').get();
    liveMenu = [];
    snap.forEach(doc => liveMenu.push({id:doc.id, ...doc.data()}));
  } catch(e){ console.warn('FB menu load error:', e); }
  return liveMenu;
}

// â”€â”€ Add menu item â”€â”€
async function fbAddMenuItem(item){
  item.order = liveMenu.length;
  if(!firebaseReady){
    item.id = 'local_'+Date.now();
    liveMenu.push(item);
    showToast('Ajout\u00e9 localement');
    return item.id;
  }
  try {
    const ref = await db.collection('menu').add(item);
    item.id = ref.id;
    liveMenu.push(item);
    showToast('Plat ajout\u00e9');
    return ref.id;
  } catch(e){ showToast('Erreur', true); return null; }
}

// â”€â”€ Update menu item â”€â”€
async function fbUpdateMenuItem(id, data){
  const idx = liveMenu.findIndex(m=>m.id===id);
  if(idx>=0) Object.assign(liveMenu[idx], data);
  if(!firebaseReady){ showToast('Modifi\u00e9 localement'); return; }
  try {
    await db.collection('menu').doc(id).update(data);
    showToast('Plat modifi\u00e9');
  } catch(e){ showToast('Erreur', true); }
}

// â”€â”€ Delete menu item â”€â”€
async function fbDeleteMenuItem(id){
  liveMenu = liveMenu.filter(m=>m.id!==id);
  if(!firebaseReady){ showToast('Supprim\u00e9 localement'); return; }
  try {
    await db.collection('menu').doc(id).delete();
    showToast('Plat supprim\u00e9');
  } catch(e){ showToast('Erreur', true); }
}

// â”€â”€ Read orders â”€â”€
async function fbLoadOrders(){
  if(!firebaseReady) return liveOrders;
  try {
    const snap = await db.collection('orders').orderBy('createdAt','desc').limit(20).get();
    liveOrders = [];
    snap.forEach(doc => liveOrders.push({id:doc.id, ...doc.data()}));
  } catch(e){ console.warn('FB orders load error:', e); }
  return liveOrders;
}

/* ===== RENDER ADMIN DASHBOARD (LIVE) ===== */
const CAT_OPTIONS = [
  {value:'entrees',label:'Entr\u00e9es'},
  {value:'plats',label:'Plats'},
  {value:'desserts',label:'Desserts'},
  {value:'boissons',label:'Boissons'},
];

async function renderLiveAdmin(){
  const panel = document.getElementById('vfa-p-clients');
  if(!panel) return;

  // Find the vf-admin container and rebuild tabs + panels
  const adminWrap = document.querySelector('.vf-admin');
  if(!adminWrap) return;

  // Show loading
  const tabsEl = adminWrap.querySelector('.vf-tabs');
  const oldPanels = adminWrap.querySelectorAll('.vf-panel');

  // Load data
  await Promise.all([fbLoadInfo(), fbLoadMenu(), fbLoadOrders()]);

  // Rebuild tabs
  if(tabsEl){
    tabsEl.innerHTML = `
      <button class="vf-tab a" onclick="vfLiveTab(this,'menu')">\uD83C\uDF74 Menu</button>
      <button class="vf-tab" onclick="vfLiveTab(this,'info')">\uD83C\uDFEA Restaurant</button>
      <button class="vf-tab" onclick="vfLiveTab(this,'orders')">\uD83D\uDCE6 Commandes</button>
    `;
  }

  // Remove old panels
  oldPanels.forEach(p=>p.remove());

  // Status bar
  const statsRow = adminWrap.querySelector('.vf-stat-row');
  if(statsRow){
    statsRow.innerHTML = `
      <div class="vf-scard">
        <div class="vf-scard-label">Plats au menu</div>
        <div class="vf-scard-value">${liveMenu.length}</div>
        <div class="vf-scard-trend up">${firebaseReady ? 'Firebase sync\u00e9' : 'Mode local'}</div>
      </div>
      <div class="vf-scard">
        <div class="vf-scard-label">Commandes</div>
        <div class="vf-scard-value">${liveOrders.length}</div>
        <div class="vf-scard-trend up">${liveOrders.filter(o=>o.status==='new').length} nouvelles</div>
      </div>
      <div class="vf-scard">
        <div class="vf-scard-label">Restaurant</div>
        <div class="vf-scard-value" style="font-size:18px;letter-spacing:-.5px">${liveInfo.name}</div>
        <div class="vf-scard-trend up">${liveInfo.phone}</div>
      </div>
      <div class="vf-scard">
        <div class="vf-scard-label">Statut</div>
        <div class="vf-scard-value" style="font-size:16px">
          <div class="vf-live-status ${firebaseReady?'on':'off'}">
            <div class="vf-live-dot"></div>
            ${firebaseReady ? 'En ligne' : 'Hors ligne'}
          </div>
        </div>
        <div class="vf-scard-trend">${firebaseReady ? 'Donn\u00e9es synchronis\u00e9es' : 'Configure Firebase'}</div>
      </div>
    `;
  }

  // Insert panels after tabs
  const insertAfter = tabsEl || statsRow;
  if(!insertAfter) return;

  // â”€â”€ MENU PANEL â”€â”€
  const menuPanel = document.createElement('div');
  menuPanel.className = 'vf-panel';
  menuPanel.id = 'vf-live-menu';
  menuPanel.innerHTML = buildMenuPanelHTML();
  insertAfter.after(menuPanel);

  // â”€â”€ INFO PANEL â”€â”€
  const infoPanel = document.createElement('div');
  infoPanel.className = 'vf-panel';
  infoPanel.id = 'vf-live-info';
  infoPanel.style.display = 'none';
  infoPanel.innerHTML = buildInfoPanelHTML();
  menuPanel.after(infoPanel);

  // â”€â”€ ORDERS PANEL â”€â”€
  const ordersPanel = document.createElement('div');
  ordersPanel.className = 'vf-panel';
  ordersPanel.id = 'vf-live-orders';
  ordersPanel.style.display = 'none';
  ordersPanel.innerHTML = buildOrdersPanelHTML();
  infoPanel.after(ordersPanel);

  // Update topbar
  const topbar = adminWrap.querySelector('.vf-topbar');
  if(topbar){
    topbar.innerHTML = `
      <div style="font-family:'Fraunces';font-size:28px;font-weight:800;color:#fff;letter-spacing:-1px">Visio<span style="color:var(--blue)">Flow</span> Admin</div>
      <div style="display:flex;gap:10px;align-items:center">
        <div class="vf-live-status ${firebaseReady?'on':'off'}"><div class="vf-live-dot"></div>${firebaseReady?'Firebase connect\u00e9':'Mode hors ligne'}</div>
        <button class="vf-btn-sm vf-btn-blue" onclick="renderLiveAdmin()">\u21BB Rafra\u00eechir</button>
      </div>
    `;
  }
}

/* ===== BUILD MENU PANEL ===== */
function buildMenuPanelHTML(){
  const grouped = {};
  CAT_OPTIONS.forEach(c => grouped[c.value] = []);
  liveMenu.forEach(m => { if(grouped[m.cat]) grouped[m.cat].push(m); else grouped.plats.push(m); });

  let menuHTML = '';
  CAT_OPTIONS.forEach(cat => {
    const items = grouped[cat.value];
    menuHTML += `<div style="margin-bottom:16px">
      <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.3);margin-bottom:8px;padding-top:8px;border-top:.5px solid rgba(255,255,255,.05)">${cat.label} (${items.length})</div>`;
    if(items.length === 0){
      menuHTML += `<div style="font-size:12px;color:rgba(255,255,255,.2);padding:8px 0">Aucun plat dans cette cat\u00e9gorie.</div>`;
    }
    items.forEach(item => {
      menuHTML += `<div class="vf-menu-card">
        <img class="vf-menu-img" src="${item.img||'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&q=60'}" onerror="this.src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&q=60'"/>
        <div class="vf-menu-info">
          <div class="vf-menu-name">${item.name}</div>
          <div class="vf-menu-cat">${cat.label}${item.desc ? ' \u2022 '+item.desc.substring(0,40)+'...' : ''}</div>
        </div>
        <div class="vf-menu-price">${item.price}\u20ac</div>
        <div class="vf-menu-actions">
          <button class="vf-menu-act vf-menu-edit" onclick="openEditItem('${item.id}')">\u270F</button>
          <button class="vf-menu-act vf-menu-del" onclick="confirmDeleteItem('${item.id}','${item.name.replace(/'/g,"\\'")}')">\uD83D\uDDD1</button>
        </div>
      </div>`;
    });
    menuHTML += '</div>';
  });

  return `
    <div class="vf-panel-head">
      <div class="vf-panel-title">\uD83C\uDF74 Menu du restaurant (${liveMenu.length} plats)</div>
      <button class="vf-btn-sm vf-btn-blue" onclick="openAddItem()">+ Ajouter un plat</button>
    </div>
    <div class="vf-panel-body">${menuHTML}</div>
  `;
}

/* ===== BUILD INFO PANEL ===== */
function buildInfoPanelHTML(){
  const fields = [
    {key:'name',label:'Nom du restaurant',value:liveInfo.name},
    {key:'slogan',label:'Slogan',value:liveInfo.slogan},
    {key:'phone',label:'T\u00e9l\u00e9phone',value:liveInfo.phone},
    {key:'address',label:'Adresse',value:liveInfo.address},
    {key:'email',label:'Email',value:liveInfo.email},
    {key:'hours',label:'Horaires',value:liveInfo.hours},
    {key:'color',label:'Couleur accent',value:liveInfo.color},
  ];
  let rows = fields.map(f => `
    <div class="vf-info-row">
      <div class="vf-info-label">${f.label}</div>
      <div class="vf-info-value">${(f.value||'—').replace(/\n/g,' / ')}</div>
      <button class="vf-info-edit" onclick="openEditInfo('${f.key}',\`${f.label}\`,\`${(f.value||'').replace(/`/g,'\\`')}\`)">✏</button>
    </div>
  `).join('');

  return `
    <div class="vf-panel-head">
      <div class="vf-panel-title">\uD83C\uDFEA Informations du restaurant</div>
      <button class="vf-btn-sm vf-btn-blue" onclick="openEditAllInfo()">Tout modifier</button>
    </div>
    <div class="vf-panel-body">${rows}</div>
  `;
}

/* ===== BUILD ORDERS PANEL ===== */
function buildOrdersPanelHTML(){
  let ordersHTML = '';
  if(liveOrders.length === 0){
    ordersHTML = '<div style="text-align:center;padding:32px;color:rgba(255,255,255,.3);font-size:13px"><div style="font-size:32px;margin-bottom:10px">\uD83D\uDCE6</div>Aucune commande pour le moment.<br/>Les commandes de vos clients appara\u00eetront ici.</div>';
  } else {
    ordersHTML = liveOrders.map(o => {
      const statusCls = o.status==='new'?'vf-badge-paid':o.status==='done'?'vf-badge-ess':'vf-badge-prem';
      const statusTxt = o.status==='new'?'Nouvelle':o.status==='done'?'Termin\u00e9e':'En cours';
      return `<div style="display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:.5px solid rgba(255,255,255,.05)">
        <div style="flex:1">
          <div style="font-size:13px;font-weight:600;color:#e5e7eb">${o.clientName||'Client'}</div>
          <div style="font-size:10px;color:rgba(255,255,255,.3)">${o.id} \u2022 ${o.date||''} \u2022 ${(o.items||[]).length} articles</div>
        </div>
        <span class="vf-badge-sm ${statusCls}">${statusTxt}</span>
        <div style="font-family:'Fraunces';font-size:15px;font-weight:800;color:#fff">${o.total||0}\u20ac</div>
      </div>`;
    }).join('');
  }
  return `
    <div class="vf-panel-head">
      <div class="vf-panel-title">\uD83D\uDCE6 Commandes (${liveOrders.length})</div>
    </div>
    <div class="vf-panel-body">${ordersHTML}</div>
  `;
}

/* ===== TAB SWITCH ===== */
window.vfLiveTab = function(btn, panel){
  const tabs = btn.parentElement.querySelectorAll('.vf-tab');
  tabs.forEach(t=>t.classList.remove('a'));
  btn.classList.add('a');
  ['menu','info','orders'].forEach(p=>{
    const el = document.getElementById('vf-live-'+p);
    if(el) el.style.display = p===panel ? '' : 'none';
  });
};

/* ===== ADD ITEM MODAL ===== */
window.openAddItem = function(){
  const catOpts = CAT_OPTIONS.map(c=>`<option value="${c.value}">${c.label}</option>`).join('');
  openEditModal('Ajouter un plat', `
    <div class="vf-form-row">
      <div class="vf-form-field">
        <label class="vf-form-label">Nom du plat *</label>
        <input class="vf-form-input" id="mi-name" placeholder="Ex: Burger Classic"/>
      </div>
      <div class="vf-form-field">
        <label class="vf-form-label">Prix (\u20ac) *</label>
        <input class="vf-form-input" id="mi-price" type="number" step="0.10" placeholder="12.90"/>
      </div>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Cat\u00e9gorie *</label>
      <select class="vf-form-input" id="mi-cat">${catOpts}</select>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Description</label>
      <input class="vf-form-input" id="mi-desc" placeholder="Courte description du plat"/>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">URL de l'image</label>
      <input class="vf-form-input" id="mi-img" placeholder="https://images.unsplash.com/..."/>
    </div>
  `, `
    <button class="vf-modal-btn cancel" onclick="closeEditModal()">Annuler</button>
    <button class="vf-modal-btn save" onclick="saveNewItem()">Ajouter</button>
  `);
};

window.saveNewItem = async function(){
  const name = document.getElementById('mi-name').value.trim();
  const price = document.getElementById('mi-price').value.trim();
  const cat = document.getElementById('mi-cat').value;
  const desc = document.getElementById('mi-desc').value.trim();
  const img = document.getElementById('mi-img').value.trim();
  if(!name||!price){ showToast('Nom et prix requis', true); return; }
  await fbAddMenuItem({name, price, cat, desc, img: img||'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90'});
  closeEditModal();
  refreshMenuPanel();
};

/* ===== EDIT ITEM MODAL ===== */
window.openEditItem = function(id){
  const item = liveMenu.find(m=>m.id===id);
  if(!item) return;
  const catOpts = CAT_OPTIONS.map(c=>`<option value="${c.value}" ${c.value===item.cat?'selected':''}>${c.label}</option>`).join('');
  openEditModal('Modifier : '+item.name, `
    <div class="vf-form-row">
      <div class="vf-form-field">
        <label class="vf-form-label">Nom *</label>
        <input class="vf-form-input" id="mi-name" value="${item.name}"/>
      </div>
      <div class="vf-form-field">
        <label class="vf-form-label">Prix (\u20ac) *</label>
        <input class="vf-form-input" id="mi-price" type="number" step="0.10" value="${item.price}"/>
      </div>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Cat\u00e9gorie</label>
      <select class="vf-form-input" id="mi-cat">${catOpts}</select>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Description</label>
      <input class="vf-form-input" id="mi-desc" value="${item.desc||''}"/>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">URL image</label>
      <input class="vf-form-input" id="mi-img" value="${item.img||''}"/>
    </div>
  `, `
    <button class="vf-modal-btn cancel" onclick="closeEditModal()">Annuler</button>
    <button class="vf-modal-btn save" onclick="saveEditItem('${id}')">Sauvegarder</button>
  `);
};

window.saveEditItem = async function(id){
  const name = document.getElementById('mi-name').value.trim();
  const price = document.getElementById('mi-price').value.trim();
  const cat = document.getElementById('mi-cat').value;
  const desc = document.getElementById('mi-desc').value.trim();
  const img = document.getElementById('mi-img').value.trim();
  if(!name||!price){ showToast('Nom et prix requis', true); return; }
  await fbUpdateMenuItem(id, {name, price, cat, desc, img});
  closeEditModal();
  refreshMenuPanel();
};

/* ===== DELETE ITEM ===== */
window.confirmDeleteItem = function(id, name){
  openEditModal('Supprimer ce plat ?', `
    <div style="text-align:center;padding:10px 0">
      <div style="font-size:40px;margin-bottom:12px">\u26A0\uFE0F</div>
      <div style="font-size:15px;font-weight:600;color:#fff;margin-bottom:6px">${name}</div>
      <div style="font-size:13px;color:rgba(255,255,255,.4)">Cette action est irr\u00e9versible.</div>
    </div>
  `, `
    <button class="vf-modal-btn cancel" onclick="closeEditModal()">Annuler</button>
    <button class="vf-modal-btn danger" onclick="doDeleteItem('${id}')">Supprimer</button>
  `);
};

window.doDeleteItem = async function(id){
  await fbDeleteMenuItem(id);
  closeEditModal();
  refreshMenuPanel();
};

/* ===== EDIT INFO FIELD ===== */
window.openEditInfo = function(key, label, currentVal){
  const isTextarea = (key==='hours');
  const isColor = (key==='color');
  const inputHTML = isTextarea
    ? `<textarea class="vf-form-input" id="info-val" rows="4">${currentVal}</textarea>`
    : isColor
      ? `<input class="vf-form-input" id="info-val" type="color" value="${currentVal}" style="height:50px;padding:4px;cursor:pointer"/>`
      : `<input class="vf-form-input" id="info-val" value="${currentVal}"/>`;

  openEditModal('Modifier : '+label, `
    <div class="vf-form-field">
      <label class="vf-form-label">${label}</label>
      ${inputHTML}
    </div>
  `, `
    <button class="vf-modal-btn cancel" onclick="closeEditModal()">Annuler</button>
    <button class="vf-modal-btn save" onclick="saveInfoField('${key}')">Sauvegarder</button>
  `);
};

window.saveInfoField = async function(key){
  const val = document.getElementById('info-val').value;
  const data = {}; data[key] = val;
  await fbSaveInfo(data);
  closeEditModal();
  refreshInfoPanel();
  refreshStats();
};

/* ===== EDIT ALL INFO ===== */
window.openEditAllInfo = function(){
  openEditModal('Modifier toutes les infos', `
    <div class="vf-form-field">
      <label class="vf-form-label">Nom du restaurant</label>
      <input class="vf-form-input" id="ai-name" value="${liveInfo.name||''}"/>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Slogan</label>
      <input class="vf-form-input" id="ai-slogan" value="${liveInfo.slogan||''}"/>
    </div>
    <div class="vf-form-row">
      <div class="vf-form-field">
        <label class="vf-form-label">T\u00e9l\u00e9phone</label>
        <input class="vf-form-input" id="ai-phone" value="${liveInfo.phone||''}"/>
      </div>
      <div class="vf-form-field">
        <label class="vf-form-label">Email</label>
        <input class="vf-form-input" id="ai-email" value="${liveInfo.email||''}"/>
      </div>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Adresse</label>
      <input class="vf-form-input" id="ai-address" value="${liveInfo.address||''}"/>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Horaires</label>
      <textarea class="vf-form-input" id="ai-hours" rows="3">${liveInfo.hours||''}</textarea>
    </div>
    <div class="vf-form-field">
      <label class="vf-form-label">Couleur accent</label>
      <input class="vf-form-input" id="ai-color" type="color" value="${liveInfo.color||'#E85D04'}" style="height:44px;padding:4px;cursor:pointer"/>
    </div>
  `, `
    <button class="vf-modal-btn cancel" onclick="closeEditModal()">Annuler</button>
    <button class="vf-modal-btn save" onclick="saveAllInfo()">Tout sauvegarder</button>
  `);
};

window.saveAllInfo = async function(){
  await fbSaveInfo({
    name: document.getElementById('ai-name').value.trim(),
    slogan: document.getElementById('ai-slogan').value.trim(),
    phone: document.getElementById('ai-phone').value.trim(),
    email: document.getElementById('ai-email').value.trim(),
    address: document.getElementById('ai-address').value.trim(),
    hours: document.getElementById('ai-hours').value.trim(),
    color: document.getElementById('ai-color').value,
  });
  closeEditModal();
  refreshInfoPanel();
  refreshStats();
};

/* ===== REFRESH HELPERS ===== */
function refreshMenuPanel(){
  const el = document.getElementById('vf-live-menu');
  if(el) el.innerHTML = buildMenuPanelHTML();
}
function refreshInfoPanel(){
  const el = document.getElementById('vf-live-info');
  if(el) el.innerHTML = buildInfoPanelHTML();
}
function refreshStats(){
  renderLiveAdmin(); // Full rebuild for stats
}

/* ===== OVERRIDE ADMIN INIT ===== */
const _origVfaInit = window.vfaInit;
window.vfaInit = async function(){
  await renderLiveAdmin();
};

/* ===== KEYBOARD SHORTCUT ===== */
document.addEventListener('keydown', function(e){
  if(e.key==='Escape') closeEditModal();
});

})();




(function () {
  'use strict';

  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   * VISIOFLOW — AUTH FIREBASE · ESPACE CLIENT · FORMULAIRE PRÉ-PAIEMENT
   * Design Enterprise · Apple-inspired
   * â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */

  /* â”€â”€â”€ 0. CONSTANTES â”€â”€â”€ */
  const ADMIN_UID_EMAIL = 'visioflow77@gmail.com'; // email admin Firebase
  const PROJECTS_COL   = 'client_projects';        // collection Firestore

  /* â”€â”€â”€ 1. FIREBASE AUTH INIT â”€â”€â”€ */
  let auth, currentFBUser = null;
  try { auth = firebase.auth(); }
  catch (e) { console.warn('[VF·Auth] Firebase Auth non disponible :', e.message); }

  /* â”€â”€â”€ 2. CSS INJECTION â”€â”€â”€ */
  const _css = document.createElement('style');
  _css.textContent = `
  /* â”€â”€ Masquer anciens boutons nav auth (remplaces par l'icone profil) â”€â”€ */
  #nav-auth { display:none !important; }
  #nav-client-area { display:none !important; }

  /* â”€â”€ Profil icone nav â”€â”€ */
  .vf-nav-pro {
    position:absolute; right:16px; top:50%; transform:translateY(-50%);
    display:flex; align-items:center; z-index:600;
  }
  .vf-pro-btn {
    height:32px; padding:0 14px 0 12px; border-radius:980px;
    background:linear-gradient(135deg,#0071E3,#38bdf8);
    border:none; cursor:pointer; display:flex; align-items:center;
    justify-content:center; gap:6px; transition:all .22s;
    box-shadow:0 2px 10px rgba(0,113,227,.35); position:relative;
    font-family:'Fraunces'; font-size:12px; font-weight:700; color:#fff;
    white-space:nowrap; min-width:32px;
  }
  .vf-pro-btn:hover { transform:scale(1.04); box-shadow:0 4px 16px rgba(0,113,227,.45); }
  @media(max-width:640px){
    .vf-nav-pro { right:12px; }
    #vf-pro-label { display:none; }
    .vf-pro-btn { padding:0 10px; font-size:11px; }
  }
  .vf-pro-dot {
    position:absolute; top:-1px; right:-1px; width:9px; height:9px;
    border-radius:50%; background:#22c55e; border:2px solid #fff;
    display:none;
  }
  .vf-pro-dot.on { display:block; }

  /* â”€â”€ Dropdown auth â”€â”€ */
  .vf-drop {
    position:absolute; top:calc(100% + 10px); right:0; width:270px;
    background:rgba(255,255,255,.98); border:.5px solid rgba(0,0,30,.1);
    border-radius:16px; box-shadow:0 22px 60px rgba(0,0,0,.13);
    overflow:hidden; transform:scale(.9) translateY(-8px); opacity:0;
    pointer-events:none; z-index:700; backdrop-filter:blur(20px);
    transition:transform .22s cubic-bezier(.25,1,.5,1), opacity .2s;
    transform-origin:top right;
  }
  .vf-drop.open { transform:scale(1) translateY(0); opacity:1; pointer-events:auto; }
  .vf-drop-hd { padding:16px 16px 12px; border-bottom:.5px solid rgba(0,0,30,.07); }
  .vf-drop-title { font-family:'Fraunces'; font-size:15px; font-weight:800; color:var(--text); letter-spacing:-.3px; }
  .vf-drop-sub { font-size:11px; color:var(--text3); margin-top:1px; }
  .vf-drop-body { padding:10px; display:flex; flex-direction:column; gap:5px; }
  .vf-drop-user { padding:12px 16px; border-bottom:.5px solid var(--bord); display:flex; align-items:center; gap:11px; }
  .vf-drop-av { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,#0071E3,#38bdf8); display:flex; align-items:center; justify-content:center; font-family:'Fraunces'; font-size:14px; font-weight:800; color:#fff; flex-shrink:0; }
  .vf-drop-uname { font-size:13px; font-weight:700; color:var(--text); }
  .vf-drop-uemail { font-size:10px; color:var(--text3); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:170px; }
  .vf-dbtn {
    width:100%; padding:10px 12px; border-radius:10px; border:.5px solid var(--bord-md);
    background:var(--bg-alt); color:var(--text); font-size:13px; font-weight:600;
    cursor:pointer; font-family:inherit; text-align:left; transition:all .18s;
    display:flex; align-items:center; gap:9px;
  }
  .vf-dbtn:hover { background:#e8f2ff; border-color:var(--blue); color:var(--blue); }
  .vf-dbtn.blue { background:var(--blue); border-color:var(--blue); color:#fff; box-shadow:0 3px 10px rgba(0,113,227,.28); }
  .vf-dbtn.blue:hover { background:var(--blue-h); }
  .vf-dbtn.red { background:none; border:.5px solid transparent; color:#ef4444; font-size:12px; }
  .vf-dbtn.red:hover { background:rgba(239,68,68,.08); }
  .vf-drop-sep { height:.5px; background:var(--bord); margin:3px 0; }

  /* â”€â”€ Auth modal â”€â”€ */
  .vf-auth-ov {
    display:none; position:fixed; inset:0; z-index:999;
    background:rgba(0,0,0,.5); backdrop-filter:blur(14px);
    align-items:center; justify-content:center; padding:24px;
  }
  .vf-auth-ov.open { display:flex; }
  .vf-auth-card {
    background:#fff; border-radius:24px; width:100%; max-width:400px;
    overflow:hidden; box-shadow:0 40px 80px rgba(0,0,0,.18);
    animation:modalIn .3s cubic-bezier(.25,1,.5,1); position:relative;
  }
  .vf-auth-hd { padding:32px 28px 0; text-align:center; }
  .vf-auth-ico {
    width:54px; height:54px; border-radius:50%;
    background:linear-gradient(135deg,#0071E3,#38bdf8);
    display:flex; align-items:center; justify-content:center;
    margin:0 auto 14px; box-shadow:0 8px 24px rgba(0,113,227,.22);
  }
  .vf-auth-tit { font-family:'Fraunces'; font-size:21px; font-weight:800; color:var(--text); letter-spacing:-.4px; margin-bottom:4px; }
  .vf-auth-sub { font-size:12px; color:var(--text3); line-height:1.55; margin-bottom:20px; }
  .vf-auth-tabs { display:flex; background:var(--bg-alt); border-radius:10px; padding:3px; margin:0 28px 18px; }
  .vf-auth-tab { flex:1; padding:9px; border:none; background:none; color:var(--text2); font-size:13px; font-weight:600; cursor:pointer; border-radius:8px; font-family:inherit; transition:all .2s; }
  .vf-auth-tab.on { background:#fff; color:var(--text); box-shadow:0 1px 4px rgba(0,0,30,.09); }
  .vf-auth-form { padding:0 28px 28px; }
  .vf-af-f { margin-bottom:13px; }
  .vf-af-l { display:block; font-size:11px; font-weight:600; color:var(--text2); margin-bottom:5px; text-transform:uppercase; letter-spacing:.05em; }
  .vf-af-i { width:100%; padding:11px 13px; background:var(--bg-alt); border:.5px solid var(--bord-md); border-radius:10px; color:var(--text); font-size:14px; font-family:inherit; outline:none; transition:border-color .2s; }
  .vf-af-i:focus { border-color:var(--blue); }
  .vf-af-i::placeholder { color:var(--text3); }
  .vf-af-sub { width:100%; padding:13px; border:none; border-radius:12px; background:var(--blue); color:#fff; font-size:15px; font-weight:700; cursor:pointer; font-family:inherit; transition:all .2s; margin-top:5px; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 4px 14px rgba(0,113,227,.28); }
  .vf-af-sub:hover { background:var(--blue-h); transform:translateY(-1px); }
  .vf-af-sub:disabled { opacity:.5; cursor:not-allowed; transform:none; }
  .vf-af-err { padding:9px 12px; background:rgba(239,68,68,.08); border:.5px solid rgba(239,68,68,.2); border-radius:8px; font-size:12px; color:#ef4444; margin-bottom:12px; display:none; align-items:center; gap:7px; }
  .vf-af-err.on { display:flex; }
  .vf-auth-x { position:absolute; top:14px; right:14px; width:28px; height:28px; border-radius:50%; border:none; background:var(--bg-alt); cursor:pointer; display:flex; align-items:center; justify-content:center; color:var(--text2); font-size:15px; transition:all .2s; }
  .vf-auth-x:hover { background:var(--bord-md); }
  .vf-auth-ft { text-align:center; padding:12px; border-top:.5px solid var(--bord); font-size:11px; color:var(--text3); }
  @keyframes spin { to { stroke-dashoffset: -31.4; } }

  /* â”€â”€ Espace Client page â”€â”€ */
  #page-espace-client { background:#f5f7ff; min-height:100dvh; }
  .ec-wrap { max-width:760px; margin:0 auto; padding:80px 24px 60px; }
  .ec-hero { background:linear-gradient(135deg,#0071E3,#38bdf8); border-radius:20px; padding:28px 26px; margin-bottom:24px; display:flex; align-items:center; gap:18px; box-shadow:0 8px 32px rgba(0,113,227,.2); }
  .ec-av { width:56px; height:56px; border-radius:50%; background:rgba(255,255,255,.22); border:2px solid rgba(255,255,255,.45); display:flex; align-items:center; justify-content:center; font-family:'Fraunces'; font-size:22px; font-weight:800; color:#fff; flex-shrink:0; }
  .ec-name { font-family:'Fraunces'; font-size:20px; font-weight:800; color:#fff; letter-spacing:-.3px; }
  .ec-email { font-size:12px; color:rgba(255,255,255,.72); margin-top:2px; }
  .ec-stitle { font-family:'Fraunces'; font-size:17px; font-weight:700; color:var(--text); margin-bottom:10px; display:flex; align-items:center; gap:8px; }
  .ec-card { background:#fff; border:.5px solid var(--bord-md); border-radius:16px; overflow:hidden; box-shadow:var(--sh); margin-bottom:22px; }
  .ec-proj { padding:18px 20px; border-bottom:.5px solid var(--bord); transition:background .18s; }
  .ec-proj:last-child { border-bottom:none; }
  .ec-proj:hover { background:#f8faff; }
  .ec-ptop { display:flex; align-items:flex-start; justify-content:space-between; gap:10px; margin-bottom:6px; }
  .ec-pname { font-size:14px; font-weight:700; color:var(--text); }
  .ec-pmeta { font-size:11px; color:var(--text3); display:flex; gap:10px; flex-wrap:wrap; margin-top:2px; }
  .ec-ppill { padding:3px 10px; border-radius:980px; font-size:10px; font-weight:700; }
  .ec-ppill.ess { background:rgba(107,114,128,.1); color:#6b7280; }
  .ec-ppill.prem { background:rgba(0,113,227,.1); color:var(--blue); }
  .ec-ppill.fran { background:rgba(131,56,236,.1); color:#8338ec; }
  .ec-sbar { display:flex; align-items:center; gap:5px; margin-top:10px; padding-top:10px; border-top:.5px solid var(--bord); }
  .ec-step { flex:1; height:4px; border-radius:2px; background:var(--bord-md); }
  .ec-step.done { background:#22c55e; }
  .ec-step.active { background:linear-gradient(90deg,var(--blue),#38bdf8); animation:ecGlow 1.4s ease alternate infinite; }
  @keyframes ecGlow { from{opacity:.6} to{opacity:1} }
  .ec-slbl { font-size:11px; font-weight:600; margin-left:6px; white-space:nowrap; }
  .ec-empty { text-align:center; padding:44px 24px; }
  .ec-empty-ico { font-size:44px; margin-bottom:12px; }
  .ec-empty-tit { font-family:'Fraunces'; font-size:19px; font-weight:700; color:var(--text); margin-bottom:6px; }
  .ec-empty-sub { font-size:13px; color:var(--text3); margin-bottom:22px; line-height:1.6; max-width:340px; margin-left:auto; margin-right:auto; }

  /* â”€â”€ Formulaire pre-paiement â”€â”€ */
  .vf-pp-ov {
    display:none; position:fixed; inset:0; z-index:998;
    background:rgba(0,0,20,.6); backdrop-filter:blur(18px);
    align-items:flex-start; justify-content:center;
    overflow-y:auto; padding:24px 16px;
  }
  .vf-pp-ov.open { display:flex; }
  .vf-pp-wrap {
    width:100%; max-width:660px; margin:auto;
    background:#fff; border-radius:24px;
    box-shadow:0 40px 100px rgba(0,0,0,.2);
    animation:modalIn .3s cubic-bezier(.25,1,.5,1);
    overflow:hidden; position:relative;
  }
  .vf-pp-hd { padding:26px 30px 0; }
  .vf-pp-x { position:absolute; top:16px; right:16px; width:30px; height:30px; border-radius:50%; border:none; background:var(--bg-alt); cursor:pointer; display:flex; align-items:center; justify-content:center; color:var(--text2); font-size:15px; transition:all .2s; }
  .vf-pp-x:hover { background:var(--bord-md); }
  .vf-pp-sbar { display:flex; gap:0; margin:16px 0 22px; }
  .vf-pp-s { flex:1; text-align:center; position:relative; }
  .vf-pp-s::after { content:''; position:absolute; top:13px; left:50%; width:100%; height:2px; background:var(--bord-md); z-index:0; }
  .vf-pp-s:last-child::after { display:none; }
  .vf-pp-snum { width:26px; height:26px; border-radius:50%; background:var(--bord-md); color:var(--text3); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; margin:0 auto 4px; position:relative; z-index:1; transition:all .3s; }
  .vf-pp-s.done .vf-pp-snum { background:#22c55e; color:#fff; }
  .vf-pp-s.active .vf-pp-snum { background:var(--blue); color:#fff; box-shadow:0 0 0 4px rgba(0,113,227,.14); }
  .vf-pp-slbl { font-size:9px; color:var(--text3); font-weight:600; text-transform:uppercase; letter-spacing:.04em; }
  .vf-pp-s.active .vf-pp-slbl { color:var(--blue); }
  .vf-pp-s.done .vf-pp-slbl { color:#22c55e; }
  .vf-pp-body { padding:0 30px 24px; }
  .vf-pp-stit { font-family:'Fraunces'; font-size:20px; font-weight:800; color:var(--text); letter-spacing:-.3px; margin-bottom:3px; }
  .vf-pp-ssub { font-size:12px; color:var(--text3); margin-bottom:18px; line-height:1.55; }
  .vf-pp-field { margin-bottom:14px; }
  .vf-pp-lbl { display:block; font-size:11px; font-weight:600; color:var(--text2); margin-bottom:4px; }
  .vf-pp-lbl .req { color:#ef4444; }
  .vf-pp-inp { width:100%; padding:10px 13px; background:var(--bg-alt); border:.5px solid var(--bord-md); border-radius:10px; color:var(--text); font-size:13px; font-family:inherit; outline:none; transition:border-color .2s; }
  .vf-pp-inp:focus { border-color:var(--blue); }
  .vf-pp-inp::placeholder { color:var(--text3); }
  textarea.vf-pp-inp { min-height:82px; resize:vertical; line-height:1.6; }
  select.vf-pp-inp { cursor:pointer; }
  .vf-pp-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  @media(max-width:520px) { .vf-pp-row { grid-template-columns:1fr; } }
  .vf-pp-feats { display:grid; grid-template-columns:1fr 1fr; gap:7px; }
  .vf-pp-feat {
    padding:9px 11px; border:.5px solid var(--bord-md); border-radius:9px;
    cursor:pointer; transition:all .18s; display:flex; align-items:center; gap:7px;
    font-size:12px; font-weight:500; color:var(--text2); background:var(--bg-alt);
    user-select:none;
  }
  .vf-pp-feat:hover { border-color:var(--blue); color:var(--blue); background:rgba(0,113,227,.04); }
  .vf-pp-feat.on { border-color:var(--blue); background:rgba(0,113,227,.07); color:var(--blue); }
  .vf-pp-chk { width:15px; height:15px; border-radius:4px; border:1.5px solid var(--bord-md); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all .18s; }
  .vf-pp-feat.on .vf-pp-chk { background:var(--blue); border-color:var(--blue); }
  .vf-pp-cbar { display:flex; gap:8px; flex-wrap:wrap; padding:12px 14px; background:var(--bg-alt); border:.5px solid var(--bord); border-radius:11px; margin-bottom:18px; align-items:center; }
  .vf-pp-ctag { display:flex; align-items:center; gap:4px; padding:3px 9px; border-radius:980px; font-size:10px; font-weight:700; background:#fff; border:.5px solid var(--bord-md); color:var(--text2); }
  .vf-pp-cdot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
  .vf-pp-ft { display:flex; align-items:center; justify-content:space-between; padding:16px 30px; border-top:.5px solid var(--bord); background:var(--bg-alt); gap:10px; flex-wrap:wrap; }
  .vf-pp-prev { padding:10px 20px; border-radius:980px; border:.5px solid var(--bord-md); background:none; color:var(--text2); font-size:13px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .2s; }
  .vf-pp-prev:hover { background:#fff; }
  .vf-pp-next { padding:10px 24px; border-radius:980px; border:none; background:var(--blue); color:#fff; font-size:13px; font-weight:700; cursor:pointer; font-family:inherit; transition:all .2s; box-shadow:0 4px 12px rgba(0,113,227,.28); display:flex; align-items:center; gap:7px; }
  .vf-pp-next:hover { background:var(--blue-h); transform:translateY(-1px); }
  .vf-pp-next:disabled { opacity:.5; cursor:not-allowed; transform:none; }
  .vf-pp-info-note { display:flex; align-items:flex-start; gap:9px; padding:12px 14px; background:rgba(0,113,227,.05); border:.5px solid rgba(0,113,227,.14); border-radius:10px; font-size:11px; color:var(--blue); line-height:1.6; margin-top:14px; }

  /* â”€â”€ Menu items â”€â”€ */
  .pp-menu-item { display:flex; gap:14px; padding:14px; background:var(--bg-alt); border:.5px solid var(--bord-md); border-radius:12px; margin-bottom:10px; position:relative; }
  .pp-menu-photo-wrap { display:flex; flex-direction:column; align-items:center; gap:6px; flex-shrink:0; }
  .pp-menu-photo-preview { width:70px; height:70px; border-radius:9px; object-fit:cover; border:.5px solid var(--bord-md); }
  .pp-menu-photo-btn { display:flex; align-items:center; gap:5px; padding:5px 9px; border-radius:7px; background:var(--bg); border:.5px solid var(--bord-md); font-size:11px; font-weight:600; color:var(--text2); cursor:pointer; transition:all .2s; white-space:nowrap; }
  .pp-menu-photo-btn:hover { border-color:var(--blue); color:var(--blue); }
  .pp-menu-fields { flex:1; min-width:0; }
  .pp-menu-del { position:absolute; top:10px; right:10px; width:24px; height:24px; border-radius:50%; border:none; background:rgba(239,68,68,.1); color:#ef4444; cursor:pointer; font-size:14px; display:flex; align-items:center; justify-content:center; transition:all .2s; }
  .pp-menu-del:hover { background:#ef4444; color:#fff; }
  .pp-menu-empty { text-align:center; padding:28px; color:var(--text3); font-size:13px; border:.5px dashed var(--bord-md); border-radius:12px; margin-bottom:10px; }
  .pp-add-btn { display:flex; align-items:center; gap:7px; padding:10px 18px; border-radius:980px; border:.5px solid var(--bord-md); background:none; color:var(--text2); font-size:13px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .2s; margin-top:4px; }
  .pp-add-btn:hover { border-color:var(--blue); color:var(--blue); background:rgba(0,113,227,.04); }
  @media(max-width:520px){ .pp-menu-item { flex-direction:column; } .pp-menu-photo-wrap { flex-direction:row; } }

  /* â”€â”€ Horaires â”€â”€ */
  .pp-hours-grid { display:flex; flex-direction:column; gap:7px; }
  .pp-hours-row { display:grid; grid-template-columns:90px 1fr; align-items:center; gap:10px; }
  .pp-hours-day { font-size:12px; font-weight:600; color:var(--text2); }
  .pp-hours-inp { padding:8px 11px; font-size:12px; }

  /* â”€â”€ Radio cards (livraison) â”€â”€ */
  .pp-radio-group { display:flex; flex-direction:column; gap:8px; }
  .pp-radio-card { display:flex; align-items:flex-start; gap:11px; padding:13px 15px; border:.5px solid var(--bord-md); border-radius:11px; cursor:pointer; transition:all .2s; background:var(--bg-alt); }
  .pp-radio-card input { margin-top:3px; accent-color:var(--blue); flex-shrink:0; }
  .pp-radio-card.on { border-color:var(--blue); background:rgba(0,113,227,.05); }
  .pp-radio-card:hover { border-color:var(--blue); }

  /* â”€â”€ Villes â”€â”€ */
  .pp-city-item { padding:16px; background:var(--bg-alt); border:.5px solid var(--bord-md); border-radius:12px; margin-bottom:10px; position:relative; }
  .pp-city-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; }
  .pp-city-num { font-size:12px; font-weight:700; color:var(--blue); }
  /* â”€â”€ City system â”€â”€ */
  .fr-city-setup-row { display:flex; align-items:center; gap:10px; margin-bottom:10px; }
  .fr-city-setup-num { width:26px; height:26px; border-radius:50%; background:var(--blue); color:#fff; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:700; flex-shrink:0; }
  .fr-tabs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px; padding-bottom:14px; border-bottom:.5px solid var(--bord); }
  .fr-tab { padding:7px 16px; border-radius:980px; border:.5px solid var(--bord-md); background:var(--bg-alt); color:var(--text2); font-size:12px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .2s; }
  .fr-tab.on { background:var(--blue); color:#fff; border-color:var(--blue); box-shadow:0 3px 10px rgba(0,113,227,.25); }
  .fr-tab:hover:not(.on) { border-color:var(--blue); color:var(--blue); }
  .fr-tab-add { padding:7px 14px; border-radius:980px; border:.5px dashed var(--bord-md); background:none; color:var(--text3); font-size:12px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .2s; }
  .fr-tab-add:hover { border-color:var(--blue); color:var(--blue); }
  .fr-section { border:.5px solid var(--bord); border-radius:14px; overflow:hidden; margin-bottom:12px; }
  .fr-section-head { padding:13px 16px; background:var(--bg-alt); font-size:13px; font-weight:700; color:var(--text); border-bottom:.5px solid var(--bord); letter-spacing:-.1px; }
  .fr-section-body { padding:16px; }
  `;
  document.head.appendChild(_css);

  /* â”€â”€â”€ 3. PROFILE ICON DANS LA NAV â”€â”€â”€ */
  const _nav = document.getElementById('mainNav');
  _nav.style.position = 'relative'; // assure le positionnement absolu de l'icone
  const _proArea = document.createElement('div');
  _proArea.className = 'vf-nav-pro';
  _proArea.id = 'vf-nav-pro';
  _proArea.innerHTML = `
    <button class="vf-pro-btn" id="vf-pro-btn" aria-label="Connexion">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      <span id="vf-pro-label">Connexion</span>
      <div class="vf-pro-dot" id="vf-pro-dot"></div>
    </button>
    <div class="vf-drop" id="vf-drop"></div>
  `;
  _nav.appendChild(_proArea);
  document.getElementById('vf-pro-btn').addEventListener('click', function(e){ e.stopPropagation(); if(window.vfToggleDrop) window.vfToggleDrop(); });
  document.addEventListener('click', e => {
    if (!_proArea.contains(e.target)) document.getElementById('vf-drop').classList.remove('open');
  });

  /* â”€â”€â”€ 4. AUTH MODAL â”€â”€â”€ */
  const _authOv = document.createElement('div');
  _authOv.className = 'vf-auth-ov';
  _authOv.id = 'vf-auth-ov';
  _authOv.onclick = e => { if (e.target === _authOv) vfCloseAuth(); };
  _authOv.innerHTML = `
    <div class="vf-auth-card">
      <button class="vf-auth-x" onclick="vfCloseAuth()">&times;</button>
      <div class="vf-auth-hd">
        <div class="vf-auth-ico">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="vf-auth-tit">Mon espace VisioFlow</div>
        <div class="vf-auth-sub">Connectez-vous pour suivre votre projet et configurer votre commande.</div>
      </div>
      <div class="vf-auth-tabs">
        <button class="vf-auth-tab on" id="vf-tab-log" onclick="vfSwitchTab('login')">Connexion</button>
        <button class="vf-auth-tab" id="vf-tab-reg" onclick="vfSwitchTab('register')">Inscription</button>
      </div>
      <div class="vf-auth-form" id="vf-form-log">
        <div class="vf-af-err" id="vf-log-err"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span id="vf-log-err-txt"></span></div>
        <div class="vf-af-f"><label class="vf-af-l">Email</label><input class="vf-af-i" type="email" id="vf-log-email" placeholder="votre@email.com" onkeydown="if(event.key==='Enter')vfDoLogin()"/></div>
        <div class="vf-af-f"><label class="vf-af-l">Mot de passe</label><div style="position:relative"><input class="vf-af-i" type="password" id="vf-log-pw" placeholder="••••••••" onkeydown="if(event.key==='Enter')vfDoLogin()" style="width:100%;box-sizing:border-box;padding-right:44px"/><button type="button" onclick="var i=this.parentElement.querySelector('input');if(i){var s=i.type==='password';i.type=s?'text':'password';this.textContent=s?'🙈':'👁️'}" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;line-height:1;z-index:2;padding:4px">👁️</button></div></div>
        <button class="vf-af-sub" id="vf-log-btn" onclick="vfDoLogin()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          Se connecter
        </button>
      </div>
      <div class="vf-auth-form" id="vf-form-reg" style="display:none">
        <div class="vf-af-err" id="vf-reg-err"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span id="vf-reg-err-txt"></span></div>
        <div class="vf-af-f"><label class="vf-af-l">Prenom &amp; Nom</label><input class="vf-af-i" type="text" id="vf-reg-name" placeholder="Jean Dupont" onkeydown="if(event.key==='Enter')document.getElementById('vf-reg-email').focus()"/></div>
        <div class="vf-af-f"><label class="vf-af-l">Email</label><input class="vf-af-i" type="email" id="vf-reg-email" placeholder="votre@email.com" onkeydown="if(event.key==='Enter')document.getElementById('vf-reg-pw').focus()"/></div>
        <div class="vf-af-f"><label class="vf-af-l">Mot de passe <span style="color:var(--text3);font-weight:400">(min. 6 car.)</span></label><div style="position:relative"><input class="vf-af-i" type="password" id="vf-reg-pw" placeholder="••••••••" onkeydown="if(event.key==='Enter')vfDoRegister()" style="width:100%;box-sizing:border-box;padding-right:44px"/><button type="button" onclick="var i=this.parentElement.querySelector('input');if(i){var s=i.type==='password';i.type=s?'text':'password';this.textContent=s?'🙈':'👁️'}" style="position:absolute;right:10px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:18px;line-height:1;z-index:2;padding:4px">👁️</button></div></div>
        <button class="vf-af-sub" id="vf-reg-btn" onclick="vfDoRegister()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          Créer mon compte
        </button>
      </div>
      <div class="vf-auth-ft">Protégé par Firebase Auth &middot; SSL 256-bit &middot; PCI-DSS</div>
    </div>
  `;
  document.body.appendChild(_authOv);

  /* â”€â”€â”€ 5. PAGE ESPACE CLIENT â”€â”€â”€ */
  const _ecPage = document.createElement('div');
  _ecPage.className = 'page';
  _ecPage.id = 'page-espace-client';
  _ecPage.innerHTML = '<div class="ec-wrap" id="ec-content"><div style="text-align:center;padding:80px 24px;color:var(--text3)">Chargement…</div></div>';
  _nav.parentNode.insertBefore(_ecPage, _nav);

  /* â”€â”€â”€ 6. MODAL PRÉ-PAIEMENT â”€â”€â”€ */
  const _ppOv = document.createElement('div');
  _ppOv.className = 'vf-pp-ov';
  _ppOv.id = 'vf-pp-ov';
  _ppOv.innerHTML = `
    <div class="vf-pp-wrap">
      <div class="vf-pp-hd">
        <button class="vf-pp-x" onclick="vfClosePP()">&times;</button>
        <div class="vf-pp-sbar" id="vf-pp-sbar"></div>
      </div>
      <div class="vf-pp-body" id="vf-pp-body"></div>
      <div class="vf-pp-ft" id="vf-pp-ft"></div>
    </div>
  `;
  document.body.appendChild(_ppOv);

  /* â”€â”€â”€ 7. DROPDOWN â”€â”€â”€ */
  window.vfToggleDrop = function () {
    const drop = document.getElementById('vf-drop');
    const isOpen = drop.classList.contains('open');
    if (!isOpen) renderDrop();
    drop.classList.toggle('open', !isOpen);
  };

  function renderDrop () {
    const drop = document.getElementById('vf-drop');
    if (currentFBUser) {
      const isAdmin = currentFBUser.email === ADMIN_UID_EMAIL;
      const nm = currentFBUser.displayName || currentFBUser.email.split('@')[0];
      const ini = nm.charAt(0).toUpperCase();
      drop.innerHTML = `
        <div class="vf-drop-user">
          <div class="vf-drop-av">${ini}</div>
          <div><div class="vf-drop-uname">${nm}</div><div class="vf-drop-uemail">${currentFBUser.email}</div></div>
        </div>
        <div class="vf-drop-body">
          ${isAdmin
            ? `<button class="vf-dbtn blue" onclick="vfToggleDrop();window.location.href='/dashboard'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>Dashboard Admin</button>`
            : `<button class="vf-dbtn blue" onclick="vfToggleDrop();showPage('espace-client')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>Mon Espace Client</button>`
          }
          <div class="vf-drop-sep"></div>
          <button class="vf-dbtn red" onclick="vfToggleDrop();vfDoLogout()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Se deconnecter</button>
        </div>
      `;
    } else {
      drop.innerHTML = `
        <div class="vf-drop-hd"><div class="vf-drop-title">Mon Compte</div><div class="vf-drop-sub">Suivez votre projet en temps reel.</div></div>
        <div class="vf-drop-body">
          <button class="vf-dbtn blue" onclick="vfToggleDrop();vfOpenAuth('login')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>Se connecter</button>
          <button class="vf-dbtn" onclick="vfToggleDrop();vfOpenAuth('register')"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>Creer un compte</button>
        </div>
      `;
    }
  }

  /* â”€â”€â”€ 8. AUTH MODAL CONTROLS â”€â”€â”€ */
  let _authCB = null;

  window.vfOpenAuth = function (tab, cb) {
    _authCB = cb || null;
    document.getElementById('vf-auth-ov').classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const f = document.getElementById(tab === 'register' ? 'vf-reg-name' : 'vf-log-email');
      if (f) f.focus();
    }, 150);
    document.body.style.overflow = 'hidden';
    vfSwitchTab(tab || 'login');
    setTimeout(() => { const f = document.getElementById('vf-log-email'); if (f) f.focus(); }, 200);
  };
  window.vfCloseAuth = function () {
    document.getElementById('vf-auth-ov').classList.remove('open');
    document.body.style.overflow = '';
    document.body.style.overflow = '';
    _authCB = null;
  };
  window.vfSwitchTab = function (tab) {
    document.getElementById('vf-tab-log').className = 'vf-auth-tab' + (tab === 'login' ? ' on' : '');
    document.getElementById('vf-tab-reg').className = 'vf-auth-tab' + (tab === 'register' ? ' on' : '');
    document.getElementById('vf-form-log').style.display = tab === 'login' ? '' : 'none';
    document.getElementById('vf-form-reg').style.display = tab === 'register' ? '' : 'none';
    document.getElementById('vf-log-err').classList.remove('on');
    document.getElementById('vf-reg-err').classList.remove('on');
  };

  /* â”€â”€â”€ 9. FIREBASE AUTH FUNCTIONS â”€â”€â”€ */
  function _fbErrMsg (code) {
    return ({
      'auth/user-not-found':'Aucun compte trouve avec cet email.',
      'auth/wrong-password':'Mot de passe incorrect.',
      'auth/invalid-credential':'Email ou mot de passe incorrect.',
      'auth/email-already-in-use':'Un compte existe deja avec cet email.',
      'auth/invalid-email':'Adresse email invalide.',
      'auth/weak-password':'Mot de passe trop faible (min. 6 car.).',
      'auth/too-many-requests':'Trop de tentatives. Reessayez dans quelques minutes.',
      'auth/network-request-failed':'Erreur reseau. Verifiez votre connexion.',
      'auth/operation-not-allowed':'Connexion par email non activee. Activez-la dans Firebase Console → Authentication → Sign-in methods.',
      'auth/invalid-api-key':'Cle API Firebase invalide. Verifiez la configuration.',
      'auth/app-not-authorized':'Application non autorisee. Verifiez le domaine dans Firebase Console.',
      'auth/expired-action-code':'Lien expire. Reessayez.',
      'auth/popup-closed-by-user':'Fenêtre fermee avant la fin. Reessayez.',
    })[code] || ('Erreur : ' + (code || 'inconnue') + '. Reessayez.');
  }

  const _loginBtnHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Se connecter';
  const _regBtnHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg> Créer mon compte';

  window.vfDoLogin = async function () {
    const email = document.getElementById('vf-log-email').value.trim();
    const pw = document.getElementById('vf-log-pw').value;
    const errEl = document.getElementById('vf-log-err');
    const errTxt = document.getElementById('vf-log-err-txt');
    const btn = document.getElementById('vf-log-btn');
    errEl.classList.remove('on');
    if (!email || !pw) { errTxt.textContent = 'Veuillez remplir tous les champs.'; errEl.classList.add('on'); return; }
    if (!auth) { errTxt.textContent = 'Service d\'authentification indisponible. Rechargez la page.'; errEl.classList.add('on'); return; }
    btn.disabled = true; btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="31.4" style="animation:spin 1s linear infinite"/></svg> Connexion…';
    try {
      const cred = await auth.signInWithEmailAndPassword(email, pw);
      currentFBUser = cred.user;
      _updateProIconUI();
      vfCloseAuth();
      btn.disabled = false; btn.innerHTML = _loginBtnHTML;
      if (_authCB) { const cb = _authCB; _authCB = null; cb(); }
      else { window.showPage(cred.user.email === ADMIN_UID_EMAIL ? 'admin' : 'espace-client'); }
    } catch (e) {
      btn.disabled = false; btn.innerHTML = _loginBtnHTML;
      errTxt.textContent = _fbErrMsg(e.code); errEl.classList.add('on');
    }
  };

  window.vfDoRegister = async function () {
    const name = document.getElementById('vf-reg-name').value.trim();
    const email = document.getElementById('vf-reg-email').value.trim();
    const pw = document.getElementById('vf-reg-pw').value;
    const errEl = document.getElementById('vf-reg-err');
    const errTxt = document.getElementById('vf-reg-err-txt');
    const btn = document.getElementById('vf-reg-btn');
    errEl.classList.remove('on');
    if (!name || !email || !pw) { errTxt.textContent = 'Veuillez remplir tous les champs.'; errEl.classList.add('on'); return; }
    if (pw.length < 6) { errTxt.textContent = 'Mot de passe : 6 caractères minimum.'; errEl.classList.add('on'); return; }
    if (!auth) { errTxt.textContent = 'Service d\'authentification indisponible. Rechargez la page.'; errEl.classList.add('on'); return; }
    btn.disabled = true; btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="31.4" style="animation:spin 1s linear infinite"/></svg> Creation…';
    try {
      const cred = await auth.createUserWithEmailAndPassword(email, pw);
      await cred.user.updateProfile({ displayName: name });
      // Envoyer le code de vérification
      await fetch('/api/auth/send-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      btn.disabled = false; btn.innerHTML = _regBtnHTML;
      vfCloseAuth();
      // Afficher la modale de vérification avant de connecter l'utilisateur
      showVerificationModalFB(email, name, cred.user);
    } catch (e) {
      btn.disabled = false; btn.innerHTML = _regBtnHTML;
      errTxt.textContent = _fbErrMsg(e.code); errEl.classList.add('on');
    }
  };

  function showVerificationModalFB(email, name, fbUser) {
    var existing = document.getElementById('vf-verif-modal-fb');
    if (existing) existing.remove();
    var modal = document.createElement('div');
    modal.id = 'vf-verif-modal-fb';
    modal.style.cssText = 'position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:16px';
    modal.innerHTML = `
      <div style="background:#141724;border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:36px 32px;max-width:400px;width:100%;box-shadow:0 40px 80px rgba(0,0,0,.5)">
        <div style="text-align:center;margin-bottom:24px">
          <div style="font-size:36px;margin-bottom:10px">🔐</div>
          <div style="font-family:Outfit,sans-serif;font-size:22px;font-weight:800;color:#fff;margin-bottom:6px">Vérifiez votre email</div>
          <div style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.6">Un code à 6 chiffres a été envoyé à<br><strong style="color:#60a5fa">${email}</strong></div>
        </div>
        <div id="vf-verif-fb-error" style="display:none;background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:10px 14px;font-size:12px;color:#f87171;margin-bottom:14px"></div>
        <input id="vf-verif-fb-code" type="text" inputmode="numeric" maxlength="6" placeholder="000000"
          style="width:100%;box-sizing:border-box;background:#1a2035;border:1px solid rgba(255,255,255,.18);border-radius:12px;padding:14px 16px;color:#fff;font-size:28px;font-weight:700;letter-spacing:10px;text-align:center;font-family:monospace;outline:none;margin-bottom:16px;color-scheme:dark"
          oninput="this.value=this.value.replace(/\\D/g,'').slice(0,6)"/>
        <button onclick="window._submitVerifFB('${email}','${name}')"
          style="width:100%;padding:14px;border:none;border-radius:14px;background:#0071E3;color:#fff;font-size:15px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;margin-bottom:12px">
          Confirmer →
        </button>
        <div style="text-align:center">
          <button onclick="window._resendVerifFB('${email}')"
            style="background:none;border:none;color:#60a5fa;font-size:13px;cursor:pointer;font-family:Inter,sans-serif">
            Renvoyer le code
          </button>
        </div>
      </div>`;
    document.body.appendChild(modal);
    setTimeout(function(){ var i = document.getElementById('vf-verif-fb-code'); if(i) i.focus(); }, 100);

    window._submitVerifFB = async function(em, nm) {
      var codeEl = document.getElementById('vf-verif-fb-code');
      var errEl  = document.getElementById('vf-verif-fb-error');
      var code   = codeEl ? codeEl.value.trim() : '';
      if (code.length < 6) { if(errEl){ errEl.textContent='Entrez le code à 6 chiffres.'; errEl.style.display='block'; } return; }
      if (errEl) errEl.style.display = 'none';
      try {
        var r = await fetch('/api/auth/verify-code', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: em, code }),
        });
        var data = await r.json();
        if (!r.ok) { if(errEl){ errEl.textContent = data.error || 'Code invalide.'; errEl.style.display='block'; } return; }
        currentFBUser = fbUser;
        _updateProIconUI();
        var m = document.getElementById('vf-verif-modal-fb');
        if (m) m.remove();
        if (_authCB) { var cb = _authCB; _authCB = null; cb(); } else { window.showPage('espace-client'); }
      } catch(e) {
        if(errEl){ errEl.textContent='Erreur réseau. Réessayez.'; errEl.style.display='block'; }
      }
    };

    window._resendVerifFB = async function(em) {
      await fetch('/api/auth/send-verification', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: em }),
      });
    };
  }

  window.vfDoLogout = async function () {
    _clearDraft();
    currentFBUser = null;
    try { if (auth) await auth.signOut(); } catch (e) {}
    _updateProIconUI();
    window.showPage('accueil');
  };

  /* â”€â”€â”€ 10. AUTH STATE OBSERVER â”€â”€â”€ */
  let _authResolved = false;
  if (auth) {
    auth.onAuthStateChanged(user => {
      currentFBUser = user;
      _authResolved = true;
      _updateProIconUI();
      // If espace-client is currently visible and user just became authenticated, reload it
      const ecPage = document.getElementById('page-espace-client');
      if (user && ecPage && ecPage.classList.contains('active')) {
        _renderEC();
      }
    });
  }

  function _updateProIconUI () {
    const btn = document.getElementById('vf-pro-btn');
    if (!btn) return;
    if (currentFBUser) {
      const nm = currentFBUser.displayName || currentFBUser.email.split('@')[0];
      const ini = nm.charAt(0).toUpperCase();
      btn.innerHTML = '<span style="font-size:13px;font-weight:800">' + ini + '</span><div class="vf-pro-dot on" id="vf-pro-dot"></div>';
      btn.style.padding = '0';
      btn.style.width = '32px';
      btn.style.borderRadius = '50%';
      btn.setAttribute('aria-label', nm);
    } else {
      btn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><span id="vf-pro-label">Connexion</span><div class="vf-pro-dot" id="vf-pro-dot"></div>';
      btn.style.padding = '';
      btn.style.width = '';
      btn.style.borderRadius = '';
      btn.setAttribute('aria-label', 'Connexion');
    }
  }

  /* â”€â”€â”€ 11. ESPACE CLIENT â”€â”€â”€ */
  async function _renderEC () {
    const wrap = document.getElementById('ec-content');
    if (!wrap || !currentFBUser) return;
    const nm = currentFBUser.displayName || currentFBUser.email.split('@')[0];
    const ini = nm.charAt(0).toUpperCase();
    wrap.innerHTML = `
      <div class="ec-hero">
        <div class="ec-av">${ini}</div>
        <div><div class="ec-name">Bonjour, ${nm}&nbsp;👋</div><div class="ec-email">${currentFBUser.email}</div></div>
      </div>
      <div class="ec-stitle"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>Mes projets</div>
      <div class="ec-card" id="ec-projs"><div style="text-align:center;padding:28px;color:var(--text3);font-size:13px">Chargement…</div></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
        <button class="bg" style="font-size:12px;padding:9px 18px;border:.5px solid var(--bord-md);border-radius:980px" onclick="vfLoadEC()">↺ Actualiser</button>
      </div>
    `;
    await _loadProjects();
  }

  window.vfLoadEC = async function () { await _loadProjects(); };

  async function _loadProjects () {
    const card = document.getElementById('ec-projs');
    if (!card || !currentFBUser) return;
    card.innerHTML = '<div style="text-align:center;padding:24px;color:var(--text3)">Chargement…</div>';
    const _fsQuery = (q) => Promise.race([
      q.get(),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 8000))
    ]);
    try {
      let projects = [];
      if (typeof db !== 'undefined' && db) {
        try {
          const snap = await _fsQuery(
            db.collection(PROJECTS_COL)
              .where('uid', '==', currentFBUser.uid)
              .orderBy('createdAt', 'desc').limit(10)
          );
          snap.forEach(doc => projects.push({ id: doc.id, ...doc.data() }));
        } catch (indexErr) {
          const snap = await _fsQuery(
            db.collection(PROJECTS_COL)
              .where('uid', '==', currentFBUser.uid).limit(10)
          );
          snap.forEach(doc => projects.push({ id: doc.id, ...doc.data() }));
          projects.sort((a, b) => {
            const ta = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0);
            const tb = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0);
            return tb - ta;
          });
        }
      }
      if (projects.length === 0) {
        card.innerHTML = `<div class="ec-empty"><div class="ec-empty-ico">🚀</div><div class="ec-empty-tit">Aucun projet pour le moment</div><div class="ec-empty-sub">Choisissez votre offre et configurez votre site — votre projet apparaîtra ici.</div><button class="ba" style="font-size:14px" onclick="window.showPage('accueil');setTimeout(function(){var s=document.querySelector('.home-packs-sec');if(s)s.scrollIntoView({behavior:'smooth',block:'start'});},200);">Voir nos tarifs →</button></div>`;
        return;
      }
      const ST = {
        pending:   { steps:[1,0,0,0], lbl:'En attente de paiement', col:'#f59e0b' },
        paid:      { steps:[1,1,0,0], lbl:'Paiement reçu ✓',        col:'#0071E3' },
        building:  { steps:[1,1,1,0], lbl:'En cours de creation',   col:'#8338ec' },
        delivered: { steps:[1,1,1,1], lbl:'Site livre 🎉',          col:'#22c55e' },
      };
      const SLBL = ['Commande','Paiement','Creation','Livraison'];
      card.innerHTML = projects.map(p => {
        const st = ST[p.status] || ST.pending;
        const cls = p.pack === 'premium' ? 'prem' : 'ess';
        const pnm = p.pack ? p.pack.charAt(0).toUpperCase() + p.pack.slice(1) : 'Essentiel';
        const dt = p.createdAt?.toDate ? p.createdAt.toDate().toLocaleDateString('fr-FR') : '–';
        const done = st.steps.filter(s=>s).length;
        const stHtml = SLBL.map((_, i) => {
          const scls = st.steps[i] ? (i < done - 1 ? 'done' : 'active') : '';
          return `<div class="ec-step ${scls}"></div>`;
        }).join('');
        return `<div class="ec-proj"><div class="ec-ptop"><div><div class="ec-pname">${p.businessName||p.cuisine||'Projet'}</div><div class="ec-pmeta"><span>${dt}</span>${p.businessType?`<span>${p.businessType}</span>`:''}</div></div><span class="ec-ppill ${cls}">${pnm}</span></div><div class="ec-sbar">${stHtml}<span class="ec-slbl" style="color:${st.col}">${st.lbl}</span></div></div>`;
      }).join('');
    } catch (e) {
      const isTimeout = e.message === 'timeout';
      card.innerHTML = `<div class="ec-empty"><div class="ec-empty-ico">⚠️</div><div class="ec-empty-tit">${isTimeout ? 'Connexion lente' : 'Erreur de chargement'}</div><div class="ec-empty-sub">${isTimeout ? 'Vérifiez votre connexion et réessayez.' : 'Erreur Firestore. Collection : ' + PROJECTS_COL}</div><button class="bg" onclick="vfLoadEC()">Réessayer</button></div>`;
    }
  }

  /* â”€â”€â”€ 12. PRÉ-PAIEMENT — FORMULAIRES DYNAMIQUES â”€â”€â”€ */

  /* â”€â”€ Étapes par pack â”€â”€ */
  const PACK_STEPS = {
    essentiel: [
      { id:'identity',   lbl:'Identite',       tit:'Identite de votre restaurant',  sub:'Informations de base affichees sur votre site.' },
      { id:'hours',      lbl:'Infos pratiques', tit:'Horaires & Reseaux sociaux',    sub:'Vos horaires et liens vers vos reseaux.' },
      { id:'menu',       lbl:'Menu',            tit:'Votre carte',                   sub:'Ajoutez vos plats, prix et photos.' },
      { id:'story',      lbl:'Histoire',        tit:'Votre histoire & personnalisation', sub:'Ce qui rend votre restaurant unique.' },
    ],
    premium: [
      { id:'identity',   lbl:'Identite',       tit:'Identite de votre restaurant',  sub:'Informations de base affichees sur votre site.' },
      { id:'hours',      lbl:'Infos pratiques', tit:'Horaires & Reseaux sociaux',    sub:'Vos horaires et liens vers vos reseaux.' },
      { id:'menu',       lbl:'Menu',            tit:'Votre carte',                   sub:'Ajoutez vos plats, prix et photos.' },
      { id:'story',      lbl:'Histoire',        tit:'Votre histoire & personnalisation', sub:'Ce qui rend votre restaurant unique.' },
      { id:'delivery',   lbl:'Livraison',       tit:'Commandes & Livraison',         sub:'Configurez votre système de commande en ligne.' },
    ],
  };

  let _ppStep = 1, _ppData = {};
  const _DRAFT_KEY = 'vf_pp_draft';

  function _getPack() { return (typeof bState !== 'undefined' ? bState.curPack : null) || 'essentiel'; }
  function _getSteps() { return PACK_STEPS[_getPack()] || PACK_STEPS.essentiel; }
  function _totalSteps() { return _getSteps().length; }
  function _curStepDef() { return _getSteps()[_ppStep - 1]; }

  /* â”€â”€ Draft localStorage â”€â”€ */
  function _saveDraft() {
    try { localStorage.setItem(_DRAFT_KEY, JSON.stringify({ step:_ppStep, data:_ppData, pack:_getPack() })); } catch(e) {}
  }
  function _restoreDraft() {
    try {
      const raw = localStorage.getItem(_DRAFT_KEY); if (!raw) return false;
      const d = JSON.parse(raw);
      if (d.pack && typeof bState !== 'undefined') bState.curPack = d.pack;
      _ppStep = d.step || 1; _ppData = d.data || {};
      return true;
    } catch(e) { return false; }
  }
  function _clearDraft() { try { localStorage.removeItem(_DRAFT_KEY); } catch(e) {} }

  /* â”€â”€ Menu items helpers â”€â”€ */
  function _menuItems() { return _ppData.menuItems || []; }
  function _nextMenuId() { return Date.now() + Math.random(); }

  window.vfSetMenuMode = function(mode) {
    _ppData.menuMode = mode;
    _saveDraft();
    const itemsZone = document.getElementById('pp-menu-items-zone');
    const photoZone = document.getElementById('pp-menu-photo-zone');
    const btnItems  = document.getElementById('pp-mode-items');
    const btnPhoto  = document.getElementById('pp-mode-photo');
    if (!itemsZone || !photoZone) return;
    if (mode === 'items') {
      itemsZone.style.display = 'block'; photoZone.style.display = 'none';
      if (btnItems) { btnItems.style.borderColor = 'var(--blue)'; btnItems.style.background = 'var(--blue)'; btnItems.style.color = '#fff'; }
      if (btnPhoto) { btnPhoto.style.borderColor = '#e5e7eb'; btnPhoto.style.background = '#fff'; btnPhoto.style.color = '#6b7280'; }
      _renderMenuItems();
    } else {
      itemsZone.style.display = 'none'; photoZone.style.display = 'block';
      if (btnPhoto) { btnPhoto.style.borderColor = 'var(--blue)'; btnPhoto.style.background = 'var(--blue)'; btnPhoto.style.color = '#fff'; }
      if (btnItems) { btnItems.style.borderColor = '#e5e7eb'; btnItems.style.background = '#fff'; btnItems.style.color = '#6b7280'; }
    }
  };

  window.vfMenuPhotoUpload = async function(input) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      _ppData.menuPhotoDataUrl = e.target.result;
      _saveDraft();
      const lbl = document.getElementById('pp-photo-label');
      if (lbl) lbl.textContent = 'Photo chargee ✓';
      const zone = document.getElementById('pp-menu-photo-zone');
      if (zone) {
        let img = document.getElementById('pp-menu-photo-preview');
        if (!img) { img = document.createElement('img'); img.id = 'pp-menu-photo-preview'; img.style.cssText = 'max-width:100%;max-height:220px;border-radius:10px;object-fit:contain;margin-top:12px'; zone.appendChild(img); }
        img.src = e.target.result;
      }
    };
    reader.readAsDataURL(file);
    // Upload vers Firebase Storage
    if(window.uploadToStorage){
      const slug = ((formCities[0]&&formCities[0].name)||'restaurant').toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
      const ext = file.name.split('.').pop();
      window.uploadToStorage(file, 'forms/'+slug+'/menu-carte-'+Date.now()+'.'+ext)
        .then(function(url){ if(url){ window._menuCardPhotoUrl = url; } })
        .catch(function(){});
    }
  };

  window.vfMenuAdd = function() {
    if (!_ppData.menuItems) _ppData.menuItems = [];
    _ppData.menuItems.push({ id: _nextMenuId(), name:'', price:'', category:'Plat', photoDataUrl:'' });
    _saveDraft(); _renderMenuItems();
  };
  window.vfMenuRemove = function(id) {
    _ppData.menuItems = (_ppData.menuItems||[]).filter(m => String(m.id) !== String(id));
    _saveDraft(); _renderMenuItems();
  };
  window.vfMenuPhoto = function(id, input) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      const item = (_ppData.menuItems||[]).find(m => String(m.id) === String(id));
      if (item) { item.photoDataUrl = e.target.result; _saveDraft(); }
      const preview = document.getElementById('mph-' + id);
      if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    };
    reader.readAsDataURL(file);
  };
  function _renderMenuItems() {
    const container = document.getElementById('pp-menu-list');
    if (!container) return;
    const items = _menuItems();
    if (items.length === 0) {
      container.innerHTML = '<div class="pp-menu-empty">Aucun plat ajoute. Cliquez sur "+ Ajouter un plat" pour commencer.</div>';
      return;
    }
    container.innerHTML = items.map(item => `
      <div class="pp-menu-item" id="pmi-${item.id}">
        <div class="pp-menu-photo-wrap">
          ${item.photoDataUrl ? `<img id="mph-${item.id}" src="${item.photoDataUrl}" class="pp-menu-photo-preview" style="display:block"/>` : `<img id="mph-${item.id}" class="pp-menu-photo-preview" style="display:none"/>`}
          <label class="pp-menu-photo-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            Photo
            <input type="file" accept="image/*" style="display:none" onchange="vfMenuPhoto('${item.id}', this)"/>
          </label>
        </div>
        <div class="pp-menu-fields">
          <div class="vf-pp-row">
            <div class="vf-pp-field">
              <label class="vf-pp-lbl">Nom du plat <span class="req">*</span></label>
              <input class="vf-pp-inp" placeholder="Ex : Entrecote grillee" value="${_esc(item.name)}" onchange="_ppMenuUpdate('${item.id}','name',this.value)"/>
            </div>
            <div class="vf-pp-field">
              <label class="vf-pp-lbl">Prix (€) <span class="req">*</span></label>
              <input class="vf-pp-inp" type="number" min="0" step="0.5" placeholder="12.50" value="${item.price}" onchange="_ppMenuUpdate('${item.id}','price',this.value)"/>
            </div>
          </div>
          <div class="vf-pp-field">
            <label class="vf-pp-lbl">Categorie</label>
            <select class="vf-pp-inp" onchange="_ppMenuUpdate('${item.id}','category',this.value)">
              ${['Entree','Plat','Dessert','Boisson'].map(c => `<option value="${c}" ${item.category===c?'selected':''}>${c}</option>`).join('')}
            </select>
          </div>
        </div>
        <button class="pp-menu-del" onclick="vfMenuRemove('${item.id}')" title="Supprimer">&times;</button>
      </div>
    `).join('');
  }
  window._ppMenuUpdate = function(id, field, val) {
    const item = (_ppData.menuItems||[]).find(m => String(m.id) === String(id));
    if (item) { item[field] = val; _saveDraft(); }
  };

  /* â”€â”€ City helpers â”€â”€ */
  let _activeCityIdx = 0;

  function _newCity(name) {
    return {
      id: _nextMenuId(),
      cityName: name || '',
      siteName: '', address: '', phone: '', email: '',
      hours: {},
      instagram: '', facebook: '', tiktok: '', website: '',
      menuItems: [],
      story: '', notes: '', delai: '5 jours',
      deliveryMode: 'internal',
      ubereatsUrl: '', deliverooUrl: '', justEatUrl: '', otherDeliveryUrl: '', deliveryEta: '',
    };
  }

  window.vfCityAdd = function() {
    if (!_ppData.cities) _ppData.cities = [];
    _ppData.cities.push(_newCity(''));
    _activeCityIdx = _ppData.cities.length - 1;
    _saveDraft();
    const _step = _curStepDef ? _curStepDef().id : '';
    if (_step === 'cities-setup') _renderCitySetupList();
    else if (_step === 'cities-config') { _renderCityTabs(); _renderActiveCityForm(); }
  };
  window.vfCityRemove = function(id) {
    _ppData.cities = (_ppData.cities||[]).filter(function(ct){ return String(ct.id) !== String(id); });
    _activeCityIdx = Math.max(0, Math.min(_activeCityIdx, (_ppData.cities||[]).length - 1));
    _saveDraft();
    const _step = _curStepDef ? _curStepDef().id : '';
    if (_step === 'cities-setup') _renderCitySetupList();
    else if (_step === 'cities-config') { _renderCityTabs(); _renderActiveCityForm(); }
  };
  window._ppCityUpdate = function(id, field, val) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(id); });
    if (city) { city[field] = val; _saveDraft(); }
  };
  window._ppCityHoursUpdate = function(id, day, val) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(id); });
    if (city) { if (!city.hours) city.hours = {}; city.hours[day] = val; _saveDraft(); }
  };
  window.vfSelectCityTab = function(idx) {
    _activeCityIdx = idx;
    _renderCityTabs();
    _renderActiveCityForm();
  };
  window.vfCityDeliveryMode = function(cityId, val) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(cityId); });
    if (!city) return;
    city.deliveryMode = val;
    document.querySelectorAll('.fr-radio-card[data-city="' + cityId + '"]').forEach(function(el){ el.classList.remove('on'); });
    const sel = document.querySelector('.fr-radio-card[data-city="' + cityId + '"][data-val="' + val + '"]');
    if (sel) sel.classList.add('on');
    const wrap = document.getElementById('fr-platforms-wrap-' + cityId);
    if (wrap) wrap.style.display = val !== 'internal' ? 'block' : 'none';
    _saveDraft();
  };
  window.vfFrMenuAdd = function(cityId) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(cityId); });
    if (!city) return;
    if (!city.menuItems) city.menuItems = [];
    city.menuItems.push({ id: _nextMenuId(), name:'', price:'', category:'Plat', photoDataUrl:'' });
    _saveDraft(); _renderCityMenuItems(cityId);
  };
  window.vfFrMenuRemove = function(cityId, itemId) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(cityId); });
    if (!city) return;
    city.menuItems = (city.menuItems||[]).filter(function(m){ return String(m.id) !== String(itemId); });
    _saveDraft(); _renderCityMenuItems(cityId);
  };
  window.vfFrMenuPhoto = function(cityId, itemId, input) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(cityId); });
      if (!city) return;
      const item = (city.menuItems||[]).find(function(m){ return String(m.id) === String(itemId); });
      if (item) { item.photoDataUrl = e.target.result; _saveDraft(); }
      const preview = document.getElementById('fmph-' + itemId);
      if (preview) { preview.src = e.target.result; preview.style.display = 'block'; }
    };
    reader.readAsDataURL(file);
  };
  window._ppFrMenuUpdate = function(cityId, itemId, field, val) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(cityId); });
    if (!city) return;
    const item = (city.menuItems||[]).find(function(m){ return String(m.id) === String(itemId); });
    if (item) { item[field] = val; _saveDraft(); }
  };
  function _renderCityMenuItems(cityId) {
    const city = (_ppData.cities||[]).find(function(ct){ return String(ct.id) === String(cityId); });
    if (!city) return;
    const container = document.getElementById('fr-menu-list-' + cityId);
    if (!container) return;
    const items = city.menuItems || [];
    if (items.length === 0) {
      container.innerHTML = '<div class="pp-menu-empty">Aucun plat. Cliquez sur "+ Ajouter un plat".</div>';
      return;
    }
    container.innerHTML = items.map(function(item) { return (
      '<div class="pp-menu-item" id="frpmi-' + item.id + '">' +
      '<div class="pp-menu-photo-wrap">' +
      (item.photoDataUrl ? '<img id="fmph-' + item.id + '" src="' + item.photoDataUrl + '" class="pp-menu-photo-preview" style="display:block"/>' : '<img id="fmph-' + item.id + '" class="pp-menu-photo-preview" style="display:none"/>') +
      '<label class="pp-menu-photo-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>Photo' +
      '<input type="file" accept="image/*" style="display:none" onchange="vfFrMenuPhoto(\'' + cityId + '\',\'' + item.id + '\',this)"/></label></div>' +
      '<div class="pp-menu-fields"><div class="vf-pp-row">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Nom du plat <span class="req">*</span></label>' +
      '<input class="vf-pp-inp" placeholder="Ex : Entrecote grillee" value="' + _esc(item.name) + '" onchange="_ppFrMenuUpdate(\'' + cityId + '\',\'' + item.id + '\',\'name\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Prix (€) <span class="req">*</span></label>' +
      '<input class="vf-pp-inp" type="number" min="0" step="0.5" placeholder="12.50" value="' + item.price + '" onchange="_ppFrMenuUpdate(\'' + cityId + '\',\'' + item.id + '\',\'price\',this.value)"/></div></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Categorie</label>' +
      '<select class="vf-pp-inp" onchange="_ppFrMenuUpdate(\'' + cityId + '\',\'' + item.id + '\',\'category\',this.value)">' +
      ['Entree','Plat','Dessert','Boisson'].map(function(cat){ return '<option value="' + cat + '" ' + (item.category===cat?'selected':'') + '>' + cat + '</option>'; }).join('') +
      '</select></div></div>' +
      '<button class="pp-menu-del" onclick="vfFrMenuRemove(\'' + cityId + '\',\'' + item.id + '\')" title="Supprimer">&times;</button></div>'
    ); }).join('');
  }
  function _renderCitySetupList() {
    const container = document.getElementById('pp-city-setup-list');
    if (!container) return;
    const cities = _ppData.cities || [];
    if (cities.length === 0) {
      container.innerHTML = '<div class="pp-menu-empty">Aucune ville. Cliquez sur "+ Ajouter une ville".</div>';
      return;
    }
    container.innerHTML = cities.map(function(city, idx) {
      return '<div class="fr-city-setup-row">' +
        '<div class="fr-city-setup-num">' + (idx+1) + '</div>' +
        '<input class="vf-pp-inp" placeholder="Ex : Paris" value="' + _esc(city.cityName) + '" oninput="_ppCityUpdate(\'' + city.id + '\',\'cityName\',this.value)"/>' +
        (cities.length > 1 ? '<button class="pp-menu-del" style="position:static;flex-shrink:0" onclick="vfCityRemove(\'' + city.id + '\')">&times;</button>' : '') +
        '</div>';
    }).join('');
  }
  function _renderCityTabs() {
    const container = document.getElementById('fr-city-tabs');
    if (!container) return;
    const cities = _ppData.cities || [];
    container.innerHTML = cities.map(function(city, idx) {
      return '<button class="fr-tab' + (idx === _activeCityIdx ? ' on' : '') + '" onclick="vfSelectCityTab(' + idx + ')">' + _esc(city.cityName || 'Ville ' + (idx+1)) + '</button>';
    }).join('') + '<button class="fr-tab-add" onclick="vfCityAdd()">+ Ville</button>';
  }
  function _renderActiveCityForm() {
    const container = document.getElementById('fr-city-form');
    if (!container) return;
    const cities = _ppData.cities || [];
    const city = cities[_activeCityIdx];
    if (!city) { container.innerHTML = ''; return; }
    const cid = String(city.id);
    const hrs = city.hours || {};
    const days = [['lun','Lundi'],['mar','Mardi'],['mer','Mercredi'],['jeu','Jeudi'],['ven','Vendredi'],['sam','Samedi'],['dim','Dimanche']];
    const dm = city.deliveryMode || 'internal';
    const dmodes = [['internal','Livraison interne','Votre propre equipe gère les livraisons.'],['platforms','Via plateformes tierces','UberEats, Deliveroo, Just Eat, etc.'],['both','Les deux','Livraison interne et plateformes.']];
    container.innerHTML =
      '<div class="fr-section"><div class="fr-section-head">Identite</div><div class="fr-section-body">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Nom du restaurant <span class="req">*</span></label>' +
      '<input class="vf-pp-inp" placeholder="Le Petit Bistrot" value="' + _esc(city.siteName) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'siteName\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Adresse <span class="req">*</span></label>' +
      '<input class="vf-pp-inp" placeholder="12 Rue de la Paix, 75001 Paris" value="' + _esc(city.address) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'address\',this.value)"/></div>' +
      '<div class="vf-pp-row">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Telephone <span class="req">*</span></label>' +
      '<input class="vf-pp-inp" type="tel" placeholder="06 12 34 56 78" value="' + _esc(city.phone) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'phone\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Email de contact</label>' +
      '<input class="vf-pp-inp" type="email" placeholder="contact@resto.fr" value="' + _esc(city.email) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'email\',this.value)"/></div>' +
      '</div></div></div>' +
      '<div class="fr-section"><div class="fr-section-head">Horaires & Reseaux sociaux</div><div class="fr-section-body">' +
      '<div class="pp-hours-grid">' + days.map(function(d){ return '<div class="pp-hours-row"><span class="pp-hours-day">' + d[1] + '</span><input class="vf-pp-inp pp-hours-inp" placeholder="11h30–14h · 19h–22h30" value="' + _esc(hrs[d[0]]||'') + '" oninput="_ppCityHoursUpdate(\'' + cid + '\',\'' + d[0] + '\',this.value)"/></div>'; }).join('') + '</div>' +
      '<div class="vf-pp-row" style="margin-top:14px">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Instagram</label>' +
      '<input class="vf-pp-inp" placeholder="@monrestaurant" value="' + _esc(city.instagram) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'instagram\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Facebook</label>' +
      '<input class="vf-pp-inp" placeholder="facebook.com/monrestaurant" value="' + _esc(city.facebook) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'facebook\',this.value)"/></div>' +
      '</div><div class="vf-pp-row">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">TikTok</label>' +
      '<input class="vf-pp-inp" placeholder="@monrestaurant" value="' + _esc(city.tiktok) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'tiktok\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Site web existant</label>' +
      '<input class="vf-pp-inp" placeholder="https://monrestaurant.fr" value="' + _esc(city.website) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'website\',this.value)"/></div>' +
      '</div></div></div>' +
      '<div class="fr-section"><div class="fr-section-head">Menu</div><div class="fr-section-body">' +
      '<div id="fr-menu-list-' + cid + '"></div>' +
      '<button class="pp-add-btn" onclick="vfFrMenuAdd(\'' + cid + '\')"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Ajouter un plat</button>' +
      '</div></div>' +
      '<div class="fr-section"><div class="fr-section-head">Histoire & Notes</div><div class="fr-section-body">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">L\'histoire de votre restaurant <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>' +
      '<textarea class="vf-pp-inp" rows="3" placeholder="Notre histoire…" oninput="_ppCityUpdate(\'' + cid + '\',\'story\',this.value)">' + _esc(city.story) + '</textarea></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Specificites & demandes particulières <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>' +
      '<textarea class="vf-pp-inp" rows="2" placeholder="Terrasse en ete, menu vegetarien…" oninput="_ppCityUpdate(\'' + cid + '\',\'notes\',this.value)">' + _esc(city.notes) + '</textarea></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Delai de livraison souhaite</label>' +
      '<select class="vf-pp-inp" onchange="_ppCityUpdate(\'' + cid + '\',\'delai\',this.value)">' +
      '<option value="5 jours" ' + ((city.delai||'5 jours')==='5 jours'?'selected':'') + '>Standard — max 5 jours</option>' +
      '<option value="urgent" ' + (city.delai==='urgent'?'selected':'') + '>Urgent — 24h (+50€)</option>' +
      '<option value="7j" ' + (city.delai==='7j'?'selected':'') + '>Flexible — 7 jours</option></select></div>' +
      '</div></div>' +
      '<div class="fr-section"><div class="fr-section-head">Livraison</div><div class="fr-section-body">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Mode de gestion des commandes</label><div class="pp-radio-group">' +
      dmodes.map(function(m){ return '<label class="pp-radio-card fr-radio-card' + (dm===m[0]?' on':'') + '" data-city="' + cid + '" data-val="' + m[0] + '" onclick="vfCityDeliveryMode(\'' + cid + '\',\'' + m[0] + '\')"><input type="radio" name="pp-dm-' + cid + '" value="' + m[0] + '" ' + (dm===m[0]?'checked':'') + ' style="pointer-events:none"/><div><div style="font-weight:700;font-size:13px">' + m[1] + '</div><div style="font-size:11px;color:var(--text3);margin-top:2px">' + m[2] + '</div></div></label>'; }).join('') +
      '</div></div>' +
      '<div id="fr-platforms-wrap-' + cid + '" style="display:' + (dm!=='internal'?'block':'none') + '">' +
      '<div class="vf-pp-row" style="margin-top:12px">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">URL UberEats</label>' +
      '<input class="vf-pp-inp" placeholder="ubereats.com/fr/stores/…" value="' + _esc(city.ubereatsUrl) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'ubereatsUrl\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">URL Deliveroo</label>' +
      '<input class="vf-pp-inp" placeholder="deliveroo.fr/menu/…" value="' + _esc(city.deliverooUrl) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'deliverooUrl\',this.value)"/></div>' +
      '</div><div class="vf-pp-row">' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">URL Just Eat</label>' +
      '<input class="vf-pp-inp" placeholder="just-eat.fr/…" value="' + _esc(city.justEatUrl) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'justEatUrl\',this.value)"/></div>' +
      '<div class="vf-pp-field"><label class="vf-pp-lbl">Autre plateforme</label>' +
      '<input class="vf-pp-inp" placeholder="Nom + URL" value="' + _esc(city.otherDeliveryUrl) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'otherDeliveryUrl\',this.value)"/></div>' +
      '</div></div>' +
      '<div class="vf-pp-field" style="margin-top:8px"><label class="vf-pp-lbl">Delai de livraison estime <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>' +
      '<input class="vf-pp-inp" placeholder="Ex: 30–45 min" value="' + _esc(city.deliveryEta) + '" oninput="_ppCityUpdate(\'' + cid + '\',\'deliveryEta\',this.value)"/></div>' +
      '</div></div>';
    _renderCityMenuItems(cid);
  }

  function _esc(s) { return String(s||'').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

  /* â”€â”€ Open / Close â”€â”€ */
  function _openPP() {
    const targetPack = _getPack();          // pack choisi par l'utilisateur
    const hadDraft   = _restoreDraft();     // peut ecraser bState.curPack
    const draftPack  = _getPack();          // pack du brouillon
    // Toujours imposer le plan selectionne ; si le plan a change → formulaire vierge
    if (typeof bState !== 'undefined') bState.curPack = targetPack;
    if (!hadDraft || draftPack !== targetPack) { _ppStep = 1; _ppData = {}; }
    _renderStep();
    document.getElementById('vf-pp-ov').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  window.vfClosePP = function() {
    _saveDraft();
    document.getElementById('vf-pp-ov').classList.remove('open');
    document.body.style.overflow = '';
  };

  /* â”€â”€ Step renderer â”€â”€ */
  function _renderStep() {
    const steps = _getSteps();
    const total = steps.length;
    const pack  = _getPack();
    const col   = (typeof bState !== 'undefined' ? bState.color : null) || '#0071E3';
    const PNMS  = { essentiel:'Essentiel', premium:'Premium' };

    /* Step bar */
    document.getElementById('vf-pp-sbar').innerHTML = steps.map((s, i) => {
      const n = i + 1;
      const cls = n < _ppStep ? 'done' : n === _ppStep ? 'active' : '';
      return `<div class="vf-pp-s ${cls}"><div class="vf-pp-snum">${n < _ppStep ? '✓' : n}</div><div class="vf-pp-slbl">${s.lbl}</div></div>`;
    }).join('');

    const body = document.getElementById('vf-pp-body');
    const foot = document.getElementById('vf-pp-ft');
    const def  = _curStepDef();

    const cbar = `<div class="vf-pp-cbar">
      <div class="vf-pp-ctag"><div class="vf-pp-cdot" style="background:${col}"></div>Pack ${PNMS[pack]||pack}</div>
      <span style="font-size:10px;color:var(--text3);margin-left:auto">Étape ${_ppStep} / ${total}</span>
    </div>`;

    /* â”€â”€ Render body per step â”€â”€ */
    if (def.id === 'identity') {
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Nom du restaurant / site <span class="req">*</span></label>
          <input class="vf-pp-inp" id="pp-sitename" placeholder="Le Petit Bistrot" value="${_esc(_ppData.siteName)}"/></div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Adresse physique <span class="req">*</span></label>
          <input class="vf-pp-inp" id="pp-address" placeholder="12 Rue de la Paix, 75001 Paris" value="${_esc(_ppData.address)}"/></div>
        <div class="vf-pp-row">
          <div class="vf-pp-field"><label class="vf-pp-lbl">Telephone <span class="req">*</span></label>
            <input class="vf-pp-inp" id="pp-phone" type="tel" placeholder="06 12 34 56 78" value="${_esc(_ppData.phone)}"/></div>
          <div class="vf-pp-field"><label class="vf-pp-lbl">Email de contact <span class="req">*</span></label>
            <input class="vf-pp-inp" id="pp-email" type="email" placeholder="contact@monrestaurant.fr" value="${_esc(_ppData.email || (currentFBUser ? currentFBUser.email : ''))}"/></div>
        </div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Type de restaurant</label>
          <input class="vf-pp-inp" id="pp-cuisine" placeholder="Ex: Pizzeria, Bistrot Français, Sushi, Burger..." value="${_esc(_ppData.cuisine)}"/></div>`;

    } else if (def.id === 'hours') {
      const hrs = _ppData.hours || {};
      const days = [['lun','Lundi'],['mar','Mardi'],['mer','Mercredi'],['jeu','Jeudi'],['ven','Vendredi'],['sam','Samedi'],['dim','Dimanche']];
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Horaires d'ouverture</label>
          <div class="pp-hours-grid">
            ${days.map(([k,lbl]) => `<div class="pp-hours-row">
              <span class="pp-hours-day">${lbl}</span>
              <input class="vf-pp-inp pp-hours-inp" id="hr-${k}" placeholder="11h30–14h · 19h–22h30" value="${_esc(hrs[k]||'')}"/>
            </div>`).join('')}
          </div>
        </div>
        <div class="vf-pp-stit" style="font-size:15px;margin-top:20px">Reseaux sociaux</div>
        <div class="vf-pp-row">
          <div class="vf-pp-field"><label class="vf-pp-lbl">Instagram</label>
            <input class="vf-pp-inp" id="pp-instagram" placeholder="@monrestaurant" value="${_esc(_ppData.instagram)}"/></div>
          <div class="vf-pp-field"><label class="vf-pp-lbl">Facebook</label>
            <input class="vf-pp-inp" id="pp-facebook" placeholder="facebook.com/monrestaurant" value="${_esc(_ppData.facebook)}"/></div>
        </div>
        <div class="vf-pp-row">
          <div class="vf-pp-field"><label class="vf-pp-lbl">TikTok</label>
            <input class="vf-pp-inp" id="pp-tiktok" placeholder="@monrestaurant" value="${_esc(_ppData.tiktok)}"/></div>
          <div class="vf-pp-field"><label class="vf-pp-lbl">Site web existant</label>
            <input class="vf-pp-inp" id="pp-website" placeholder="https://monrestaurant.fr" value="${_esc(_ppData.website)}"/></div>
        </div>`;

    } else if (def.id === 'menu') {
      const menuMode = _ppData.menuMode || 'items';
      const showItems = menuMode === 'items';
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div style="display:flex;gap:8px;margin-bottom:16px">
          <button type="button" id="pp-mode-items" onclick="window.vfSetMenuMode('items')"
            style="flex:1;padding:10px 12px;border-radius:12px;border:1.5px solid ${showItems ? 'var(--blue)' : '#e5e7eb'};background:${showItems ? 'var(--blue)' : '#fff'};color:${showItems ? '#fff' : '#6b7280'};font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px">
            Plat par plat
          </button>
          <button type="button" id="pp-mode-photo" onclick="window.vfSetMenuMode('photo')"
            style="flex:1;padding:10px 12px;border-radius:12px;border:1.5px solid ${!showItems ? 'var(--blue)' : '#e5e7eb'};background:${!showItems ? 'var(--blue)' : '#fff'};color:${!showItems ? '#fff' : '#6b7280'};font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px">
            Photo du menu
          </button>
        </div>
        <div id="pp-menu-items-zone" style="display:${showItems ? 'block' : 'none'}">
          <div id="pp-menu-list"></div>
          <button class="pp-add-btn" onclick="vfMenuAdd()">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Ajouter un plat
          </button>
        </div>
        <div id="pp-menu-photo-zone" style="display:${!showItems ? 'block' : 'none'}">
          <label style="display:block;border:2px dashed #e5e7eb;border-radius:16px;padding:36px 24px;text-align:center;cursor:pointer;background:#fafafa">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="1.5" style="margin-bottom:10px;display:block;margin-left:auto;margin-right:auto"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <div id="pp-photo-label" style="font-size:14px;font-weight:600;color:#374151;margin-bottom:4px">${_ppData.menuPhotoDataUrl ? 'Photo chargee — cliquer pour changer' : 'Cliquer pour uploader une photo de votre menu'}</div>
            <div style="font-size:12px;color:#9ca3af">JPG, PNG ou PDF · Max 10 Mo</div>
            <input type="file" id="pp-menu-photo-file" accept="image/*,.pdf" style="display:none" onchange="window.vfMenuPhotoUpload(this)"/>
          </label>
          ${_ppData.menuPhotoDataUrl ? '<img id="pp-menu-photo-preview" src="' + _ppData.menuPhotoDataUrl + '" style="max-width:100%;max-height:220px;border-radius:10px;object-fit:contain;margin-top:12px"/>' : ''}
        </div>
        <div class="vf-pp-info-note" style="margin-top:12px">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>Vous pourrez modifier votre carte a tout moment depuis votre espace admin après la livraison.</span>
        </div>`;
      if (showItems) _renderMenuItems();

    } else if (def.id === 'story') {
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">L'histoire de votre restaurant <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>
          <textarea class="vf-pp-inp" id="pp-story" rows="4" placeholder="Fonde en 2010 par la famille Dupont, notre bistrot propose une cuisine traditionnelle française avec des produits locaux…">${_esc(_ppData.story)}</textarea></div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Specificites & demandes particulières <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>
          <textarea class="vf-pp-inp" id="pp-notes" rows="3" placeholder="Terrasse en ete, menu vegetarien, allergènes a mentionner, ton du site (luxueux, chaleureux, moderne…)">${_esc(_ppData.notes)}</textarea></div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Delai de livraison souhaite</label>
          <select class="vf-pp-inp" id="pp-delai">
            <option value="5 jours" ${(_ppData.delai||'5 jours')==='5 jours'?'selected':''}>Standard — max 5 jours</option>
            <option value="urgent" ${_ppData.delai==='urgent'?'selected':''}>Urgent — 24h (+50€)</option>
            <option value="7j" ${_ppData.delai==='7j'?'selected':''}>Flexible — 7 jours</option>
          </select></div>`;

    } else if (def.id === 'delivery') {
      const dm = _ppData.deliveryMode || 'internal';
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Mode de gestion des commandes <span class="req">*</span></label>
          <div class="pp-radio-group" id="pp-delivery-mode">
            ${[
              ['internal','Livraison interne','Votre propre equipe gère les livraisons.'],
              ['platforms','Via plateformes tierces','UberEats, Deliveroo, Just Eat, etc.'],
              ['both','Les deux','Livraison interne et plateformes.'],
            ].map(([val,lbl,sub]) => `<label class="pp-radio-card ${dm===val?'on':''}">
              <input type="radio" name="pp-dm" value="${val}" ${dm===val?'checked':''} onchange="vfDeliveryMode('${val}')"/>
              <div><div style="font-weight:700;font-size:13px">${lbl}</div><div style="font-size:11px;color:var(--text3);margin-top:2px">${sub}</div></div>
            </label>`).join('')}
          </div>
        </div>
        <div id="pp-platforms-wrap" style="display:${dm!=='internal'?'block':'none'}">
          <div class="vf-pp-stit" style="font-size:14px;margin-top:4px">Integration plateformes</div>
          <div class="vf-pp-info-note" style="margin-bottom:12px">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>Renseignez les URLs de votre espace sur chaque plateforme. Notre equipe configurera la redirection automatique.</span>
          </div>
          <div class="vf-pp-row">
            <div class="vf-pp-field"><label class="vf-pp-lbl">URL UberEats</label>
              <input class="vf-pp-inp" id="pp-ubereats" placeholder="ubereats.com/fr/stores/mon-resto" value="${_esc(_ppData.ubereatsUrl)}"/></div>
            <div class="vf-pp-field"><label class="vf-pp-lbl">URL Deliveroo</label>
              <input class="vf-pp-inp" id="pp-deliveroo" placeholder="deliveroo.fr/menu/mon-resto" value="${_esc(_ppData.deliverooUrl)}"/></div>
          </div>
          <div class="vf-pp-row">
            <div class="vf-pp-field"><label class="vf-pp-lbl">URL Just Eat</label>
              <input class="vf-pp-inp" id="pp-justeat" placeholder="just-eat.fr/restaurants/mon-resto" value="${_esc(_ppData.justEatUrl)}"/></div>
            <div class="vf-pp-field"><label class="vf-pp-lbl">Autre plateforme <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>
              <input class="vf-pp-inp" id="pp-other-delivery" placeholder="Nom + URL" value="${_esc(_ppData.otherDeliveryUrl)}"/></div>
          </div>
        </div>
        <div class="vf-pp-field"><label class="vf-pp-lbl">Delai de livraison moyen estime <span style="color:var(--text3);font-weight:400">(optionnel)</span></label>
          <input class="vf-pp-inp" id="pp-eta" placeholder="Ex: 30–45 min" value="${_esc(_ppData.deliveryEta)}"/></div>`;

    } else if (def.id === 'cities-setup') {
      if (!_ppData.cities || _ppData.cities.length === 0) _ppData.cities = [_newCity('')];
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div class="vf-pp-info-note" style="margin-bottom:14px">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span>Chaque ville aura son propre formulaire complet : identite, horaires, menu, histoire et livraison.</span>
        </div>
        <div id="pp-city-setup-list"></div>
        <button class="pp-add-btn" style="margin-top:10px" onclick="vfCityAdd()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Ajouter une ville
        </button>`;
      _renderCitySetupList();
    } else if (def.id === 'cities-config') {
      body.innerHTML = `${cbar}
        <div class="vf-pp-stit">${def.tit}</div>
        <div class="vf-pp-ssub">${def.sub}</div>
        <div class="fr-tabs" id="fr-city-tabs"></div>
        <div id="fr-city-form"></div>`;
      _renderCityTabs();
      _renderActiveCityForm();
    }

    /* â”€â”€ Footer buttons â”€â”€ */
    const isLast = (_ppStep === total);
    const isFirst = (_ppStep === 1);
    foot.innerHTML = `
      ${!isFirst ? '<button class="vf-pp-prev" onclick="vfPPBack()">← Retour</button>' : '<span></span>'}
      ${isLast
        ? '<button class="vf-pp-next" id="pp-go-btn" onclick="vfPPSubmit()"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Confirmer & Payer</button>'
        : '<button class="vf-pp-next" onclick="vfPPNext()">Suivant <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg></button>'}
    `;
  }

  /* â”€â”€ Delivery mode toggle â”€â”€ */
  window.vfDeliveryMode = function(val) {
    _ppData.deliveryMode = val;
    document.querySelectorAll('.pp-radio-card').forEach(c => c.classList.remove('on'));
    const sel = document.querySelector(`.pp-radio-card input[value="${val}"]`);
    if (sel) sel.closest('.pp-radio-card').classList.add('on');
    const wrap = document.getElementById('pp-platforms-wrap');
    if (wrap) wrap.style.display = val !== 'internal' ? 'block' : 'none';
    _saveDraft();
  };

  /* â”€â”€ Collect current step data â”€â”€ */
  function _collectStep() {
    const def = _curStepDef();
    const g = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    if (def.id === 'identity') {
      _ppData.siteName = g('pp-sitename');
      _ppData.address  = g('pp-address');
      _ppData.phone    = g('pp-phone');
      _ppData.email    = g('pp-email');
      _ppData.cuisine  = g('pp-cuisine');
    } else if (def.id === 'hours') {
      const days = ['lun','mar','mer','jeu','ven','sam','dim'];
      _ppData.hours = {}; days.forEach(d => { _ppData.hours[d] = g('hr-'+d); });
      _ppData.instagram = g('pp-instagram');
      _ppData.facebook  = g('pp-facebook');
      _ppData.tiktok    = g('pp-tiktok');
      _ppData.website   = g('pp-website');
    } else if (def.id === 'story') {
      _ppData.story = g('pp-story');
      _ppData.notes = g('pp-notes');
      _ppData.delai = g('pp-delai');
    } else if (def.id === 'delivery') {
      _ppData.deliveryMode    = _ppData.deliveryMode || 'internal';
      _ppData.ubereatsUrl     = g('pp-ubereats');
      _ppData.deliverooUrl    = g('pp-deliveroo');
      _ppData.justEatUrl      = g('pp-justeat');
      _ppData.otherDeliveryUrl= g('pp-other-delivery');
      _ppData.deliveryEta     = g('pp-eta');
    } else if (def.id === 'cities-setup') {
      document.querySelectorAll('#pp-city-setup-list input').forEach(function(inp, idx) {
        if (_ppData.cities && _ppData.cities[idx]) _ppData.cities[idx].cityName = inp.value.trim();
      });
    }
    // menu & cities-config update live via oninput, no collect needed
  }

  /* â”€â”€ Validation per step â”€â”€ */
  function _validateStep() {
    const def = _curStepDef();
    if (def.id === 'identity') {
      if (!_ppData.siteName) { alert('Veuillez renseigner le nom du restaurant.'); return false; }
      if (!_ppData.address)  { alert('Veuillez renseigner l\'adresse.'); return false; }
      if (!_ppData.phone)    { alert('Veuillez renseigner le telephone.'); return false; }
      if (!_ppData.email)    { alert('Veuillez renseigner l\'email de contact.'); return false; }
    }
    if (def.id === 'menu') {
      if ((_ppData.menuMode || 'items') === 'items') {
        const items = _ppData.menuItems || [];
        const invalid = items.find(m => !m.name.trim() || !m.price);
        if (invalid) { alert('Veuillez renseigner le nom et le prix de chaque plat.'); return false; }
      }
    }
    if (def.id === 'cities-setup') {
      const cities = _ppData.cities || [];
      if (!cities.length || !cities.some(function(ct){ return ct.cityName.trim(); })) { alert('Veuillez indiquer au moins une ville.'); return false; }
      const unnamed = cities.find(function(ct){ return !ct.cityName.trim(); });
      if (unnamed) { alert('Veuillez renseigner le nom de chaque ville.'); return false; }
    }
    if (def.id === 'cities-config') {
      const cities = _ppData.cities || [];
      const inv = cities.find(function(ct){ return !ct.siteName || !ct.address || !ct.phone; });
      if (inv) { alert('Veuillez renseigner le nom, l\'adresse et le telephone pour chaque ville (section Identite).'); return false; }
    }
    return true;
  }

  window.vfPPNext = function() {
    _collectStep();
    if (!_validateStep()) return;
    _ppStep = Math.min(_ppStep + 1, _totalSteps());
    _saveDraft();
    _renderStep();
    document.querySelector('.vf-pp-ov').scrollTop = 0;
  };

  window.vfPPBack = function() {
    _collectStep();
    _ppStep = Math.max(_ppStep - 1, 1);
    _saveDraft();
    _renderStep();
    document.querySelector('.vf-pp-ov').scrollTop = 0;
  };

  window.vfPPSubmit = async function() {
    _collectStep();
    if (!_validateStep()) return;

    const btn = document.getElementById('pp-go-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Sauvegarde…'; }

    const pack = _getPack();
    const projectDoc = {
      uid:          currentFBUser ? currentFBUser.uid : null,
      email:        currentFBUser ? currentFBUser.email : _ppData.email,
      clientName:   currentFBUser ? (currentFBUser.displayName || currentFBUser.email.split('@')[0]) : (_ppData.siteName || ''),
      createdAt:    (typeof firebase !== 'undefined' && firebase.firestore)
                      ? firebase.firestore.FieldValue.serverTimestamp() : new Date().toISOString(),
      pack,
      prixPack:     parseFloat(((PACKS[pack]&&PACKS[pack].price)||'').replace(/[^0-9.]/g,'')) || ({essentiel:150,premium:490}[pack]||490),
      cuisine:      typeof bState !== 'undefined' ? bState.cuisine   : null,
      color:        typeof bState !== 'undefined' ? bState.color     : null,
      layout:       typeof bState !== 'undefined' ? bState.layout    : null,
      /* Identite */
      siteName:     _ppData.siteName,
      address:      _ppData.address,
      phone:        _ppData.phone,
      contactEmail: _ppData.email,
      /* Infos pratiques */
      hours:        _ppData.hours || {},
      instagram:    _ppData.instagram || '',
      facebook:     _ppData.facebook  || '',
      tiktok:       _ppData.tiktok    || '',
      website:      _ppData.website   || '',
      /* Menu */
      menuMode:         _ppData.menuMode || 'items',
      menuCardPhotoUrl: window._menuCardPhotoUrl || '',
      menuItems:    (_ppData.menuItems || []).map(m => ({ name:m.name, price:m.price, category:m.category, photoDataUrl: m.photoDataUrl ? '[photo]' : '' })),
      menuItemCount:(_ppData.menuItems || []).length,
      /* Histoire */
      story:        _ppData.story || '',
      notes:        _ppData.notes || '',
      delai:        _ppData.delai || '5 jours',
      /* Livraison (premium+) */
      deliveryMode:     _ppData.deliveryMode     || null,
      ubereatsUrl:      _ppData.ubereatsUrl      || null,
      deliverooUrl:     _ppData.deliverooUrl     || null,
      justEatUrl:       _ppData.justEatUrl       || null,
      otherDeliveryUrl: _ppData.otherDeliveryUrl || null,
      deliveryEta:      _ppData.deliveryEta      || null,
      status:      'pending',
      statusLabel: 'En attente de paiement',
      source:      'form',
    };

    let docId = null;
    try {
      if (typeof db !== 'undefined' && db) {
        const ref = await db.collection(PROJECTS_COL).add(projectDoc);
        docId = ref.id;
        console.log('[VF·PrePay] Projet Firestore :', docId);
      }
    } catch (e) { console.error('[VF·PrePay] Firestore:', e); }

    _clearDraft();
    document.getElementById('vf-pp-ov').classList.remove('open');
    document.body.style.overflow = '';

    // Checkout Session dynamique → prix lu depuis Firebase via l'API
    const clientEmail  = (currentFBUser ? currentFBUser.email : _ppData.email) || '';
    const priceEuros   = (PACKS[pack] && PACKS[pack].price) || null;
    _vfShowRedirectScreen(pack, null); // affiche l'écran de chargement immédiatement
    try {
      const resp = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pack,
          priceEuros,
          email: clientEmail,
          clientReferenceId: docId || pack,
        }),
      });
      const data = await resp.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Fallback sur le lien statique si l'API échoue
        const stripeBase = PAYMENT_LINKS[pack] && PAYMENT_LINKS[pack].stripe;
        if (stripeBase) window.location.href = stripeBase;
        else if (typeof openBuyModal === 'function') openBuyModal(pack);
      }
    } catch (e) {
      console.error('[VF·Checkout]', e);
      const stripeBase = PAYMENT_LINKS[pack] && PAYMENT_LINKS[pack].stripe;
      if (stripeBase) window.location.href = stripeBase;
    }
  };

  /* Écran intermediaire de redirection */
  function _vfShowRedirectScreen(pack, url) {
    const existing = document.getElementById('vf-redirect-screen');
    if (existing) existing.remove();
    const packLabel = { essentiel: 'Essentiel', premium: 'Premium' }[pack] || pack;
    const div = document.createElement('div');
    div.id = 'vf-redirect-screen';
    div.style.cssText = 'position:fixed;inset:0;z-index:9999;background:#0f172a;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;font-family:Inter,sans-serif';
    div.innerHTML = `
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
      </svg>
      <div style="font-family:Outfit,sans-serif;font-size:26px;font-weight:800;color:#fff">Formulaire envoye !</div>
      <div style="font-size:14px;color:rgba(255,255,255,.55);text-align:center;max-width:320px;line-height:1.6">
        Pack <strong style="color:#60a5fa">${packLabel}</strong> — vous allez être redirige vers le paiement securise…
      </div>
      <div style="display:flex;gap:6px;margin-top:4px">
        <span style="width:8px;height:8px;border-radius:50%;background:#3b82f6;animation:vfDot .8s ease-in-out infinite"></span>
        <span style="width:8px;height:8px;border-radius:50%;background:#3b82f6;animation:vfDot .8s ease-in-out .2s infinite"></span>
        <span style="width:8px;height:8px;border-radius:50%;background:#3b82f6;animation:vfDot .8s ease-in-out .4s infinite"></span>
      </div>
      <style>@keyframes vfDot{0%,100%{opacity:.25;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}</style>
    `;
    document.body.appendChild(div);
    if (url) setTimeout(function() { window.location.href = url; }, 400);
  }


  /* â”€â”€â”€ 13. INTERCEPT BUY FLOW â”€â”€â”€ */
  // On remplace openBuyFromBuilder : affiche le formulaire pre-paiement d'abord
  window.openBuyFromBuilder = function () {
    if (!currentFBUser) {
      vfOpenAuth('login', () => setTimeout(_openPP, 350));
    } else {
      _openPP();
    }
  };

  /* â”€â”€â”€ 14. OVERRIDE showPage POUR ESPACE-CLIENT â”€â”€â”€ */
  const _prevSP = window.showPage;
  window.showPage = function (id, preselect) {
    if (id === 'espace-client') {
      const _goEC = () => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const pg = document.getElementById('page-espace-client');
        if (pg) pg.classList.add('active');
        document.querySelectorAll('.nl').forEach(b => b.classList.remove('on'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
        _renderEC();
      };
      if (currentFBUser) { _goEC(); return; }
      // Firebase auth may not have resolved yet — wait up to 3s before blocking
      if (!_authResolved) {
        const _t = setTimeout(() => { if (!currentFBUser) vfOpenAuth('login', () => window.showPage('espace-client')); }, 3000);
        auth && auth.onAuthStateChanged(u => {
          if (u) { clearTimeout(_t); _goEC(); }
          else if (_authResolved) { clearTimeout(_t); vfOpenAuth('login', () => window.showPage('espace-client')); }
        });
        return;
      }
      vfOpenAuth('login', () => window.showPage('espace-client'));
      return;
    }
    _prevSP(id, preselect);
  };

  /* â”€â”€â”€ 15. ESCAPE KEY â”€â”€â”€ */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.getElementById('vf-auth-ov')?.classList.remove('open');
      document.getElementById('vf-drop')?.classList.remove('open');
      document.getElementById('vf-pp-ov')?.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* â”€â”€â”€ 16. INIT â”€â”€â”€ */
  _updateProIconUI();
  window.showPage('accueil');

  /* â”€â”€â”€ 17. GLOW CARDS â”€â”€â”€ */
  document.addEventListener('pointermove', function(e) {
    document.querySelectorAll('.fc[data-glow],.tc[data-glow]').forEach(function(card) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left).toFixed(1);
      var y = (e.clientY - rect.top).toFixed(1);
      var hue = (210 + ((e.clientX - rect.left) / rect.width) * 180).toFixed(0);
      card.style.setProperty('--gx', x + 'px');
      card.style.setProperty('--gy', y + 'px');
      card.style.setProperty('--ghue', hue);
    });
  });

  /* â”€â”€â”€ 18. CARD 3D TILT â”€â”€â”€ */
  (function initCardTilt() {
    var stage = document.getElementById('pp-card-3d');
    if (!stage) return;
    var MAX = 18;
    var glare = document.createElement('div');
    glare.className = 'card-glare';
    stage.appendChild(glare);

    stage.addEventListener('mousemove', function(e) {
      var rect = stage.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var rx = -((y - rect.height / 2) / (rect.height / 2)) * MAX;
      var ry =  ((x - rect.width  / 2) / (rect.width  / 2)) * MAX;
      stage.style.transition = 'transform .08s ease';
      stage.style.transform = 'perspective(900px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) scale3d(1.04,1.04,1.04)';
      var gx = (x / rect.width  * 100).toFixed(1);
      var gy = (y / rect.height * 100).toFixed(1);
      glare.style.opacity = '1';
      glare.style.background = 'radial-gradient(circle at ' + gx + '% ' + gy + '%, rgba(255,255,255,.22) 0%, transparent 65%)';
    });

    stage.addEventListener('mouseleave', function() {
      stage.style.transition = 'transform .55s cubic-bezier(.23,1,.32,1)';
      stage.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      glare.style.opacity = '0';
    });
  })();

  /* â”€â”€â”€ 19. ORBITAL PAYMENT ANIMATION â”€â”€â”€ */
  (function initPayOrbital() {
    var c = document.getElementById('pay-orbital-container');
    if (!c) return;
    var ps = [
      { label: 'PayPal', bg: '#fff', border: '1.5px solid #e8eaed', desc: 'Payez en quelques clics via votre compte PayPal securise.', svg: '<svg viewBox="0 0 24 24" width="32" height="32"><path fill="#009CDE" d="M7.076 21.337H2.47a.641.641 0 01-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 00-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 00-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 00.554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 01.923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/><path fill="#003087" d="M6.263 7.065a.999.999 0 01.985-.843h6.3c.747 0 1.45.049 2.094.152a7.14 7.14 0 011.29.353c.318.118.605.261.857.429a5.07 5.07 0 011.012.893c.36-2.297-.003-3.86-1.244-5.28C16.175.925 13.865.268 10.938.268H3.477a.99.99 0 00-.977.838L.125 19.993a.596.596 0 00.59.69H5.33l1.29-8.19-.357 4.562z"/></svg>' },
      { label: 'Apple Pay', bg: '#1c1c1e', desc: 'Paiement instantane via Face ID ou Touch ID sur Apple.', svg: '<svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>' },
      { label: 'Carte Bancaire', bg: '#1B2B8A', desc: 'Visa, Mastercard et American Express acceptes partout.', svg: '<svg viewBox="0 0 30 22" width="32" height="24" fill="none"><rect x="1" y="1" width="28" height="20" rx="3" stroke="white" stroke-width="1.6"/><rect x="4" y="6.5" width="8" height="5.5" rx="1.2" stroke="white" stroke-width="1.3"/><line x1="1" y1="9" x2="29" y2="9" stroke="white" stroke-width="2.2"/><line x1="4" y1="15.5" x2="11" y2="15.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/><line x1="13" y1="15.5" x2="18" y2="15.5" stroke="white" stroke-width="1.6" stroke-linecap="round"/></svg>' },
      { label: 'Google Pay', bg: '#fff', border: '1.5px solid #e8eaed', desc: 'Reglez facilement depuis votre smartphone Android.', svg: '<svg viewBox="0 0 24 24" width="30" height="30"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>' },
      { label: 'Swile', bg: '#FF6B35', desc: 'Titres-restaurant Swile pour les abonnes premium.', svg: '<svg viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="4.5" fill="white"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.64 5.64l1.77 1.77M16.59 16.59l1.77 1.77M5.64 18.36l1.77-1.77M16.59 7.41l1.77-1.77" stroke="white" stroke-width="2" stroke-linecap="round" fill="none"/></svg>' }
    ];
    var scene = document.createElement('div');
    scene.className = 'pay-orbital-scene';
    var deco = document.createElement('div');
    deco.className = 'pay-orbit-deco';
    scene.appendChild(deco);
    var track = document.createElement('div');
    track.className = 'pay-orbit-track';

    var arms = [], nodeContents = [], nodeIcons = [], nodeTips = [];
    ps.forEach(function(p, i) {
      var arm = document.createElement('div');
      arm.className = 'pay-arm';
      arm.innerHTML =
        '<div class="pay-node">' +
          '<div class="pay-node-content">' +
            '<div class="pay-node-icon" style="background:' + p.bg + (p.border ? ';border:' + p.border : '') + '">' + p.svg + '</div>' +
            '<span class="pay-node-label">' + p.label + '</span>' +
            '<div class="pay-node-tip">' + p.desc + '</div>' +
          '</div>' +
        '</div>';
      arm.style.transform = 'rotate(' + (i * 72) + 'deg)';
      arms.push(arm);
      nodeContents.push(arm.querySelector('.pay-node-content'));
      nodeIcons.push(arm.querySelector('.pay-node-icon'));
      nodeTips.push(arm.querySelector('.pay-node-tip'));
      track.appendChild(arm);
    });

    scene.appendChild(track);
    var center = document.createElement('div');
    center.className = 'pay-orbit-center';
    center.innerHTML = '<div class="pay-orbit-center-icon"><svg width="30" height="38" viewBox="0 0 14 18" fill="none"><path d="M6.2 6.8C6.2 5.9 6.9 5.5 8 5.5c1.5 0 3 .5 4 1.2V2.3C10.8 1.5 9.4 1 8 1 4.7 1 2.5 2.7 2.5 5.2c0 4.2 5.8 3.5 5.8 5.3 0 1-.8 1.4-2 1.4-1.7 0-3.3-.7-4.4-1.6v4.5c1.2.5 2.7.8 4.4.8 3.4 0 5.7-1.7 5.7-4.2-.1-4.5-5.8-3.6-5.8-4.6z" fill="white"/></svg></div><span class="pay-orbit-center-label">Stripe</span><p class="pay-orbit-center-desc"></p>';
    scene.appendChild(center);
    var cLabel = center.querySelector('.pay-orbit-center-label');
    var cDesc  = center.querySelector('.pay-orbit-center-desc');
    var cIcon  = center.querySelector('.pay-orbit-center-icon');
    c.className = 'pay-orbital-wrap';
    c.appendChild(scene);

    /* â”€â”€ Animation loop â”€â”€ */
    var angle = 0;
    var speed = 0.09;
    var paused = false;
    var targetAngle = null;
    var activeIdx = -1;
    var settled = false;   /* true once the node has reached its top position */
    var mX = null, mY = null;
    var R = 190;

    function shortest(from, to) {
      var d = ((to - from) % 360 + 360) % 360;
      return d > 180 ? d - 360 : d;
    }
    function activate(i) {
      if (nodeIcons[i]) { nodeIcons[i].style.transform = 'scale(1.45)'; nodeIcons[i].style.boxShadow = '0 8px 32px rgba(0,0,0,.3)'; }
      cIcon.style.opacity = '0'; cIcon.style.transform = 'scale(0.7)';
      cLabel.textContent = ps[i].label;
      cDesc.textContent = ps[i].desc;
      cDesc.style.opacity = '1'; cDesc.style.maxHeight = '80px';
    }
    function deactivate(i) {
      if (nodeIcons[i]) { nodeIcons[i].style.transform = ''; nodeIcons[i].style.boxShadow = ''; }
      cIcon.style.opacity = ''; cIcon.style.transform = '';
      cLabel.textContent = 'Stripe';
      cDesc.style.opacity = '0'; cDesc.style.maxHeight = '0';
    }

    function checkHover() {
      if (mX === null) return;

      if (activeIdx >= 0) {
        /* Only check deactivation once the node has fully reached the top.
           While animating (settled=false) we never deactivate — this prevents
           the flicker caused by the node moving out from under the cursor mid-tween. */
        if (!settled) return;
        /* Node is at top: its position is (0, -R). Deactivate if cursor is far. */
        if (Math.sqrt(mX * mX + (mY + R) * (mY + R)) > 58) {
          deactivate(activeIdx);
          activeIdx = -1; paused = false; targetAngle = null; settled = false;
        }
      } else {
        /* No active node — check if cursor is near any orbiting node */
        for (var i = 0; i < ps.length; i++) {
          var rad = (angle + i * 72) * Math.PI / 180;
          var nx = R * Math.sin(rad);
          var ny = -R * Math.cos(rad);
          if (Math.sqrt((mX - nx) * (mX - nx) + (mY - ny) * (mY - ny)) < 38) {
            activate(i);
            activeIdx = i; paused = true; settled = false;
            targetAngle = ((-i * 72) % 360 + 360) % 360;
            break;
          }
        }
      }
    }

    scene.addEventListener('mousemove', function(e) {
      var r = scene.getBoundingClientRect();
      mX = e.clientX - r.left - r.width  / 2;
      mY = e.clientY - r.top  - r.height / 2;
      checkHover();
    });
    scene.addEventListener('mouseleave', function() {
      mX = null; mY = null;
      if (activeIdx >= 0) deactivate(activeIdx);
      activeIdx = -1; paused = false; targetAngle = null; settled = false;
    });

    function tick() {
      if (!paused) {
        angle = (angle + speed + 360) % 360;
        settled = false;
      } else if (targetAngle !== null) {
        var diff = shortest(angle, targetAngle);
        if (Math.abs(diff) > 0.15) {
          angle = (angle + diff * 0.08 + 360) % 360;
          settled = false;
        } else {
          angle = targetAngle;
          settled = true;
        }
      }
      track.style.transform = 'rotate(' + angle + 'deg)';
      for (var i = 0; i < nodeContents.length; i++) {
        if (nodeContents[i]) nodeContents[i].style.transform = 'rotate(' + (-(angle + i * 72)) + 'deg)';
      }
      requestAnimationFrame(tick);
    }
    tick();
  })();

})();

// Injecter les URLs d'exemple dans chaque carte tarif
// Note: on ne bloque PAS les boutons ici (pas d'ajout de classe 'empty')
// L'etat initial vient du SSR (applyConfigToHTML) et sera mis a jour par applyExampleUrlsDirect
Object.entries(EXAMPLE_URLS).forEach(([pack,url])=>{
  if(!url) return;
  ['demo-'+pack, 'demo-b-'+pack].forEach(function(id){
    var el=document.getElementById(id);
    if(!el)return;
    el.href=url;
    el.classList.remove('empty');
  });
});

  
window.openSitePreview = function(key){
  var urls = {ess:'https://prestige-flow.vercel.app',prem:'https://matchaflow.vercel.app'};
  var url = urls[key];
  if(url) window.open(url,'_blank','noopener');
};
window.goHomePack = function(pack){
  var hf = document.getElementById('home-form');
  if(hf){ hf.style.display='block'; setTimeout(function(){ hf.scrollIntoView({behavior:'smooth',block:'start'}); },80); }
  if(window.goToForm) window.goToForm(pack);
};

// Hero word cycle
(function(){
  var words = ['pizzeria','sushi bar','bistrot','boulangerie','kebab','restaurant','burger','crêperie','brasserie','traiteur'];
  var el = document.getElementById('heroCycle');
  if(!el) return;
  var i = 0;
  setInterval(function(){
    el.classList.add('ph-out');
    setTimeout(function(){
      i = (i+1) % words.length;
      el.textContent = words[i];
      el.classList.remove('ph-out');
    }, 300);
  }, 2000);
})();


(function(){
  function initLaptopAnim(){
    var lid  = document.querySelector('.lp-lid');
    var notif = document.querySelector('.lp-notif');
    if(!lid) return;

    // Float organique du laptop
    var t0 = null;
    function floatLaptop(ts){
      if(!t0) t0 = ts;
      var t = (ts - t0) / 1000;
      var y  = Math.sin(t * 0.8) * 10 + Math.sin(t * 0.5) * 4;
      var rx = Math.sin(t * 0.6) * 1.5;
      var ry = Math.sin(t * 0.4) * 2;
      var wrap = document.querySelector('.hero-laptop-wrap');
      if(wrap) wrap.style.transform = 'translateY('+y+'px) rotateX('+rx+'deg) rotateY('+ry+'deg)';
      requestAnimationFrame(floatLaptop);
    }
    requestAnimationFrame(floatLaptop);

    // Contenu qui apparait dans l'ordi
    var els = document.querySelectorAll('.lp-site-nav,.lp-site-hero,.lp-card');
    els.forEach(function(el,i){
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity .4s ease, transform .4s ease';
      setTimeout(function(){ el.style.opacity='1'; el.style.transform='translateY(0)'; }, 400 + i*150);
    });

    // Glare sur ecran
    var screen = document.querySelector('.lp-screen');
    if(screen){
      var glare = document.createElement('div');
      glare.style.cssText = 'position:absolute;top:0;left:-100%;width:40%;height:100%;background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,.12) 50%,transparent 70%);pointer-events:none;z-index:50;animation:glareSweep 4s ease-in-out 1.5s infinite';
      screen.style.position = 'relative';
      screen.appendChild(glare);
      if(!document.getElementById('glareStyle')){
        var s = document.createElement('style');
        s.id = 'glareStyle';
        s.textContent = '@keyframes glareSweep{0%,100%{left:-100%;opacity:0}8%{opacity:1}55%{left:150%;opacity:1}60%{opacity:0}}';
        document.head.appendChild(s);
      }
    }

    // Ping notification
    if(notif){
      setTimeout(function(){
        var ping = document.createElement('div');
        ping.style.cssText = 'position:absolute;inset:-4px;border-radius:18px;border:2px solid rgba(37,99,235,.4);animation:pingRing .8s ease-out forwards;pointer-events:none';
        if(!document.getElementById('pingStyle')){
          var ps = document.createElement('style');
          ps.id = 'pingStyle';
          ps.textContent = '@keyframes pingRing{from{transform:scale(1);opacity:1}to{transform:scale(1.2);opacity:0}}';
          document.head.appendChild(ps);
        }
        notif.style.position = 'relative';
        notif.appendChild(ping);
      }, 2700);
    }
  }

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initLaptopAnim);}
  else{setTimeout(initLaptopAnim,300);}
})();

}, [])

  return (
    <>
      <Head>
        <title>Visioflow — Agence de création de sites web professionnels | Réservez votre appel</title>
        <meta name="description" content="Agence de création de sites web professionnels pour tous secteurs : sites vitrines, e-commerce, design sur mesure. Réservez un appel de découverte pour discuter de votre projet." />
        <meta name="keywords" content="création site web, agence web, site internet professionnel, site vitrine, site e-commerce, designer web, développement site web, agence web France" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="canonical" href="https://visioflow.fr/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Visioflow — Agence de création de sites web professionnels | Réservez votre appel" />
        <meta property="og:description" content="Agence de création de sites web professionnels pour tous secteurs. Réservez un appel de découverte pour discuter de votre projet." />
        <meta property="og:url" content="https://visioflow.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://visioflow.fr/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Visioflow — Agence de création de sites web professionnels" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Visioflow — Agence de création de sites web professionnels | Réservez votre appel" />
        <meta name="twitter:description" content="Agence de création de sites web professionnels pour tous secteurs. Réservez un appel de découverte pour discuter de votre projet." />
        <meta name="twitter:image" content="https://visioflow.fr/og-image.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://visioflow.fr/#organization",
                  "name": "VisioFlow",
                  "url": "https://visioflow.fr",
                  "logo": "https://visioflow.fr/logo.png",
                  "description": "Agence web spécialisée dans la création de sites professionnels pour restaurants : site vitrine ou commandes en ligne, design sur mesure, hébergement inclus, à partir de 150€.",
                  "foundingDate": "2024",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer service",
                    "email": "contact@visioflow.fr",
                    "availableLanguage": ["French"]
                  },
                  "sameAs": []
                },
                {
                  "@type": "WebSite",
                  "@id": "https://visioflow.fr/#website",
                  "url": "https://visioflow.fr",
                  "name": "VisioFlow",
                  "description": "Création de sites web professionnels pour restaurants : site vitrine ou commandes en ligne, design sur mesure, hébergement inclus. À partir de 150€, livré en 5 jours.",
                  "publisher": {
                    "@id": "https://visioflow.fr/#organization"
                  },
                  "inLanguage": "fr-FR",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://visioflow.fr/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: pageHTML }} />
      <footer style={{background:'#0f172a',borderTop:'1px solid rgba(255,255,255,.1)',padding:'40px 20px 20px',marginTop:'80px'}}>
        <div style={{maxWidth:'1200px',margin:'0 auto',textAlign:'center'}}>
          <p style={{fontFamily:'Outfit,sans-serif',fontSize:'22px',fontWeight:900,color:'#fff',marginBottom:'8px'}}>Visio<span style={{color:'#0071E3'}}>flow</span></p>
          <p style={{color:'rgba(255,255,255,.6)',marginBottom:'20px',fontSize:'14px'}}>Agence de création de sites web professionnels pour tous secteurs. Réservez votre appel de découverte dès aujourd'hui.</p>
          <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'12px',marginBottom:'24px'}}>
            <a href="/landing" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',fontSize:'14px'}}>Comment ça marche</a>
            <a href="/tarifs" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',fontSize:'14px'}}>Tarifs</a>
            <a href="/temoignages" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',fontSize:'14px'}}>Témoignages</a>
            <a href="/a-propos" style={{color:'rgba(255,255,255,.5)',textDecoration:'none',fontSize:'14px'}}>À propos</a>
          </div>
          <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'8px',fontSize:'12px',color:'rgba(255,255,255,.4)'}}>
            <a href="/mentions-legales" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Mentions légales</a>
            <span>•</span>
            <a href="/politique-confidentialite" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Politique de confidentialité</a>
            <span>•</span>
            <a href="/cgu" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>CGU</a>
            <span>•</span>
            <a href="/politique-cookies" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>Cookies</a>
            <span>•</span>
            <a href="/cgv" style={{color:'rgba(255,255,255,.4)',textDecoration:'none'}}>CGV</a>
          </div>
          <p style={{color:'rgba(255,255,255,.3)',fontSize:'13px',marginTop:'16px'}}>© {new Date().getFullYear()} VisioFlow — Tous droits réservés.</p>
        </div>
      </footer>
      <AssistanceWidget />
    </>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      'https://firestore.googleapis.com/v1/projects/visioflow-cb6eb-9d051/databases/(default)/documents/site_config/main?key=AIzaSyD2R3SfaC6ifiA_juCfM_1q7SRaAm-G1gY',
      { cache: 'no-store' }
    )
    if (!res.ok) return { props: { siteConfig: null } }
    const doc = await res.json()
    if (!doc.fields) return { props: { siteConfig: null } }
    const siteConfig = {}
    for (const [k, v] of Object.entries(doc.fields)) siteConfig[k] = parseFirestoreValue(v)
    return { props: { siteConfig } }
  } catch (e) {
    return { props: { siteConfig: null } }
  }
}

if (typeof window !== "undefined") {
(function(){
  function initScrollHint(){
    var hint = document.getElementById('vf-scroll-hint');
    if(!hint) return;
    // Show after 1.2s
    setTimeout(function(){ hint.style.opacity='1'; }, 1200);
    // Hide when user scrolls 80px
    window.addEventListener('scroll', function onScroll(){
      if(window.scrollY > 80){
        hint.style.opacity='0';
        window.removeEventListener('scroll', onScroll);
      }
    }, {passive:true});
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initScrollHint);
  } else {
    initScrollHint();
  }
})();
window.toggleVfTheme = function(){
  var cur = document.documentElement.getAttribute('data-theme');
  var next = cur === 'dark' ? 'light' : 'dark';
  var d = document.documentElement;
  d.setAttribute('data-theme', next);
  d.style.colorScheme = next;
  try{ localStorage.setItem('vf-theme', next); }catch(e){}
  var btn = document.getElementById('vf-theme-btn');
  if(btn) btn.textContent = next === 'dark' ? 'Mode clair' : 'Mode sombre';
  window.dispatchEvent(new Event('vf-theme-change'));
};
(function(){
  var t = localStorage.getItem('vf-theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
  var btn = document.getElementById('vf-theme-btn');
  if(btn) btn.textContent = t === 'dark' ? 'Mode clair' : 'Mode sombre';
})();
window.openSitePreview = function(key){
  var urls = {ess:'https://prestige-flow.vercel.app',prem:'https://matchaflow.vercel.app'};
  var url = urls[key];
  if(url) window.open(url,'_blank','noopener');
};
function _openPreviewWithUrl(url){
  var modal = document.getElementById('spm');
  var iframe = document.getElementById('spm-iframe');
  var blocked = document.getElementById('spm-blocked');
  var ext = document.getElementById('spm-ext');
  var blockedLink = document.getElementById('spm-blocked-link');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  if(!url || url === '#' || url === 'null' || url === ''){
    iframe.style.display = 'none';
    blocked.style.display = 'flex';
    blocked.querySelector('p').textContent = 'Aucune URL configur\u00e9e. Ajoutez un lien dans le dashboard.';
    return;
  }
  iframe.style.display = 'block';
  blocked.style.display = 'none';
  ext.href = url;
  blockedLink.href = url;
  iframe.src = url;
  // Detect if iframe is blocked (X-Frame-Options)
  iframe.onload = function(){
    try {
      var doc = iframe.contentDocument || iframe.contentWindow.document;
      if(!doc || doc.body.innerHTML === ''){
        iframe.style.display = 'none';
        blocked.style.display = 'flex';
      }
    } catch(e){
      iframe.style.display = 'none';
      blocked.style.display = 'flex';
    }
  };
};
window.closeSitePreview = function(){
  var modal = document.getElementById('spm');
  var iframe = document.getElementById('spm-iframe');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  setTimeout(function(){ iframe.src = ''; }, 300);
};
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') window.closeSitePreview && window.closeSitePreview();
});

// ── Stripe Checkout success handler ──────────────────────────────────────────
(function() {
  var params = new URLSearchParams(window.location.search);
  if (params.get('paiement') !== 'success') return;
  var sessionId = params.get('session_id');
  window.history.replaceState({}, '', window.location.pathname);
  var toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;top:24px;left:50%;transform:translateX(-50%);z-index:9999;background:#10b981;color:#fff;padding:14px 28px;border-radius:980px;font-family:Inter,sans-serif;font-size:15px;font-weight:600;box-shadow:0 8px 32px rgba(16,185,129,.4);transition:opacity .5s';
  toast.textContent = '✓ Paiement confirmé ! Un email de confirmation vous a été envoyé.';
  document.body.appendChild(toast);
  setTimeout(function(){ toast.style.opacity='0'; setTimeout(function(){ toast.remove(); }, 500); }, 6000);
  if (sessionId) {
    fetch('/api/send-confirmation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: sessionId }),
    }).catch(function(){});
  }
})();
}
