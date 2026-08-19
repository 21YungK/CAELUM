import NavisProject from "@/components/NavisProject";
import CaelumProject from "@/components/CaelumProject";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen border-t border-white/10 px-8 py-32 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-20">
          <p className="font-mono text-sm tracking-[0.3em] text-zinc-500">
            03 // PROJECTS
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
            BUILT TO
            <br />
            UNDERSTAND SYSTEMS.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-500">
            Selected technical projects spanning UAV telemetry, AI-assisted
            diagnostics, document intelligence, and interactive systems.
          </p>
        </div>

        <NavisProject />
        <CaelumProject />
      </div>
    </section>
  );
}