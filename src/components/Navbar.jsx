export default function Navbar({ setShowDM, setPage, page }) {
    return (
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur shadow-md py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => setPage("profile")}>
          <img src="/ruhma-avatar.png" alt="Ruhma" className="w-12 h-12 rounded-full border-4 border-coral"/>
          <div>
            <span className="block font-bold text-teal text-xl">Ruhma Hashmi</span>
            <span className="block text-coral text-sm">AI, Code & Creativity</span>
          </div>
        </div>
        <nav className="flex gap-8 font-semibold">
          <button onClick={() => setPage("home")} className={`hover:text-coral transition ${page==="home" ? "text-coral underline" : ""}`}>Feed</button>
          <button onClick={() => setShowDM(true)} className="hover:text-coral transition">DMs</button>
          <a href="https://github.com/ruhmahashmi" className="hover:text-coral transition">GitHub</a>
          <a href="https://linkedin.com/in/ruhmahashmi" className="hover:text-coral transition">LinkedIn</a>
        </nav>
      </header>
    );
  }
  