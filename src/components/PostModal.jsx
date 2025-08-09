// src/components/PostModal.jsx
import React from "react";
export default function PostModal({ post, close }) {
  if (!post) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow p-6 w-96 relative animate-fadeIn">
        <button className="absolute top-2 right-2 text-gray-400 text-xl hover:text-black" onClick={close}>×</button>
        <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded" />
        <h2 className="mt-3 font-bold text-lg">{post.title}</h2>
        <div className="text-xs text-gray-500 mb-2">{post.hashtags?.join(' ')}</div>
        <p className="text-sm">{post.desc}</p>
      </div>
    </div>
  );
}
