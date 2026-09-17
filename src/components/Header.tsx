import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems, mobileNavItems, contactInfo } from "../data";

interface HeaderProps {
  isPreloaderComplete: boolean;
}

export default function Header({ isPreloaderComplete }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isPreloaderComplete) return null;

  return (
    <>
      {/* Header Bar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#FFFDF7]/95 backdrop-blur-md shadow-md py-1.5 border-b border-[#D4AF37]/40"
            : "bg-[#FFFDF7]/90 backdrop-blur-md shadow-sm py-2 border-b border-[#D4AF37]/25"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center group shrink-0">
              <img
                src="/logo.png"
                alt="Feroz Khan Wedding Planner & Event Management"
                className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-xs lg:text-sm tracking-[0.15em] text-[#5D1A2A] hover:text-[#B8860B] transition-colors duration-300 uppercase font-bold relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8860B] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* Custom Luxury Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              className="md:hidden relative z-[70] flex items-center space-x-2.5 px-4 py-2 rounded-full border border-[#B8860B] bg-[#FFFDF7] text-[#5D1A2A] backdrop-blur-md shadow-md hover:bg-[#FAF5E8] active:scale-95 transition-all duration-300"
            >
              <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#5D1A2A]">
                {isMobileMenuOpen ? "CLOSE" : "MENU"}
              </span>

              {/* Animated Hamburger / Close Icon */}
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-[2px] bg-[#B8860B] rounded-full block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-[2px] bg-[#B8860B] rounded-full block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-[2px] bg-[#B8860B] rounded-full block origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#5D1A2A] md:hidden flex flex-col pt-20 pb-8 px-6 overflow-hidden min-h-[100dvh]"
          >
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-radial from-[#8B0000]/30 via-[#5D1A2A] to-[#3A0A18] pointer-events-none" />

            {/* Scrollable Navigation Menu Links */}
            <div className="relative z-10 flex-1 overflow-y-auto my-2 py-2 pr-1 space-y-1">
              <nav className="flex flex-col space-y-1 text-center">
                {mobileNavItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    className={`text-base sm:text-lg font-serif tracking-[0.15em] text-[#F5F5DC] hover:text-[#D4AF37] transition-colors duration-300 uppercase py-2.5 block ${
                      index === mobileNavItems.length - 1 ? "" : "border-b border-[#D4AF37]/15"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Fixed Bottom Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="relative z-10 shrink-0 pt-4 pb-4 border-t border-[#D4AF37]/30 text-center bg-[#5D1A2A]"
            >
              <p className="text-[11px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-3">
                APKA SUKOON, HAMARI ZEMEDARI
              </p>
              <a
                href={`tel:${contactInfo.phone1}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center justify-center space-x-2.5 w-full py-3.5 px-5 rounded-full border border-[#D4AF37] bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#3A0A18] font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-2xl hover:brightness-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-[#3A0A18] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.001 1.001 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Feroz Khan ({contactInfo.phone1})</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

