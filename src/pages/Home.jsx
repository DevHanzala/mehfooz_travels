import React from "react";
import bgVideo from "../assets/bg-1.mp4";
import umrah from '../assets/Umrah.jpg'
import hajj from '../assets/Hajj.jpg'
import CustomerReviews from "../Components/CustomerReiews";
import { MessageCircle } from 'lucide-react'; // Add this import
import 'animate.css';

const Home = () => {
  return (
    <div>
      {/* Background Video Section */}
      <div className="relative md:h-screen h-[50vh]">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>

        {/* Spinning Tag */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2">
          <div className="relative border-4 border-white md:w-56 md:h-24 w-52 h-20 p-5 rounded-3xl flex items-center bg-[#185519] text-white shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
            {/* Left Content - "21" */}
            <div className="flex-shrink-0 md:w-20 flex justify-center font-serif items-center">
              <p className="font-extrabold md:text-7xl text-6xl uppercase tracking-widest text-white drop-shadow-lg">21</p>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center md:pl-4">
              <p className="md:text-lg uppercase font-extrabold text-black/60 tracking-wide">YEARS</p>
              <p className="md:text-md text-sm uppercase font-semibold text-white tracking-wider">OF SERVICE</p>
              <p className="md:text-md text-sm uppercase font-semibold text-white tracking-wider">EXCELLENCE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Below Video */}
      <section className="py-12 px-4 text-center text-black">
        <h2 className="md:text-4xl text-3xl font-bold mb-4 font-serif text-[#185519]">Welcome to Mehfooz Travels</h2>
        <p className="mb-8 md:w-2/3 mx-auto md:text-2xl md:text-center text-left">
          Mehfooz Travels, your trusted partner in spiritual journeys. We specialize in providing
          comprehensive Hajj and Umrah services, making your sacred pilgrimage a peaceful and memorable 
          experience.
        </p>
        <h1 className="font-bold md:w-[35vw] mx-auto md:text-3xl text-[23px] text-[#185519] my-5 font-serif">
          The Leading Hajj & Umrah Travel Company In Pakistan
        </h1>
        <div className="md:flex flex-wrap justify-center gap-4">
          {/* Hajj Package */}
          <div className="relative md:w-[30vw] w-full h-[50vh] md:mb-0 mb-4 overflow-hidden group">
            <img
              src={hajj || "/placeholder.svg"}
              alt="Hajj Package"
              className="w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex items-start justify-center px-4">
              <h3 className="text-xl md:text-2xl font-semibold bg-[#185519] px-4 py-2 rounded-sm text-white transition-all duration-500 
                group-hover:-translate-y-20 group-focus:-translate-y-20 group-active:-translate-y-20">
                Hajj Packages
              </h3>
            </div>
          </div>

          {/* Umrah Package */}
          <div className="relative md:w-[30vw] w-full h-[50vh] overflow-hidden group">
            <img
              src={umrah || "/placeholder.svg"}
              alt="Umrah Package"
              className="w-full h-full rounded-lg object-cover transition-all duration-500 group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex items-start justify-center px-4">
              <h3 className="text-xl md:text-2xl font-semibold bg-[#185519] px-4 py-2 rounded-sm text-white transition-all duration-500 
                group-hover:-translate-y-20 group-focus:-translate-y-20 group-active:-translate-y-20">
                Umrah Packages
              </h3>
            </div>
          </div>
        </div>

        <p className="md:w-2/3 mx-auto md:text-2xl mt-4 md:text-center text-left">
          Specialized in Premium Hajj packages Year-round Umrah services Group & family packages VIP accommodations near Haram Visa processing
          Transportation services
        </p>
      </section>

      {/* Review Section */}
      <CustomerReviews/>

      {/* WhatsApp Floating Button - Add this section */}
      <a
        href="https://wa.me/923366655663" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#185519] text-white p-4 rounded-full shadow-lg hover:bg-[#1e671f] transition-all duration-300 hover:scale-110 z-50 animate-bounce"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Inline Animations */}
      <style>
        {`
          @keyframes flip-y {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }
          .animate-flip-y {
            animation: flip-y 5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Home;