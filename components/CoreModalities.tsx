const CLOUD_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAd-KeQmTCWR6wSx_GId6VA7Kji1lgnaJadPlmehaQsKGN12Iel3r7IPe7yMSYrlWLvlJ3yW5xY3ka-Ye1NhnFWEs6d44WPsHDGaybstKibJBeOL3rKh2g5jGq12k-OeMtuxUFu3T863UPobNKdOjbqtJL5BdZoC3_WElP8x2uLnrrXYUD-Wws4zYmBuPhKReUbcBzpvaFj-9PQaYbVGfXawkKDJO98aFMQpduiKYsXE5IhJ_qP1EmJ_P7xdCb9klq2_kjrnVT9Bg'

function StrategicPlanningCard() {
  return (
    <div className="glass-card md:col-span-8 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-low transition-colors duration-500">
      <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
        <span
          className="material-symbols-outlined text-[120px] text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          architecture
        </span>
      </div>
      <div>
        <div className="font-label-caps text-label-caps text-secondary tracking-widest mb-2">01 // Foundation</div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Strategic Planning</h3>
        <p className="text-on-surface-variant max-w-md">
          Aligning technology investments with long-term business objectives. We map the architectural
          blueprints required for sustainable, high-velocity growth.
        </p>
      </div>
      <a href="#" className="flex items-center gap-2 text-primary font-mono-technical text-mono-technical mt-4 cursor-pointer">
        View Methodology{' '}
        <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
          arrow_right_alt
        </span>
      </a>
    </div>
  )
}

function DigitalTransformationCard() {
  return (
    <div className="glass-card md:col-span-4 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group hover:bg-surface-container-low transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent z-0" />
      <div className="z-10">
        <div className="font-label-caps text-label-caps text-primary tracking-widest mb-2">02 // Evolution</div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Digital Transformation</h3>
        <p className="text-on-surface-variant">Modernizing legacy systems to agile, data-driven frameworks.</p>
      </div>
      <div className="mt-8 z-10">
        <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
          <div className="h-full bg-secondary w-[85%] rounded-full shadow-[0_0_10px_rgba(137,206,255,0.8)]" />
        </div>
        <div className="flex justify-between mt-2 font-mono-technical text-[10px] text-on-surface-variant">
          <span>Legacy Deprecation</span>
          <span>85% Complete</span>
        </div>
      </div>
    </div>
  )
}

function CloudSolutionsCard() {
  return (
    <div className="glass-card md:col-span-12 rounded-xl p-0 flex flex-col md:flex-row relative overflow-hidden group hover:bg-surface-container-low transition-colors duration-500 min-h-[300px]">
      <div className="md:w-1/2 p-8 flex flex-col justify-center z-10 bg-background/40 backdrop-blur-md">
        <div className="font-label-caps text-label-caps text-primary-fixed tracking-widest mb-2">03 // Infrastructure</div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Cloud Solutions &amp; Sovereignty</h3>
        <p className="text-on-surface-variant mb-6 max-w-lg">
          Designing multi-cloud and hybrid environments that prioritize data sovereignty, extreme
          low-latency performance, and rigorous security postures tailored for elite global operations.
        </p>
        <button className="w-max bg-surface-variant text-on-surface border border-outline-variant font-mono-technical text-mono-technical px-6 py-2 rounded hover:border-primary transition-colors flex items-center gap-2">
          Deploy Node <span className="material-symbols-outlined text-sm">cloud_sync</span>
        </button>
      </div>
      <div className="md:w-1/2 h-full min-h-[200px] md:min-h-0 relative border-l border-white/5">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen"
          style={{ backgroundImage: `url('${CLOUD_IMAGE_URL}')` }}
        />
      </div>
    </div>
  )
}

export default function CoreModalities() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto py-section-gap">
      <div className="mb-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Core Modalities
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Our approach integrates advanced architectural design with flawless execution, ensuring your
          enterprise remains at the vanguard of innovation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px]">
        <StrategicPlanningCard />
        <DigitalTransformationCard />
        <CloudSolutionsCard />
      </div>
    </section>
  )
}
