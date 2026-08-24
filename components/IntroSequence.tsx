"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import DroneScene from "@/components/DroneScene";

type IntroSequenceProps = {
  onComplete: () => void;
};

export default function IntroSequence({
  onComplete,
}: IntroSequenceProps) {
  const [phase, setPhase] = useState<
    "boot" | "aircraft" | "ready" | "exit"
  >("boot");

  const completedRef = useRef(false);

  const aircraftTimerRef = useRef<number | null>(null);
  const readyTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const completeTimerRef = useRef<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const clearIntroTimers = () => {
    if (aircraftTimerRef.current !== null) {
      window.clearTimeout(aircraftTimerRef.current);
    }

    if (readyTimerRef.current !== null) {
      window.clearTimeout(readyTimerRef.current);
    }

    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
    }

    if (completeTimerRef.current !== null) {
      window.clearTimeout(completeTimerRef.current);
    }
  };

  const finishIntro = () => {
    if (completedRef.current) return;

    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    aircraftTimerRef.current = window.setTimeout(() => {
      setPhase("aircraft");
    }, 1000);

    readyTimerRef.current = window.setTimeout(() => {
      setPhase("ready");
    }, 8000);

    exitTimerRef.current = window.setTimeout(() => {
      setPhase("exit");
    }, 13000);

    completeTimerRef.current = window.setTimeout(() => {
      finishIntro();
    }, 14000);

    return () => {
      clearIntroTimers();
    };
  }, []);

  const handleDroneLaunch = () => {
  if (completedRef.current) return;

  clearIntroTimers();
  setIsLaunching(true);

  // More time to fly 
  window.setTimeout(() => {
    setPhase("exit");
  }, 750);

  // Reveal homepage after the exit fade
  window.setTimeout(() => {
    finishIntro();
  }, 1450);
};

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

          <div className="absolute left-6 top-6 font-mono text-[9px] tracking-[0.25em] text-zinc-700 md:left-10 md:top-8 md:text-[10px]">
            CAELUM // FLIGHT INTERFACE
          </div>

          <div className="absolute right-6 top-6 text-right font-mono text-[9px] tracking-[0.25em] text-zinc-700 md:right-10 md:top-8 md:text-[10px]">
            UAV SYSTEM ONLINE
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
              className="relative mx-auto h-[76vh] w-screen md:h-[70vh] md:w-[90vw]"
            >
              <DroneScene
                onLaunch={handleDroneLaunch}
                onInteractionStart={() => setIsInteracting(true)}
                onInteractionEnd={() => setIsInteracting(false)}
                />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity:
                    isLaunching
                        ? 1
                        : phase === "aircraft" || phase === "ready"
                        ? isInteracting
                        ? 0.25
                        : 1
                        : 0,
                y:
                  phase === "aircraft" || phase === "ready"
                    ? 0
                    : 8,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute -bottom-10 text-center"
            >
              <p className="font-mono text-[10px] tracking-[0.24em] text-zinc-600">
                {isLaunching
                ? "LAUNCH COMMAND ACCEPTED"
                : "DRAG // SPIN TO LAUNCH"}
                </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: phase === "ready" ? 1 : 0,
                y: phase === "ready" ? 0 : 8,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-2 text-center"
            >
              <p className="font-mono text-[11px] tracking-[0.28em] text-zinc-500 md:text-[12px]">
                FLIGHT SYSTEM
              </p>

              <p className="mt-2 font-mono text-[14px] tracking-[0.22em] text-zinc-200 md:text-[16px]">
                READY
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}