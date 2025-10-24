import React, { useState } from "react";

// Profile meta
const profile = {
  username: "ruhmahashmi",
  avatar: "/pfp.png",
  profileUrl: "https://www.linkedin.com/in/ruhmahashmi/"
};

// Projects (add images in /src/assets or /public as needed)
const posts = [
  {
    id: 1,
    img: "/AILA.png",
    title: "AILA – Lecturing Assistant",
    date: "May 2025 – Present",
    caption: "Production-ready AI web platform for educators, powering dynamic concept extraction, MCQ generation, and knowledge graph analytics. Improved assessment quality across 450+ questions! 🌟",
    hashtags: ["#React", "#FastAPI", "#NextJS", "#SQLite", "#GeminiAI", "#AI"],
    skills: ["AI", "Web Dev", "Full-Stack", "LLMs"],
    link: "https://github.com/ruhmahashmi/aila-star",
    location: "Drexel University"
  },
  {
    id: 2,
    img: "/8AM.png",
    title: "8AM – Course Scheduler",
    date: "Jan – Jun 2025",
    caption: "Full-stack platform generating personalized Drexel timetables with real-time conflict validation and responsive PDF export. Streamlined course planning for students. 📅",
    hashtags: ["#JS", "#Flask", "#Python", "#HTML", "#CSS", "#SQLite"],
    skills: ["Web Dev", "Backend", "Agile"],
    link: "https://github.com/ruhmahashmi/8-AM",
    location: "Hackathon Project"
  },
  {
    id: 3,
    img: "/rInsight.png",
    title: "rInsight – Mental Health Dashboard",
    date: "Apr 2025",
    caption: "AI-powered dashboard analyzing live Reddit posts for crisis topic modeling, mapping Drexel resources to real-time student needs. Helping counselors respond faster! 🧠💬",
    hashtags: ["#React", "#Flask", "#GeminiAI", "#ChartJS", "#NLP"],
    skills: ["AI", "Web Dev", "Mental Health"],
    link: "https://github.com/ruhmahashmi/rInsight",
    location: "Drexel Analytics"
  },
  {
    id: 4,
    img: "/GreenPrompts.png",
    title: "GreenPrompts – Chrome Extension",
    date: "Mar 2025",
    caption: "Sustainable prompt optimizer for AI models, reducing energy consumption by 15%. Won 2nd place at Philly CodeFest. 🌱",
    hashtags: ["#NodeJS", "#JS", "#GeminiAPI", "#ChromeExt"],
    skills: ["Frontend", "Sustainability", "Hackathon"],
    link: "https://github.com/ruhmahashmi/GreenPrompt",
    location: "Philly CodeFest"
  },
  {
    id: 5,
    img: "/Stop&Save.png",
    title: "Stop&Save – Finance Tracker",
    date: "Feb 2025",
    caption: "AI-driven tool with wishlist timer, real-time budget charts and smart spending delay system. Delivers personalized insights via chatbot. 💸🤖",
    hashtags: ["#HTML", "#JS", "#ChartJS", "#GeminiAI", "#Auth0"],
    skills: ["Frontend", "AI", "Personal Finance"],
    link: "https://devpost.com/software/stop-save",
    location: "FemmeHacks 2025"
  },
  {
    id: 6,
    img: "/nourishED.png",
    title: "nourishED – Nutrition Platform",
    date: "Aug 2023",
    caption: "Created a nutrition monitoring web app for elders with diabetic and BP alerts — featured at WaffleHacks and top-ranked at STEMist Hacks II.",
    hashtags: ["#React", "#Auth0", "#FastAPI", "#SQL"],
    skills: ["Web Dev", "Health", "Hackathon"],
    link: "https://devpost.com/software/nourished",
    location: "STEMist Hacks II"
  },
  {
    id: 7,
    img: "./src/assets/Portfolio.png",
    title: "Personal Portfolio",
    date: "Ongoing",
    caption: "Interactive Instagram-style React site. Mobile-first, recruiter-friendly, and easy to customize — featuring projects, highlights, DM modal for outreach, and pastel gradients.",
    hashtags: ["#React", "#TailwindCSS", "#Vite", "#UIUX"],
    skills: ["Frontend", "Showcase"],
    link: "https://github.com/ruhmahashmi/portfolio",
    location: "Personal Project"
  }
];


