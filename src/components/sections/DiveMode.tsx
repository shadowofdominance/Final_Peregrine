import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/data/portfolio";

export default function DiveMode() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section id="dive" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-falcon-night to-falcon-storm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-falcon-cloud"
            initial={{ opacity: 1 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.1,
                onComplete: () => setIsAnimated(true),
              },
            }}
            viewport={{ once: true }}
          >
            <div
              className={`talon-scratch-container ${
                isAnimated ? "talon-scratch-active" : ""
              }`}
            >
              <div className="talon-scratch-overlay"></div>
              <div className="talon-impact-flash"></div>
              <span className="talon-hidden relative z-1">DIVE MODE</span>
            </div>
            <motion.span
              className="block text-2xl text-falcon-steel font-inter font-normal mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Project Arsenal
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-falcon-sky mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-effect rounded-xl p-6 cursor-feather group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <h3 className="font-orbitron font-bold text-xl text-falcon-cloud">
                  {project.title}
                </h3>
                <p className="text-falcon-steel text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-falcon-blue/20 text-falcon-sky text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3 pt-2">
                  <a
                    href={project.demoUrl}
                    className="flex items-center space-x-2 text-falcon-sky hover:text-falcon-cloud transition-colors cursor-feather"
                  >
                    <i className="fas fa-play"></i>
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex items-center space-x-2 text-falcon-sky hover:text-falcon-cloud transition-colors cursor-feather"
                  >
                    <i className="fab fa-github"></i>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 border-2 border-falcon-sky text-falcon-sky hover:bg-falcon-sky hover:text-falcon-night transition-all duration-300 rounded-full font-orbitron cursor-feather">
            VIEW ALL PROJECTS
            <i className="fas fa-crosshairs ml-2"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
