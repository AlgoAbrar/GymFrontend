import React, { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";

export default function CategoryItems() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await apiClient.get("/classes/");
        setClasses(res.data.slice(0, 6)); // show a few classes
      } catch (err) {
        console.error("Error fetching classes", err);
      }
    };
    fetchClasses();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
        Popular Classes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="bg-neutral-800 border border-red-600 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold">{cls.title}</h3>
            <p className="text-gray-400">{cls.description}</p>
            <p className="text-gray-300 mt-2">Instructor: {cls.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
