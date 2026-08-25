import WebMotif from './WebMotif'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 py-24 md:px-16 md:py-36">
      <WebMotif />
      <div className="relative z-10 max-w-2xl">
        <p className="font-mono text-sm text-dusk">detect → verify → escalate</p>
        <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-warm md:text-6xl">
          Watching, without watching alone.
        </h1>
        <p className="mt-6 max-w-xl font-body text-lg text-warm/80">
          Ananse Shield detects what matters, has a trusted person confirm it,
          and reaches whoever you choose — never a stranger, never a black box.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#cta" className="rounded-full bg-amber px-6 py-3 font-body font-medium text-night hover:opacity-90">
            Request a demo
          </a>
          <a href="#how-it-works" className="rounded-full border border-dusk px-6 py-3 font-body text-warm hover:border-warm">
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}