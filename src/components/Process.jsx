
import React from "react";

// React Icons - Separate Imports
import { FiSearch } from "react-icons/fi";
import { FiPenTool } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiSend } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

const Process = () => {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-[#031324] px-3 py-14 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-[850px] text-center">

          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[2px] text-[#09b3ff] sm:text-xs">
            MY CREATIVE PROCESS
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            How I <span className="text-[#009dff]">Work</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#a4c9ee] sm:text-sm">
            From the first conversation to the final launch —
            a simple process for building modern websites
            and full stack applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#00aeff] shadow-[0_0_15px_#008cff7d]" />

        </div>

        {/* Mobile: 2 Cards | Desktop: 4 Cards */}
        <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-4 lg:gap-5">

          {/* Card 1 - Understand */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            {/* Icon and Step Number */}
            <div className="mb-4 flex items-start justify-between gap-2">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiSearch className="text-xl sm:text-3xl" />
              </div>

              <span className="text-xl font-extrabold text-[#25b1ff59] sm:text-4xl">
                01
              </span>

            </div>

            {/* Step Category */}
            <p className="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1bb9ff] sm:text-[11px]">
              DISCOVERY
            </p>

            {/* Step Title */}
            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Understand
            </h3>

            {/* Step Description */}
            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              I discuss your project goals, target audience,
              requirements and the features your website needs.
            </p>

            {/* Bottom Tag */}
            <div className="mt-auto flex items-center gap-2 border-t border-[#204564] pt-4">

              <span className="h-2 w-2 shrink-0 rounded-full bg-[#17b7ff] shadow-[0_0_8px_#17b7ff]" />

              <span className="text-[10px] leading-4 text-[#aadaff] sm:text-xs">
                Goals & Requirements
              </span>

            </div>
          </article>

          {/* Card 2 - Plan & Design */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            {/* Icon and Step Number */}
            <div className="mb-4 flex items-start justify-between gap-2">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiPenTool className="text-xl sm:text-3xl" />
              </div>

              <span className="text-xl font-extrabold text-[#25b1ff59] sm:text-4xl">
                02
              </span>

            </div>

            {/* Step Category */}
            <p className="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1bb9ff] sm:text-[11px]">
              STRATEGY
            </p>

            {/* Step Title */}
            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Plan & Design
            </h3>

            {/* Step Description */}
            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              I plan the website structure, design user
              interfaces and select the right technologies.
            </p>

            {/* Bottom Tag */}
            <div className="mt-auto flex items-center gap-2 border-t border-[#204564] pt-4">

              <span className="h-2 w-2 shrink-0 rounded-full bg-[#17b7ff] shadow-[0_0_8px_#17b7ff]" />

              <span className="text-[10px] leading-4 text-[#aadaff] sm:text-xs">
                Wireframes & UI Design
              </span>

            </div>
          </article>

          {/* Card 3 - Build & Test */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            {/* Icon and Step Number */}
            <div className="mb-4 flex items-start justify-between gap-2">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiCode className="text-xl sm:text-3xl" />
              </div>

              <span className="text-xl font-extrabold text-[#25b1ff59] sm:text-4xl">
                03
              </span>

            </div>

            {/* Step Category */}
            <p className="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1bb9ff] sm:text-[11px]">
              DEVELOPMENT
            </p>

            {/* Step Title */}
            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Build & Test
            </h3>

            {/* Step Description */}
            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              I develop responsive pages, connect backend APIs,
              integrate databases and test functionality.
            </p>

            {/* Bottom Tag */}
            <div className="mt-auto flex items-center gap-2 border-t border-[#204564] pt-4">

              <span className="h-2 w-2 shrink-0 rounded-full bg-[#17b7ff] shadow-[0_0_8px_#17b7ff]" />

              <span className="text-[10px] leading-4 text-[#aadaff] sm:text-xs">
                Coding & Testing
              </span>

            </div>
          </article>

          {/* Card 4 - Launch & Improve */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            {/* Icon and Step Number */}
            <div className="mb-4 flex items-start justify-between gap-2">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiSend className="text-xl sm:text-3xl" />
              </div>

              <span className="text-xl font-extrabold text-[#25b1ff59] sm:text-4xl">
                04
              </span>

            </div>

            {/* Step Category */}
            <p className="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1bb9ff] sm:text-[11px]">
              DELIVERY
            </p>

            {/* Step Title */}
            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Launch & Improve
            </h3>

            {/* Step Description */}
            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              I deploy the website, optimize performance,
              check responsiveness and improve the experience.
            </p>

            {/* Bottom Tag */}
            <div className="mt-auto flex items-center gap-2 border-t border-[#204564] pt-4">

              <span className="h-2 w-2 shrink-0 rounded-full bg-[#17b7ff] shadow-[0_0_8px_#17b7ff]" />

              <span className="text-[10px] leading-4 text-[#aadaff] sm:text-xs">
                Deploy & Optimize
              </span>

            </div>
          </article>

        </div>

        {/* Center Start a Project Button */}
        <div className="mt-10 flex justify-center">

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#248fd7] bg-gradient-to-r from-[#007be5] to-[#13b3fa] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(0,145,255,0.2)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,145,255,0.4)]"
          >
            Start a Project

            <HiArrowUpRight className="text-lg" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Process;
