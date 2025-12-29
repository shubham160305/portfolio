import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Certificates from '@/components/sections/certificates';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Certificates />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
