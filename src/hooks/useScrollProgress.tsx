import { useState, useEffect } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / documentHeight;
      setProgress(Math.min(scrollProgress, 1));
    };

    const handleScroll = () => {
      updateScrollProgress();
    };

    window.addEventListener('scroll', handleScroll);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
