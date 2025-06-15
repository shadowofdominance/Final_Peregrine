import { useEffect, useRef } from "react";
import useCustomCursor from "@/hooks/useCustomCursor";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { position } = useCustomCursor();

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
    }
  }, [position]);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 pointer-events-none z-50 transition-all duration-200 ease-out opacity-0"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      <div className="w-full h-full bg-falcon-sky rounded-full opacity-80"></div>
    </div>
  );
}
