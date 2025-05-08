import React, { useState } from "react";
import { UseTheme } from "../../hooks/UseTheme";
import { FaSun, FaMoon, FaBars } from "react-icons/fa6";
import {FaTimes} from 'react-icons/fa'
import { Link, NavLink } from "react-router-dom";
import Button1 from "../common/button/Button1";

const Navbar = () => { 
  const[showNav,setShowNav] = useState(false)
  const { toggleTheme, isDarkMode } = UseTheme();

  const toggleNav = ()=>{
    setShowNav(!showNav)
  }

  return (
    <nav className="bg-background dark:bg-dark-background z-50 top-0 sticky text-text-primary dark:text-dark-text-primary py-3 border-b border-dark-text-secondary font-heading">
      <div className="container mx-auto flex justify-between items-center px-3">
        <div className="flex items-center">
          <img src="/images/logo.PNG" alt="logo" className="h-10 w-10" />
          <h2 className="text-2xl font-medium font-Dancing text-primary mt-2 dark:text-dark-primary">
            TripTrack
          </h2>
        </div>
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full md:text-2xl text-xl  hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary dark:text-dark-text-primary"
          >
            {isDarkMode ? <FaSun className="text-accent" /> : <FaMoon />}
          </button>
          <button onClick={toggleNav} className=" text-xl">
           {showNav ?  <FaTimes />  :  <FaBars />   }
          </button>
        </div>
        <div className="md:flex hidden">
          <ul className="flex items-center gap-14">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/demo"
              >
                Demo
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className=" items-center gap-2 md:flex hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-text-primary dark:text-dark-text-primary"
          >
            {isDarkMode ? <FaSun className="text-accent" /> : <FaMoon />}
          </button>
          <Link to="/auth/login">
            <Button1
              text="Login"
              color="bg-text-primary text-surface dark:bg-dark-text-primary dark:text-dark-surface"
            />
          </Link>
          <Link to="/auth/signup">
            <Button1
              text="SignUp"
              color="bg-text-primary text-surface dark:bg-dark-text-primary dark:text-dark-surface"
            />
          </Link>
        </div>

        {/* small screen */}
      </div>

    { showNav && <div className="md:hidden flex w-full">
          <ul className="flex flex-col items-center gap-6 py-4 border-t mt-3 w-full">
            <li onClick={()=>setShowNav(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li onClick={()=>setShowNav(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li onClick={()=>setShowNav(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/demo"
              >
                Demo
              </NavLink>
            </li>
            <li onClick={()=>setShowNav(false)}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-accent"
                    : "text-text-primary-light dark:text-text-primary-dark"
                }
                to="/contact"
              >
                  Contact
              </NavLink>
            </li>
            <Link to="/auth/login">
            <Button1
              text="Login"
              color="bg-text-primary text-surface dark:bg-dark-text-primary dark:text-dark-surface"
            />
          </Link>
          <Link to="/auth/signup">
            <Button1
              text="SignUp"
              color="bg-text-primary text-surface dark:bg-dark-text-primary dark:text-dark-surface"
            />
          </Link>
          </ul>
        </div>}
    </nav>
  );
};

export default Navbar;
