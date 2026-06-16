export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-content-narrow">
        
        <h2 className="section-title">About Me</h2>
        
        <div className="bg-[#101012] border border-white/10 rounded-3xl p-8 sm:p-12 text-base sm:text-lg leading-relaxed text-zinc-400 shadow-2xl">
          
          <p className="mb-6">
            I am <span className="text-zinc-100 font-medium">Abaan Koul</span>, a Full-Stack Software and AI Engineer in my final year of Computer Science & Engineering. I specialize in bridging the gap between scalable backend architectures and intelligent, autonomous systems.
          </p>
          
          <p className="mb-6">
            My engineering foundation was forged in C++ through rigorous Data Structures and Algorithms. This computational baseline quickly scaled into complex, real-world architectures—from developing autonomous robotics protocols during my training at IIT Bombay (e-Yantra), to engineering secure, full-scale healthcare ERP platforms.
          </p>
          
          <p className="mb-8">
            Currently, my technical focus lies in deploying localized RAG (Retrieval-Augmented Generation) engines, building reactive cross-platform applications with Flutter, and architecting robust Python/Django backends. 
          </p>

          <div className="border-t border-white/10 pt-6 mt-6">
            <p className="text-sm text-zinc-500">
              <span className="text-pink-500 font-medium mr-2">Outside of work:</span>
              When I'm away from the keyboard, you can usually find me analyzing strategies on the chess board or maintaining momentum on the football pitch.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}