import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { whyChooseItems } from "../data";

export default function WhyChooseFK() {
  return (
    <section className="relative min-h-screen bg-[#5D1A2A] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase">
            CHAPTER 06
          </span>
        </motion.div>

        <h2 className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase mb-16">
          THE DIFFERENCE
        </h2>

        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5DC] leading-tight mb-20">
          Why Choose FK Wedding Planner
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative bg-[#4A1422]/60 rounded-2xl overflow-hidden border border-[#D4AF37]/30 p-8 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl md:text-2xl font-bold text-[#F5F5DC] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 font-serif">
                  {item.title}
                </h4>
                <p className="text-sm md:text-base text-[#F5F5DC]/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37] uppercase tracking-widest font-semibold">
                <span>FK GUARANTEE</span>
                <span>•</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High Impact Quote Box without image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-[#4A1422]/80 p-12 md:p-16 text-center text-white"
        >
          <div className="relative z-10 max-w-[800px] mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#F5F5DC] leading-tight mb-4">
              "We Plan. You Celebrate. Making Moments Unforgettable."
            </p>
            <p className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold">
              EXPERIENCE THE DIFFERENCE WITH FK WEDDING PLANNER
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wave Transition Divider - Unique Variant 8 */}
      <WaveDivider fillColor="#F5F5DC" variant={8} />
    </section>
  );
}
