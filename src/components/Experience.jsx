import React from "react";

// React Icons - Separate Imports
import { FiCode } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { FaWordpress } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#031324] px-3 py-14 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[1320px]">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-[850px] text-center">
          <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[2px] text-[#09b3ff] sm:text-xs">
            MY DEVELOPMENT JOURNEY
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Work <span className="text-[#009dff]">Experience</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#a4c9ee] sm:text-sm">
            My development focus across frontend interfaces, backend
            applications and WordPress websites.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#00aeff] shadow-[0_0_15px_#008cff7d]" />
        </div>

        {/* Mobile: 2 Columns | Desktop: 3 Columns */}
        <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {/* Card 1 - Frontend Development */}
          <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">
            {/* Icon and Card Number */}
            <div className="mb-4 flex items-start justify-between gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiCode className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /01
              </span>
            </div>

            {/* Card Heading */}
            <p className="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1bb9ff] sm:text-[11px]">
              DEVELOPMENT FOCUS
            </p>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Frontend Development
            </h3>

            {/* Description */}
            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Responsive websites, interactive user interfaces, reusable
              components and modern frontend design.
            </p>

            {/* Technology Badges */}
            <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[#204564] pt-4">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                React
              </span>
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                JavaScript
              </span>
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Tailwind
              </span>
            </div>
          </article>

          {/* Card 2 - Backend Development */}
          <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">
            {/* Icon and Card Number */}
            <div className="mb-4 flex items-start justify-between gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiServer className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /02
              </span>
            </div>

            {/* Card Heading */}
            <p className="mb-2 text-[9px] font-extrabold uppercase tracking-wider text-[#1bb9ff] sm:text-[11px]">
              DEVELOPMENT FOCUS
            </p>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Backend & APIs
            </h3>

            {/* Description */}
            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Server-side applications, REST APIs, authentication and database
              integration using modern backend technologies.
            </p>

            {/* Technology Badges */}
            <div className="mt-auto flex flex-wrap gap-1.5 border-t border-[#204564] pt-4">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Node.js
              </span>
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Express
              </span>
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                MongoDB
              </span>
            </div>
          </article>

          {/* Card 3 - WordPress Development */}
          {/* Card 3 - WordPress Development */}
          <article
            className="
    group col-span-2 lg:col-span-1
    flex min-w-0 flex-col
    rounded-xl
    border border-[#194b73]
    bg-gradient-to-br from-[#0b2744] to-[#061629]
    p-4 sm:p-6
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-[1.02]
    hover:border-[#149ef6]
    hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)]
  "
          >
            {/* Icon */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#093f70] text-[#19bbff]">
                <FaWordpress className="text-2xl" />
              </div>

              <span className="text-xs text-[#49769c]">/03</span>
            </div>

            {/* Heading */}
            <p className="mb-2 text-xs font-bold text-[#1bb9ff]">
              DEVELOPMENT FOCUS
            </p>

            <h3 className="mb-3 text-lg font-bold text-white">
              WordPress Development
            </h3>

            {/* Description */}
            <p className="mb-5 text-sm leading-6 text-[#a9c7e5]">
              Business websites, landing pages, responsive themes and content
              management with WordPress.
            </p>

            {/* Technology Badges */}
            <div className="mt-auto flex flex-wrap gap-2 border-t border-[#204564] pt-4">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-3 py-1.5 text-xs text-[#aadaff]">
                WordPress
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-3 py-1.5 text-xs text-[#aadaff]">
                CMS
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-3 py-1.5 text-xs text-[#aadaff]">
                Websites
              </span>
            </div>
          </article>
        </div>

        {/* Experience Information */}
        <p className="mt-6 text-center text-xs leading-6 text-[#87aecd]">
          These cards describe my development focus areas. Verified company
          experience and employment dates can be added separately.
        </p>
      </div>
    </section>
  );
};

export default Experience;
