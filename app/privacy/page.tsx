import LegalPageLayout, { type LegalSection } from '@/components/LegalPageLayout'

export const metadata = {
  title: 'Privacy Policy | Veloryx Technologies',
}

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    content: (
      <>
        <p>
          Veloryx Technologies FZ-LLC (&quot;Veloryx&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a technology company
          registered in the Ras Al Khaimah Economic Zone (RAKEZ), United Arab Emirates. We are
          committed to protecting the privacy and personal data of our clients, website visitors,
          and users of our software products and services.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard personal data
          in accordance with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal
          Data (UAE PDPL), and other applicable data protection regulations.
        </p>
        <p>
          By accessing our website at veloryx.com, requesting a consultation, or using any of our
          software products (CRM Platform, ERP Suite, Healthcare Suite, Education Platform,
          Workflow Automation, or Data Intelligence), you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'information-collected',
    heading: '2. Information We Collect',
    content: (
      <>
        <p>We collect the following categories of personal data:</p>
        <p><strong className="text-on-surface">Identity and Contact Data</strong></p>
        <ul className="list-none space-y-2 pl-4">
          {['Full name, job title, and company name', 'Business email address and telephone number', 'Country and city of residence or operation', 'Preferred communication method'].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4"><strong className="text-on-surface">Project and Business Data</strong></p>
        <ul className="list-none space-y-2 pl-4">
          {['Project requirements, scope, and budget information submitted via consultation forms', 'Business documents and requirement specifications voluntarily uploaded', 'Communication records including emails and meeting notes'].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4"><strong className="text-on-surface">Technical and Usage Data</strong></p>
        <ul className="list-none space-y-2 pl-4">
          {['IP address, browser type, and device information', 'Pages visited, time spent, and navigation paths', 'Referral sources and search terms'].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          We do not collect sensitive personal data (such as health information, biometric data, or
          financial account credentials) unless expressly required by a contracted service and with
          your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: '3. How We Use Your Information',
    content: (
      <>
        <p>We use the personal data we collect for the following purposes:</p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'To respond to consultation requests and sales enquiries',
            'To provide, manage, and support our software products and services',
            'To prepare proposals, contracts, and project documentation',
            'To process payments and manage billing for services rendered',
            'To send transactional communications such as project updates and invoices',
            'To improve our website, products, and service offerings',
            'To comply with legal obligations under UAE law and regulatory requirements',
            'To detect, prevent, and address technical issues or fraudulent activity',
            'To send marketing communications where you have opted in to receive them',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          We will not use your personal data for automated decision-making or profiling that
          produces legal or similarly significant effects without your prior consent.
        </p>
      </>
    ),
  },
  {
    id: 'legal-basis',
    heading: '4. Legal Basis for Processing',
    content: (
      <>
        <p>
          Under the UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, we process
          your personal data on the following lawful bases:
        </p>
        <ul className="list-none space-y-3 pl-4">
          {[
            { title: 'Contractual necessity', desc: 'Where processing is required to perform a contract with you or take pre-contractual steps at your request.' },
            { title: 'Legitimate interests', desc: 'Where processing is necessary for our legitimate business interests, such as improving our services and preventing fraud, and those interests are not overridden by your rights.' },
            { title: 'Legal obligation', desc: 'Where we are required to process data to comply with UAE law, regulatory requirements, or court orders.' },
            { title: 'Consent', desc: 'Where you have given explicit consent for a specific purpose, such as receiving marketing communications. You may withdraw consent at any time.' },
          ].map(({ title, desc }) => (
            <li key={title} className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'data-sharing',
    heading: '5. Data Sharing and Disclosure',
    content: (
      <>
        <p>We do not sell, rent, or trade your personal data. We may share data with:</p>
        <ul className="list-none space-y-3 pl-4">
          {[
            { title: 'Service providers', desc: 'Trusted third-party vendors who assist us in operating our business (e.g., cloud hosting, payment processing, email delivery), bound by confidentiality obligations.' },
            { title: 'Professional advisors', desc: 'Legal, accounting, and audit firms where necessary for business operations and compliance.' },
            { title: 'Regulatory authorities', desc: 'Government bodies, law enforcement, or courts where required by applicable UAE law or regulation.' },
            { title: 'Business transfers', desc: 'In the event of a merger, acquisition, or asset sale, your data may be transferred to the acquiring entity, subject to equivalent privacy protections.' },
          ].map(({ title, desc }) => (
            <li key={title} className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Any third party receiving personal data from us is contractually required to handle it
          securely and in accordance with applicable data protection laws.
        </p>
      </>
    ),
  },
  {
    id: 'data-retention',
    heading: '6. Data Retention',
    content: (
      <>
        <p>
          We retain personal data only for as long as necessary to fulfil the purposes for which
          it was collected, including satisfying legal, accounting, and reporting obligations.
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Consultation and sales enquiry data: up to 3 years from last contact',
            'Client project data: duration of contract plus 7 years for audit and legal purposes',
            'Invoice and payment records: 7 years as required by UAE commercial law',
            'Website analytics data: up to 26 months',
            'Marketing opt-in records: until withdrawal of consent plus 3 years',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Upon expiry of the applicable retention period, personal data is securely deleted or
          anonymised.
        </p>
      </>
    ),
  },
  {
    id: 'data-security',
    heading: '7. Data Security',
    content: (
      <>
        <p>
          We implement industry-standard technical and organisational security measures to protect
          your personal data against unauthorised access, alteration, disclosure, or destruction.
          These measures include:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'TLS/SSL encryption for all data transmitted via our website and platforms',
            'AES-256 encryption for data stored at rest',
            'Role-based access controls and multi-factor authentication for internal systems',
            'Regular security assessments and penetration testing',
            'Employee data protection training and confidentiality obligations',
            'Incident response procedures and breach notification protocols',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Whilst we take every reasonable precaution, no method of electronic transmission or
          storage is 100% secure. In the event of a data breach that is likely to harm your
          interests, we will notify you and the relevant UAE authority in accordance with applicable
          law.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    heading: '8. Your Rights',
    content: (
      <>
        <p>
          Under the UAE PDPL and applicable regulations, you have the following rights with respect
          to your personal data:
        </p>
        <ul className="list-none space-y-3 pl-4">
          {[
            { title: 'Right of access', desc: 'To request a copy of the personal data we hold about you.' },
            { title: 'Right to rectification', desc: 'To request correction of inaccurate or incomplete personal data.' },
            { title: 'Right to erasure', desc: 'To request deletion of your personal data where it is no longer necessary for the purposes it was collected, subject to legal retention requirements.' },
            { title: 'Right to restriction', desc: 'To request that we limit the processing of your data in certain circumstances.' },
            { title: 'Right to data portability', desc: 'To receive your personal data in a structured, machine-readable format.' },
            { title: 'Right to object', desc: 'To object to processing based on legitimate interests, including direct marketing.' },
            { title: 'Right to withdraw consent', desc: 'To withdraw consent at any time where processing is based on your consent, without affecting the lawfulness of prior processing.' },
          ].map(({ title, desc }) => (
            <li key={title} className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:privacy@veloryx.com" className="text-primary hover:underline">privacy@veloryx.com</a>.
          We will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: '9. Cookies and Tracking',
    content: (
      <>
        <p>
          Our website uses cookies and similar tracking technologies to enhance your browsing
          experience and analyse website traffic. We use the following types of cookies:
        </p>
        <ul className="list-none space-y-3 pl-4">
          {[
            { title: 'Strictly necessary', desc: 'Essential for the website to function. Cannot be disabled.' },
            { title: 'Performance and analytics', desc: 'Help us understand how visitors interact with our website (e.g., page views, traffic sources). Data is aggregated and anonymised.' },
            { title: 'Functional', desc: 'Remember your preferences and settings to improve your experience.' },
          ].map(({ title, desc }) => (
            <li key={title} className="flex items-start gap-2">
              <span className="text-primary mt-1 shrink-0">—</span>
              <span><strong className="text-on-surface">{title}:</strong> {desc}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          You may manage or disable cookies through your browser settings. Note that disabling
          certain cookies may affect website functionality.
        </p>
      </>
    ),
  },
  {
    id: 'international-transfers',
    heading: '10. International Data Transfers',
    content: (
      <p>
        Where personal data is transferred outside the UAE, we ensure that appropriate safeguards
        are in place in accordance with UAE PDPL requirements, including contractual protections
        and data transfer agreements. We only transfer data to countries that provide an adequate
        level of data protection or where specific safeguards have been implemented.
      </p>
    ),
  },
  {
    id: 'policy-changes',
    heading: '11. Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices,
        technology, or legal requirements. When we make material changes, we will update the
        &quot;Last updated&quot; date at the top of this page and, where appropriate, notify you by
        email or a prominent notice on our website. We encourage you to review this policy
        periodically.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '12. Contact Us',
    content: (
      <>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or our
          data processing practices, please contact our Data Privacy team:
        </p>
        <ul className="list-none space-y-2 pl-4 mt-2">
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Email:</strong> privacy@veloryx.com</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Phone:</strong> +971 7 243 5000</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Address:</strong> Veloryx Technologies FZ-LLC, Ras Al Khaimah Economic Zone (RAKEZ), Ras Al Khaimah, UAE</span></li>
        </ul>
        <p className="mt-4">
          You also have the right to lodge a complaint with the UAE Personal Data Protection Office
          if you believe your rights have not been respected.
        </p>
      </>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How Veloryx Technologies collects, uses, and protects your personal data in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection."
      lastUpdated="14 July 2026"
      sections={sections}
    />
  )
}
