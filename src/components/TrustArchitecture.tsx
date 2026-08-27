import { useInView } from '../hooks/useInView'

const cards = [
  { title: 'Local AI', body: 'Detection runs on-site. Your footage is never sent to an outside AI provider.' },
  { title: 'Your escalation chain', body: 'Solo, a trusted pair, or a partnered agency — you decide who ever sees an alert.' },
  { title: 'Your storage', body: 'Keep footage with us, encrypted, or point it at storage you control entirely.' },
]

const offsets = ['md:mt-0', 'md:mt-20', 'md:mt-40']

export default function TrustArchitecture() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3)

  return (
    <section className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-dusk">why it's trustworthy</p>
      <div ref={ref} className="mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
        {cards.map((c, i) => (
          <div
            key={c.title}
            className={`group max-w-xs ${offsets[i]} -mx-4 rounded-lg px-4 pb-4 transition-all duration-500 ease-out hover:bg-panel/40`}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transitionDelay: inView ? `${i * 200}ms` : '0ms',
            }}
          >
            <span className="block h-px w-6 -rotate-45 bg-dusk/60 transition-colors duration-300 group-hover:bg-amber/70" />
            <h3 className="mt-3 font-display text-lg font-semibold text-warm">{c.title}</h3>
            <p className="mt-2 font-body text-sm text-warm/70 transition-colors duration-300 group-hover:text-warm/90">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}