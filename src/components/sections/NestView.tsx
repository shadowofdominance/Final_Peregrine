import { motion } from "framer-motion";
import { useState } from "react";

export default function NestView() {
  const [isAnimated, setIsAnimated] = useState(false);
  const personalQualities = [
    {
      icon: "⚡",
      title: "Speed",
      description: "Rapid prototyping and agile development",
    },
    {
      icon: "🎯",
      title: "Precision",
      description: "Attention to detail and quality",
    },
    {
      icon: "👁️",
      title: "Vision",
      description: "Forward-thinking and innovation",
    },
    {
      icon: "🤝",
      title: "Leadership",
      description: "Team building and mentorship",
    },
  ];

  return (
    <section id="nest" className="min-h-screen py-20 relative">
      <div
        className="absolute inset-0 parallax-bg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/images/nestview.jpg')",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
              <span className="talon-hidden relative z-1">NEST VIEW</span>
            </div>
            <motion.span
              className="block text-2xl text-falcon-steel font-inter font-normal mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              The Genesis of Flight
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-falcon-sky mx-auto"
            initial={{ scaleX: 0, rotateZ: 45 }}
            whileInView={{ scaleX: 1, rotateZ: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            className="glass-effect rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-2xl text-falcon-cloud mb-6">
              The Journey of Resilience
            </h3>
            <div className="space-y-4 text-falcon-steel">
              <p>
                Like the peregrine falcon, my journey began with a leap of
                faith. From the heights of uncertainty to the precision of
                purpose, every challenge became a stepping stone to greater
                altitudes.
              </p>

              <p>
                What started as curiosity about game development evolved into a
                passion for creating experiences that challenge, inspire, and
                connect people. The falcon's hunting precision mirrors my
                approach to problem-solving—focused, deliberate, and relentless.
              </p>

              <p>
                I believe in the power of technology to tell stories, build
                communities, and push the boundaries of what's possible. Each
                project is a new flight path, each challenge a chance to soar
                higher.
              </p>
            </div>

            {/* Personal Qualities */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {personalQualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl text-falcon-sky mb-2">
                    {quality.icon}
                  </div>
                  <h4 className="font-orbitron font-semibold text-falcon-cloud">
                    {quality.title}
                  </h4>
                  <p className="text-sm text-falcon-steel">
                    {quality.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Gallery */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="images\IMG-20240705-WA0013.jpg"
              alt="Team Collaboration"
              className="w-full h-70 object-center rounded-xl shadow-2xl"
            />

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/teamcollab.jpg"
                alt="Team collaboration"
                className="w-full h-35 object-center rounded-lg"
              />
              <img
                src="/images/evogen1.jpg"
                alt="Team Collaboration"
                className="w-full h-35 object-center rounded-lg"
              />
            </div>

            {/* Inspirational Quote */}
            <motion.div
              className="glass-effect rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-xl font-light text-falcon-cloud italic mb-4">
                "Don't you want to take a leap of faith? Or become an old man,
                filled with regret, waiting to die alone!"
              </blockquote>
              <cite className="text-falcon-steel text-sm">
                — Saito, Inception (2010)
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
