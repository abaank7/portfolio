interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <div className="group flex flex-col h-full p-8 rounded-4xl bg-[#101012] border border-white/10 hover:border-pink-500/30 hover:bg-[#151518] transition-all duration-300 relative overflow-hidden shadow-xl hover:shadow-[0_10px_30px_-15px_rgba(236,72,153,0.2)]">
      
      <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-pink-500 group-hover:to-violet-500 transition-all">
        {title}
      </h3>
      
      <p className="text-zinc-400 text-sm leading-relaxed mb-6 grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-[11px] font-medium rounded-full border border-white/10 text-zinc-300 bg-white/5">
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="mt-auto text-sm font-medium text-zinc-300 hover:text-white flex items-center gap-2 w-fit transition-colors"
        >
          View Project 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      )}
    </div>
  );
}