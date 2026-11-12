import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

/** Update the profile URLs with your real accounts before publishing. */
const SocialLinks = () => {
  return (
    <div className="mt-8 flex gap-2.5 [&_a]:grid [&_a]:h-11 [&_a]:w-11 [&_a]:place-items-center [&_a]:rounded-full [&_a]:border [&_a]:border-[#22577d] [&_a]:bg-[#102f52] [&_a]:text-[#e6f5ff] [&_a:hover]:border-[#00b7ff] [&_a:hover]:bg-[#085b9b] [&_svg]:h-5 [&_svg]:w-5" aria-label="Social and email links">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (replace URL)" title="Add your LinkedIn profile URL">
        <FaLinkedinIn aria-hidden="true" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (replace URL)" title="Add your GitHub profile URL">
        <FaGithub aria-hidden="true" />
      </a>
      <a href="mailto:haad.akbar.dev@gmail.com" aria-label="Email Haad Akbar">
        <FiMail aria-hidden="true" />
      </a>
    </div>
  );
}

export default SocialLinks;
