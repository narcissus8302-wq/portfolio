import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalWindow } from './components/TerminalWindow';
import CanvasBackground from './components/CanvasBackground';
import type { Config } from './components/CanvasBackground';
import ControlsPanel from './components/ControlsPanel';

function App() {
  const [config, setConfig] = useState<Config>({
    repelRadius: 200,
    repelForce: 1.5,
    starDensity: 700,
    driftSpeed: 1.0,
    theme: 'fire', // Using fire theme as default
    photonGlow: false,
  });

  const [isControlsOpen, setIsControlsOpen] = useState(false);

  return (
    <>
      <CanvasBackground config={config} />

      <div className="text-primary-container font-body-md min-h-screen flex flex-col relative z-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar toggleControls={() => setIsControlsOpen(!isControlsOpen)} />
        </div>
        <main className="flex-grow w-full max-w-[1200px] mx-auto px-8 py-24 flex flex-col gap-24 relative pointer-events-auto">
          <ControlsPanel
            config={config}
            setConfig={setConfig}
            isOpen={isControlsOpen}
            setIsOpen={setIsControlsOpen}
          />
          <HeroSection />
          <TerminalWindow title="~/about">
          <AboutSection />
        </TerminalWindow>
        <TerminalWindow title="~/experience">
          <ExperienceSection />
        </TerminalWindow>
        <TerminalWindow title="~/projects">
          <ProjectsSection />
        </TerminalWindow>
        <TerminalWindow title="~/contact">
          <ContactSection />
        </TerminalWindow>
        <TerminalWindow title="~/principles">
          <PrinciplesSection />
        </TerminalWindow>
      </main>
      <div className="pointer-events-auto">
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
