
import React, { useEffect, useState } from "react";

// React Icons - Separate Imports
import { HiArrowUpRight } from "react-icons/hi2";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { FiCode } from "react-icons/fi";

// Navigation Items
const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Certificates", link: "#certificates" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#portfolio" },
  { name: "Process", link: "#process" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  // Mobile Menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Active Navigation Link
  const [activeLink, setActiveLink] = useState("#home");

  // Navbar Scroll Effect
  const [scrolled, setScrolled] = useState(false);

  // ==========================================
  // Scroll Detection
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect Current Section
      const sections = navItems
        .map((item) =>
          document.querySelector(item.link)
        )
        .filter(Boolean);

      let current = "#home";

      sections.forEach((section) => {
        const sectionTop =
          section.getBoundingClientRect().top;

        if (sectionTop <= 160) {
          current = `#${section.id}`;
        }
      });

      setActiveLink(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // ==========================================
  // Close Mobile Menu
  // ==========================================
  const closeMenu = (link) => {
    setMenuOpen(false);
    setActiveLink(link);
  };

  // ==========================================
  // Escape Key - Close Mobile Menu
  // ==========================================
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        border-b transition-all duration-300
        ${
          scrolled
            ? "border-[#194b73]/70 bg-[#020b18]/95 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "border-white/10 bg-[#020b18]/85 backdrop-blur-xl"
        }
      `}
    >
      {/* ======================================
          NAVBAR MAIN CONTAINER
      ====================================== */}
      <div className="mx-auto flex h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[86px] lg:px-8 xl:px-10">

        {/* ======================================
            LOGO
        ====================================== */}
        <a
          href="#home"
          onClick={() => closeMenu("#home")}
          className="group flex shrink-0 items-center gap-3"
        >
          {/* Logo Icon */}
          <div
            className="
              relative flex h-11 w-11 items-center
              justify-center overflow-hidden
              rounded-xl border border-[#1688ff]/40
              bg-gradient-to-br
              from-[#073c85] to-[#061a36]
              shadow-[0_0_25px_rgba(0,145,255,0.12)]
              transition-all duration-300
              group-hover:border-[#00aaff]
              group-hover:shadow-[0_0_30px_rgba(0,145,255,0.35)]
            "
          >
            <FiCode className="text-[23px] text-[#18adff]" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent to-[#009dff]/10" />
          </div>

          {/* Logo Text */}
          <div className="flex flex-col">
            <span className="text-[17px] font-extrabold tracking-tight text-white sm:text-[19px]">
              Haad
              <span className="text-[#079bff]">
                {" "}Akbar
              </span>
            </span>

            <span className="mt-0.5 text-[8px] font-semibold uppercase tracking-[1.8px] text-[#91a9c5] sm:text-[9px]">
              Full Stack Developer
            </span>
          </div>
        </a>

        {/* ======================================
            DESKTOP NAVIGATION
        ====================================== */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 xl:flex 2xl:gap-1"
        >
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => closeMenu(item.link)}
              aria-current={
                activeLink === item.link
                  ? "page"
                  : undefined
              }
              className={`
                group relative whitespace-nowrap
                rounded-lg px-2.5 py-3
                text-[11px] font-semibold
                transition-all duration-300
                2xl:px-3 2xl:text-xs
                ${
                  activeLink === item.link
                    ? "text-[#24adff]"
                    : "text-[#c1cad8] hover:text-white"
                }
              `}
            >
              {item.name}

              {/* Active Underline */}
              <span
                className={`
                  absolute bottom-1 left-1/2
                  h-[2px] -translate-x-1/2
                  rounded-full bg-[#079bff]
                  transition-all duration-300
                  ${
                    activeLink === item.link
                      ? "w-6 opacity-100"
                      : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                  }
                `}
              />
            </a>
          ))}
        </nav>

        {/* ======================================
            RIGHT SIDE ACTIONS
        ====================================== */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Desktop Contact Button */}
          <a
            href="#contact"
            onClick={() => closeMenu("#contact")}
            className="
              hidden min-h-[44px] items-center
              justify-center gap-2
              rounded-full
              border border-[#40baff]/30
              bg-gradient-to-r
              from-[#075bda] to-[#009dff]
              px-5 py-2.5
              text-[12px] font-bold text-white
              shadow-[0_6px_24px_rgba(0,145,255,0.2)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_10px_30px_rgba(0,145,255,0.35)]
              xl:inline-flex
            "
          >
            Let's Talk

            <HiArrowUpRight className="text-lg transition-transform duration-300 hover:rotate-45" />
          </a>

          {/* ======================================
              MOBILE MENU BUTTON
          ====================================== */}
          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobileNavigation"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            className="
              flex h-11 w-11 items-center justify-center
              rounded-xl border border-[#194b73]
              bg-[#09223e]
              text-[27px] text-white
              transition-all duration-300
              hover:border-[#079bff]
              hover:bg-[#0c3159]
              xl:hidden
            "
          >
            {menuOpen ? (
              <IoCloseOutline />
            ) : (
              <IoMenuOutline />
            )}
          </button>

        </div>
      </div>

      {/* ======================================
          MOBILE / TABLET NAVIGATION
      ====================================== */}
      <div
        id="mobileNavigation"
        aria-hidden={!menuOpen}
        className={`
          absolute left-0 right-0 top-full
          overflow-hidden
          border-b border-[#194b73]
          bg-[#04142b]/98
          shadow-[0_20px_45px_rgba(0,0,0,0.4)]
          backdrop-blur-xl
          transition-all duration-300 ease-in-out
          xl:hidden
          ${
            menuOpen
              ? "visible max-h-[calc(100dvh-76px)] overflow-y-auto opacity-100"
              : "invisible max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1440px] flex-col gap-1 px-4 py-5 sm:px-6"
        >
          {navItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={() => closeMenu(item.link)}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={
                activeLink === item.link
                  ? "page"
                  : undefined
              }
              className={`
                flex min-h-[44px]
                items-center justify-between
                rounded-xl border px-4 py-3
                text-[13px] font-semibold
                transition-all duration-300
                ${
                  activeLink === item.link
                    ? "border-[#079bff]/30 bg-[#079bff]/10 text-[#29b5ff]"
                    : "border-transparent text-[#c7d6e8] hover:border-[#194b73] hover:bg-[#092440] hover:text-white"
                }
              `}
            >
              <span>{item.name}</span>

              {activeLink === item.link && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#079bff]" />
              )}
            </a>
          ))}

          {/* Mobile CTA Button */}
          <a
            href="#contact"
            onClick={() => closeMenu("#contact")}
            tabIndex={menuOpen ? 0 : -1}
            className="
              mt-4 flex min-h-[48px]
              items-center justify-center gap-2
              rounded-xl
              bg-gradient-to-r
              from-[#075bda] to-[#009dff]
              px-5 py-3 text-sm font-bold text-white
              transition-all duration-300
              hover:shadow-[0_8px_25px_rgba(0,145,255,0.3)]
            "
          >
            Let's Talk

            <HiArrowUpRight className="text-lg" />
          </a>

          {/* Availability Status */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>

            <span className="text-[11px] text-[#94b5cf]">
              Available for new projects
            </span>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;
