import { useState, useEffect, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaTimes, FaDownload, FaShare } from "react-icons/fa"
import B1 from "../assets/B1.jpg"
import B2 from "../assets/B2.jpg"
import B3 from "../assets/B3.jpg"
import D1 from "../assets/D1.jpg"
import D2 from "../assets/D2.jpg"
import D3 from "../assets/D3.jpg"
import D4 from "../assets/D4.jpg"
import A1 from "../assets/A1.jpg"
import A2 from "../assets/A2.jpg"
import A3 from "../assets/A3.jpg"
import A4 from "../assets/A4.jpg"

const packages = {
  A: [A1, A2, A3, A4],
  B: [B1, B2, B3],
  D: [D1, D2, D3, D4],
}

// Memoized PackageImage component to prevent unnecessary re-renders
const PackageImage = memo(({ image, index, selectedPackage, openFullscreen }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <img
      src={image || "/placeholder.svg"}
      alt={`Package ${selectedPackage} - Image ${index + 1}`}
      className="w-full h-56 object-center cursor-pointer rounded-md"
      loading="lazy"
      onClick={() => openFullscreen(image)}
    />
  </motion.div>
))

function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [fullscreenImage, setFullscreenImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  // Image cache for sharing
  const imageCache = new Map()

  useEffect(() => {
    // Optional: Preload only one image per category if needed
    Object.keys(packages).forEach((category) => {
      const firstImage = packages[category][0]
      if (firstImage) {
        const img = new Image()
        img.src = firstImage
      }
    })
  }, [])

  const openPackageModal = (category) => {
    setIsLoading(true)
    setSelectedPackage(category)
    setIsLoading(false) // No artificial delay
  }

  const closePackageModal = () => {
    setSelectedPackage(null)
  }

  const openFullscreen = (image) => {
    setFullscreenImage(image)
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  const downloadImage = (imageSrc) => {
    const link = document.createElement("a")
    link.href = imageSrc
    link.download = "package-image.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareImage = async (imageSrc) => {
    try {
      let blob = imageCache.get(imageSrc)
      if (!blob) {
        const response = await fetch(imageSrc)
        blob = await response.blob()
        imageCache.set(imageSrc, blob)
      }
      const imageFile = new File([blob], "umrah-package.jpg", { type: blob.type })

      if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
        await navigator.share({
          title: "Mehfooz Umrah Package",
          text: "Check out this Umrah package!",
          files: [imageFile],
        })
      } else {
        alert("Sharing is not supported on this device")
      }
    } catch (error) {
      console.error("Error sharing image:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-5xl underline font-bold text-center text-[#185519] md:mb-16 mb-6"
        >
          MEHFOOZ HAJJ PACKAGES
        </motion.h1>

        {/* Package Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
          {Object.keys(packages).map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => openPackageModal(category)}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-colors hover:bg-[#185519]/5 w-full aspect-square relative overflow-hidden"
            >
              <span className="text-[#185519] text-[20vw] sm:text-[15vw] lg:text-[10vw] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90 select-none">
                {category}
              </span>
              <span className="text-gray-600 font-semibold text-sm sm:text-base absolute bottom-6">Category</span>
            </motion.button>
          ))}
        </div>

        {/* Package Modal */}
        <AnimatePresence>
          {selectedPackage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40 px-4"
              onClick={closePackageModal}
            >
              <motion.div
                className="relative w-full max-w-4xl bg-white rounded-lg p-8 pt-12"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <h2 className="text-3xl font-bold text-[#185519] mb-6 text-center">Category {selectedPackage}</h2>
                {isLoading ? (
                  <div className="flex justify-center items-center h-56">
                    <motion.div
                      className="w-12 h-12 border-4 border-[#185519] border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {packages[selectedPackage].map((image, index) => (
                      <PackageImage
                        key={index}
                        image={image}
                        index={index}
                        selectedPackage={selectedPackage}
                        openFullscreen={openFullscreen}
                      />
                    ))}
                  </div>
                )}
                <button
                  onClick={closePackageModal}
                  className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors p-2 bg-white rounded-full shadow-md z-10"
                >
                  <FaTimes size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fullscreen Image View */}
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center px-4"
              onClick={closeFullscreen}
            >
              <motion.div
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
              >
                <img
                  src={fullscreenImage || "/placeholder.svg"}
                  alt="Fullscreen view"
                  className="max-w-full max-h-[90vh] object-contain"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-[#185519] p-3 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      downloadImage(fullscreenImage)
                    }}
                  >
                    <FaDownload className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-[#185519] p-3 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      shareImage(fullscreenImage)
                    }}
                  >
                    <FaShare className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <FaTimes className="sm:w-6 sm:h-6 w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
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

export default Packages