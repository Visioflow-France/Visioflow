const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const fmtMoney = (n) => `${Math.round(n).toLocaleString('fr-FR')} €`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const digits = (s) => String(s || '').replace(/\D/g, '').length;

const SITE_LABELS = { vitrine: 'Site vitrine', ecommerce: 'Boutique e-commerce', aucun: 'Autre' };

function estimateText(estimate) {
  if (!estimate || estimate.custom) return 'Sur devis (besoin spécifique)';
  let txt = `à partir de ${estimate.oneLow} €`;
  if (estimate.monthly > 0) txt += ` + à partir de ${estimate.monthly} €/mois`;
  return txt;
}

function row(label, value) {
  if (value === undefined || value === null || value === '') return '';
  return `<tr><td style="padding:6px 12px 6px 0;color:#666;width:150px;vertical-align:top">${esc(label)}</td><td style="padding:6px 0;font-weight:600">${value}</td></tr>`;
}

/* ── Email notification admin ──────────────────────────────────────────────── */
async function sendAdminEmail(data) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.startsWith('re_XXX')) return;

  const { form, estimate, detected } = data;
  const lines = (estimate?.lines || [])
    .map((l) => `<li style="margin:2px 0">${esc(l.label)} — <strong>${l.price}€</strong></li>`)
    .join('');
  const monthlyLines = (estimate?.monthlyLines || [])
    .map((l) => `<li style="margin:2px 0">${esc(l.label)} — <strong>${l.price}€/mois</strong></li>`)
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
      <h2 style="color:#0071E3">📣 Nouvelle demande d'estimation</h2>
      <table style="width:100%;border-collapse:collapse">
        ${row('Client', esc(`${form.firstName} ${form.lastName}`.trim()))}
        ${row('Téléphone', esc(form.phone))}
        ${row('Email', esc(form.email))}
        ${row('Type de site', esc(SITE_LABELS[form.siteType] || form.siteType))}
        ${row('Google Business', form.googleBusiness ? `Oui${(form.gbOptions || []).length ? ` — ${form.gbOptions.join(', ')}` : ''}` : 'Non')}
        ${row('Réseaux sociaux', form.networks ? `Oui — ${(form.platforms || []).join(', ') || 'plateforme à définir'}` : 'Non')}
        ${row('Urgent', form.urgent ? 'Oui (+10%)' : 'Non')}
        ${row('Description', esc(form.description))}
      </table>
      <div style="background:#f0f7ff;border-radius:10px;padding:14px 18px;margin-top:18px">
        <p style="margin:0 0 8px;font-size:13px;color:#31708f;text-transform:uppercase;letter-spacing:.05em">Estimation calculée</p>
        <p style="margin:0;font-size:20px;font-weight:800;color:#0071E3">${esc(estimateText(estimate))}</p>
        ${lines || monthlyLines ? `<ul style="margin:10px 0 0;padding-left:18px;font-size:13px;color:#444">${lines}${monthlyLines}</ul>` : ''}
      </div>
    </div>
  `;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to: process.env.ADMIN_NOTIFY_EMAIL || 'visioflow77@gmail.com',
      subject: `📣 Estimation — ${form.firstName} ${form.lastName}`.trim(),
      html,
    }),
  }).catch(() => {});
}

/* ── Email de confirmation client ──────────────────────────────────────────── */
async function sendClientEmail(data) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey.startsWith('re_XXX')) return;

  const { form, estimate } = data;
  if (!form.email || !EMAIL_RE.test(form.email)) return;

  const price = estimate?.custom
    ? 'Nous étudions votre demande et vous proposons un chiffrage précis lors de notre premier échange.'
    : `Votre projet est estimé <strong>à partir de ${estimate.oneLow} €</strong>` +
      (estimate.monthly > 0 ? ` + <strong>à partir de ${estimate.monthly} €/mois</strong> pour l'abonnement.` : '.');

  const html = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;padding:32px;border-radius:16px">
      <div style="text-align:center;margin-bottom:24px">
        <h1 style="font-size:24px;font-weight:800;margin:0;color:#fff">Merci ${esc(form.firstName)} !</h1>
        <p style="color:rgba(255,255,255,.5);margin-top:6px;font-size:14px">Votre demande d'estimation est bien arrivée</p>
      </div>
      <div style="background:rgba(255,255,255,.06);border-radius:12px;padding:20px 24px;margin-bottom:20px">
        <p style="margin:0 0 12px;font-size:13px;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.06em">Votre estimation</p>
        <p style="margin:0;font-size:17px;line-height:1.6">${price}</p>
      </div>
      <div style="background:rgba(52,211,153,.08);border:1px solid rgba(52,211,153,.2);border-radius:12px;padding:16px 20px;margin-bottom:24px">
        <p style="margin:0;font-size:13px;color:#34d399;line-height:1.7">
          ✓ Un membre de l'équipe Visioflow vous recontacte <strong>sous 24h ouvrées</strong>.<br/>
          ✓ Cette estimation est indicative : nous l'affinons ensemble, gratuitement.<br/>
          ✓ Sans engagement de votre part.
        </p>
      </div>
      <p style="font-size:12px;color:rgba(255,255,255,.25);text-align:center;margin:0">
        Une question ? Répondez simplement à cet email.
      </p>
    </div>
  `;

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM || 'VisioFlow <noreply@visioflow.fr>',
      to: form.email,
      subject: `✅ Votre estimation Visioflow — ${form.firstName}`.trim(),
      html,
    }),
  }).catch(() => {});
}

/* ── Handler ───────────────────────────────────────────────────────────────── */
function toFirestore(value) {
  if (value === null || value === undefined) return { nullValue: null };
  if (typeof value === 'string')  return { stringValue: value };
  if (typeof value === 'boolean') return { booleanValue: value };
  if (typeof value === 'number')  return Number.isInteger(value) ? { integerValue: String(value) } : { doubleValue: value };
  if (Array.isArray(value))       return { arrayValue: { values: value.map(toFirestore) } };
  if (typeof value === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(value)) fields[k] = toFirestore(v);
    return { mapValue: { fields } };
  }
  return { stringValue: String(value) };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { form, estimate, detected } = req.body || {};
  if (!form || typeof form !== 'object') return res.status(400).json({ error: 'form manquant' });

  const hasContact = digits(form.phone) >= 8 || EMAIL_RE.test(form.email || '');
  if (!hasContact) return res.status(400).json({ error: 'téléphone ou email requis' });

  const now = new Date();
  const doc = {
    form,
    estimate: estimate || null,
    detected: detected || [],
    type: 'estimate-request',
    status: 'new',
    createdAt: now.toISOString(),
    timestamp: now,
  };

  // 1) SDK admin (FIREBASE_SERVICE_ACCOUNT sur Vercel) — chemin fiable.
  try {
    const { db } = await import('../../lib/firebase-admin');
    const ref = await db.collection('estimate_requests').add(doc);
    sendAdminEmail({ form, estimate, detected }).catch(() => {});
    sendClientEmail({ form, estimate }).catch(() => {});
    return res.status(200).json({ success: true, docId: ref.id });
  } catch (sdkErr) {
    // 2) Repli REST avec clé API.
    const apiKey = process.env.FIREBASE_API_KEY;
    if (!apiKey) {
      console.error('estimate-request:', sdkErr.message);
      sendAdminEmail({ form, estimate, detected }).catch(() => {});
      sendClientEmail({ form, estimate }).catch(() => {});
      return res.status(200).json({ success: true, saved: false });
    }

    const projectId = process.env.FIREBASE_PROJECT_ID || 'visioflow-cb6eb-9d051';
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/estimate_requests?key=${apiKey}`;
    const fields = {};
    for (const [k, v] of Object.entries(doc)) {
      if (k === 'timestamp') fields[k] = { timestampValue: v.toISOString() };
      else fields[k] = toFirestore(v);
    }

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields }),
      });
      if (!resp.ok) throw new Error(await resp.text());

      const created = await resp.json();
      const docId = (created.name && created.name.split('/').pop()) || '';
      sendAdminEmail({ form, estimate, detected }).catch(() => {});
      sendClientEmail({ form, estimate }).catch(() => {});
      res.status(200).json({ success: true, docId });
    } catch (err) {
      console.error('estimate-request REST:', err.message);
      sendAdminEmail({ form, estimate, detected }).catch(() => {});
      sendClientEmail({ form, estimate }).catch(() => {});
      res.status(200).json({ success: true, saved: false });
    }
  }
}
