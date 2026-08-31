import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'public', '.well-known', 'apple-developer-merchantid-domain-association')
    const content = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'application/octet-stream')
    res.status(200).send(content)
  } catch {
    res.status(404).send('Not found')
  }
}
