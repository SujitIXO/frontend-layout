// Sidebar.js
import React from "react";
import { FaUpload } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const menus = [
  {
    name: "Upload File",
    icons: <FaUpload />,
  },
  {
    name: "Reports",
    icons: <TbReportSearch />,
  },
];

const Sidebar = ({ collapsed, toggleSidebar, activeMenuItem, handleMenuItemClick }) => {
  return (
    <div
      className={`bg-white hidden md:flex flex-col justify-between border border-r-slate-200 ${
        collapsed ? "w-[5%]" : "w-[20%]"
      }`}
    >
      <div className="p-4">
        <p className={`uppercase text-lg text-gray-600 mb-4 tracking-wider ${collapsed ? 'hidden' : 'block'}`}>Dashboard</p>
        <ul className="mt-4">
          {menus.map((item, index) => (
            <li key={index} className={`flex items-center mb-2 gap-4 ${collapsed ? 'px-2 py-2' : 'px-4 py-4'} text-lg rounded-xl button_slide slide_right ${
              activeMenuItem === item.name ? "bg-[#7da9f1] text-white rounded-xl" : ""
            }`}>
              {collapsed ? (
                <span className="mt-2 cursor-pointer" onClick={() => handleMenuItemClick(item.name)}>{item.icons}</span>
              ) : (
                <div
                  className={`flex gap-4 cursor-pointer`}
                  onClick={() => handleMenuItemClick(item.name)}
                >
                  <span>{item.icons}</span>
                  <span className="capitalize font-medium text-sm">
                    {item.name}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <button
          onClick={toggleSidebar}
          className="bg-[#002D74] hover:bg-[#375b94] text-white font-bold py-2 px-4 w-full"
        >
          {collapsed ? ">>" : "<< Collapse"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
