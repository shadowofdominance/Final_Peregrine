import { motion } from "framer-motion";
import CinematicTitle from "@/components/ui/CinematicTitle";
import { useIsMobile } from "@/hooks/use-mobile";
import { achievements, skills } from "@/data/portfolio";

export default function SkyMarkings() {
  const isMobile = useIsMobile();

  return (
    <section
      id="markings"
      className="min-h-screen py-20 relative bg-background"
    >
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <CinematicTitle
            title="SKY MARKINGS"
            subtitle="Achievements & Recognition"
          />
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="achievement-badge text-center cursor-feather group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center text-4xl text-white shadow-2xl group-hover:shadow-ring/50 transition-all duration-300">
                  <i className={achievement.icon}></i>
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 text-ring opacity-60"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <i className="fas fa-feather text-sm"></i>
                </motion.div>
              </div>
              <h3 className="font-orbitron font-bold text-lg text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm break-words">
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
          <h3 className="font-orbitron font-bold text-3xl text-center text-foreground mb-12">
            Technical Constellation
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 sm:px-4 py-2 bg-muted border border-primary rounded-full text-ring font-semibold cursor-feather hover:bg-primary hover:text-background transition-all duration-300 text-xs md:text-sm whitespace-normal break-words"
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
