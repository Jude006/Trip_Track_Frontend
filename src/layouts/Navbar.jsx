import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { UseTheme } from "../hooks/UseTheme";
import { FaMoon, FaSun } from "react-icons/fa6";
import toast from "react-hot-toast";

const Navbar = ({ title, setShowSideBar }) => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const { toggleTheme, isDarkMode } = UseTheme();

  const handleSignout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out ?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      toast.success("Logged out sucessfully");
      setTimeout(() => {
        navigate("/");
        setShowDropdown(false);
      }, 3000);
    }
  };

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-surface dark:bg-dark-surface border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30 w-full">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden flex text-text-primary dark:text-dark-text-primary"
          onClick={() => setShowSideBar(true)}
        >
          <FaBars size={20} />
        </button>
        <h1 className="text-xl font-semibold font-heading text-text-primary dark:text-dark-text-primary">
          {title}
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-2">
          <FaSearch className="text-gray-500 dark:text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:outline-none text-sm w-40"
          />
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary dark:text-dark-text-primary"
        >
          {isDarkMode ? <FaSun className="text-accent" /> : <FaMoon />}
        </button>

        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="h-8 w-8 rounded-full overflow-hidden border-2 border-primary dark:border-dark-primary">
              <img
                src={
                  user?.profile?.avatar
                    ? `${import.meta.env.VITE_BACKEND_URL}${
                        user.profile.avatar
                      }`
                    : "/default-avatar.png"
                }
                alt="Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = "/default-avatar.png";
                }}
              />
            </div>
            <span className="hidden md:inline-block text-sm font-medium text-text-primary dark:text-dark-text-primary">
              {user?.profile?.firstName || "User"}
            </span>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-surface dark:bg-dark-surface rounded-md shadow-lg py-1 z-50 border border-gray-200 dark:border-gray-700">
              <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <p className="text-sm text-text-primary dark:text-dark-text-primary">
                  {user?.profile?.firstName} {user?.profile?.lastName}
                </p>
                <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                  {user?.email}
                </p>
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-text-primary dark:text-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => navigate("/dashboard/profile")}
              >
                Your Profile
              </a>

              <a
                className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={handleSignout}
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
