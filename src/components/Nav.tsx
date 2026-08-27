export default function Nav() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
      <span className="font-display text-xl font-semibold text-warm">Ananse Shield</span>
      <a href="#cta" className="rounded-full bg-amber px-5 py-2 font-body text-sm font-medium text-night transition hover:-translate-y-0.5 hover:brightness-110">
        Request Demo
      </a>
    </nav>
  )
}