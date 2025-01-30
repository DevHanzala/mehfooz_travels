"use client"
import { useState, useEffect } from "react"
import umrah from "../assets/Umrah.jpg"
import hajj from "../assets/Hajj.jpg"
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import CustomerReviews from "../Components/CustomerReiews"
import C1 from "../assets/c1.jpg"
import C2 from "../assets/c2.jpg"
import C3 from "../assets/c3.jpg"
import C4 from "../assets/c4.jpg"

// Array of carousel images with their titles
const carouselImages = [C1, C2, C3, C4]

const Home = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto slide effect
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

  return (
    <div>
      {/* Custom Image Carousel Section */}
      <div className="relative md:h-screen h-[50vh]">
        {/* Carousel Container */}
        <div className="relative w-full h-full overflow-hidden group">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 scale-100"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full scale-105" // Reduced scale effect
                    : "opacity-0 translate-x-full scale-105" // Reduced scale effect
              }`}
            >
              {/* Image with subtle zoom effect */}
              <img
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              {/* Lighter gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
            </div>
          ))}

          {/* Desktop Navigation Arrows - Only visible on larger screens and on hover */}
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

          {/* Mobile Indicators - Only visible on mobile */}
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

        {/* Arabic Text */}
        <div className="absolute md:top-2/3 top-1/2 w-full overflow-hidden">
          <div className="animate-slide-rl">
            <p className="text-[#FFD700] md:text-5xl text-3xl font-arabic text-center whitespace-nowrap font-bold">
              لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ ٱلْحَمْدَ وَٱلنِّعْمَةَ لَكَ وَٱلْمُلْكَ لَا شَرِيكَ لَكَ
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Section with Animation */}
      <section className="py-12 px-4 text-center text-black animate-fade-in" aria-labelledby="welcome-heading">
        <h1
          id="welcome-heading"
          className="md:text-4xl text-3xl font-bold mb-4 font-serif text-[#185519] animate-slide-up"
        >
          Welcome to Mehfooz Travels
        </h1>
        <p className="mb-8 md:w-2/3 mx-auto md:text-2xl font-medium md:text-center text-left animate-fade-in animation-delay-200">
          Mehfooz Travels, your trusted partner in spiritual journeys. We specialize in providing comprehensive Hajj and
          Umrah services, making your sacred pilgrimage a peaceful and memorable experience.
        </p>
        <h2 className="font-bold md:w-[35vw] mx-auto md:text-3xl text-[23px] text-[#185519] my-5 font-serif animate-slide-up animation-delay-400">
          The Leading Hajj & Umrah Travel Company In Pakistan
        </h2>

        {/* Packages Grid with Hover Animations */}
        <div
          className="md:flex flex-wrap justify-center gap-4 animate-fade-in animation-delay-600"
          role="region"
          aria-label="Our Packages"
        >
          {/* Hajj Package */}
          <div className="relative md:w-[30vw] w-full h-[50vh] md:mb-0 mb-4 overflow-hidden group transform transition-all duration-500 hover:-translate-y-2">
            <img
              src={hajj || "/placeholder.svg"}
              alt="Kaaba during Hajj season"
              className="w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-0 left-0 w-full text-xl md:text-2xl font-semibold text-white p-4 text-center transition-all duration-500 transform group-hover:translate-y-[-8px]">
              Hajj Packages
            </h3>
          </div>

          {/* Umrah Package */}
          <div className="relative md:w-[30vw] w-full h-[50vh] overflow-hidden group transform transition-all duration-500 hover:-translate-y-2">
            <img
              src={umrah || "/placeholder.svg"}
              alt="Masjid al-Haram during Umrah"
              className="w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h3 className="absolute bottom-0 left-0 w-full text-xl md:text-2xl font-semibold text-white p-4 text-center transition-all duration-500 transform group-hover:translate-y-[-8px]">
              Umrah Packages
            </h3>
          </div>
        </div>

        <p className="md:w-2/3 mx-auto md:text-2xl font-medium mt-4 md:text-center text-left animate-fade-in animation-delay-800">
          Specialized in Premium Hajj packages, Year-round Umrah services, Group & family packages, VIP accommodations
          near Haram, Visa processing, and Transportation services.
        </p>
      </section>

      {/* Reviews Section */}
      <CustomerReviews />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923366655663"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#185519] text-white p-4 rounded-full shadow-lg hover:bg-[#1e671f] transition-all duration-300 hover:scale-110 z-50 animate-bounce-slow"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 text-white" />
      </a>

      {/* Animations Styles */}
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

