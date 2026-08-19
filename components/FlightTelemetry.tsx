"use client";

import { useEffect, useState } from "react";

type FlightTelemetryProps = {
  roll: number;
  pitch: number;
};

export default function FlightTelemetry({
  roll,
  pitch,
}: FlightTelemetryProps) {
  const [yaw, setYaw] = useState(247.8);
  const [altitude, setAltitude] = useState(124.2);
  const [velocity, setVelocity] = useState(8.4);

useEffect(() => {
  const startTime = performance.now();

  const interval = window.setInterval(() => {
    const elapsed = (performance.now() - startTime) / 1000;

    setYaw(247.8 + Math.sin(elapsed * 0.18) * 4);
    setAltitude(124.2 + Math.sin(elapsed * 0.35) * 1.8);
    setVelocity(8.4 + Math.sin(elapsed * 0.5) * 0.6);
  }, 100);

  return () => window.clearInterval(interval);
}, []);

  return (
    <div className="w-full max-w-sm border border-white/10 p-6 font-mono">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-xs tracking-[0.25em] text-zinc-500">
          FLIGHT // 001
        </span>

        <span className="text-xs text-zinc-600">LIVE</span>
      </div>

<div className="flex h-48 items-center justify-center">
  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/20">

    {/* Moving attitude layer */}
    <div
      className="absolute inset-[-50%] transition-transform duration-75 ease-out"
      style={{
        transform: `translateY(${pitch * 1.8}px) rotate(${roll}deg)`,
      }}
    >
      {/* Horizon */}
      <div className="absolute left-0 top-1/2 w-full border-t border-white/70" />

      {/* Pitch ladder */}
      <div className="absolute left-1/2 top-[35%] w-10 -translate-x-1/2 border-t border-zinc-600" />
      <div className="absolute left-1/2 top-[42%] w-6 -translate-x-1/2 border-t border-zinc-700" />

      <div className="absolute left-1/2 top-[58%] w-6 -translate-x-1/2 border-t border-zinc-700" />
      <div className="absolute left-1/2 top-[65%] w-10 -translate-x-1/2 border-t border-zinc-600" />
    </div>

    {/* Fixed aircraft reference */}
    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-8 w-20">
        <div className="absolute left-0 top-1/2 h-px w-7 bg-white" />
        <div className="absolute right-0 top-1/2 h-px w-7 bg-white" />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white" />
      </div>
    </div>

    {/* Fixed center markers */}
    <div className="absolute left-1/2 top-2 h-2 w-px -translate-x-1/2 bg-zinc-500" />
    <div className="absolute bottom-2 left-1/2 h-2 w-px -translate-x-1/2 bg-zinc-500" />
    <div className="absolute left-2 top-1/2 h-px w-2 -translate-y-1/2 bg-zinc-500" />
    <div className="absolute right-2 top-1/2 h-px w-2 -translate-y-1/2 bg-zinc-500" />

  </div>
</div>

      <div className="space-y-5 border-t border-white/10 pt-6 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-600">ROLL</span>
          <span className="text-zinc-300">{roll.toFixed(1)}°</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-600">PITCH</span>
          <span className="text-zinc-300">{pitch.toFixed(1)}°</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-600">YAW</span>
          <span className="text-zinc-300">{yaw.toFixed(1)}°</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-600">ALTITUDE</span>
          <span className="text-zinc-300">{altitude.toFixed(1)} M</span>
        </div>

        <div className="flex justify-between">
          <span className="text-zinc-600">VELOCITY</span>
          <span className="text-zinc-300">{velocity.toFixed(1)} M/S</span>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4">
        <span className="text-xs tracking-[0.2em] text-zinc-600">
          SYSTEM NOMINAL
        </span>
      </div>
    </div>
  );
}