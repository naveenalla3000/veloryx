'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ServicesDropdown from './ServicesDropdown'

const MOBILE_SERVICES = [
  { label: 'CRM Platform',         href: '/products/crm',              code: 'P01', icon: 'manage_accounts' },
  { label: 'ERP Suite',            href: '/products/erp',              code: 'P02', icon: 'account_balance' },
  { label: 'Healthcare Suite',     href: '/products/healthcare',       code: 'P03', icon: 'monitor_heart' },
  { label: 'Education Platform',   href: '/products/education',        code: 'P04', icon: 'school' },
  { label: 'Workflow Automation',  href: '/products/automation',       code: 'P05', icon: 'settings_suggest' },
  { label: 'Data Intelligence',    href: '/products/data-intelligence',code: 'P06', icon: 'analytics' },
]


const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'About',    href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact',  href: '/contact' },
]

function MobileAccordion({
  label,
  items,
  onClose,
}: {
  label: string
  items: typeof MOBILE_SERVICES
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full py-3 px-4 text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md rounded-lg hover:bg-white/5"
      >
        {label}
        <span
          className="material-symbols-outlined text-[18px] transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-white/10 pl-4">
          {items.map(({ label: l, href, code, icon }) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 py-2 px-2 text-on-surface-variant hover:text-primary transition-colors group rounded-lg hover:bg-white/5"
            >
              <span className="material-symbols-outlined text-primary/50 group-hover:text-primary text-[16px] transition-colors">
                {icon}
              </span>
              <div className="flex flex-col">
                <span className="font-body-md text-body-md leading-tight">{l}</span>
                <span className="font-mono-technical text-[10px] text-outline">{code}</span>
              </div>
            </a>
          ))}
          <a
            href={label === 'Services' ? '/services' : '/services'}
            onClick={onClose}
            className="flex items-center gap-1 py-2 px-2 font-mono-technical text-[11px] text-primary hover:text-primary/80 transition-colors"
          >
            View all {label.toLowerCase()}
            <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  // Swipe right-edge → open; swipe right on open panel → close
  useEffect(() => {
    function onTouchStart(e: TouchEvent) {
      touchStartX.current = e.touches[0].clientX
      touchStartY.current = e.touches[0].clientY
    }
    function onTouchEnd(e: TouchEvent) {
      const dx = e.changedTouches[0].clientX - touchStartX.current
      const dy = e.changedTouches[0].clientY - touchStartY.current
      if (Math.abs(dy) > Math.abs(dx) * 1.2) return // mostly vertical — ignore
      if (!menuOpen && touchStartX.current > window.innerWidth - 32 && dx < -50) {
        setMenuOpen(true)   // swipe left from right edge
      } else if (menuOpen && dx > 80) {
        setMenuOpen(false)  // swipe right to close
      }
    }
    document.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-0 w-full max-w-[1440px] mx-auto">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Veloryx Technologies"
              width={120}
              height={30}
              className="object-contain mix-blend-screen"
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/">Home</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/about">About</a>
            <ServicesDropdown />
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/projects">Projects</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="/contact">Contact</a>
          </div>

          <a
            href="/consultation"
            className="hidden md:block bg-primary text-on-primary font-mono-technical text-mono-technical px-6 py-3 rounded glow-btn hover:scale-95 transition-transform"
          >
            Consultation
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-primary p-2"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop — tap does nothing; swipe right on panel to close */}
          <div className="mobile-menu-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Slide panel */}
          <div className="mobile-menu-panel absolute top-0 right-0 h-full w-[min(340px,90vw)] bg-surface-container-low border-l border-white/10 flex flex-col shadow-2xl">

            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <Image
                src="/logo.png"
                alt="Veloryx Technologies"
                width={100}
                height={25}
                className="object-contain mix-blend-screen"
              />
              <button onClick={close} className="text-on-surface-variant hover:text-primary transition-colors p-1" aria-label="Close menu">
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-1 p-4 overflow-y-auto flex-grow">
              {NAV_LINKS.slice(0, 2).map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={close}
                  className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md rounded-lg hover:bg-white/5"
                >
                  {label}
                </a>
              ))}

              <MobileAccordion label="Services" items={MOBILE_SERVICES} onClose={close} />

              {NAV_LINKS.slice(2).map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={close}
                  className="py-3 px-4 text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md rounded-lg hover:bg-white/5"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 border-t border-white/10">
              <a
                href="/consultation"
                onClick={close}
                className="block w-full bg-primary text-on-primary text-center font-label-caps text-label-caps py-4 tracking-[0.15em] glow-btn hover:brightness-110 transition-all duration-300"
              >
                Free Consultation
              </a>
              <p className="text-center font-mono-technical text-[10px] text-outline mt-3 tracking-widest">
                VELORYX TECHNOLOGIES FZ-LLC
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
