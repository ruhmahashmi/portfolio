import React from "react";
import Feed from "./Feed";
import Profile from "./Profile";
import Stories from "./Stories";
import Footer from "./Footer";
import DM from "./DM";
import PostModal from "./PostModal";

function App() {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-indigo-100 min-h-screen font-sans">
      <main className="flex flex-col items-center">
        <Profile />
        <Stories />
        <Feed />
      </main>
      <Footer />
      <DM />
      <PostModal />
    </div>
  );
}

export default App;
