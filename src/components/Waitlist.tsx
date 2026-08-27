import { useState, type FormEvent } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="border-t border-dusk/20 px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-dusk">early access</p>
      <h2 className="mt-3 max-w-md font-display text-2xl font-semibold text-warm">
        Not ready for a live demo? Join the waitlist.
      </h2>
      <p className="mt-2 max-w-md font-body text-sm text-warm/70">
        We'll reach out when Ananse Shield is ready for broader access.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status !== 'idle') setStatus('idle') }}
          placeholder="you@company.com"
          className="w-full rounded-full border border-dusk/30 bg-panel px-5 py-3 font-body text-sm text-warm placeholder:text-warm/40 outline-none transition focus-visible:border-amber"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="shrink-0 rounded-full bg-amber px-6 py-3 font-body text-sm font-medium text-night transition hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status === 'loading' ? 'Joining…' : 'Join waitlist'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-3 font-mono text-xs text-amber">You're on the list — we'll be in touch.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 font-mono text-xs text-dusk">Something went wrong. Try again, or email hello@ananseshield.com directly.</p>
      )}
    </section>
  )
}