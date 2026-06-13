
export default function About() {
  return (
    <section id="about" className="portfolio-section">
      
      {/* Uses the global alignment wrapper we added to App.css */}
      <div className="section-content-narrow">
        
        {/* Uses the global section-title for the neon glow and >> prefix */}
        <h2 className="section-title mb-12">ABOUT ME</h2>
        
        {/* Uses the hud-panel class to match the technical readout box from the Hero section */}
        <div className="hud-panel space-y-6 text-sm sm:text-base leading-loose font-mono">
          
          <p>
            <span className="text-white mr-2">{">"}</span>
            I am <span className="text-white font-bold">Abaan Koul</span>, a Full-Stack Software and AI Engineer in my final year of Computer Science & Engineering. I specialize in bridging the gap between scalable backend architectures and intelligent, autonomous systems.
          </p>
          
          <p>
            <span className="text-white mr-2">{">"}</span>
            My engineering foundation was forged in C++ through rigorous Data Structures and Algorithms. This computational baseline quickly scaled into complex, real-world architectures—from developing autonomous robotics protocols during my training at IIT Bombay (e-Yantra), to engineering secure, full-scale healthcare ERP platforms.
          </p>
          
          <p>
            <span className="text-white mr-2">{">"}</span>
            Currently, my technical focus lies in deploying localized RAG (Retrieval-Augmented Generation) engines, building reactive cross-platform applications with Flutter, and architecting robust Python/Django backends. 
          </p>

          <p className="opacity-70 mt-4 border-t border-[#00e5ff]/20 pt-4">
            <span className="text-[#00e5ff] mr-2">{"//"}</span>
            OFFLINE_STATUS: When uncoupled from the terminal, I optimize strategic thinking on the chess board and maintain momentum on the football pitch.
          </p>
          
        </div>

      </div>
    </section>
  );
}