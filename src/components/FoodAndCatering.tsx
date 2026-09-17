import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { cateringItems } from "../data";

export default function FoodAndCatering() {
  return (
    <section
      id="catering"
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
            CHAPTER 07
          </span>
        </motion.div>

        <h2 className="text-sm tracking-[0.3em] text-[#8B0000] uppercase mb-16">
          THE DETAILS
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D1A2A] leading-tight mb-8">
            Food & Catering Excellence
          </h3>
          <p className="text-xl md:text-2xl text-[#4A0E4E] leading-relaxed">
            Delicious multi-cuisine experiences for every event
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-[#5D1A2A] mb-4">
            Wedding Catering Specialists
          </h4>
          <p className="text-lg text-[#4A0E4E] leading-relaxed max-w-[800px]">
            From traditional Hyderabadi biryani and haleem to continental,
            Chinese, North Indian and live counters — we craft menus that delight
            every guest.
          </p>
          <p className="text-lg text-[#4A0E4E] mt-4">
            Veg & Non-Veg options • Customizable packages • Hygienic preparation
          </p>
        </motion.div>

        {/* Food Gallery Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 group">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Multi-Cuisine Catering Feast"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs tracking-widest text-[#D4AF37] uppercase font-semibold block">ROYAL FEAST</span>
              <span className="text-white text-lg font-bold">Multi-Cuisine Buffet</span>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 group">
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Live Food Counters & Cooking"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs tracking-widest text-[#D4AF37] uppercase font-semibold block">INTERACTIVE</span>
              <span className="text-white text-lg font-bold">Live Food Counters</span>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 group">
            <img
              src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Desserts & Sweets Station"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs tracking-widest text-[#D4AF37] uppercase font-semibold block">SWEET DELIGHTS</span>
              <span className="text-white text-lg font-bold">Exquisite Desserts</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {cateringItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 bg-white/60 rounded-xl border border-[#D4AF37]/20 shadow-sm"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded-lg object-cover border border-[#D4AF37]/40 shrink-0"
                />
              )}
              <div>
                <h5 className="text-lg font-bold text-[#5D1A2A] mb-1">
                  {item.title}
                </h5>
                <p className="text-sm text-[#4A0E4E] opacity-90">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 9 */}
      <WaveDivider fillColor="#5D1A2A" variant={9} flip={true} />
    </section>
  );
}
