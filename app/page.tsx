"use client";

import { useEffect, useState } from "react";
import FlightVisual from "@/components/FlightVisual";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import IntroSequence from "@/components/IntroSequence";

export default function Home() {
  const [roll, setRoll] = useState(0);
  const [pitch, setPitch] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

    const fullName = "DREW KYUNGJIN PARK";
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
      if (!introComplete) {
        setDisplayName("");
        return;
      }

      let index = 0;

      const typingInterval = window.setInterval(() => {
        index += 1;
        setDisplayName(fullName.slice(0, index));

        if (index >= fullName.length) {
          window.clearInterval(typingInterval);
        }
      }, 65);

      return () => window.clearInterval(typingInterval);
    }, [introComplete]);
    
    useEffect(() => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, []);

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
    {!introComplete && (
      <IntroSequence
        onComplete={() => setIntroComplete(true)}
      />
    )}

    <section
  id="home"
  onMouseMove={handleHeroMouseMove}
  onMouseLeave={resetHeroTelemetry}
  className="min-h-screen px-8 pt-28 md:px-16 lg:px-24"
>
<nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
  <div className="flex h-[72px] items-center justify-between px-8 md:px-16 lg:px-24">
    <a
      href="#home"
      onClick={() => setMobileMenuOpen(false)}
      className="font-mono text-sm tracking-[0.3em] text-zinc-500 transition-colors hover:text-white"
    >
      CAELUM
    </a>

    {/* DESKTOP NAV */}
    <div className="hidden items-center gap-8 font-mono text-xs tracking-widest text-zinc-400 md:flex">
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

    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      onClick={() => setMobileMenuOpen((current) => !current)}
      aria-expanded={mobileMenuOpen}
      aria-label="Toggle navigation"
      className="flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-zinc-400 md:hidden"
    >
      <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>

      <span className="relative block h-4 w-5">
        <span
          className={`absolute left-0 top-[5px] h-px w-5 bg-current transition-transform duration-300 ${
            mobileMenuOpen ? "translate-y-[3px] rotate-45" : ""
          }`}
        />

        <span
          className={`absolute bottom-[5px] left-0 h-px w-5 bg-current transition-transform duration-300 ${
            mobileMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  </div>
</nav>
{/* MOBILE NAVIGATION */}
<div
  className={`fixed inset-0 z-40 bg-black transition-all duration-500 md:hidden ${
    mobileMenuOpen
      ? "visible opacity-100"
      : "invisible pointer-events-none opacity-0"
  }`}
>
  <div className="flex min-h-screen flex-col px-8 pb-10 pt-28">
    <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-700">
      NAVIGATION // CAELUM
    </div>

    <div className="mt-12">
      {[
        ["01", "ABOUT", "#about"],
        ["02", "EXPERIENCE", "#experience"],
        ["03", "PROJECTS", "#projects"],
        ["04", "CONTACT", "#contact"],
      ].map(([number, label, href]) => (
        <a
          key={href}
          href={href}
          onClick={() => setMobileMenuOpen(false)}
          className="group flex items-center justify-between border-t border-white/10 py-7"
        >
          <div className="flex items-baseline gap-5">
            <span className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
              {number}
            </span>

            <span className="text-3xl font-medium tracking-tight text-zinc-300 transition-colors group-hover:text-white">
              {label}
            </span>
          </div>

          <span className="text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-white">
            ↗
          </span>
        </a>
      ))}

      <div className="border-t border-white/10" />
    </div>

    <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-6 font-mono text-[9px] tracking-[0.18em] text-zinc-700">
      <span>
        DREW KYUNGJIN PARK
      </span>

      <span>
        PORTFOLIO // 2026
      </span>
    </div>
  </div>
</div>

      <div className="grid min-h-[calc(100vh-80px)] items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="max-w-5xl">
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6 font-mono text-sm tracking-[0.3em] text-zinc-500"
    > 
      SOFTWARE // FLIGHT // SYSTEMS
    </motion.p>

    <h1 className="min-h-[1.1em] text-6xl font-semibold tracking-tight md:text-8xl lg:text-9xl">
      {displayName}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 0.8,
          repeat: displayName === fullName ? 2 : Infinity,
        }}
        className="relative -top-[0.08em] ml-2 inline-block h-[0.78em] w-[2px] bg-white align-middle"
      />
    </h1>

  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm tracking-wider text-zinc-400">
    <span>AUTONOMOUS SYSTEMS</span>
    <span>UAVs</span>
    <span>ROBOTICS</span>
  </div>

    <p className="mt-10 max-w-xl text-lg leading-8 text-zinc-400">
      Building and validating systems at the intersection of software,
      automation, and autonomous flight.
    </p>
  </div>

  <div className="w-full lg:flex lg:justify-end">
    <FlightVisual roll={roll} pitch={pitch} />
  </div>
</div>
      </section>
      <section
        id="about"
        className="flex min-h-screen items-center border-t border-white/10 px-8 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          
          <Reveal>
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
          </Reveal>
        <Reveal delay={0.12}>
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
              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs tracking-[0.25em] text-zinc-600">
                    EDUCATION // 001
                  </p>

                  <p className="font-mono text-xs tracking-[0.2em] text-zinc-700">
                    MAR 2025
                  </p>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-medium tracking-tight text-zinc-200">
                    UNIVERSITY OF CALIFORNIA, IRVINE
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    B.S. Informatics
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Human-Computer Interaction · Minor in Management
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
                      GPA
                    </p>

                    <p className="mt-2 font-mono text-sm text-zinc-400">
                      3.6 / 4.0
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-700">
                      FOCUS
                    </p>

                    <p className="mt-2 font-mono text-sm text-zinc-400">
                      HCI // SOFTWARE // SYSTEMS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        </div>
      </section>
      <section
        id="experience"
        className="min-h-screen border-t border-white/10 px-8 py-32 md:px-16 lg:px-24"
      >
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
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
          </Reveal>

          <ExperienceTimeline />

        </div>
      </section>
      <ProjectsSection />
      <ContactSection />

    </main>
  );
}