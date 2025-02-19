import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code,
  User,
  Briefcase,
  Wrench,
  Clock,
  Mail,
} from "lucide-react";
import { getThemeColors } from "../Theme/ThemeBox";

const navItems = [
  { name: "Home", icon: Code, href: "#home" },
  { name: "About", icon: User, href: "#about" },
  { name: "Skills", icon: Wrench, href: "#skills" },
  { name: "Timeline", icon: Clock, href: "#timeline" },
  { name: "Projects", icon: Briefcase, href: "#projects" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

interface NavbarProps {
  themeColor: string;
}

export const Navbar: React.FC<NavbarProps> = ({ themeColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const colors = getThemeColors(themeColor);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.substring(1));
      let currentSection = "Home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= 100) {
            currentSection = id.charAt(0).toUpperCase() + id.slice(1);
          }
        }
      }

      setActiveItem(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#home"
            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent font-dodge`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            H! Danish
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 ${
                  activeItem === item.name
                    ? colors.text
                    : "text-gray-600 dark:text-gray-300"
                } ${colors.hover} relative group font-dodge`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {activeItem === item.name && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${colors.primary} rounded-full`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 ${colors.text} hover:bg-white/10 rounded-lg transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 py-4 ${
                    activeItem === item.name
                      ? colors.text
                      : "text-gray-600 dark:text-gray-300"
                  } ${colors.hover} font-dodge`}
                  whileHover={{ x: 10 }}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    setIsOpen(false); // Close the menu
                    setTimeout(() => {
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 300); // Small delay to allow menu to close
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-lg">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
