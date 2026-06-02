import React from "react";

function Hero() {
  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Subtle Status Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-100 dark:bg-teal-500/10 border border-teal-200 dark:border-teal-500/20 rounded-full px-4 py-1.5 text-xs font-mono font-medium text-teal-800 dark:text-teal-400 tracking-wide uppercase animate-pulse">
          <span className="w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-400" aria-hidden="true"></span>
          Available for Opportunities
        </div>

        {/* Main Heading with Gradient Text */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
          Hi, I'm <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 dark:from-teal-400 dark:via-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">Abaan Koul</span>
        </h1>
        
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-700 dark:text-slate-300">
          Data Scientist & Full-Stack Developer
        </h2>

        {/* Subtext / Hook */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
          I bridge the gap between complex data analysis and elegant web solutions. Specializing in predictive modeling, interactive dashboards, and scalable architectures.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white dark:text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-teal-500/20 dark:shadow-teal-500/10 transition-all duration-200 transform hover:-translate-y-0.5 text-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          >
            View My Projects
          </a>
          
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gray-100 dark:bg-slate-800/50 hover:bg-gray-200 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700/60 hover:border-gray-300 dark:hover:border-slate-600 text-gray-800 dark:text-slate-200 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
          >
            Let's Talk
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;