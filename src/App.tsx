import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Divider } from './components/Divider';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background text-primary-container font-body-md min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-8 py-16 flex flex-col gap-16">
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
