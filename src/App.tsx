import NavBar from "./components/NavBar"; 
import Hero from "./components/Hero";

export default function App() {
  return (
    // 1. Better typography (antialiased) and consistent background colors matching the Hero component
    <main className="relative w-full min-h-screen text-slate-900 bg-slate-50 dark:bg-slate-950 dark:text-slate-50 antialiased selection:bg-teal-500/30">
      
      {/* The Navigation Bar */}
      <NavBar />

      {/* Section 1: Home (The Hero component handles the #home ID) */}
      <Hero />

      {/* Section 2: Projects */}
      <section id="projects" className="min-h-screen flex items-center justify-center border-b border-slate-200 dark:border-slate-800/50 pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full text-center">
          <h2 className="text-4xl font-bold mb-12">My Selected Works</h2>
          
          {/* Added a placeholder grid to help you visualize where your projects will go */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="h-64 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400">Project 1</div>
            <div className="h-64 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400">Project 2</div>
            <div className="h-64 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400">Project 3</div>
          </div>
        </div>
      </section>

      {/* Section 3: Experience */}
      <section id="experience" className="min-h-screen flex items-center justify-center border-b border-slate-200 dark:border-slate-800/50 pt-20">
        <div className="max-w-3xl mx-auto px-6 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Where I've Worked</h2>
          <p className="text-slate-500 dark:text-slate-400">Your experience timeline will go here.</p>
        </div>
      </section>

      {/* Section 4: About */}
      <section id="about" className="min-h-screen flex items-center justify-center border-b border-slate-200 dark:border-slate-800/50 pt-20">
        <div className="max-w-3xl mx-auto px-6 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-slate-500 dark:text-slate-400">A brief summary of your background, skills, and goals.</p>
        </div>
      </section>

      {/* Section 5: Contact me */}
      <section id="contact" className="min-h-[80vh] flex items-center justify-center pt-20" >
        <div className="max-w-3xl mx-auto px-6 w-full text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">Feel free to reach out for collaborations or just a friendly hello.</p>
        </div>
      </section>

      {/* Optional: A simple footer rounds out the page beautifully */}
      <footer className="w-full py-8 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/50">
        <p>© {new Date().getFullYear()} Abaan Koul. All rights reserved.</p>
      </footer>

    </main>
  );
}