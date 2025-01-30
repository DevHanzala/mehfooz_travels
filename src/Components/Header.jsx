import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/MT_logo.png"

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#185519] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              <span>email@mehfooztravels.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <span>+92 213 6342272</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/share/1281Dp79Wqk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              <span>HAJJ & UMRAH</span>
            </a>
            <a
              href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              <span>HAJJ & UMRAH</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white">
        {/* Logo and Company Name */}
        <div className="flex items-center md:gap-3 gap-1">
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className="md:w-18 md:h-18 w-11 h-11 rounded-full object-cover"
          />
          <div className="font-bold md:text-2xl">
            <p className="text-[#185519] md:text-5xl text-2xl font-extrabold md:mb-1 mb-0">MEHFOOZ TRAVELS</p>
            <p className="text-[#185519] md:text-[15px] underline text-[8px] md:font-extrabold italic">
  HAJJ & UMRAH SERVICES (21 YEARS OF SERVICE EXCELLENCE)
</p>

          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden flex items-center text-[#185519]">
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6">
          <li>
            <Link
              to="/"
              className={`font-bold text-[20px] text-[#185519] hover:underline ${isActive("/") ? "underline" : ""}`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`font-bold text-[20px] text-[#185519] hover:underline ${
                isActive("/about") ? "underline" : ""
              }`}
            >
              COMPANY PROFILE
            </Link>
          </li>
          <li>
            <Link
              to="/hajj"
              className={`font-bold text-[20px] text-[#185519] hover:underline ${
                isActive("/packages") ? "underline" : ""
              }`}
            >
              HAJJ
            </Link>
          </li>
          <li>
            <Link
              to="/packages"
              className={`font-bold text-[20px] text-[#185519] hover:underline ${
                isActive("/umrah") ? "underline" : ""
              }`}
            >
              UMRAH
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-bold text-[20px] text-[#185519] hover:underline ${
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
        <div className="lg:hidden absolute top-0 left-0 w-full bg-white p-4 space-y-4 z-50 shadow-lg">
          {/* Close Button */}
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#185519] focus:outline-none">
            <FontAwesomeIcon icon={faXmark} className="w-8 h-8" />
          </button>

          {/* Menu Links */}
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block font-bold text-[17px] text-[#185519] hover:underline ${
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
                className={`block font-bold text-[17px] text-[#185519] hover:underline ${
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
                className={`block font-bold text-[17px] text-[#185519] hover:underline ${
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
                className={`block font-bold text-[17px] text-[#185519] hover:underline ${
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
                className={`block font-bold text-[17px] text-[#185519] hover:underline ${
                  isActive("/contact") ? "underline" : ""
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>

          {/* Contact Details */}
          <div className="flex flex-col gap-2 justify-center text-sm mt-4">
            <div className="flex items-center gap-1 text-[#185519]">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-1" />
              <span>+123-456-7890</span>
            </div>
            <div className="flex items-center gap-1 text-[#185519]">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-1" />
              <span>email@mehfooztravels.com</span>
            </div>
            <a
              href="https://www.facebook.com/share/1281Dp79Wqk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#185519] hover:underline"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              HAJJ & UMRAH
            </a>
            <a
              href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#185519] hover:underline"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              HAJJ & UMRAH
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

