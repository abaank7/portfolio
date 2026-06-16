export default function Contact() {
  return (
    <section id="contact" className="portfolio-section">
      <div className="max-w-2xl mx-auto px-6 w-full text-center">
        
        <h2 className="section-title">Get In Touch</h2>
        
        <p className="text-zinc-400 text-base sm:text-lg mb-12 leading-relaxed">
          I am currently actively looking for new opportunities and my inbox is always open. 
          Whether you have a question, a potential collaboration, or just want to say hi, I will try my best to get back to you!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Primary Action */}
          <a 
            href="mailto:abaankoul31@gmail.com" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-pink-500 to-violet-600 hover:from-pink-400 hover:to-violet-500 text-white font-semibold transition-all duration-300 shadow-[0_4px_14px_0_rgba(236,72,153,0.39)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.23)] hover:-translate-y-0.5"
          >
            Say Hello
          </a>
          
          {/* Secondary Actions */}
          <a 
            href="https://linkedin.com/in/abaan-koul-12a441250" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#101012] hover:bg-white/5 text-zinc-300 hover:text-white font-medium border border-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            LinkedIn
          </a>

          <a 
            href="https://github.com/abaank7" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#101012] hover:bg-white/5 text-zinc-300 hover:text-white font-medium border border-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
}