import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getThemeColors } from "../Theme/ThemeBox";

interface AboutProps {
  themeColor: string;
}

export const About: React.FC<AboutProps> = ({ themeColor }) => {
  const colors = getThemeColors(themeColor);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="about"
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
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  // src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800"
                  src="/user.png"
                  alt="Developer"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="tracking-widest text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-300">
                Passionate MERN Stack Developer
              </h3>
              <p className="text-justify text-gray-600 dark:text-gray-300 mb-6">
                Highly skilled <strong>MERN Stack Developer</strong> with{" "}
                <strong>3+ years</strong> of experience in building{" "}
                <strong>scalable web applications</strong>, dynamic UIs, and
                robust APIs using modern JavaScript frameworks. Proficient in{" "}
                <strong>
                  React.js, Next.js, Node.js, Express.js, MongoDB, and Redux
                </strong>
                , with expertise in <strong>React Hooks, Context API,</strong>{" "}
                and <strong>component-driven architecture</strong>.
              </p>
              <p className="text-justify text-gray-600 dark:text-gray-300 mb-6">
                Strong frontend development skills with{" "}
                <strong>
                  HTML, CSS, JavaScript, TypeScript, Bootstrap, Tailwind,
                  Material UI,
                </strong>{" "}
                and <strong>SCSS</strong>, ensuring responsive and user-friendly
                designs. Experienced in backend development,{" "}
                <strong>
                  API integration, authentication (JWT, Firebase),
                </strong>
                and database management.
              </p>
              <p className="text-justify text-gray-600 dark:text-gray-300 mb-6">
                Skilled in <strong>cloud services (AWS, Firebase)</strong> and
                DevOps tools, with hands-on experience in{" "}
                <strong>Git, JIRA,</strong> and <strong>Trello</strong> for
                agile development. Adept at delivering{" "}
                <strong>end-to-end solutions</strong> across domains like{" "}
                <strong>e-commerce, CRM,</strong> and{" "}
                <strong>large-scale platforms</strong>, ensuring high
                performance and seamless user experience.
              </p>
              <p className="text-justify text-gray-600 dark:text-gray-300 mb-8">
                I'm constantly learning and adapting to new technologies,
                ensuring that I stay at the forefront of{" "}
                <strong>web development trends </strong>
                and best practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
