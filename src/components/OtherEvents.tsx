import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { otherEvents } from "../data";

export default function OtherEvents() {
  return (
    <section
      id="events"
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
            CHAPTER 05
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D1A2A] leading-tight mb-20">
          Other Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative bg-[#5D1A2A] rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 flex flex-col justify-between"
            >
              {/* Event Image Header */}
              {event.image && (
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A] via-transparent to-transparent" />
                </div>
              )}

              {/* Event Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#F5F5DC] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#F5F5DC]/80 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37] uppercase tracking-wider font-semibold">
                  <span>BOOK THIS EVENT</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 7 */}
      <WaveDivider fillColor="#5D1A2A" variant={7} flip={true} />
    </section>
  );
}
