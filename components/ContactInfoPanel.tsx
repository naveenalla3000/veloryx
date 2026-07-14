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
    content: '+971 7 243 5000',
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
      <div className="glass-card rounded-xl h-[340px] overflow-hidden relative border border-primary/10">
        {/* HUD top-left */}
        <div className="absolute top-4 left-4 z-30 font-mono-technical text-[9px] text-primary opacity-70 pointer-events-none">
          <p>LAT: 25.6651° N</p>
          <p>LNG: 55.7837° E</p>
        </div>
        {/* HUD top-right */}
        <div className="absolute top-4 right-4 z-30 font-mono-technical text-[9px] text-primary opacity-70 pointer-events-none text-right">
          <p>SAT_LINK: ACTIVE</p>
          <p>SYNC: 100%</p>
        </div>
        {/* HUD bottom-left */}
        <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
          <span className="font-mono-technical text-[10px] text-primary tracking-[0.2em] uppercase">
            CWEP9900 · AL HAMRA INDUSTRIAL ZONE-FZ
          </span>
        </div>
        {/* Google Maps iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3596.1883478332193!2d55.783680275612554!3d25.66505042741268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCWEP9900%20Compass%20Building%2C%20Al%20Shohada%20Road%2C%20AL%20Hamra%20Industrial%20Zone-FZ%2C%7C%20Ras%20Al%20Khaimah%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1784019538298!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.85)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Veloryx Technologies office location"
          className="absolute inset-0 w-full h-full"
        />
        {/* Bottom gradient to blend into card */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background/60 to-transparent pointer-events-none z-20" />
      </div>
    </div>
  )
}
