import { useEffect, useState, useRef } from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navigation from "@/components/ui/Navigation";
import LaunchPoint from "@/components/sections/LaunchPoint";
import DiveMode from "@/components/sections/DiveMode";
import WindCurrents from "@/components/sections/WindCurrents";
import SkyMarkings from "@/components/sections/SkyMarkings";
import NestView from "@/components/sections/NestView";
import useKonamiCode from "@/hooks/useKonamiCode";

export default function Home() {
  const { triggerEasterEgg } = useKonamiCode();
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleFalconCry = (e: KeyboardEvent) => {
      if (e.code === "KeyF") {
        document.body.style.filter = "brightness(1.2)";
        setTimeout(() => {
          document.body.style.filter = "";
        }, 200);
      }
    };

    document.addEventListener("keydown", handleFalconCry);
    return () => document.removeEventListener("keydown", handleFalconCry);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (!isMuted) {
        audioRef.current.play().catch((err) => {
          console.warn("Audio play failed:", err);
        });
      }
    }
  }, [isMuted]);

  return (
    <div className="relative">
      {/* Ambient Audio */}
      <audio ref={audioRef} src="/sounds/background2.mp3" loop preload="auto" />

      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <LaunchPoint />
        <DiveMode />
        <WindCurrents />
        <SkyMarkings />
        <NestView />
      </main>

      {/* Footer */}
      <footer className="bg-falcon-night border-t border-falcon-steel/20 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img
              src="/images/eagle.png"
              alt="Peregrine Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-orbitron font-bold text-2xl text-falcon-cloud">
              PROJECT PEREGRINE
            </span>
          </div>
          <p className="text-falcon-steel mb-4 text-sm sm:text-base">
            Born to fall. Built to fly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-6 text-falcon-steel space-y-2 sm:space-y-0 text-xs sm:text-sm">
            <span>© 2025 Project Peregrine</span>
            <span className="hidden sm:inline">•</span>
            <span>Crafted with precision</span>
            <span className="hidden sm:inline">•</span>
            <span>Powered by passion</span>
          </div>
          <p className="text-falcon-steel text-xs sm:text-sm mt-5 leading-relaxed">
            Music: "Titan" by Scott Buckley – released under CC-BY 4.0.
            <br />
            <a
              href="https://www.scottbuckley.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-falcon-gold transition-colors"
            >
              www.scottbuckley.com.au
            </a>
          </p>
        </div>
      </footer>

      {/* Audio Controls */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="w-12 h-12 bg-falcon-storm hover:bg-falcon-blue rounded-full flex items-center justify-center text-falcon-sky hover:text-white transition-all duration-300 cursor-feather shadow-lg"
          onClick={() => setIsMuted((prev) => !prev)}
        >
          <i
            className={`fas ${isMuted ? "fa-volume-mute" : "fa-volume-up"}`}
          ></i>
        </button>
      </div>
    </div>
  );
}
