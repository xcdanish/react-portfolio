import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Palette, Type, Sun, Moon } from "lucide-react";

interface ThemeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  theme: string;
  themeColor: string;
  fontFamily: string;
  onThemeChange: (theme: "light" | "dark") => void;
  onColorChange: (color: string) => void;
  onFontChange: (font: string) => void;
  selectedAnimation: string; // New prop
  onAnimationChange: (animation: string) => void; // New prop
}

export const colors = [
  { name: "blue", class: "from-blue-600 via-purple-600 to-pink-600" },
  { name: "green", class: "from-green-600 via-teal-600 to-blue-600" },
  { name: "purple", class: "from-purple-600 via-pink-600 to-red-600" },
  { name: "orange", class: "from-orange-600 via-red-600 to-pink-600" },
  { name: "red", class: "from-red-600 via-rose-600 to-pink-600" },
  { name: "yellow", class: "from-yellow-500 via-orange-500 to-red-500" },
  { name: "cyan", class: "from-cyan-600 via-blue-600 to-indigo-600" },
  { name: "pink", class: "from-pink-600 via-rose-600 to-red-600" },
  { name: "indigo", class: "from-indigo-600 via-blue-600 to-cyan-600" },
  // { name: "teal", class: "from-teal-600 via-green-600 to-lime-600" },
  // { name: "lime", class: "from-lime-500 via-green-500 to-teal-500" },
  // { name: "black", class: "from-gray-900 via-gray-800 to-black" },
  // { name: "white", class: "from-gray-100 via-gray-200 to-white" },
];

const animations = [
  { name: "FloatingShapes", label: "Floating Shapes" },
  // { name: "MagicCursorTrail", label: "Magic Cursor" },
  { name: "RunicRiftSurge", label: "Runic Rift" },
  { name: "CyberRuneSurge", label: "Cyber Rune" },
  { name: "MagicBubbles", label: "Magic Bubbles" },
  { name: "RisingCrystalBubbles", label: "Rising Crystals" },
  { name: "CrystalBubbles", label: "Crystal Bubbles" },
  { name: "FireAndFume", label: "Fire & Fume" },
];

// const fonts = [
//   { name: "inter", label: "Inter" },
//   { name: "poppins", label: "Poppins" },
//   { name: "roboto", label: "Roboto" },
// ];

export const ThemeDrawer: React.FC<ThemeDrawerProps> = ({
  isOpen,
  onClose,
  theme,
  themeColor,
  onThemeChange,
  onColorChange,
  selectedAnimation,
  onAnimationChange,
  // fontFamily,
  // onFontChange,
}) => {
  const selectedColor =
    colors.find((c) => c.name === themeColor)?.class ||
    "from-blue-600 via-purple-600 to-pink-600";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glassmorphism Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 mt-1"
            onClick={onClose}
          />

          {/* Theme Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-80 bg-white/10 backdrop-blur-xl shadow-2xl z-50 p-2 border-l border-white/20 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="tracking-widest text-xl font-bold  text-black dark:text-gray-200">
                Customize Theme
              </h2>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-white/10 rounded-full transition"
              >
                <X className="w-6 h-6 text-gray-400" />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="space-y-6 overflow-y-auto h-[calc(100%-60px)] pr-2 scrollbar-hide">
              {/* Theme Mode */}
              <div>
                <div className="flex items-center gap-2 mb-3 mt-3">
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5  text-black dark:text-gray-200" />
                  ) : (
                    <Sun className="w-5 h-5  text-black dark:text-gray-200" />
                  )}
                  <h3 className="tracking-widest text-black dark:text-gray-200">
                    Theme Mode
                  </h3>
                </div>
                <div className="flex gap-4">
                  {["light", "dark"].map((mode) => (
                    <motion.button
                      key={mode}
                      onClick={() => onThemeChange(mode as "light" | "dark")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg border ${
                        theme === mode
                          ? `bg-gradient-to-r ${selectedColor} border-transparent` // Dynamic gradient
                          : "bg-white/10 border-white/20" // Default style
                      }  text-black dark:text-gray-200`}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Color Scheme */}
              <div>
                <div className="flex items-center gap-2 mb-3 ">
                  <Palette className="w-5 h-5  text-black dark:text-gray-200" />
                  <h3 className="tracking-widest text-black dark:text-gray-200">
                    Color Scheme
                  </h3>
                </div>
                <div className="grid grid-cols-4 place-items-center gap-3">
                  {colors.map((color) => (
                    <motion.button
                      key={color.name}
                      onClick={() => onColorChange(color.name)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`font-montserrat h-12 w-12 rounded-full bg-gradient-to-r ${
                        color.class
                      } ${
                        themeColor === color.name ? "ring-2 ring-black dark:ring-white" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="tracking-widest  text-black dark:text-gray-200 mb-2">
                  Animation Effects
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {animations.map((anim, i) => (
                    <motion.button
                      key={i}
                      onClick={() => onAnimationChange(anim.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedAnimation === anim.name
                          ? "bg-white/10 border-white/20"
                          : "bg-gray-800 border-transparent"
                      }  text-black dark:text-gray-200 text-sm`}
                    >
                      {anim.label}
                    </motion.button>
                  ))}
                </div>
              </div>
              {/* Font Family */}
              {/* <div>
                <div className="flex items-center gap-2 mb-3">
                  <Type className="w-5 h-5  text-black dark:text-gray-200" />
                  <h3 className="tracking-widest text-gray-200">Font Family</h3>
                </div>
                <div className="space-y-3">
                  {fonts.map((font) => (
                    <motion.button
                      key={font.name}
                      onClick={() => onFontChange(font.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full px-4 py-2 text-left rounded-lg border ${
                        fontFamily === font.name
                          ? "bg-white/10 border-white/20"
                          : "bg-gray-800 border-transparent"
                      }  text-black dark:text-gray-200`}
                    >
                      {font.label}
                    </motion.button>
                  ))}
                </div>
              </div> */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
