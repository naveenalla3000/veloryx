const STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We map your current infrastructure, identify risk vectors, and define measurable success criteria.',
  },
  {
    number: '02',
    title: 'Architecture Design',
    description:
      'Our engineers draft resilient, multi-cloud blueprints aligned to your compliance and performance requirements.',
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Phased rollout with zero-downtime migrations, automated testing, and real-time observability.',
  },
  {
    number: '04',
    title: 'Continuous Support',
    description:
      '24/7 monitoring, proactive incident response, and quarterly architecture reviews.',
  },
]

export default function HowWeWork() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
        How We Operate
      </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">
        A disciplined four-phase methodology refined across 200+ enterprise engagements.
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div className="hidden md:block absolute top-6 left-0 right-0 border-t border-outline-variant z-0" />
        {STEPS.map(({ number, title, description }) => (
          <div key={number} className="relative z-10 flex flex-col gap-4">
            <div className="w-12 h-12 rounded-full border border-primary/30 bg-surface-container-low flex items-center justify-center font-mono-technical text-mono-technical text-primary">
              {number}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
