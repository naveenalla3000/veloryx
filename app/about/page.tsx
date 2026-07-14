import Navbar from '@/components/Navbar'
import AboutHero from '@/components/AboutHero'
import AboutMissionVision from '@/components/AboutMissionVision'
import AboutIndustries from '@/components/AboutIndustries'
import AboutBuildLifecycle from '@/components/AboutBuildLifecycle'
import AboutCoreDirectives from '@/components/AboutCoreDirectives'
import AboutLeadership from '@/components/AboutLeadership'
import AboutGlobalFootprint from '@/components/AboutGlobalFootprint'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | Veloryx Technologies',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pb-section-gap">
        <AboutHero />
        <AboutMissionVision />
        <AboutIndustries />
        <AboutBuildLifecycle />
        <AboutCoreDirectives />
        <AboutLeadership />
        <AboutGlobalFootprint />
      </main>
      <Footer />
    </>
  )
}
