export default function AvailableNow() {
  return (
    <section className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-amber">available now</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-warm">
        Intrusion detection, live.
      </h2>
      <div className="mt-6 rounded-lg bg-panel p-6">
        <p className="font-mono text-xs text-dusk">event log — sample</p>
        <pre className="mt-3 overflow-x-auto font-mono text-sm text-warm/80">
{`14:02:11  zone: entryway        detected   conf: 0.94
14:02:13  zone: entryway        sent → H1
14:02:19  zone: entryway        confirmed by H1
14:02:19  zone: entryway        escalated → H2`}
        </pre>
      </div>
    </section>
  )
}