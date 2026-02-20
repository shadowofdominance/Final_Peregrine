import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/portfolio";

export default function DiveMode() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <section id="dive" className="min-h-screen py-20 relative bg-background">
      <div className="section-fade-top" />
      <div className="section-fade-bottom" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionTitle title="DIVE MODE" subtitle="Project Arsenal" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {(showAllProjects ? projects : projects.slice(0, 3)).map(
            (project, index) => (
              <TiltProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            )
          )}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {projects.length > 3 && (
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 border-2 border-ring text-ring hover:bg-ring hover:text-background transition-all duration-300 rounded-full font-orbitron cursor-feather"
            >
              {showAllProjects ? "SHOW LESS" : "VIEW ALL PROJECTS"}
              <i className="fas fa-crosshairs ml-2"></i>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}

// --- 3D Tilt Card Component ---
interface Project {
  id: string | number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeUrl: string;
  playUrl?: string; // optional Unity / play link for game projects
}

function TiltProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 22; // horizontal tilt
    const rotateX = -(y / rect.height - 0.5) * 18; // vertical tilt
    setTilt({ x: rotateX, y: rotateY });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setIsHover(false);
  };

  return (
    <motion.div
      className="tilt-scene"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={resetTilt}
        style={{
          transform: `perspective(1100px) rotateX(${tilt.x.toFixed(
            2
          )}deg) rotateY(${tilt.y.toFixed(2)}deg) translateZ(${
            isHover ? "8px" : "0"
          })`,
        }}
        className="project-card tilt-card glass-effect rounded-xl p-6 cursor-feather group relative"
        animate={{
          scale: isHover ? 1.03 : 1,
          boxShadow: isHover
            ? "0 18px 40px -10px rgba(189,147,249,0.35)"
            : "0 4px 18px -4px rgba(0,0,0,0.55)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen bg-[radial-gradient(circle_at_30%_30%,rgba(189,147,249,0.35),transparent_60%)]" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg shadow-black/40"
          loading="lazy"
        />
        <div className="space-y-3 relative z-10">
          <h3 className="font-orbitron font-bold text-xl text-foreground tracking-wide">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary/15 text-ring text-[11px] rounded-full backdrop-blur-sm border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4 pt-2">
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-ring hover:text-foreground transition-colors"
            >
              <i className="fab fa-github"></i>
              <span>Code</span>
            </a>

            {project.playUrl && (
              <a
                href={project.playUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-ring hover:text-foreground transition-colors"
              >
                <img
                  src="/images/unitylogo.ico"
                  alt="Unity"
                  className="w-5 h-5 object-contain"
                />
                <span>Play</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
