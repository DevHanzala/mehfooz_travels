import { motion, useAnimation } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import M1 from "../assets/M1.png"
import M2 from "../assets/M2.png"
import M3 from "../assets/M3.png"
import M4 from "../assets/M4.jpg"
import M5 from "../assets/M5.webp"
import M6 from "../assets/M6.jpg"

const About = () => {
  const members = [
    { name: "SECP",  image: M1 },
    { name: "DTS",  image: M2 },
    { name: "TAAP",  image: M3 },
    { name: "HOAP",  image: M4 },
    { name: "IATA",  image: M5 },
    { name: "CHAMBER",  image: M6 },
  ]

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800 font-sans"
    >
      {/* Company Details Section */}
      <motion.section
        variants={itemVariants}
        className="md:py-20 py-12 px-4 text-center max-w-6xl mx-auto bg-white shadow-lg rounded-lg my-8"
      >
        <motion.h1 className="text-xl md:text-5xl font-bold mb-8 text-[#185519] underline" variants={itemVariants}>
          WELCOME TO MEHFOOZ TRAVELS
        </motion.h1>

        <motion.p className="text-base md:text-xl md:mb-6 mb-3 md:text-center text-left" variants={itemVariants}>
          <span className="font-extrabold text-[#185519]">Mehfooz Travels</span> is a trusted name in the travel
          industry. We have been providing
          <span className="font-bold text-[#185519]"> exceptional travel services</span> for HAJJ & UMRAH since 1994,
          gaining a<span className="font-bold text-[#185519]"> wealth of experience</span> in the industry. We are
          proudly approved by the Government of Pakistan for travel and tourism services.
        </motion.p>

        <motion.p className="text-base md:text-xl md:mb-4 mb-3 md:text-center text-left" variants={itemVariants}>
          Our dedicated team of professionals has been in the travel trade for over 21 years. What started with a single
          Umrah department has expanded to hotel bookings, visa facilities, and ticketing. With our expertise, we have
          served thousands of satisfied pilgrims, ensuring that every family/group experiences
          <span className="font-bold text-[#185519]"> an affordable and stress-free journey.</span>
        </motion.p>
      </motion.section>

      {/* CEO Message Section */}
      <motion.section variants={itemVariants} className="md:py-20 py-12 px-4 bg-[#185519] text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-2xl md:text-4xl font-bold mb-8 text-center" variants={itemVariants}>
            CEO's Message – MEHFOOZ TRAVELS
          </motion.h2>
          <motion.p className="text-base  md:text-xl md:mb-6 mb-4" variants={itemVariants}>
            Welcome to <span className="font-extrabold">MEHFOOZ TRAVELS!</span> Since 2004, we have been honored to
            serve thousands of pilgrims, providing seamless and spiritually enriching
            <span className="font-bold"> Hajj and Umrah experiences.</span> Our mission is to ensure that every traveler
            embarks on their sacred journey with{" "}
            <span className="font-bold">peace of mind, comfort, and devotion.</span>
          </motion.p>

          <motion.p className="text-base md:text-xl md:mb-6 mb-4" variants={itemVariants}>
            At <span className="font-extrabold">MEHFOOZ TRAVELS</span>, we take pride in offering
            <span className="font-bold"> well-organized, hassle-free pilgrimage packages,</span> guided by
            professionalism, integrity, and a deep understanding of our clients' needs. Our team is dedicated to
            delivering
            <span className="font-bold"> top-tier services</span>, from visa processing to accommodation and transport,
            ensuring a smooth and fulfilling journey.
          </motion.p>

          <motion.p className="text-base md:text-xl md:mb-6 mb-4" variants={itemVariants}>
            We are committed to excellence and continuously strive to enhance our services, making your pilgrimage a
            truly <span className="font-bold">memorable and spiritually uplifting experience.</span>
            Thank you for trusting us with your sacred journey.
          </motion.p>

          <motion.p className="text-xl font-semibold md:mt-8  text-center" variants={itemVariants}>
            - Muhammad Naeem, CEO
          </motion.p>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={containerVariants}
        className="md:py-20 py-12 px-4 text-center max-w-6xl mx-auto bg-white shadow-lg rounded-lg my-8"
      >
        <motion.h2 className="text-2xl md:text-4xl font-bold md:mb-12 mb-8 underline text-[#185519]" variants={itemVariants}>
          OUR MEMBERSHIPS
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-48 h-48 rounded-full mb-4 object-contain shadow-lg"
              />
              <h3 className="text-xl font-bold text-[#185519]">{member.name}</h3>
              {/* <p className="text-[#185519] font-medium">{member.role}</p> */}
            </motion.div>
          ))}
        </div>
      </motion.section>

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
    </motion.div>
  )
}

export default About

