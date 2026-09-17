import RoyalScrollReveal from "./RoyalScrollReveal";
import WaveDivider from "./WaveDivider";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-[#F5F5DC] py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Chapter Indicator */}
        <RoyalScrollReveal direction="left" delay={0.1}>
          <div className="mb-12">
            <span className="text-sm tracking-[0.3em] text-[#8B0000] uppercase font-bold">
              CHAPTER 02
            </span>
          </div>
        </RoyalScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <RoyalScrollReveal direction="left" delay={0.2}>
            <div>
              <h2 className="text-sm tracking-[0.3em] text-[#8B0000] uppercase mb-6 font-bold">
                ABOUT US
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#5D1A2A] leading-tight mb-8">
                Welcome to FK Wedding Planner
              </h3>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-[#4A0E4E] leading-relaxed">
                  At FK Wedding Planner & Event Management, we believe every
                  celebration deserves to be extraordinary. Led by Feroz Khan, our
                  team specializes in creating seamless, stress-free experiences
                  for weddings and all types of events.
                </p>
                <p className="text-lg md:text-xl text-[#4A0E4E] leading-relaxed">
                  From traditional Mehndi and Shadi to elegant Valima, lively
                  Chawti, birthday parties, anniversaries, family gatherings,
                  farm house parties and corporate events — we handle everything
                  from planning to designing to perfect execution.
                </p>
                <div className="pt-8 border-t border-[#D4AF37]/40">
                  <p className="text-xl md:text-2xl tracking-[0.1em] text-[#5D1A2A] uppercase font-semibold">
                    Our promise
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-[#8B0000] mt-2">
                    Apka Sukoon, Hamari Zemedari
                  </p>
                  <p className="text-base md:text-lg text-[#4A0E4E] mt-2">
                    Your peace of mind is our responsibility.
                  </p>
                </div>
              </div>
            </div>
          </RoyalScrollReveal>

          {/* Right Image Showcase - Real Pexels Photography */}
          <RoyalScrollReveal direction="right" delay={0.3}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50 group">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="FK Wedding Couple Celebration"
                className="w-full h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D1A2A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center bg-[#5D1A2A]/90 backdrop-blur-md p-4 rounded-2xl border border-[#D4AF37]/40 shadow-xl">
                <p className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase font-bold">
                  HYDERABAD'S PREMIER EVENT SPECIALISTS
                </p>
              </div>
            </div>
          </RoyalScrollReveal>
        </div>
      </div>

      {/* Wave Transition Divider - Unique Variant 2 */}
      <WaveDivider fillColor="#5D1A2A" variant={2} flip={true} />
    </section>
  );
}
