import { useEffect, useRef, useState } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";

interface TrailDot {
  id: number;
  x: number;
  y: number;
  created: number;
}
const TRAIL_LIFETIME = 400; // ms
const EMIT_INTERVAL = 28; // ms
const MAX_DOTS = 14;

export default function CustomCursor() {
  const { position } = useCustomCursor();
  const coreRef = useRef<HTMLDivElement>(null);
  const lastEmit = useRef<number>(0);
  const [dots, setDots] = useState<TrailDot[]>([]);

  useEffect(() => {
    if (!coreRef.current) return;
    coreRef.current.style.left = position.x + "px";
    coreRef.current.style.top = position.y + "px";
    const now = performance.now();
    if (now - lastEmit.current > EMIT_INTERVAL) {
      setDots((prev) => {
        const next: TrailDot[] = [
          ...prev,
          {
            id: now + Math.random(),
            x: position.x,
            y: position.y,
            created: now,
          },
        ];
        if (next.length > MAX_DOTS) next.splice(0, next.length - MAX_DOTS);
        return next;
      });
      lastEmit.current = now;
    }
  }, [position]);

  useEffect(() => {
    const id = setInterval(() => {
      const now = performance.now();
      setDots((prev) => prev.filter((d) => now - d.created < TRAIL_LIFETIME));
    }, 100);
    return () => clearInterval(id);
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  return (
    <>
      <div
        ref={coreRef}
        className="custom-cursor-core pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {!reduceMotion &&
        dots.map((d) => {
          const age = performance.now() - d.created;
          const p = age / TRAIL_LIFETIME;
          return (
            <div
              key={d.id}
              className="cursor-trail-dot"
              style={{
                left: d.x,
                top: d.y,
                transform: `translate(-50%, -50%) scale(${1 - p * 0.55})`,
                opacity: 0.45 * (1 - p),
                filter: `blur(${1 + p * 2}px)`,
              }}
            />
          );
        })}
    </>
  );
}
