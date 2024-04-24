// Sidebar.js
import React from "react";
import { FaDownload } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

const menus = [
  {
    name: "Download File",
    icons: <FaDownload />,
  },
  {
    name: "Reports",
    icons: <TbReportSearch />,
  },
  {
    name: "Settings",
    icons: <IoMdSettings />,
  },
];

const Sidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <div
      className={`bg-white h-screen flex flex-col justify-between border border-r-slate-200 ${
        collapsed ? "w-[5%]" : "w-[20%]"
      }`}
    >
      <div className="p-4">
        <p className={`uppercase text-xs text-gray-600 mb-4 tracking-wider ${collapsed ? 'hidden': ''}`}>
          Homes
        </p>
        <ul className="mt-4">
          {menus.map((item, index) => (
            <li key={index} className="flex items-center mb-2 gap-4">
              {collapsed ? (
                <span className="mt-2">{item.icons}</span>
              ) : (
                <>
                  <span>{item.icons}</span>
                  <a
                    href="#"
                    className="capitalize font-medium text-sm hover:text-[#002D74] transition ease-in-out duration-500"
                  >
                    {item.name}
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="p-4">
        <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">
          Homes
        </p>
        <ul className="mt-4">
          {menus.map((item, index) => (
            <li className="mb-2" key={index}>
              <a
                href="#"
                className="mb-3 capitalize font-medium text-sm hover:text-[#002D74] transition ease-in-out duration-500"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="mt-auto">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 w-full"
        >
          {collapsed ? ">>" : "<< Collapse"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
