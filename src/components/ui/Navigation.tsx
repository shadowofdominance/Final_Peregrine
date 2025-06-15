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
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/images/eagle.png"
              alt="Peregrine Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-orbitron font-bold text-xl">
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
            <button
              onClick={() => scrollTo("#signal")}
              className="cursor-feather hover:text-falcon-sky transition-colors"
            >
              Signal
            </button>
          </div>

          <button
            className="md:hidden text-2xl cursor-feather"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
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
            <button
              onClick={() => scrollTo("#signal")}
              className="block w-full text-left cursor-feather hover:text-falcon-sky transition-colors"
            >
              Signal
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
