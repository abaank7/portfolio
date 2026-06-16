interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  tech: string[];
  description: string[];
  image?: string;
  logo?: string; 
}

export default function ExperienceCard({ role, company, duration, tech, description, image, logo }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 sm:pl-32 py-8 group">
      
      {/* Sleek Timeline Line and Dot */}
      <div className="absolute left-0 sm:left-24 top-10 flex flex-col items-center w-px h-full bg-white/10 group-last:h-0">
        <div className="absolute -top-2 w-3 h-3 rounded-full border-[3px] border-[#050505] bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.4)]"></div>
      </div>

      {/* The Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
            {role}
          </h3>
          
          {logo && (
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-white/10 object-contain p-1.5 shrink-0 shadow-sm" 
            />
          )}
        </div>

        <span className="text-sm font-medium text-zinc-500 shrink-0 mt-2 sm:mt-0">
          {duration}
        </span>
      </div>
      
      <h4 className="text-lg font-medium text-pink-500 mb-5">
        {company}
      </h4>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((skill, index) => (
          <span 
            key={index} 
            className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-zinc-300 border border-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Standard Bullet Points (No hacker arrows) */}
      <ul className="space-y-3 list-none mb-6">
        {description.map((point, index) => (
          <li key={index} className="text-zinc-400 text-sm md:text-base leading-relaxed flex items-start">
            <span className="text-zinc-600 mr-3 mt-1 text-xs">●</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {image && (
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 shadow-xl max-w-md">
          <img 
            src={image} 
            alt={`My team at ${company}`} 
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
    </div>
  );
}