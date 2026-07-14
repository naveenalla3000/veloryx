export default function ContactFormPanel() {
  return (
    <div className="lg:col-span-7 glass-card rounded-xl p-10 md:p-16 relative overflow-hidden">
      {/* Corner brackets */}
      <div className="corner-bracket top-4 left-4 border-r-0 border-b-0" />
      <div className="corner-bracket top-4 right-4 border-l-0 border-b-0" />
      <div className="corner-bracket bottom-4 left-4 border-r-0 border-t-0" />
      <div className="corner-bracket bottom-4 right-4 border-l-0 border-t-0" />

      <form className="space-y-10 relative z-10" action="#" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label
              className="font-mono-technical text-[11px] text-primary/70 tracking-[0.25em] uppercase font-bold"
              htmlFor="firstName"
            >
              01 // First Name
            </label>
            <input
              className="w-full input-field rounded-sm px-5 py-4 font-body-md text-body-md"
              id="firstName"
              name="firstName"
              placeholder="Entry required"
              type="text"
            />
          </div>
          <div className="space-y-4">
            <label
              className="font-mono-technical text-[11px] text-primary/70 tracking-[0.25em] uppercase font-bold"
              htmlFor="lastName"
            >
              02 // Last Name
            </label>
            <input
              className="w-full input-field rounded-sm px-5 py-4 font-body-md text-body-md"
              id="lastName"
              name="lastName"
              placeholder="Entry required"
              type="text"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label
            className="font-mono-technical text-[11px] text-primary/70 tracking-[0.25em] uppercase font-bold"
            htmlFor="email"
          >
            03 // Business Domain
          </label>
          <input
            className="w-full input-field rounded-sm px-5 py-4 font-body-md text-body-md"
            id="email"
            name="email"
            placeholder="name@organization.com"
            type="email"
          />
        </div>

        <div className="space-y-4">
          <label
            className="font-mono-technical text-[11px] text-primary/70 tracking-[0.25em] uppercase font-bold"
            htmlFor="subject"
          >
            04 // Service Protocol
          </label>
          <div className="relative">
            <select
              className="w-full input-field rounded-sm px-5 py-4 font-body-md text-body-md appearance-none"
              id="subject"
              name="subject"
              defaultValue=""
            >
              <option value="" disabled>
                Select inquiry module...
              </option>
              <option value="consulting">IT Consulting</option>
              <option value="infrastructure">Digital Infrastructure</option>
              <option value="security">Cybersecurity</option>
              <option value="other">Custom Request</option>
            </select>
            <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary pointer-events-none text-xl opacity-60">
              expand_more
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <label
            className="font-mono-technical text-[11px] text-primary/70 tracking-[0.25em] uppercase font-bold"
            htmlFor="message"
          >
            05 // Project Parameters
          </label>
          <textarea
            className="w-full input-field rounded-sm px-5 py-4 font-body-md text-body-md resize-none"
            id="message"
            name="message"
            placeholder="Define objectives and scope..."
            rows={5}
          />
        </div>

        <div className="pt-6">
          <button
            type="submit"
            className="w-full submit-btn text-on-primary py-6 rounded-sm font-label-caps text-[14px] uppercase tracking-[0.3em] font-bold relative overflow-hidden group"
          >
            <span className="relative z-10">Initialize Transmission</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <p className="text-center font-mono-technical text-[10px] text-on-surface-variant/40 mt-6 tracking-widest">
            ENCRYPTED END-TO-END // AES-256
          </p>
        </div>
      </form>
    </div>
  )
}
