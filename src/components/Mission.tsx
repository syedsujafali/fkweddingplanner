import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";

export default function Mission() {
  return (
    <section className="relative min-h-[60vh] bg-[#5D1A2A] py-24 md:py-32 overflow-hidden">
      {/* Background Pexels Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#5D1A2A] via-[#5D1A2A]/90 to-[#5D1A2A]/70" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase">
            THE PROMISE
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[1000px]"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5DC] leading-tight mb-12">
            To deliver perfection in every detail — whether it's the grandeur of
            a wedding stage, the aroma of exquisite catering, the elegance of
            décor, or the joy of a perfectly coordinated celebration.
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] leading-tight">
            We turn your vision into unforgettable memories.
          </p>
        </motion.div>
      </div>

      {/* Wave Transition Divider - Unique Variant 3 */}
      <WaveDivider fillColor="#5D1A2A" variant={3} />
    </section>
  );
}
