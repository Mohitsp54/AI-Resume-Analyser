import React, { useRef, useState } from "react";
import { LuCloudUpload, LuFileText } from "react-icons/lu";

const ResumeUpload = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else if (file) {
      alert("Please select a PDF file.");
    }
  };

  return (
    <div className="bg-[#21202e] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Analyze Your Resume
        </h1>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Get detailed insights about your resume. Discover areas for
          improvement, understand your ATS compatibility, and learn how to
          optimize for your target roles.
        </p>

        <div className="text-left mb-6">
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase">
            Step 1: Upload Resume
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-600 rounded-3xl p-12 flex flex-col items-center justify-center bg-[#2a2937]/50 transition-all hover:bg-[#2a2937] group">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf"
            className="hidden"
          />

          <div className="bg-[#3e326c]/30 p-6 rounded-full mb-6 group-hover:scale-110 transition-transform">
            {selectedFile ? (
              <LuFileText className="text-[#a855f7] text-5xl" />
            ) : (
              <LuCloudUpload className="text-[#a855f7] text-5xl" />
            )}
          </div>

          <h2 className="text-xl font-semibold text-white mb-2">
            {selectedFile ? "File Selected" : "Upload Your Resume"}
          </h2>
          <p className="text-gray-400 mb-2">
            {selectedFile
              ? selectedFile.name
              : "Drag and drop your resume here or click to browse"}
          </p>
          <p className="text-gray-500 text-xs mb-8">
            Supported formats: PDF (Max 10MB)
          </p>

          <button
            onClick={handleBrowseClick}
            className="bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white px-8 py-3 rounded-xl font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all active:scale-95"
          >
            <LuCloudUpload className="text-xl" />
            <span>{selectedFile ? "Change File" : "Browse Files"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
