import { HiArrowRight } from "react-icons/hi2";

const About = () => {
  return (
    <section className="bg-[#031324] py-14 text-white sm:py-20 scroll-mt-24 pt-20" id="about">
      <div className="mx-auto w-[calc(100%-44px)] max-w-[1320px] sm:w-[calc(100%-72px)] lg:w-[calc(100%-96px)] grid grid-cols-1 items-center gap-9 lg:grid-cols-2">
        <div className="relative flex h-[320px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_75%_50%,#06499c,#061a30_65%)] md:h-[410px] [&_img]:h-full [&_img]:w-full [&_img]:object-cover rounded-[17px] border border-[#194b73] bg-gradient-to-br from-[#0b2542] to-[#07182c] transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#031526] via-transparent to-transparent" />
          <img
            src="/public/32.png"
            alt="Haad Akbar developer profile banner"
            loading="lazy"
          />
          <div className="absolute bottom-6 left-6 bg-[#061c38df] px-3 py-2 text-[10px] font-extrabold tracking-[.19em] text-[#70ceff] border border-[#1385df]">BUILD • CODE • INNOVATE</div>
        </div>

        <div className="[&_h2]:my-4 [&_h2]:text-4xl [&_h2]:font-extrabold [&_h2]:text-white [&_h2_span]:text-[#009dff] [&>p]:mb-6 [&>p]:leading-8 [&>p]:text-[#a4c9ee]">
          <div className="text-[11px] font-extrabold uppercase tracking-[.22em] text-[#09b3ff]">GET TO KNOW ME</div>
          <h2 className="my-3 text-[clamp(31px,3.1vw,45px)] font-extrabold tracking-tight text-white [&_span]:text-[#009dff]">About <span>Me</span></h2>
          <span className="mx-auto mt-5 block h-1 w-12 rounded-full bg-[#00aeff] shadow-[0_0_15px_#008cff7d] !ml-0" />
          <p>
            I'm Haad Akbar, a Full Stack Developer focused on building responsive,
            user-friendly websites and scalable web applications. I work with
            frontend technologies, backend APIs, databases, and WordPress to
            turn ideas into practical digital experiences.
          </p>
          <div className="mb-7 grid grid-cols-2 gap-3">
            <div className="grid gap-1.5 rounded-xl border border-[#194b73] bg-[#0b2542] px-4 py-3 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)] [&_small]:text-xs [&_small]:text-[#00b5ff] [&_strong]:text-[13px]"><small>Name</small><strong>Haad Akbar</strong></div>
            <div className="grid gap-1.5 rounded-xl border border-[#194b73] bg-[#0b2542] px-4 py-3 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)] [&_small]:text-xs [&_small]:text-[#00b5ff] [&_strong]:text-[13px]"><small>Role</small><strong>Full Stack Developer</strong></div>
            <div className="grid gap-1.5 rounded-xl border border-[#194b73] bg-[#0b2542] px-4 py-3 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)] [&_small]:text-xs [&_small]:text-[#00b5ff] [&_strong]:text-[13px]"><small>Location</small><strong>Pakistan</strong></div>
            <div className="grid gap-1.5 rounded-xl border border-[#194b73] bg-[#0b2542] px-4 py-3 transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.025] hover:border-[#16aaff] hover:shadow-[0_16px_38px_rgba(0,149,255,0.24)] [&_small]:text-xs [&_small]:text-[#00b5ff] [&_strong]:text-[13px]"><small>Specialization</small><strong>Full Stack & WordPress</strong></div>
          </div>
          <a className="inline-flex min-h-11 items-center justify-center gap-2.5 rounded-[10px] border border-[#0a9dff] bg-[#078cf0] px-4 py-3 text-center text-[13px] font-bold text-white transition hover:-translate-y-0.5 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-45" href="#contact">
            Contact Me <HiArrowRight className="inline" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
