import React, { useState } from "react";

// One state only: used for category filter buttons.
const TechnologyStack = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section
      className="bg-[#041326] py-16 text-white scroll-mt-24"
      id="technology-stack"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <h2 className="mb-3 text-center text-[clamp(32px,4vw,52px)] font-extrabold text-[#f8fbff]">
          Our Technology Stack
        </h2>
        <p className="mx-auto mb-7 max-w-[780px] text-center text-sm leading-7 text-[#aac7e4] sm:text-base">
          Modern tools for responsive websites and scalable digital solutions.
        </p>
        <div
          className="mb-8 flex flex-wrap justify-center gap-2.5"
          aria-label="Filter technologies"
        >
          <button
            className={`rounded-full border border-[#19476d] bg-[#09223f] px-6 py-3 text-[13px] font-bold text-[#c4e4ff] transition hover:border-[#069dff] hover:bg-[#103254] ${filter === "all" ? "border-[#078cf0] bg-[#078cf0] text-white" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`rounded-full border border-[#19476d] bg-[#09223f] px-6 py-3 text-[13px] font-bold text-[#c4e4ff] transition hover:border-[#069dff] hover:bg-[#103254] ${filter === "frontend" ? "border-[#078cf0] bg-[#078cf0] text-white" : ""}`}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button
            className={`rounded-full border border-[#19476d] bg-[#09223f] px-6 py-3 text-[13px] font-bold text-[#c4e4ff] transition hover:border-[#069dff] hover:bg-[#103254] ${filter === "backend" ? "border-[#078cf0] bg-[#078cf0] text-white" : ""}`}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button
            className={`rounded-full border border-[#19476d] bg-[#09223f] px-6 py-3 text-[13px] font-bold text-[#c4e4ff] transition hover:border-[#069dff] hover:bg-[#103254] ${filter === "database" ? "border-[#078cf0] bg-[#078cf0] text-white" : ""}`}
            onClick={() => setFilter("database")}
          >
            Database
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {(filter === "all" || filter === "frontend") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAgNzAiPjxwYXRoIGZpbGw9IiNFNDREMjYiIGQ9Ik04IDRoNDRsLTQgNTItMTggNi0xOC02eiIvPjxwYXRoIGZpbGw9IiNGMTY1MjkiIGQ9Ik0zMCA1OFY5aDE4bC00IDQzeiIvPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNMTYgMTdoMjhsLTEgN0gyNGwxIDZoMTdsLTIgMTktMTAgMy0xMC0zLTEtOWg4bDEgNCAzIDEgNC0xIDEtN0gxOHoiLz48cGF0aCBmaWxsPSIjMTU3MkI2IiBkPSJNNjYgNGg0NGwtNCA1Mi0xOCA2LTE4LTZ6Ii8+PHBhdGggZmlsbD0iIzMzQTlEQyIgZD0iTTg4IDU4VjloMThsLTQgNDN6Ii8+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik03NCAxN2gyOGwtMSA3SDgybDEgNmgxN2wtMiAxOS0xMCAzLTEwLTMtMS05aDhsMSA0IDMgMSA0LTEgMS03SDc2eiIvPjwvc3ZnPg=="
                alt="HTML5 & CSS3 logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>HTML5 &amp; CSS3</h3>
              <p>Semantic structure & modern styling</p>
            </article>
          )}
          {(filter === "all" || filter === "frontend") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHJlY3QgeD0iNiIgeT0iNiIgd2lkdGg9IjY4IiBoZWlnaHQ9IjY4IiByeD0iNiIgZmlsbD0iI0Y3REYxRSIvPjx0ZXh0IHg9IjE3IiB5PSI2MCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iNDIiIGZvbnQtd2VpZ2h0PSI5MDAiIGZpbGw9IiMxNzE3MTciPkpTPC90ZXh0Pjwvc3ZnPg=="
                alt="JavaScript logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>JavaScript</h3>
              <p>Interactive web experiences</p>
            </article>
          )}
          {(filter === "all" || filter === "frontend") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iOTQiIGhlaWdodD0iOTQiIHJ4PSIxNyIgZmlsbD0iIzEwMTgyMCIvPjxnIHN0cm9rZT0iIzYxREFGQiIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjYiPjxlbGxpcHNlIGN4PSI1MCIgY3k9IjUwIiByeD0iMzgiIHJ5PSIxNSIvPjxlbGxpcHNlIGN4PSI1MCIgY3k9IjUwIiByeD0iMzgiIHJ5PSIxNSIgdHJhbnNmb3JtPSJyb3RhdGUoNjAgNTAgNTApIi8+PGVsbGlwc2UgY3g9IjUwIiBjeT0iNTAiIHJ4PSIzOCIgcnk9IjE1IiB0cmFuc2Zvcm09InJvdGF0ZSgxMjAgNTAgNTApIi8+PC9nPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjciIGZpbGw9IiM2MURBRkIiLz48L3N2Zz4="
                alt="React.js logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>React.js</h3>
              <p>Reusable dynamic user interfaces</p>
            </article>
          )}
          {(filter === "all" || filter === "backend") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBmaWxsPSIjNUZBMDRFIiBkPSJNNTAgNCA5MSAyN3Y0Nkw1MCA5NiA5IDczVjI3eiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01MCAxOSA3OCAzNXYzMEw1MCA4MSAyMiA2NVYzNXoiLz48cGF0aCBmaWxsPSIjNUZBMDRFIiBkPSJNNTAgMjggNzAgNDB2MjFMNTAgNzMgMzAgNjFWNDB6Ii8+PHRleHQgeD0iNTAiIHk9IjYwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSI+TjwvdGV4dD48L3N2Zz4="
                alt="Node.js logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>Node.js</h3>
              <p>Server-side JavaScript development</p>
            </article>
          )}
          {(filter === "all" || filter === "database") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBmaWxsPSIjMTNBQTUyIiBkPSJNNTAgNkMzNSAyNCAyNSAzOSAyNSA1N2MwIDIwIDExIDMzIDI1IDM0IDE0LTEgMjUtMTQgMjUtMzRDNzUgMzkgNjUgMjQgNTAgNnoiLz48cGF0aCBkPSJNNTAgODlWNDAiIHN0cm9rZT0iIzA3NTMyZCIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMTgiIGQ9Ik01MCA2YzE1IDE4IDI1IDMzIDI1IDUxIDAgMjAtMTEgMzMtMjUgMzR6Ii8+PC9zdmc+"
                alt="MongoDB logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>MongoDB</h3>
              <p>Flexible document databases</p>
            </article>
          )}
          {(filter === "all" || filter === "database") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSI1IiB5PSI1IiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHJ4PSIxOCIgZmlsbD0iIzE0N0RCMCIvPjxlbGxpcHNlIGN4PSI1MCIgY3k9IjI4IiByeD0iMjciIHJ5PSIxMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTIzIDI4djM5YzAgMTYgNTQgMTYgNTQgMFYyOE0yMyA0N2MwIDE1IDU0IDE1IDU0IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0yMyA2NmMwIDE1IDU0IDE1IDU0IDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNSIvPjwvc3ZnPg=="
                alt="SQL logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>SQL</h3>
              <p>Relational database queries</p>
            </article>
          )}
          {(filter === "all" || filter === "frontend") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMjVDMjggMjUgMjEgMzUgMTcgNTJjOC0xMiAxNy0xNiAyNy0xMiA2IDMgMTAgMTAgMjIgMTAgMTcgMCAyNS0xMiAyOS0yNS04IDEyLTE3IDE2LTI3IDEyLTYtMy0xMC0xMi0xOC0xMnpNMzQgNTFDMTIgNTEgNSA2MSAxIDc4YzgtMTIgMTctMTYgMjctMTIgNiAzIDEwIDEwIDIyIDEwIDE3IDAgMjUtMTIgMjktMjUtOCAxMi0xNyAxNi0yNyAxMi02LTMtMTAtMTItMTgtMTJ6IiBmaWxsPSIjMDZCNkQ0Ii8+PC9zdmc+"
                alt="Tailwind CSS logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>Tailwind CSS</h3>
              <p>Utility-first responsive design</p>
            </article>
          )}
          {(filter === "all" || filter === "backend") && (
            <article className="group flex min-h-[185px] flex-col items-center justify-center gap-3 rounded-[18px] border border-[#205279] bg-gradient-to-br from-[#0b2442] to-[#07182e] px-3 py-5 text-center shadow-lg transition hover:-translate-y-1.5 hover:shadow-[0_16px_42px_#078fff25] hover:border-[#00a4ff] hover:shadow-[0_14px_34px_#008eff25] [&_h3]:text-base [&_h3]:font-extrabold [&_h3]:text-[#f5faff] [&_p]:text-xs [&_p]:text-[#a7c9e9]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iOTIiIGhlaWdodD0iOTIiIHJ4PSIxNSIgZmlsbD0iIzI0MjQyNCIvPjx0ZXh0IHg9IjUwIiB5PSI2MiIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzkiIGZvbnQtd2VpZ2h0PSI1MDAiIGxldHRlci1zcGFjaW5nPSItNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPmV4PC90ZXh0PjxwYXRoIGQ9Ik0yMCA3Mmg2MCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+"
                alt="Express.js logo"
                className="mx-auto mb-1 block h-[76px] w-[76px] object-contain drop-shadow-lg transition group-hover:scale-110"
                loading="lazy"
                width="76"
                height="76"
              />
              <h3>Express.js</h3>
              <p>REST APIs & backend routing</p>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
