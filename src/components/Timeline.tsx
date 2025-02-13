import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap } from "lucide-react";

const timelineItems = [
  {
    type: "work",
    icon: Briefcase,
    date: "May 2023 – Jul 2024",
    title: "MERN Stack Developer",
    company: "WebMobril Technologies Pvt. Ltd, Indore, India",
    description: `
      Developed and maintained enterprise-level web applications using the MERN stack. Led feature development, optimized application performance, and collaborated with cross-functional teams to deliver scalable solutions.
      • Maintain and enhance React systems, resolving bugs to optimize performance and user experience.
      • Designed and developed custom React components to meet project requirements.
      • Set up and configure servers for React and Node.js deployments.
      • Update and manage project dependencies, ensuring smooth integration.
      • Collaborate with developers to create robust front-end and back-end architectures using React.js, Next.js, Node.js, and MongoDB.
    `,
  },
  {
    type: "work",
    icon: Briefcase,
    date: "Dec 2021 – Mar 2023",
    title: "Jr. MERN Stack Developer",
    company: "SaturnCube Technologies, Ahmedabad, India",
    description: `
      SaturnCube Technologies is a leading IT company catering to Web and Mobile App Development Companies.
      • Responsible for designing and developing scalable software by writing clean, functional code on the back-end and front-end.
      • Testing, fixing, and refactoring code as per requirement by using my knowledge and experience in React.js, Express.js, Node.js, and MongoDB.
      • Completing Code with Clarity. Robust code, Debugging.
      • Worked on the full-stack development of web applications. Built interactive UI components, integrated APIs, and optimized backend performance to enhance user experience and system efficiency.
    `,
  },
  {
    type: "work",
    icon: Briefcase,
    date: "May 2021 – Nov 2021",
    title: "Jr. MERN Stack Developer",
    company: "TWS Technology, Kota, India",
    description:
      "Contributed to the development and deployment of MERN-based applications. Focused on building reusable components, database optimization, and implementing RESTful API integrations.",
  },
  {
    type: "education",
    icon: GraduationCap,
    date: "Oct 2020 – May 2022",
    title: "Master of Computer Applications (MCA)",
    company:
      "Pacific Academy of Higher Education and Research, Udaipur, Rajasthan",
    description:
      "Gained a comprehensive understanding of software development principles, data structures, and algorithms. Studied advanced web development, system design, and software architecture, preparing for enterprise-level application development.",
  },
  {
    type: "education",
    icon: GraduationCap,
    date: "Jul 2017 – Sep 2020",
    title: "Bachelor of Computer Applications (BCA)",
    company:
      "Pacific Academy of Higher Education and Research, Udaipur, Rajasthan",
    description:
      "Built a strong foundation in computer science, programming languages, and database management. Explored software engineering concepts, object-oriented programming, and web development frameworks.",
  },
];

export const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="relative">
            {/* Timeline line with gradient animation */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 animate-gradient-slow" />

            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot with pulse animation */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.5)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient border animation */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-300" />
                    <div className="relative bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                      <div className="flex items-center mb-2">
                        <item.icon className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                        <span className="ml-2 text-sm text-blue-400 group-hover:text-purple-400 transition-colors duration-300 font-semibold">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300  mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 ">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
