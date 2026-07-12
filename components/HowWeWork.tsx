const CIRCUMFERENCE = 2 * Math.PI * 20

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'We map your current infrastructure, identify risk vectors, and define measurable success criteria.',
    progress: 0.25,
  },
  {
    number: '02',
    title: 'Architecture Design',
    description:
      'Our engineers draft resilient, multi-cloud blueprints aligned to your compliance and performance requirements.',
    progress: 0.5,
  },
  {
    number: '03',
    title: 'Deployment',
    description:
      'Phased rollout with zero-downtime migrations, automated testing, and real-time observability.',
    progress: 0.75,
  },
  {
    number: '04',
    title: 'Continuous Support',
    description:
      '24/7 monitoring, proactive incident response, and quarterly architecture reviews.',
    progress: 1,
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
        {STEPS.map(({ number, title, description, progress }) => (
          <div key={number} className="relative z-10 flex flex-col gap-4">
            <div className="relative w-12 h-12">
              <svg viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="#191c1f"
                  stroke="rgba(78,222,163,0.15)"
                  strokeWidth="2"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="#4edea3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
                  transform="rotate(-90 24 24)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center font-mono-technical text-mono-technical text-primary">
                {number}
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
