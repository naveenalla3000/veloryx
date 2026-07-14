import Navbar from '@/components/Navbar'
import ContactHero from '@/components/ContactHero'
import ContactFormPanel from '@/components/ContactFormPanel'
import ContactInfoPanel from '@/components/ContactInfoPanel'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | Veloryx Technologies',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <main className="flex-grow pt-[180px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        <ContactHero />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <ContactFormPanel />
          <ContactInfoPanel />
        </div>
      </main>
      <Footer />
    </>
  )
}
