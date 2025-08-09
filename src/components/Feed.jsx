import React, { useState } from "react";
import { HeartIcon, ChatBubbleOvalLeftIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import PostModal from "./PostModal";

const posts = [
  {
    id: 1,
    image: "/greenprompts.png",
    title: "GreenPrompts",
    hashtags: ["#AI", "#Sustainability"],
    desc: "Optimized AI prompts, reducing energy use 15%. 2nd place @ CodeFest!",
    likes: 112,
    comments: 7,
    user: "ruhmahashmi",
    avatar: "/ruhma-avatar.png",
    timeAgo: "1d"
  },
  // More posts: add your story/images
];

export default function Feed() {
  const [active, setActive] = useState(null);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {posts.map(post => (
        <div key={post.id}
          className="bg-white rounded-3xl border-2 border-cyan shadow-xl hover:shadow-2xl transition-all cursor-pointer"
        >
          <div className="flex items-center px-5 py-4">
            <img src={post.avatar} alt="avatar" className="w-9 h-9 rounded-full border-2 border-rose mr-3"/>
            <span className="font-semibold text-teal">{post.user}</span>
            <span className="ml-auto text-xs text-rose">{post.timeAgo}</span>
          </div>
          <button onClick={() => setActive(post)} className="w-full focus:outline-none">
            <img src={post.image} alt={post.title} className="rounded-2xl w-full h-64 object-cover" />
          </button>
          <div className="flex items-center px-5 pt-3 space-x-5 text-coral">
            <HeartIcon className="w-7 h-7 hover:scale-110 transition" />
            <ChatBubbleOvalLeftIcon className="w-7 h-7 hover:scale-110 transition" />
            <BookmarkIcon className="w-7 h-7 ml-auto hover:text-teal" />
          </div>
          <div className="px-5 pb-5 pt-2 text-[15px] text-gray-800">
            <span className="font-bold text-teal">{post.user}</span> {post.desc}
            <div className="text-xs text-coral mt-1">{post.hashtags.join(' ')}</div>
            <div className="flex gap-4 mt-2 text-xs text-teal">
              <span>{post.likes} likes</span>
              <span>{post.comments} comments</span>
            </div>
          </div>
        </div>
      ))}
      {active && <PostModal post={active} close={() => setActive(null)} />}
    </section>
  );
}
