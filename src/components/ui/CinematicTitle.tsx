import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface CinematicTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  align?: "center" | "left";
}

/**
 * CinematicTitle
 * A reusable, mobile-safe, performant title animation:
 *  - Staggers characters upward with slight blur -> crisp
 *  - Draws a subtle cyan/purple glow line beneath (Dracula colors)
 *  - Reduces to simple fade when prefers-reduced-motion is enabled
 */
export const CinematicTitle: React.FC<CinematicTitleProps> = ({
  title,
  subtitle,
  className = "",
  as: Tag = "h2",
  align = "center",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const letters = React.useMemo(
    () => title.split("").map((ch, i) => ({ ch, i })),
    [title]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.045,
      },
    },
  };

  const letterVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 22, filter: "blur(8px)", rotateX: 25 },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          rotateX: 0,
          transition: { type: "spring", stiffness: 320, damping: 30 },
        },
      };

  return (
    <div
      className={`cinematic-title ${
        align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="inline-block relative"
      >
        <Tag className="font-orbitron font-black tracking-tight text-4xl sm:text-5xl md:text-6xl text-foreground leading-[1.05]">
          {letters.map(({ ch, i }) => (
            <motion.span
              key={i + ch}
              variants={letterVariants}
              style={{
                display: "inline-block",
                willChange: "transform, filter, opacity",
              }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </Tag>
        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.9,
            delay: shouldReduceMotion ? 0.05 : letters.length * 0.045 * 0.6,
            ease: "easeOut",
          }}
          className="h-1 rounded-full bg-ring/80 shadow-[0_0_12px_rgba(139,233,253,0.6),0_0_24px_rgba(189,147,249,0.35)] origin-left mt-6 mb-4"
        />
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg sm:text-xl md:text-2xl font-inter font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default CinematicTitle;
