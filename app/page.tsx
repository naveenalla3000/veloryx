import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AnimatedDivider from '@/components/AnimatedDivider'
import CoreModalities from '@/components/CoreModalities'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[120px] pb-section-gap">
        <Hero />
        <AnimatedDivider />
        <CoreModalities />
      </main>
      <Footer />
    </>
  )
}
