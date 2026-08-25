export default function Footer() {
  return (
    <footer className="border-t border-dusk/20 px-8 py-8 font-mono text-xs text-dusk md:px-16">
      © {new Date().getFullYear()} Ananse Shield
    </footer>
  )
}