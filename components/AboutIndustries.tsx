const INDUSTRIES = [
  {
    icon: 'monitor_heart',
    tag: '01 // Healthcare',
    title: 'Healthcare Software',
    description:
      'We build HIPAA-aligned clinical management systems, patient portals, telemedicine platforms, and hospital ERP solutions tailored for UAE health authorities and private healthcare networks.',
    capabilities: ['Clinical Management Systems', 'Patient Portals & Telemedicine', 'Hospital ERP', 'Health Data Analytics'],
    accent: 'text-primary',
    border: 'border-primary/20',
  },
  {
    icon: 'school',
    tag: '02 // Education',
    title: 'EdTech Platforms',
    description:
      'From LMS platforms for universities to smart classroom tools for K-12 institutions, we engineer scalable education technology that aligns with the UAE\'s National Education Strategy 2031.',
    capabilities: ['Learning Management Systems', 'Student Information Systems', 'Smart Campus Solutions', 'Assessment & Analytics'],
    accent: 'text-secondary',
    border: 'border-secondary/20',
  },
  {
    icon: 'corporate_fare',
    tag: '03 // Enterprise',
    title: 'Enterprise Services',
    description:
      'Custom ERP, CRM, workflow automation, and cloud-native platforms built for the operational scale of large UAE enterprises — from government entities to private conglomerates.',
    capabilities: ['Custom ERP & CRM', 'Workflow Automation', 'Cloud-Native Platforms', 'Systems Integration'],
    accent: 'text-primary',
    border: 'border-primary/20',
  },
]

export default function AboutIndustries() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="mb-12">
        <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2">
          What We Build
        </p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Industries We Serve
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          As one of the UAE&apos;s largest IT consulting firms, we develop purpose-built software
          across the sectors that matter most to the region&apos;s growth.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {INDUSTRIES.map(({ icon, tag, title, description, capabilities, accent, border }) => (
          <div
            key={title}
            className={`glass-card rounded-xl p-10 flex flex-col group hover:bg-surface-container-low transition-colors duration-500 border-t-2 ${border}`}
          >
            <div className="mb-6">
              <span
                className={`material-symbols-outlined text-4xl ${accent} mb-4 block`}
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                {icon}
              </span>
              <p className={`font-label-caps text-label-caps ${accent} tracking-widest mb-2`}>
                {tag}
              </p>
              <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
              {description}
            </p>
            <div className="border-t border-outline-variant pt-6 space-y-2">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-3">
                  <span className={`w-1 h-1 rounded-full ${accent.replace('text-', 'bg-')}`} />
                  <span className="font-mono-technical text-mono-technical text-on-surface-variant">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
