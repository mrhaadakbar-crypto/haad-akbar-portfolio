
import React from "react";

// React Icons - Separate Imports
import { FiMonitor } from "react-icons/fi";
import { FiServer } from "react-icons/fi";
import { FiDatabase } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#031324] px-3 py-16 text-white sm:px-6 md:py-20"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">

          <p className="mb-3 text-[10px] font-bold tracking-[3px] text-[#00b7ff] sm:text-xs">
            WHAT I CAN BUILD FOR YOU
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            My <span className="text-[#009dff]">Services</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#a4c9ee] sm:text-sm">
            Beautiful user experiences, robust backend systems
            and scalable websites — built from idea to launch.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#00aeff] shadow-[0_0_15px_#008cff7d]"></div>
        </div>

        {/* Mobile: 2 Columns | Desktop: 3 Columns */}
        <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-3 lg:gap-5">

          {/* Card 1 - Frontend Development */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            <div className="mb-4 flex items-start justify-between">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiMonitor className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /01
              </span>
            </div>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Frontend Website Development
            </h3>

            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Responsive, modern websites with clean interfaces,
              smooth animations and mobile-friendly layouts.
            </p>

            {/* Technology Badges */}
            <div className="mb-5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                HTML
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                CSS
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                JavaScript
              </span>
            </div>

            {/* Contact Link */}
            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-2 border-t border-[#204564] pt-4 text-[10px] font-bold text-[#4ac1ff] transition-colors hover:text-white sm:text-xs"
            >
              Discuss Service
              <HiArrowUpRight className="shrink-0 text-base" />
            </a>
          </article>

          {/* Card 2 - React Development */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FaReact className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /02
              </span>
            </div>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              React Web Applications
            </h3>

            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Interactive web applications with reusable
              components, modern UI and responsive dashboards.
            </p>

            <div className="mb-5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                React
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Tailwind
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                UI/UX
              </span>
            </div>

            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-2 border-t border-[#204564] pt-4 text-[10px] font-bold text-[#4ac1ff] transition-colors hover:text-white sm:text-xs"
            >
              Discuss Service
              <HiArrowUpRight className="shrink-0 text-base" />
            </a>
          </article>

          {/* Card 3 - Backend Development */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiServer className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /03
              </span>
            </div>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Backend & API Development
            </h3>

            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Server-side functionality, secure authentication,
              REST APIs and reliable backend integration.
            </p>

            <div className="mb-5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Node.js
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Express.js
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                REST APIs
              </span>
            </div>

            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-2 border-t border-[#204564] pt-4 text-[10px] font-bold text-[#4ac1ff] transition-colors hover:text-white sm:text-xs"
            >
              Discuss Service
              <HiArrowUpRight className="shrink-0 text-base" />
            </a>
          </article>

          {/* Card 4 - WordPress Development */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FaWordpress className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /04
              </span>
            </div>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              WordPress Development
            </h3>

            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Professional business websites with responsive
              layouts, CMS management and custom styling.
            </p>

            <div className="mb-5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                WordPress
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                CMS
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Responsive
              </span>
            </div>

            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-2 border-t border-[#204564] pt-4 text-[10px] font-bold text-[#4ac1ff] transition-colors hover:text-white sm:text-xs"
            >
              Discuss Service
              <HiArrowUpRight className="shrink-0 text-base" />
            </a>
          </article>

          {/* Card 5 - Database Integration */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiDatabase className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /05
              </span>
            </div>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Database Integration
            </h3>

            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              Database design, queries and integration
              for reliable data-driven web applications.
            </p>

            <div className="mb-5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                MongoDB
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                SQL
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Integration
              </span>
            </div>

            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-2 border-t border-[#204564] pt-4 text-[10px] font-bold text-[#4ac1ff] transition-colors hover:text-white sm:text-xs"
            >
              Discuss Service
              <HiArrowUpRight className="shrink-0 text-base" />
            </a>
          </article>

          {/* Card 6 - Full Stack Solutions */}
          <article className="group flex min-w-0 flex-col rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-6">

            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#126398] bg-[#093f70] text-[#19bbff] transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-xl">
                <FiLayers className="text-xl sm:text-3xl" />
              </div>

              <span className="text-[10px] font-bold text-[#49769c] sm:text-xs">
                /06
              </span>
            </div>

            <h3 className="mb-3 text-sm font-bold leading-5 text-white sm:text-xl">
              Complete Full Stack Solutions
            </h3>

            <p className="mb-5 text-[11px] leading-5 text-[#a9c7e5] sm:text-[13px] sm:leading-6">
              End-to-end applications connecting frontend,
              backend, databases and API services.
            </p>

            <div className="mb-5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                MERN Stack
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Full Stack
              </span>

              <span className="rounded-md border border-[#16527a] bg-[#0a3152] px-2 py-1 text-[10px] text-[#aadaff]">
                Deployment
              </span>
            </div>

            <a
              href="#contact"
              className="mt-auto flex items-center justify-between gap-2 border-t border-[#204564] pt-4 text-[10px] font-bold text-[#4ac1ff] transition-colors hover:text-white sm:text-xs"
            >
              Discuss Service
              <HiArrowUpRight className="shrink-0 text-base" />
            </a>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Services;
