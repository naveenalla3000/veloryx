import Image from 'next/image'

const CONTACT_ITEMS = [
  {
    icon: 'location_on',
    label: 'Geographic Node',
    content: (
      <>
        Veloryx Technologies FZ-LLC
        <br />
        Ras Al Khaimah Economic Zone
        <br />
        United Arab Emirates
      </>
    ),
    mono: false,
  },
  {
    icon: 'hub',
    label: 'Direct Channel',
    content: '+971 7 200 0000',
    mono: true,
  },
  {
    icon: 'satellite_alt',
    label: 'Data Exchange',
    content: 'contact@veloryx.com',
    mono: true,
  },
]

export default function ContactInfoPanel() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-8">
      {/* HQ Card */}
      <div className="glass-card rounded-xl p-10 flex flex-col relative overflow-hidden">
        <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
          <h2 className="font-mono-technical text-sm text-primary tracking-[0.2em] uppercase flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">terminal</span>
            Terminal HQ
          </h2>
          <span className="text-[10px] font-mono-technical text-on-surface-variant opacity-40">
            UTC +4:00
          </span>
        </div>
        <div className="space-y-12">
          {CONTACT_ITEMS.map(({ icon, label, content, mono }) => (
            <div key={label} className="flex items-start gap-8 group">
              <div className="mt-1">
                <span className="material-symbols-outlined text-primary/60 group-hover:text-primary transition-colors">
                  {icon}
                </span>
              </div>
              <div>
                <p className="font-mono-technical text-[10px] text-secondary/60 tracking-[0.2em] uppercase mb-3">
                  {label}
                </p>
                {mono ? (
                  <p className="font-mono-technical text-on-surface text-lg tracking-tight">
                    {content}
                  </p>
                ) : (
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed opacity-90">
                    {content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Tracking Interface */}
      <div className="glass-card rounded-xl h-[340px] overflow-hidden relative border border-primary/10 tracking-interface group">
        <div className="scanner-line" />
        {/* HUD top-left */}
        <div className="absolute top-4 left-4 z-30 font-mono-technical text-[9px] text-primary opacity-60 pointer-events-none">
          <p>LAT: 25.7911° N</p>
          <p>LNG: 55.9432° E</p>
        </div>
        {/* HUD top-right */}
        <div className="absolute top-4 right-4 z-30 font-mono-technical text-[9px] text-primary opacity-60 pointer-events-none text-right">
          <p>SAT_LINK: ACTIVE</p>
          <p>SYNC: 100%</p>
        </div>
        {/* HUD bottom-left */}
        <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          <span className="font-mono-technical text-[10px] text-primary tracking-[0.2em] uppercase">
            Tracking Node: RAK_HQ
          </span>
        </div>
        {/* Map image */}
        <Image
          src="/contact-map.jpg"
          alt="Ras Al Khaimah location map"
          fill
          className="object-cover grayscale brightness-50 contrast-125 group-hover:scale-110 transition-transform duration-[4000ms] ease-out"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90 pointer-events-none z-20" />
        {/* Target reticle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border border-primary/40 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 border border-dashed border-primary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(16,185,129,1)]" />
          </div>
        </div>
      </div>
    </div>
  )
}
