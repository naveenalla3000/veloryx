export default function ServicesHero() {
  return (
    <section className="relative min-h-[716px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="absolute inset-0 grid-overlay -z-10" />
      <div className="animate-data-stream" style={{ left: '10%', animationDelay: '0s' }} />
      <div className="animate-data-stream" style={{ left: '40%', animationDelay: '0.7s' }} />
      <div className="animate-data-stream" style={{ left: '75%', animationDelay: '0.2s' }} />
      <div className="max-w-4xl relative">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-px bg-primary" />
          <span className="font-mono-technical text-mono-technical text-primary uppercase tracking-widest">
            Battle-Tested Software Products
          </span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 leading-tight">
          Powerful Tools. <br />
          <span className="text-primary italic">Built for Every Industry.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We have engineered advanced CRM platforms, full-suite ERP systems, specialized healthcare
          software, and education technology — each product refined through real-world enterprise
          deployments across the UAE and beyond.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <button
            type="button"
            className="px-10 py-4 bg-primary text-on-primary font-label-caps text-label-caps hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
          >
            Explore Our Products
          </button>
          <button
            type="button"
            className="px-10 py-4 border border-outline text-on-surface font-label-caps text-label-caps hover:bg-white/5 transition-all"
          >
            Request a Demo
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 right-margin-desktop hidden lg:block">
        <div className="font-mono-technical text-mono-technical text-outline flex flex-col gap-2 items-end">
          <span>COORD: 25.2048° N, 55.2708° E</span>
          <span className="flex items-center gap-2 text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            SYSTEM NOMINAL
          </span>
        </div>
      </div>
    </section>
  )
}
