import React, { useState } from "react";
import { ChevronDownIcon, DocumentArrowDownIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

// Editable “highlights” and “projects” data:
const highlights = [
  { label: "About", img: "/ruhma-avatar.png", desc: "Global Scholar, AI for Good" },
  { label: "Skills", img: "/resume-bubble.png", desc: "Python, JS, React, LLMs" },
  { label: "Experience", img: "/project-bubble.png", desc: "Researcher, Ambassador" },
  { label: "Fun Fact", img: "/funfact.png", desc: "Code poetry, hackathons, boba" },
];

const projects = [
  { id: 1, img: "/greenprompts.png", name: "GreenPrompts" },
  { id: 2, img: "/rinsight.png", name: "rInsight" },
  { id: 3, img: "/aila.png", name: "AILA" },
  // ...your other projects!
];

export default function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="max-w-3xl mx-auto bg-white/80 rounded-3xl shadow p-8 border border-cyan flex flex-col gap-8 items-center pb-12">
      {/* Top Row: Avatar, Name, Stats & Buttons */}
      <div className="flex w-full justify-between items-center flex-col sm:flex-row gap-8">
        <img src="/ruhma-avatar.png" alt="ruhma" className="w-32 h-32 rounded-full border-4 border-coral shadow" />
        <div className="flex-1 flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-extrabold text-teal">Ruhma Hashmi</h1>
            {/* Button: Resume link */}
            <a href="/HashmiRuhmaResume.pdf" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-xs font-semibold bg-coral text-white px-4 py-1 rounded-full hover:bg-rose transition shadow">
              <DocumentArrowDownIcon className="w-4 h-4" /> Resume
            </a>
            {/* Follow Dropdown */}
            <div className="relative">
              <button onClick={() => setShowDropdown(v => !v)}
                      className="inline-flex items-center gap-1 bg-cyan/75 text-teal font-bold px-4 py-1 rounded-full focus:outline-none hover:bg-teal/80 hover:text-white transition border shadow">
                Follow <ChevronDownIcon className="w-4 h-4" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-1 bg-white rounded-xl border shadow-lg z-20 w-36 animate-fadeIn">
                  <a href="https://github.com/ruhmahashmi" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 hover:bg-cyan/30 hover:text-teal transition">GitHub</a>
                  <a href="https://linkedin.com/in/ruhmahashmi" target="_blank" rel="noopener noreferrer"
                     className="block px-4 py-2 hover:bg-cyan/30 hover:text-teal transition">LinkedIn</a>
                </div>
              )}
            </div>
            {/* Message Button */}
            <a href="mailto:rh927@drexel.edu"
               className="inline-flex items-center gap-2 bg-teal text-white px-4 py-1 rounded-full font-bold hover:bg-coral transition shadow">
              <EnvelopeIcon className="w-4 h-4" /> Message
            </a>
          </div>
          {/* Instagram-style stats */}
          <div className="flex gap-8 mt-2 font-semibold text-gray-700 text-sm">
            <div><span className="font-bold text-teal">{projects.length}</span> posts</div>
            <div><span className="font-bold text-teal">{highlights.length}</span> highlights</div>
            <div><span className="font-bold text-teal">4</span> awards</div>
          </div>
          {/* Mini bio */}
          <div className="text-gray-800 font-medium text-base mt-2 text-center sm:text-left">
            CS @ Drexel • Global Scholar<br />
            Building <span className="font-bold text-coral">AI for good</span> & breaking barriers.<br />
            <span className="text-xs text-gray-500">Aspiring AI Engineer – Open to Software/AI ‘26 internships</span>
          </div>
        </div>
      </div>
      {/* Highlights */}
      <div className="flex flex-row items-center gap-8 overflow-x-auto w-full py-2 px-1">
        {highlights.map((hl, idx) => (
          <div key={hl.label} className="flex flex-col items-center">
            <div className="bg-gradient-to-tr from-coral/80 to-cyan/80 p-1 rounded-full">
              <img src={hl.img} alt={hl.label}
                   className="w-16 h-16 rounded-full border-2 border-coral object-cover"/>
            </div>
            <span className="text-xs font-bold text-teal mt-1">{hl.label}</span>
            <span className="text-xs text-gray-500">{hl.desc}</span>
          </div>
        ))}
      </div>
      {/* Projects/posts grid */}
      <div className="w-full pt-1">
        <h2 className="font-extrabold text-xl text-teal mb-3 tracking-tight">Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {projects.map(p => (
            <div key={p.id} className="group relative rounded-xl overflow-hidden shadow hover:scale-105 transition-all bg-white border">
              <img src={p.img} alt={p.name} className="w-full h-32 object-cover" />
              <div className="absolute bottom-0 left-0 w-full bg-teal/60 text-xs font-bold text-white py-1 px-2 opacity-90">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
