import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingShapesProps {
  themeColor: string;
}

const getThemeColors = (color: string) => {
  const colors = {
    blue: {
      from: "from-blue-400",
      to: "to-purple-800",
      darkFrom: "dark:from-blue-500",
      darkTo: "dark:to-purple-900",
    },
    green: {
      from: "from-green-400",
      to: "to-teal-600",
      darkFrom: "dark:from-green-500",
      darkTo: "dark:to-teal-900",
    },
    purple: {
      from: "from-purple-400",
      to: "to-pink-600",
      darkFrom: "dark:from-purple-500",
      darkTo: "dark:to-pink-900",
    },
    orange: {
      from: "from-orange-400",
      to: "to-red-600",
      darkFrom: "dark:from-orange-500",
      darkTo: "dark:to-red-900",
    },
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

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
    const shapeTypes = ["circle", "square", "triangle", "pentagon"];
    const newShapes = Array.from({ length: 8 }, (_, i) => ({
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
            className={`w-full h-full backdrop-blur-xl bg-gradient-to-r ${
              colors.from
            } ${colors.to} ${colors.darkFrom} ${colors.darkTo} 
            border border-white/40 dark:border-white/20 shadow-2xl
            ${
              shape.type === "circle"
                ? "rounded-full"
                : shape.type === "square"
                ? "rounded-lg"
                : shape.type === "triangle"
                ? "clip-triangle"
                : "clip-pentagon"
            }`}
          >
            <div className="w-full h-full bg-gradient-to-br from-white/50 to-transparent dark:from-white/20 dark:to-transparent rounded-inherit" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
