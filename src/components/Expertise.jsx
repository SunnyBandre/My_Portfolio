import { MdMonitor } from "react-icons/md";

function Expertise({ card }) {
  return (
    <div className="border border-[#fff] max-w-xs ">
      <div className="flex  items-center gap-3">
        <div>
          <MdMonitor size={45} color="#fff" />
        </div>
        <div className="text-white font-semibold text-2xl">
          <p className="">{card?.title}</p>
        </div>
      </div>
      <div className=" text-white  flex items-center ">
        <div className="text-sm text-gray-200 leading-relaxed">
          <span className="text-xs text-gray-400">&lt;h3&gt;</span>
          <div className="w-[2px] ml-3 bg-gray-500 h-40 mt-[2px] rounded-sm" />
          <span className="text-xs text-gray-400">&lt;/h3&gt;</span>
        </div>
        <div>
          <p className="tracking-wider">{card?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
