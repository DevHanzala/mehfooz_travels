import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import umrah from "../assets/Umrah-2.jpg"
import hajj from "../assets/Hajj.jpg"
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import C1 from "../assets/c1.jpg"
import C2 from "../assets/c2.jpg"
import C3 from "../assets/c3.jpg"
import C4 from "../assets/c4.jpg"
import { motion } from "framer-motion"

const carouselImages = [C1, C2, C3, C4]

const Home = () => {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(null)
  const [imagesLoaded, setImagesLoaded] = useState({
    carousel: Array(carouselImages.length).fill(false),
    hajj: false,
    umrah: false
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const handlePackageClick = (type) => {
    navigate(`/${type.toLowerCase()}`)
  }

  const handleCarouselImageLoad = (index) => {
    setImagesLoaded(prev => ({
      ...prev,
      carousel: prev.carousel.map((loaded, i) => i === index ? true : loaded)
    }))
  }

  return (
    <div>
      {/* Carousel Section */}
      <div className="relative md:h-[90vh] h-[50vh]">
        <div className="relative w-full h-full overflow-hidden group">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full scale-105"
                    : "opacity-0 translate-x-full scale-105"
              }`}
            >
              <div className="relative w-full h-full">
                {!imagesLoaded.carousel[index] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-[#185519] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  loading="lazy"
                  onLoad={() => handleCarouselImageLoad(index)}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    !imagesLoaded.carousel[index] ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="hidden md:group-hover:flex absolute left-4 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:group-hover:flex absolute right-4 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all duration-300 transform hover:scale-110"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:hidden">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="absolute md:top-2/3 top-1/2 w-full overflow-hidden">
          <div className="animate-slide-rl">
            <p className="text-[#FFD700] md:text-5xl text-2xl font-arabic text-center whitespace-nowrap font-bold px-4">
              لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ ٱلْحَمْدَ وَٱلنِّعْمَةَ لَكَ وَٱلْمُلْكَ لَا شَرِيكَ لَكَ
            </p>
          </div>
        </div>
      </div>
      {/* Welcome Section */}
      <section className="py-12 px-4 text-center text-black animate-fade-in" aria-labelledby="welcome-heading">
        <h1
          id="welcome-heading"
          className="md:text-4xl text-2xl font-bold mb-4 font-serif text-[#185519] animate-slide-up"
        >
          Welcome to Mehfooz Travels
        </h1>
        <p className="mb-8 md:w-2/3 w-full mx-auto md:text-2xl text-lg font-medium text-center animate-fade-in animation-delay-200">
          Mehfooz Travels, your trusted partner in spiritual journeys. We specialize in providing comprehensive Hajj and
          Umrah services, making your sacred pilgrimage a peaceful and memorable experience.
        </p>
        <h2 className="font-bold md:w-[35vw] w-full mx-auto md:text:3xl text-xl text-[#185519] my-5 font-serif animate-slide-up animation-delay-400">
          The Leading Hajj & Umrah Travel Company In Pakistan
        </h2>

        {/* Packages Grid */}
        <div
          className="flex flex-col md:flex-row md:flex-wrap justify-center md:gap-4 gap-6 animate-fade-in animation-delay-600"
          role="region"
          aria-label="Our Packages"
        >
          {/* Hajj Package */}
          <div
            onClick={() => handlePackageClick("Hajj")}
            onMouseEnter={() => setIsHovering("hajj")}
            onMouseLeave={() => setIsHovering(null)}
            className="relative md:w-[30vw] w-full h-[40vh] md:h-[50vh] md:mb-0 mb-4 overflow-hidden group cursor-pointer transform transition-all duration-500 hover:shadow-2xl rounded-lg"
            role="button"
            tabIndex={0}
          >
            {/* Title moved to top with green background */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="md:text-xl font-serif  font-bold text-white text-center bg-[#185519] px-4 py-2 rounded-sm shadow-lg transform transition-all duration-300 group-hover:scale-110">
                Hajj Packages
              </h3>
            </motion.div>

            <div className="relative w-full h-full">
              {!imagesLoaded.hajj && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-[#185519] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={hajj || "/placeholder.svg"}
                alt="Kaaba during Hajj season"
                loading="lazy"
                onLoad={() => setImagesLoaded(prev => ({ ...prev, hajj: true }))}
                className={`w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-105 ${
                  !imagesLoaded.hajj ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                isHovering === "hajj" ? "opacity-80" : "opacity-60"
              }`}
            ></div>

            {/* Hover content at bottom */}
            <motion.div
              className="absolute bottom-0 left-0 w-full p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovering === "hajj" ? 0 : 20,
                opacity: isHovering === "hajj" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white text-center">Click to explore our Hajj packages</p>
            </motion.div>
          </div>

          {/* Umrah Package */}
          <div
            onClick={() => handlePackageClick("Umrah")}
            onMouseEnter={() => setIsHovering("umrah")}
            onMouseLeave={() => setIsHovering(null)}
            className="relative md:w-[30vw] w-full h-[40vh] md:h-[50vh] overflow-hidden group cursor-pointer transform transition-all duration-500 hover:shadow-2xl rounded-lg"
            role="button"
            tabIndex={0}
          >
            {/* Title moved to top with green background */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="md:text-xl font-serif font-bold text-white text-center bg-[#185519] px-2 py-2 rounded-sm shadow-lg transform transition-all duration-300 group-hover:scale-110">
                Umrah Packages
              </h3>
            </motion.div>

            <div className="relative w-full h-full">
              {!imagesLoaded.umrah && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-[#185519] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={umrah || "/placeholder.svg"}
                alt="Masjid al-Haram during Umrah"
                loading="lazy"
                onLoad={() => setImagesLoaded(prev => ({ ...prev, umrah: true }))}
                className={`w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-105 ${
                  !imagesLoaded.umrah ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                isHovering === "umrah" ? "opacity-80" : "opacity-60"
              }`}
            ></div>

            {/* Hover content at bottom */}
            <motion.div
              className="absolute bottom-0 left-0 w-full p-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: isHovering === "umrah" ? 0 : 20,
                opacity: isHovering === "umrah" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white text-center">Click to explore our Umrah packages</p>
            </motion.div>
          </div>
        </div>

        <p className="md:w-2/3 w-full mx-auto md:text-2xl text-lg font-medium mt-4 text-center animate-fade-in animation-delay-800">
          Specialized in Premium Hajj packages, Year-round Umrah services, Group & family packages, VIP accommodations
          near Haram, Visa processing, and Transportation services.
        </p>
      </section>
    
      {/* WhatsApp Button - Updated with continuous bounce animation */}
      <motion.a
        href="https://wa.me/923366655663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#185519] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#1e671f] z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          transition: {
            y: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.5,
              delay: 1,
            },
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.a>
      <style jsx>{`
        @keyframes slide-lr {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }

        @keyframes slide-rl {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        @keyframes slide-up {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-lr {
          animation: slide-lr 20s linear infinite;
        }

        .animate-slide-rl {
          animation: slide-rl 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        @font-face {
          font-family: 'Arabic';
          src: url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap');
        }

        .font-arabic {
          font-family: 'Arabic', sans-serif;
        }
      `}</style>
    </div>
  )
}

export default Home