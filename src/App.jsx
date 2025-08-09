import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Stories from "./components/Stories";
import Feed from "./components/Feed";
import DM from "./components/DM";
import Profile from "./components/Profile";

// SPA-style page navigation
export default function App() {
  const [showDM, setShowDM] = useState(false);
  const [page, setPage] = useState("home"); // "home" or "profile"

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan/40 via-white to-rose/40 font-sans">
      <Navbar setShowDM={setShowDM} setPage={setPage} page={page} />
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto mt-10 space-y-14 px-4 pb-20">
          {page === "profile" ? (
            <Profile />
          ) : (
            <>
              <Stories />
              <Feed />
            </>
          )}
        </div>
      </main>
      <Footer />
      {showDM && <DM close={() => setShowDM(false)} />}
    </div>
  );
}
