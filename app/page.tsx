import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CoreModalities from '@/components/CoreModalities'
import TrustedBy from '@/components/TrustedBy'
import HowWeWork from '@/components/HowWeWork'
import Testimonials from '@/components/Testimonials'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-16 pb-section-gap">
        <Hero />
        <CoreModalities />
        <TrustedBy />
        <HowWeWork />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
