import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import CustomCursor from "./CustomCursor";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-white z-50">
       
        {/* Left Side - Hamburger & Name */}
        <div className="flex items-center space-x-4">
           <CustomCursor /> {/* Add the custom cursor here */}
          {/* Hamburger (small screens only) */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

          <h1 className="text-xl font-bold">Shiva</h1>
        </div>

        {/* Right Side - Normal Nav (hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            Latest Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Sidebar (mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <div className="flex flex-col space-y-6 px-6 py-6">
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            Latest Work
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-base transition-all duration-200 hover:text-black ${
                isActive ? "underline underline-offset-4" : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}
