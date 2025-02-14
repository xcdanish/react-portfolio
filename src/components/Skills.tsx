import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Layout, Palette, Blocks, Workflow } from "lucide-react";

const shapes = ["circle", "square", "triangle", "star"];

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Layout,
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5"],
    color: "from-blue-500 to-cyan-500",
    borderStyle: "border-cyan-500", // Picked cyan as a good border contrast
  },
  {
    title: "Styling",
    icon: Palette,
    skills: [
      "CSS / CSS3",
      "Tailwind CSS",
      "Bootstrap / ReactStrap",
      "Material UI",
    ],
    color: "from-pink-500 to-rose-500",
    borderStyle: "border-rose-500", // Rose as dominant color
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js", "MongoDB"],
    color: "from-green-500 to-emerald-500",
    borderStyle: "border-emerald-500", // Emerald for better visibility
  },
  {
    title: "State Management",
    icon: Blocks,
    skills: ["Redux Core", "Redux Toolkit", "Hooks", "Context API"],
    color: "from-purple-500 to-indigo-500",
    borderStyle: "border-indigo-500", // Indigo keeps it balanced
  },
  {
    title: "Development",
    icon: Code2,
    skills: ["Git / GitHub", "Responsive Design", "RESTful APIs", "TypeScript"],
    color: "from-amber-500 to-orange-500",
    borderStyle: "border-orange-500", // Orange for clear visibility
  },
  {
    title: "Project Management",
    icon: Workflow,
    skills: ["Trello", "Jira", "Agile", "Scrum"],
    color: "from-teal-500 to-cyan-500",
    borderStyle: "border-cyan-500", // Cyan as final selection
  },
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="skills"
      className="relative py-20 overflow-hidden bg-white dark:bg-black dark:bg-opacity-80"
    >
      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                <div className="relative bg-white bg-opacity-10 dark:bg-gray-900 dark:bg-opacity-50 p-8 rounded-2xl shadow-xl backdrop-blur-xl border border-gradient-to-r from-blue-500 to-pink-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
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
                          className={`px-4 py-2 text-lg font-medium text-transparent bg-clip-text rounded-lg border-2 bg-gradient-to-r ${category.color} ${category.borderStyle}`}
                          style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            // borderImage: `linear-gradient(to right, ${gradientColors.join(
                            //   ", "
                            // )}) 1`,
                            // borderImage: category.borderStyle,
                            // borderColor: category.borderStyle,
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
