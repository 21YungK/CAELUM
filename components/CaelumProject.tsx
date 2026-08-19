export default function CaelumProject() {
  return (
    <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-zinc-600">
          PROJECT // 002
        </p>

        <h3 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          CAELUM
        </h3>

        <p className="mt-4 font-mono text-xs tracking-[0.2em] text-zinc-500">
          WEB DEVELOPMENT // INTERACTION // DESIGN
        </p>

        <p className="mt-8 max-w-lg leading-8 text-zinc-400">
          An interactive portfolio built to present technical work through
          responsive interfaces, system-inspired visuals, and purposeful
          motion.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND"].map((tag) => (
            <span
              key={tag}
              className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="group relative min-h-[320px] overflow-hidden border border-white/10 p-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 transition-opacity duration-500 group-hover:opacity-70" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between font-mono">
            <span className="text-xs tracking-[0.25em] text-zinc-500">
              CAELUM // INTERFACE
            </span>

            <span className="text-[10px] tracking-[0.2em] text-zinc-700">
              ONLINE
            </span>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-zinc-600">
              SOFTWARE // FLIGHT // SYSTEMS
            </p>

            <p className="mt-4 text-3xl font-semibold tracking-tight text-zinc-200">
              BUILT AS A SYSTEM.
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Component-driven architecture with interactive telemetry,
              expandable experience data, and project-specific interfaces.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.15em] text-zinc-600">
            <span>NEXT.JS / REACT</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}