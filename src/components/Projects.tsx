
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json"; // Adjust path if needed

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="section-content-wide">
        <h2 className="section-title">My Selected Works</h2>
        
        <div className="project-grid">
          {/* Loop through the JSON data to generate your cards */}
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}