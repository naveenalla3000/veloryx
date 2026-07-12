import Image from 'next/image'

const PARTNERS = [
  { name: 'AWS', file: 'aws', width: 80, height: 48 },
  { name: 'Microsoft Azure', file: 'azure', width: 120, height: 48 },
  { name: 'Oracle', file: 'oracle', width: 120, height: 48 },
  { name: 'Cisco', file: 'cisco', width: 80, height: 48 },
  { name: 'IBM', file: 'ibm', width: 80, height: 48 },
  { name: 'SAP', file: 'sap', width: 80, height: 48 },
]

export default function TrustedBy() {
  return (
    <section className="py-section-gap max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
      <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-16 text-center">
        Trusted by Global Enterprises
      </h2>
      <div className="border-t border-b border-outline-variant py-12 overflow-hidden">
        <div className="marquee-track">
          {[...PARTNERS, ...PARTNERS].map(({ name, file, width, height }, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-12 opacity-50 hover:opacity-90 transition-opacity duration-300"
            >
              <Image
                src={`/brands/${file}.svg`}
                alt={name}
                width={width}
                height={height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
