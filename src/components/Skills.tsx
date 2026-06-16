export default function Skills() {
  const skills = {
    "Languages": ["C++", "Python", "JavaScript", "SQL", "HTML/CSS"],
    "AI & Data": ["PyTorch", "Transformers", "CNNs", "sci-kit learn", "Pandas", "NumPy", "OpenCV", "Matplotlib", "Seaborn"],
    "Web & Tools": ["Django", "PostgreSQL", "React", "Flutter", "Git", "Linux"]
  };

  return (
    <section id="skills" className="portfolio-section">
      <div className="section-content-wide">
        
        <h2 className="section-title">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category} 
              className="bg-[#101012] p-8 rounded-3xl border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <h3 className="text-xl font-semibold text-zinc-100 mb-6 text-center">
                {category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-2">
                {skillList.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}