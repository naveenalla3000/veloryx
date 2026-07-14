const PARTNERS = ['NVIDIA', 'AZURE', 'AWS_CORE', 'PALANTIR', 'SNOWFLAKE']

export default function ProjectsPartners() {
  return (
    <section className="py-12 border-y border-white/5 bg-surface-container-lowest/30">
      <div className="px-margin-mobile md:px-margin-desktop flex flex-wrap justify-between items-center opacity-40 hover:opacity-80 transition-all gap-8 grayscale hover:grayscale-0 duration-500">
        <span className="font-label-caps text-on-surface-variant text-[10px] tracking-[0.3em]">
          ECOSYSTEM PARTNERS:
        </span>
        <div className="flex items-center gap-12 flex-wrap">
          {PARTNERS.map((name) => (
            <span key={name} className="font-headline-md text-headline-md text-primary/80 font-bold tracking-tighter">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
