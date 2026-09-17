import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { contactInfo } from "../data";

const backgroundImages = [
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80",
  "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1920",
  "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1920",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

import WaveDivider from "./WaveDivider";

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen bg-[#5D1A2A] overflow-hidden flex flex-col justify-center items-center pt-28 pb-20 md:pb-28"
    >
      {/* Dynamic Background Image with Smooth Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${backgroundImages[bgIndex]}')`,
          }}
        />
      </AnimatePresence>

      {/* Lightened Gradient & Left Vignette Overlay (Reduced Fade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5D1A2A]/85 via-[#5D1A2A]/40 to-black/20 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#5D1A2A]/30 via-transparent to-[#5D1A2A]/70 z-[1]" />

      {/* Subtle Golden Glow Accent on Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#D4AF37]/15 blur-3xl pointer-events-none z-[2]" />

      {/* Main Content Showcase - Left Aligned */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col items-center md:items-start justify-center text-center md:text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center md:items-start max-w-3xl"
        >
          {/* Header Tagline Divider */}
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center space-x-3 text-[#D4AF37] justify-center md:justify-start"
          >
            <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#D4AF37] hidden md:block" />
            <span className="text-xs sm:text-sm tracking-[0.35em] font-bold uppercase text-[#F3E5AB]">
              HYDERABAD • ROYAL EVENT SPECIALISTS
            </span>
            <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </motion.div>

          {/* Headline Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#F5F5DC] to-[#D4AF37] tracking-[0.06em] uppercase leading-tight mb-4 drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
          >
            FEROZ KHAN
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-2xl tracking-[0.2em] sm:tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-6 drop-shadow-lg"
          >
            WEDDING PLANNER & EVENT MANAGEMENT
          </motion.p>

          {/* Motto Pill Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-10 inline-block px-8 py-3 rounded-full border border-[#D4AF37]/80 bg-[#4A101E]/85 backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            <p className="text-xs sm:text-base tracking-[0.25em] text-[#F5F5DC] uppercase font-bold">
              APKA SUKOON, HAMARI ZEMEDARI
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center md:items-start justify-center md:justify-start"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.6)" }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 border border-[#D4AF37] text-[#3A0A18] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-full shadow-2xl transition-all duration-300"
            >
              Plan Your Event
            </motion.a>
            <motion.a
              href={`tel:${contactInfo.phone1}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-9 py-4 border border-[#D4AF37]/80 text-[#F5F5DC] bg-[#4A101E]/90 backdrop-blur-md font-semibold text-xs sm:text-sm tracking-[0.15em] uppercase rounded-full shadow-xl hover:bg-[#D4AF37] hover:text-[#3A0A18] transition-all duration-300 group"
            >
              <svg className="w-4 h-4 text-[#D4AF37] group-hover:text-[#3A0A18] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.001 1.001 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call ({contactInfo.phone1})</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave Transition Divider - Unique Variant 1 */}
      <WaveDivider fillColor="#F5F5DC" variant={1} />
    </section>
  );
}


