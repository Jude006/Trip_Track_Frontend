import React, { useState } from "react";
import Sidebar from "../components/layouts/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { FaTimes } from 'react-icons/fa';
import Navbar from "./Navbar";

const Dashboard_layout = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const location = useLocation()

    const getPagetTitle = ()=>{
      const path = location.pathname;
      if(path.startsWith('/dashboard/profile')) return 'Profile';
      if(path.startsWith('/dashboard/faq')) return 'FAQ';
      if(path.startsWith('/dashboard/ai-assistant')) return 'Ai-Assitant';
      if(path.startsWith('/dashboard/expense-tracker')) return 'Expense-Tracker';
      if(path.startsWith('/dashboard/budget-planner')) return 'Budget-Planner';
      if(path.startsWith('/dashboard/my-trips')) return 'My-Trips';
      if(path.startsWith('/dashboard/trip-details/')) return 'Trips-Details';

      return 'Dashboard'
    }

  return (
    <div className="flex">
      <div className="md:flex hidden">
        <Sidebar />
      </div>
      <div
        className={`md:hidden fixed z-40 bg-black bg-opacity-35 h-screen w-full top-0 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          showSideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 bg-white h-full">
          <Sidebar setShowSideBar={setShowSideBar}/>
        </div>
        <FaTimes
          onClick={() => setShowSideBar(false)}
          size={25}
          className="right-5 top-5 absolute text-white shadow cursor-pointer"
        />
      </div>
      <main className="flex-1 border-l md:ml-64 relative min-h-screen h-full  bg-background dark:bg-[#f0f0f0]">
        <Navbar title={getPagetTitle()} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
       <div className="pb-4 ">
       <Outlet />
       </div>
      </main>
    </div>
  );
};

export default Dashboard_layout;
