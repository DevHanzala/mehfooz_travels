import React, { useState, useEffect } from "react"

const Packages = () => {
  // Package B Images
  const packageB = ["/hajj-b1.jpg", "/hajj-b2.jpg", "/hajj-b3.jpg"]

  // Package D Images
  const packageD = ["/hajj-d1.jpg", "/hajj-d2.jpg", "/hajj-d3.jpg", "/hajj-d4.jpg"]

  // States for active slide indices
  const [activeSlideB, setActiveSlideB] = useState(0)
  const [activeSlideD, setActiveSlideD] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const intervalB = setInterval(() => {
      setActiveSlideB((prev) => (prev + 1) % packageB.length)
    }, 3000)

    const intervalD = setInterval(() => {
      setActiveSlideD((prev) => (prev + 1) % packageD.length)
    }, 3000)

    return () => {
      clearInterval(intervalB)
      clearInterval(intervalD)
    }
  }, [])

  // Navigation functions
  const nextSlide = (current, setCurrent, length) => {
    setCurrent((current + 1) % length)
  }

  const prevSlide = (current, setCurrent, length) => {
    setCurrent((current - 1 + length) % length)
  }

  // Carousel Component
  const ImageCarousel = ({ images, activeSlide, setActiveSlide }) => {
    return (
      <div className="relative overflow-hidden">
        <div className="relative h-[300px] md:h-[400px] w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                index === activeSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => prevSlide(activeSlide, setActiveSlide, images.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#185519] p-2 rounded-full shadow-lg transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => nextSlide(activeSlide, setActiveSlide, images.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#185519] p-2 rounded-full shadow-lg transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeSlide ? "bg-[#185519] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#185519] mb-12">Our Hajj Packages</h1>

        {/* Package A */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#185519]">Package A</h2>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
              Coming Soon
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#185519]/10 to-[#185519]/5 rounded-lg p-8">
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">
                We're currently preparing an exclusive Hajj package that will provide you with an exceptional spiritual
                journey.
              </p>
              <p className="text-[#185519] font-medium">
                Stay tuned for more details about our upcoming Package A offering.
              </p>
            </div>
          </div>
        </div>

        {/* Package B */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#185519] mb-6">Package B</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ImageCarousel images={packageB} activeSlide={activeSlideB} setActiveSlide={setActiveSlideB} />
          </div>
        </div>

        {/* Package D */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#185519] mb-6">Package D</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <ImageCarousel images={packageD} activeSlide={activeSlideD} setActiveSlide={setActiveSlideD} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Packages
