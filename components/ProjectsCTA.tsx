export default function ProjectsCTA() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-primary/5 opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 tech-coord p-4">SYSTEM_READY_00</div>
      <div className="absolute bottom-0 right-0 tech-coord p-4">END_OF_TRANS_01</div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-headline-lg text-headline-lg mb-8 text-on-surface">
          Ready to architect your future?
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
          Partner with Veloryx Technologies for the next generation of industrial-grade IT solutions.
          Join the elite network of digital infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/consultation"
            className="bg-primary text-on-primary px-12 py-5 font-label-caps uppercase emerald-glow-hover transition-all active:scale-95 border border-primary tracking-[0.15em] hover:brightness-110"
          >
            Schedule Consultation
          </a>
          <a
            href="/contact"
            className="border border-white/20 hover:border-primary text-on-surface px-12 py-5 font-label-caps uppercase transition-all tracking-[0.15em]"
          >
            Technical Inquiry
          </a>
        </div>
      </div>
    </section>
  )
}
