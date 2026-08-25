const steps = [
  { label: 'Detect', body: 'A local model flags activity in a zone you define — no footage leaves the building to make this call.' },
  { label: 'Verify', body: 'Your chosen person reviews a short clip and confirms or dismisses it. Most alerts end here.' },
  { label: 'Escalate', body: "If it's real, or no one responds in time, it reaches exactly who you've configured — never anyone else." },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-dusk">how it works</p>
      <div className="mt-6 grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.label} className="rounded-lg bg-panel p-6">
            <span className="font-mono text-xs text-amber">0{i + 1}</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-warm">{step.label}</h3>
            <p className="mt-2 font-body text-sm text-warm/70">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}