const logLines = [
  { time: '14:02:11', text: 'zone: entryway        detected   conf: 0.94' },
  { time: '14:02:13', text: 'zone: entryway        sent → H1' },
  { time: '14:02:19', text: 'zone: entryway        confirmed by H1' },
  { time: '14:02:19', text: 'zone: entryway        escalated → H2', highlight: true },
]

export default function AvailableNow() {
  return (
    <section className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-amber">available now</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-warm">
        Intrusion detection, live.
      </h2>
      <div className="mt-6 overflow-hidden rounded-lg border border-dusk/20 bg-panel">
        <div className="flex items-center gap-2 border-b border-dusk/20 px-6 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-amber animate-node-pulse" />
          <span className="font-mono text-xs tracking-wide text-dusk">event log — live</span>
        </div>
        <div className="space-y-1.5 px-6 py-5 font-mono text-sm">
          {logLines.map((line, i) => (
            <div
              key={i}
              className={`-mx-2 rounded px-2 py-0.5 transition-colors duration-200 hover:bg-warm/5 ${line.highlight ? 'text-amber' : 'text-warm/80'}`}
            >
              <span className="text-dusk">{line.time}</span>{'  '}{line.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}