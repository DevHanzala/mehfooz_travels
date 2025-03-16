import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaWhatsapp, FaDownload, FaShare, FaTimes } from "react-icons/fa"
import U1 from "../assets/UP-1.jpg"
import U2 from "../assets/UP-2.jpg"

const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const preloadImages = async () => {
      const images = [U1, U2]
      const imagePromises = images.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = reject
        })
      })

      const startTime = Date.now()
      await Promise.all(imagePromises)
      const loadTime = Date.now() - startTime

      // Ensure a minimum loading time of 1 second for visual consistency
      if (loadTime < 1000) {
        await new Promise((resolve) => setTimeout(resolve, 1000 - loadTime))
      }

      setIsLoading(false)
    }

    preloadImages()
  }, [])

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage("")
  }

  const downloadImage = (imageSrc) => {
    const link = document.createElement("a")
    link.href = imageSrc
    link.download = "umrah-package.jpg"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareImage = async (imageSrc) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const imageFile = new File([blob], "umrah-package.jpg", { type: blob.type });
  
      if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
        await navigator.share({
          title: "Mehfooz Umrah Package",
          text: "Check out this Umrah package!",
          files: [imageFile],
        });
      } else {
        alert("Sharing is not supported on this device");
      }
    } catch (error) {
      console.error("Error sharing image:", error);
    }
  };
  

  return (
    <div className="bg-white min-h-screen">
      {/* Heading Section */}
      <motion.div
        className="text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="md:text-5xl underline text-xl font-bold text-[#185519]">MEHFOOZ UMRAH PACKAGES</h1>
      </motion.div>

      {/* Package Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:py-10 py-5">
        {isLoading ? (
          <motion.div
            className="col-span-2 flex justify-center items-center h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-[#185519] border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              className="relative border-4 border-[#185519]"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
            >
              <img
                src={U1 || "/placeholder.svg"}
                alt="Package 1"
                className="w-full h-auto md:h-screen object-center rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleImageClick(U1)}
              />
            </motion.div>

            <motion.div
              className="relative border-4 border-[#185519]"
              initial={{ opacity: 0, x: "100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
            >
              <img
                src={U2 || "/placeholder.svg"}
                alt="Package 2"
                className="w-full h-auto md:h-screen object-center rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleImageClick(U2)}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Modal for Full-Screen Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-[90vw] md:max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute -top-4 -right-4 z-50 w-8 h-8 flex items-center justify-center bg-[#185519] text-white rounded-full shadow-lg hover:bg-[#1e671f] transition-colors"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>

              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden bg-white shadow-2xl">
                <img
                  src={selectedImage || "/placeholder.svg"}
                  alt="Selected Package"
                  className="w-full h-auto max-h-[85vh] object-contain"
                />

                {/* Download and Share buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <motion.button
                    className="bg-white text-[#185519] p-3 rounded-full shadow-md"
                    onClick={() => downloadImage(selectedImage)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaDownload className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="bg-white text-[#185519] p-3 rounded-full shadow-md"
                    onClick={() => shareImage(selectedImage)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaShare className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

export default Reviews

