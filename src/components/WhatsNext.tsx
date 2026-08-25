const roadmap = [
  { title: 'Fall & medical detection', flag: false },
  { title: 'Contextual priors', body: 'Tell the system what matters at your site — it interprets, never assumes.', flag: false },
  { title: 'Facial ID + access control', flag: true },
  { title: 'School child-safety monitoring', flag: true },
]

export default function WhatsNext() {
  return (
    <section className="bg-gradient-to-b from-night to-[#241C3B] px-8 py-24 md:px-16">
      <p className="font-mono text-sm text-violet">building toward — not yet available</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-warm">What's next</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {roadmap.map((item) => (
          <div key={item.title} className="rounded-lg border border-violet/30 bg-panel/40 p-6">
            <h3 className="font-display text-lg font-semibold text-warm">{item.title}</h3>
            {item.body && <p className="mt-2 font-body text-sm text-warm/70">{item.body}</p>}
            {item.flag && (
              <span className="mt-3 inline-block rounded-full border border-violet/50 px-3 py-1 font-mono text-xs text-violet">
                requires safeguarding review
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}