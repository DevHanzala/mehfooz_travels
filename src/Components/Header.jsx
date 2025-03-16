import { useState, useCallback, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faXmark, faBars } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import logo from "../assets/MT_logo-2.svg"
import "@fontsource/dancing-script"

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [text, setText] = useState("")
  const fullText = "Excellence 21 Years In Service"

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        index = 0
      }
    }, 150)

    return () => clearInterval(intervalId)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  }

  return (
    <header className="w-full shadow-lg">
      {/* Top Bar - Desktop Only */}
      <div className="hidden lg:block bg-[#185519] text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@mehfooztravels.com"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              <span>info@mehfooztravels.com</span>
            </a>
            <a href="tel:+922136342272" className="flex items-center gap-2 hover:text-gray-200 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <span>+92 21 36342272</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/share/1281Dp79Wqk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              <span>Mehfooz Travels Pvt.Ltd</span>
            </a>
            <a
              href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-200 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              <span>mehfooztravelspvt.ltd</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between md:p-4 p-2 bg-white">
        {/* Logo and Company Name */}
        <div className="flex items-center justify-center md:gap-3 gap-1">
          <a href="/">
            <img
              src={logo || "/placeholder.svg"}
              alt="Mehfooz Travels Logo"
              className="md:w-16 md:h-16 w-14 h-14 rounded-full object-cover shadow-lg"
            />
          </a>

          <div>
            <a href="/">
              <p className="text-[#185519] md:text-4xl text-2xl font-extrabold md:mb-1 mb-0">MEHFOOZ TRAVELS</p>
            </a>
            <p
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-black md:text-3xl text-xl md:font-bold italic md:tracking-wide"
            >
              {text}
              <span className="text-[#185519] font-extrabold text-lg md:text-2xl inline-block mx-1"></span>
            </p>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center text-[#185519] hover:bg-[#185519]/10 p-2 rounded-lg transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="w-6 h-6" />
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6">
          {["HOME", , "HAJJ", "UMRAH", "COMPANY PROFILE", "CONTACT"].map((item) => {
            const isActive = location.pathname === (item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`)
            return (
              <li key={item}>
                <Link
                  to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className={`font-bold text-lg px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-[#185519] text-white rounded-lg"
                      : "text-[#185519] hover:bg-[#185519]/10 hover:rounded-lg"
                  }`}
                >
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-white p-4 space-y-4 z-50 shadow-lg overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-[#185519] hover:bg-[#185519]/10 p-2 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
            </button>

            {/* Menu Links */}
            <motion.ul variants={menuVariants} className="space-y-4 mt-16">
              {["HOME", "HAJJ", "UMRAH", "COMPANY PROFILE", "CONTACT"].map((item) => {
                const isActive =
                  location.pathname === (item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`)
                return (
                  <motion.li key={item} variants={menuItemVariants}>
                    <Link
                      to={item === "HOME" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                      onClick={toggleMenu}
                      className={`block font-medium text-lg p-3 rounded-lg transition-colors ${
                        isActive ? "bg-[#185519] text-white" : "text-[#185519] hover:bg-[#185519]/5"
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>

            {/* Contact Details */}
            <motion.div variants={menuVariants} className="flex flex-col gap-4 mt-8 p-4 bg-gray-50 rounded-lg">
              <a
                href="tel:+922136342272"
                className="flex items-center gap-2 text-[#185519] p-2 hover:bg-[#185519]/5 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                <span>+92 213 6342272</span>
              </a>
              <a
                href="mailto:email@mehfooztravels.com"
                className="flex items-center gap-2 text-[#185519] p-2 hover:bg-[#185519]/5 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                <span>email@mehfooztravels.com</span>
              </a>
              <a
                href="https://www.facebook.com/share/1281Dp79Wqk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#185519] p-2 hover:bg-[#185519]/5 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                <span>Mehfooz Travels Pvt.Ltd</span>
              </a>
              <a
                href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#185519] p-2 hover:bg-[#185519]/5 rounded-lg transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                <span>mehfooztravelspvt.ltd</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

