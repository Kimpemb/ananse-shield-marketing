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
      <div className="mt-10 divide-y divide-violet/20 border-t border-violet/20 md:max-w-2xl">
        {roadmap.map((item) => (
          <div key={item.title} className="-mx-4 flex flex-col gap-2 rounded-lg px-4 py-6 transition-colors duration-200 hover:bg-warm/5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <h3 className="font-display text-lg font-semibold text-warm">{item.title}</h3>
              {item.body && <p className="mt-1 max-w-md font-body text-sm text-warm/70">{item.body}</p>}
            </div>
            {item.flag && (
              <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-amber/50 px-3 py-1 font-mono text-xs text-amber sm:self-baseline">
                requires safeguarding review
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}