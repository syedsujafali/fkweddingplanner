import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RoyalScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  className?: string;
}

export default function RoyalScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RoyalScrollRevealProps) {
  const getVariants = () => {
    switch (direction) {
      case "left":
        return {
          hidden: { opacity: 0, x: -50, rotateY: -10, scale: 0.96 },
          visible: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 50, rotateY: 10, scale: 0.96 },
          visible: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
        };
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.88, y: 25 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -40, scale: 0.96 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case "up":
      default:
        return {
          hidden: { opacity: 0, y: 45, rotateX: 10, scale: 0.96 },
          visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={getVariants()}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
}
