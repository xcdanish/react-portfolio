import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getThemeColors } from "../App";

const projects = [
  {
    title: "Flight Booking System",
    description:
      "A web-based platform for booking flights, managing customers, and integrating with the Amadeus API. Includes an admin panel and a user-facing website.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800", // Airplane booking
    tags: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Amadeus API",
      "Redux",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Lead Management System (CRM)",
    description:
      "Streamlined CRM tool for lead tracking, performance analysis, and status management, built with React.js and Berry MUI.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", // CRM dashboard
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Megabox E-Commerce Platform",
    description:
      "An end-to-end e-commerce platform with an admin panel and user-facing website, featuring product management and order tracking.",
    image:
      "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&q=80&w=800", // E-commerce shopping cart
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Elumat - Mathematical Learning Platform for Kids",
    description:
      "An interactive math learning platform where kids can solve puzzles, equations, and boost their math skills using React.js and JavaScript. Includes an admin panel and user platform.",
    image:
      "https://plus.unsplash.com/premium_vector-1723184441446-375a386c0d15?q=80&w=1423&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "React",
      "Redux",
      "JavaScript",
      "lodash",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Trendies - Stock Marketing App",
    description:
      "A real-time stock market insights platform that integrates stock data with social media trends from Twitter and Reddit. Includes an admin panel and real-time stock tracking.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800", // Stock market graph
    tags: [
      "React",
      "Redux",
      "Node.js",
      "Stock Market APIs",
      "Twitter API",
      "Reddit API",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Clo Event Booking System",
    description:
      "A booking platform for Barre, Yoga, Meditation, and Dance sessions, allowing users to schedule classes and manage bookings.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800", // Yoga and meditation event
    tags: ["Next.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
interface ProjectsProps {
  themeColor: string;
}
export const Projects: React.FC<ProjectsProps> = ({ themeColor }) => {
  const colors = getThemeColors(themeColor);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2
            className={`text-4xl font-bold text-center mb-8 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col"
              >
                {/* Gradient Background Only on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-80 blur-lg rounded-xl transition-opacity duration-300" />

                {/* Image Section (Full View) */}
                <div className="relative flex-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content Section */}
                <div className="bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/30 dark:border-gray-800 p-4">
                  <h3 className="text-gray-800 dark:text-gray-100 text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
