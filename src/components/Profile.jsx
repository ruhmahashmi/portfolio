import React from "react";

// Update image location:
// Place your avatar at ./src/assets/pfp.png or /public/pfp.png
const avatar = "/pfp.png";

const highlights = [
  {
    icon: "🏆",
    title: "Drexel Global Scholar",
    desc: "Full-tuition merit recipient, 1 of 7 students selected."
  },
  {
    icon: "🌟",
    title: "STAR Scholar",
    desc: "Competitive research fellowship, learning analytics + AI."
  },
  {
    icon: "🎓",
    title: "Honors BS CS, AI Minor",
    desc: "Algorithms, Graphics, Theory, Computer Vision."
  },
  {
    icon: "💼",
    title: "Seeking 2026 Co-op",
    desc: "Open for SDE, AI/ML, and creative tech roles."
  }
];

// Main socials
const socials = [
  {
    label: "Resume",
    href: "HashmiRuhmaResume.pdf",
    external: false,
    icon: "📄"
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ruhmahashmi/",
    external: true,
    icon: "🔗"
  },
  {
    label: "GitHub",
    href: "https://github.com/ruhmahashmi",
    external: true,
    icon: "🐙"
  },
  {
    label: "Devpost",
    href: "https://devpost.com/ruhmahashmi",
    external: true,
    icon: "💻"
  },
  {
    label: "Email",
    href: "mailto:rh927@drexel.edu",
    external: true,
    icon: "✉️"
  }
];

function Profile() {
  return (
    <section
    id="about"
    className="bg-white rounded-2xl shadow-lg p-8 mt-8 w-full max-w-4xl mx-auto border border-indigo-100"
  >
      {/* Avatar & Name Block */}
      <div className="flex items-center">
        <img
          src={avatar}
          alt="Ruhma Hashmi Avatar"
          className="w-28 h-28 rounded-full border-4 border-indigo-300 shadow mr-6"
        />
        <div>
          <h2 className="font-bold text-3xl text-indigo-700 mb-1">Ruhma Hashmi</h2>
          <p className="text-gray-600 text-lg">Drexel Global Scholar | Honors CS & AI Minor | Full-Stack & AI Builder</p>
          <div className="flex gap-2 mt-2 flex-wrap">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="bg-indigo-400 text-white px-3 py-1 rounded flex items-center gap-1 font-semibold shadow-sm hover:bg-indigo-600 transition text-sm"
                download={!social.external}
              >
                <span>{social.icon}</span>
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Bio Summary */}
      <div className="mt-6 text-gray-700 leading-relaxed">
        <p>
          Sophomore BS in Computer Science (Honors) at Drexel, minor in AI. Researcher, award-winning hackathon coder, student ambassador, and advocate for accessible, meaningful technology. Loving tech, creativity and using tech for impact.
        </p>
      </div>
      {/* Highlights Carousel */}
      <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
        {highlights.map((hl) => (
          <div
            key={hl.title}
            className="min-w-[150px] bg-indigo-50 rounded-xl px-3 py-2 flex flex-col items-center shadow"
          >
            <span className="text-2xl mb-2">{hl.icon}</span>
            <span className="font-bold text-indigo-600 text-sm text-center">
              {hl.title}
            </span>
            <span className="text-xs text-gray-600 text-center">{hl.desc}</span>
          </div>
        ))}
      </div>
      {/* Extra flair */}
      <div className="absolute top-4 right-4 text-[72px] opacity-10 pointer-events-none select-none">
        💡
      </div>
    </section>
  );
}

export default Profile;
