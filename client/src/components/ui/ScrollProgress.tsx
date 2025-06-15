import { useEffect, useState } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div 
      className="scroll-indicator"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
