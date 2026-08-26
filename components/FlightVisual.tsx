"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type FlightVisualProps = {
  roll: number;
  pitch: number;
};

export default function FlightVisual({ roll, pitch }: FlightVisualProps) {
  // DESKTOP
  // Cursor movement

  const heading = 247 + roll * 0.35;

  // MOBILE
  // No cursor

  const [mobileRoll, setMobileRoll] = useState(0);
  const [mobilePitch, setMobilePitch] = useState(0);

  useEffect(() => {
    const states = [
      { roll: 0, pitch: 0 },
      { roll: 4.2, pitch: -2.1 },
      { roll: -3.4, pitch: 2.6 },
      { roll: 1.8, pitch: -1.2 },
    ];

    let index = 0;

    const interval = window.setInterval(() => {
      index = (index + 1) % states.length;

      setMobileRoll(states[index].roll);
      setMobilePitch(states[index].pitch);
    }, 1800);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const mobileHeading = 247 + mobileRoll * 0.35;

  return (
    <>
      {/* PC */}

      <div className="relative hidden min-h-[420px] w-full lg:block">
        <div className="absolute right-0 top-4 font-mono text-[10px] tracking-[0.22em] text-zinc-700">
          VECTOR // ACTIVE
        </div>

        <div className="absolute left-[46%] top-1/2 w-full max-w-[640px] -translate-x-1/2 -translate-y-1/2">
          <svg
            viewBox="0 0 560 360"
            className="h-auto w-full overflow-visible"
            aria-hidden="true"
          >
            {/* TRAJECTORY */}

            <motion.path
              d="M40 280 C140 250, 180 170, 270 185 C360 200, 395 105, 520 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/28"
              initial={{
                pathLength: 0,
                opacity: 0.35,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
              }}
            />

            {/* SECONDARY GUIDE */}

            <motion.path
              d="M20 140 C90 125, 120 70, 190 88 C245 102, 280 60, 340 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/20"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            />

            {/* COORDINATE LINES */}

            <line
              x1="60"
              y1="180"
              x2="500"
              y2="180"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/10"
            />

            <line
              x1="280"
              y1="50"
              x2="280"
              y2="310"
              stroke="currentColor"
              strokeWidth="1"
              className="text-white/10"
            />

            {/* MAIN CURSOR-CONTROLLED VECTOR */}

            <motion.g
              initial={{
                x: 300,
                y: 150,
              }}
              animate={{
                x: 300 + roll * 3.2,
                y: 150 - pitch * 3.8,
                rotate: roll * 0.5,
              }}
              transition={{
                duration: 0.08,
                ease: "linear",
              }}
            >
              <line
                x1="-62"
                y1="0"
                x2="-16"
                y2="0"
                stroke="currentColor"
                className="text-white/90"
              />

              <line
                x1="16"
                y1="0"
                x2="62"
                y2="0"
                stroke="currentColor"
                className="text-white/90"
              />

              <rect
                x="-9"
                y="-9"
                width="18"
                height="18"
                transform="rotate(45)"
                fill="none"
                stroke="currentColor"
                className="text-white"
              />

              <line
                x1="0"
                y1="18"
                x2="24"
                y2="50"
                stroke="currentColor"
                className="text-white/35"
              />
            </motion.g>

            {/* WAYPOINT */}

            <circle
              cx="385"
              cy="110"
              r="4"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
            />

            <circle
              cx="385"
              cy="110"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeDasharray="2 5"
              className="text-white/10"
            />

            {/* LABELS */}

            <text
              x="395"
              y="105"
              className="fill-zinc-600 font-mono text-[9px] tracking-[0.2em]"
            >
              WP // 02
            </text>

            <text
              x="250"
              y="166"
              className="fill-zinc-700 font-mono text-[9px] tracking-[0.2em]"
            >
              VECTOR 001
            </text>
          </svg>

          {/* PC */}

          <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[10px] tracking-[0.18em]">
            <div>
              <p className="text-zinc-700">ROLL</p>

              <p className="mt-1 text-zinc-300">
                {roll >= 0 ? "+" : ""}
                {roll.toFixed(1)}°
              </p>
            </div>

            <div>
              <p className="text-zinc-700">PITCH</p>

              <p className="mt-1 text-zinc-300">
                {pitch >= 0 ? "+" : ""}
                {pitch.toFixed(1)}°
              </p>
            </div>

            <div>
              <p className="text-zinc-700">HEADING</p>

              <p className="mt-1 text-zinc-300">{heading.toFixed(0)}°</p>
            </div>

            <div className="text-right">
              <p className="text-zinc-700">STATUS</p>

              <p className="mt-1 text-zinc-300">TRACKING</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone / tablet */}
      <div className="mt-12 block lg:hidden">
        <div className="border-t border-white/10 pt-6">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.2em]">
            <span className="text-zinc-700">FLIGHT VECTOR // MOBILE</span>
            <span className="text-zinc-600">ACTIVE</span>
          </div>

          <div className="relative mx-auto mt-8 h-52 w-full max-w-sm">
            <svg
              viewBox="0 0 360 210"
              className="h-full w-full"
              aria-hidden="true"
            >
              {/* ANIMATED TRAJECTORY */}
              <motion.path
                d="M20 155 C90 135, 120 82, 190 96 C245 108, 280 68, 340 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white/25"
                animate={{
                  d: [
                    "M20 155 C90 135, 120 82, 190 96 C245 108, 280 68, 340 48",
                    "M20 150 C85 142, 125 72, 190 92 C250 110, 285 58, 340 52",
                    "M20 160 C95 132, 130 90, 195 104 C250 116, 292 76, 340 44",
                    "M20 155 C90 135, 120 82, 190 96 C245 108, 280 68, 340 48",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CENTER GUIDE */}
              <line
                x1="40"
                y1="105"
                x2="320"
                y2="105"
                stroke="currentColor"
                strokeWidth="1"
                className="text-white/10"
              />

              {/* MOVING VECTOR */}
              <motion.g
                animate={{
                  x: 200 + mobileRoll * 3.4,
                  y: 92 - mobilePitch * 3.8,
                  rotate: mobileRoll * 0.8,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {/* TRAIL */}
                <line
                  x1="-48"
                  y1="0"
                  x2="-14"
                  y2="0"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  className="text-white/25"
                />

                <line
                  x1="12"
                  y1="0"
                  x2="42"
                  y2="0"
                  stroke="currentColor"
                  className="text-white/70"
                />

                <rect
                  x="-7"
                  y="-7"
                  width="14"
                  height="14"
                  transform="rotate(45)"
                  fill="none"
                  stroke="currentColor"
                  className="text-white"
                />
              </motion.g>

              {/* WAYPOINT */}
              <motion.circle
                cx="285"
                cy="66"
                r="4"
                fill="none"
                stroke="currentColor"
                className="text-white/60"
                animate={{
                  r: [4, 7, 4],
                  opacity: [0.85, 0.25, 0.85],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <circle
                cx="285"
                cy="66"
                r="11"
                fill="none"
                stroke="currentColor"
                strokeDasharray="2 4"
                className="text-white/10"
              />

              <text
                x="298"
                y="61"
                className="fill-zinc-700 font-mono text-[7px] tracking-[0.18em]"
              >
                WP // 02
              </text>
            </svg>
          </div>

          {/* MOBILE TELEMETRY */}
          <div className="mt-6 grid grid-cols-3 gap-4 border-t border-white/10 pb-8 pt-5 font-mono text-[10px] tracking-[0.15em]">
            <div>
              <p className="text-zinc-700">ROLL</p>

              <p className="mt-1 text-zinc-400">
                {mobileRoll >= 0 ? "+" : ""}
                {mobileRoll.toFixed(1)}°
              </p>
            </div>

            <div>
              <p className="text-zinc-700">PITCH</p>

              <p className="mt-1 text-zinc-400">
                {mobilePitch >= 0 ? "+" : ""}
                {mobilePitch.toFixed(1)}°
              </p>
            </div>

            <div className="text-right">
              <p className="text-zinc-700">HEADING</p>

              <p className="mt-1 text-zinc-400">{mobileHeading.toFixed(0)}°</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
