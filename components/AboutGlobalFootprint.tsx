const REGIONS = [
  { code: 'UAE', label: 'Operational HQ & R&D Center' },
  { code: 'EMEA', label: 'Strategic Infrastructure Hubs' },
  { code: 'North America', label: 'Enterprise Security Operations' },
]

export default function AboutGlobalFootprint() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="glass-card p-12 rounded-[2rem] overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="font-headline-lg text-on-surface mb-8">Global Footprint</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {REGIONS.map(({ code, label }) => (
              <div key={code} className="flex flex-col gap-2">
                <span className="text-primary font-bold text-3xl">{code}</span>
                <span className="text-on-surface-variant">{label}</span>
                <div className="h-1 w-12 bg-primary mt-2" />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
