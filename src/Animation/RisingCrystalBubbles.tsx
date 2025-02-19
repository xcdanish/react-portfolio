import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RisingCrystalBubblesProps {
  themeColor: string;
}

export const RisingCrystalBubbles: React.FC<RisingCrystalBubblesProps> = ({
  themeColor,
}) => {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number;
      size: number;
      startX: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * (120 - 40) + 100,
      startX: Math.random() * 100,
      color: `hsl(${Math.random() * 360}, 90%, 65%)`,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0, y: "100vh", scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.8, 0.5],
            y: ["100vh", "-10vh"],
            x: [
              `${bubble.startX}vw`,
              `${bubble.startX + Math.random() * 6 - 3}vw`,
            ],
            scale: [1, 1.3, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 5 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full backdrop-blur-xl shadow-xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle, ${bubble.color} 20%, transparent)`,
            mixBlendMode: "screen",
            filter: "blur(6px) drop-shadow(0 0 10px rgba(255,255,255,0.6))",
            left: `${bubble.startX}vw`,
          }}
        />
      ))}
    </div>
  );
};
