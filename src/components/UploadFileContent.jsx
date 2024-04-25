import React, { useState } from "react";
import CustomFileInput from "./CustomInputField";
import Button from "./Button";
import Headings from "./Headings";

const UploadFileContent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <>
      <Headings headings="Upload File" />
      <CustomFileInput onFileChange={handleFileChange} />
      <div className={`flex gap-4 items-start mt-4`}>
        <Button color="green" text="Upload" />
        <Button color="red" text="cancel" />
      </div>
    </>
  );
};

export default UploadFileContent;
