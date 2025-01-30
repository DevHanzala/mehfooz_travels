import React from "react"
import { PhoneCall, Mail, Phone} from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/MT_logo.png"

const Footer = () => {
  const formatWhatsAppLink = (number) => {
    const cleanNumber = number.replace(/\D/g, "")
    return `https://wa.me/${cleanNumber}`
  }

  return (
    <footer className="bg-[#185519] text-white py-8 px-6 md:px-12">
      {/* Contact Persons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* CEO */}
        <div className="text-center text-2xl md:text-sm md:text-left space-y-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
          {/* <h3 className="text-2xl font-bold mb-4 text-white/90">CEO</h3> */}
          <h3 className="text-2xl font-bold mb-4 text-white/90 underline">Muhammad Naeem</h3>
          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-center md:justify-start gap-3 text-base">
              <PhoneCall className="w-5 h-5 text-white/60" />
              <span className="font-medium">+92 334 8888356</span>
            </p>
            <a
  href={formatWhatsAppLink("923002685123")}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center md:justify-start gap-3 text-base hover:text-green-300 transition-colors"
>
  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
  <span className="font-medium">WhatsApp</span>
</a>

          </div>
        </div>

        {/* Manager */}
        <div className="text-center text-2xl md:text-sm md:text-left space-y-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
          {/* <h3 className="text-2xl font-bold mb-4 text-white/90">Manager</h3> */}
          <h3 className="text-2xl font-bold mb-4 text-white/90 underline">Ahmed Naeem</h3>
          <div className="flex flex-col gap-3">
            <p className="flex items-center justify-center md:justify-start gap-3 text-base">
              <PhoneCall className="w-5 h-5 text-white/60" />
              <span className="font-medium">+92 333 3219939</span>
            </p>
            <a
  href={formatWhatsAppLink("923002685123")}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center md:justify-start gap-3 text-base hover:text-green-300 transition-colors"
>
  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
  <span className="font-medium">WhatsApp</span>
</a>

          </div>
        </div>

        {/* Office */}
        <div className="text-center text-2xl md:text-sm md:text-left space-y-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
          <h3 className="text-2xl font-bold mb-4 text-white/90 underline">Office</h3>
          <div className="flex flex-col gap-3">
          <a
  href={formatWhatsAppLink("923002685123")}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center md:justify-start gap-3 text-base hover:text-green-300 transition-colors"
>
  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
  <span className="font-medium">WhatsApp</span>
</a>

            <div className="flex items-center justify-center md:justify-start gap-3 text-base">
              <Phone className="w-5 h-5 text-white/60" />
              <span className="font-medium">+92 213 6342272</span>
            </div>
            {/* Location Information */}
            <a
  href="https://maps.google.com/?q=Office+No.+1,+First+Floor,+Amma+Tower,+Main+University+Road,+Karachi"
  target="_blank"
  rel="noopener noreferrer"
  className="flex md:items-center justify-start md:gap-3 text-base hover:text-white/80 transition-colors group"
>
  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform" />
  <span className="font-medium text-sm">
  BS-9/1 Block No. 13, Federal B Area, Karachi Pakistan
  </span>
</a>

          </div>
        </div>
      </div>

      {/* Company Contact Details & Social Links */}
      <div className="mt-4 text-2xl md:text-sm border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        {/* Company Logo & Email */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={logo || "../assets/MT_logo.png"}
            alt="Logo"
            className="w-20 h-20 rounded-full object-cover border-2 border-white/80 shadow-lg hover:border-white transition-colors duration-200"
          />
          <a
            href="mailto:info@mehfooztravels.com"
            className="flex items-center gap-3 hover:text-white/80 transition-colors text-lg group"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">info@mehfooztravels.com</span>
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-8">
          <a
            href="https://www.facebook.com/share/1281Dp79Wqk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white/80 transition-colors text-lg group"
          >
           <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white/80 transition-colors text-lg group"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

