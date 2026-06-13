

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-10 relative z-10"
    >
     <br />

      {/* Main Headline */}
      <h1 className="section-title max-w-6xl leading-tight mb-8">
        BUILDING <span className="font-bold text-[#00e5ff]">AUTONOMOUS</span>
        <br className="hidden sm:block" /> SYSTEMS & INTELLIGENCE
      </h1>

      {/* Technical Data Panel (Upgraded to Professional Engineering Terminology) */}
      <div className="hud-panel mb-12 max-w-3xl w-full text-sm sm:text-base leading-loose">
        <p>
          <span className="text-white mr-2">{">"}</span>
          <span className="opacity-70">DESIGNATION:</span> FULL-STACK SOFTWARE & AI ENGINEER
        </p>
        <p>
          <span className="text-white mr-2">{">"}</span>
          <span className="opacity-70">CORE_ARCHITECTURE:</span> SCALABLE WEB INFRASTRUCTURE & MACHINE LEARNING PIPELINES
        </p>
        <p>
          <span className="text-white mr-2">{">"}</span>
          <span className="opacity-70">INTEGRATION_STACK:</span> REACT, DJANGO, POSTGRESQL, PYTORCH, ROS, C++
        </p>
        <p className="animate-pulse mt-2 text-[#00e5ff] font-semibold">
          <span className="text-white mr-2">{">"}</span>
          SYS_STATUS: OPTIMIZING FOR NEW OPPORTUNITIES
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
        <a
          href="#projects"
          className="group relative px-8 py-4 bg-[#00e5ff]/5 border border-[#00e5ff]/50 text-white font-mono tracking-widest uppercase transition-all duration-300 hover:bg-[#00e5ff]/20 shadow-[inset_0_0_15px_rgba(0,229,255,0.1)] hover:shadow-[inset_0_0_20px_rgba(0,229,255,0.4),0_0_15px_rgba(0,229,255,0.2)]"
        >
          <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00e5ff] group-hover:w-3 group-hover:h-3 transition-all" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00e5ff] group-hover:w-3 group-hover:h-3 transition-all" />
          [ VIEW_PROJECTS ]
        </a>

        <a
          href="#contact"
          className="group px-8 py-4 bg-transparent border border-[#00e5ff]/30 text-[#00e5ff] font-mono tracking-widest uppercase transition-all duration-300 hover:bg-[#00e5ff]/10 hover:border-[#00e5ff]"
        >
          [ INITIATE_CONTACT ]
        </a>
      </div>

     
    </section>
  );
}