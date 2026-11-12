const Footer = () => {
  return (
    <footer className="border-t border-[#1a4468] bg-[#090e18] py-7">
      <div className="mx-auto w-[calc(100%-44px)] max-w-[1320px] sm:w-[calc(100%-72px)] lg:w-[calc(100%-96px)] flex flex-col items-center justify-between gap-5 text-center text-xs text-[#96a9c4] md:flex-row">
        <span>© {new Date().getFullYear()} Haad Akbar. All rights reserved.</span>
        <span>BUILD • CODE • INNOVATE</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
