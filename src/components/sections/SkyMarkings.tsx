import { motion } from "framer-motion";
import { useState } from "react";
import { achievements, skills } from "@/data/portfolio";

export default function SkyMarkings() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section id="markings" className="min-h-screen py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-falcon-night via-falcon-storm to-falcon-night"></div>
      
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
                onComplete: () => setIsAnimated(true)
              }
            }}
            viewport={{ once: true }}
          >
            <div className={`talon-scratch-container ${isAnimated ? 'talon-scratch-active' : ''}`}>
              <div className="talon-scratch-overlay"></div>
              <div className="talon-impact-flash"></div>
              <span className="talon-hidden relative z-1">SKY MARKINGS</span>
            </div>
            <motion.span 
              className="block text-2xl text-falcon-steel font-inter font-normal mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Achievements & Recognition
            </motion.span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-falcon-sky mx-auto"
            initial={{ scaleX: 0, originX: 0.5 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-badge text-center cursor-feather group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-falcon-blue to-falcon-sky rounded-full flex items-center justify-center text-4xl text-white shadow-2xl group-hover:shadow-falcon-sky/50 transition-all duration-300">
                  <i className={achievement.icon}></i>
                </div>
                <motion.div 
                  className="absolute -top-2 -right-2 text-falcon-sky opacity-60"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <i className="fas fa-feather text-sm"></i>
                </motion.div>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-falcon-cloud mb-2">
                {achievement.title}
              </h3>
              <p className="text-falcon-steel text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills Constellation */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-orbitron font-bold text-3xl text-center text-falcon-cloud mb-12">
            Technical Constellation
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-6 py-3 bg-falcon-storm border border-falcon-blue rounded-full text-falcon-sky font-semibold cursor-feather hover:bg-falcon-blue hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
