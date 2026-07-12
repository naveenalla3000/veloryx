export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 w-full max-w-[1440px] mx-auto">
        <div className="font-headline-md text-headline-md font-bold tracking-tight text-primary">
          Veloryx
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Solutions</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Expertise</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Projects</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">Insights</a>
        </div>
        <button className="hidden md:block bg-primary text-on-primary font-mono-technical text-mono-technical px-6 py-3 rounded glow-btn hover:scale-95 transition-transform">
          Consultation
        </button>
        <button className="md:hidden text-primary" aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  )
}
