

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full p-6 rounded-lg bg-gray-950 border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <h3 className="text-xl font-mono font-bold text-gray-100 mb-3">
        <span className="text-cyan-400 mr-2">{'>'}</span>{title}
      </h3>
      <p className="text-gray-400 text-sm font-mono leading-relaxed mb-6 grow">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-[10px] font-mono tracking-widest uppercase border border-gray-700 text-cyan-400 bg-cyan-400/10">
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="mt-auto text-sm font-mono text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 decoration-dashed">
          [ VIEW PROJECT ]
        </a>
      )}
    </div>
  );
}