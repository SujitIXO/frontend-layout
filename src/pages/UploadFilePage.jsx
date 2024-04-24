import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";


const UploadFilePage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <MainContent />
    </div>
  );
};

export default UploadFilePage;
