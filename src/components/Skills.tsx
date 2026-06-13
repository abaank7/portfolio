
export default function Skills() {
  const skills = {
    "Languages": ["C++", "Python", "JavaScript", "Dart", "SQL", "HTML/CSS"],
    "AI & Data": ["PyTorch", "Transformers", "CNNs", "Machine Learning", "Pandas", "NumPy", "OpenCV"],
    "Web & Tools": ["Django", "React", "Flutter", "PostgreSQL", "ROS", "Git", "Linux"]
  };

  return (
    <section id="skills" className="portfolio-section">
      <div className="section-content-wide">
        
        <h2 className="section-title text-center mb-16">Technical Arsenal</h2>
        
        {/* A 3-column grid for desktop, 1-column for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {Object.entries(skills).map(([category, skillList]) => (
            <div 
              key={category} 
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                {category}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700 shadow-sm"
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