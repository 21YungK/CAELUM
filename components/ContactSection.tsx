import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center border-t border-white/10 px-8 py-32 md:px-16 lg:px-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-sm tracking-[0.3em] text-zinc-500">
          04 // CONTACT
        </p>

        <div className="mt-10 grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <Reveal>
            <div>
              <h2 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
                LET&apos;S BUILD
                <br />
                SOMETHING.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-500">
                Interested in software, autonomous systems, UAVs, robotics,
                and the tools that connect them.
              </p>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal delay={0.12}>
            <div className="flex flex-col justify-end">
              <p className="mb-5 font-mono text-[10px] tracking-[0.25em] text-zinc-700">
                CONNECT // 001
              </p>

              <div className="border-t border-white/10">
                <a
                  href="mailto:kyungp3@uci.edu"
                  className="group flex items-center justify-between border-b border-white/10 py-6 transition-all duration-300 hover:pl-3"
                >
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
                      EMAIL
                    </p>

                    <p className="mt-2 text-lg text-zinc-300 transition-colors group-hover:text-white">
                      KYUNGP3@UCI.EDU
                    </p>
                  </div>

                  <span className="font-mono text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/kyungjin-p-457756132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-6 transition-all duration-300 hover:pl-3"
                >
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
                      LINKEDIN
                    </p>

                    <p className="mt-2 text-lg text-zinc-300 transition-colors group-hover:text-white">
                      DREW KYUNGJIN PARK
                    </p>
                  </div>

                  <span className="font-mono text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </a>

                <a
                  href="https://github.com/21YungK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-6 transition-all duration-300 hover:pl-3"
                >
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">
                      GITHUB
                    </p>

                    <p className="mt-2 text-lg text-zinc-300 transition-colors group-hover:text-white">
                      21YUNGK
                    </p>
                  </div>

                  <span className="font-mono text-zinc-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* FOOTER */}
        <Reveal delay={0.18}>
          <div className="mt-32 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-[10px] tracking-[0.2em] text-zinc-700 md:flex-row md:items-center md:justify-between">
            <p>DREW KYUNGJIN PARK</p>

            <p>BERKELEY, CA // 2026</p>

            <a
              href="#home"
              className="transition-colors hover:text-white"
            >
              RETURN TO TOP ↑
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}