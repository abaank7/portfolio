
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experience.json"; 

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="section-content-narrow">
        <h2 className="section-title">Experience</h2>
        
        <div className="w-full text-left mt-8">
          {/* Loop through the JSON data */}
          {experienceData.map((item, index) => (
            <ExperienceCard 
              key={index}
              role={item.role}
              company={item.company}
              tech={item.tech}
              duration={item.duration}
              description={item.description}
              image={item.image} 
              logo={item.logo} // Added the logo prop here!
            />
          ))}
        </div>

      </div>
    </section>
  );
}