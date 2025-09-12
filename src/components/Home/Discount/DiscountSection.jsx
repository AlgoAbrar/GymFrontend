import React, { useState, useEffect } from "react";

export default function DiscountSection() {
  const [timeLeft, setTimeLeft] = useState(3600); // seconds (1 hour)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="bg-gradient-to-r from-red-700 to-black py-12 text-center text-white rounded-lg my-10">
      <h2 className="text-3xl font-bold mb-4">🔥 Limited Time Offer!</h2>
      <p className="text-lg mb-6">
        Get 30% off on all annual memberships. Don’t miss out!
      </p>
      <div className="text-2xl font-mono mb-6">{formatTime(timeLeft)}</div>
      <button className="btn btn-primary">Grab the Deal</button>
    </div>
  );
}
