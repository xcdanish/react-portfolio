import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getThemeColors } from "../Theme/ThemeBox";

interface FloatingShapesProps {
  themeColor: string;
}

export const FloatingShapes: React.FC<FloatingShapesProps> = ({
  themeColor,
}) => {
  const [shapes, setShapes] = useState<
    Array<{
      id: number;
      type: string;
      size: number;
      position: { x: number; y: number };
    }>
  >([]);

  const colors = getThemeColors(themeColor);

  useEffect(() => {
    const shapeTypes = [
      "circle",
      "square",
      "triangle",
      "pentagon",
      "hexagon",
      "star",
      "heart",
      "diamond",
      "oval",
      "parallelogram",
    ];
    const newShapes = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      size: Math.random() * (160 - 60) + 80, // Increased size range
      position: {
        x: Math.random() * 100,
        y: Math.random() * 100,
      },
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{
            opacity: 0,
            x: `${shape.position.x}vw`,
            y: `${shape.position.y}vh`,
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4], // Slightly increased opacity
            x: [
              `${shape.position.x}vw`,
              `${shape.position.x + 5}vw`,
              `${shape.position.x}vw`,
            ],
            y: [
              `${shape.position.y}vh`,
              `${shape.position.y - 5}vh`,
              `${shape.position.y}vh`,
            ],
            scale: [1, 1.2, 1], // Increased scale for better visibility
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: shape.size,
            height: shape.size,
          }}
        >
          <div
            className={`absolute w-full h-full backdrop-blur-xl bg-gradient-to-r ${colors.from} ${colors.to} ${colors.darkFrom} ${colors.darkTo} 
  border border-white/40 dark:border-white/20 shadow-2xl flex justify-center items-center`}
          >
            {shape.type === "circle" && (
              <div className="w-full h-full rounded-full bg-white/30" />
            )}
            {shape.type === "square" && (
              <div className="w-full h-full rounded-lg bg-white/30" />
            )}
            {shape.type === "triangle" && (
              <div className="clip-triangle bg-white/30" />
            )}
            {shape.type === "pentagon" && (
              <div className="clip-pentagon bg-white/30" />
            )}
            {shape.type === "hexagon" && (
              <div className="clip-hexagon bg-white/30" />
            )}

            {/* SVGs for unsupported shapes */}
            {shape.type === "star" && (
              <svg viewBox="0 0 64 64" className="w-full h-full fill-white/30">
                <polygon points="32 2 39 24 62 24 42 38 50 60 32 46 14 60 22 38 2 24 25 24" />
              </svg>
            )}

            {shape.type === "heart" && (
              <svg viewBox="0 0 64 64" className="w-full h-full fill-white/30">
                <path d="M32 58s26-15 26-34c0-10-8-18-18-18S32 14 32 14s-2-8-10-8-18 8-18 18c0 19 26 34 26 34z" />
              </svg>
            )}

            {shape.type === "diamond" && (
              <svg viewBox="0 0 64 64" className="w-full h-full fill-white/30">
                <polygon points="32 2 60 32 32 62 4 32" />
              </svg>
            )}

            {shape.type === "oval" && (
              <div className="w-[80px] h-[50px] rounded-full bg-white/30" />
            )}

            {shape.type === "parallelogram" && (
              <div className="w-[100px] h-[60px] bg-white/30 transform skew-x-12" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
