import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import WhatDrivesUs from "./components/WhatDrivesUs";
import Services from "./components/Services";
import WeddingSpecialties from "./components/WeddingSpecialties";
import OtherEvents from "./components/OtherEvents";
import WhyChooseFK from "./components/WhyChooseFK";
import FoodAndCatering from "./components/FoodAndCatering";
import DecorAndDesign from "./components/DecorAndDesign";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isPreloaderComplete, setIsPreloaderComplete] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handlePreloaderComplete = () => {
    setIsPreloaderComplete(true);
  };

  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!isPreloaderComplete ? (
          <Preloader onComplete={handlePreloaderComplete} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header isPreloaderComplete={isPreloaderComplete} />
            <main>
              <Hero />
              <About />
              <Mission />

              <WhatDrivesUs />
              <Services />
              <WeddingSpecialties />
              <OtherEvents />
              <WhyChooseFK />
              <FoodAndCatering />
              <DecorAndDesign />
              <Process />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
