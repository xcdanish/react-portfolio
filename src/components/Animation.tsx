// import { motion } from "framer-motion";

// export const FloatingShapes = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(15)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ y: "100vh", opacity: 0, scale: 0.8 }}
//           animate={{
//             y: "-10vh",
//             x: ["0%", "3%", "-3%", "0%"], // Gentle swaying motion
//             opacity: [0, 0.4, 0], // Appears & disappears smoothly
//             scale: [0.8, 1.2, 0.8], // Expands slightly like flickering fire
//           }}
//           transition={{
//             duration: 6 + i * 2, // Random duration for natural feel
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute w-32 h-32 rounded-full opacity-30 blur-4xl"
//           style={{
//             bottom: "-10vh",
//             left: `${Math.random() * 100}%`,
//             background: `radial-gradient(circle,
//               rgba(255, 100, 0, 0.6) 0%,
//               rgba(255, 165, 0, 0.4) 50%,
//               rgba(50, 50, 50, 0) 100%)`, // Fire-to-smoke gradient
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// import { motion } from "framer-motion";

// export const FloatingShapes = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(12)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ y: "100vh", opacity: 0, scale: 1 }}
//           animate={{
//             y: "-10vh",
//             x: ["0%", "5%", "-5%", "0%"], // Subtle left-right drift
//             opacity: [0, 0.5, 0], // Fades in and out
//             scale: [1, 1.5, 1], // Expands and contracts slightly
//           }}
//           transition={{
//             duration: 8 + i * 2, // Different durations for natural effect
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute w-32 h-32 bg-gradient-to-t from-gray-600 via-gray-400 to-transparent opacity-40 blur-4xl rounded-full"
//           style={{
//             bottom: "-10vh",
//             left: `${Math.random() * 100}%`, // Random horizontal position
//           }}
//         />
//       ))}
//     </div>
//   );
// };

import { motion } from "framer-motion";

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: "100vw", opacity: 0.5, scale: 1 }}
          animate={{
            x: "-100vw",
            y: ["0%", "30%", "-30%", "0%"],
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.8, 0.4, 0.6],
          }}
          transition={{
            duration: 50 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-400 to-pink-400 opacity-70 blur-3xl rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// import { motion } from "framer-motion";

// export const FloatingShapes = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden">
//       {[...Array(10)].map((_, i) => (
//         <motion.div
//           key={i}
//           initial={{ y: "100vh", opacity: 0.2, scale: 0.8 }}
//           animate={{
//             y: "-10vh",
//             x: ["0%", "10%", "-10%", "0%"], // Slight horizontal drift
//             opacity: [0.2, 0.6, 0.2], // Fades in and out
//             scale: [0.8, 1, 0.8], // Expands and contracts slightly
//           }}
//           transition={{
//             duration: 10 + i * 3, // Staggered durations for variety
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute w-40 h-40 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 opacity-30 blur-3xl rounded-full"
//           style={{
//             bottom: "-10vh",
//             left: `${Math.random() * 100}%`, // Random horizontal positioning
//           }}
//         />
//       ))}
//     </div>
//   );
// };
