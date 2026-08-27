const markets = ['Home', 'Warehouse', 'Retail', 'Offices', 'Estates', 'Data centres']

export default function MarketsTable() {
  return (
    <section className="bg-[#241C3B] px-8 py-16 md:px-16">
      <p className="font-mono text-sm text-violet">one engine, many markets</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {markets.map((m) => (
          <span key={m} className="rounded-full border border-violet/40 px-4 py-2 font-body text-sm text-warm/80 transition-colors duration-300 hover:border-violet hover:bg-violet/10 hover:text-warm">
            {m}
          </span>
        ))}
      </div>
    </section>
  )
}