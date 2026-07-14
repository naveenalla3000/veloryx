import Image from 'next/image'

const POINTS = [
  {
    number: '01',
    title: 'Built In-House, Proven in the Field',
    description:
      'Every product we offer was engineered by our own teams — not white-labelled. Deployed across UAE hospitals, schools, and enterprises, our tools carry real-world battle scars and the maturity that comes with them.',
  },
  {
    number: '02',
    title: 'Deeply Integrated, Not Siloed',
    description:
      'Our CRM, ERP, healthcare, and education platforms are designed to work together seamlessly — sharing data, workflows, and reporting layers so your organisation operates as one connected system.',
  },
  {
    number: '03',
    title: 'Continuously Advancing',
    description:
      'We ship regular feature updates driven by client feedback and emerging technology — AI-assisted workflows, predictive analytics, and regulatory compliance updates are built into our roadmap by default.',
  },
]

export default function ServicesAsymmetric() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop pb-section-gap grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7 relative h-[600px] group">
        <div className="absolute -inset-4 border border-primary/20 -z-10 group-hover:scale-[1.02] transition-transform duration-700" />
        <Image
          src="/services-datacenter.jpg"
          alt="Veloryx elite data center infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 p-8 glass-card max-w-sm translate-y-1/2 translate-x-12 hidden xl:block">
          <p className="font-mono-technical text-mono-technical text-primary mb-2">
            // BENCHMARK_STATUS
          </p>
          <p className="font-body-md text-body-md text-on-surface">
            Architectural systems optimized for peak transactional velocity and sovereign security
            standards.
          </p>
        </div>
      </div>
      <div className="lg:col-span-5">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8">
          Why Our <br />
          <span className="text-primary">Products Stand Out.</span>
        </h2>
        <div className="space-y-8">
          {POINTS.map(({ number, title, description }) => (
            <div key={number} className="flex gap-6">
              <span className="text-[40px] text-primary/40 font-bold font-display-lg leading-none">
                {number}
              </span>
              <div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">{title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
