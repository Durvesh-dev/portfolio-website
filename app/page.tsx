import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <main className="min-h-screen bg-background relative flex flex-col items-center overflow-x-hidden selection:bg-accent/30 selection:text-foreground">
      {/* Very subtle glow behind the hero only */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-32 pb-24 relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
    </>
  )
}
