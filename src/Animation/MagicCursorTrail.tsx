import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export const MagicCursorTrail = () => {
  const trailRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      createParticle(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const createParticle = (x, y) => {
    const particle = document.createElement("div");
    particle.className = "magic-particle";
    document.body.appendChild(particle);
    gsap.set(particle, { x, y, opacity: 1, scale: Math.random() * 0.5 + 0.5 });

    gsap.to(particle, {
      x: x + (Math.random() - 0.5) * 50,
      y: y + (Math.random() - 0.5) * 50,
      opacity: 0,
      scale: 0,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => particle.remove(),
    });
  };

  return <div ref={trailRef} className="magic-cursor-trail" />;
};

// CSS (Add to your global CSS or component styles)
// .magic-particle {
//   position: fixed;
//   width: 10px;
//   height: 10px;
//   background: radial-gradient(circle, rgba(255, 180, 50, 0.8) 0%, transparent 70%);
//   border-radius: 50%;
//   pointer-events: none;
//   mix-blend-mode: screen;
// }
