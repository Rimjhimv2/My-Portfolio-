"use client";

import React from "react";

export default function Footer() {
  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll smoothly to the contact section
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-4">
        {/* <p className="text-gray-300 text-sm font-semibold">
          LET'S CREATE SOMETHING AMAZING
        </p> */}
        <h3 className="text-xl font-bold text-white mb-4"> Let's create something amazing</h3>


        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handleGetInTouch}
            className="text-sm text-blue-500 hover:text-blue-400 transition-colors font-medium"
          >
            Get in touch
          </button>
          <button
            onClick={scrollToTop}
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors font-medium"
          >
            ↑ Back to top
          </button>
        </div>

        <p className="text-gray-500 text-xs">
          2025
        </p>
      </div>
    </footer>
  );
}
