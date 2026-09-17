import RoyalScrollReveal from "./RoyalScrollReveal";
import WaveDivider from "./WaveDivider";
import { decorItems } from "../data";

export default function DecorAndDesign() {
  return (
    <section
      id="decor"
      className="relative min-h-screen bg-[#5D1A2A] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <RoyalScrollReveal direction="left" delay={0.1}>
          <div className="mb-4">
            <span className="text-sm tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
              CHAPTER 08 • THE DETAILS
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#F5F5DC] leading-tight mb-4">
            Décor, Stage & Design
          </h3>
          <p className="text-lg md:text-xl text-[#D4AF37] opacity-90 leading-relaxed mb-16">
            Creating breathtaking visual experiences for your celebration
          </p>
        </RoyalScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {decorItems.map((item, index) => (
            <RoyalScrollReveal
              key={item.id}
              direction={index % 2 === 0 ? "up" : "zoom"}
              delay={index * 0.08}
            >
              <div className="group relative bg-[#4A1422] rounded-2xl overflow-hidden shadow-xl border border-[#D4AF37]/40 flex flex-col justify-between h-full hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-2">
                {/* Decor Image Header - High Clarity & Brightness */}
                {item.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4A1422] via-transparent to-transparent opacity-50" />
                  </div>
                )}

                {/* Decor Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl font-bold font-serif text-[#F5F5DC] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#F5F5DC]/85 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-[#D4AF37] uppercase tracking-widest font-bold">
                    <span>DESIGN SPECIFICATION</span>
                    <span>•</span>
                  </div>
                </div>
              </div>
            </RoyalScrollReveal>
          ))}
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 10 */}
      <WaveDivider fillColor="#F5F5DC" variant={10} />
    </section>
  );
}
