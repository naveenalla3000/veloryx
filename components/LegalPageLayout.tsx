import Navbar from './Navbar'
import Footer from './Footer'

export interface LegalSection {
  id: string
  heading: string
  content: React.ReactNode
}

interface LegalPageLayoutProps {
  title: string
  subtitle: string
  lastUpdated: string
  sections: LegalSection[]
}

export default function LegalPageLayout({ title, subtitle, lastUpdated, sections }: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-16 blueprint-grid">

        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap relative overflow-hidden border-b border-white/5">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 border border-white/10 mb-6">
              <span className="material-symbols-outlined text-primary text-[16px]">gavel</span>
              <span className="font-mono-technical text-mono-technical text-primary tracking-widest uppercase">
                Legal Documentation
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4 max-w-3xl">
              {title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-6">
              {subtitle}
            </p>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-mono-technical text-mono-technical text-outline">
                Last updated: {lastUpdated}
              </span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
          <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12">

            {/* Sidebar TOC */}
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-24 glass-card rounded-xl p-6">
                <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4 uppercase">
                  Contents
                </p>
                <nav className="flex flex-col gap-1">
                  {sections.map(({ id, heading }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors py-1.5 border-l-2 border-transparent hover:border-primary pl-3 text-sm leading-snug"
                    >
                      {heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="flex-1 max-w-3xl space-y-14">
              {sections.map(({ id, heading, content }) => (
                <div key={id} id={id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
                    <span className="w-1 h-6 bg-primary rounded-full shrink-0" />
                    <h2 className="font-headline-md text-headline-md text-on-surface">{heading}</h2>
                  </div>
                  <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-4">
                    {content}
                  </div>
                </div>
              ))}

              {/* Entity footer */}
              <div className="glass-card rounded-xl p-8 border border-primary/10">
                <p className="font-label-caps text-label-caps text-primary tracking-widest mb-3 uppercase">Governing Entity</p>
                <p className="font-body-md text-body-md text-on-surface mb-1 font-semibold">Veloryx Technologies FZ-LLC</p>
                <p className="font-body-md text-body-md text-on-surface-variant">CWEP9900, Compass Building, Al Shohada Road</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:info@veloryx.ae" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono-technical text-mono-technical">
                    <span className="material-symbols-outlined text-[16px]">mail</span>
                    info@veloryx.ae
                  </a>
                  <a href="tel:+971558829451" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-mono-technical text-mono-technical">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    +971 55 882 9451
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
