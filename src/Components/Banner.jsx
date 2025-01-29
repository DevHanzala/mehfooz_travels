import React from "react";

const Banner = () => {
  return (
    <footer className="bg-black text-gray-300 flex flex-col md:flex-row items-center justify-between p-4 font-mono">
      <div className="text-center mb-4 md:mb-0">
        <p>Mehfooz Travels Pakistan</p>
      </div>
      <div className="text-center">
        <p>
          Designed by{" "}
          <a
            href="https://wa.me/03302830270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#185519] underline hover:text-green-400"
          >
            DevHG
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Banner;
