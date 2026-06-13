
export default function Contact() {
  return (
    <section id="contact" className="portfolio-section">
      <div className="max-w-3xl mx-auto px-6 w-full text-center">
        
        <h2 className="section-title mb-6">Get In Touch</h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-12 leading-relaxed">
          I am currently actively looking for new opportunities and my inbox is always open. 
          Whether you have a question, a potential collaboration, or just want to say hi, I will try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* Primary Action: Direct Email */}
          <a 
            href="mailto:abaankoul31@gmail.com" 
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            Say Hello
          </a>
          
          {/* Secondary Action: LinkedIn */}
          <a 
            href="https://linkedin.com/in/abaan-koul-12a441250?" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform"
          >
            LinkedIn
          </a>

          {/* Secondary Action: GitHub */}
          <a 
            href="https://github.com/abaank7" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}