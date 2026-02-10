import { useNavigate } from "react-router-dom";

function Card({ website }) {
  const navigate = useNavigate();
  return (
    <div className="relative w-full max-w-sm lg:max-w-lg 2xl:max-w-none 2xl:w-[600px] h-[165px] rounded-2xl bg-[#262626] border shadow-[0_0_20px_rgba(30,144,255,0.25)] px-6 py-5">
      {/* Badge */}
      <span className="inline-block mb-3 rounded-full bg-[#3a3a3a] px-3 py-1 text-xs text-gray-300">
        Website
      </span>

      {/* Content */}
      <div className="flex  items-center justify-between">
        {/* Left Text */}
        <div>
          <button
            onClick={() => navigate(`/project/${website?.name}`)}
            className="text-2xl font-semibold text-white"
          >
            {website?.name}
          </button>
          <p className="text-sm text-gray-400">
            {website?.description || "N/A"}{" "}
          </p>
        </div>

        {/* Right small square */}
        <div className="h-10 w-10 rounded-lg bg-[#3a3a3a]" />
      </div>
    </div>
  );
}

export default Card;
