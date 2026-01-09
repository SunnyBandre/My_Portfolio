import { FiMail, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between text-sm text-gray-400 flex-wrap gap-y-4 bg-[#111]">
      {/* Socials */}
      <div className="flex items-center gap-4">
        <a href="mailto:bandresunny89@gmail.com">
          <FiMail />
        </a>
        <a href="https://github.com/SunnyBandre" target="_blank">
          {" "}
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sunnybandre" target="_blank">
          {" "}
          <FaLinkedinIn />
        </a>
        <span className="ml-4">Sunny Bandre © {currentYear}</span>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center gap-2 rounded-xl bg-[#1c1c1c] px-4 py-2 cursor-pointer hover:bg-[#2a2a2a] transition"
      >
        Scroll to Top
        <FiArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
