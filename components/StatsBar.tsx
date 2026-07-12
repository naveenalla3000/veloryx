const STATS = [
  { value: '200+', label: 'Global Deployments' },
  { value: '99.98%', label: 'Guaranteed Uptime' },
  { value: '34', label: 'Countries Served' },
  { value: '120+', label: 'Certified Engineers' },
]

export default function StatsBar() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
        {STATS.map(({ value, label }) => (
          <div key={label} className="glass-card rounded-xl p-8 text-center">
            <p className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary">
              {value}
            </p>
            <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-2 uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
