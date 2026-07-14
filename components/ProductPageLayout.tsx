import type { ProductData } from '@/lib/products'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ProductPageLayout({ product }: { product: ProductData }) {
  const { code, icon, title, sector, tagline, description, metrics, features, useCases, compliance } = product

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-16">

        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap relative overflow-hidden blueprint-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute top-8 left-8 tech-coord hidden xl:block">{code} // PRODUCT_DETAIL</div>
          <div className="absolute top-8 right-8 tech-coord hidden xl:block">STATUS: ACTIVE</div>

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 mb-6">
              <span className="material-symbols-outlined text-primary text-[16px]">{icon}</span>
              <span className="font-mono-technical text-mono-technical text-primary tracking-widest uppercase">{code} // {sector}</span>
            </div>
            <h1 className="font-display-lg text-[48px] md:text-display-lg text-on-surface mb-6 leading-tight max-w-4xl">
              {title}
            </h1>
            <p className="font-headline-md text-headline-md text-primary mb-6">{tagline}</p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-12 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/consultation"
                className="bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 tracking-[0.15em] glow-btn hover:brightness-110 transition-all duration-300 text-center"
              >
                Request a Demo
              </a>
              <a
                href="/contact"
                className="border border-primary text-primary font-label-caps text-label-caps px-8 py-4 tracking-[0.15em] hover:bg-primary/10 transition-all duration-300 text-center"
              >
                Speak to an Expert
              </a>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="max-w-[1440px] mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-gutter relative z-10">
            {metrics.map(({ value, label }) => (
              <div key={label} className="glass-card p-6 text-center border-b-2 border-primary/20">
                <p className="font-headline-lg text-headline-lg text-on-surface mb-1">{value}</p>
                <p className="font-label-caps text-label-caps text-primary uppercase">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest/40">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12">
              <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2 uppercase">Core Capabilities</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Everything you need. Nothing you don&apos;t.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {features.map(({ icon: fIcon, title: fTitle, description: fDesc }) => (
                <div key={fTitle} className="glass-card rounded-xl p-8 flex flex-col gap-4 group glow-hover transition-all duration-500">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[20px]">{fIcon}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    {fTitle}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {fDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12">
              <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2 uppercase">Who It&apos;s For</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Built for the teams who run your business.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {useCases.map(({ icon: uIcon, title: uTitle, description: uDesc }) => (
                <div key={uTitle} className="glass-card rounded-xl p-10 flex flex-col gap-5 relative overflow-hidden group glow-hover transition-all duration-500">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <span className="material-symbols-outlined text-[80px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>{uIcon}</span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>{uIcon}</span>
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    {uTitle}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {uDesc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance (optional) */}
        {compliance && compliance.length > 0 && (
          <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest/40">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2 uppercase">Compliance & Standards</p>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Built to meet the strictest regulatory requirements.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {compliance.map((c) => (
                  <div key={c} className="flex items-center gap-2 px-5 py-3 glass-card border border-primary/20">
                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                    <span className="font-mono-technical text-mono-technical text-on-surface">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap text-center relative overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 bg-primary/3 pointer-events-none" />
          <div className="absolute top-0 left-0 tech-coord p-4">READY_TO_DEPLOY</div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Ready to deploy {title}?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
              Our implementation team will have you live in weeks, not months. Start with a free
              consultation and a tailored demo for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="bg-primary text-on-primary font-label-caps text-label-caps px-10 py-5 tracking-[0.15em] glow-btn hover:brightness-110 transition-all duration-300 emerald-glow-hover"
              >
                Request Free Consultation
              </a>
              <a
                href="/services"
                className="border border-white/20 hover:border-primary text-on-surface font-label-caps text-label-caps px-10 py-5 tracking-[0.15em] transition-all duration-300"
              >
                View All Products
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
