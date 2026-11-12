
import React, { useEffect, useRef, useState } from "react";

// ==========================================
// React Icons - Separate Imports
// ==========================================
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

// ==========================================
// Voice Introduction Text
// ==========================================
const introduction = `
Hi, I'm Haad Akbar, a Full Stack Developer based in Pakistan.

I create modern responsive websites,
React applications, backend APIs,
and WordPress websites.

`.trim();

// ==========================================
// Developer Roles
// ==========================================
const roles = [
  "Full Stack Developer",
  "WordPress Developer",
];

const Hero = () => {
  // ==========================================
  // 1. Developer Typing States
  // ==========================================
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ==========================================
  // 2. Voice States
  // ==========================================
  const [speaking, setSpeaking] = useState(false);
  const [speechStatus, setSpeechStatus] = useState("");

  const speechRef = useRef(null);

  // ==========================================
  // 3. 3D Portrait States
  // ==========================================
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // ==========================================
  // 4. Automatic Developer Typing Animation
  // ==========================================
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let speed = isDeleting ? 60 : 120;

    // Pause for 2 seconds after typing
    if (!isDeleting && typedText === currentRole) {
      speed = 2000;
    }

    // Small pause before next role
    if (isDeleting && typedText === "") {
      speed = 350;
    }

    const timer = setTimeout(() => {
      // Start deleting completed role
      if (!isDeleting && typedText === currentRole) {
        setIsDeleting(true);
      }

      // Switch to next role
      else if (isDeleting && typedText === "") {
        setIsDeleting(false);

        setRoleIndex(
          (previous) => (previous + 1) % roles.length
        );
      }

      // Type or delete characters
      else {
        setTypedText(
          isDeleting
            ? currentRole.slice(0, typedText.length - 1)
            : currentRole.slice(0, typedText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, roleIndex, isDeleting]);

  // ==========================================
  // 5. Cleanup Voice On Unmount
  // ==========================================
  useEffect(() => {
    return () => {
      speechRef.current = null;

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // ==========================================
  // 6. Stop Voice Introduction
  // ==========================================
  const stopIntroduction = () => {
    speechRef.current = null;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setSpeaking(false);
    setSpeechStatus("");
  };

  // ==========================================
  // 7. Start / Stop Voice Introduction
  // ==========================================
  const toggleIntroduction = () => {
    // Stop if voice is already active
    if (speechRef.current) {
      stopIntroduction();
      return;
    }

    // Check browser support
    if (
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) {
      setSpeechStatus(
        "Voice is not supported by this browser."
      );
      return;
    }

    // Create Speech
    const speech = new SpeechSynthesisUtterance(
      introduction
    );

    // Voice Settings
    speech.lang = "en-US";
    speech.rate = 0.94;
    speech.pitch = 1;
    speech.volume = 1;

    speechRef.current = speech;

    setSpeaking(true);
    setSpeechStatus("");

    // Voice Started
    speech.onstart = () => {
      if (speechRef.current !== speech) return;

      setSpeaking(true);
    };

    // Voice Finished
    speech.onend = () => {
      if (speechRef.current !== speech) return;

      speechRef.current = null;

      setSpeaking(false);
      setSpeechStatus("");
    };

    // Voice Error
    speech.onerror = (event) => {
      if (speechRef.current !== speech) return;

      speechRef.current = null;
      setSpeaking(false);

      if (
        event.error === "canceled" ||
        event.error === "interrupted"
      ) {
        setSpeechStatus("");
      } else {
        setSpeechStatus(
          "Unable to play introduction."
        );
      }
    };

    // Start Voice
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
  };

  // ==========================================
  // 8. Mouse Movement For 3D Portrait
  // ==========================================
  const handleMouseMove = (event) => {
    const rectangle =
      event.currentTarget.getBoundingClientRect();

    const mouseX =
      (event.clientX - rectangle.left) /
      rectangle.width;

    const mouseY =
      (event.clientY - rectangle.top) /
      rectangle.height;

    setRotateY((mouseX - 0.5) * 16);
    setRotateX((0.5 - mouseY) * 12);
  };

  // ==========================================
  // 9. Reset 3D Rotation
  // ==========================================
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // ==========================================
  // 10. Hero JSX Design
  // ==========================================
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-gradient-to-br from-[#061a36] via-[#04142b] to-[#020b18] px-4 pt-24 text-white sm:px-8 lg:min-h-[780px]"
    >
      {/* Background Blue Glow */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-[550px] w-[550px] rounded-full bg-[#008cff]/10 blur-[120px] lg:block" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* ==================================
              LEFT SIDE - INTRODUCTION
          ================================== */}
          <div className="py-12 lg:py-16">

            {/* Small Heading */}
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[2px] text-[#7dcaff]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#098aff] shadow-[0_0_12px_#098aff]" />
              BUILD • CODE • INNOVATE
            </div>

            {/* Developer Category */}
            <p className="mb-5 text-[10px] font-semibold tracking-[2px] text-[#079bff]">
              FULL STACK DEVELOPER · CREATIVE CODER
            </p>

            {/* ==================================
                MAIN HEADING
            ================================== */}
            <h1 className="mb-6 text-[clamp(45px,6vw,96px)] font-extrabold leading-[1.05] tracking-tight">

              Hi, I'm

              <br />

              <span className="text-[#079bff]">
                Haad Akbar.
              </span>

              {/* Automatic Role Typing */}
              <span
                className="mt-4 block min-h-[48px] text-2xl font-semibold text-[#e8f4ff] sm:min-h-[58px] sm:text-3xl lg:min-h-[65px] lg:text-5xl"
              >
                {typedText}

                {/* Blinking Cursor */}
                <span className="ml-1 inline-block animate-pulse font-light text-[#079bff]">
                  |
                </span>
              </span>
            </h1>

            {/* ==================================
                HERO DESCRIPTION
            ================================== */}
            <p className="max-w-[520px] text-sm leading-8 text-[#bcc6d4] sm:text-base">
              Turning ideas into scalable web solutions.
              I build modern websites, responsive React
              applications, WordPress websites and
              interactive digital experiences with clean
              code and thoughtful design.
            </p>

            {/* ==================================
                HERO BUTTONS
            ================================== */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* Introduce Button */}
              <button
                type="button"
                onClick={toggleIntroduction}
                aria-pressed={speaking}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#075bda] to-[#009dff] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_30px_rgba(0,140,255,0.35)]"
              >
                {speaking ? <FaStop /> : <FaPlay />}

                {speaking
                  ? "Stop Introduction"
                  : "Introduce"
                }
              </button>

              {/* Explore Work Button */}
              <a
                href="#portfolio"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#078bfa] to-[#22bbff] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >
                <HiArrowUpRight className="text-lg" />
                Explore Work
              </a>

              {/* Start Project Button */}
              <a
                href="#contact"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#194b73] bg-[#031327] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#29a9ff] hover:bg-[#092e52]"
              >
                Start a Project
                <HiArrowUpRight className="text-lg" />
              </a>

            </div>

            {/* Voice Error Only - No Introduction Box */}
            {speechStatus && (
              <p
                className="mt-4 text-sm text-[#79ccff]"
                role="status"
              >
                {speechStatus}
              </p>
            )}

          </div>

          {/* ==================================
              RIGHT SIDE - 3D PORTRAIT
          ================================== */}
          <div
            className="relative hidden h-[610px] items-center justify-center [perspective:1100px] lg:flex"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* Background Orbit Ring */}
            <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full border border-[#008cff]/25" />

            {/* Second Orbit Ring */}
            <div className="pointer-events-none absolute h-[420px] w-[420px] rotate-45 rounded-full border border-[#009dff]/30" />

            {/* Blue Light Behind Portrait */}
            <div className="pointer-events-none absolute h-[380px] w-[380px] rounded-full bg-[#008cff]/15 blur-[100px]" />

            {/* ==================================
                3D PORTRAIT GROUP
            ================================== */}
            <div
              className="relative flex h-[560px] w-[490px] items-center justify-center transition-transform duration-300 ease-out motion-reduce:transform-none [transform-style:preserve-3d]"
              style={{
                transform: `
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                `,
              }}
            >

              {/* Professional Photo */}
              <div className="absolute inset-0 overflow-hidden [transform:translateZ(35px)]">
                <img
                  src="/haad!.png"
                  alt="Haad Akbar - Full Stack Developer"
                  className="h-full w-full object-cover object-center"
                />

                {/* Smooth Bottom Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04142b]/80 via-transparent to-transparent" />
              </div>

              {/* ==================================
                  REACT BADGE
              ================================== */}
              <div className="pointer-events-none absolute -left-6 top-20 flex items-center gap-2 rounded-xl border border-[#009dff]/40 bg-[#061a36]/90 px-4 py-3 text-[#61dafb] shadow-[0_10px_30px_rgba(0,145,255,0.2)] backdrop-blur-md [transform:translateZ(90px)]">
                <FaReact className="text-2xl" />

                <span className="text-xs font-bold">
                  React.js
                </span>
              </div>

              {/* ==================================
                  NODE.JS BADGE
              ================================== */}
              <div className="pointer-events-none absolute -right-5 top-40 flex items-center gap-2 rounded-xl border border-[#009dff]/40 bg-[#061a36]/90 px-4 py-3 text-white shadow-[0_10px_30px_rgba(0,145,255,0.2)] backdrop-blur-md [transform:translateZ(110px)]">
                <FaNodeJs className="text-2xl text-green-400" />

                <span className="text-xs font-bold">
                  Node.js
                </span>
              </div>

              {/* ==================================
                  MONGODB BADGE
              ================================== */}
              <div className="pointer-events-none absolute -right-4 bottom-24 flex items-center gap-2 rounded-xl border border-[#009dff]/40 bg-[#061a36]/90 px-4 py-3 text-white shadow-[0_10px_30px_rgba(0,145,255,0.2)] backdrop-blur-md [transform:translateZ(100px)]">
                <FiDatabase className="text-xl text-[#00aeff]" />

                <span className="text-xs font-bold">
                  MongoDB
                </span>
              </div>

              {/* ==================================
                  BOTTOM DEVELOPER LABEL
              ================================== */}
              <div className="pointer-events-none absolute bottom-8 left-1/2 w-max -translate-x-1/2 rounded-xl border border-[#009dff]/40 bg-[#061a36]/90 px-6 py-3 text-center backdrop-blur-md [transform:translateZ(140px)]">

                <p className="text-xs font-bold tracking-[2px] text-[#00aeff]">
                  BUILD • CODE • INNOVATE
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  HAAD AKBAR
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
