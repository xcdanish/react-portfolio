import React, { useState, useEffect, createContext } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeDrawer } from "./components/ThemeDrawer";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FloatingShapes } from "./Animation/FloatingShapes";
import { motion, AnimatePresence } from "framer-motion";
import { FireAndFume } from "./Animation/FireAndFume";

export const ThemeContext = createContext<{
  themeColor: string;
  theme: "light" | "dark";
}>({ themeColor: "blue", theme: "dark" });

export const getThemeColors = (color: string) => {
  const colors = {
    blue: {
      primary: "from-blue-600 to-purple-600",
      secondary: "from-blue-500 to-purple-500",
      text: "text-blue-700 dark:text-blue-400",
      subtext: "text-gray-700 dark:text-gray-400",
      hover: "hover:text-blue-600 dark:hover:text-blue-400",
      gradient: "from-blue-600 via-purple-600 to-pink-600",
    },
    green: {
      primary: "from-green-600 to-teal-600",
      secondary: "from-green-500 to-teal-500",
      text: "text-green-700 dark:text-green-400",
      subtext: "text-gray-700 dark:text-gray-400",
      hover: "hover:text-green-600 dark:hover:text-green-400",
      gradient: "from-green-600 via-teal-600 to-cyan-600",
    },
    purple: {
      primary: "from-purple-600 to-pink-600",
      secondary: "from-purple-500 to-pink-500",
      text: "text-purple-700 dark:text-purple-400",
      subtext: "text-gray-700 dark:text-gray-400",
      hover: "hover:text-purple-600 dark:hover:text-purple-400",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
    },
    orange: {
      primary: "from-orange-600 to-red-600",
      secondary: "from-orange-500 to-red-500",
      text: "text-orange-700 dark:text-orange-400",
      subtext: "text-gray-700 dark:text-gray-400",
      hover: "hover:text-orange-600 dark:hover:text-orange-400",
      gradient: "from-orange-600 via-red-600 to-rose-600",
    },
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [themeColor, setThemeColor] = useState("blue");
  const [fontFamily, setFontFamily] = useState("inter");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle(
      "font-inter",
      fontFamily === "inter"
    );
    document.documentElement.classList.toggle(
      "font-poppins",
      fontFamily === "poppins"
    );
    document.documentElement.classList.toggle(
      "font-roboto",
      fontFamily === "roboto"
    );
  }, [theme, fontFamily]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeColor, theme }}>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen relative overflow-x-hidden"
        >
          <div className="relative z-10">
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
              // themeColor={themeColor}
            />
            <ThemeDrawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              theme={theme}
              themeColor={themeColor}
              fontFamily={fontFamily}
              onThemeChange={setTheme}
              onColorChange={setThemeColor}
              onFontChange={setFontFamily}
            />
            <button
              onClick={() => setIsDrawerOpen(true)}
              className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 glass-effect p-3 rounded-l-xl shadow-lg hover:scale-105 transition-transform bg-gradient-to-r ${
                getThemeColors(themeColor).primary
              } bg-opacity-10`}
            >
              <motion.div
                animate={{ rotate: isDrawerOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-6 h-6 text-gray-600 dark:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </motion.div>
            </button>

            <Navbar themeColor={themeColor} />
            <div className="section-wrapper">
              <FloatingShapes themeColor={themeColor} />
              <div className="section-content">
                <Hero themeColor={themeColor} />
              </div>
            </div>

            <div className="section-wrapper">
              {/* <FireAndFume /> */}
              <FloatingShapes themeColor={themeColor} />
              <div className="section-content">
                <About themeColor={themeColor} />
              </div>
            </div>

            <div className="section-wrapper">
              <FloatingShapes themeColor={themeColor} />
              <div className="section-content">
                <Skills themeColor={themeColor} />
              </div>
            </div>

            <div className="section-wrapper">
              <FloatingShapes themeColor={themeColor} />
              <div className="section-content">
                <Timeline themeColor={themeColor} />
              </div>
            </div>

            <div className="section-wrapper">
              <FloatingShapes themeColor={themeColor} />
              <div className="section-content">
                <Projects themeColor={themeColor} />
              </div>
            </div>

            <div className="section-wrapper">
              <FloatingShapes themeColor={themeColor} />
              <div className="section-content">
                <Contact themeColor={themeColor} />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
