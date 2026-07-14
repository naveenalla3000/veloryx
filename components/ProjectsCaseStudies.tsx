import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

function ScanningImage({ src, alt, aspect = 'aspect-[16/10]', delay = '0s' }: {
  src: string
  alt: string
  aspect?: string
  delay?: string
}) {
  return (
    <div className="relative group">
      <div className="scanning-line z-10" style={{ animationDelay: delay }} />
      <div className={`relative glass-card ${aspect} overflow-hidden`}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  )
}

export default function ProjectsCaseStudies() {
  return (
    <>
      {/* Case Study 02 — Luminal Health CRM */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative">
        <div className="absolute top-40 right-20 tech-coord rotate-90 hidden xl:block">COORD_L_01: 25.2048 N</div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <ScrollReveal className="md:col-span-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono-technical text-mono-technical text-primary uppercase tracking-widest">
                Case Study 02 // Healthcare
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
              Luminal Health CRM
            </h2>
            <div className="bg-primary/5 border-l-2 border-primary p-4 mb-6">
              <p className="font-label-caps text-[10px] text-primary/80 mb-2">OUTCOME METRIC</p>
              <p className="font-headline-md text-on-surface text-lg font-bold">40% Decrease in Latency</p>
              <p className="font-body-md text-on-surface-variant text-xs">
                Patient data retrieval accelerated via edge-caching deployment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6">
                <p className="font-label-caps text-label-caps text-primary/60 mb-2">SECURITY</p>
                <p className="font-headline-md text-headline-md text-on-surface">Zero-Trust</p>
              </div>
              <div className="glass-card p-6">
                <p className="font-label-caps text-label-caps text-primary/60 mb-2">COMPLIANCE</p>
                <p className="font-headline-md text-headline-md text-on-surface">HIPAA G8</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-6">
            <ScanningImage
              src="/projects/luminal-health-crm.jpg"
              alt="Luminal Health CRM dashboard"
              delay="1s"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study 03 — Sovereign Cloud Core */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50 relative">
        <div className="absolute left-10 bottom-20 tech-coord hidden xl:block">SYSTEM: LUMINAL_OS_v4.2</div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <ScrollReveal className="md:col-span-6">
            <ScanningImage
              src="/projects/sovereign-cloud.jpg"
              alt="Sovereign Cloud Core infrastructure"
              aspect="aspect-video"
              delay="2s"
            />
          </ScrollReveal>
          <ScrollReveal className="md:col-span-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono-technical text-mono-technical text-primary uppercase tracking-widest">
                Case Study 03 // Infrastructure
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
              Sovereign Cloud Core
            </h2>
            <div className="bg-white/5 border border-white/10 p-4 mb-6 rounded-lg flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">security</span>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-primary/60">GOVERNANCE PARADIGM</p>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Physical air-gapping with HSM modules.
                </p>
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              National-scale government infrastructure designed for total data residency and
              military-grade encryption.
            </p>
            <div className="bg-primary/5 border-l-4 border-primary p-6">
              <p className="font-body-md text-body-md italic text-on-surface-variant">
                &ldquo;A new benchmark for national data independence.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Study 04 — Nexus FinTech AI */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative">
        <div className="absolute top-20 right-40 tech-coord hidden xl:block">REGION: UAE_NORTH_01</div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <ScrollReveal className="md:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono-technical text-mono-technical text-primary uppercase tracking-widest">
                Case Study 04 // Finance
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
              Nexus FinTech AI
            </h2>
            <div className="mb-6 grid grid-cols-3 gap-2">
              {[
                { label: 'LATENCY', value: '2.4ms' },
                { label: 'PRECISION', value: '99.9%' },
                { label: 'VOLUME', value: '4.2PB/D' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center p-2 bg-white/5 border border-white/5 rounded">
                  <p className="text-[9px] font-label-caps text-primary/50">{label}</p>
                  <p className="font-mono-technical text-xs">{value}</p>
                </div>
              ))}
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Predictive Capital Markets governed by millisecond-latency algorithms. Nexus AI provides
              automated compliance and predictive modeling for high-stakes trading floors.
            </p>
            <div className="space-y-6">
              {[
                { label: 'Processing Velocity', pct: '98%', width: 'w-[98%]' },
                { label: 'Algorithmic Precision', pct: '99.9%', width: 'w-[99.9%]' },
              ].map(({ label, pct, width }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="font-label-caps text-label-caps text-on-surface uppercase text-[10px]">
                      {label}
                    </span>
                    <span className="font-mono-technical text-mono-technical text-primary">{pct}</span>
                  </div>
                  <div className="h-1 bg-white/10 w-full overflow-hidden">
                    <div className={`h-full bg-primary ${width} shadow-[0_0_10px_#10b981]`} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-7">
            <ScanningImage
              src="/projects/nexus-fintech.jpg"
              alt="Nexus FinTech AI trading floor visualization"
              delay="3s"
            />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
