import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Server,
  Layout,
  Palette,
  Blocks,
  Workflow,
  CheckCircle,
  // Brain,
} from "lucide-react";
import { getThemeColors } from "../Theme/ThemeBox";

// const shapes = ["circle", "square", "triangle", "star"];

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "TypeScript",
      "Vite",
      "JavaScript (ES6+)",
      "React Testing Library",
    ],
    color: "from-blue-500 to-cyan-500",
    borderStyle: "border-cyan-500",
  },
  {
    title: "Styling & Animation",
    icon: Palette,
    skills: [
      "CSS / CSS3",
      "Tailwind CSS",
      "Material UI",
      "SASS / SCSS",
      "Framer Motion",
      "GSAP",
      "Bootstrap",
      "ReactStrap",
      "Styled Components",
    ],
    color: "from-pink-500 to-rose-500",
    borderStyle: "border-rose-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Sockets.io",
    ],
    color: "from-green-500 to-emerald-500",
    borderStyle: "border-emerald-500",
  },
  {
    title: "State Management",
    icon: Blocks,
    skills: [
      "Redux Core",
      "Redux Toolkit",
      "React Query",
      "Hooks",
      "Context API",
    ],
    color: "from-purple-500 to-indigo-500",
    borderStyle: "border-indigo-500",
  },
  {
    title: "Development & Tools",
    icon: Code2,
    skills: [
      "Git / GitHub",
      "Webpack",
      "Responsive Design",
      "Vite",
      "RESTful APIs",
      "ESLint / Prettier",
      "Postman / Thunder Client",
    ],
    color: "from-amber-500 to-orange-500",
    borderStyle: "border-orange-500",
  },
  // {
  //   title: "Testing & Performance",
  //   icon: CheckCircle,
  //   skills: [
  //     "React Testing Library",
  //     "Cypress",
  //     "Vitest",
  //     "Performance Optimization",
  //   ],
  //   color: "from-red-500 to-pink-500",
  //   borderStyle: "border-red-500",
  // },
  {
    title: "Project Management",
    icon: Workflow,
    skills: ["Trello", "Jira", "Agile", "Scrum", "CI/CD", "GitHub Actions"],
    color: "from-teal-500 to-cyan-500",
    borderStyle: "border-cyan-500",
  },
  // {
  //   title: "AI & Advanced Concepts",
  //   icon: Brain,
  //   skills: ["LangChain", "OpenAI API", "TensorFlow.js", "Hugging Face APIs"],
  //   color: "from-indigo-500 to-blue-500",
  //   borderStyle: "border-indigo-500",
  // },
];

interface SkillsProps {
  themeColor: string;
}
export const Skills: React.FC<SkillsProps> = ({ themeColor }) => {
  const colors = getThemeColors(themeColor);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50"
    >
      {/* Animated Shapes */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => {
          const shapeType = shapes[i % shapes.length];
          return (
            <motion.div
              key={i}
              initial={{ x: "100vw", opacity: 0.5 }}
              animate={{ x: "-100vw", y: ["0%", "15%", "-15%", "0%"] }}
              transition={{
                duration: 40 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute w-32 h-32 bg-gradient-to-r from-blue-400 to-pink-400 opacity-60 blur-xl rounded-lg`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                clipPath:
                  shapeType === "triangle"
                    ? "polygon(50% 0%, 0% 100%, 100% 100%)"
                    : shapeType === "star"
                    ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                    : shapeType === "square"
                    ? "inset(0 0 0 0)"
                    : "circle(50% at 50% 50%)",
              }}
            />
          );
        })}
      </div> */}

      <div className="container mx-auto px-2 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2
            className={`tracking-widest text-4xl font-bold text-center mb-8 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}
          >
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative bg-white bg-opacity-10 dark:bg-gray-900 dark:bg-opacity-50 p-6 rounded-2xl shadow-xl backdrop-blur-xl border border-gradient-to-r from-blue-500 to-pink-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <category.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3
                      className={`tracking-widest text-lg font-semibold ${colors.subtext}`}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      // Extract gradient colors from the category.color string
                      // const gradientColors = category.color
                      //   .replace("from-", "")
                      //   .replace("to-", "")
                      //   .split(" ")
                      //   .map((color) => `#${color}`); // Convert Tailwind color names to hex if needed

                      return (
                        <span
                          key={skill}
                          className={`font-montserrat px-4 py-2 text-base font-medium text-transparent bg-clip-text rounded-lg border-2 bg-gradient-to-r ${category.color} ${category.borderStyle} rounded-3xl`}
                          style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            borderWidth: "2px",
                            display: "inline-block",
                          }}
                        >
                          {skill}
                        </span>
                      );
                    })}
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
