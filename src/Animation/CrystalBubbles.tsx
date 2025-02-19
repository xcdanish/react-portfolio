import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CrystalBubblesProps {
  themeColor: string;
}

export const CrystalBubbles: React.FC<CrystalBubblesProps> = ({
  themeColor,
}) => {
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
      size: Math.random() * (180 - 70) + 70, // Random size between 70px and 180px
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      color: `hsl(${Math.random() * 360}, 80%, 60%)`, // Random dynamic color
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            x: [
              `${bubble.position.x}vw`,
              `${bubble.position.x + Math.random() * 15 - 7.5}vw`,
              `${bubble.position.x}vw`,
            ],
            y: [
              `${bubble.position.y}vh`,
              `${bubble.position.y + Math.random() * 15 - 7.5}vh`,
              `${bubble.position.y}vh`,
            ],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full shadow-xl backdrop-blur-3xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at center, ${bubble.color} 30%, transparent)`,
            boxShadow: `0px 0px 30px ${bubble.color}`,
            filter: "blur(8px)",
            mixBlendMode: "screen",
          }}
        />
      ))}
    </div>
  );
};
