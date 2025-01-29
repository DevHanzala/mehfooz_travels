import React from "react";
import bgVideo from "../assets/bg-1.mp4";
import umrah from '../assets/Umrah.jpg'
import hajj from '../assets/Hajj.jpg'
import CustomerReviews from "../Components/CustomerReiews";
import 'animate.css';
const Home = () => {
  return (
    <div>
      {/* Background Video Section */}
      <div className="relative md:h-screen h-[50vh]">
        {/* Background Video */}
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
        <div className="absolute md:top-36 top-12 md:left-8 left-4">
  <div className="relative border-2 border-[#fafae0]  w-40 h-20 p-3 rounded-2xl flex items-center bg-[#588157] text-[#dad7cd] shadow-lg animate-flip-y">
    {/* Left Content - "21" */}
    <div className="flex-shrink-0 w-16 flex justify-center font-serif items-center">
      <p className="font-bold text-6xl uppercase tracking-wide text-[fafae0]">21</p>
    </div>

    {/* Right Content */}
    <div className="flex flex-col justify-center pl-2">
      <p className="text-sm uppercase font-bold text-black/60">YEARS</p>
      <p className="text-xs uppercase text-[#fafae0]">OF SERVICE</p>
      <p className="text-xs uppercase text-[#fafae0]">EXCELLENCE</p>
    </div>
  </div>
</div>


        {/* Title Section */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#fafae0] font-serif text-center">
            Mehfooz Travels
          </h1>
        </div>
      </div>

      {/* Content Below Video */}
      <section className="py-12 px-4 text-center text-black">
  <h2 className="md:text-4xl text-3xl font-bold mb-4 font-serif text-[#588157]">Welcome to Mehfooz Travels</h2>
  <p className="mb-8 md:w-2/3 mx-auto md:text-2xl md:text-center text-left">
    Mehfooz Travels, your trusted partner in spiritual journeys. We specialize in providing
    comprehensive Hajj and Umrah services, making your sacred pilgrimage a peaceful and memorable 
    experience.
  </p>
<h1 className="font-bold md:w-[35vw] mx-auto md:text-3xl text-[23px] text-[#588157] my-5 font-serif">The Leading Hajj & Umrah Travel Company In Pakistan</h1>
  <div className="md:flex flex-wrap justify-center gap-4">
  <div className="relative md:w-[30vw] h-[50vh] md:mb-0 mb-4">
    <img
      src={hajj}
      alt="Hajj Package"
      className="w-full h-full rounded-lg object-cover transition-transform duration-500 hover:scale-105"
    />
    <div className="absolute bottom-10 left-0 transform -translate-y-1/2 text-[#fafae0]">
      <h3 className="text-2xl font-semibold bg-[#588157] p-2 rounded-sm">Hajj Packages</h3>
    </div>
  </div>
  <div className="relative md:w-[30vw] h-[50vh]">
    <img
      src={umrah}
      alt="Umrah Package"
      className="w-full h-full rounded-lg object-cover transition-transform duration-500 hover:scale-105"
    />
      <div className="absolute bottom-10 left-0 transform -translate-y-1/2 text-[#fafae0]">
      <h3 className="text-2xl font-semibold bg-[#588157] p-2 rounded-sm">Umrah Packages</h3>
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
