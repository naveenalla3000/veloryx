import Image from 'next/image'

export default function AboutHero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-10 architectural-overlay" />
        <Image
          src="/about-hero.jpg"
          alt="Veloryx HQ"
          fill
          className="object-cover object-center grayscale opacity-40 mix-blend-luminosity"
          priority
        />
      </div>
      <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono-technical text-[10px] text-primary tracking-[0.2em] uppercase font-bold">
              UAE&apos;s Premier IT Consulting Firm
            </span>
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-8 leading-[1.05]">
            Building the <br />
            <span className="text-primary text-glow">Digital Backbone</span> of the UAE.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
            One of the UAE&apos;s largest IT consulting firms — headquartered in Ras Al Khaimah,
            delivering bespoke software solutions for healthcare, education, and enterprise sectors
            across the region and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="glass-card p-6 rounded-lg flex-1">
              <span className="font-label-caps text-[10px] text-primary block mb-2">HEADQUARTERS</span>
              <p className="font-headline-md text-lg text-on-surface">Ras Al Khaimah, UAE</p>
            </div>
            <div className="glass-card p-6 rounded-lg flex-1">
              <span className="font-label-caps text-[10px] text-primary block mb-2">ESTABLISHED</span>
              <p className="font-headline-md text-lg text-on-surface">2024</p>
            </div>
            <div className="glass-card p-6 rounded-lg flex-1">
              <span className="font-label-caps text-[10px] text-primary block mb-2">SECTORS</span>
              <p className="font-headline-md text-lg text-on-surface">3+ Industries</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
