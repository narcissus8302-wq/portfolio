import vedantImage from '../assets/vedant.jpeg';

export function HeroSection() {
  return (
    <section className="flex flex-col gap-8 py-8 justify-center" id="hero">
      <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-center w-full justify-center xl:justify-start xl:pl-12">
        <div className="w-52 h-52 flex-shrink-0 border-2 border-primary-container/40 p-0.5 bg-surface-container xl:-ml-4">
          <img
            alt="Vedant Parmane"
            className="w-full h-full object-cover"
            src={vedantImage}
          />
        </div>
        <div className="flex flex-col justify-center w-full xl:flex-1">
          <div className="ascii-art text-primary-container font-hero-ascii text-[10px] md:text-[12px] xl:text-[14px] leading-tight text-glow font-bold text-center xl:text-left tracking-[0.3px]">
{`██╗   ██╗███████╗██████╗  █████╗ ███╗   ██╗████████╗   ██████╗  █████╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗███████╗
██║   ██║██╔════╝██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝   ██╔══██╗██╔══██╗██╔══██╗████╗ ████║██╔══██╗████╗  ██║██╔════╝
██║   ██║█████╗  ██║  ██║███████║██╔██╗ ██║   ██║      ██████╔╝███████║██████╔╝██╔████╔██║███████║██╔██╗ ██║█████╗  
╚██╗ ██╔╝██╔══╝  ██║  ██║██╔══██║██║╚██╗██║   ██║      ██╔═══╝ ██╔══██║██╔══██╗██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══╝  
 ╚████╔╝ ███████╗██████╔╝██║  ██║██║ ╚████║   ██║      ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║███████╗
  ╚═══╝  ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝      ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝`}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-4 w-full gap-5">
        <div className="flex flex-col gap-2 font-body-md max-w-[600px] w-full xl:ml-8 opacity-70">
          <div className="flex"><span className="w-44 text-outline font-label-code">SYSTEM</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Portfolio Loaded</span></div>
          <div className="flex"><span className="w-44 text-outline font-label-code">ROLE</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Computer Engineering Student</span></div>
          <div className="flex"><span className="w-44 text-outline font-label-code">FOCUS</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">AI & Machine Learning</span></div>
          <div className="flex"><span className="w-44 text-outline font-label-code">SPECIALTY</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Python Backend Development</span></div>
          <div className="flex"><span className="w-44 text-outline font-label-code">CURRENT WORK</span> <span className="text-primary-fixed font-bold w-16">[OK]</span> <span className="text-pure-white">Learning Platforms & Legal AI</span></div>
          <div className="flex"><span className="w-44 text-outline font-label-code">STATUS</span> <span className="text-secondary-container font-bold w-16">[OK]</span> <span className="text-secondary-container">Open to Internships</span></div>
        </div>
        <p className="text-primary-container text-left text-body-sm xl:ml-8">
          System ready. Scroll to explore.<span className="terminal-blink">_</span>
        </p>
      </div>
    </section>
  );
}