// Icon SVGs (inline for demo — swap for better icons or imports in production)
const Heart = ({ filled }) => (
  <svg width="24" height="24" fill={filled ? "#ef4444" : "none"} stroke="#ef4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41 1.01-4.13 2.44C11.91 4.01 10.24 3 8.5 3 5.42 3 3 5.41 3 8.5c0 6.29 8.44 11.43 8.79 11.65.13.09.31.09.44 0C12.56 19.93 21 14.79 21 8.5 21 5.41 18.58 3 15.5 3z"></path></svg>
);
const Comment = () => (
  <svg width="24" height="24" fill="none" stroke="#6366f1" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 11.5A8.38 8.38 0 0112.5 20A8.38 8.38 0 014 11.5A8.38 8.38 0 0112.5 3a8.38 8.38 0 018.5 8.5z"></path><path d="M8 14l4-4 4 4"></path></svg>
);
const Save = ({ filled }) => (
  <svg width="24" height="24" fill={filled ? "#facc15" : "none"} stroke="#facc15" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"></path></svg>
);

function Feed() {
  // Store likes/saves/comments for demonstration, defaults zero/empty
  const [likes, setLikes] = useState(Array(posts.length).fill(0));
  const [liked, setLiked] = useState(Array(posts.length).fill(false));
  const [saved, setSaved] = useState(Array(posts.length).fill(false));
  const [comments] = useState(Array(posts.length).fill([])); // demo, not interactive

  // Interactive handlers
  const handleLike = idx => {
    setLiked(prev => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
    setLikes(prev => {
      const copy = [...prev];
      copy[idx] += liked[idx] ? -1 : 1;
      return copy;
    });
  };
  const handleSave = idx => {
    setSaved(prev => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
      {posts.map((post, idx) => (
        <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-indigo-200 duration-200">
          {/* Profile bar */}
          <div className="flex items-center px-5 py-4 border-b border-gray-100 bg-indigo-50">
            <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer">
              <img src={profile.avatar} alt="" className="w-10 h-10 rounded-full border-2 border-pink-300" />
            </a>
            <div className="ml-3">
              <a href={profile.profileUrl} target="_blank" rel="noopener noreferrer"
                 className="font-semibold text-gray-700 hover:text-indigo-700">{profile.username}</a>
              <span className="block text-xs text-gray-400">{post.date}</span>
            </div>
          </div>
          {/* Post image and location */}
          <div className="relative">
            <img src={post.img} alt={post.title} className="w-full h-60 object-cover" />
            <div className="absolute bottom-2 right-2 bg-pink-300 text-white text-xs py-1 px-3 rounded-full shadow">
              {post.location}
            </div>
          </div>
          {/* Post content */}
          <div className="p-6 pb-3">
            <div className="flex justify-between items-center mb-2">
              <a href={post.link} target="_blank" rel="noopener noreferrer"
                 className="text-xl font-bold text-indigo-600 hover:underline">{post.title}</a>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-700 mr-1">{profile.username}</span>
              <span className="italic text-gray-700">{post.caption}</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-2">
              {post.hashtags.map(tag => (
                <span key={tag} className="bg-indigo-50 text-indigo-500 text-xs px-2 py-0.5 rounded-full"> {tag} </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1 mb-4">
              {post.skills.map(skill => (
                <span key={skill} className="bg-yellow-200 text-yellow-700 text-xs px-2 rounded">{skill}</span>
              ))}
            </div>
          </div>
          {/* Actions row */}
          <div className="flex items-center px-6 pb-4 gap-5 text-pink-400 text-lg">
            <button
              className="flex items-center gap-1 group hover:scale-110 transition"
              onClick={() => handleLike(idx)}
              aria-label="Like"
            >
              <Heart filled={liked[idx]} />
              <span className="text-gray-500 ml-1 text-sm">{likes[idx] || ""}</span>
            </button>
            <button className="flex items-center gap-1 group hover:scale-110 transition" aria-label="Comment">
              <Comment />
              <span className="text-gray-500 ml-1 text-sm">{comments[idx].length || ""}</span>
            </button>
            <button
              className="flex items-center gap-1 group hover:scale-110 transition"
              onClick={() => handleSave(idx)}
              aria-label="Save"
            >
              <Save filled={saved[idx]} />
            </button>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm text-indigo-600 underline"
            >
              See Details
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Feed;
