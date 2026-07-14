const DIRECTIVES = [
  {
    icon: 'architecture',
    title: 'Structural Integrity',
    description:
      'Systems designed with uncompromising redundancy and resilience, mirroring physical architecture principles in the digital realm.',
    layer: 'System Layer 01',
  },
  {
    icon: 'memory',
    title: 'Algorithmic Precision',
    description:
      'Every line of code and data pathway is optimized for maximum efficiency, eliminating friction in enterprise operations.',
    layer: 'Process Layer 02',
  },
  {
    icon: 'shield_locked',
    title: 'Impenetrable Defense',
    description:
      'Security is not a layer, but the foundation. We build digital fortresses to protect mission-critical intellectual property.',
    layer: 'Fortress Layer 03',
  },
]

export default function AboutCoreDirectives() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto bg-surface-container-lowest/30 rounded-[2rem]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
        <div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Core Directives
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-md">
            The principles that govern every Veloryx deployment.
          </p>
        </div>
        <div className="hidden md:block w-32 h-px bg-outline-variant mb-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {DIRECTIVES.map(({ icon, title, description, layer }) => (
          <div key={title} className="directive-card p-10 rounded-xl group">
            <div className="w-16 h-16 rounded-lg bg-surface-container flex items-center justify-center mb-8 border border-outline-variant group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300">
              <span
                className="material-symbols-outlined text-primary text-3xl"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {icon}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6">{title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2.5 group-hover:translate-x-0">
              <span className="font-mono-technical text-xs font-bold tracking-widest uppercase">
                {layer}
              </span>
              <span className="material-symbols-outlined text-sm">trending_flat</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
