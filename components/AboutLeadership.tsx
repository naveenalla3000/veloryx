const LEADERS = [
  {
    icon: 'person_apron',
    name: 'Marcus Vane',
    role: 'Chief Architect',
    bio: 'Pioneering the integration of physical architectural principles into cloud-native environments.',
  },
  {
    icon: 'public',
    name: 'Elena Rodriguez',
    role: 'Director of Global Operations',
    bio: 'Orchestrating complex infrastructure deployments across three continents with absolute precision.',
  },
]

export default function AboutLeadership() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
          Leadership &amp; Vision
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          Guided by architects of the digital age, we redefine what&apos;s possible in enterprise
          infrastructure.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {LEADERS.map(({ icon, name, role, bio }) => (
          <div
            key={name}
            className="glass-card p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-32 h-32 rounded-full bg-surface-container border border-primary/20 flex items-center justify-center overflow-hidden shrink-0">
              <span className="material-symbols-outlined text-primary text-6xl">{icon}</span>
            </div>
            <div>
              <h4 className="font-headline-md text-on-surface">{name}</h4>
              <p className="font-mono-technical text-primary text-xs uppercase tracking-widest mb-4">
                {role}
              </p>
              <p className="text-on-surface-variant text-body-md">{bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
