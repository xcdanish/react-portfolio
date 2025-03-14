import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Server } from "lucide-react";
import { getThemeColors } from "../Theme/ThemeBox";
import gsap from "gsap";

interface CrystalHeroProps {
  themeColor: string;
}

const TypewriterText = ({
  text,
  delay = 0,
  speed = 200, // Speed of typing
  repeatDelay = 3000, // Delay before repeating
}: {
  text: string;
  delay?: number;
  speed?: number;
  repeatDelay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      // Reset after some delay
      setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, repeatDelay);
    }
  }, [currentIndex, text, speed, repeatDelay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className="inline-block"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </motion.span>
  );
};

const CrystalShard = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.5, 0.3],
      scale: [0, 1.2, 1],
      rotate: [0, 45, 30],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
    className="absolute w-32 h-32 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-lg transform rotate-45 border border-white/20"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export const CrystalHero: React.FC<CrystalHeroProps> = ({ themeColor }) => {
  const colors = getThemeColors(themeColor);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Crystal background animation
    gsap.to(".crystal-bg", {
      backgroundPosition: "200% 50%",
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Floating elements animation
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
        from: "random",
      },
    });
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden perspective-1000"
      id="home"
    >
      {/* Crystal Background */}
      <div className="crystal-bg absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 bg-[length:200%_200%]" />

      {/* Crystal Shards */}
      {[...Array(10)].map((_, i) => (
        <CrystalShard key={i} delay={i * 0.2} />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence>
            {isVisible && (
              <>
                {/* Icons */}
                <div className="flex justify-center gap-6 mt-6 mb-12">
                  {[Code, Database, Server].map((Icon, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      className="floating-element"
                    >
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-r ${colors.primary} backdrop-blur-xl border border-white/20 shadow-xl`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h1
                    className={`text-4xl sm:text-5xl md:text-7xl font-dodge bg-gradient-to-r ${colors.primary} ${colors.secondary} bg-clip-text text-[currentColor] mb-4`}
                    //   className={`text-4xl sm:text-5xl md:text-7xl font-dodge bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent mb-4`}
                  >
                    <TypewriterText text="Mohammed Danish" />
                  </h1>
                  <h2
                    className={`text-3xl sm:text-4xl md:text-6xl font-dodge bg-gradient-to-r ${colors.secondary} bg-clip-text`}
                  >
                    <TypewriterText text="MERN Stack Developer" delay={2} />
                  </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4 }}
                  className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-montserrat"
                >
                  {/* <TypewriterText
                    text="Crafting innovative web experiences with cutting-edge technologies"
                    delay={4}
                  /> */}
                  Crafting innovative web experiences with cutting-edge
                  technologies
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 5 }}
                  className="flex flex-col sm:flex-row justify-center gap-4"
                >
                  {[
                    {
                      href: "#projects",
                      text: "View My Work",
                      //   gradient: "from-blue-600 to-purple-600",
                      gradient: ` ${colors.from} ${colors.to}`,
                      darkGradient: `dark:from-[${colors.darkFrom}] dark:to-[${colors.darkTo}]`,
                    },
                    {
                      href: "#contact",
                      text: "Contact Me",
                      //   gradient: "from-purple-600 to-pink-600",
                      gradient: `${colors.to} ${colors.from}`,
                      darkGradient: `dark:from-[${colors.darkFrom}] dark:to-[${colors.darkTo}]`,
                    },
                  ].map(({ href, text, gradient, darkGradient }) => (
                    <motion.a
                      key={text}
                      href={href}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group"
                    >
                      {/* Dynamic Gradient Background */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${gradient} ${darkGradient} rounded-lg opacity-70 blur group-hover:opacity-100 transition duration-300`}
                      />
                      <div className="relative px-8 py-4 bg-black rounded-lg border border-white/10 text-white font-bold">
                        {text}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mirror Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm" />
    </section>
  );
};
