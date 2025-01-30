import { useState, useEffect } from "react";

const reviews = [
  "Amazing service! Highly recommended.",
  "Exceptional packages and support.",
  "Truly a memorable journey with Mehfooz Travels.",
  "A flawless experience from start to finish.",
  "The best travel agency for Hajj and Umrah. Highly trustworthy!"
];

const CustomerReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Automatically change the review every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // 4000 ms = 4 seconds for smoother transition

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="py-4 px-4 text-black">
      <h2 className="text-4xl font-bold mb-6 text-center text-[#185519]">Customer Reviews</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.slice(currentReviewIndex, currentReviewIndex + 3).map((review, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 p-4 bg-[#185519] rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-y-180"
          >
            <div
              className="bg-white p-6 rounded-lg text-[#185519] transition-all duration-700 ease-in-out transform hover:rotate-y-180"
            >
              <p className="md:text-xl font-mono font-medium">{review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
