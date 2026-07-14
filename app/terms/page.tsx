import LegalPageLayout, { type LegalSection } from '@/components/LegalPageLayout'

export const metadata = {
  title: 'Terms & Conditions | Veloryx Technologies',
}

const sections: LegalSection[] = [
  {
    id: 'introduction',
    heading: '1. Introduction and Acceptance',
    content: (
      <>
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website,
          software products, and professional services provided by Veloryx Technologies FZ-LLC
          (&quot;Veloryx&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a company registered in the Ras Al Khaimah
          Economic Zone (RAKEZ), United Arab Emirates.
        </p>
        <p>
          By accessing our website, submitting a consultation request, entering into a service
          agreement, or using any of our software products — including the CRM Platform, ERP Suite,
          Healthcare Suite, Education Platform, Workflow Automation, and Data Intelligence
          platform — you agree to be bound by these Terms in full.
        </p>
        <p>
          If you do not agree to these Terms, you must discontinue use of our website and services
          immediately. These Terms are governed by the laws of the United Arab Emirates.
        </p>
      </>
    ),
  },
  {
    id: 'services',
    heading: '2. Services and Products',
    content: (
      <>
        <p>
          Veloryx Technologies provides enterprise software products and IT consulting services.
          The specific scope, deliverables, timelines, and fees for any engagement are defined
          in a separate Statement of Work (SOW) or Service Agreement executed between the parties.
        </p>
        <p>
          We reserve the right to:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Modify, suspend, or discontinue any product or service at any time with reasonable notice',
            'Update software products with new features, bug fixes, or security patches',
            'Refuse service to any party at our sole discretion',
            'Subcontract portions of the services to qualified third parties while remaining accountable for delivery',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Any description of services on our website is for informational purposes only and does
          not constitute a binding offer. Binding commitments arise only upon execution of a signed
          Service Agreement or SOW.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    heading: '3. Intellectual Property',
    content: (
      <>
        <p>
          All intellectual property rights in our website, software products, proprietary
          methodologies, frameworks, documentation, and marketing materials are owned by or
          licensed to Veloryx Technologies FZ-LLC. These rights are protected under UAE Federal
          Law No. 38 of 2021 on Intellectual Property Rights.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable licence to use our software
          products solely for your internal business purposes, subject to the terms of your
          Service Agreement. This licence does not permit you to:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Copy, modify, adapt, or create derivative works of our software',
            'Reverse-engineer, decompile, or disassemble any part of our software',
            'Resell, sublicense, or distribute our software to third parties',
            'Remove or alter any proprietary notices or labels on our software',
            'Use our brand, logos, or trademarks without prior written consent',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Any custom software, integrations, or deliverables developed specifically for you under
          a paid engagement are governed by the intellectual property provisions of your individual
          Service Agreement.
        </p>
      </>
    ),
  },
  {
    id: 'payment',
    heading: '4. Payment Terms',
    content: (
      <>
        <p>
          Fees for our services and software products are as specified in the applicable Service
          Agreement or SOW. Unless otherwise agreed in writing:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Invoices are issued in UAE Dirhams (AED) or as agreed in the Service Agreement',
            'Payment is due within 30 calendar days of invoice date',
            'A late payment charge of 1.5% per month may apply to overdue balances',
            'All fees are exclusive of UAE Value Added Tax (VAT) at the applicable rate',
            'Upfront deposits or milestone payments may be required as specified in the SOW',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          We reserve the right to suspend services in the event of non-payment of undisputed
          invoices beyond 45 days of the due date, with 7 days&apos; written notice.
        </p>
      </>
    ),
  },
  {
    id: 'confidentiality',
    heading: '5. Confidentiality',
    content: (
      <>
        <p>
          Each party agrees to keep confidential all non-public information disclosed by the other
          party in connection with the services (&quot;Confidential Information&quot;), and to use such
          information solely for the purposes of performing obligations under the applicable
          Service Agreement.
        </p>
        <p>Confidentiality obligations do not apply to information that:</p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Is or becomes publicly available through no fault of the receiving party',
            'Was known to the receiving party prior to disclosure',
            'Is independently developed by the receiving party without reference to the Confidential Information',
            'Is required to be disclosed by applicable law, regulation, or court order',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Confidentiality obligations survive termination of the Service Agreement for a period of
          three (3) years, or indefinitely where trade secrets are concerned.
        </p>
      </>
    ),
  },
  {
    id: 'client-obligations',
    heading: '6. Client Obligations',
    content: (
      <>
        <p>To enable us to deliver services effectively, you agree to:</p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Provide accurate, complete, and timely information, materials, and access required for the project',
            'Designate a project representative with authority to make binding decisions',
            'Review and provide feedback on deliverables within agreed timelines',
            'Ensure that any data or materials provided to us do not infringe third-party rights',
            'Comply with all applicable laws in connection with your use of our services',
            'Maintain adequate security for credentials and access provided to our systems',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Delays caused by your failure to fulfil these obligations may result in revised timelines
          and additional fees, which will be communicated to you in writing.
        </p>
      </>
    ),
  },
  {
    id: 'warranties',
    heading: '7. Warranties and Disclaimers',
    content: (
      <>
        <p>
          Veloryx Technologies warrants that services will be performed with reasonable skill and
          care in accordance with the agreed specifications. We will use commercially reasonable
          efforts to correct material defects reported within 90 days of delivery.
        </p>
        <p className="mt-4">
          Except as expressly stated in these Terms or a Service Agreement, our website and
          software products are provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent
          permitted by UAE law, we disclaim all other warranties, express or implied, including:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Implied warranties of merchantability or fitness for a particular purpose',
            'Warranties that the software will be uninterrupted, error-free, or virus-free',
            'Warranties regarding the accuracy or completeness of content on our website',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'liability',
    heading: '8. Limitation of Liability',
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable UAE law, Veloryx Technologies shall not
          be liable for any indirect, incidental, special, consequential, or punitive damages,
          including loss of profits, data, goodwill, or business opportunities, arising from or
          related to your use of our services.
        </p>
        <p>
          Our total aggregate liability to you for any claim arising out of or relating to these
          Terms or a Service Agreement shall not exceed the total fees paid by you to Veloryx
          in the twelve (12) months preceding the claim.
        </p>
        <p>
          Nothing in these Terms limits our liability for death or personal injury caused by our
          negligence, fraud, or any other liability that cannot be excluded under UAE law.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    heading: '9. Indemnification',
    content: (
      <p>
        You agree to indemnify, defend, and hold harmless Veloryx Technologies FZ-LLC, its
        officers, directors, employees, and contractors from and against any claims, liabilities,
        damages, losses, costs, and expenses (including reasonable legal fees) arising out of or
        related to: (a) your use of our services in violation of these Terms; (b) your breach of
        any applicable law or regulation; (c) any content or data you provide to us that infringes
        the intellectual property or other rights of a third party; or (d) your wilful misconduct
        or negligence.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: '10. Termination',
    content: (
      <>
        <p>
          Either party may terminate a Service Agreement in accordance with its termination
          provisions. In the absence of specific provisions:
        </p>
        <ul className="list-none space-y-2 pl-4">
          {[
            'Either party may terminate with 30 days\' written notice',
            'Either party may terminate immediately upon material breach that remains uncured for 14 days after written notice',
            'We may terminate immediately if you become insolvent or file for bankruptcy',
          ].map(item => (
            <li key={item} className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          Upon termination, you must cease use of any licensed software, return or destroy
          Confidential Information, and pay all outstanding fees for work performed to the date
          of termination. Clauses that by nature should survive termination (including
          confidentiality, intellectual property, payment, and limitation of liability) shall
          continue to apply.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    heading: '11. Governing Law and Jurisdiction',
    content: (
      <>
        <p>
          These Terms and any dispute arising from them are governed by and construed in accordance
          with the laws of the United Arab Emirates, with particular reference to the laws
          applicable in the Emirate of Ras Al Khaimah.
        </p>
        <p>
          Any dispute that cannot be resolved amicably within 30 days of written notice shall be
          referred to and finally resolved by arbitration administered by the RAKEZ Business Centre
          or the Ras Al Khaimah International Corporate Centre (RAK ICC) in accordance with their
          applicable arbitration rules. The language of arbitration shall be English. The seat of
          arbitration shall be Ras Al Khaimah, UAE.
        </p>
        <p>
          Nothing in this clause prevents either party from seeking urgent injunctive or interim
          relief from a competent court.
        </p>
      </>
    ),
  },
  {
    id: 'general',
    heading: '12. General Provisions',
    content: (
      <>
        <ul className="list-none space-y-3 pl-4">
          {[
            { title: 'Entire agreement', desc: 'These Terms, together with any applicable Service Agreement, constitute the entire agreement between the parties and supersede all prior negotiations, representations, or agreements.' },
            { title: 'Amendments', desc: 'We may update these Terms from time to time. Material changes will be communicated via our website or email. Continued use of our services constitutes acceptance of the updated Terms.' },
            { title: 'Severability', desc: 'If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.' },
            { title: 'Waiver', desc: 'Failure by either party to enforce any provision of these Terms shall not constitute a waiver of future enforcement of that provision.' },
            { title: 'Force majeure', desc: 'Neither party shall be liable for delays or failures in performance resulting from events beyond their reasonable control, including natural disasters, government actions, or infrastructure failures.' },
            { title: 'Assignment', desc: 'You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights to an affiliate or in connection with a merger or acquisition.' },
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
    id: 'contact',
    heading: '13. Contact Us',
    content: (
      <>
        <p>
          For questions about these Terms or to discuss a service engagement, please contact us:
        </p>
        <ul className="list-none space-y-2 pl-4 mt-2">
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Email:</strong> contact@veloryx.com</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Phone:</strong> +971 7 243 5000</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Office hours:</strong> Sunday – Thursday, 9:00 AM – 6:00 PM GST</span></li>
          <li className="flex items-start gap-2"><span className="text-primary mt-1 shrink-0">—</span><span><strong className="text-on-surface">Address:</strong> Veloryx Technologies FZ-LLC, Ras Al Khaimah Economic Zone (RAKEZ), Ras Al Khaimah, UAE</span></li>
        </ul>
      </>
    ),
  },
]

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="The terms governing your use of Veloryx Technologies' website, software products, and professional services. Please read these carefully before engaging with us."
      lastUpdated="14 July 2026"
      sections={sections}
    />
  )
}
