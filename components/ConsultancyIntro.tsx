const BENEFITS = [
  {
    icon: 'bolt',
    title: 'Swift Initiation',
    description: 'Strategic response protocol initiated in under 24 hours.',
  },
  {
    icon: 'architecture',
    title: 'Architectural Precision',
    description: 'Bespoke engineering tailored to high-stakes UAE enterprise requirements.',
  },
  {
    icon: 'verified_user',
    title: 'Absolute Integrity',
    description: 'Military-grade security protocols embedded in every engagement stage.',
  },
]

export default function ConsultancyIntro() {
  return (
    <div className="lg:w-2/5 space-y-12">
      <div className="space-y-6">
        <span className="font-label-caps text-label-caps text-primary tracking-[0.3em]">
          Engagement Framework
        </span>
        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
          Sovereign Engagement Protocol
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Experience technological luxury through a partnership built on architectural integrity.
          Veloryx Technologies provides elite consultancy for organizations demanding
          uncompromising digital excellence.
        </p>
      </div>

      <div className="space-y-8">
        {BENEFITS.map(({ icon, title, description }) => (
          <div key={title} className="flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-surface-container-high border border-outline-variant/30 text-primary">
              <span className="material-symbols-outlined">{icon}</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{title}</h3>
              <p className="text-on-surface-variant">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-surface-container-low border border-outline-variant/20 rounded-lg">
        <p className="font-mono-technical text-mono-technical text-on-surface-variant">
          SYSTEM_STATUS: <span className="text-primary">AWAITING_ENGAGEMENT</span>
          <br />
          PROTOCOL_ID: <span className="text-primary">VLX-9942-ENG</span>
        </p>
      </div>
    </div>
  )
}
