export default function FloatingCall() {
  return (
    <a
      href="tel:+97172435000"
      aria-label="Call Veloryx Technologies"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-surface-container-low border border-white/10 text-on-surface font-mono-technical text-[11px] tracking-widest px-3 py-2 rounded whitespace-nowrap shadow-lg pointer-events-none">
        +971 7 243 5000
      </span>

      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(78,222,163,0.4)] hover:shadow-[0_0_32px_rgba(78,222,163,0.6)] hover:scale-110 transition-all duration-200">
        {/* Ping ring */}
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        <span className="material-symbols-outlined text-on-primary text-[24px] relative z-10">call</span>
      </div>
    </a>
  )
}
