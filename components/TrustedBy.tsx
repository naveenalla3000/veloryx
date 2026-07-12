const PARTNERS = [
  { name: 'AWS', file: 'aws' },
  { name: 'Microsoft Azure', file: 'azure' },
  { name: 'Oracle', file: 'oracle' },
  { name: 'Cisco', file: 'cisco' },
  { name: 'IBM', file: 'ibm' },
  { name: 'SAP', file: 'sap' },
]

export default function TrustedBy() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 text-center">
        Trusted by Global Enterprises
      </h2>
      <div className="border-t border-b border-outline-variant py-12 overflow-hidden">
        <div className="marquee-track">
          {[...PARTNERS, ...PARTNERS].map(({ name, file }, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-12 opacity-50 hover:opacity-90 transition-opacity duration-300"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/brands/${file}.svg`}
                alt={name}
                style={{ height: '36px', width: 'auto' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
