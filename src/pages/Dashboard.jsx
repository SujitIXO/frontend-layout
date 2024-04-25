import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Upload File");

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMenuItemClick = (itemName) => {
    setActiveMenuItem(itemName);
  };

  return (
    <div className="w-full h-full flex bg-gray-100">
      <Sidebar
        collapsed={sidebarCollapsed}
        toggleSidebar={toggleSidebar}
        activeMenuItem={activeMenuItem}
        handleMenuItemClick={handleMenuItemClick}
      />
      <div className="overflow-hidden flex-1 p-0 m-0">
        <MainContent activeMenuItem={activeMenuItem} />
      </div>
    </div>
  );
};

export default Dashboard;
