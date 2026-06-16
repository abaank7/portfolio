export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-10 relative z-10 max-w-5xl mx-auto w-full"
    >
      {/* Upgraded Professional Status Badge */}
     
<br />
      {/* Main Headline */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-8">
        Building{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-500">
          Autonomous
        </span>
        <br className="hidden sm:block" /> Systems & Intelligence
      </h1>

      <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
        I specialize in bridging the gap between scalable backend architectures and intelligent machine learning pipelines.
      </p>

      {/* Sleek Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-12 text-left">
        <div className="bg-[#101012] border border-white/10 rounded-2xl p-5 shadow-lg">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Role</p>
          <p className="text-sm text-zinc-200 font-medium">Full-Stack AI Engineer</p>
        </div>
        <div className="bg-[#101012] border border-white/10 rounded-2xl p-5 shadow-lg">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Core Focus</p>
          <p className="text-sm text-zinc-200 font-medium">Web Infra & ML Pipelines</p>
        </div>
        <div className="bg-[#101012] border border-white/10 rounded-2xl p-5 shadow-lg">
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Top Stack</p>
          <p className="text-sm text-zinc-200 font-medium">React, Django, PyTorch</p>
        </div>
      </div>
    </section>
  );
}