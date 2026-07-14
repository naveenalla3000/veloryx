'use client'

import { useState, useRef, useEffect } from 'react'

const PRODUCTS = [
  { label: 'CRM Platform', href: '/products/crm', code: 'P01', icon: 'manage_accounts' },
  { label: 'ERP Suite', href: '/products/erp', code: 'P02', icon: 'account_balance' },
  { label: 'Healthcare Suite', href: '/products/healthcare', code: 'P03', icon: 'monitor_heart' },
  { label: 'Education Platform', href: '/products/education', code: 'P04', icon: 'school' },
  { label: 'Workflow Automation', href: '/products/automation', code: 'P05', icon: 'settings_suggest' },
  { label: 'Data Intelligence', href: '/products/data-intelligence', code: 'P06', icon: 'analytics' },
]

export default function ProductsDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-on-surface-variant hover:text-primary transition-colors duration-300 font-body-md text-body-md"
        aria-expanded={open}
      >
        Products
        <span
          className="material-symbols-outlined text-[16px] transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          expand_more
        </span>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-surface-container-low rounded-xl py-2 shadow-2xl z-50 border border-white/10 emerald-glow">
          {/* Arrow */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-surface-container-low rotate-45 border-l border-t border-white/10" />

          {PRODUCTS.map(({ label, href, code, icon }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
            >
              <span className="material-symbols-outlined text-primary/50 group-hover:text-primary transition-colors text-[18px]">
                {icon}
              </span>
              <div className="flex flex-col">
                <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors leading-tight">
                  {label}
                </span>
                <span className="font-mono-technical text-[10px] text-outline">{code}</span>
              </div>
            </a>
          ))}

          <div className="border-t border-white/5 mt-2 pt-2 px-4 pb-1">
            <a
              href="/services"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 font-mono-technical text-[11px] text-primary hover:text-primary/80 transition-colors py-1"
            >
              View all products
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
