'use client'

import { useState } from 'react'

const SERVICE_TAGS = [
  'UI/UX Design',
  'Web Development',
  'Mobile App Development',
  'Backend Development',
  'Cloud & DevOps',
  'AI Integration',
  'API Development',
  'Software Consulting',
  'Maintenance & Support',
]

const PROJECT_CATEGORIES = [
  'Hospital Management',
  'ERP System',
  'CRM System',
  'E-commerce',
  'Mobile Application',
  'Web Application',
  'AI/ML Solution',
  'SaaS Platform',
  'FinTech',
  'EdTech',
  'Healthcare',
  'Logistics',
  'Real Estate',
  'Government',
  'Other',
]

type SubmitState = 'idle' | 'loading' | 'done'

export default function ConsultancyForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitState('loading')
    setTimeout(() => {
      setSubmitState('done')
      setTimeout(() => setSubmitState('idle'), 3000)
    }, 2000)
  }

  const btnLabel =
    submitState === 'loading'
      ? 'TRANSMITTING...'
      : submitState === 'done'
        ? 'PROTOCOL INITIATED'
        : 'Request Free Consultation'

  return (
    <div className="lg:w-3/5">
      <form
        className="glass-card emerald-glow rounded-xl overflow-hidden p-8 lg:p-12 space-y-12"
        onSubmit={handleSubmit}
      >
        {/* 01 Contact Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
            <span className="font-label-caps text-label-caps text-primary">01</span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
              Contact Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Full Name', name: 'fullName', type: 'text', placeholder: 'Alexander Sterling', required: true },
              { label: 'Company Name', name: 'company', type: 'text', placeholder: 'Sterling Global Ltd.' },
              { label: 'Business Email', name: 'email', type: 'email', placeholder: 'alex@sterling.com', required: true },
              { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+971 00 000 0000' },
              { label: 'Country', name: 'country', type: 'text', placeholder: 'United Arab Emirates' },
            ].map(({ label, name, type, placeholder, required }) => (
              <div key={name} className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">
                  {label}{required && ' *'}
                </label>
                <input
                  className="instrument-input w-full p-4 text-on-surface rounded-none"
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                />
              </div>
            ))}
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Preferred Contact Method
              </label>
              <select
                className="instrument-input w-full p-4 text-on-surface rounded-none appearance-none"
                name="contactMethod"
                defaultValue="Email"
              >
                <option>Email</option>
                <option>Phone</option>
                <option>WhatsApp</option>
              </select>
            </div>
          </div>
        </div>

        {/* 02 Project Scope */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
            <span className="font-label-caps text-label-caps text-primary">02</span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
              Project Scope
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Project Name
              </label>
              <input
                className="instrument-input w-full p-4 text-on-surface rounded-none"
                name="projectName"
                type="text"
                placeholder="Horizon ERP v2"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Project Category
              </label>
              <select
                className="instrument-input w-full p-4 text-on-surface rounded-none appearance-none"
                name="category"
                defaultValue="Hospital Management"
              >
                {PROJECT_CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Brief Project Description
              </label>
              <textarea
                className="instrument-input w-full p-4 text-on-surface rounded-none resize-none"
                name="description"
                placeholder="Describe the architectural requirements..."
                rows={4}
              />
            </div>
          </div>
        </div>

        {/* 03 Operational Parameters */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
            <span className="font-label-caps text-label-caps text-primary">03</span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
              Operational Parameters
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Current Stage
              </label>
              <select
                className="instrument-input w-full p-4 text-on-surface rounded-none appearance-none"
                name="stage"
                defaultValue="Idea"
              >
                {['Idea', 'Planning', 'MVP', 'Existing Product', 'Scaling'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Estimated Budget
              </label>
              <select
                className="instrument-input w-full p-4 text-on-surface rounded-none appearance-none"
                name="budget"
                defaultValue="Below $5K"
              >
                {['Below $5K', '$5K–$20K', '$20K–$50K', '$50K+', 'Prefer to Discuss'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Expected Timeline
              </label>
              <select
                className="instrument-input w-full p-4 text-on-surface rounded-none appearance-none"
                name="timeline"
                defaultValue="ASAP"
              >
                {['ASAP', '1 Month', '2–3 Months', '3–6 Months', 'Flexible'].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 04 Service Requirements */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
            <span className="font-label-caps text-label-caps text-primary">04</span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
              Service Requirements
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {SERVICE_TAGS.map((tag) => (
              <label key={tag} className="cursor-pointer">
                <input className="hidden peer" type="checkbox" name="services" value={tag} />
                <div className="px-4 py-2 border border-outline-variant text-on-surface-variant font-mono-technical text-mono-technical peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-all duration-200">
                  {tag}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* 05 Auxiliary Assets */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
            <span className="font-label-caps text-label-caps text-primary">05</span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-wider">
              Auxiliary Assets
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Requirement Document (Optional)
              </label>
              <div className="instrument-input w-full p-4 flex items-center justify-center border-dashed border-2 border-outline-variant group hover:border-primary cursor-pointer transition-all duration-300">
                <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary">
                  <span className="material-symbols-outlined">upload_file</span>
                  <span className="font-mono-technical text-mono-technical">
                    DRAG ASSET OR BROWSE SYSTEM
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-caps text-label-caps text-on-surface-variant">
                Additional Notes
              </label>
              <textarea
                className="instrument-input w-full p-4 text-on-surface rounded-none resize-none"
                name="notes"
                placeholder="Security considerations, specific tech stack, etc..."
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-8 space-y-8">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              className="mt-1 bg-black border-outline-variant text-primary rounded-none focus:ring-primary focus:ring-offset-black"
              type="checkbox"
              required
            />
            <span className="text-on-surface-variant text-body-md">
              I agree to be contacted regarding my enquiry and acknowledge the Sovereign Engagement
              Protocol.
            </span>
          </label>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              type="submit"
              disabled={submitState !== 'idle'}
              className="flex-1 bg-primary text-on-primary font-label-caps text-label-caps py-5 px-8 rounded-lg tracking-[0.2em] transition-all duration-300 emerald-glow-hover hover:brightness-110 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {btnLabel}
            </button>
            <button
              type="button"
              className="flex-1 border border-primary text-primary font-label-caps text-label-caps py-5 px-8 rounded-lg tracking-[0.2em] transition-all duration-300 hover:bg-primary/10"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
