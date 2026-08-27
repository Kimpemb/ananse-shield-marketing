export function About() {
  return (
    <section className="px-8 py-20 md:px-16">
      <p className="font-mono text-sm text-dusk">about</p>
      <p className="mt-3 max-w-xl font-body text-warm/70">
        Ananse Shield is presenting at the Pan-African AI Summit, September 22.
        Built to be trusted by the people it protects, not just by the people who install it.
      </p>
    </section>
  )
}

export function CTA() {
  return (
    <section id="cta" className="px-8 py-24 text-center md:px-16">
      <h2 className="font-display text-3xl font-semibold text-warm">Want to see it live?</h2>
      <a href="mailto:hello@ananseshield.com" className="mt-6 inline-block rounded-full bg-amber px-8 py-3 font-body font-medium text-night transition hover:-translate-y-0.5 hover:brightness-110">
        Request a demo
      </a>
    </section>
  )
}