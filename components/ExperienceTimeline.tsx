"use client";

import { useState } from "react";

const experiences = [
  {
    period: "2026 — NOW",
    company: "SKYDIO",
    category: "UAV SYSTEMS // PRODUCTION",
    role: "Drone Assembly Technician",
    summary:
      "Supporting the production of autonomous aircraft through hands-on assembly, technical operations, and system-level troubleshooting.",
    details: [
      "Hands-on assembly and integration of autonomous aircraft systems.",
      "Perform production troubleshooting and identify hardware or process issues.",
      "Work within structured manufacturing and quality workflows.",
    ],
    tags: ["UAV SYSTEMS", "HARDWARE", "PRODUCTION", "TROUBLESHOOTING"],
  },
  {
    period: "2026",
    company: "STEALTH ROBOTICS",
    category: "ROBOTICS // AI // VALIDATION",
    role: "R&D Operator",
    summary:
      "Executed structured system validation, generated labeled ML data, documented failures, and worked with engineers to support debugging and product iteration.",
    details: [
      "Executed structured hardware and software validation tests.",
      "Generated labeled datasets used for machine-learning development.",
      "Documented system behavior and failures to support engineering debugging.",
      "Worked cross-functionally with engineers during system iteration.",
    ],
    tags: ["ROBOTICS", "VALIDATION", "ML DATA", "HW / SW"],
  },
  {
    period: "2024 — 2025",
    company: "UAVs @ UCI",
    category: "UAV ENGINEERING // LEADERSHIP",
    role: "Vice President",
    summary:
      "Led UAV teams, technical workshops, and outdoor flight operations covering builds, programming, readiness, and safety.",
    details: [
      "Mentored 10+ UAV teams through aircraft builds and flight preparation.",
      "Led 20+ soldering and programming workshops.",
      "Coordinated 60+ outdoor flight sessions with safety and readiness checks.",
      "Expanded team build capacity through component planning and budget allocation.",
    ],
    tags: ["UAV", "FLIGHT OPS", "SOLDERING", "LEADERSHIP"],
  },
  {
    period: "2024 — 2025",
    company: "UCI SCHOOL OF LAW",
    category: "IT // TECHNICAL SYSTEMS",
    role: "Student IT Technical Assistant",
    summary:
      "Supported 500+ users and maintained technology across hybrid learning environments and high-stakes technical events.",
    details: [
      "Provided technical support for 500+ faculty, staff, and students.",
      "Maintained 15+ hybrid classrooms supporting courses and events.",
      "Troubleshot hardware, software, conferencing, network, and authentication issues.",
      "Delivered technical support for 140+ California Bar Exam examinees.",
    ],
    tags: ["IT SYSTEMS", "A/V", "SUPPORT", "OPERATIONS"],
  },
  {
    period: "2020 — 2022",
    company: "ROK ARMY",
    category: "COMMUNICATIONS // FIELD SYSTEMS",
    role: "Radio Operations · 9th Infantry Division",
    summary:
      "Operated and maintained field communication systems while diagnosing radio, signal, and antenna issues in time-sensitive environments.",
    details: [
      "Operated and maintained secure field radio communication systems.",
      "Diagnosed signal, antenna, and equipment issues during field operations.",
      "Supported reliable communications in time-sensitive environments.",
      "Recognized as an Elite Warrior for performance across technical and physical evaluations.",
    ],
    tags: ["RADIO", "RF SYSTEMS", "FIELD OPS", "TROUBLESHOOTING"],
  },
];

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleExperience(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="relative">

      {/* Vertical timeline */}
      <div className="absolute bottom-0 left-[126px] top-0 hidden w-px bg-white/10 md:block" />

      {experiences.map((experience, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={`${experience.company}-${experience.period}`}
            className="group relative border-b border-white/10 transition-colors duration-300 hover:border-white/25"
          >
            {/* Timeline point */}
            <div className="absolute left-[121px] top-[46px] z-10 hidden h-[11px] w-[11px] rounded-full border border-zinc-600 bg-black transition-all duration-300 group-hover:border-white md:block">
              <div
                className={`absolute inset-[3px] rounded-full transition-opacity duration-300 ${
                  isOpen ? "bg-white opacity-100" : "bg-white opacity-0"
                }`}
              />
            </div>

            <button
              type="button"
              onClick={() => toggleExperience(index)}
              aria-expanded={isOpen}
              className="grid w-full cursor-pointer gap-6 py-10 text-left transition-all duration-300 hover:pl-3 md:grid-cols-[120px_1fr_1fr_40px]"
            >
              <p className="font-mono text-sm text-zinc-600">
                {experience.period}
              </p>

              <div>
                <h3 className="text-2xl font-medium tracking-tight text-zinc-200 transition-colors group-hover:text-white">
                  {experience.company}
                </h3>

                <p className="mt-2 font-mono text-xs tracking-[0.2em] text-zinc-500">
                  {experience.category}
                </p>
              </div>

              <div>
                <p className="text-zinc-300">
                  {experience.role}
                </p>

                <p className="mt-3 max-w-md leading-7 text-zinc-600 transition-colors group-hover:text-zinc-400">
                  {experience.summary}
                </p>
              </div>

              <div className="flex items-start justify-end font-mono text-lg text-zinc-600 transition-colors group-hover:text-white">
                <span
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
            </button>

            <div
              className={`grid overflow-hidden transition-all duration-500 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <div className="pb-10 md:ml-[144px]">
                  <div className="border-l border-white/10 pl-6 md:pl-8">
                    <p className="mb-5 font-mono text-xs tracking-[0.25em] text-zinc-600">
                      FIELD NOTES
                    </p>

                    <div className="space-y-3">
                      {experience.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex max-w-2xl gap-4 text-sm leading-6 text-zinc-400"
                        >
                          <span className="font-mono text-zinc-700">—</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}