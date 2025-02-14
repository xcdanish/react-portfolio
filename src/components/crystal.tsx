import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Globe,
  Server,
  Database,
  Github as Git,
  Layout,
  Palette,
  Terminal,
  Blocks,
  Braces,
  Monitor,
  Workflow,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Core",
    icon: Layout,
    skills: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5"],
    color: "from-blue-500 to-cyan-500",
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
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Next.js", "MongoDB"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "State Management",
    icon: Blocks,
    skills: ["Redux Core", "Redux Toolkit", "Hooks", "Context API"],
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Development",
    icon: Code2,
    skills: ["Git / GitHub", "Responsive Design", "RESTful APIs", "TypeScript"],
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Project Management",
    icon: Workflow,
    skills: ["Trello", "Jira", "Agile", "Scrum"],
    color: "from-teal-500 to-cyan-500",
  },
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group perspective"
              >
                <motion.div
                  className="relative transform transition-transform duration-500 group-hover:rotate-y-180"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Front of the Card */}
                  <div className="relative rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 p-6 h-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative flex items-center gap-4 mb-6">
                      <div
                        className={`p-4 rounded-lg bg-gradient-to-r ${category.color}`}
                      >
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + skillIndex * 0.1,
                          }}
                          className="flex items-center gap-3 group cursor-pointer"
                        >
                          <motion.div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                          <div className="flex-1 relative overflow-hidden">
                            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded">
                              <motion.div
                                className={`h-full rounded bg-gradient-to-r ${category.color}`}
                                initial={{ width: "0%" }}
                                animate={inView ? { width: "100%" } : {}}
                                transition={{
                                  duration: 1,
                                  delay: index * 0.2 + skillIndex * 0.1,
                                }}
                              />
                            </div>
                            <span className="block mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative rounded-xl shadow-lg bg-gray-50 dark:bg-gray-800 p-6 h-full transition-transform duration-300 transform group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-4 rounded-lg bg-gradient-to-r ${category.color}`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${category.color} shadow-md`}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
