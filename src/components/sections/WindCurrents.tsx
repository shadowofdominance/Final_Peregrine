import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionTitle from "@/components/ui/SectionTitle";
import { events } from "@/data/portfolio";

export default function WindCurrents() {
  const [isAnimated, setIsAnimated] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section
      id="currents"
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="section-fade-top" />
      {/* Background image restored with solid overlay */}
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
        <SectionTitle
          title="WIND CURRENTS"
          subtitle="Event Leadership Journey"
        />

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
