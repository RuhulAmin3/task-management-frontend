"use client";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-lg mb-6">
          An error occurred while processing your request.
        </p>
        {/* <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link> */}
      </div>
    </div>
  );
};

export default ErrorPage;
