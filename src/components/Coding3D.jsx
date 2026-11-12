import { useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FiMove } from "react-icons/fi";
import { initCodingScene } from "../scenes/codingScene";
import ParticleBackground from "./ParticleBackground";

/** The Three.js renderer is managed separately from the React UI overlay. */
const Coding3D = () => {
  useEffect(() => {
    const dispose = initCodingScene();
    return () => dispose?.();
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_82%_12%,#083467,#041a33_58%,#041326)] py-16 text-white"
      id="coding-3d"
      aria-labelledby="coding-3d-heading"
    >
      {/* Electric-blue glowing particle background matching the website */}
      <ParticleBackground />
      <div className="mx-auto w-[calc(100%-44px)] max-w-[1320px] sm:w-[calc(100%-72px)] lg:w-[calc(100%-96px)] relative z-10 grid grid-cols-1 items-center gap-9 lg:grid-cols-[.93fr_1.07fr]">
        <div className="py-6 [&_h2]:mb-6 [&_h2]:text-[clamp(38px,4.7vw,70px)] [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2_span]:text-[#08a7ff] [&>p]:mb-6 [&>p]:text-base [&>p]:leading-8 [&>p]:text-[#b0cde9]">
          <div className="mb-6 flex items-center gap-3 text-[11px] font-extrabold tracking-[.2em] text-[#43bfff]">
            <span className="h-2 w-2 rounded-full bg-[#16b6ff] shadow-[0_0_15px_#00b7ff]" />{" "}
            INTERACTIVE DEVELOPER WORKSPACE
          </div>
          <h2 id="coding-3d-heading">
            Turning <span>Code</span>
            <br />
            Into Reality.
          </h2>
          <p>
            From beautiful frontend interfaces to scalable backend APIs and
            connected databases — explore how I bring every layer of a web
            application together.
          </p>
          <div className="mb-7 flex flex-wrap gap-2.5 [&_span]:rounded-lg [&_span]:border [&_span]:border-[#20527f] [&_span]:bg-[#092342] [&_span]:p-3 [&_span]:text-xs [&_span]:font-bold [&_span]:text-[#b6dcff] [&_span]:transition-all [&_span]:duration-300 [&_span:hover]:-translate-y-1 [&_span:hover]:scale-105 [&_span:hover]:border-[#19b8ff] [&_span:hover]:bg-[#113e71] [&_span:hover]:shadow-[0_8px_25px_rgba(0,157,255,0.30)]">
            <span>⚡ Frontend</span>
            <span>⌘ Backend APIs</span>
            <span>◈ Databases</span>
          </div>
          <a
            className="inline-flex items-center gap-5 rounded-full bg-gradient-to-r from-[#057bf7] to-[#17bcfa] px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
            href="#portfolio"
          >
            Explore My Projects{" "}
            <FiArrowUpRight className="inline" aria-hidden="true" />
          </a>
          <p className="mt-6 text-xs text-[#78a2c3]">
            <FiMove aria-hidden="true" className="inline" /> Move your mouse to
            rotate • drag to turn the model
          </p>
        </div>

        <div
          className="relative isolate h-[350px] overflow-hidden rounded-[26px] border border-[#1c5685] bg-[radial-gradient(circle_at_50%_54%,#0b3a70,#061b34_57%,#051427)] shadow-2xl sm:h-[410px] lg:h-[450px]"
          id="coding3dStage"
          role="img"
          aria-label="Interactive 3D coding workstation with code monitor, backend servers and database"
        >
          <div
            id="coding3dCanvas"
            className="absolute inset-0 z-[1] h-full w-full cursor-grab touch-none active:cursor-grabbing [&_canvas]:h-full [&_canvas]:w-full"
            aria-hidden="true"
          />
          <span className="pointer-events-none absolute z-[2] rounded-lg border border-[#1686dd6b] bg-[#061b37dd] px-3 py-2.5 text-[10px] font-extrabold tracking-widest text-[#65c8ff] shadow-lg left-[6%] top-[16%]">
            {"</>"} FRONTEND
          </span>
          <span className="pointer-events-none absolute z-[2] rounded-lg border border-[#1686dd6b] bg-[#061b37dd] px-3 py-2.5 text-[10px] font-extrabold tracking-widest text-[#65c8ff] shadow-lg right-[5%] top-[23%]">
            API / SERVER
          </span>
          <span className="pointer-events-none absolute z-[2] rounded-lg border border-[#1686dd6b] bg-[#061b37dd] px-3 py-2.5 text-[10px] font-extrabold tracking-widest text-[#65c8ff] shadow-lg bottom-[18%] right-[5%]">
            DATABASE ◈
          </span>
          <div
            className="absolute inset-0 grid place-items-center text-5xl font-extrabold tracking-widest text-[#049cf744]"
            id="coding3dLoading"
            aria-hidden="true"
          >
            {"< CODE />"}
          </div>
          <span className="pointer-events-none absolute inset-x-0 bottom-4 z-[2] text-center text-[10px] tracking-[.3em] text-[#62bffb]">
            DESIGN × CODE × DEPLOY
          </span>
        </div>
      </div>
    </section>
  );
};

export default Coding3D;
