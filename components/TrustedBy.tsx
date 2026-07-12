const PARTNERS = ['AWS', 'Microsoft Azure', 'Oracle', 'Cisco', 'IBM', 'SAP']

export default function TrustedBy() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-16 text-center">
        Trusted by Global Enterprises
      </h2>
      <div className="border-t border-b border-outline-variant py-12">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-headline-md text-headline-md text-on-surface-variant/40 hover:text-on-surface-variant/80 transition-colors duration-300 cursor-default tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
