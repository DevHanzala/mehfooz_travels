import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true)


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-12 px-4">
      <motion.div
        className="text-center pb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <motion.h1
          className="md:text-6xl text-4xl font-extrabold text-[#185519] mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.div
          className="w-24 h-1 bg-[#185519] mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-stretch mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex flex-col justify-between space-y-6" variants={itemVariants}>
            <a href="https://www.google.com/maps?q=24.9363472,67.0662002" target="_blank" rel="noopener noreferrer">
              <ContactItem
                icon={<FaMapMarkerAlt className="text-5xl md:text-4xl" />}
                title="Our Address"
                content="BS-9/1, Block 13, Federal B Area, Near Gulberg Police Station, Karachi, Pakistan"
              />
            </a>

            <a href="mailto:info@mehfooztravels.com" target="_blank" rel="noopener noreferrer">
              <ContactItem
                icon={<FaEnvelope className="text-5xl md:text-4xl" />}
                title="Email Us"
                content={<span className="text-gray-200 hover:text-white">info@mehfooztravels.com</span>}
              />
            </a>

            <a href="https://wa.me/923366655663" target="_blank" rel="noopener noreferrer">
              <ContactItem
                icon={<FaWhatsapp className="text-5xl md:text-4xl" />}
                title="WhatsApp"
                content={<span className="text-gray-200 hover:text-white">+92 336 6655663</span>}
              />
            </a>

            <a href="tel:+92213642272" target="_blank" rel="noopener noreferrer">
              <ContactItem
                icon={<FaPhoneAlt className="text-5xl md:text-4xl" />}
                title="Call Us"
                content={<span className="text-gray-200 hover:text-white">+92 21 36342272</span>}
              />
            </a>

            <motion.button
              className="mt-8 bg-[#185519] text-white py-3 px-6 rounded-full font-bold text-lg shadow-md w-full md:w-auto"
              whileHover={{ scale: 1.05, backgroundColor: "#1e671f" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => window.open("https://www.google.com/maps?q=24.9363472,67.0662002", "_blank")}
            >
              Get Directions
            </motion.button>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden shadow-lg h-[400px] md:h-full relative"
            variants={itemVariants}
          >
            <AnimatePresence>
              {isMapLoading && (
                <motion.div
                  className="absolute inset-0 bg-[#185519] bg-opacity-20 flex items-center justify-center"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 border-4 border-[#185519] border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.5143640801897!2d67.0300605!3d24.8617631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x7c4aa1d8a7b75586!2sMehfooz%20Travels!5e0!3m2!1sen!2s!4v1653472576148!5m2!1sen!2s"
              className="w-full h-full"
              style={{ border: 0, cursor: "pointer" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
              onLoad={() => setIsMapLoading(false)}
              onClick={() => window.open("https://www.google.com/maps?q=24.9363472,67.0662002", "_blank")}
            ></iframe>
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/923366655663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#185519] text-white p-4 rounded-full shadow-lg hover:bg-[#1e671f] transition-colors z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          opacity: { duration: 0.3 },
          scale: { duration: 0.3 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.a>
    </div>
  )
}

const ContactItem = ({ icon, title, content }) => (
  <motion.div
    className="flex flex-col md:flex-row bg-[#185519] p-4 rounded-3xl text-white items-center md:items-start"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">{icon}</div>
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-sm md:text-base">{content}</div>
    </div>
  </motion.div>
)

export default Contact

