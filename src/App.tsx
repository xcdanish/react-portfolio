/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, createContext, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getThemeColors } from "./Theme/ThemeBox";
import LoadingSection from "./Animation/LoadingSection";
import { FireAndFume } from "./Animation/FireAndFume";
import { CrystalBubbles } from "./Animation/CrystalBubbles";
import { RisingCrystalBubbles } from "./Animation/RisingCrystalBubbles";
import { MagicBubbles } from "./Animation/MagicBubbles";
import { CyberRuneSurge } from "./Animation/CyberRuneSurge";
import { RunicRiftSurge } from "./Animation/RunicRiftSurge";
// import { MagicCursorTrail } from "./Animation/MagicCursorTrail";
import { Cursor } from "./Animation/Cursor";

// Function to simulate delay in component loading
// Correct typing for delayImport function
const delayImport = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  delay = 0
) =>
  new Promise<{ default: T }>((resolve) =>
    setTimeout(() => resolve(importFunc()), delay)
  );

// Lazy load components with delay
const FloatingShapes = lazy(() =>
  delayImport(() =>
    import("./Animation/FloatingShapes").then((module) => ({
      default: module.FloatingShapes,
    }))
  )
);

const CrystalHero = lazy(() =>
  delayImport(() =>
    import("./components/CrystalHero").then((module) => ({
      default: module.CrystalHero,
    }))
  )
);

const Navbar = lazy(() =>
  delayImport(() =>
    import("./components/Navbar").then((module) => ({ default: module.Navbar }))
  )
);
const Hero = lazy(() =>
  delayImport(() =>
    import("./components/Hero").then((module) => ({ default: module.Hero }))
  )
);
const About = lazy(() =>
  delayImport(() =>
    import("./components/About").then((module) => ({ default: module.About }))
  )
);
const Skills = lazy(() =>
  delayImport(() =>
    import("./components/Skills").then((module) => ({ default: module.Skills }))
  )
);
const Timeline = lazy(() =>
  delayImport(() =>
    import("./components/Timeline").then((module) => ({
      default: module.Timeline,
    }))
  )
);
const Projects = lazy(() =>
  delayImport(() =>
    import("./components/Projects").then((module) => ({
      default: module.Projects,
    }))
  )
);
const Contact = lazy(() =>
  delayImport(() =>
    import("./components/Contact").then((module) => ({
      default: module.Contact,
    }))
  )
);
const ThemeDrawer = lazy(() =>
  delayImport(() =>
    import("./components/ThemeDrawer").then((module) => ({
      default: module.ThemeDrawer,
    }))
  )
);
const ThemeToggle = lazy(() =>
  delayImport(() =>
    import("./components/ThemeToggle").then((module) => ({
      default: module.ThemeToggle,
    }))
  )
);

export const ThemeContext = createContext<{
  themeColor: string;
  theme: "light" | "dark";
}>({ themeColor: "blue", theme: "dark" });

// Loading Screen (Appears for 3 Seconds)

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [themeColor, setThemeColor] = useState("blue");
  const [fontFamily, setFontFamily] = useState("inter");
  const [selectedAnimation, setSelectedAnimation] = useState("FloatingShapes"); // Default Animation

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
    <Suspense fallback={<LoadingSection />}>
      <ThemeContext.Provider value={{ themeColor, theme }}>
        <AnimatePresence>
          <Cursor />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen relative overflow-x-hidden"
          >
            <div className="relative z-10">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <ThemeDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                theme={theme}
                themeColor={themeColor}
                onThemeChange={setTheme}
                onColorChange={setThemeColor}
                selectedAnimation={selectedAnimation}
                onAnimationChange={setSelectedAnimation}
                fontFamily={fontFamily}
                onFontChange={setFontFamily}
              />
              <button
                onClick={() => setIsDrawerOpen(true)}
                className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 glass-effect p-3 rounded-l-xl shadow-lg hover:scale-105 transition-transform bg-gradient-to-r ${
                  getThemeColors(themeColor).primary
                } bg-opacity-10`}
              >
                {/* <motion.div
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
                </motion.div> */}
              </button>

              <Navbar themeColor={themeColor} />
              {[
                { Component: CrystalHero, id: "hero" },
                { Component: About, id: "about" },
                { Component: Skills, id: "skills" },
                { Component: Timeline, id: "timeline" },
                { Component: Projects, id: "projects" },
                { Component: Contact, id: "contact" },
              ].map(({ Component, id }) => (
                <div key={id} className="section-wrapper">
                  {selectedAnimation === "FloatingShapes" && (
                    <FloatingShapes themeColor={themeColor} />
                  )}
                  {selectedAnimation === "RunicRiftSurge" && (
                    <RunicRiftSurge themeColor={themeColor} />
                  )}
                  {selectedAnimation === "CyberRuneSurge" && (
                    <CyberRuneSurge themeColor={themeColor} />
                  )}
                  {selectedAnimation === "MagicBubbles" && (
                    <MagicBubbles themeColor={themeColor} />
                  )}
                  {selectedAnimation === "RisingCrystalBubbles" && (
                    <RisingCrystalBubbles themeColor={themeColor} />
                  )}
                  {selectedAnimation === "CrystalBubbles" && (
                    <CrystalBubbles themeColor={themeColor} />
                  )}
                  {selectedAnimation === "FireAndFume" && (
                    <FireAndFume themeColor={themeColor} />
                  )}
                  {/* <MagicCursorTrail themeColor={themeColor} /> */}
                  {/* <RunicRiftSurge themeColor={themeColor} /> */}
                  {/* <CyberRuneSurge themeColor={themeColor} /> */}
                  {/* <MagicBubbles themeColor={themeColor} /> */}
                  {/* <RisingCrystalBubbles themeColor={themeColor} /> */}
                  {/* <CrystalBubbles themeColor={themeColor} /> */}
                  {/* <FireAndFume themeColor={themeColor} /> */}
                  {/* <FloatingShapes themeColor={themeColor} /> */}
                  <div className="section-content">
                    <Component themeColor={themeColor} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </ThemeContext.Provider>
    </Suspense>
  );
}

export default App;
