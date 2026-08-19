"use client";

import { useState } from "react";

const pipeline = [
  {
    name: "DOCUMENT INPUT",
    description:
      "Users upload commercial real-estate documents through the document dashboard for automated processing.",
    output: "SOURCE FILE",
  },
  {
    name: "PARSE + OCR",
    description:
      "PyPDF2 and EasyOCR extract text and document content, including information that may not be directly available as embedded text.",
    output: "EXTRACTED TEXT",
  },
  {
    name: "CHUNK",
    description:
      "Document content is divided into smaller overlapping segments so relevant context can be retrieved efficiently.",
    output: "DOCUMENT CHUNKS",
  },
  {
    name: "EMBED + STORE",
    description:
      "Document chunks are converted into OpenAI embeddings and stored in a vector database for semantic retrieval.",
    output: "VECTOR STORE",
  },
  {
    name: "RETRIEVE",
    description:
      "The system queries the indexed document for predefined commercial real-estate attributes such as address, lot size, and building information.",
    output: "RELEVANT SOURCES",
  },
  {
    name: "RAG + LLM",
    description:
      "Retrieved document context is supplied to GPT-4o through the RAG workflow to extract and standardize target attributes.",
    output: "MODEL RESPONSE",
  },
  {
    name: "STRUCTURED JSON",
    description:
      "Extracted attributes are converted into structured JSON for integration with downstream valuation workflows.",
    output: "JSON DATA",
  },
  {
    name: "REVIEW + VALIDATE",
    description:
      "Users can inspect extracted values, edit incorrect fields, and review validation information through the document editor.",
    output: "VERIFIED DATA",
  },
];

export default function DocumentParserProject() {
  const [selectedStage, setSelectedStage] = useState(0);

  const activeStage = pipeline[selectedStage];

  return (
    <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      {/* LEFT SIDE */}
      <div>
        <p className="font-mono text-xs tracking-[0.25em] text-zinc-600">
          PROJECT // 003
        </p>

        <h3 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
          AI DOCUMENT PARSER
        </h3>

        <p className="mt-4 font-mono text-xs tracking-[0.2em] text-zinc-500">
          RAG // DOCUMENT INTELLIGENCE // AUTOMATION
        </p>

        <p className="mt-8 max-w-lg leading-8 text-zinc-400">
        A full-stack document-processing system built to automate structured
        data extraction from commercial real-estate documents. The platform
        combined document parsing, retrieval-augmented generation, batch
        processing, validation, and human review into a single workflow.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "PYTHON",
            "FLASK",
            "LANGCHAIN",
            "CHROMADB",
            "GPT-4o",
            "EASYOCR",
            ].map((tag) => (
            <span
              key={tag}
              className="border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="border border-white/10 p-6 font-mono">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="text-xs tracking-[0.25em] text-zinc-500">
            DOCUMENT PIPELINE
          </span>

          <span className="text-[10px] tracking-[0.2em] text-zinc-700">
            RAG SYSTEM
          </span>
        </div>

        {/* PIPELINE */}
        <div className="mt-8 space-y-3">
          {pipeline.map((step, index) => {
            const isActive = selectedStage === index;

            return (
              <div key={step.name}>
                <button
                  type="button"
                  onClick={() => setSelectedStage(index)}
                  className={`flex w-full items-center justify-between border px-4 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[10px] tracking-[0.2em] ${
                      isActive ? "text-black/60" : "text-zinc-600"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm">{step.name}</span>
                </button>

                {index < pipeline.length - 1 && (
                  <div className="mx-auto h-3 w-px bg-white/10" />
                )}
              </div>
            );
          })}
        </div>

        {/* ACTIVE STAGE DETAILS */}
        <div className="mt-8 border border-white/10 p-5">
          <div className="flex items-center justify-between">
            <p className="text-[10px] tracking-[0.2em] text-zinc-600">
              STAGE // {String(selectedStage + 1).padStart(2, "0")}
            </p>

            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              {activeStage.name}
            </p>
          </div>

          <p className="mt-5 max-w-lg text-sm leading-7 text-zinc-400">
            {activeStage.description}
          </p>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              OUTPUT
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              {activeStage.output}
            </p>
          </div>
        </div>

        {/* RESULTS */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
            <div>
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
            VALIDATION SET
            </p>

            <p className="mt-2 text-sm text-zinc-300">
            55 OFFERING MEMORANDA
            </p>
        </div>

        <div className="text-right">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
            AVG. PROCESSING
            </p>

            <p className="mt-2 text-sm text-zinc-300">
            5–10 SEC / DOCUMENT
            </p>
        </div>
    </div>
        <div className="mt-8 grid grid-cols-2 gap-px border-y border-white/10 bg-white/10">
          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              LOCATION
            </p>
            <p className="mt-2 text-sm text-zinc-300">96.00%</p>
          </div>

          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              BUILDING + LOT
            </p>
            <p className="mt-2 text-sm text-zinc-300">95.91%</p>
          </div>

          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              TRAFFIC COUNTS
            </p>
            <p className="mt-2 text-sm text-zinc-300">83.27%</p>
          </div>

          <div className="bg-black p-4">
            <p className="text-[10px] tracking-[0.2em] text-zinc-700">
              VISUAL DATA
            </p>
            <p className="mt-2 text-sm text-zinc-300">42.42%</p>
          </div>
        </div>
      </div>
    </div>
  );
}