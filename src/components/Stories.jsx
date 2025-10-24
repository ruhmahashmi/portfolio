import React, { useState } from "react";

const stories = [
  {
    label: "About Me",
    icon: "👩‍💻",
    color: "bg-indigo-300",
    content: (
      <div className="px-8 py-4">
        <h3 className="font-bold text-xl mb-2 text-indigo-700">About Me</h3>
        <p>
          Ruhma Hashmi, CS undergrad at Drexel Global Scholar, passionate about transforming ideas into impactful tech. From winning hackathons to researching AI in education, building tech with creativity, heart, and hustle.
        </p>
      </div>
    )
  },
  {
    label: "Awards",
    icon: "🏅",
    color: "bg-pink-200",
    content: (
      <div className="px-8 py-4">
        <h3 className="font-bold text-xl mb-2 text-pink-500">Awards & Honors</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Drexel Global Scholar (1 of 7 full merit, 2023)</li>
          <li>STAR Scholar (2024 AI research fellowship)</li>
          <li>Philly CodeFest 2nd Place – GreenPrompts</li>
          <li>STEMist Hacks II Finalist – nourishED</li>
        </ul>
      </div>
    )
  },
  {
    label: "Projects",
    icon: "💡",
    color: "bg-yellow-200",
    content: (
      <div className="px-8 py-4">
        <h3 className="font-bold text-xl mb-2 text-yellow-600">Recent Projects</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li><b>AILA:</b> AI-led teaching assistant, 450+ MCQs generated.</li>
          <li><b>8AM Course Scheduler:</b> Automated Drexel period planner.</li>
          <li><b>GreenPrompts:</b> Chrome extension for green AI.</li>
        </ul>
      </div>
    )
  },
  {
    label: "Skills",
    icon: "🛠️",
    color: "bg-blue-200",
    content: (
      <div className="px-8 py-4">
        <h3 className="font-bold text-xl mb-2 text-blue-600">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-indigo-100 px-3 py-1 rounded-full">Python</span>
          <span className="bg-pink-100 px-3 py-1 rounded-full">React</span>
          <span className="bg-yellow-100 px-3 py-1 rounded-full">FastAPI</span>
          <span className="bg-blue-100 px-3 py-1 rounded-full">SQLite</span>
          <span className="bg-violet-100 px-3 py-1 rounded-full">AI/ML</span>
          <span className="bg-green-100 px-3 py-1 rounded-full">UI/UX</span>
        </div>
      </div>
    )
  },
  {
    label: "Photos",
    icon: "📸",
    color: "bg-green-200",
    content: (
      <div className="flex flex-wrap p-4 gap-4">
        {/* Replace with your fun/relevant image URLs or use /public path */}
        <img src="./src/assets/your_event_pic1.jpg" alt="Event" className="w-24 h-24 rounded-xl object-cover" />
        <img src="./src/assets/your_proj_pic2.jpg" alt="Hackathon" className="w-24 h-24 rounded-xl object-cover" />
        <img src="./src/assets/your_team_pic3.jpg" alt="Team" className="w-24 h-24 rounded-xl object-cover" />
      </div>
    )
  }
];

function Stories() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <div className="flex gap-6 justify-center mt-2 mb-10">
        {stories.map((story, idx) => (
          <button
            key={story.label}
            onClick={() => setActiveIndex(idx)}
            className={`w-20 h-20 rounded-full flex flex-col items-center justify-center font-semibold text-gray-700 shadow-lg transition-transform hover:scale-110 ${story.color}`}
            aria-label={story.label}
          >
            <span className="text-2xl mb-1">{story.icon}</span>
            {story.label}
          </button>
        ))}
      </div>
      {/* Modal/panel for story content */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative mx-2"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-3 right-5 text-indigo-400 font-bold text-xl"
              aria-label="Close"
            >
              ×
            </button>
            {stories[activeIndex].content}
          </div>
        </div>
      )}
    </>
  );
}

export default Stories;
