import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current location

  // // Determine background and text colors based on the current route
  // const backgroundClass = location.pathname === "/" ? "bg-black" : "bg-white";
  // const textColorClass =
  //   location.pathname === "/" ? "text-white" : "text-black";

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-32">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/img/logo-transparent.png"
                className="w-full h-[100px]"
              />
            </div>
            <div className="hidden md:flex flex-grow justify-end ml-[830px] items-right">
              <div className="ml-10 flex items-baseline ">
                <Link
                  to="/about"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-sm font-medium`}
                >
                  About Us
                </Link>
                <Link
                  to="/games"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Games
                </Link>
                <Link
                  to="/join"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Jobs
                </Link>
                <Link
                  to="/contact"
                  className={`${textColorClass} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`${textColorClass} inline-flex items-center justify-center p-2 text-gray-400 `}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <svg
                  className="block h-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-8 w-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center" id="mobile-menu">
          <div className="px-2 pt-2 pb-16 space-y-1 sm:px-3">
            <Link
              to="/about"
              className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
            >
              About
            </Link>
            <Link
              to="/games"
              className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
            >
              Games
            </Link>
            <Link
              to="/join"
              className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
            >
              Jobs
            </Link>
            <Link
              to="/contact"
              className={`${textColorClass} text-6xl block px-3 py-2 rounded-md text-base font-medium`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
