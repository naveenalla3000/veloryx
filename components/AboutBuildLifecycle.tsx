const PHASES = [
  {
    number: '01',
    title: 'Reconnaissance',
    description:
      'Deep-dive analysis of existing infrastructure and future scalability requirements.',
  },
  {
    number: '02',
    title: 'Architecture',
    description:
      'Precision engineering of digital blueprints using proprietary Veloryx frameworks.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Seamless integration of high-performance systems with zero-downtime protocols.',
  },
  {
    number: '04',
    title: 'Optimization',
    description:
      'Continuous monitoring and algorithmic refinement for peak operational efficiency.',
  },
]

export default function AboutBuildLifecycle() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="mb-20">
        <h2 className="font-label-caps text-label-caps text-primary mb-4">METHODOLOGY</h2>
        <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
          The Sovereign Build Lifecycle
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {PHASES.map(({ number, title, description }) => (
          <div
            key={number}
            className="p-8 border-l border-primary/20 hover:border-primary transition-colors"
          >
            <span className="font-mono-technical text-primary text-sm block mb-4">{number}</span>
            <h4 className="font-headline-md text-on-surface mb-4">{title}</h4>
            <p className="text-on-surface-variant text-body-md">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
