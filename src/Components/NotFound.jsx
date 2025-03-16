import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark-green text-[#185519] text-center">
      <h1 className="text-6xl font-bold animate-bounce">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="text-lg mt-2">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-white text-dark-green rounded-lg text-lg font-semibold hover:bg-gray-300 transition-all">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
