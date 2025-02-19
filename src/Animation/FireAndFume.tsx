import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { getThemeColors } from "../Theme/ThemeBox";

interface FireAndFumeProps {
  themeColor: string;
}

export const FireAndFume: React.FC<FireAndFumeProps> = ({ themeColor }) => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      size: number;
      position: { x: number; y: number };
      color: string;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * (160 - 60) + 80, // Random size between 30px and 80px
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
      color: `hsl(${Math.random() * 360}, 80%, 60%)`, // Random dynamic color
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            x: [
              `${particle.position.x}vw`,
              `${particle.position.x + Math.random() * 10 - 5}vw`,
              `${particle.position.x}vw`,
            ],
            y: [
              `${particle.position.y}vh`,
              `${particle.position.y + Math.random() * 10 - 5}vh`,
              `${particle.position.y}vh`,
            ],
            scale: [1, 1.4, 1],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full shadow-lg backdrop-blur-3xl"
          style={{
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.color} 20%, transparent)`,
            filter: "blur(10px)",
          }}
        />
      ))}
    </div>
  );
};
