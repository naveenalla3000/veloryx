import Navbar from '@/components/Navbar'
import ConsultancyIntro from '@/components/ConsultancyIntro'
import ConsultancyForm from '@/components/ConsultancyForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Consultancy Request | Veloryx Technologies',
}

export default function ConsultationPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-section-gap blueprint-grid">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row gap-20">
            <ConsultancyIntro />
            <ConsultancyForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
