import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap w-full max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-4">
            <Image src="/logo.png" alt="Veloryx Technologies" width={140} height={47} className="object-contain" />
          </div>
          <p className="font-mono-technical text-mono-technical text-on-surface-variant max-w-xs mb-8">
            Engineered in the UAE.<br />Deployed Globally.
          </p>
          <div className="text-on-surface-variant text-sm">
            © 2026 Veloryx Technologies FZ-LLC. All rights reserved.
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-label-caps text-label-caps text-on-surface tracking-widest mb-2">Legal</h4>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1" href="#">Privacy Policy</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1" href="#">Terms of Service</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1" href="#">Security</a>
        </div>
        <div className="col-span-1 flex flex-col space-y-4">
          <h4 className="font-label-caps text-label-caps text-on-surface tracking-widest mb-2">Connect</h4>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1" href="#">Contact</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1" href="#">Global Offices</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 hover:translate-x-1" href="#">Careers</a>
        </div>
      </div>
    </footer>
  )
}
