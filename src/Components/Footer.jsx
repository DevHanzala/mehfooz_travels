import { PhoneCall, Mail, Phone } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import logo from "../assets/MT_logo-2.svg"

const Footer = () => {
  const formatWhatsAppLink = (number) => {
    const cleanNumber = number.replace(/\D/g, "")
    return `https://wa.me/${cleanNumber}`
  }

  return (
    <footer className="bg-[#185519] text-white py-8 px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* CEO */}
        <div className="text-center md:text-left space-y-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="space-y-2">
            <h5 className="text-2xl font-bold text-white/90">Muhammad Naeem</h5>
            <p className="text-sm text-white/70 italic">Chief Executive Officer</p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:mnaeem.ceo@mehfooztravels.com"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <Mail className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">mnaeem.ceo@mehfooztravels.com</span>
            </a>
            <a
              href="tel:+923348888356"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">+92 334 8888356</span>
            </a>
            <a
              href={formatWhatsAppLink("923002685123")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* COO */}
        <div className="text-center md:text-left space-y-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]">
          <div className="space-y-2">
            <h5 className="text-2xl font-bold text-white/90">Ahmed Naeem</h5>
            <p className="text-sm text-white/70 italic">Chief Operating Officer</p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:ahmed@mehfooztravels.com"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <Mail className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">ahmed@mehfooztravels.com</span>
            </a>
            <a
              href="tel:+923333219939"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">+92 333 3219939</span>
            </a>
            <a
              href={formatWhatsAppLink("923333219939")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Office */}
        <div className="text-center md:text-left space-y-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="text-2xl font-bold text-white/90">Office</h3>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@mehfooztravels.com"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <Mail className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">info@mehfooztravels.com</span>
            </a>
          
            <a
              href="tel:+922136342272"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <Phone className="w-5 h-5 text-white/60 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">+92 21 36342272</span>
            </a>
            <a
              href={formatWhatsAppLink("923366655663")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-green-300 transition-colors"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="https://www.google.com/maps?q=24.9363472,67.0662002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-base group hover:text-white/80 transition-colors"
            >
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="w-8 h-8 text-white/60 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="font-medium md:text-sm text-xs">
              BS-9/1, Block 13, Federal B Area, Near Gulberg Police Station, Karachi, Pakistan
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Company Logo & Social Links */}
      <div className="mt-8 pt-6  border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        {/* Logo and Company Name */}
        <div className="flex md:flex-row  flex-col items-center gap-4">
          <a href="/" className="transform  transition-transform duration-300 hover:scale-110 focus:scale-105">
            <img
              src={logo || "/placeholder.svg"}
              alt="Mehfooz Travels Logo"
              className="w-16 h-16 bg-white md:w-20 md:h-20 rounded-full border-2 border-white/80 shadow-lg hover:border-white transition-colors duration-200"
            />
          </a>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">MEHFOOZ TRAVELS</h1>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <a
            href="https://www.facebook.com/share/1281Dp79Wqk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:text-white/80 transition-colors w-full md:w-auto justify-center"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
            />
            <span className="font-medium text-base md:text-lg whitespace-nowrap">Mehfooz Tavels Pvt.Ltd</span>
          </a>
          <a
            href="https://www.instagram.com/mehfooztravelspvt.ltd?igsh=MTQ5MnZlMTZncGNxeA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group hover:text-white/80 transition-colors w-full md:w-auto justify-center"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
            />
            <span className="font-medium text-base md:text-lg whitespace-nowrap">mehfooztravelspvt.ltd</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

