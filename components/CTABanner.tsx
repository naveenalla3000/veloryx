export default function CTABanner() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="glass-card rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center gap-8 p-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Ready to Architect Your Future?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Partner with Veloryx to design infrastructure that scales with your ambition.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary text-on-primary font-mono-technical text-mono-technical px-8 py-4 rounded glow-btn flex items-center gap-2">
              Schedule a Consultation{' '}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="border border-outline-variant text-on-surface font-mono-technical text-mono-technical px-8 py-4 rounded hover:border-primary hover:text-primary transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
