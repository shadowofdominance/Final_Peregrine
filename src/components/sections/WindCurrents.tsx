import { motion } from "framer-motion";
import { useState } from "react";
import { events } from "@/data/portfolio";

export default function WindCurrents() {
  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <section
      id="currents"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="section-fade-top" />
      {/* Background Image (alternating section with image) */}
      <div
        className="absolute inset-0 opacity-40 sm:opacity-50 parallax-bg transition-opacity duration-700"
        style={{
          backgroundImage:
            "linear-gradient(rgba(40,42,54,0.35), rgba(40,42,54,0.75)), url('/images/windcurrents.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Soft translucent gradient overlay to keep text readable while showing image */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background/80" />
      <div className="section-fade-bottom" />

      {/* Animated Wind Trails */}
      <div className="absolute inset-0">
        <div className="wind-trail top-1/4 animate-wind-move"></div>
        <div
          className="wind-trail top-1/2 animate-wind-move"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="wind-trail top-3/4 animate-wind-move"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-orbitron font-bold text-5xl md:text-6xl mb-6 text-foreground"
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
              <span className="talon-hidden relative z-1">WIND CURRENTS</span>
            </div>
            <motion.span
              className="block text-2xl text-muted-foreground font-inter font-normal mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              viewport={{ once: true }}
            >
              Event Leadership Journey
            </motion.span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-ring mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="timeline-item pl-6 sm:pl-10 md:pl-12 cursor-feather group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="glass-effect rounded-xl p-5 sm:p-6 transition-all duration-300 break-words overflow-hidden text-wrap">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full md:w-auto max-w-full md:max-w-[300px] aspect-video object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="font-orbitron font-bold text-2xl text-foreground">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 bg-primary/20 text-ring text-sm rounded-full font-semibold">
                        {event.role}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 text-wrap">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.stats.map((stat) => (
                        <span
                          key={stat}
                          className="px-2 py-1 bg-muted text-ring text-xs rounded"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                    {/*<button className="text-falcon-sky hover:text-falcon-cloud transition-colors cursor-feather">
                      <i className="fas fa-external-link-alt mr-2"></i>
                      View Media
                    </button>*/}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
