import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCursor from "./CustomCursor";

const roles = [
  "UI/UX Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full-Stack Developer",
  "Social Media Marketing Intern",
  "Design Lead",
  "Graphic Designer",
  "Software Development Intern (SDE)",
];

export default function Header() {
  const [showContent, setShowContent] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const overlayTimeout = setTimeout(() => {
      setShowContent(true);
      setTimeout(() => setAnimate(true), 100);
      setTimeout(() => setHideOverlay(true), 500);
    }, 100);
    return () => clearTimeout(overlayTimeout);
  }, []);

  useEffect(() => {
    if (!animate) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [animate]);

  const handleExploreClick = () => {
    navigate("/menu");
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      <CustomCursor />

      {/* 🎞️ Subtle pixel flicker / buzzing texture background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(245,245,245,0.95)_100%)] before:absolute before:inset-0 before:opacity-[0.08] before:mix-blend-overlay before:bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-crosslines.png')] before:animate-flicker"></div>

      {/* Overlay transition */}
      {!hideOverlay && (
        <div
          className={`absolute inset-0 z-50 bg-black transition-all duration-700 ${
            showContent ? "opacity-0" : "opacity-100"
          }`}
          style={{
            transform: showContent ? "translateY(-100%)" : "translateY(0)",
            transition:
              "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease 0.7s",
          }}
        />
      )}

      {/* ✨ Main Content */}
      <div
        className={`z-10 flex flex-col items-center justify-center transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        } w-[90%]`}
      >
        {/* Name - Cursive */}
        <h1
          className={`text-black text-center leading-none transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } text-[12vw] sm:text-[8vw] lg:text-[6vw]`}
          style={{
            fontFamily: "'Great Vibes', cursive",
            letterSpacing: "2px",
            textShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          Shiva
        </h1>

        {/* Tagline */}
        <div
          className={`mt-4 mb-4 transition-all duration-700 delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="inline-block bg-black text-white px-6 py-2 rounded-full font-medium text-[3.5vw] sm:text-[1.8vw] lg:text-[1.2vw] tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            India based
          </span>
        </div>

        {/* Rotating Roles */}
        <div
          className={`mb-8 transition-all duration-700 delay-300 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span
            className="font-semibold text-black transition-all duration-500 ease-in-out text-[5vw] sm:text-[3vw] lg:text-[2vw] text-center block leading-tight"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            {roles[roleIndex]}
          </span>
        </div>

        {/* Explore Button */}
        <button
          onClick={handleExploreClick}
          className={`mt-10 border-2 border-black rounded-full flex items-center justify-center font-medium hover:bg-black hover:text-white transition-all duration-500 ease-out ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-75"
          } w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 text-[4vw] sm:text-lg uppercase tracking-widest`}
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Explore
        </button>

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/shiva-yadav-476660349/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="absolute bottom-8 left-8 z-10 hover:scale-110 transition-transform duration-300"
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#000" />
            <path
              d="M10.666 13.333h2.667v8h-2.667v-8zm1.333-4a1.333 1.333 0 110 2.667 1.333 1.333 0 010-2.667zm3.334 4h2.56v1.093h.037c.356-.675 1.226-1.387 2.523-1.387 2.7 0 3.2 1.776 3.2 4.084v4.21h-2.667v-3.733c0-.89-.016-2.037-1.241-2.037-1.242 0-1.432.97-1.432 1.97v3.8h-2.667v-8z"
              fill="#fff"
            />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 right-8 text-xs text-gray-500 z-10">
        ©2025 Shiva. All Rights Reserved
      </div>

      {/* Fonts + Flicker Animation */}
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Orbitron:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .before\\:animate-flicker::before {
          animation: flicker 1.6s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
