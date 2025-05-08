import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../layouts/Footer";

const Layouts = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth/login", "/auth/signup", '/dashboard'];

  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div className="">
      {!shouldHideNavbar && <Navbar />}
      <Toaster />
      <main className="">
        <Outlet />
      </main>
      <div className="">
    {!shouldHideNavbar &&  <Footer />}
      </div>
    </div>
  );
};

export default Layouts;
