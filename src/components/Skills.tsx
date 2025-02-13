import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Globe, Layout, Server, Settings, Smartphone, PenTool as Tool, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'GraphQL', 'WebSockets'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Mongoose', 'Prisma', 'SQL'],
  },
  {
    title: 'DevOps',
    icon: Settings,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'],
  },
  {
    title: 'Tools',
    icon: Tool,
    skills: ['VS Code', 'Postman', 'Figma', 'Jest', 'npm', 'Webpack'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'Android', 'iOS', 'PWA', 'App Store'],
  },
  {
    title: 'Web',
    icon: Globe,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Performance', 'Analytics'],
  },
  {
    title: 'Other',
    icon: Terminal,
    skills: ['Python', 'Java', 'C++', 'Bash', 'Agile', 'Scrum'],
  },
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative  bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <category.icon className="w-8 h-8 text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="flex items-center gap-2 group"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          {skill}
                        </span>

                      </motion.div>
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