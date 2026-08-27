import { useInView } from '../hooks/useInView'

const steps = [
  { label: 'Detect', body: 'A local model flags activity in a zone you define — no footage leaves the building to make this call.' },
  { label: 'Verify', body: 'Your chosen person reviews a short clip and confirms or dismisses it. Most alerts end here.' },
  { label: 'Escalate', body: "If it's real, or no one responds in time, it reaches exactly who you've configured — never anyone else." },
]

export default function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  return (
    <section id="how-it-works" className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-dusk">how it works</p>
      <div ref={ref} className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
        <div
          className="pointer-events-none absolute left-0 right-0 top-[0.35rem] hidden h-px origin-left bg-dusk/25 transition-transform duration-700 ease-out md:block"
          style={{ transform: inView ? 'scaleX(1)' : 'scaleX(0)' }}
        />
        {steps.map((step, i) => (
          <div
            key={step.label}
            className="group relative -mx-4 rounded-lg px-4 pb-4 transition-all duration-500 ease-out hover:bg-panel/40"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(12px)',
              transitionDelay: inView ? `${300 + i * 180}ms` : '0ms',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="relative z-10 h-2 w-2 rounded-full bg-amber transition-transform duration-300 group-hover:scale-150" />
              <span className="font-mono text-xs text-dusk">0{i + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-warm">{step.label}</h3>
            <p className="mt-2 max-w-xs font-body text-sm text-warm/70 transition-colors duration-300 group-hover:text-warm/90">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}