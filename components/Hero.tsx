const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/3520679/pexels-photo-3520679.jpeg?auto=compress&cs=tinysrgb&w=2000'

export default function Hero() {
  return (
    <section className="relative min-h-[819px] flex items-center justify-center px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-full opacity-30 mix-blend-screen"
          style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>
      <div className="text-center max-w-4xl z-10 space-y-8 mt-16 md:mt-0">
        <div className="inline-block border border-primary/30 px-4 py-1 rounded bg-surface-container-low/50 backdrop-blur-sm mb-4">
          <span className="font-mono-technical text-mono-technical text-primary tracking-widest uppercase">
            System Initialization Complete
          </span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface">
          Architecting the Future of <br />
          <span className="text-gradient">Enterprise IT</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Bespoke infrastructure and visionary consulting for global leaders. We engineer resilient,
          scalable, and secure digital ecosystems that define the next era of technological dominance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a href="/consultation" className="w-full sm:w-auto bg-primary text-on-primary font-mono-technical text-mono-technical px-8 py-4 rounded glow-btn flex items-center justify-center gap-2">
            Schedule a Consultation{' '}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          <button className="w-full sm:w-auto border border-outline-variant text-on-surface font-mono-technical text-mono-technical px-8 py-4 rounded hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
            Explore Capabilities
          </button>
        </div>
      </div>
    </section>
  )
}
