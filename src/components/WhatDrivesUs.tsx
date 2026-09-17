import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

const pillars = [
  {
    number: "01",
    title: "PLAN",
    subtitle: "Meticulous planning for every moment",
    description: "Every timeline, vendor alignment, and logistical flow is mapped with absolute detail.",
  },
  {
    number: "02",
    title: "PRECISION",
    subtitle: "Attention to the smallest details",
    description: "From stage floral symmetry to exact seating coordination, nothing is left to chance.",
  },
  {
    number: "03",
    title: "PERFECTION",
    subtitle: "Flawless execution you can trust",
    description: "Creating magical, unforgettable moments that stay in your heart forever.",
  },
];

export default function WhatDrivesUs() {
  return (
    <section className="relative bg-[#5D1A2A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
            WHAT DRIVES US
          </span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F5F5DC] font-bold leading-tight">
            Our Core Pillars of Excellence
          </h2>
        </motion.div>

        {/* Pillars Editorial Horizontal Rows */}
        <div className="divide-y divide-[#D4AF37]/25 border-t border-b border-[#D4AF37]/25">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ x: 6 }}
              className="group py-6 sm:py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-start lg:items-center transition-all duration-300 px-2 sm:px-4 md:px-8 rounded-xl hover:bg-[#4A1422]/50"
            >
              {/* Number & Main Title */}
              <div className="lg:col-span-5 flex items-baseline space-x-4 sm:space-x-8">
                <span className="text-lg sm:text-2xl font-serif text-[#D4AF37]/70 font-light tracking-widest shrink-0">
                  {pillar.number}
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#F5F5DC] tracking-wider whitespace-nowrap group-hover:text-[#D4AF37] transition-colors duration-300">
                  {pillar.title}
                </h3>
              </div>

              {/* Subtitle */}
              <div className="lg:col-span-3">
                <p className="text-xs sm:text-sm tracking-[0.12em] sm:tracking-[0.15em] text-[#D4AF37] uppercase font-semibold leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="lg:col-span-4">
                <p className="text-xs sm:text-sm md:text-base text-[#F5F5DC]/80 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 4 */}
      <WaveDivider fillColor="#F5F5DC" variant={4} />
    </section>
  );
}


