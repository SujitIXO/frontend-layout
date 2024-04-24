import React, { useState } from 'react'
import CustomFileInput from './CustomInputField'
import Button from './Button';

const MainContent = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      };

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Upload File</h1>
        <CustomFileInput onFileChange={handleFileChange} />
        <div className={`flex gap-4 items-start mt-4`}>
          <Button color="blue" text="Upload" />
          <Button color="red" text="cancel" />
        </div>
    </div>
  )
}

export default MainContent