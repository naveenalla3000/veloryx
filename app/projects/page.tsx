import Navbar from '@/components/Navbar'
import ProjectsHero from '@/components/ProjectsHero'
import ProjectsPartners from '@/components/ProjectsPartners'
import ProjectsCaseStudies from '@/components/ProjectsCaseStudies'
import ProjectsCTA from '@/components/ProjectsCTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Architectural Achievements | Veloryx Technologies',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen pt-16 technical-grid">
        <div className="fixed inset-0 blueprint-overlay pointer-events-none opacity-30 z-0" />
        <div className="relative z-10">
          <ProjectsHero />
          <ProjectsPartners />
          <ProjectsCaseStudies />
          <ProjectsCTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
