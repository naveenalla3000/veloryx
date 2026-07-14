const BADGES = ['ISO/IEC 27001', 'SOC2 TYPE II', 'GDPR COMPLIANT']

export default function ServicesCTA() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop pb-section-gap">
      <div className="glass-card relative overflow-hidden p-16 md:p-24 text-center">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8">
          Ready to <span className="text-primary italic">Initiate?</span>
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12">
          Invite our senior partners for a deep-dive assessment of your existing infrastructure. We
          provide the technical clarity required for the next decade of operations.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button
            type="button"
            className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-label-caps text-label-caps hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all flex items-center justify-center gap-3"
          >
            Initiate Architectural Review{' '}
            <span className="material-symbols-outlined">lock_open</span>
          </button>
          <a
            href="#"
            className="font-label-caps text-label-caps text-on-surface border-b border-on-surface/20 hover:border-primary transition-colors pb-1"
          >
            Connect with Partner
          </a>
        </div>
        <div className="mt-20 flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {BADGES.map((badge) => (
            <span key={badge} className="font-mono-technical text-mono-technical">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
