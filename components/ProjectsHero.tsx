const STATS = [
  { coord: 'METRIC_01', label: 'Uptime Reliability', value: '99.999%' },
  { coord: 'METRIC_02', label: 'Network Latency', value: '< 250ms' },
  { coord: 'METRIC_03', label: 'Encrypted Nodes', value: '12.4k' },
  { coord: 'METRIC_04', label: 'Data Sovereign', value: '100%' },
]

export default function ProjectsHero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative coords */}
      <div className="absolute top-20 left-10 tech-coord hidden xl:block">REF_ID: VX_PRJ_ROOT_00</div>
      <div className="absolute top-20 right-10 tech-coord hidden xl:block">STATUS: CORE_ACTIVE</div>

      {/* Hero text */}
      <div className="max-w-5xl text-center relative z-10 mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 mb-8">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          <span className="font-mono-technical text-mono-technical text-primary tracking-widest uppercase">
            Global Portfolio // FY24 v.2.1
          </span>
        </div>
        <h1 className="font-display-lg text-display-lg mb-8 text-on-surface">
          Architectural Achievements
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
          Engineering the foundations of global industry through uncompromising technological rigor.
          Our projects represent the apex of digital infrastructure, security, and algorithmic precision.
        </p>
      </div>

      {/* Stats bar */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-gutter w-full max-w-6xl relative mx-auto">
        {STATS.map(({ coord, label, value }) => (
          <div key={coord} className="glass-card p-8 text-center border-b-2 border-primary/20">
            <div className="tech-coord mb-2 text-[8px]">{coord}</div>
            <p className="font-label-caps text-label-caps text-primary mb-2 uppercase">{label}</p>
            <p className="font-headline-lg text-headline-lg text-on-surface">{value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
