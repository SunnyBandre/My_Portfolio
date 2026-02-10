import { BsThreeDots } from "react-icons/bs";

function Header() {
  return (
    <header className="flex justify-between bg-[#111] text-white py-3 items-center px-3">
      <div className="flex flex-col ">
        <h2>Sunny Bandre</h2>
        <span>Web Developer</span>
      </div>
      <div className="hidden lg:flex gap-3">
        <div className="border border-[#ccc] w-24 flex justify-center">
          work
        </div>
        <div className="border border-[#ccc] w-24 flex justify-center">
          Resume
        </div>
        <div className="border border-[#ccc] w-24 flex justify-center">
          Contact
        </div>
      </div>
      <div className="lg:hidden">
        {" "}
        <BsThreeDots />
      </div>
    </header>
  );
}

export default Header;
