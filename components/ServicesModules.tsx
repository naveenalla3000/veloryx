const MODULES = [
  {
    icon: 'manage_accounts',
    title: 'CRM Platform',
    description:
      'Our proprietary CRM gives sales, support, and marketing teams a unified view of every customer — with pipeline automation, real-time dashboards, and deep integration capabilities built for enterprise scale.',
    features: ['Pipeline & Deal Tracking', 'Omnichannel Communication', 'AI-Powered Insights', 'Custom Workflow Automation'],
    code: 'P01-CRM',
  },
  {
    icon: 'account_balance',
    title: 'ERP Suite',
    description:
      'End-to-end ERP covering finance, procurement, inventory, HR, and operations. Designed to unify all business functions on a single platform with real-time reporting and role-based access controls.',
    features: ['Finance & Accounting', 'Procurement & Inventory', 'HR & Payroll', 'Real-Time Reporting'],
    code: 'P02-ERP',
  },
  {
    icon: 'monitor_heart',
    title: 'Healthcare Suite',
    description:
      'A full stack of clinical tools including hospital management systems, electronic health records, patient portals, telemedicine modules, and lab & pharmacy integrations — built to UAE DOH standards.',
    features: ['Hospital Management System', 'Electronic Health Records', 'Telemedicine & Patient Portal', 'Lab & Pharmacy Integration'],
    code: 'P03-HEALTH',
  },
  {
    icon: 'school',
    title: 'Education Platform',
    description:
      'Purpose-built EdTech solutions covering LMS, student information systems, online assessments, and smart campus tools — aligned to UAE Ministry of Education frameworks and Vision 2031.',
    features: ['Learning Management System', 'Student Information System', 'Online Assessments', 'Smart Campus & Analytics'],
    code: 'P04-EDU',
  },
  {
    icon: 'settings_suggest',
    title: 'Workflow Automation',
    description:
      'Intelligent process automation that eliminates manual bottlenecks across departments — from document approvals to multi-step enterprise workflows — saving hundreds of operational hours per month.',
    features: ['No-Code Process Builder', 'Document & Approval Flows', 'Cross-System Triggers', 'Audit Trails & Compliance'],
    code: 'P05-AUTO',
  },
  {
    icon: 'analytics',
    title: 'Data Intelligence',
    description:
      'Advanced analytics and BI dashboards that transform raw operational data into actionable decisions — with predictive models, custom KPI tracking, and executive-level reporting built in.',
    features: ['Custom BI Dashboards', 'Predictive Analytics', 'KPI Monitoring', 'Data Integration Layer'],
    code: 'P06-DATA',
  },
]

export default function ServicesModules() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="mb-12 max-w-[1440px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2">Our Product Suite</p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Tools We Have Built
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Six advanced software products — each developed in-house, refined across dozens of enterprise deployments, and ready to integrate into your operations.
        </p>
      </div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {MODULES.map(({ icon, title, description, features, code }) => (
          <div
            key={code}
            className="glass-card p-10 flex flex-col group glow-hover transition-all duration-500"
          >
            <div className="mb-6 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
              <span className="material-symbols-outlined text-primary">{icon}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-4 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">
              {description}
            </p>
            <ul className="space-y-2 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-mono-technical text-mono-technical text-on-surface-variant">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="pt-6 border-t border-white/5 font-mono-technical text-mono-technical text-outline group-hover:text-primary transition-colors flex justify-between items-center">
              <span>{code}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
