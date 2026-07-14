const MODULES = [
  {
    icon: 'account_tree',
    title: 'Strategic Consultancy',
    description:
      'Aligning high-level business objectives with scalable technical roadmaps. Focus on digital transformation and technical due diligence for global leaders.',
    code: 'L01-CONSULT',
  },
  {
    icon: 'cloud_done',
    title: 'Cloud Architecture',
    description:
      'Multi-cloud orchestration and hybrid infrastructure management designed for 99.999% uptime and mission-critical global availability.',
    code: 'L02-ORCHESTRA',
  },
  {
    icon: 'precision_manufacturing',
    title: 'Custom Engineering',
    description:
      'High-performance software stacks engineered for complex mathematical processing and demanding operational enterprise workflows.',
    code: 'L03-FORGE',
  },
  {
    icon: 'admin_panel_settings',
    title: 'Cybersecurity Ops',
    description:
      'Defensive perimeter design and proactive threat intelligence. Zero-trust environments for sensitive data clusters and high-value assets.',
    code: 'L04-SHIELD',
  },
]

export default function ServicesModules() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {MODULES.map(({ icon, title, description, code }) => (
          <div
            key={code}
            className="glass-card p-10 flex flex-col group glow-hover transition-all duration-500 min-h-[420px]"
          >
            <div className="mb-8 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
              <span className="material-symbols-outlined text-primary">{icon}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-6 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              {description}
            </p>
            <div className="mt-8 pt-8 border-t border-white/5 font-mono-technical text-mono-technical text-outline group-hover:text-primary transition-colors flex justify-between items-center">
              <span>{code}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
