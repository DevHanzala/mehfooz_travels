import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Facebook,Instagram, Menu, X } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      {/* <div className="hidden lg:flex bg-[#fafae0] justify-between px-4 py-2 text-sm border-b border-white/10">
        <div className="flex items-center gap-2 text-[#185519]">
          <Phone className="w-4 h-4 mr-1" />
          <span>+123-456-7890</span>
          <span className="mx-2">|</span>
          <Mail className="w-4 h-4 mr-1 text-[#185519]" />
          <span>email@mehfooztravels.com</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://www.facebook.com/share/1281Dp79Wqk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-[#185519]"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-[#185519]"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </div> */}

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-[#185519]">
        <div className="font-bold">
          <p className="text-white  font-serif font-extrabold">MEHFOOZ TRAVELS(PVT) LTD</p>
          <p className="text-white font-serif  text-[10px]">HAJJ & UMRAH SERVICES</p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center text-text-white"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-10">
          <li>
            <Link
              to="/"
              className={`font-bold text-[20px] text-white hover:underline ${
                isActive("/") ? "underline" : ""
              }`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-bold text-[20px] text-white hover:underline ${
                isActive("/about") ? "underline" : ""
              }`}
            >
              COMPANY PROFILE
            </Link>
          </li>
          <li>
            <Link
              to="/hajj"
              className={`font-bold text-[20px] text-white hover:underline ${
                isActive("/packages") ? "underline" : ""
              }`}
            >
              HAJJ
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className={`font-bold text-[20px] text-white hover:underline ${
                isActive("/umrah") ? "underline" : ""
              }`}
            >
              UMRAH
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-bold text-[20px] text-white hover:underline ${
                isActive("/contact") ? "underline" : ""
              }`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-[#185519] p-4 space-y-4 z-50 shadow-lg">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Menu Links */}
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-white hover:underline ${
                  isActive("/") ? "underline" : ""
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-white hover:underline ${
                  isActive("/about") ? "underline" : ""
                }`}
              >
                COMPANY PROFILE
              </Link>
            </li>
            <li>
              <Link
                to="/hajj"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-white hover:underline ${
                  isActive("/packages") ? "underline" : ""
                }`}
              >
                HAJJ
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-white hover:underline ${
                  isActive("/umrah") ? "underline" : ""
                }`}
              >
                UMRAH
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-white hover:underline ${
                  isActive("/contact") ? "underline" : ""
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Contact Details */}
          <div className="flex flex-col gap-2 justify-center text-sm mt-4">
            <div className="flex items-center gap-1 text-white">
              <Phone className="w-4 h-4 mr-1" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center gap-1 text-white">
              <Mail className="w-4 h-4 mr-1" />
              <span>email@mehfooztravels.com</span>
            </div>
            <a
              href="https://www.facebook.com/share/1281Dp79Wqk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:underline"
            >
              <Facebook className="w-4 h-4" />
              HAJJ & UMRAH
            </a>
            <a
              href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white hover:underline"
            >
              <Instagram className="w-4 h-4" />
              HAJJ & UMRAH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
