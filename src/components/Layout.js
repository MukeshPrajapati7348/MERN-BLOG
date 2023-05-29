import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div className="main">
      <Header />
      <Toaster />
      <Outlet />
    </div>
  );
};

export default Layout;
