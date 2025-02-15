import { motion } from "framer-motion";

export const FireAndFume = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "100vh", opacity: 0, scale: 0.8 }}
          animate={{
            y: "-10vh",
            x: ["0%", "3%", "-3%", "0%"], // Gentle swaying motion
            opacity: [0, 0.4, 0], // Appears & disappears smoothly
            scale: [0.8, 1.2, 0.8], // Expands slightly like flickering fire
          }}
          transition={{
            duration: 6 + i * 2, // Random duration for natural feel
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-32 h-32 rounded-full opacity-30 blur-4xl"
          style={{
            bottom: "-10vh",
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, 
              rgba(255, 100, 0, 0.6) 0%, 
              rgba(255, 165, 0, 0.4) 50%, 
              rgba(50, 50, 50, 0) 100%)`, // Fire-to-smoke gradient
          }}
        />
      ))}
    </div>
  );
};
