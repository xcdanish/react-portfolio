import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MagicBubbleProps {
  themeColor: string;
}

export const MagicBubbles: React.FC<MagicBubbleProps> = ({ themeColor }) => {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number;
      size: number;
      position: { x: number; y: number };
      color: string;
    }>
  >([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: Math.random() * (100 - 40) + 40,
      position: {
        x: Math.random() * 100,
        y: 100 + Math.random() * 20,
      },
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0, scale: 0.8, y: "100vh" }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            x: [
              `${bubble.position.x}vw`,
              `${bubble.position.x + Math.random() * 10 - 5}vw`,
              `${bubble.position.x}vw`,
            ],
            y: ["100vh", "-10vh"],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full backdrop-blur-xl shadow-lg"
          style={{
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle, ${bubble.color} 30%, transparent)`,
            filter: "drop-shadow(0px 0px 20px rgba(255,255,255,0.5)) blur(5px)",
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
};
