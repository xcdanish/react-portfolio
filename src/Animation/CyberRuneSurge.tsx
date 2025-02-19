import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CyberRuneSurge = () => {
  const [runes, setRunes] = useState([]);

  useEffect(() => {
    const newRunes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * (120 - 50) + 50, // Rune size variation
      position: {
        x: Math.random() * 100,
        y: 110, // Start from below the screen
      },
      color: `hsl(${Math.random() * 360}, 80%, 50%)`, // Random dynamic glow color
      rotation: Math.random() * 360, // Initial rotation
    }));
    setRunes(newRunes);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {runes.map((rune) => (
        <motion.div
          key={rune.id}
          initial={{ opacity: 0, y: "110vh", scale: 0.5 }}
          animate={{
            opacity: [0.4, 0.9, 0.6],
            y: ["110vh", "-10vh"], // Move from bottom to top
            scale: [1, 1.2, 1],
            rotate: [rune.rotation, rune.rotation + 180],
            filter: [
              "hue-rotate(0deg)",
              "hue-rotate(180deg)",
              "hue-rotate(360deg)",
            ],
            boxShadow: [
              "0px 0px 10px rgba(255, 255, 255, 0.3)",
              "0px 0px 20px rgba(255, 255, 255, 0.6)",
              "0px 0px 10px rgba(255, 255, 255, 0.3)",
            ],
          }}
          transition={{
            duration: Math.random() * 4 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            width: rune.size,
            height: rune.size,
            left: `${rune.position.x}vw`,
            background: `radial-gradient(circle, ${rune.color} 40%, transparent)`,
            filter: "blur(5px)",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Mystic rune shape
          }}
        />
      ))}
    </div>
  );
};
