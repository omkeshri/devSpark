import React from "react";
import NavBar from "../Common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";

const Body = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Body;
