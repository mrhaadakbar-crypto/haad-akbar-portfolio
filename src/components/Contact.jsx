
import React from "react";

// React Icons - Separate Imports
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiSend } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {

  // ==========================================
  // JAVASCRIPT - ONLY FOR CONTACT FORM
  // ==========================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    const emailSubject = encodeURIComponent(
      `Portfolio Inquiry: ${subject}`
    );

    const emailBody = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`
    );

    // FORM RECEIVER EMAIL - CHANGE HERE
    window.location.href =
      `mailto:your-email@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-[#031324] px-4 py-16 text-white sm:px-6 lg:py-20"
    >

      <div className="mx-auto max-w-[1320px]">

        {/* ==================================
            CONTACT SECTION HEADING
        ================================== */}

        <div className="mb-12 text-center">

          <p className="text-xs font-bold uppercase tracking-[3px] text-[#09b3ff]">
            START A CONVERSATION
          </p>

          <h2 className="my-3 text-4xl font-extrabold sm:text-5xl">
            Contact{" "}
            <span className="text-[#009dff]">
              Me
            </span>
          </h2>

          <p className="mx-auto max-w-[650px] text-sm leading-7 text-[#a4c9ee] sm:text-base">
            Have a website, WordPress or full stack project
            in mind? Send a message and let's discuss it.
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#00aeff]" />

        </div>

        {/* ==================================
            TWO COLUMN CONTACT SECTION
        ================================== */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* ==================================
              LEFT CARD - LET'S CONNECT
          ================================== */}

          <div className="rounded-2xl border border-[#146093] bg-gradient-to-br from-[#0c2745] to-[#071b31] p-6 sm:p-8">

            <h3 className="mb-8 text-xl font-bold">
              Let's Connect
            </h3>

            <p className="mb-8 text-[13px] leading-7 text-[#b0c7e3]">
              Feel free to reach out for web development
              work, collaboration or project questions.
            </p>

            {/* ==================================
                EMAIL INFORMATION
            ================================== */}

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123b60] text-[23px] text-[#00b5ff]">
                <FiMail />
              </div>

              <div>

                <p className="mb-1 text-xs text-[#00b5ff]">
                  Email
                </p>

                {/* EMAIL LINK - CHANGE HERE */}
                <a
                  href="mailto:your-email@gmail.com"
                  className="break-all text-[13px] font-medium text-white hover:text-[#00b5ff]"
                >
                  your-email@gmail.com
                </a>

              </div>

            </div>

            {/* ==================================
                LOCATION INFORMATION
            ================================== */}

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123b60] text-[23px] text-[#00b5ff]">
                <FiMapPin />
              </div>

              <div>

                <p className="mb-1 text-xs text-[#00b5ff]">
                  Location
                </p>

                {/* GOOGLE MAPS LINK - CHANGE HERE */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-white hover:text-[#00b5ff]"
                >
                  Pakistan
                </a>

              </div>

            </div>

            {/* ==================================
                PROJECT INTERESTS
            ================================== */}

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#123b60] text-[23px] text-[#00b5ff]">
                <FiClock />
              </div>

              <div>

                <p className="mb-1 text-xs text-[#00b5ff]">
                  Project Interests
                </p>

                {/* PROJECT LINK - CHANGE HERE */}
                <a
                  href="#portfolio"
                  className="text-[13px] font-medium text-white hover:text-[#00b5ff]"
                >
                  Websites, WordPress & Full Stack Apps
                </a>

              </div>

            </div>

            {/* ==================================
                SOCIAL MEDIA ICONS
            ================================== */}

            <div className="mt-8 flex items-center gap-3">

              {/* ==================================
                  LINKEDIN LINK - CHANGE HERE
              ================================== */}

              <a
                href="https://www.linkedin.com/in/haad-akbar-6705bb420/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#245579] bg-[#103757] text-xl text-[#d8eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[#00aeff] hover:bg-[#0077b5] hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              {/* ==================================
                  GITHUB LINK - CHANGE HERE
              ================================== */}

              <a
                href="https://github.com/mrhaadakbar-crypto"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#245579] bg-[#103757] text-xl text-[#d8eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[#00aeff] hover:bg-[#24292e] hover:text-white"
              >
                <FaGithub />
              </a>

              {/* ==================================
                  EMAIL LINK - CHANGE HERE
              ================================== */}

              <a
                href="mailto:mr.haadakbar@gmail.com"
                aria-label="Email"
                title="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#245579] bg-[#103757] text-xl text-[#d8eaff] transition-all duration-300 hover:-translate-y-1 hover:border-[#00aeff] hover:bg-[#078bfa] hover:text-white"
              >
                <FiMail />
              </a>

            </div>

          </div>

          {/* ==================================
              RIGHT CARD - CONTACT FORM
          ================================== */}

          <div className="rounded-2xl border border-[#245579] bg-gradient-to-br from-[#0c2745] to-[#071b31] p-6 sm:p-8">

            <h3 className="mb-7 flex items-center gap-2 text-xl font-bold">
              Send a Message
              <FiMail className="text-lg" />
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >

              {/* YOUR NAME */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                  className="w-full rounded-xl border border-[#245579] bg-[#04182c] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#00aeff] placeholder:text-[#87a1bd]"
                />

              </div>

              {/* YOUR EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-[#245579] bg-[#04182c] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#00aeff] placeholder:text-[#87a1bd]"
                />

              </div>

              {/* SUBJECT */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  defaultValue="Website Development"
                  className="w-full rounded-xl border border-[#245579] bg-[#04182c] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#00aeff]"
                >
                  <option>Website Development</option>
                  <option>WordPress Development</option>
                  <option>Full Stack Application</option>
                  <option>API Integration</option>
                  <option>Other Project</option>
                </select>

              </div>

              {/* MESSAGE */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full resize-y rounded-xl border border-[#245579] bg-[#04182c] px-4 py-3.5 text-sm text-white outline-none transition-colors focus:border-[#00aeff] placeholder:text-[#87a1bd]"
                />

              </div>

              {/* SEND MESSAGE BUTTON */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#078cf0] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#009dff] hover:shadow-[0_8px_25px_rgba(0,145,255,0.25)]"
              >
                Send Message
                <FiSend />
              </button>

              <p className="text-[11px] text-[#83a4c2]">
                This opens your email application;
                a backend is not connected yet.
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
