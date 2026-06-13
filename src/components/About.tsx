

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      {/* Constrained width for optimal reading experience */}
      <div className="max-w-3xl mx-auto px-6 w-full text-center">
        
        <h2 className="section-title mb-12">About Me</h2>
        
        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed text-left sm:text-center">
          <p>
            Hello! I'm <span className="font-semibold text-teal-600 dark:text-teal-400">Abaan Koul</span>, a final-year Computer Science & Engineering student, Full-Stack Developer, and AI enthusiast.
          </p>
          <p>
            My journey started with a strong foundation in Data Structures and Algorithms through competitive programming in C++. Since then, I have had the privilege of training at IIT Bombay, building autonomous robotics for the e-Yantra competition, and developing full-scale software like healthcare ERPs.
          </p>
          <p>
            Whether I'm architecting local RAG engines, building cross-platform apps with Flutter, or crafting robust Django backends, my goal is always to write clean, scalable code and learn in public. When I'm not at my keyboard, you can usually find me on the football pitch or analyzing strategies on the chess board.
          </p>
        </div>

      </div>
    </section>
  );
}