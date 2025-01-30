import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKaaba,
  faChevronLeft,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";
import B1 from "../assets/B1.jpg";
import B2 from "../assets/B2.jpg";
import B3 from "../assets/B3.jpg";
import D1 from "../assets/D1.jpg";
import D2 from "../assets/D2.jpg";
import D3 from "../assets/D3.jpg";
import D4 from "../assets/D4.jpg";

function Packages() {
  const packages = {
    B: [B1, B2, B3],
    D: [D1, D2, D3, D4],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setActiveSlide(0);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const nextSlide = () => {
    const packageLength = packages[selectedCategory]?.length || 0;
    setActiveSlide((prev) => (prev + 1) % packageLength);
  };

  const prevSlide = () => {
    const packageLength = packages[selectedCategory]?.length || 0;
    setActiveSlide((prev) => (prev - 1 + packageLength) % packageLength);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-center text-[#185519] md:mb-16 mb-6"
        >
          OUR HAJJ PACKAGES
        </motion.h1>

        {/* Responsive Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {["A", "B", "D"].map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCategoryClick(category)}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center gap-4 transition-colors hover:bg-[#185519]/5 w-full lg:w-96 lg:h-72"
            >
              <div className="w-16 h-16 rounded-full bg-[#185519]/10 flex items-center justify-center">
                <FontAwesomeIcon icon={faKaaba} className="text-[#185519] text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#185519]">Package {category}</h3>
              <p className="text-gray-600 text-sm mt-1">Click to view details</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Modal */}
        {isModalOpen && selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-3 w-full lg:max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-bold text-[#185519]">
                  Package {selectedCategory} Details
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
              </div>

              {/* Display "Coming Soon..." for Package A */}
              {selectedCategory === "A" ? (
                <div className="text-center text-gray-700 text-lg py-10">
                  <p className="font-semibold">
                    🌟 Exciting news is on the way! Package A is being curated with the utmost care to offer you an unforgettable Hajj experience. Stay tuned for exclusive details coming soon! 🕋✨
                  </p>
                </div>
              ) : (
                <div className="relative aspect-video md:h-[87vh] h-[70vh] w-full rounded-lg overflow-hidden">
                  <div className="absolute inset-0">
                    <motion.img
                      key={activeSlide}
                      src={packages[selectedCategory][activeSlide]}
                      alt={`Package ${selectedCategory} - Image ${activeSlide + 1}`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-[#185519] p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-[#185519] p-3 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {packages[selectedCategory]?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeSlide
                            ? "bg-white w-4"
                            : "bg-white/50 w-2 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/923366655663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#185519] text-white p-4 rounded-full shadow-lg hover:bg-[#1e671f] transition-all duration-300 hover:scale-110 z-50 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}

export default Packages;
