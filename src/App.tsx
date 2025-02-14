import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeDrawer } from "./components/ThemeDrawer";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingShapes } from "./components/Animation";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [themeColor, setThemeColor] = useState("green");
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
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`min-h-screen bg-black text-gray-100 transition-colors duration-300`}
      >
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
          className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-l-xl shadow-lg hover:scale-105 transition-transform"
        >
          <motion.div
            animate={{ rotate: isDrawerOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              className="w-6 h-6 text-white"
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
        <FloatingShapes />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
