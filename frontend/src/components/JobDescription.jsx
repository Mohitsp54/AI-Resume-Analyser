import React, { useState } from "react";
import { LuFileText } from "react-icons/lu";

const JobDescription = () => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div className="bg-[#21202e] pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-6">
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
            Step 2: (Optional) Paste Job Description
          </p>
        </div>

        <div className="bg-[#2a2937] rounded-3xl overflow-hidden shadow-xl border border-gray-800">
          <div className="p-8 bg-[#2a2937]/50 border-b border-gray-800">
            <div className="flex items-center space-x-4 mb-2">
              <div className="p-3 bg-[#3e326c]/30 rounded-xl">
                <LuFileText className="text-[#a855f7] text-2xl" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Job Description
                </h2>
                <p className="text-gray-400 text-sm italic">
                  Paste the job description you're applying for
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="relative">
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Paste the job description here... We'll use this to provide better insights on how well your resume aligns with the role."
                className="w-full h-64 bg-[#1a1926]/50 text-gray-300 p-6 rounded-2xl border border-gray-800 focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] outline-none transition-all resize-none placeholder:text-gray-600"
              />
              <div className="mt-4 flex justify-between items-center text-sm">
                <p className="text-gray-500">{description.length} characters</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-[#1a1926]/30 border-t border-gray-800">
            <p className="text-gray-400 font-medium mb-3">
              Tip: Include the full job posting for the best analysis
            </p>
            <ul className="text-gray-500 text-sm space-y-2 list-disc list-inside ml-2">
              <li>Job title and company name</li>
              <li>Required qualifications and skills</li>
              <li>Responsibilities and experience needed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
