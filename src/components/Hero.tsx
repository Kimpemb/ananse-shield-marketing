import WebMotif from './WebMotif'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-8 py-24 md:px-16 md:py-36">
      <WebMotif />
      <div className="relative z-10 max-w-2xl">
        <p className="animate-fade-up font-mono text-sm text-dusk">detect → verify → escalate</p>
        <h1 className="animate-fade-up mt-4 font-display text-5xl font-bold leading-tight text-warm [animation-delay:120ms] md:text-6xl">
          Watching, without watching alone.
        </h1>
        <p className="animate-fade-up mt-6 max-w-xl font-body text-lg text-warm/80 [animation-delay:240ms]">
          Ananse Shield detects what matters, has a trusted person confirm it,
          and reaches whoever you choose — never a stranger, never a black box.
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:360ms]">
          <a href="#cta" className="rounded-full bg-amber px-6 py-3 font-body font-medium text-night transition hover:-translate-y-0.5 hover:brightness-110">
            Request a demo
          </a>
          <a href="#how-it-works" className="group relative -mx-3 inline-flex rounded-full px-3 py-3 font-body text-warm/90 transition-colors duration-300 hover:bg-warm/5 hover:text-warm">
            See how it works
            <span className="absolute -bottom-0.5 left-3 h-px w-0 bg-dusk transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]" />
          </a>
        </div>
      </div>
    </section>
  )
}