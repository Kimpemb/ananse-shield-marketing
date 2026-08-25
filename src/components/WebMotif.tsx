export default function WebMotif() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="var(--color-dusk)" strokeWidth="1" opacity="0.5">
        <line x1="120" y1="80" x2="300" y2="150" />
        <line x1="300" y1="150" x2="500" y2="100" />
        <line x1="500" y1="100" x2="650" y2="200" />
        <line x1="450" y1="400" x2="650" y2="350" />
        <line x1="650" y1="200" x2="650" y2="350" />
      </g>
      <g fill="var(--color-dusk)">
        <circle cx="120" cy="80" r="4" />
        <circle cx="500" cy="100" r="4" />
        <circle cx="650" cy="200" r="4" />
        <circle cx="450" cy="400" r="4" />
        <circle cx="650" cy="350" r="4" />
      </g>
      {/* detection node */}
      <circle cx="300" cy="150" r="6" fill="var(--color-amber)" className="animate-node-pulse" />
      {/* thread drawing to verification node */}
      <line x1="300" y1="150" x2="250" y2="320" stroke="var(--color-amber)" strokeWidth="2" className="animate-thread-draw" />
      {/* verification node (checkmark) */}
      <g transform="translate(250,320)" className="animate-node-appear">
        <circle r="10" fill="var(--color-night)" stroke="var(--color-amber)" strokeWidth="2" />
        <path d="M-4,0 L-1,3 L4,-4" stroke="var(--color-amber)" strokeWidth="2" fill="none" />
      </g>
    </svg>
  )
}