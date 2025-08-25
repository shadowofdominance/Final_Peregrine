import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect supports-[backdrop-filter]:backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <img
              src="/images/eagle.png"
              alt="Peregrine Logo"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0"
              loading="lazy"
            />
            <span className="font-orbitron font-bold text-sm xs:text-base sm:text-lg md:text-xl truncate">
              PROJECT PEREGRINE
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollTo("#launch")}
              className="cursor-feather hover:text-falcon-sky transition-colors"
            >
              Launch Point
            </button>
            <button
              onClick={() => scrollTo("#dive")}
              className="cursor-feather hover:text-falcon-sky transition-colors"
            >
              Dive Mode
            </button>
            <button
              onClick={() => scrollTo("#currents")}
              className="cursor-feather hover:text-falcon-sky transition-colors"
            >
              Wind Currents
            </button>
            <button
              onClick={() => scrollTo("#markings")}
              className="cursor-feather hover:text-falcon-sky transition-colors"
            >
              Sky Markings
            </button>
            <button
              onClick={() => scrollTo("#nest")}
              className="cursor-feather hover:text-falcon-sky transition-colors"
            >
              Nest View
            </button>
          </div>

          <button
            className="md:hidden text-xl sm:text-2xl cursor-feather p-2 rounded-md hover:bg-falcon-storm/50 transition"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-3 text-sm sm:text-base animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => scrollTo("#launch")}
              className="block w-full text-left cursor-feather hover:text-falcon-sky transition-colors"
            >
              Launch Point
            </button>
            <button
              onClick={() => scrollTo("#dive")}
              className="block w-full text-left cursor-feather hover:text-falcon-sky transition-colors"
            >
              Dive Mode
            </button>
            <button
              onClick={() => scrollTo("#currents")}
              className="block w-full text-left cursor-feather hover:text-falcon-sky transition-colors"
            >
              Wind Currents
            </button>
            <button
              onClick={() => scrollTo("#markings")}
              className="block w-full text-left cursor-feather hover:text-falcon-sky transition-colors"
            >
              Sky Markings
            </button>
            <button
              onClick={() => scrollTo("#nest")}
              className="block w-full text-left cursor-feather hover:text-falcon-sky transition-colors"
            >
              Nest View
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
