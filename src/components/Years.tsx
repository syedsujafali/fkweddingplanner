import { motion } from "framer-motion";

export default function Years() {
  return (
    <section className="relative min-h-screen bg-[#F5F5DC] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 min-h-[80vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          {/* Large 35+ Number */}
          <div className="relative inline-block">
            <span className="text-[15rem] md:text-[25rem] lg:text-[30rem] font-bold tracking-[0.02em] text-[#5D1A2A] leading-none">
              35
            </span>
            <span className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-[#D4AF37] absolute -top-8 md:-top-12 lg:-top-16 right-[-2rem] md:right-[-3rem] lg:right-[-4rem]">
              +
            </span>
          </div>
          <p className="text-xl md:text-2xl tracking-[0.2em] text-[#8B0000] uppercase mt-8">
            Years of Creating Unforgettable Celebrations
          </p>
        </motion.div>
      </div>

      {/* Decorative Gold Line */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]"
      />
    </section>
  );
}
