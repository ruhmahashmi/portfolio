const stories = [
    { label: "About Me", img: "/ruhma-avatar.png", gradient: "from-coral to-rose" },
    { label: "Fun Fact", img: "/funfact.png", gradient: "from-teal to-cyan" },
    { label: "Resume", img: "/resume-bubble.png", gradient: "from-coral to-cyan" },
    { label: "Projects", img: "/project-bubble.png", gradient: "from-rose to-coral" },
  ];
  
  export default function Stories() {
    return (
      <div className="flex items-center gap-6 mb-6 overflow-x-auto">
        {stories.map((s, i) => (
          <div key={i} className="flex flex-col items-center cursor-pointer group">
            <div className={`bg-gradient-to-tr ${s.gradient} p-[2.5px] rounded-full`}>
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <img src={s.img} className="rounded-full w-18 h-18 object-cover"/>
              </div>
            </div>
            <span className="text-xs mt-2 font-semibold text-teal group-hover:text-coral transition">{s.label}</span>
          </div>
        ))}
      </div>
    );
  }
  
  