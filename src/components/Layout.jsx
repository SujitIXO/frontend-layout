import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="p-0 m-0 w-full h-full flex flex-col">
      <Navbar />
      <div className="flex flex-col grow align-middle justify-center p-0 m-0">
        <main className="p-0 m-0 w-full h-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
