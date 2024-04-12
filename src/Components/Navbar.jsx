import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from React Router

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  // Determine background and text colors based on the current route
  const backgroundClass = location.pathname === "/" ? "bg-black" : "bg-white";
  const textColorClass =
    location.pathname === "/" ? "text-white" : "text-black";

  return (
    <nav className={backgroundClass}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className={`${textColorClass} text-lg font-semibold`}>
                Logo
              </span>
            </div>
            <div className="hidden md:flex flex-grow justify-end ml-[830px] items-right">
              <div className="ml-10 flex items-baseline ">
                <a
                  href="#"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-sm font-medium`}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Games
                </a>
                <a
                  href="#"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Jobs
                </a>
                <a
                  href="#"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View notifications</span>
                {/* Your notification icon */}
              </button>
              <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">View messages</span>
                {/* Your messages icon */}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`${textColorClass} inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className={`${textColorClass} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </a>
            <a
              href="#"
              className={`${textColorClass} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              About
            </a>
            <a
              href="#"
              className={`${textColorClass} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              Services
            </a>
            <a
              href="#"
              className={`${textColorClass} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
