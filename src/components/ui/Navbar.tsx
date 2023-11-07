"use client";
import React, { useState } from "react";
import { Input } from "@material-tailwind/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold text-xl">Task Manager</div>
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-200"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="lg:flex hidden items-center">
            <input
              type="text"
              placeholder="Search by title"
              className="rounded-full py-2 px-3 w-48 bg-white text-gray-900 focus:outline-none"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto mt-4">
            <div className="lg:flex items-center">
              <input
                type="text"
                placeholder="Search by title"
                className="rounded-full py-2 px-3 bg-white text-gray-900 focus:outline-none w-[100%]"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
