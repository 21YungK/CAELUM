"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type IntroSequenceProps = {
  onComplete: () => void;
};

export default function IntroSequence({
  onComplete,
}: IntroSequenceProps) {
  const [phase, setPhase] = useState<
    "boot" | "aircraft" | "ready" | "exit"
  >("boot");

  useEffect(() => {
    const aircraftTimer = window.setTimeout(() => {
      setPhase("aircraft");
    }, 700);

    const readyTimer = window.setTimeout(() => {
      setPhase("ready");
    }, 1800);

    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
    }, 2800);

    const completeTimer = window.setTimeout(() => {
      onComplete();
    }, 3400);

    return () => {
      window.clearTimeout(aircraftTimer);
      window.clearTimeout(readyTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
          {/* TOP */}
          <div className="absolute left-8 right-8 top-8 flex items-center justify-between font-mono text-[9px] tracking-[0.22em] text-zinc-700 md:left-12 md:right-12">
            <span>CAELUM // SYSTEM</span>

            <span>
              {phase === "boot"
                ? "INITIALIZING"
                : phase === "aircraft"
                  ? "AIRCRAFT DETECTED"
                  : "SYSTEM READY"}
            </span>
          </div>

          {/* CENTER */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: phase === "boot" ? 0.25 : 1,
                scale: phase === "boot" ? 0.9 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96"
            >
              {/* temporary placeholder for some type of drone lol */}

              <div className="absolute h-px w-full bg-white/10" />
              <div className="absolute h-full w-px bg-white/10" />

              <div className="absolute h-40 w-40 rounded-full border border-white/10 md:h-52 md:w-52" />

              <div className="absolute h-56 w-56 rounded-full border border-dashed border-white/5 md:h-72 md:w-72" />

              <motion.div
                animate={{
                  rotate: phase === "ready" ? 45 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-7 w-7 border border-white/80"
              />
            </motion.div>

            <motion.div
              animate={{
                opacity: phase === "ready" ? 1 : 0,
                y: phase === "ready" ? 0 : 8,
              }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-4 text-center"
            >
              <p className="font-mono text-[9px] tracking-[0.3em] text-zinc-700">
                FLIGHT SYSTEM
              </p>

              <p className="mt-2 font-mono text-xs tracking-[0.25em] text-zinc-300">
                READY
              </p>
            </motion.div>
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between font-mono text-[9px] tracking-[0.2em] text-zinc-800 md:left-12 md:right-12">
            <span>SYS // 001</span>
            <span>AUTONOMOUS FLIGHT INTERFACE</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}