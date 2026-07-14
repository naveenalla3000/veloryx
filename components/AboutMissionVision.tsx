export default function AboutMissionVision() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-stretch">
        <div className="glass-card p-12 md:p-16 rounded-xl relative overflow-hidden flex flex-col justify-center">
          <h2 className="font-label-caps text-label-caps text-primary/60 mb-8">OUR MISSION</h2>
          <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
            To empower the UAE with{' '}
            <span className="text-primary italic">world-class</span> software that transforms healthcare, education, and enterprise.
          </p>
          <div className="mt-12 w-24 h-px bg-primary" />
        </div>
        <div className="glass-card p-12 md:p-16 rounded-xl relative overflow-hidden flex flex-col justify-center">
          <h2 className="font-label-caps text-label-caps text-secondary/60 mb-8">OUR VISION</h2>
          <p className="font-headline-md text-headline-md md:text-headline-lg text-on-surface leading-tight">
            To become the most trusted technology consulting partner in the Middle East — building software that shapes the future of every sector we serve.
          </p>
          <div className="mt-12">
            <span
              className="material-symbols-outlined text-5xl text-secondary/30"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              visibility
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
