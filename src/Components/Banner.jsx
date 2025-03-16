import React from "react";

const Banner = () => {
  return (
    <footer className="bg-black font-sans text-gray-300 flex flex-col md:flex-row items-center justify-between p-2">
      <div className="text-center mb-4 md:mb-0">
        <p>Mehfooz Travels Pakistan</p>
      </div>
      <div className="text-center">
        <p>
          Designed by{" "}
          <a
            href="https://wa.me/923302830270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 underline hover:text-green-400"
          >
            DevHG
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Banner;
