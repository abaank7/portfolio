import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="section-content-wide max-w-6xl">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-grid mt-8">
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