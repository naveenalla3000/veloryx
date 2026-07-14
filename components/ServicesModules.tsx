function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-3 font-mono-technical text-mono-technical text-on-surface-variant">
          <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
          {f}
        </li>
      ))}
    </ul>
  )
}

const SLUG_MAP: Record<string, string> = {
  'P01-CRM': '/products/crm',
  'P02-ERP': '/products/erp',
  'P03-HEALTH': '/products/healthcare',
  'P04-EDU': '/products/education',
  'P05-AUTO': '/products/automation',
  'P06-DATA': '/products/data-intelligence',
}

function CardFooter({ code }: { code: string }) {
  return (
    <a
      href={SLUG_MAP[code]}
      className="mt-auto pt-6 border-t border-white/5 font-mono-technical text-mono-technical text-outline group-hover:text-primary transition-colors flex justify-between items-center"
    >
      <span>{code}</span>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
    </a>
  )
}

export default function ServicesModules() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
      <div className="mb-12 max-w-[1440px] mx-auto">
        <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2">Our Product Suite</p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Tools We Have Built
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Six advanced software products — each developed in-house, refined across dozens of enterprise
          deployments, and ready to integrate into your operations.
        </p>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[260px]">

        {/* CRM — featured: wide + tall */}
        <div className="glass-card md:col-span-7 md:row-span-2 rounded-xl p-10 flex flex-col group glow-hover transition-all duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-[160px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              manage_accounts
            </span>
          </div>
          <div className="mb-6 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary">manage_accounts</span>
          </div>
          <div className="font-label-caps text-label-caps text-primary tracking-widest mb-2">P01-CRM</div>
          <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface mb-4 group-hover:text-primary transition-colors">
            CRM Platform
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-lg">
            Our proprietary CRM gives sales, support, and marketing teams a unified view of every
            customer — with pipeline automation, real-time dashboards, and deep integration capabilities
            built for enterprise scale.
          </p>
          <FeatureList items={['Pipeline & Deal Tracking', 'Omnichannel Communication', 'AI-Powered Insights', 'Custom Workflow Automation']} />
          <CardFooter code="P01-CRM" />
        </div>

        {/* ERP — normal */}
        <div className="glass-card md:col-span-5 rounded-xl p-8 flex flex-col group glow-hover transition-all duration-500">
          <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary">account_balance</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
            ERP Suite
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            End-to-end ERP covering finance, procurement, inventory, HR, and operations on a single platform
            with real-time reporting and role-based controls.
          </p>
          <FeatureList items={['Finance & Accounting', 'Procurement & Inventory', 'HR & Payroll', 'Real-Time Reporting']} />
          <CardFooter code="P02-ERP" />
        </div>

        {/* Healthcare — normal */}
        <div className="glass-card md:col-span-5 rounded-xl p-8 flex flex-col group glow-hover transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20 z-10">
            <span className="material-symbols-outlined text-primary">monitor_heart</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors z-10">
            Healthcare Suite
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow z-10">
            Clinical tools including HMS, EHR, patient portals, and telemedicine — built to UAE DOH
            standards.
          </p>
          <FeatureList items={['Hospital Management System', 'Electronic Health Records', 'Telemedicine & Patient Portal', 'Lab & Pharmacy Integration']} />
          <CardFooter code="P03-HEALTH" />
        </div>

        {/* Education — wide */}
        <div className="glass-card md:col-span-6 rounded-xl p-8 flex flex-col group glow-hover transition-all duration-500">
          <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary">school</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
            Education Platform
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
            Purpose-built EdTech aligned to UAE Ministry of Education and Vision 2031 — covering LMS,
            SIS, online assessments, and smart campus tools.
          </p>
          <FeatureList items={['Learning Management System', 'Student Information System', 'Online Assessments', 'Smart Campus & Analytics']} />
          <CardFooter code="P04-EDU" />
        </div>

        {/* Automation — narrow */}
        <div className="glass-card md:col-span-3 rounded-xl p-8 flex flex-col group glow-hover transition-all duration-500">
          <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary">settings_suggest</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
            Workflow Automation
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
            Eliminate manual bottlenecks with no-code process automation across approvals, triggers, and
            compliance flows.
          </p>
          <CardFooter code="P05-AUTO" />
        </div>

        {/* Data Intelligence — narrow */}
        <div className="glass-card md:col-span-3 rounded-xl p-8 flex flex-col group glow-hover transition-all duration-500 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none opacity-20">
            <div className="flex items-end gap-1 h-full px-4 pb-4">
              {[40, 65, 45, 80, 55, 90, 70, 95].map((h, i) => (
                <div key={i} className="flex-1 bg-primary rounded-sm" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="mb-4 w-12 h-12 flex items-center justify-center bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary">analytics</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
            Data Intelligence
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
            Predictive analytics and BI dashboards that transform raw data into executive-level decisions
            with custom KPI tracking.
          </p>
          <CardFooter code="P06-DATA" />
        </div>

      </div>
    </section>
  )
}
