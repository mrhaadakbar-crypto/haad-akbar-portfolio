
import React, { useState } from "react";

// React Icons - Separate Imports
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close certificate preview
  const closePreview = () => {
    setSelectedCert(null);
  };

  return (
    <section
      id="certificates"
      className="scroll-mt-24 bg-[#031324] px-3 py-16 text-white sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-[1320px]">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-[850px] text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[3px] text-[#00a2ff] sm:text-xs">
            PROFESSIONAL DEVELOPMENT
          </p>

          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            My <span className="text-[#00a2ff]">Certificates</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xs leading-6 text-[#a4c9ee] sm:text-sm">
            Explore my professional development certificates
            and training achievements.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#00a2ff] shadow-[0_0_15px_#00a2ff]" />
        </div>

        {/* Mobile: 2 Columns | Desktop: 3 Columns */}
        <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-4 lg:grid-cols-3 lg:gap-5">

          {/* Certificate Card 1 - SEO */}
          <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-5">

            {/* Certificate Image */}
            <button
              type="button"
              onClick={() =>
                setSelectedCert({
                  title: "Search Engine Optimization Advanced Training",
                  issuer: "WEBBEX Agency",
                  date: "December 30, 2025",
                  image: "/Search_Engine_Optimization_Certificate.png",
                })
              }
              className="relative h-28 w-full overflow-hidden rounded-lg border border-[#194b73] bg-white sm:h-48"
            >
              <img
                src="/Search_Engine_Optimization_Certificate.png"
                alt="SEO Certificate"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <span className="rounded-lg bg-[#0095ff] px-3 py-2 text-xs font-bold text-white">
                  View Certificate
                </span>
              </div>
            </button>

            {/* Certificate Information */}
            <div className="mt-4 flex flex-1 flex-col">
              <div className="mb-3 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-[#194b73] bg-[#092c48] px-2 py-1 text-[9px] text-[#aadaff] sm:text-xs">
                  WEBBEX Agency
                </span>

                <span className="rounded-full border border-[#194b73] bg-[#092c48] px-2 py-1 text-[9px] text-[#00b7ff] sm:text-xs">
                  Verified
                </span>
              </div>

              <h3 className="text-xs font-bold leading-5 text-white sm:text-lg sm:leading-7">
                Search Engine Optimization Advanced Training
              </h3>

              <div className="mt-3 flex items-start gap-1.5 text-[10px] text-[#a4c9ee] sm:text-xs">
                <MdVerified className="shrink-0 text-[#00a2ff]" />
                <span>December 30, 2025</span>
              </div>

              {/* Certificate Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-1.5 border-t border-[#194b73] pt-4 sm:gap-3">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCert({
                      title: "Search Engine Optimization Advanced Training",
                      issuer: "WEBBEX Agency",
                      date: "December 30, 2025",
                      image: "/Search_Engine_Optimization_Certificate.png",
                    })
                  }
                  className="flex min-w-0 items-center justify-center gap-1 rounded-lg bg-[#078cf0] px-1 py-2.5 text-[10px] font-bold text-white transition-all hover:scale-105 hover:bg-[#00aeff] sm:gap-2 sm:px-3 sm:text-sm"
                >
                  <FaEye />
                  Preview
                </button>

                <a
                  href="/Search_Engine_Optimization_Certificate.png"
                  download="Search_Engine_Optimization_Certificate.png"
                  className="flex min-w-0 items-center justify-center gap-1 rounded-lg border border-[#078cf0] px-1 py-2.5 text-[10px] font-bold text-white transition-all hover:scale-105 hover:bg-[#092e52] sm:gap-2 sm:px-3 sm:text-sm"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </article>

          {/* Certificate Card 2 - WordPress */}
          <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-5">

            {/* Certificate Image */}
            <button
              type="button"
              onClick={() =>
                setSelectedCert({
                  title: "WordPress Website Development Advanced Training",
                  issuer: "WEBBEX Agency",
                  date: "December 30, 2025",
                  image: "/Wordpress_Website_Development_Certificate.png",
                })
              }
              className="relative h-28 w-full overflow-hidden rounded-lg border border-[#194b73] bg-white sm:h-48"
            >
              <img
                src="/Wordpress_Website_Development_Certificate.png"
                alt="WordPress Certificate"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <span className="rounded-lg bg-[#0095ff] px-3 py-2 text-xs font-bold text-white">
                  View Certificate
                </span>
              </div>
            </button>

            {/* Certificate Information */}
            <div className="mt-4 flex flex-1 flex-col">
              <div className="mb-3 flex flex-wrap gap-1.5">
                <span className="rounded-full border border-[#194b73] bg-[#092c48] px-2 py-1 text-[9px] text-[#aadaff] sm:text-xs">
                  WEBBEX Agency
                </span>

                <span className="rounded-full border border-[#194b73] bg-[#092c48] px-2 py-1 text-[9px] text-[#00b7ff] sm:text-xs">
                  Verified
                </span>
              </div>

              <h3 className="text-xs font-bold leading-5 text-white sm:text-lg sm:leading-7">
                WordPress Website Development Advanced Training
              </h3>

              <div className="mt-3 flex items-start gap-1.5 text-[10px] text-[#a4c9ee] sm:text-xs">
                <MdVerified className="shrink-0 text-[#00a2ff]" />
                <span>December 30, 2025</span>
              </div>

              {/* Certificate Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-1.5 border-t border-[#194b73] pt-4 sm:gap-3">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCert({
                      title: "WordPress Website Development Advanced Training",
                      issuer: "WEBBEX Agency",
                      date: "December 30, 2025",
                      image: "/Wordpress_Website_Development_Certificate.png",
                    })
                  }
                  className="flex min-w-0 items-center justify-center gap-1 rounded-lg bg-[#078cf0] px-1 py-2.5 text-[10px] font-bold text-white transition-all hover:scale-105 hover:bg-[#00aeff] sm:gap-2 sm:px-3 sm:text-sm"
                >
                  <FaEye />
                  Preview
                </button>

                <a
                  href="/Wordpress_Website_Development_Certificate.png"
                  download="Wordpress_Website_Development_Certificate.png"
                  className="flex min-w-0 items-center justify-center gap-1 rounded-lg border border-[#078cf0] px-1 py-2.5 text-[10px] font-bold text-white transition-all hover:scale-105 hover:bg-[#092e52] sm:gap-2 sm:px-3 sm:text-sm"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </article>

          {/* Certificate Card 3 - Full Width on Mobile */}
          <article className="group col-span-2 flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#194b73] bg-gradient-to-br from-[#0b2744] to-[#061629] p-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#149ef6] hover:shadow-[0_15px_35px_rgba(0,145,255,0.22)] sm:rounded-2xl sm:p-5 lg:col-span-1">

            {/* Certificate Image */}
            <button
              type="button"
              onClick={() =>
                setSelectedCert({
                  title: "WordPress Website Development Advanced Training",
                  issuer: "WEBBEX Agency",
                  date: "December 30, 2025",
                  image: "/Wordpress_Website_Development_Certificate.png",
                })
              }
              className="relative h-48 w-full overflow-hidden rounded-lg border border-[#194b73] bg-white"
            >
              <img
                src="/Wordpress_Website_Development_Certificate.png"
                alt="WordPress Development Certificate"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                <span className="rounded-lg bg-[#0095ff] px-3 py-2 text-xs font-bold text-white">
                  View Certificate
                </span>
              </div>
            </button>

            {/* Certificate Information */}
            <div className="mt-4 flex flex-1 flex-col">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#194b73] bg-[#092c48] px-3 py-1 text-xs text-[#aadaff]">
                  WEBBEX Agency
                </span>

                <span className="rounded-full border border-[#194b73] bg-[#092c48] px-3 py-1 text-xs text-[#00b7ff]">
                  Verified
                </span>
              </div>

              <h3 className="text-lg font-bold leading-7 text-white">
                WordPress Website Development Advanced Training
              </h3>

              <div className="mt-3 flex items-center gap-2 text-xs text-[#a4c9ee]">
                <MdVerified className="text-[#00a2ff]" />
                December 30, 2025
              </div>

              {/* Certificate Buttons */}
              <div className="mt-auto grid grid-cols-2 gap-3 border-t border-[#194b73] pt-4">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCert({
                      title: "WordPress Website Development Advanced Training",
                      issuer: "WEBBEX Agency",
                      date: "December 30, 2025",
                      image: "/Wordpress_Website_Development_Certificate.png",
                    })
                  }
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#078cf0] px-3 py-3 text-xs font-bold text-white transition-all hover:scale-105 hover:bg-[#00aeff]"
                >
                  <FaEye />
                  Preview
                </button>

                <a
                  href="/Wordpress_Website_Development_Certificate.png"
                  download="Wordpress_Website_Development_Certificate.png"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#078cf0] px-3 py-3 text-xs font-bold text-white transition-all hover:scale-105 hover:bg-[#092e52]"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </article>

        </div>
      </div>

      {/* Certificate Preview Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-3 sm:p-6"
          onClick={closePreview}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#194b73] bg-[#07182c] p-4 shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[#00a2ff]">
                  Certificate Preview
                </p>

                <h3 className="mt-2 text-base font-bold text-white sm:text-xl">
                  {selectedCert.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closePreview}
                aria-label="Close preview"
                className="rounded-lg bg-[#0e203b] p-2 text-white transition hover:bg-[#16416c]"
              >
                <IoClose className="text-2xl" />
              </button>
            </div>

            {/* Full Certificate Image */}
            <div className="min-h-0 overflow-auto rounded-xl bg-white p-2">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="mx-auto max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">

              <p className="text-xs text-[#a4c9ee]">
                Issued by {selectedCert.issuer} — {selectedCert.date}
              </p>

              <a
                href={selectedCert.image}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-[#078cf0] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#00aeff]"
              >
                <FaDownload />
                Download
              </a>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
