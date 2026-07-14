import Navbar from '@/components/Navbar'
import ServicesHero from '@/components/ServicesHero'
import ServicesModules from '@/components/ServicesModules'
import ServicesAsymmetric from '@/components/ServicesAsymmetric'
import ServicesCTA from '@/components/ServicesCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services | Veloryx Technologies',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32">
        <ServicesHero />
        <ServicesModules />
        <ServicesAsymmetric />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
