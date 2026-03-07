import { IoCheckmarkCircle, IoFlash, IoExtensionPuzzle } from "react-icons/io5";

const Info = () => {
  return (
    <div className="h-auto md:h-44 flex flex-col md:flex-row items-center justify-evenly w-full px-5 sm:px-8 md:px-10 py-10 md:py-0 gap-8 md:gap-6">
      {/* ATS Compatible */}
      <div className="flex items-center gap-4 sm:gap-5 border-2 border-gray-700/50 h-28 w-full max-w-sm md:w-96 rounded-2xl p-4 bg-white/5 backdrop-blur-sm transition-all hover:border-blue-500/50">
        <div className="bg-[#131d35] border-2 border-blue-600/50 rounded-xl w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg shadow-blue-900/20 flex-shrink-0">
          <IoCheckmarkCircle className="text-[#60a5fa] w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div>
          <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
            ATS Compatible
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-snug">
            Check how well your resume performs with Applicant Tracking Systems
          </p>
        </div>
      </div>

      {/* Smart Analysis (Lightning Logo) */}
      <div className="flex items-center gap-4 sm:gap-5 border-2 border-gray-700/50 h-28 w-full max-w-sm md:w-96 rounded-2xl p-4 bg-white/5 backdrop-blur-sm transition-all hover:border-purple-500/50">
        <div className="bg-[#1c1231] border-2 border-purple-600/50 rounded-xl w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg shadow-purple-900/20 flex-shrink-0">
          <IoFlash className="text-[#c084fc] w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div>
          <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
            Smart Analysis
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-snug">
            AI-powered insights about skills, strengths, and areas for
            improvement
          </p>
        </div>
      </div>

      {/* Actionable Advice */}
      <div className="flex items-center gap-4 sm:gap-5 border-2 border-gray-700/50 h-28 w-full max-w-sm md:w-96 rounded-2xl p-4 bg-white/5 backdrop-blur-sm transition-all hover:border-emerald-500/50">
        <div className="bg-[#122b22] border-2 border-emerald-600/50 rounded-xl w-14 h-14 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg shadow-emerald-900/20 flex-shrink-0">
          <IoExtensionPuzzle className="text-[#34d399] w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div>
          <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">
            Actionable Advice
          </h3>
          <p className="text-zinc-400 text-sm sm:text-base leading-snug">
            Get specific recommendations to make your resume stand out
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
