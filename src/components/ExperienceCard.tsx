
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
    <div className="relative pl-8 sm:pl-32 py-6 group">
      
      {/* The Timeline Line and Dot */}
      <div className="absolute left-0 sm:left-24 top-8 flex flex-col items-center w-px h-full bg-slate-200 dark:bg-slate-800 group-last:h-0">
        <div className="absolute -top-2 w-3 h-3 rounded-full border-2 border-teal-500 bg-white dark:bg-slate-950 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></div>
      </div>

      {/* The Content */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:gap-4">
        
        {/* Title & Logo Container */}
        <div className="flex items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            {role}
          </h3>
          
          {/* THE FIX: Increased width/height to w-14 h-14, added shadow, and tweaked padding */}
          {logo && (
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-white border border-slate-200 dark:border-slate-700 object-contain p-1.5 shrink-0 shadow-sm" 
            />
          )}
        </div>

        <span className="text-sm font-medium text-teal-600 dark:text-teal-400 shrink-0 mt-2 sm:mt-0">
          {duration}
        </span>
      </div>
      
      <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-4">
        {company}
      </h4>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((skill, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Bullet Points */}
      <ul className="space-y-2 list-none mb-4">
        {description.map((point, index) => (
          <li key={index} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex">
            <span className="text-teal-500 mr-2 mt-1">▹</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Optional Group Photo Image */}
      {image && (
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-md max-w-md">
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