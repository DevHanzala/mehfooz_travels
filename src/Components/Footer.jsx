import React from "react";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#185519] text-white py-6 px-4">
      {/* Quick Links Section */}
      <div className="md:flex items-center pb-4 mb-4">
        <div className="font-bold text-white text-2xl md:mb-0 mb-2 md:mr-4 md:text-left text-center">
          Quick Links
        </div>
        <div className="flex-1 border-b-3 border-white"></div>
      </div>

      {/* Contact Persons Section */}
      <div className="flex md:justify-between justify-evenly items-center flex-wrap space-y-2 space-x-2 md:space-y-0 md:px-5">
        <div className="md:border-b-0 text-center md:text-left font-bold md:border-r-4 border-white pb-4 md:pb-0 md:pr-6">
          <p>CEO</p>
          <p>John Doe</p>
          <p className="flex justify-center items-center gap-2">
            <Phone className="w-4 h-4" /> +123-456-7890
          </p>
        </div>
        <div className="md:border-b-0 text-center md:text-left font-bold md:border-r-4 border-white pb-4 md:pb-0 md:pr-6">
        <p>Manager</p>
          <p>Jane Smith</p>
          <p className="flex justify-center items-center gap-2">
            <Phone className="w-4 h-4" /> +987-654-3210
          </p>
        </div>
        <div className="md:border-b-0 text-center md:text-left md:border-r-4 font-bold border-white pb-4 md:pb-0 md:pr-6">
        <p>Support</p>
          <p>Mark Johnson</p>
          <p className="flex justify-center items-center gap-2">
            <Phone className="w-4 h-4" /> +456-789-0123
          </p>
        </div>
        <div className="pb-4 md:pb-0 font-bold text-center md:text-left">
        <p>Sales</p>
          <p>Emily Davis</p>
          <p className="flex justify-center items-center gap-2">
            <Phone className="w-4 h-4" /> +321-654-0987
          </p>
        </div>
      </div>

      {/* Company Contact Details & Social Links */}
      <div className="mt-6 flex flex-col md:flex-row justify-between border-t-3 border-white items-center text-center">
        <div className="flex items-center gap-4 m-2">
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <Phone className="w-5 h-5" /> +123-456-7890
          </a>
          <a
            href="mailto:info@company.com"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <Mail className="w-5 h-5" /> info@company.com
          </a>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/share/1281Dp79Wqk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
          <a
            href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300"
          >
            <Instagram className="w-5 h-5" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
