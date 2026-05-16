const DEMO_URLS = {
  ess:  'https://prestige-flow.vercel.app',
  prem: 'https://matchaflow.vercel.app',
}

export default function handler(req, res) {
  const { pack } = req.query
  const url = DEMO_URLS[pack]
  if (!url) return res.status(404).json({ error: 'Not found' })
  res.status(200).json({ url })
}
