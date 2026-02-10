import { FiMail, FiDownload, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Footer from "./Footer";

function GetInTouch() {
  const handleDownload = () => {
    window.open("/sunnybandreResume.pdf", "_blank");
  };
  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="mb-8  text-2xl lg:text-5xl font-semibold tracking-tight">
            Get In Touch
          </h1>

          <div className="space-y-4">
            <button className="cursor-pointer flex items-center gap-3 rounded-xl bg-[#1c1c1c] px-6 py-4 text-sm text-gray-300 hover:bg-[#2a2a2a] transition">
              <FiMail className="text-sm  lg:text-base" />
              bandresunny89@gmail.com
            </button>

            <button
              onClick={handleDownload}
              className="cursor-pointer  flex items-center gap-3 rounded-xl bg-[#1c1c1c] px-6 py-4 text-sm text-white hover:bg-[#2a2a2a] transition"
            >
              <FiDownload className="text-sm  lg:text-base" />
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Phones */}
        <div className="flex-1">
          <img
            src="/GetIntouch.png"
            alt="getintouch"
            className=" z-10   rounded-3xl  shadow-xl "
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default GetInTouch;
