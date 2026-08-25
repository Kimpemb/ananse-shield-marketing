const cards = [
  { title: 'Local AI', body: 'Detection runs on-site. Your footage is never sent to an outside AI provider.' },
  { title: 'Your escalation chain', body: 'Solo, a trusted pair, or a partnered agency — you decide who ever sees an alert.' },
  { title: 'Your storage', body: 'Keep footage with us, encrypted, or point it at storage you control entirely.' },
]

export default function TrustArchitecture() {
  return (
    <section className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-dusk">why it's trustworthy</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-lg border border-dusk/30 bg-panel/50 p-6">
            <h3 className="font-display text-lg font-semibold text-warm">{c.title}</h3>
            <p className="mt-2 font-body text-sm text-warm/70">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}