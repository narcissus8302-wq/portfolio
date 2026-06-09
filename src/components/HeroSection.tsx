import vedantImage from '../assets/vedant.jpeg';

export function HeroSection() {
  return (
    <section className="flex flex-col gap-8 py-8 justify-center" id="hero">
      <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start w-full justify-center">
        <div className="w-48 h-48 flex-shrink-0 glow-border p-0.5 bg-surface-container">
          <img
            alt="Vedant Parmane"
            className="w-full h-full object-cover"
            src={vedantImage}
          />
        </div>
        <div className="flex flex-col justify-center w-full xl:flex-1">
          <div className="ascii-art text-primary-container font-hero-ascii text-[10px] md:text-[12px] xl:text-[16px] leading-tight text-glow font-bold text-center xl:text-left">
{`██╗   ██╗███████╗██████╗  █████╗ ███╗   ██╗████████╗     ██████╗  █████╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗███████╗
██║   ██║██╔════╝██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝     ██╔══██╗██╔══██╗██╔══██╗████╗ ████║██╔══██╗████╗  ██║██╔════╝
██║   ██║█████╗  ██║  ██║███████║██╔██╗ ██║   ██║        ██████╔╝███████║██████╔╝██╔████╔██║███████║██╔██╗ ██║█████╗
╚██╗ ██╔╝██╔══╝  ██║  ██║██╔══██║██║╚██╗██║   ██║        ██╔═══╝ ██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══╝
 ╚████╔╝ ███████╗██████╔╝██║  ██║██║ ╚████║   ██║        ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║███████╗
  ╚═══╝  ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝        ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝`}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-6 w-full gap-6">
        <div className="flex flex-col gap-3 font-body-md max-w-[600px] w-full sm:ml-8">
          <div className="flex"><span className="w-32 text-outline font-label-code">SYSTEM</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Portfolio Loaded</span></div>
          <div className="flex"><span className="w-32 text-outline font-label-code">ROLE</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Computer Engineering Student</span></div>
          <div className="flex"><span className="w-32 text-outline font-label-code">FOCUS</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">AI & Machine Learning</span></div>
          <div className="flex"><span className="w-32 text-outline font-label-code">SPECIALTY</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Python Backend Development</span></div>
          <div className="flex"><span className="w-32 text-outline font-label-code">CURRENT WORK</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Learning Platforms & Legal AI</span></div>
          <div className="flex"><span className="w-32 text-outline font-label-code">STATUS</span> <span className="text-secondary-container font-bold w-16">[OK]</span> <span className="text-secondary-container">Open to Internships</span></div>
        </div>
        <p className="text-primary-container text-center text-body-md">
          System ready. Scroll to explore.<span className="terminal-blink">_</span>
        </p>
      </div>
    </section>
  );
}
