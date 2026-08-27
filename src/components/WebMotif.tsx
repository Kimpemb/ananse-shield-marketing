export default function WebMotif() {
  return (
    <svg
      viewBox="0 0 800 500"
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* anchor point — where the web is spun from */}
      <circle cx="640" cy="400" r="4" fill="var(--color-dusk)" opacity="0.6" />

      {/* radiating threads */}
      <g stroke="var(--color-dusk)" strokeWidth="1" strokeOpacity="0.32">
        <line x1="640" y1="400" x2="60" y2="420" />
        <line x1="640" y1="400" x2="120" y2="260" />
        <line x1="640" y1="400" x2="80" y2="60" />
        <line x1="640" y1="400" x2="220" y2="40" />
        <line x1="640" y1="400" x2="380" y2="30" />
        <line x1="640" y1="400" x2="520" y2="80" />
        <line x1="640" y1="400" x2="680" y2="60" />
      </g>

      {/* cross-threads — the woven rings */}
      <g fill="none" stroke="var(--color-dusk)" strokeWidth="1" strokeOpacity="0.28">
        <polyline points="437,407 458,351 444,281 493,274 549,270.5 598,288 654,281" />
        <polyline points="263,413 302,309 276,179 367,166 471,159.5 562,192 666,179" />
      </g>

      {/* thread-tip nodes */}
      <g fill="var(--color-dusk)" opacity="0.5">
        <circle cx="60" cy="420" r="3" />
        <circle cx="120" cy="260" r="3" />
        <circle cx="80" cy="60" r="3" />
        <circle cx="220" cy="40" r="3" />
        <circle cx="380" cy="30" r="3" />
        <circle cx="520" cy="80" r="3" />
        <circle cx="680" cy="60" r="3" />
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