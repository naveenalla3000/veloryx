import Image from 'next/image'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  { label: 'Free Consultation', href: '/consultation' },
]

const PRODUCTS = [
  { label: 'CRM Platform', href: '/services' },
  { label: 'ERP Suite', href: '/services' },
  { label: 'Healthcare Suite', href: '/services' },
  { label: 'Education Platform', href: '/services' },
  { label: 'Workflow Automation', href: '/services' },
  { label: 'Data Intelligence', href: '/services' },
]

const CONTACT_ITEMS = [
  {
    icon: 'location_on',
    lines: ['Veloryx Technologies FZ-LLC', 'Ras Al Khaimah Economic Zone (RAKEZ)', 'Ras Al Khaimah, United Arab Emirates'],
  },
  {
    icon: 'call',
    lines: ['+971 7 243 5000'],
  },
  {
    icon: 'mail',
    lines: ['contact@veloryx.com'],
  },
  {
    icon: 'schedule',
    lines: ['Sun – Thu: 9:00 AM – 6:00 PM GST', 'Fri – Sat: Closed'],
  },
]

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
    >
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/5">

      {/* Main grid */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-10 grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Brand column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <Image
            src="/logo.png"
            alt="Veloryx Technologies"
            width={140}
            height={47}
            className="object-contain mix-blend-screen"
          />
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-xs">
            Veloryx Technologies is the UAE&apos;s premier enterprise IT consultancy — delivering
            world-class software products for healthcare, education, finance, and enterprise operations.
            Built in the UAE. Trusted globally.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono-technical text-mono-technical text-primary text-[11px] tracking-widest uppercase">
              Systems Operational — UTC+4
            </span>
          </div>
          {/* Social / identity icons */}
          <div className="flex gap-4 mt-2">
            {['hub', 'language', 'shield_with_heart'].map((icon) => (
              <span
                key={icon}
                className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors text-[22px]"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <h4 className="font-label-caps text-label-caps text-on-surface tracking-widest mb-2 uppercase">
            Quick Links
          </h4>
          {QUICK_LINKS.map((link) => (
            <FooterLink key={link.href + link.label} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Products */}
        <div className="md:col-span-3 flex flex-col gap-3">
          <h4 className="font-label-caps text-label-caps text-on-surface tracking-widest mb-2 uppercase">
            Our Products
          </h4>
          {PRODUCTS.map((p) => (
            <FooterLink key={p.label} href={p.href} label={p.label} />
          ))}
        </div>

        {/* Contact */}
        <div className="md:col-span-3 flex flex-col gap-6">
          <h4 className="font-label-caps text-label-caps text-on-surface tracking-widest mb-2 uppercase">
            Get In Touch
          </h4>
          {CONTACT_ITEMS.map(({ icon, lines }) => (
            <div key={icon} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary/70 text-[18px] mt-0.5 shrink-0">{icon}</span>
              <div className="flex flex-col gap-0.5">
                {lines.map((line) => (
                  <span key={line} className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
                    {line}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="h-px bg-white/5" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono-technical text-mono-technical text-on-surface-variant opacity-50 text-[12px]">
          © {new Date().getFullYear()} Veloryx Technologies FZ-LLC. All rights reserved. Registered in RAKEZ, United Arab Emirates.
        </p>
        <div className="flex gap-6">
          <a href="#" className="font-mono-technical text-[11px] text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="font-mono-technical text-[11px] text-on-surface-variant hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="font-mono-technical text-[11px] text-on-surface-variant hover:text-primary transition-colors">Security</a>
        </div>
      </div>

    </footer>
  )
}
