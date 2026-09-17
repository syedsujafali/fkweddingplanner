import RoyalScrollReveal from "./RoyalScrollReveal";
import WaveDivider from "./WaveDivider";
import { services } from "../data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-[#F5F5DC] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <RoyalScrollReveal direction="left" delay={0.1}>
          <div className="mb-4">
            <span className="text-sm tracking-[0.3em] text-[#8B0000] uppercase font-bold">
              CHAPTER 03
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-serif text-[#8B0000] uppercase mb-16 font-bold">
            THE CRAFT
          </h2>
        </RoyalScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <RoyalScrollReveal
              key={service.id}
              direction={index % 2 === 0 ? "up" : "zoom"}
              delay={index * 0.1}
            >
              <div className="group relative bg-[#5D1A2A] rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/30 flex flex-col justify-between h-full hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2">
                {/* Service Image Header */}
                {service.image && (
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A] via-[#5D1A2A]/40 to-transparent" />
                    <span className="absolute top-4 left-4 text-xl font-bold font-serif text-[#D4AF37] bg-[#5D1A2A]/85 px-3 py-1 rounded-lg backdrop-blur-sm border border-[#D4AF37]/40 shadow-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Service Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-[#F5F5DC] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#F5F5DC]/85 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                    <span>Explore Details</span>
                    <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </RoyalScrollReveal>
          ))}
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 5 */}
      <WaveDivider fillColor="#5D1A2A" variant={5} flip={true} />
    </section>
  );
}
