export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const { email } = req.body ?? {}
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    res.status(400).json({ error: 'Invalid email' })
    return
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    res.status(500).json({ error: 'Server not configured' })
    return
  }

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `New waitlist signup: ${email}`,
      }),
    })

    if (!telegramRes.ok) throw new Error('Telegram API error')

    res.status(200).json({ ok: true })
  } catch {
    res.status(502).json({ error: 'Failed to notify' })
  }
}