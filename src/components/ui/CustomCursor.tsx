import { useEffect, useRef, useState } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";

interface TrailDot {
  id: number;
  x: number;
  y: number;
  t: number; // timestamp
}

const TRAIL_LIFETIME = 650; // ms
const MAX_DOTS = 18;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { position } = useCustomCursor();
  const trailRef = useRef<TrailDot[]>([]);
  const lastEmitRef = useRef<number>(0);
  const [, setTick] = useState(0); // trigger re-render

  // Position core cursor
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
      const now = performance.now();
      // Throttle emission
      if (now - lastEmitRef.current > 20) {
        trailRef.current.push({
          id: now + Math.random(),
          x: position.x,
          y: position.y,
          t: now,
        });
        if (trailRef.current.length > MAX_DOTS) {
          trailRef.current.splice(0, trailRef.current.length - MAX_DOTS);
        }
        lastEmitRef.current = now;
      }
    }
  }, [position]);

  // Animation loop to cull & update trail
  useEffect(() => {
    let raf: number;
    const loop = () => {
      const now = performance.now();
      const changed = trailRef.current.filter(
        (d) => now - d.t < TRAIL_LIFETIME
      );
      if (changed.length !== trailRef.current.length) {
        trailRef.current = { current: changed } as any; // quick replace hack
      } else {
        trailRef.current = { current: changed } as any;
      }
      setTick(now); // re-render
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Respect reduced motion & mobile (skip tail for small screens)
  const isReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isSmallScreen =
    typeof window !== "undefined" && window.innerWidth < 640;
  const dots = !isReducedMotion && !isSmallScreen ? trailRef.current : [];

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor-core pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="cursor-core-glow" />
      </div>
      {dots.map((dot) => {
        const age = performance.now() - dot.t;
        const progress = age / TRAIL_LIFETIME; // 0..1
        const scale = 1 - progress * 0.6;
        const opacity = 0.4 * (1 - progress);
        const hueShift = progress * 40; // subtle hue drift
        return (
          <div
            key={dot.id}
            className="cursor-trail-dot"
            style={{
              left: dot.x,
              top: dot.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              filter: `hue-rotate(${hueShift}deg) blur(${1 + progress * 2}px)`,
            }}
          />
        );
      })}
    </>
  );
}
