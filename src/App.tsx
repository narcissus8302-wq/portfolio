import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MusicIsland } from './components/MusicIsland';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <Footer />
      <MusicIsland />
    </div>
  );
}

export default App;