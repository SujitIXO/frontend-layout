import React from 'react'
import UploadFileContent from './UploadFileContent';
import ReportsContent from './ReportsContent';

const MainContent = ({ activeMenuItem }) => {
   
  return (
    <div className="flex-1 w-full h-full p-8 overflow-y-auto overflow-hidden">
      {activeMenuItem === "Upload File" && <UploadFileContent />}
      {activeMenuItem === "Reports" && <ReportsContent />}
    </div>
  )
}

export default MainContent