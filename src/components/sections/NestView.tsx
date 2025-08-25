import { motion } from "framer-motion";
import CinematicTitle from "@/components/ui/CinematicTitle";

export default function NestView() {
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
    <section id="nest" className="min-h-screen py-20 relative overflow-hidden">
      <div className="section-fade-top" />
      {/* Background image restored with solid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/nestview.jpg"
          alt="Abstract nest view backdrop"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/55" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <CinematicTitle title="NEST VIEW" subtitle="The Genesis of Flight" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start lg:items-center">
          {/* Personal Story */}
          <motion.div
            className="glass-effect rounded-xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron font-bold text-2xl text-foreground mb-6">
              The Journey of Resilience
            </h3>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
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
                  <div className="text-3xl text-ring mb-2">{quality.icon}</div>
                  <h4 className="font-orbitron font-semibold text-foreground">
                    {quality.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
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
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="/images/IMG-20240705-WA0013.jpg"
              alt="Team collaboration group"
              className="w-full rounded-xl shadow-2xl object-cover aspect-video"
              loading="lazy"
            />

            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/teamcollab.jpg"
                alt="Team collaboration"
                className="w-full rounded-lg object-cover aspect-video"
                loading="lazy"
              />
              <img
                src="/images/evogen1.jpg"
                alt="Event moment"
                className="w-full rounded-lg object-cover aspect-video"
                loading="lazy"
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
              <blockquote className="text-xl font-light text-foreground italic mb-4">
                "Don't you want to take a leap of faith? Or become an old man,
                filled with regret, waiting to die alone!"
              </blockquote>
              <cite className="text-muted-foreground text-sm">
                — Saito, Inception (2010)
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="section-fade-bottom" />
    </section>
  );
}
