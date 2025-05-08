import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome,
  FiMap,
  FiFileText,
  FiPieChart,
  FiDollarSign,
  FiZap,
  FiUser,
  FiHelpCircle
} from "react-icons/fi";

const Sidebar = ({setShowSideBar}) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", icon: <FiHome size={20} />, path: "/dashboard" },
    { name: "My Trips", icon: <FiMap size={20} />, path: "/dashboard/my-trips" },
    { name: "Trip Details", icon: <FiFileText size={20} />,  path:"/dashboard/trip-details/:id?" },
    { name: "Budget Planner", icon: <FiPieChart size={20} />, path: "/dashboard/budget-planner" },
    { name: "Expense Tracker", icon: <FiDollarSign size={20} />, path: "/dashboard/expense-tracker" },
    { name: "AI Assistant", icon: <FiZap size={20} />, path: "/dashboard/ai-assistant" },
    { name: "Profile", icon: <FiUser size={20} />, path: "/dashboard/profile" },
    { name: "FAQ", icon: <FiHelpCircle size={20} />, path: "/dashboard/faq" }
  ];

  return (
    <div className="w-64 h-full fixed bg-surface dark:bg-dark-surface border-r border-gray-200 dark:border-gray-700 md:py-6 py-20">
      <div className="p-4">
       <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-6 px-2 font-heading">
          TripTrack
        </h2>
       </div>
        
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={()=>setShowSideBar(false)}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-primary dark:bg-dark-primary text-surface dark:text-dark-surface"
                  : "text-text-primary dark:text-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;