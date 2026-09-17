import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { processSteps } from "../data";

export default function Process() {
  return (
    <section
      id="process"
      className="relative min-h-screen bg-[#F5F5DC] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm tracking-[0.3em] text-[#8B0000] uppercase">
            CHAPTER 09
          </span>
        </motion.div>

        <h2 className="text-sm tracking-[0.3em] text-[#8B0000] uppercase mb-16">
          THE JOURNEY
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D1A2A] leading-tight">
            Our Process
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-white/95 rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/40 flex flex-col justify-between"
            >
              {/* Step Image - High Visibility & Brightness */}
              {step.image && (
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                  <span className="absolute top-4 left-4 text-2xl font-bold font-serif text-[#D4AF37] bg-[#5D1A2A] px-3.5 py-1 rounded-lg border border-[#D4AF37]/40 shadow-lg">
                    {step.number}
                  </span>
                </div>
              )}

              {/* Step Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-[#5D1A2A] mb-3 group-hover:text-[#8B0000] transition-colors duration-300 font-serif">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#4A0E4E] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37] uppercase tracking-wider font-semibold">
                  <span>STEP {step.number}</span>
                  <span>•</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 pt-16 border-t border-[#D4AF37] border-opacity-20"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5D1A2A] leading-tight">
            From the first idea to the final moment — we are with you every step.
          </p>
        </motion.div>
      </div>

      {/* Wave Transition Divider - Unique Variant 11 */}
      <WaveDivider fillColor="#5D1A2A" variant={11} flip={true} />
    </section>
  );
}
