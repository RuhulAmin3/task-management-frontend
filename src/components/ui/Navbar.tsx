"use client";
import React, { useState } from "react";

import { removeFromLocalStorage } from "@/utils";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    removeFromLocalStorage("accessToken");
    toast.success("user logout successfully", { autoClose: 1000 });
    router.push("/login");
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
          <div className="lg:flex hidden items-center gap-2">
            <input
              type="text"
              placeholder="Search by title"
              className="rounded-full py-2 px-3 w-48 bg-white text-gray-900 focus:outline-none"
            />
            <div className="text-white cursor-pointer" onClick={handleLogout}>
              <svg
                className="text-2xl"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2">
          <div>
            <div className="flex items-center justify-between gap-3">
              <input
                type="text"
                placeholder="Search by title"
                className="rounded-full py-2 px-3 bg-white text-gray-900 focus:outline-none flex-1 gap-3"
              />
              <div className="text-white cursor-pointer" onClick={handleLogout}>
                <svg
                  className="text-2xl"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
