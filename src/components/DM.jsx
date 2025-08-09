import React, { useState } from "react";

export default function DM({ close }) {
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => { setSent(true); setStatus("done"); }, 500);
    // Replace w/ FastAPI fetch for production
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-30">
      <div className="bg-white rounded-3xl shadow-xl max-w-sm w-full p-7 border-2 border-coral relative">
        <button className="absolute top-3 right-5 text-xl text-gray-500 hover:text-coral" onClick={close}>&times;</button>
        <h3 className="font-bold text-xl text-teal mb-4">📨 DM me!</h3>
        {!sent ? (
          <form onSubmit={handleSubmit}>
            <textarea
              value={msg}
              onChange={e => setMsg(e.target.value)} 
              className="w-full h-24 border rounded-xl p-3 text-teal focus:ring-2 focus:ring-coral"
              maxLength={600}
              placeholder="Hi Ruhma! Let's collaborate, connect, or chat AI..."
              required
            />
            <button type="submit" className="mt-3 bg-coral text-white font-bold rounded-lg px-5 py-2 hover:bg-teal transition" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </form>
        ) : (
          <div className="text-center text-teal">
            <p>Thanks for reaching out! I’ll get back to you soon 🚀</p>
            <button onClick={close} className="mt-4 underline text-coral">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
