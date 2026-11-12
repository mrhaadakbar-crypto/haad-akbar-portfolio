
import React from "react";

// React Icons - Separate Imports
import { FiArrowUpRight } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#041326] px-4 py-16 text-white md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Section Heading */}
        <div className="mb-12 text-center">

          <p className="mb-3 text-xs font-bold tracking-[3px] text-[#00b7ff]">
            PRACTICAL PORTFOLIO
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Featured{" "}
            <span className="text-[#009dff]">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#a4c9ee]">
            Exploring modern web development through
            responsive interfaces, full stack applications
            and WordPress solutions.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#00aeff] shadow-[0_0_15px_#008cff7d]"></div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* Project Card 1 - E-Commerce */}
          <div className="group overflow-hidden rounded-2xl border border-[#194b73] bg-gradient-to-b from-[#0b2542] to-[#06182d] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#00aeff] hover:shadow-[0_18px_45px_rgba(0,145,255,0.25)]">

            {/* Full HD Project Image */}
            <div className="relative h-[230px] overflow-hidden bg-[#092341]">

              <img
                src="https://images.unsplash.com/photo-1691073121676-1ab3a6d3d743?auto=format&fit=crop&w=1920&h=1080&q=85"
                alt="E-commerce website on a developer workstation"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/80 via-transparent to-transparent"></div>

              <span className="absolute bottom-4 left-4 rounded-full border border-blue-400/40 bg-[#041326]/85 px-3 py-1.5 text-xs text-blue-200">
                FRONTEND PROJECT
              </span>

            </div>

            {/* Project Content */}
            <div className="p-6">

              <p className="mb-2 text-[11px] font-bold tracking-[2px] text-[#00b7ff]">
                WEB DEVELOPMENT
              </p>

              <h3 className="text-xl font-bold">
                E-Commerce Website
              </h3>

              <p className="mt-3 min-h-[75px] text-sm leading-7 text-[#a4c9ee]">
                A responsive online shopping interface
                featuring product cards, category pages,
                cart layouts and mobile-friendly design.
              </p>

              {/* Technology Badges */}
              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  HTML5
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  React
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  Tailwind CSS
                </span>

              </div>

              {/* Project Footer */}
              <div className="mt-6 border-t border-[#194b73] pt-5">

                <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300">
                  <FiEye />
                  Project concept
                </span>

              </div>

            </div>
          </div>

          {/* Project Card 2 - Full Stack Dashboard */}
          <div className="group overflow-hidden rounded-2xl border border-[#194b73] bg-gradient-to-b from-[#0b2542] to-[#06182d] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#00aeff] hover:shadow-[0_18px_45px_rgba(0,145,255,0.25)]">

            {/* Full HD Project Image */}
            <div className="relative h-[230px] overflow-hidden bg-[#092341]">

              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&h=1080&q=85"
                alt="Analytics charts and dashboard interface"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/80 via-transparent to-transparent"></div>

              <span className="absolute bottom-4 left-4 rounded-full border border-blue-400/40 bg-[#041326]/85 px-3 py-1.5 text-xs text-blue-200">
                FULL STACK PROJECT
              </span>

            </div>

            {/* Project Content */}
            <div className="p-6">

              <p className="mb-2 text-[11px] font-bold tracking-[2px] text-[#00b7ff]">
                FULL STACK DEVELOPMENT
              </p>

              <h3 className="text-xl font-bold">
                Full Stack Dashboard
              </h3>

              <p className="mt-3 min-h-[75px] text-sm leading-7 text-[#a4c9ee]">
                An admin dashboard concept featuring
                analytics, data management, authentication
                and frontend-backend integration.
              </p>

              {/* Technology Badges */}
              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  React
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  Node.js
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  Express.js
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  MongoDB
                </span>

              </div>

              {/* Project Footer */}
              <div className="mt-6 border-t border-[#194b73] pt-5">

                <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300">
                  <FiEye />
                  Project concept
                </span>

              </div>

            </div>
          </div>

          {/* Project Card 3 - WordPress */}
          <div className="group overflow-hidden rounded-2xl border border-[#194b73] bg-gradient-to-b from-[#0b2542] to-[#06182d] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#00aeff] hover:shadow-[0_18px_45px_rgba(0,145,255,0.25)]">

            {/* Full HD Project Image */}
            <div className="relative h-[230px] overflow-hidden bg-[#092341]">

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&h=1080&q=85"
                alt="Professional website design on a laptop"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/80 via-transparent to-transparent"></div>

              <span className="absolute bottom-4 left-4 rounded-full border border-blue-400/40 bg-[#041326]/85 px-3 py-1.5 text-xs text-blue-200">
                WORDPRESS PROJECT
              </span>

            </div>

            {/* Project Content */}
            <div className="p-6">

              <p className="mb-2 text-[11px] font-bold tracking-[2px] text-[#00b7ff]">
                CMS DEVELOPMENT
              </p>

              <h3 className="text-xl font-bold">
                WordPress Business Website
              </h3>

              <p className="mt-3 min-h-[75px] text-sm leading-7 text-[#a4c9ee]">
                A professional business website concept
                with responsive pages, service sections,
                contact forms and content management.
              </p>

              {/* Technology Badges */}
              <div className="mt-5 flex flex-wrap gap-2">

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  WordPress
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  Elementor
                </span>

                <span className="rounded-full border border-[#12649b] bg-[#092c48] px-3 py-1.5 text-xs text-[#8fd7ff]">
                  Responsive Design
                </span>

              </div>

              {/* Project Footer */}
              <div className="mt-6 border-t border-[#194b73] pt-5">

                <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300">
                  <FiArrowUpRight />
                  Project concept
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
