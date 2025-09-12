
import React from "react";
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        © {new Date().getFullYear()} AlgoFit — Built with ❤️
      </div>
    </footer>
  );
}
