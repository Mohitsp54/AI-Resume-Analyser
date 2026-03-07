import { PiStarFourFill } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";

const Header = () => {
  return (
    <div className="bg-[#0f0f12] h-20 sm:h-24 md:h-28 flex items-center px-5 sm:px-8 md:px-10 gap-3 sm:gap-4 md:gap-5">
      <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-500 rounded-xl sm:rounded-2xl p-2 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex items-center justify-center relative shadow-lg shadow-indigo-500/20 flex-shrink-0">
        <PiStarFourFill className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        <FiPlus className="text-white absolute top-2 right-2 sm:top-2.5 sm:right-2.5 md:top-3 md:right-3 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 stroke-[3]" />
        <div className="w-1 h-1 sm:w-1.2 sm:h-1.2 md:w-1.5 md:h-1.5 bg-white rounded-full absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4" />
      </div>

      <div className="min-w-0">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent tracking-tight truncate">
          Resume Analyser
        </h1>
        <p className="text-zinc-400 text-[10px] sm:text-xs md:text-sm font-medium truncate">
          AI-powered resume optimization
        </p>
      </div>
    </div>
  );
};

export default Header;
