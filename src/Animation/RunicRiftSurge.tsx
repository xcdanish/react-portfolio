import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const RunicRiftSurge = () => {
  const [runes, setRunes] = useState([]);

  useEffect(() => {
    const symbols = ["ᚨ", "ᚱ", "ᛟ", "ᚷ", "ᛉ", "ᛃ", "ᛏ", "ᚺ", "ᚦ"];
    const newRunes = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      size: Math.random() * (100 - 40) + 40,
      position: { x: Math.random() * 90, y: 100 },
      color: `hsl(${Math.random() * 360}, 80%, 70%)`,
    }));
    setRunes(newRunes);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {runes.map((rune) => (
        <motion.div
          key={rune.id}
          initial={{ opacity: 0, y: "100vh", scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: ["100vh", "20vh", "-10vh"],
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            filter: ["blur(5px)", "blur(2px)", "blur(5px)"],
          }}
          transition={{
            duration: Math.random() * 4 + 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute font-bold text-[currentColor] backdrop-blur-xl shadow-lg"
          style={{
            left: `${rune.position.x}%`,
            fontSize: rune.size,
            color: rune.color,
            textShadow: "0 0 20px rgba(255,255,255,0.8)",
          }}
        >
          {rune.symbol}
        </motion.div>
      ))}
    </div>
  );
};
