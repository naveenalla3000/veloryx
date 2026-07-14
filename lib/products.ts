export interface ProductFeature {
  icon: string
  title: string
  description: string
}

export interface ProductUseCase {
  icon: string
  title: string
  description: string
}

export interface ProductMetric {
  value: string
  label: string
}

export interface ProductData {
  slug: string
  code: string
  icon: string
  title: string
  sector: string
  tagline: string
  description: string
  metrics: ProductMetric[]
  features: ProductFeature[]
  useCases: ProductUseCase[]
  compliance?: string[]
}

export const PRODUCTS: ProductData[] = [
  {
    slug: 'crm',
    code: 'P01-CRM',
    icon: 'manage_accounts',
    title: 'CRM Platform',
    sector: 'Customer Relationship Management',
    tagline: 'Unify every customer relationship at enterprise scale.',
    description:
      'Our proprietary CRM gives sales, support, and marketing teams a single, unified view of every customer — complete with pipeline automation, real-time dashboards, AI-powered scoring, and deep integration capabilities purpose-built for enterprise operations across the UAE and beyond.',
    metrics: [
      { value: '3×', label: 'Pipeline Visibility' },
      { value: '40%', label: 'Faster Response Time' },
      { value: '95%', label: 'Data Accuracy' },
      { value: '360°', label: 'Customer View' },
    ],
    features: [
      { icon: 'trending_up', title: 'Pipeline & Deal Management', description: 'Visual Kanban pipelines, deal stages, probability scoring, and automated follow-up reminders to keep every opportunity moving.' },
      { icon: 'hub', title: 'Omnichannel Communication', description: 'Consolidate email, phone, WhatsApp, and live chat into a single inbox — every interaction logged and searchable.' },
      { icon: 'psychology', title: 'AI-Powered Insights', description: 'Lead scoring, churn prediction, and next-best-action recommendations driven by your own historical data.' },
      { icon: 'settings_suggest', title: 'Workflow Automation', description: 'No-code automation builder for assignment rules, approval workflows, and multi-step customer journeys.' },
      { icon: 'lock', title: 'Role-Based Access Control', description: 'Granular permission sets ensure the right people see the right data — with full audit trails for compliance.' },
      { icon: 'analytics', title: 'Real-Time Analytics', description: 'Live dashboards, custom reports, and scheduled exports give leadership instant visibility into pipeline health.' },
    ],
    useCases: [
      { icon: 'storefront', title: 'Sales Teams', description: 'Track deals from first touch to close. Forecast revenue with confidence and eliminate manual CRM data entry.' },
      { icon: 'support_agent', title: 'Customer Support', description: 'Unified case management with SLA tracking, escalation rules, and CSAT surveys built in.' },
      { icon: 'campaign', title: 'Marketing', description: 'Segment audiences, run multi-channel campaigns, and attribute revenue back to every marketing touchpoint.' },
    ],
    compliance: ['UAE PDPL', 'GDPR', 'ISO 27001'],
  },
  {
    slug: 'erp',
    code: 'P02-ERP',
    icon: 'account_balance',
    title: 'ERP Suite',
    sector: 'Enterprise Resource Planning',
    tagline: 'One platform for every business operation.',
    description:
      'End-to-end ERP covering finance, procurement, inventory, HR, and operations — designed to unify all business functions on a single platform with real-time reporting, role-based access, UAE VAT compliance, and multi-entity support for conglomerates operating across the Gulf.',
    metrics: [
      { value: '60%', label: 'Manual Process Reduction' },
      { value: '100%', label: 'UAE VAT Compliant' },
      { value: 'Real-Time', label: 'Financial Visibility' },
      { value: 'Multi-Entity', label: 'Group Consolidation' },
    ],
    features: [
      { icon: 'account_balance', title: 'Finance & Accounting', description: 'Full general ledger, accounts payable/receivable, multi-currency, and automated bank reconciliation with IFRS-compliant reporting.' },
      { icon: 'local_shipping', title: 'Procurement & Supply Chain', description: 'Purchase requisitions, vendor management, three-way matching, and delivery tracking across all procurement channels.' },
      { icon: 'people', title: 'HR & Payroll', description: 'End-to-end employee lifecycle from onboarding to offboarding, WPS-compliant payroll, leave management, and performance reviews.' },
      { icon: 'inventory', title: 'Inventory Management', description: 'Multi-warehouse inventory tracking, reorder automation, batch and serial number traceability, and landed cost calculations.' },
      { icon: 'bar_chart', title: 'Real-Time Reporting', description: 'Configurable dashboards and scheduled reports give finance, operations, and management instant cross-functional visibility.' },
      { icon: 'admin_panel_settings', title: 'Permissions & Audit', description: 'Department-level access controls, approval hierarchies, and immutable audit logs satisfy internal and external compliance requirements.' },
    ],
    useCases: [
      { icon: 'business_center', title: 'Finance Departments', description: 'Close the books faster with automated reconciliation, multi-currency consolidation, and regulatory-ready reporting.' },
      { icon: 'precision_manufacturing', title: 'Operations Teams', description: 'Streamline procurement cycles, reduce stock-outs, and gain full visibility across vendors and warehouses.' },
      { icon: 'badge', title: 'HR & People Ops', description: 'Manage the entire employee lifecycle from a single system with WPS payroll and UAE labour law compliance built in.' },
    ],
    compliance: ['UAE VAT (FTA)', 'WPS (Ministry of Labour)', 'IFRS', 'ISO 9001'],
  },
  {
    slug: 'healthcare',
    code: 'P03-HEALTH',
    icon: 'monitor_heart',
    title: 'Healthcare Suite',
    sector: 'Clinical & Hospital Management',
    tagline: 'Clinical-grade software for modern UAE healthcare.',
    description:
      'A full stack of clinical tools including hospital management systems, electronic health records, patient portals, telemedicine modules, and lab & pharmacy integrations — engineered to UAE DOH, MOH, and HAAD standards with Zero-Trust security and HIPAA G8 data handling.',
    metrics: [
      { value: '40%', label: 'Latency Reduction' },
      { value: 'Zero-Trust', label: 'Security Architecture' },
      { value: 'HIPAA G8', label: 'Data Compliance' },
      { value: 'UAE DOH', label: 'Certified' },
    ],
    features: [
      { icon: 'local_hospital', title: 'Hospital Management System', description: 'Admission, discharge, and transfer workflows; bed management; billing; and full operational reporting for inpatient facilities.' },
      { icon: 'folder_shared', title: 'Electronic Health Records', description: 'Structured clinical documentation, medication management, allergy tracking, and a longitudinal patient timeline accessible across departments.' },
      { icon: 'videocam', title: 'Telemedicine Module', description: 'Encrypted video consultations, e-prescription generation, and remote monitoring integration for outpatient and chronic care pathways.' },
      { icon: 'science', title: 'Lab & Pharmacy Integration', description: 'Real-time lab order routing, result delivery, pharmacy dispensing workflows, and drug interaction checking.' },
      { icon: 'person', title: 'Patient Portal', description: 'Self-service appointment booking, test result access, document upload, and secure messaging — available on web and mobile.' },
      { icon: 'calendar_month', title: 'Scheduling & Resources', description: 'Intelligent appointment scheduling, operating theatre booking, and staff rostering with real-time conflict detection.' },
    ],
    useCases: [
      { icon: 'apartment', title: 'Hospitals', description: 'End-to-end operational management — from emergency triage through inpatient stay to discharge and billing.' },
      { icon: 'medical_services', title: 'Clinics & Polyclinics', description: 'Lightweight deployment covering appointments, billing, EHR, and DOH eMR compliance for outpatient facilities.' },
      { icon: 'medication', title: 'Pharmacies', description: 'Prescription management, inventory control, insurance claim processing, and drug interaction alerts.' },
    ],
    compliance: ['UAE DOH', 'UAE MOH', 'HAAD', 'HIPAA G8', 'ISO 27799'],
  },
  {
    slug: 'education',
    code: 'P04-EDU',
    icon: 'school',
    title: 'Education Platform',
    sector: 'EdTech & Institution Management',
    tagline: 'Empowering UAE education for Vision 2031.',
    description:
      'Purpose-built EdTech solutions covering LMS, student information systems, online assessments, and smart campus analytics — designed in full alignment with UAE Ministry of Education frameworks, KHDA requirements, and the UAE National Education Strategy 2031.',
    metrics: [
      { value: 'MoE', label: 'UAE Aligned' },
      { value: '50%', label: 'Admin Time Saved' },
      { value: 'KHDA', label: 'Compliant' },
      { value: 'Vision 2031', label: 'Ready' },
    ],
    features: [
      { icon: 'menu_book', title: 'Learning Management System', description: 'Course creation, multimedia content delivery, blended learning paths, and automated progress tracking for students at every level.' },
      { icon: 'school', title: 'Student Information System', description: 'Admissions, enrolment, academic records, fee management, and graduation tracking on one platform.' },
      { icon: 'quiz', title: 'Online Assessments', description: 'Secure browser-based exams, auto-grading, rubric-based marking, and instant result publication with anti-cheating safeguards.' },
      { icon: 'domain', title: 'Smart Campus Analytics', description: 'Attendance tracking, facility utilisation dashboards, and early-warning systems to identify at-risk students before issues escalate.' },
      { icon: 'family_restroom', title: 'Parent & Teacher Portal', description: 'Real-time communication, homework submissions, grade visibility, and parent-teacher meeting scheduling in one place.' },
      { icon: 'schedule', title: 'Timetabling & Scheduling', description: 'Automated class scheduling with room, teacher, and resource conflict resolution across complex multi-campus environments.' },
    ],
    useCases: [
      { icon: 'account_balance', title: 'Schools & Universities', description: 'Complete institution management from admissions through to graduation, covering academics, finance, and compliance.' },
      { icon: 'workspace_premium', title: 'Training Centres', description: 'Corporate training delivery, certification management, and delegate progress tracking with branded portals.' },
      { icon: 'policy', title: 'Government Education Bodies', description: 'Aggregate KPI dashboards, MoE compliance reporting, and cross-institution data analytics at the emirate level.' },
    ],
    compliance: ['UAE MoE', 'KHDA', 'ADEK', 'UAE National Education Strategy 2031'],
  },
  {
    slug: 'automation',
    code: 'P05-AUTO',
    icon: 'settings_suggest',
    title: 'Workflow Automation',
    sector: 'Business Process Automation',
    tagline: 'Eliminate bottlenecks. Automate everything.',
    description:
      'Intelligent process automation that eliminates manual bottlenecks across every department — from document approvals to multi-step enterprise workflows. No code required. Every process is auditable, measurable, and deployable in days, not months.',
    metrics: [
      { value: '100+', label: 'Pre-Built Templates' },
      { value: 'Zero', label: 'Code Required' },
      { value: '∞', label: 'Cross-System Integrations' },
      { value: 'Full', label: 'Audit Trail' },
    ],
    features: [
      { icon: 'build', title: 'No-Code Process Builder', description: 'Drag-and-drop workflow designer with conditional logic, parallel approvals, and deadline escalations — built by operations teams, not IT.' },
      { icon: 'approval', title: 'Document & Approval Flows', description: 'Automate purchase orders, invoices, contracts, and HR approvals with digital signatures and configurable approval chains.' },
      { icon: 'sync_alt', title: 'Cross-System API Triggers', description: 'Connect your ERP, CRM, HRMS, and third-party tools with pre-built connectors and a universal REST/webhook layer.' },
      { icon: 'account_tree', title: 'Conditional Logic & Branching', description: 'Dynamic routing based on field values, user roles, thresholds, and schedule conditions — handling even the most complex policy rules.' },
      { icon: 'verified', title: 'Audit Trail & Compliance', description: 'Every action, decision, and exception is time-stamped and attributed — delivering the audit evidence regulators and auditors require.' },
      { icon: 'notifications', title: 'Smart Notifications', description: 'Context-aware alerts via email, SMS, WhatsApp, and in-app — ensuring the right person acts at the right time.' },
    ],
    useCases: [
      { icon: 'receipt_long', title: 'Finance', description: 'Automate invoice approval, expense reporting, budget requests, and month-end close tasks with full policy enforcement.' },
      { icon: 'badge', title: 'Human Resources', description: 'Streamline employee onboarding, leave requests, performance reviews, and offboarding checklists.' },
      { icon: 'precision_manufacturing', title: 'Operations', description: 'Digitise purchase orders, vendor onboarding, asset requests, and maintenance work orders — end to end.' },
    ],
  },
  {
    slug: 'data-intelligence',
    code: 'P06-DATA',
    icon: 'analytics',
    title: 'Data Intelligence',
    sector: 'Business Intelligence & Analytics',
    tagline: 'Turn every data point into a decision.',
    description:
      'Advanced analytics and business intelligence that transforms raw operational data into strategic decisions. From real-time operational dashboards to predictive models and executive scorecards — everything you need to run a data-driven enterprise, delivered as a managed service.',
    metrics: [
      { value: 'Real-Time', label: 'Data Processing' },
      { value: '99.9%', label: 'Predictive Accuracy' },
      { value: 'Custom', label: 'KPI Tracking' },
      { value: 'Multi-Source', label: 'Integration' },
    ],
    features: [
      { icon: 'dashboard', title: 'Custom BI Dashboards', description: 'Pixel-perfect dashboards with drag-and-drop layout, drill-down capability, and role-specific views for every level of the organisation.' },
      { icon: 'psychology', title: 'Predictive Analytics Engine', description: 'ML-powered forecasting models for revenue, demand, churn, and risk — trained on your data and explained in plain language.' },
      { icon: 'monitor', title: 'KPI Monitoring & Alerts', description: 'Define thresholds for any metric and receive instant alerts when values deviate — before they become board-level problems.' },
      { icon: 'cable', title: 'Data Integration Layer', description: 'Connect databases, APIs, flat files, and cloud services into a unified data layer with automated ETL and lineage tracking.' },
      { icon: 'description', title: 'Executive Reporting', description: 'Automated board packs, PDF and PowerPoint exports, and scheduled email delivery — making every leadership meeting data-first.' },
      { icon: 'warning', title: 'Anomaly Detection', description: 'Continuous monitoring surfaces statistical outliers, duplicate transactions, and unusual patterns before they cause damage.' },
    ],
    useCases: [
      { icon: 'corporate_fare', title: 'C-Suite & Board', description: 'Single-pane executive dashboards with strategic KPIs, benchmarks, and automated board pack generation.' },
      { icon: 'precision_manufacturing', title: 'Operations', description: 'Real-time operational metrics, throughput analysis, and bottleneck identification to keep the business running at peak efficiency.' },
      { icon: 'savings', title: 'Finance & Strategy', description: 'Revenue forecasting, cost variance analysis, scenario modelling, and budget tracking — all in one governed platform.' },
    ],
  },
]

export function getProduct(slug: string): ProductData | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}
