import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import CoreModalities from '@/components/CoreModalities'
import StatsBar from '@/components/StatsBar'
import TrustedBy from '@/components/TrustedBy'
import HowWeWork from '@/components/HowWeWork'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[120px] pb-section-gap">
        <Hero />
        <CoreModalities />
        <StatsBar />
        <TrustedBy />
        <HowWeWork />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
