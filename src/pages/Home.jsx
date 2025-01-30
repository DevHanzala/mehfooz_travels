import React from "react"
import umrah from "../assets/Umrah.jpg"
import hajj from "../assets/Hajj.jpg"
import vid3 from "../assets/MT_4_vid.mp4"
import CustomerReviews from "../Components/CustomerReiews"
import { FaWhatsapp } from "react-icons/fa";
import "animate.css"

const Home = () => {
  return (
    <div>
      {/* Background Video Section */}
      <div className="relative md:h-screen h-[50vh]">
        <video src={vid3} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover"></video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>


        {/* Arabic Text - Sliding Right to Left */}
        <div className="absolute md:top-2/3 top-1/2 w-full overflow-hidden">
          <div className="animate-slide-rl">
            <p className="text-[#FFD700] md:text-4xl text-2xl font-arabic text-center whitespace-nowrap">
              لَبَّيْكَ ٱللَّٰهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ ٱلْحَمْدَ وَٱلنِّعْمَةَ لَكَ وَٱلْمُلْكَ لَا شَرِيكَ لَكَ
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-12 px-4 text-center text-black" aria-labelledby="welcome-heading">
        <h1 id="welcome-heading" className="md:text-4xl text-3xl font-bold mb-4 font-serif text-[#185519]">
          Welcome to Mehfooz Travels
        </h1>
        <p className="mb-8 md:w-2/3 mx-auto md:text-2xl md:text-center text-left">
          Mehfooz Travels, your trusted partner in spiritual journeys. We specialize in providing comprehensive Hajj and
          Umrah services, making your sacred pilgrimage a peaceful and memorable experience.
        </p>
        <h2 className="font-bold md:w-[35vw] mx-auto md:text-3xl text-[23px] text-[#185519] my-5 font-serif">
          The Leading Hajj & Umrah Travel Company In Pakistan
        </h2>

        {/* Packages Grid */}
        <div className="md:flex flex-wrap justify-center gap-4" role="region" aria-label="Our Packages">
          {/* Hajj Package */}
          <div className="relative md:w-[30vw] w-full h-[50vh] md:mb-0 mb-4 overflow-hidden group">
            <img
              src={hajj || "/placeholder.svg?height=600&width=400"}
              alt="Kaaba during Hajj season"
              className="w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex items-start justify-center px-4">
              <h3
                className="text-xl md:text-2xl font-semibold bg-[#185519] px-4 py-2 rounded-sm text-white transition-all duration-500 
                group-hover:-translate-y-20 group-focus:-translate-y-20 group-active:-translate-y-20"
              >
                Hajj Packages
              </h3>
            </div>
          </div>

          {/* Umrah Package */}
          <div className="relative md:w-[30vw] w-full h-[50vh] overflow-hidden group">
            <img
              src={umrah || "/placeholder.svg?height=600&width=400"}
              alt="Masjid al-Haram during Umrah"
              className="w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex items-start justify-center px-4">
              <h3
                className="text-xl md:text-2xl font-semibold bg-[#185519] px-4 py-2 rounded-sm text-white transition-all duration-500 
                group-hover:-translate-y-20 group-focus:-translate-y-20 group-active:-translate-y-20"
              >
                Umrah Packages
              </h3>
            </div>
          </div>
        </div>

        <p className="md:w-2/3 mx-auto md:text-2xl mt-4 md:text-center text-left">
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
        className="fixed bottom-6 right-6 bg-[#185519] text-white p-4 rounded-full shadow-lg hover:bg-[#1e671f] transition-all duration-300 hover:scale-110 z-50 animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 text-green-500" />
      </a>

      {/* Updated Animations */}
      <style jsx>{`
        @keyframes slide-lr {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slide-rl {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-slide-lr {
          animation: slide-lr 20s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }

        .animate-slide-rl {
          animation: slide-rl 20s linear infinite;
          display: inline-block;
          white-space: nowrap;
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

