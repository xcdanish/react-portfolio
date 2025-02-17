import { useState, useEffect, createContext, Suspense, lazy } from "react";
// import { FloatingShapes } from "./Animation/FloatingShapes";
import { motion, AnimatePresence } from "framer-motion";
import { getThemeColors } from "./Theme/ThemeBox";

// Lazy load components
const FloatingShapes = lazy(() =>
  import("./Animation/FloatingShapes").then((module) => ({
    default: module.FloatingShapes,
  }))
);
const Navbar = lazy(() =>
  import("./components/Navbar").then((module) => ({ default: module.Navbar }))
);
const Hero = lazy(() =>
  import("./components/Hero").then((module) => ({ default: module.Hero }))
);
const About = lazy(() =>
  import("./components/About").then((module) => ({ default: module.About }))
);
const Skills = lazy(() =>
  import("./components/Skills").then((module) => ({ default: module.Skills }))
);
const Timeline = lazy(() =>
  import("./components/Timeline").then((module) => ({
    default: module.Timeline,
  }))
);
const Projects = lazy(() =>
  import("./components/Projects").then((module) => ({
    default: module.Projects,
  }))
);
const Contact = lazy(() =>
  import("./components/Contact").then((module) => ({ default: module.Contact }))
);
const ThemeDrawer = lazy(() =>
  import("./components/ThemeDrawer").then((module) => ({
    default: module.ThemeDrawer,
  }))
);
const ThemeToggle = lazy(() =>
  import("./components/ThemeToggle").then((module) => ({
    default: module.ThemeToggle,
  }))
);

export const ThemeContext = createContext<{
  themeColor: string;
  theme: "light" | "dark";
}>({ themeColor: "blue", theme: "dark" });

const LoadingSection = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
              className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 glass-effect p-3 rounded-l-xl shadow-lg hover:scale-105 transition-transform bg-gradient-to-r ${
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

            <Suspense fallback={<LoadingSection />}>
              <Navbar themeColor={themeColor} />
              {[
                { Component: Hero, id: "hero" },
                { Component: About, id: "about" },
                { Component: Skills, id: "skills" },
                { Component: Timeline, id: "timeline" },
                { Component: Projects, id: "projects" },
                { Component: Contact, id: "contact" },
              ].map(({ Component, id }) => (
                <div key={id} className="section-wrapper">
                  <FloatingShapes themeColor={themeColor} />
                  <div className="section-content">
                    <Component themeColor={themeColor} />
                  </div>
                </div>
              ))}
            </Suspense>
          </div>
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;
