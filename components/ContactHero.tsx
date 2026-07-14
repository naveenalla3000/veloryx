export default function ContactHero() {
  return (
    <div className="mb-24 text-center md:text-left">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded border border-primary/20 bg-primary/5 mb-8">
        <span className="font-mono-technical text-[11px] text-primary tracking-[0.3em] uppercase">
          Status: Connection Established
        </span>
      </div>
      <h1 className="font-display-lg text-headline-lg-mobile md:text-[64px] text-on-surface mb-8 leading-[1.1] tracking-tight">
        Architecting the{' '}
        <span className="text-primary text-glow italic">Digital Frontier</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0 opacity-80">
        High-fidelity IT consultancy for visionary enterprises. Deploying expertise at the
        intersection of infrastructure and innovation.
      </p>
    </div>
  )
}
