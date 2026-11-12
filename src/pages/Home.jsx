import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import CursorGlow from "../components/CursorGlow";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import TechnologyStack from "../components/TechnologyStack";
import Coding3D from "../components/Coding3D";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";


/**
 * Home assembles the entire single-page portfolio.
 * Both certificates and projects share the same preview modal.
 */
const Home = () => {
  const [preview, setPreview] = useState(null);
  // Preview is the only state needed for the shared project/certificate modal.

  useEffect(() => {
    if (!preview) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setPreview(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [preview]);
  return (
    <div className="min-h-screen scroll-smooth bg-[#030812] font-sans text-white selection:bg-[#089cff] selection:text-white">
      <CursorGlow/>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <TechnologyStack />
        <Coding3D />
        <Experience />
        <Certificates onPreview={setPreview} />
        <Services />
        <Projects onPreview={setPreview} />
        <Process />
        <Contact />
      </main>
      <Footer />
      {/* Floating WhatsApp shortcut, shown on every section */}
      <WhatsAppButton />

      {preview && (
        <div
          className="fixed inset-0 z-[9999] grid place-items-center bg-[#020a14df] p-5"
          role="presentation"

        >
          <div
            className="relative max-h-[90vh] w-full max-w-[610px] overflow-y-auto rounded-[18px] border border-[#1878b4] bg-[#071d35] p-7 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={preview.title}
          >
            <button

              type="button"
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-[#276593] bg-[#123451] text-2xl text-white"
              aria-label="Close preview"
              onClick={() => setPreview(null)}
            >
              <IoCloseOutline aria-hidden="true" />
            </button>
            <h3 className="mb-4 pr-12 text-2xl font-bold">{preview.title}</h3>
            <div className="my-5">
              {preview.kind === "certificate" ? (
                <div className="grid h-[206px] place-items-center overflow-hidden rounded-lg bg-[#0d345a] p-3">
                  <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg border-[6px] border-[#d5eaff] bg-[#f6fbff] p-2 text-center text-[#0b2d50] [&_strong]:mx-auto [&_strong]:max-w-[250px] [&_strong]:text-[17px] [&_small]:text-[10px] [&_small]:text-[#6c89a4] [&>span]:mt-2 [&>span]:text-[8px] [&>span]:font-bold [&>span]:tracking-widest [&>span]:text-red-600">
                    <div className="text-[9px] font-extrabold tracking-[.16em] text-[#3779b3]">HAAD / DEVELOPMENT</div>
                    <div className="my-2 text-3xl text-[#057ed9]">✦</div>
                    <div className="text-[10px] tracking-widest text-[#2776b2]">CERTIFICATE PREVIEW</div>
                    <strong>{preview.title}</strong>
                    <small>Demo placeholder — no certificate file linked</small>
                  </div>
                </div>
              ) : (
                <Project kind={preview.kind} status="PROJECT PREVIEW" />
              )}
            </div>
            <p className="mt-4 text-sm leading-7 text-[#a9d0f1]">{preview.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
