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
      <div className="hidden lg:flex bg-[#588157] justify-between px-4 py-2 text-sm border-b border-white/10">
        <div className="flex items-center gap-2 text-[#fafae0]">
          <Phone className="w-4 h-4 mr-1" />
          <span>+123-456-7890</span>
          <span className="mx-2">|</span>
          <Mail className="w-4 h-4 mr-1" />
          <span>email@mehfooztravels.com</span>
        </div>
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://www.facebook.com/share/1281Dp79Wqk/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-white"
          >
            <Facebook className="w-4 h-4" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1 text-white"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-[#fafae0]">
        <div className="font-bold">
          <p className="text-[#588157] md:text-3xl font-serif">MEHFOOZ TRAVELS(PVT) LTD</p>
          <p className="text-black font-serif md:text-[22px] text-[12px]">HAJJ & UMRAH SERVICES</p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center text-[#344E41]"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-4 text-sm">
          <li>
            <Link
              to="/"
              className={`font-bold text-[17px] text-black hover:underline ${
                isActive("/") ? "underline text-[#344E41]" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-bold text-[17px] text-black hover:underline ${
                isActive("/about") ? "underline text-[#344E41]" : ""
              }`}
            >
              Company Profile
            </Link>
          </li>
          <li>
            <Link
              to="/hajj"
              className={`font-bold text-[17px] text-black hover:underline ${
                isActive("/packages") ? "underline text-[#344E41]" : ""
              }`}
            >
              Hajj
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className={`font-bold text-[17px] text-black hover:underline ${
                isActive("/umrah") ? "underline text-[#344E41]" : ""
              }`}
            >
              Umrah
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-bold text-[17px] text-black hover:underline ${
                isActive("/contact") ? "underline text-[#344E41]" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-[#fafae0] p-4 space-y-4 z-50 shadow-lg">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-[#344E41] focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Menu Links */}
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-black hover:underline ${
                  isActive("/") ? "underline text-[#344E41]" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-black hover:underline ${
                  isActive("/about") ? "underline text-[#344E41]" : ""
                }`}
              >
                Company Profile
              </Link>
            </li>
            <li>
              <Link
                to="/hajj"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-black hover:underline ${
                  isActive("/packages") ? "underline text-[#344E41]" : ""
                }`}
              >
                Hajj
              </Link>
            </li>
            <li>
              <Link
                to="/packages"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-black hover:underline ${
                  isActive("/umrah") ? "underline text-[#344E41]" : ""
                }`}
              >
                Umrah
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-black hover:underline ${
                  isActive("/contact") ? "underline text-[#344E41]" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Contact Details */}
          <div className="flex flex-col gap-1 text-sm mt-4">
            <div className="flex items-center gap-2 text-[#344E41]">
              <Phone className="w-4 h-4 mr-1" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-[#344E41]">
              <Mail className="w-4 h-4 mr-1" />
              <span>email@mehfooztravels.com</span>
            </div>
            <a
              href="https://www.facebook.com/share/1281Dp79Wqk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#344E41] hover:underline"
            >
              <Facebook className="w-4 h-4" />
              HAJJ & UMRAH
            </a>
            <a
              href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#344E41] hover:underline"
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
