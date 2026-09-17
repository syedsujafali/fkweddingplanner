import RoyalScrollReveal from "./RoyalScrollReveal";
import WaveDivider from "./WaveDivider";
import { weddingSpecialties } from "../data";

export default function WeddingSpecialties() {
  return (
    <section
      id="specialties"
      className="relative bg-[#5D1A2A] pt-16 md:pt-20 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <RoyalScrollReveal direction="left" delay={0.1}>
          <div className="mb-2">
            <span className="text-xs sm:text-sm tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
              CHAPTER 04 • THE CELEBRATION
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#F5F5DC] leading-tight mb-8 md:mb-10">
            Wedding Specialties
          </h3>
        </RoyalScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {weddingSpecialties.map((specialty, index) => (
            <RoyalScrollReveal
              key={specialty.id}
              direction={index % 2 === 0 ? "up" : "zoom"}
              delay={index * 0.05}
            >
              <div className="group relative rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/40 bg-[#4A1422] flex flex-col justify-between h-full hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2">
                {/* Top Image Container - Fully Visible & High Contrast */}
                {specialty.image && (
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img
                      src={specialty.image}
                      alt={specialty.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A1422] via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-serif text-[#F5F5DC] mb-1.5 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {specialty.title}
                    </h4>
                    <p className="text-xs text-[#F5F5DC]/85 font-light leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </div>
            </RoyalScrollReveal>
          ))}
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 6 */}
      <WaveDivider fillColor="#F5F5DC" variant={6} />
    </section>
  );
}
