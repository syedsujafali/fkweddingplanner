import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 400);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#5D1A2A] px-6 py-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#8B0000]/40 via-[#5D1A2A] to-[#3A0A18] pointer-events-none" />

      {/* Top Brand Tag */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center"
      >
        <span className="text-xs sm:text-sm tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">
          HYDERABAD • INDIA
        </span>
      </motion.div>

      {/* Center Royal Monogram Crest */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        {/* Animated Gold Ring Crest */}
        <div className="relative flex items-center justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-dashed border-[#D4AF37]/40 absolute"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-[#FFFDF7] p-3.5 shadow-2xl"
          >
            <img
              src="/logo.png"
              alt="Feroz Khan Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Feroz Khan Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center px-4"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif tracking-[0.2em] text-[#F5F5DC] uppercase mb-2">
            FEROZ KHAN
          </h1>
          <p className="text-xs sm:text-sm md:text-base tracking-[0.18em] text-[#D4AF37] uppercase font-medium mb-3">
            Wedding Planner & Event Management
          </p>
          <p className="text-xs sm:text-xs md:text-sm tracking-[0.25em] text-[#F5F5DC]/80 uppercase">
            Apka Sukoon, Hamari Zemedari
          </p>
        </motion.div>
      </div>

      {/* Bottom Progress Bar & Percentage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative z-10 w-full max-w-xs sm:max-w-sm flex flex-col items-center"
      >
        <div className="w-full h-1 bg-[#4A1422] rounded-full overflow-hidden mb-3 border border-[#D4AF37]/30">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D4AF37]/70 to-[#D4AF37]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <div className="flex justify-between w-full text-[10px] sm:text-xs tracking-widest text-[#D4AF37]/80 uppercase">
          <span>CREATING MAGIC</span>
          <span>{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

