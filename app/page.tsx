"use client";

import { useState } from "react";
import FlightTelemetry from "@/components/FlightTelemetry";

export default function Home() {
  const [roll, setRoll] = useState(0);
  const [pitch, setPitch] = useState(0);

  function handleHeroMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    setRoll((x - 0.5) * 50);
    setPitch((0.5 - y) * 30);
  }

  function resetHeroTelemetry() {
    setRoll(0);
    setPitch(0);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section
  id="home"
  onMouseMove={handleHeroMouseMove}
  onMouseLeave={resetHeroTelemetry}
  className="min-h-screen px-8 pt-28 md:px-16 lg:px-24"
>
        <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/70 px-8 py-6 backdrop-blur-md md:px-16 lg:px-24">
          <a
  href="#home"
  className="font-mono text-sm tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
>
  CAELUM
</a>

          <div className="hidden gap-8 font-mono text-xs tracking-widest text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              01 ABOUT
            </a>

            <a href="#experience" className="transition hover:text-white">
              02 EXPERIENCE
            </a>

            <a href="#projects" className="transition hover:text-white">
              03 PROJECTS
            </a>

            <a href="#contact" className="transition hover:text-white">
              04 CONTACT
            </a>
          </div>
        </nav>

        <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
  <div className="max-w-5xl">
    <p className="mb-6 font-mono text-sm tracking-[0.3em] text-zinc-500">
      SOFTWARE // FLIGHT // SYSTEMS
    </p>

    <h1 className="text-6xl font-semibold tracking-tight md:text-8xl lg:text-9xl">
      KYUNGJIN PARK
    </h1>

    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm tracking-wider text-zinc-400">
      <span>SOFTWARE VALIDATION</span>
      <span>UAV SYSTEMS</span>
      <span>AUTOMATION</span>
    </div>

    <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
      Building and validating systems at the intersection of software,
      automation, and autonomous flight.
    </p>
  </div>

  <div className="hidden lg:flex lg:justify-end">
    <FlightTelemetry roll={roll} pitch={pitch} />
  </div>
</div>
      </section>
      <section
        id="about"
        className="flex min-h-screen items-center border-t border-white/10 px-8 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          
          <div>
            <p className="font-mono text-sm tracking-[0.3em] text-zinc-500">
              01 // ABOUT
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              BUILT AROUND
              <br />
              CURIOSITY.
            </h2>
          </div>

          <div className="flex items-center">
            <div className="max-w-xl">
              <p className="text-xl leading-9 text-zinc-300">
                I&apos;m a technologist interested in the intersection of
                software, autonomous systems, and the physical world.
              </p>

              <p className="mt-6 leading-8 text-zinc-500">
                My experience spans UAV systems, software and hardware
                validation, robotics, and hands-on technical operations. I
                enjoy understanding how complex systems behave, finding where
                they fail, and building tools that make those systems easier
                to understand.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section
        id="experience"
        className="min-h-screen border-t border-white/10 px-8 py-32 md:px-16 lg:px-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-20">
            <p className="font-mono text-sm tracking-[0.3em] text-zinc-500">
              02 // EXPERIENCE
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              FROM SYSTEMS
              <br />
              TO FLIGHT.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-500">
              A path through communications, technical systems, UAVs, robotics,
              and autonomous aircraft.
              </p>
          </div>

          <div className="border-t border-white/10">

  {/* SKYDIO */}
  <div className="group grid gap-6 border-b border-white/10 py-10 transition-all duration-300 hover:border-white/25 hover:pl-3 md:grid-cols-[120px_1fr_1fr]">
    <p className="font-mono text-sm text-zinc-600">
      2026 — NOW
    </p>

    <div>
      <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-white">
        SKYDIO
      </h3>

      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
        UAV SYSTEMS // PRODUCTION
      </p>
    </div>

    <div>
      <p className="text-zinc-300">
        Drone Assembly Technician
      </p>

      <p className="mt-3 max-w-md leading-7 text-zinc-600 transition-colors group-hover:text-zinc-400">
        Supporting the production of autonomous aircraft through hands-on
        assembly, technical operations, and system-level troubleshooting.
      </p>
    </div>
  </div>


  {/* STEALTH ROBOTICS */}
  <div className="group grid gap-6 border-b border-white/10 py-10 transition-all duration-300 hover:border-white/25 hover:pl-3 md:grid-cols-[120px_1fr_1fr]">
    <p className="font-mono text-sm text-zinc-600">
      2026
    </p>

    <div>
      <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-white">
        STEALTH ROBOTICS
      </h3>

      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
        ROBOTICS // AI // VALIDATION
      </p>
    </div>

    <div>
      <p className="text-zinc-300">
        R&D Operator
      </p>

      <p className="mt-3 max-w-md leading-7 text-zinc-600 transition-colors group-hover:text-zinc-400">
        Executed structured system validation, generated labeled ML data,
        documented failures, and worked with engineers to support debugging
        and product iteration.
      </p>
    </div>
  </div>


  {/* UAVS @ UCI */}
  <div className="group grid gap-6 border-b border-white/10 py-10 transition-all duration-300 hover:border-white/25 hover:pl-3 md:grid-cols-[120px_1fr_1fr]">
    <p className="font-mono text-sm text-zinc-600">
      2024 — 2025
    </p>

    <div>
      <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-white">
        UAVs @ UCI
      </h3>

      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
        UAV ENGINEERING // LEADERSHIP
      </p>
    </div>

    <div>
      <p className="text-zinc-300">
        Vice President
      </p>

      <p className="mt-3 max-w-md leading-7 text-zinc-600 transition-colors group-hover:text-zinc-400">
        Led 15+ UAV teams, hosted 20+ technical workshops, and coordinated
        60+ outdoor flight sessions covering builds, programming, flight
        readiness, and safety.
      </p>
    </div>
  </div>


  {/* UCI LAW */}
  <div className="group grid gap-6 border-b border-white/10 py-10 transition-all duration-300 hover:border-white/25 hover:pl-3 md:grid-cols-[120px_1fr_1fr]">
    <p className="font-mono text-sm text-zinc-600">
      2024 — 2025
    </p>

    <div>
      <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-white">
        UCI SCHOOL OF LAW
      </h3>

      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
        IT // TECHNICAL SYSTEMS
      </p>
    </div>

    <div>
      <p className="text-zinc-300">
        Student IT Technical Assistant
      </p>

      <p className="mt-3 max-w-md leading-7 text-zinc-600 transition-colors group-hover:text-zinc-400">
        Supported 500+ users and maintained technology across 15+ hybrid
        learning environments, including high-stakes technical support for
        the California Bar Exam.
      </p>
    </div>
  </div>


  {/* ROK ARMY */}
  <div className="group grid gap-6 border-b border-white/10 py-10 transition-all duration-300 hover:border-white/25 hover:pl-3 md:grid-cols-[120px_1fr_1fr]">
    <p className="font-mono text-sm text-zinc-600">
      2020 — 2022
    </p>

    <div>
      <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-white">
        ROK ARMY
      </h3>

      <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
        COMMUNICATIONS // FIELD SYSTEMS
      </p>
    </div>

    <div>
      <p className="text-zinc-300">
        Radio Operations · 9th Infantry Division
      </p>

      <p className="mt-3 max-w-md leading-7 text-zinc-600 transition-colors group-hover:text-zinc-400">
        Operated and maintained field communication systems, diagnosing
        radio, signal, and antenna issues in time-sensitive environments.
      </p>
    </div>
  </div>

        </div>
        </div>
      </section>
    </main>
  );
}