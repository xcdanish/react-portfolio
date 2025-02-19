import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main cursor effect */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-500 rounded-full shadow-lg pointer-events-none"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 8,
        }}
      />

      {/* Subtle trailing dots for a magic effect */}
      <motion.div
        className="fixed w-4 h-4 bg-white rounded-full opacity-50 pointer-events-none"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
        animate={{
          x: cursorPosition.x - 8,
          y: cursorPosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.05,
        }}
      />
    </>
  );
};
