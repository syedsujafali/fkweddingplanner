import { motion } from "framer-motion";
import { contactInfo } from "../data";

export default function Footer() {
  return (
    <footer className="relative bg-[#5D1A2A] py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Footer Pexels Instagram Mini-Gallery Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          <div className="relative h-40 rounded-xl overflow-hidden group border border-[#D4AF37]/30 shadow-md">
            <img
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Stage Decor Showcase"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
              STAGE DECOR
            </div>
          </div>

          <div className="relative h-40 rounded-xl overflow-hidden group border border-[#D4AF37]/30 shadow-md">
            <img
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Wedding Couple"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
              ROYAL SHADI
            </div>
          </div>

          <div className="relative h-40 rounded-xl overflow-hidden group border border-[#D4AF37]/30 shadow-md">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Catering Feast"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
              EXQUISITE FEAST
            </div>
          </div>

          <div className="relative h-40 rounded-xl overflow-hidden group border border-[#D4AF37]/30 shadow-md">
            <img
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Grand Reception"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-[#D4AF37] font-bold tracking-widest uppercase">
              VALIMA VENUE
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-12">
            <p className="text-xl md:text-2xl tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
              PLAN • PRECISION • PERFECTION
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#F5F5DC] mb-4">
              Every Detail, Perfectly Planned
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#D4AF37] leading-tight mb-8">
              We Plan. You Celebrate.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-[#F5F5DC]">
              Making Moments Unforgettable
            </p>
          </div>

          <div className="mb-12 flex flex-col items-center">
            <img
              src="/logo.png"
              alt="Feroz Khan Wedding Planner & Event Management"
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain mb-6 drop-shadow-xl bg-[#FFFDF7] p-3 sm:p-4 rounded-2xl"
            />
            <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6">
              FK Wedding Planner
            </h3>
            <div className="space-y-4">
              <p className="text-[#F5F5DC] opacity-90">
                Email: <a href={`mailto:${contactInfo.email}`} className="hover:text-[#D4AF37] transition-colors">{contactInfo.email}</a>
              </p>
              <p className="text-[#F5F5DC] opacity-90">
                Phone: <a href={`tel:${contactInfo.phone1}`} className="hover:text-[#D4AF37] transition-colors">{contactInfo.phone1}</a> | <a href={`tel:${contactInfo.phone2}`} className="hover:text-[#D4AF37] transition-colors">{contactInfo.phone2}</a>
              </p>
              <p className="text-[#F5F5DC] opacity-90">
                Instagram: <a href={`https://instagram.com/${contactInfo.instagram.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">{contactInfo.instagram}</a>
              </p>
              <p className="text-[#F5F5DC] opacity-90">
                Location: {contactInfo.location}
              </p>
            </div>
          </div>

          <p className="text-sm tracking-[0.2em] text-[#D4AF37] opacity-60 uppercase">
            © {new Date().getFullYear()} FK Wedding Planner & Event Management
          </p>
        </motion.div>
      </div>

      {/* Decorative Gold Line at Top */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-[#D4AF37]"
      />
    </footer>
  );
}
