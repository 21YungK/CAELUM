"use client";

import { useState } from "react";

const flightEvents = {
  0: {
    label: "FLIGHT START",
    voltage: "23.41 V",
    current: "0.00 A",
    source: "PX4 ULOG",
    status: "NOMINAL",
    diagnosis:
      "Flight initialized normally with stable battery voltage and no detected anomalies.",
  },
  70.22: {
    label: "HIGH LOAD EVENT",
    voltage: "17.94 V",
    current: "48.83 A",
    source: "PX4 ULOG",
    status: "CORRELATED",
    diagnosis:
      "Event correlated with elevated current draw during a high-load maneuver. Telemetry context can be inspected around the detected timestamp for further diagnosis.",
  },
  229.01: {
    label: "FLIGHT END",
    voltage: "22.52 V",
    current: "0.00 A",
    source: "PX4 ULOG",
    status: "NOMINAL",
    diagnosis:
      "Flight completed without additional correlated anomalies. Battery voltage recovered after the high-load event.",
  },
};

export default function NavisProject() {
  const [selectedTime, setSelectedTime] =
    useState<0 | 70.22 | 229.01>(70.22);

  const selectedEvent = flightEvents[selectedTime];

  return (
    <div className="grid gap-12 border-y border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      {/* LEFT SIDE */}
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-zinc-600">
          PROJECT // 001
        </p>

        <h3 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          NAVIS
        </h3>

        <p className="mt-4 font-mono text-xs tracking-[0.2em] text-zinc-500">
          UAV TELEMETRY // LOCAL AI // DIAGNOSTICS
        </p>

        <p className="mt-8 max-w-lg leading-8 text-zinc-400">
          A local UAV flight-log analysis tool designed to inspect telemetry,
          detect anomalies, correlate flight events, and assist with technical
          debugging.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <span className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500">
            PYTHON
          </span>

          <span className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500">
            PX4 ULOG
          </span>

          <span className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500">
            OLLAMA
          </span>

          <span className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500">
            LOCAL LLM
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="border border-white/10 p-6 font-mono">
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs tracking-[0.25em] text-zinc-500">
            NAVIS // FLIGHT INSPECTOR
          </span>

          <span className="text-xs text-zinc-700">
            {selectedTime.toFixed(2)} S
          </span>
        </div>

        {/* TIMELINE */}
        <div className="py-8">
          <p className="text-xs tracking-[0.2em] text-zinc-600">
            FLIGHT TIMELINE
          </p>

          <div className="mt-6">
            <div className="relative h-12">
              <div className="absolute left-0 right-0 top-3 h-px bg-white/10" />

              {/* START DOT */}
              <div
                className={`absolute left-0 top-3 h-3 w-3 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                  selectedTime === 0
                    ? "scale-125 border-white bg-white"
                    : "border-zinc-600 bg-black"
                }`}
              />

              {/* EVENT DOT */}
              <div
                className={`absolute left-[30.7%] top-3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                  selectedTime === 70.22
                    ? "scale-125 border-white bg-white"
                    : "border-zinc-600 bg-black"
                }`}
              />

              {/* END DOT */}
              <div
                className={`absolute right-0 top-3 h-3 w-3 -translate-y-1/2 rounded-full border transition-all duration-300 ${
                  selectedTime === 229.01
                    ? "scale-125 border-white bg-white"
                    : "border-zinc-600 bg-black"
                }`}
              />
            </div>

            <div className="mt-2 flex justify-between font-mono text-[9px] tracking-[0.15em] text-zinc-700">
              <span>0.00 S</span>
              <span>70.22 S</span>
              <span>229.01 S</span>
            </div>

            <p className="mt-6 font-mono text-[10px] tracking-[0.2em] text-zinc-600">
              SELECT EVENT
            </p>

            <div className="mt-3 grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setSelectedTime(0)}
                className={`border px-3 py-3 text-left font-mono text-[10px] tracking-[0.12em] transition-all ${
                  selectedTime === 0
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                }`}
              >
                FLIGHT START
              </button>

              <button
                type="button"
                onClick={() => setSelectedTime(70.22)}
                className={`border px-3 py-3 text-left font-mono text-[10px] tracking-[0.12em] transition-all ${
                  selectedTime === 70.22
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                }`}
              >
                POWER EVENT
              </button>

              <button
                type="button"
                onClick={() => setSelectedTime(229.01)}
                className={`border px-3 py-3 text-left font-mono text-[10px] tracking-[0.12em] transition-all ${
                  selectedTime === 229.01
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                }`}
              >
                FLIGHT END
              </button>
            </div>
          </div>
        </div>

        {/* EVENT */}
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs tracking-[0.2em] text-zinc-600">
            SELECTED EVENT
          </p>

          <h4 className="mt-3 text-2xl text-zinc-200">
            {selectedEvent.label}
          </h4>
        </div>

        {/* METRICS */}
        <div className="mt-6 grid grid-cols-2 gap-px border-y border-white/10 bg-white/10">
          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              VOLTAGE
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              {selectedEvent.voltage}
            </p>
          </div>

          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              CURRENT
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              {selectedEvent.current}
            </p>
          </div>

          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              SOURCE
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              {selectedEvent.source}
            </p>
          </div>

          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              STATUS
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              {selectedEvent.status}
            </p>
          </div>
        </div>

        {/* DIAGNOSIS */}
        <div className="mt-6 border-l border-white/10 pl-5">
          <p className="text-[10px] tracking-[0.2em] text-zinc-700">
            DIAGNOSIS
          </p>

          <p className="mt-3 leading-7 text-zinc-400">
            {selectedEvent.diagnosis}
          </p>
        </div>
      </div>
    </div>
  );
}