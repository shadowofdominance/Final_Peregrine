import { motion } from "framer-motion";
import CinematicTitle from "@/components/ui/CinematicTitle";
import { events } from "@/data/portfolio";

export default function WindCurrents() {
  return (
    <section
      id="currents"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="section-fade-top" />
      {/* Background image with solid overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/windcurrents.jpg"
          alt="Soaring falcon over clouds"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>
      <div className="section-fade-bottom" />

      {/* Animated Wind Trails */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="wind-trail top-1/4 animate-wind-move" />
        <div
          className="wind-trail top-1/2 animate-wind-move"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="wind-trail top-3/4 animate-wind-move"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20 relative z-10">
          <CinematicTitle title="WIND CURRENTS" subtitle="Expedition Logbook" />
        </div>

        <div className="space-y-10 sm:space-y-12">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              className="timeline-item pl-6 sm:pl-10 md:pl-12 cursor-feather group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <div className="glass-effect rounded-xl p-5 sm:p-6 transition-all duration-300 break-words overflow-hidden text-wrap">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 w-full">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full md:w-56 h-40 object-cover rounded-lg shadow-lg shadow-black/40"
                    loading="lazy"
                  />
                  <div className="flex-1 space-y-3">
                    <h3 className="font-orbitron font-bold text-xl text-foreground tracking-wide">
                      {event.title}
                    </h3>
                    <p className="text-ring text-sm font-semibold uppercase tracking-wider">
                      {event.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {event.stats.map((stat) => (
                        <span
                          key={stat}
                          className="px-3 py-1 bg-primary/15 text-ring text-[11px] rounded-full border border-primary/30 backdrop-blur-sm"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
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
