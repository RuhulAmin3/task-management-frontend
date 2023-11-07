import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404 Not Found</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist.
        </p>
        <Link href="/tasks" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
