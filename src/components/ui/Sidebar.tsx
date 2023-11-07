import React from "react";

function Sidebar() {
  return (
    <div className="h-screen bg-blue-500 w-16 md:w-64 text-white">
      <div className="p-4">
        <ul>
          <li className="sm:mb-4 md:mb-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-8 md:w-8 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="hidden md:inline-block ml-4">Pending</span>
            </a>
          </li>
          <li className="sm:mb-4 md:mb-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-8 md:w-8 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="hidden md:inline-block ml-4">Complete</span>
            </a>
          </li>
          <li className="sm:mb-4 md:mb-4">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-8 md:w-8 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="hidden md:inline-block ml-4">In Progress</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
