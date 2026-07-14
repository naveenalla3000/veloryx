const TESTIMONIALS = [
  {
    quote:
      'Veloryx transformed our multi-cloud strategy from a liability into a competitive advantage. Their architectural precision is unmatched.',
    author: 'Sarah Chen',
    role: 'CTO',
    company: 'NovaTech Global',
    tag: 'Cloud Migration',
  },
  {
    quote:
      'The zero-downtime deployment methodology saved us from what would have been a catastrophic 72-hour maintenance window during peak season.',
    author: 'Marcus Rivera',
    role: 'VP of Engineering',
    company: 'Apex Logistics',
    tag: 'Deployment',
  },
  {
    quote:
      "From discovery to production in 6 weeks. Their four-phase process isn't just methodology — it's a force multiplier for engineering teams.",
    author: 'Priya Anand',
    role: 'Head of Infrastructure',
    company: 'Meridian Financial',
    tag: 'Infrastructure',
  },
]

export default function Testimonials() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="mb-8">
        <p className="font-label-caps text-label-caps text-primary tracking-widest mb-2">Client Voices</p>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Trusted by Engineering Leaders
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          From global logistics to financial infrastructure, enterprises rely on Veloryx to deliver.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {TESTIMONIALS.map(({ quote, author, role, company, tag }) => (
          <div
            key={author}
            className="glass-card rounded-xl p-8 flex flex-col justify-between group hover:bg-surface-container-low transition-colors duration-500"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="font-label-caps text-label-caps text-primary border border-primary/30 px-3 py-1 rounded bg-primary/5">
                  {tag}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
              <span
                className="material-symbols-outlined text-primary text-4xl opacity-30 leading-none"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                format_quote
              </span>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-2 mb-8">{quote}</p>
            </div>
            <div className="border-t border-outline-variant pt-6">
              <p className="font-headline-md text-headline-md text-on-surface">{author}</p>
              <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest mt-1">
                {role} · {company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
