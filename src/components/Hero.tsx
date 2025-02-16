import React, { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Code, Database, Server } from "lucide-react";

const CharacterAnimation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  // const characters = Array.from(text);
  const characters = text.split("");

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            repeat: Infinity,
            repeatDelay: 7,
          }}
          className="inline-block"
          style={{ marginRight: char === " " ? "0.3em" : "0.01em" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-icon", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });

    // Animated gradient background
    gsap.to(gradientRef.current, {
      backgroundPosition: "200% center",
      duration: 20,
      repeat: -1,
      ease: "none",
    });

    // Floating orbs animation
    gsap.to(".gradient-orb", {
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
      ref={containerRef}
      id="home"
      className="min-h-screen pt-16 flex items-center justify-center relative overflow-hidden perspective-1000"
    >
      {/* Animated gradient background */}
      <div
        ref={gradientRef}
        className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20"
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,255,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,50,255,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0" />
      </div>

      {/* Floating orbs with enhanced animation */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="gradient-orb absolute w-32 h-32 rounded-full blur-xl opacity-20"
          style={{
            background: `radial-gradient(circle at center, rgba(${
              Math.random() * 255
            },${Math.random() * 255},255,0.3), transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() + 0.5})`,
            animation: `float ${Math.random() * 5 + 3}s infinite alternate`,
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <div className="flex justify-center gap-6 mb-12">
          <motion.div
            className="hero-icon p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
          >
            <Code className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.div
            className="hero-icon p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              rotate: -5,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
            }}
          >
            <Database className="w-8 h-8 text-purple-400" />
          </motion.div>
          <motion.div
            className="hero-icon p-4 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
            }}
          >
            <Server className="w-8 h-8 text-pink-400" />
          </motion.div>
        </div>

        <div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <CharacterAnimation
              text="Mohammed Danish"
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold"
          >
            <CharacterAnimation
              text="MERN Stack Developer"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Building modern web experiences with cutting-edge technologies
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-70 blur group-hover:opacity-100 transition duration-300" />
            <div className="relative px-8 py-4 bg-black rounded-lg border border-white/10 text-white font-bold">
              View My Work
            </div>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-70 blur group-hover:opacity-100 transition duration-300" />
            <div className="relative px-8 py-4 bg-black rounded-lg border border-white/10 text-white font-bold">
              Contact Me
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};
