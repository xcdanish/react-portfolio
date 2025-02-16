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
  const colors = getThemeColors(themeColor);

  // Track the current section based on scroll position
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.substring(1)); // Extract IDs

    const handleScroll = () => {
      let currentSection = "Home"; // Default active section

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
    handleScroll(); // Call initially to set the correct active state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            H! Danish
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 ${
                  activeItem === item.name
                    ? colors.text
                    : "text-gray-600 dark:text-gray-300"
                } ${colors.hover} relative group`}
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
            className={`md:hidden p-2 ${colors.text}`}
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
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 py-3 ${
                    activeItem === item.name
                      ? colors.text
                      : "text-gray-600 dark:text-gray-300"
                  } ${colors.hover}`}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
