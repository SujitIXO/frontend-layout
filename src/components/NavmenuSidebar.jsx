import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useAuth } from "../context/AuthContext";

const sidemenu = [
  {
    title: "Home",
    link: "/home",
    submenu: [null],
  },
  {
    title: "About Us",
    link: "/about-us",
    submenu: [null],
  },
  {
    title: "Contact Us",
    link: "/contact-us",
    submenu: [null],
  },
  {
    title: "Services",
    link: "/services",
    submenu: [null],
  },
  {
    title: "Dashboard",
    link: "/dashboard",
    submenu: [null],
  },
  {
    title: "Profile",
    link: "#",
    submenu: [
      {
        title: "Edit Profile",
        link: "/edit-profile",
      },
      {
        title: "Logout",
        link: "/",
      },
    ],
  },
];

const NavmenuSidebar = ({ isOpen, onClose }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const { isAuthenticated } = useAuth();
  
    useEffect(() => {
      if (!isOpen) {
        setOpenMenu(null);
      }
    }, [isOpen]);
  
    const toggleSubMenu = (index) => {
      setOpenMenu(openMenu === index? null : index);
    };
  
    const handleMenuItemClick = (index, event) => {
      event.preventDefault();
      toggleSubMenu(index);
      if (sidemenu[index].title!== "Profile" && (!sidemenu[index].submenu ||!sidemenu[index].submenu[0])) {
        onClose();
      }
    };
  
    return (
      <div className={`sidebar md:hidden ${isOpen? "open" : ""}`}>
        <div
          className="absolute top-3 right-4 bg-transparent border-none text-xl outline-none cursor-pointer"
          onClick={onClose}
        >
          <FaTimes className="text-black" />
        </div>
        <div className="flex flex-col text-left px-5 py-10 mt-10">
          <ul className="divide-y">
            {sidemenu.filter((item, index) => {
              if (item.title === "Profile" || item.title === "Dashboard") {
                return isAuthenticated;
              }
              return true;
            }).map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={(event) => {
                    if (item.title === "Profile") {
                      handleMenuItemClick(index, event);
                    } else {
                      onClose();
                    }
                  }}
                  className="text-[#002D74] flex items-center justify-between py-6 px-4 uppercase"
                >
                  <span>{item.title}</span>
                  {item.submenu && item.submenu[0] && (
                    <IoIosArrowDown
                      className={`h-4 w-4 ${
                        openMenu === index? "transform rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {item.submenu && openMenu === index && item.submenu[0] && (
                  <ul className="px-8">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <Link
                          to={subItem.link}
                          onClick={onClose}
                          className="text-[#3F3F46]"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default NavmenuSidebar;
