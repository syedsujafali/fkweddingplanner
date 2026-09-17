import { motion } from "framer-motion";
import WaveDivider from "./WaveDivider";
import { contactInfo } from "../data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#5D1A2A] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 min-h-[80vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Chapter Indicator */}
          <div className="mb-16">
            <span className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase">
              CHAPTER 10
            </span>
          </div>

          <h2 className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase mb-16">
            THE CELEBRATION BEGINS
          </h2>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              {/* FK Logo Large */}
              <div className="mb-4 sm:mb-6">
                <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] font-bold tracking-[0.05em] text-[#D4AF37] leading-none block">
                  FK
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#F5F5DC] leading-tight mb-2 sm:mb-4">
                FEROZ KHAN
              </h3>
              <p className="text-sm sm:text-lg md:text-xl tracking-[0.12em] sm:tracking-[0.15em] text-[#F5F5DC] uppercase mb-2 sm:mb-4">
                Wedding Planner & Event Management
              </p>
              <p className="text-xs sm:text-base md:text-lg tracking-[0.18em] sm:tracking-[0.2em] text-[#D4AF37] uppercase mb-8 sm:mb-12 font-medium">
                Apka Sukoon, Hamari Zemedari
              </p>

              <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                  <span className="text-xs sm:text-sm tracking-[0.2em] text-[#D4AF37] uppercase font-semibold shrink-0 sm:w-28">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm sm:text-base text-[#F5F5DC] hover:text-[#D4AF37] transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                  <span className="text-xs sm:text-sm tracking-[0.2em] text-[#D4AF37] uppercase font-semibold shrink-0 sm:w-28">
                    PHONE
                  </span>
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base">
                    <a
                      href={`tel:${contactInfo.phone1}`}
                      className="text-[#F5F5DC] hover:text-[#D4AF37] transition-colors"
                    >
                      {contactInfo.phone1}
                    </a>
                    <span className="text-[#D4AF37] opacity-60">|</span>
                    <a
                      href={`tel:${contactInfo.phone2}`}
                      className="text-[#F5F5DC] hover:text-[#D4AF37] transition-colors"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                  <span className="text-xs sm:text-sm tracking-[0.2em] text-[#D4AF37] uppercase font-semibold shrink-0 sm:w-28">
                    INSTAGRAM
                  </span>
                  <a
                    href={`https://instagram.com/${contactInfo.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base text-[#F5F5DC] hover:text-[#D4AF37] transition-colors"
                  >
                    {contactInfo.instagram}
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6">
                  <span className="text-xs sm:text-sm tracking-[0.2em] text-[#D4AF37] uppercase font-semibold shrink-0 sm:w-28">
                    LOCATION
                  </span>
                  <p className="text-sm sm:text-base text-[#F5F5DC] opacity-90">{contactInfo.location}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-none">
                <motion.a
                  href={`tel:${contactInfo.phone1}`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-[#D4AF37] text-[#5D1A2A] hover:bg-[#D4AF37] hover:text-[#5D1A2A] transition-all duration-300 tracking-[0.1em] uppercase font-medium bg-[#D4AF37] rounded-lg shadow-lg text-sm sm:text-base text-center"
                >
                  Call Feroz Khan Now
                </motion.a>
              </div>
            </div>

            {/* Right Side Pexels Image Showcase */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 group">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Unforgettable Wedding Celebration"
                  className="w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 bg-[#5D1A2A]/90 backdrop-blur-md rounded-xl border border-[#D4AF37]/30 text-center">
                  <p className="text-[#D4AF37] text-[10px] sm:text-xs tracking-widest uppercase font-semibold mb-1 sm:mb-2">
                    BOOK YOUR DATE TODAY
                  </p>
                  <p className="text-[#F5F5DC] font-serif text-lg sm:text-xl font-bold">
                    Let Us Plan Your Dream Celebration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave Transition Divider - Unique Variant 12 */}
      <WaveDivider fillColor="#3A0A18" variant={12} />
    </section>
  );
}
