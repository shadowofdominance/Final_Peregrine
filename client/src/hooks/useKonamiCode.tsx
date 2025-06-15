import { useState, useEffect } from "react";

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

export default function useKonamiCode() {
  const [sequence, setSequence] = useState<string[]>([]);

  const triggerEasterEgg = () => {
    document.body.style.animation = 'dive 2s ease-out';
    setTimeout(() => {
      document.body.style.animation = '';
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSequence(prev => {
        const newSequence = [...prev, e.code];
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }
        
        if (newSequence.join(',') === KONAMI_CODE.join(',')) {
          triggerEasterEgg();
          return [];
        }
        
        return newSequence;
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { triggerEasterEgg };
}
