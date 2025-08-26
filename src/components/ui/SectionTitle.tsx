import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string; // extra classes for outer wrapper spacing
}

// Cinematic, device-friendly title animation:
// - Container fades & lifts
// - Each letter (except spaces) gently rises with blur -> sharp
// - Underline bar expands
// Reduced motion: single fade (no stagger or blur)
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className = "mb-16",
}) => {
  const isMobile = useIsMobile();
  const prefersReduce =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  const letters = React.useMemo(
    () => title.split("").map((ch, i) => ({ ch, key: i })),
    [title]
  );

  const letterVariant = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.55,
        ease: "easeOut",
        delay: prefersReduce ? 0 : i * 0.045,
      },
    }),
  } as const;

  return (
    <div className={`text-center ${className}`}>
      <motion.div
        initial={prefersReduce ? { opacity: 0 } : { opacity: 0, y: 35 }}
        whileInView={prefersReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="inline-block"
      >
        <h2 className="font-orbitron font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground">
          <span className="inline-flex">
            {letters.map(({ ch, key }, i) =>
              ch === " " ? (
                <span key={key} className="w-2 sm:w-3" />
              ) : (
                <motion.span
                  key={key}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.8 }}
                  variants={prefersReduce ? undefined : letterVariant}
                  className="inline-block will-change-transform"
                  style={
                    prefersReduce ? undefined : { backfaceVisibility: "hidden" }
                  }
                >
                  {ch}
                </motion.span>
              )
            )}
          </span>
        </h2>
        {subtitle && (
          <motion.p
            className="mt-3 text-muted-foreground text-lg sm:text-2xl font-inter font-normal"
            initial={
              prefersReduce
                ? { opacity: 0 }
                : { opacity: 0, y: 16, filter: "blur(4px)" }
            }
            whileInView={
              prefersReduce
                ? { opacity: 1 }
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: prefersReduce
                ? 0.1
                : Math.min(letters.length * 0.045 + 0.1, 1.2),
            }}
            viewport={{ once: true, amount: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className="h-1 bg-ring/90 mx-auto mt-6 rounded-full"
          style={{ width: 0 }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: isMobile ? 80 : 96, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: prefersReduce
              ? 0.2
              : Math.min(letters.length * 0.045 + 0.25, 1.35),
          }}
          viewport={{ once: true, amount: 0.6 }}
        />
      </motion.div>
    </div>
  );
};

export default SectionTitle;
