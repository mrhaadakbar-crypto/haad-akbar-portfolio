import React from "react";

// Each progress bar is written manually, without map().
const Skills = () => {
  return (
    <section className="bg-[#031324] py-14 text-white sm:py-20 scroll-mt-24" id="skills">
      <div className="mx-auto w-[calc(100%-44px)] max-w-[1320px] sm:w-[calc(100%-72px)] lg:w-[calc(100%-96px)]">
        <div className="mx-auto mb-9 max-w-[850px] text-center [&>p]:text-sm [&>p]:leading-7 [&>p]:text-[#a4c9ee]">
          <div className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#09b3ff]">WHAT I KNOW</div>
          <h2 className="my-3 text-[clamp(31px,3.1vw,45px)] font-extrabold tracking-tight text-white [&_span]:text-[#009dff]">Technical <span>Skills</span></h2>
          <p>Frontend, backend, database and WordPress technologies for complete web development.</p>
          <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-[#00aeff] shadow-[0_0_15px_#008cff7d]" />
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[17px] border border-[#194b73] bg-gradient-to-br from-[#0b2542] to-[#07182c] transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)] flex flex-col p-6 sm:p-8 [&>h3]:mb-6 [&>h3]:text-xl [&>h3]:font-bold">
            <h3>Core Skills</h3>
            <div className="mb-[22px]"><div className="mb-2.5 flex justify-between text-[13px] font-semibold text-white [&_span:last-child]:text-[#0cc5ff]"><span>HTML5 &amp; CSS3</span>
              <span>92%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#1c3b5c] [&_i]:block [&_i]:h-full [&_i]:rounded-full [&_i]:bg-gradient-to-r [&_i]:from-[#00aeff] [&_i]:to-[#2363f7]"><i className="w-[92%]" /></div></div>
            <div className="mb-[22px]"><div className="mb-2.5 flex justify-between text-[13px] font-semibold text-white [&_span:last-child]:text-[#0cc5ff]"><span>JavaScript</span>
              <span>85%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#1c3b5c] [&_i]:block [&_i]:h-full [&_i]:rounded-full [&_i]:bg-gradient-to-r [&_i]:from-[#00aeff] [&_i]:to-[#2363f7]"><i className="w-[85%]" /></div></div>
            <div className="mb-[22px]"><div className="mb-2.5 flex justify-between text-[13px] font-semibold text-white [&_span:last-child]:text-[#0cc5ff]"><span>React &amp; Tailwind</span>
              <span>82%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#1c3b5c] [&_i]:block [&_i]:h-full [&_i]:rounded-full [&_i]:bg-gradient-to-r [&_i]:from-[#00aeff] [&_i]:to-[#2363f7]"><i className="w-[82%]" /></div></div>
            <div className="mb-[22px]"><div className="mb-2.5 flex justify-between text-[13px] font-semibold text-white [&_span:last-child]:text-[#0cc5ff]"><span>Node.js &amp; Express</span>
              <span>78%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#1c3b5c] [&_i]:block [&_i]:h-full [&_i]:rounded-full [&_i]:bg-gradient-to-r [&_i]:from-[#00aeff] [&_i]:to-[#2363f7]"><i className="w-[78%]" /></div></div>
            <div className="mb-[22px]"><div className="mb-2.5 flex justify-between text-[13px] font-semibold text-white [&_span:last-child]:text-[#0cc5ff]"><span>WordPress Development</span>
              <span>84%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#1c3b5c] [&_i]:block [&_i]:h-full [&_i]:rounded-full [&_i]:bg-gradient-to-r [&_i]:from-[#00aeff] [&_i]:to-[#2363f7]"><i className="w-[84%]" /></div></div>
            <div className="mb-[22px]"><div className="mb-2.5 flex justify-between text-[13px] font-semibold text-white [&_span:last-child]:text-[#0cc5ff]"><span>MongoDB &amp; SQL</span>
              <span>76%</span></div>
              <div className="h-2.5 overflow-hidden rounded-full bg-[#1c3b5c] [&_i]:block [&_i]:h-full [&_i]:rounded-full [&_i]:bg-gradient-to-r [&_i]:from-[#00aeff] [&_i]:to-[#2363f7]"><i className="w-[76%]" /></div></div>
            <p className="mt-4 text-[11px] leading-5 text-[#87aecd]">Example percentages — update with your actual experience.</p>
          </div>
          <div className="rounded-[17px] border border-[#194b73] bg-gradient-to-br from-[#0b2542] to-[#07182c] transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)] flex flex-col p-6 sm:p-8 [&>h3]:mb-6 [&>h3]:text-xl [&>h3]:font-bold">
            <h3>Tools &amp; Technologies</h3>
            <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 [&_span]:rounded-lg [&_span]:border [&_span]:border-[#194c71] [&_span]:bg-[#092c48] [&_span]:px-3 [&_span]:py-2 [&_span]:text-center [&_span]:text-xs [&_span]:font-medium [&_span]:text-[#a9d6ff] [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-out [&_span:hover]:-translate-y-1 [&_span:hover]:scale-[1.06] [&_span:hover]:border-[#20b8ff] [&_span:hover]:bg-[#10517e] [&_span:hover]:text-white [&_span:hover]:shadow-[0_8px_24px_rgba(0,153,255,0.28)]">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>SQL</span>
              <span>WordPress</span>
              <span>REST APIs</span>
              <span>Git &amp; GitHub</span>
              <span>Responsive Design</span>
              <span>Authentication</span>
              <span>UI Development</span>
              <span>API Integration</span>
            </div>
            <div className="mt-5 rounded-xl border border-[#19406b] bg-[#06192f] px-4 py-5 text-[13px] leading-7 text-[#9fc6eb]">I build responsive websites, WordPress sites, full stack applications and connected web services.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
