import "./App.css"; 
import NavBar from "./components/NavBar"; 
import Hero from "./components/Hero";
import About from "./components/About"; 
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact"; // 1. Import your Contact component

function App() {
  return (
    <main className="page-wrapper">
      
      <NavBar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Experience />
      
      {/* 2. Drop the Contact component right here! */}
      <Contact />

      {/* Footer */}
      <footer className="page-footer">
        <p className="text-center py-8 text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Abaan Koul. Built with React & Tailwind.
        </p>
      </footer>

    </main>
  );
}

export default App;