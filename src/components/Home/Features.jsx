import React from "react";
import { FiActivity, FiUsers, FiStar } from "react-icons/fi";

export default function Features() {
  const features = [
    {
      icon: <FiActivity className="w-10 h-10 text-red-500" />,
      title: "Dynamic Workouts",
      desc: "Access curated classes that match your fitness goals.",
    },
    {
      icon: <FiUsers className="w-10 h-10 text-red-500" />,
      title: "Expert Trainers",
      desc: "Learn from certified professionals guiding your journey.",
    },
    {
      icon: <FiStar className="w-10 h-10 text-red-500" />,
      title: "Top-rated Programs",
      desc: "Our members love the transformation they achieve.",
    },
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
        Why Choose AlgoFit?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {features.map((f, idx) => (
          <div
            key={idx}
            className="bg-neutral-800 p-6 rounded-lg border border-red-600 hover:scale-105 transform transition"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-white">{f.title}</h3>
            <p className="text-gray-400 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
