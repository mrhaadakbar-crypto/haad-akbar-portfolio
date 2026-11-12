import React from "react";

// Electric-blue particle field matching the rest of the portfolio.
// Every dot is written manually; Tailwind handles its animation.
const ParticleBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_12%,rgba(0,118,255,.20),transparent_58%)]" />
      <span className="absolute left-[3%] top-[12%] h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400/70 shadow-[0_0_14px_#159dff]" />
      <span className="absolute left-[10%] top-[38%] h-2 w-2 animate-pulse rounded-full bg-blue-400/80 shadow-[0_0_14px_#159dff] [animation-delay:700ms]" />
      <span className="absolute left-[16%] top-[75%] h-1 w-1 animate-pulse rounded-full bg-sky-500/60 [animation-delay:1100ms]" />
      <span className="absolute left-[21%] top-[21%] h-2 w-2 animate-pulse rounded-full bg-sky-400/70 [animation-delay:500ms]" />
      <span className="absolute left-[28%] top-[64%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500/70 [animation-delay:1400ms]" />
      <span className="absolute left-[33%] top-[8%] h-1 w-1 animate-pulse rounded-full bg-cyan-300/70" />
      <span className="absolute left-[37%] top-[86%] h-2 w-2 animate-pulse rounded-full bg-blue-500/50 [animation-delay:600ms]" />
      <span className="absolute left-[44%] top-[29%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400/70 [animation-delay:1200ms]" />
      <span className="absolute left-[49%] top-[70%] h-2 w-2 animate-pulse rounded-full bg-sky-500/70 [animation-delay:400ms]" />
      <span className="absolute left-[54%] top-[13%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400/60 [animation-delay:900ms]" />
      <span className="absolute left-[61%] top-[42%] h-1 w-1 animate-pulse rounded-full bg-cyan-300/70 [animation-delay:1300ms]" />
      <span className="absolute left-[65%] top-[83%] h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400/70" />
      <span className="absolute left-[72%] top-[21%] h-2 w-2 animate-pulse rounded-full bg-blue-500/70 [animation-delay:800ms]" />
      <span className="absolute left-[77%] top-[62%] h-1 w-1 animate-pulse rounded-full bg-cyan-300/70 [animation-delay:400ms]" />
      <span className="absolute left-[83%] top-[11%] h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500/60 [animation-delay:1000ms]" />
      <span className="absolute left-[88%] top-[51%] h-2 w-2 animate-pulse rounded-full bg-sky-400/80 [animation-delay:600ms]" />
      <span className="absolute left-[93%] top-[79%] h-1 w-1 animate-pulse rounded-full bg-blue-400/70 [animation-delay:1300ms]" />
      <span className="absolute left-[97%] top-[28%] h-1.5 w-1.5 animate-pulse rounded-full bg-sky-400/70" />
    </div>
  );
};

export default ParticleBackground;
