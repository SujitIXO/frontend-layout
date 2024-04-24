import React, { useState } from "react";

const CustomFileInput = ({ onFileChange }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileChange(files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    <div
      className={`w-full border border-dotted h-[360px] ${
        isDragging ? "border-gray-400" : "border-gray-300"
      } p-4 cursor-pointer flex justify-center items-center`}
      onDragEnter={handleDragEnter}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        onChange={handleFileInputChange}
        className="hidden"
      />
      <p className="text-center text-gray-500">
        Click or drag a file here to upload
      </p>
    </div>
  );
};

export default CustomFileInput;
