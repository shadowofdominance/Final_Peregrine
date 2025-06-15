import { motion } from "framer-motion";

export default function LaunchPoint() {
  const scrollToDive = () => {
    const element = document.querySelector("#dive");
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="launch"
      className="min-h-screen relative flex items-center justify-center parallax-bg"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/images/wallhaven-0p2q2m.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-falcon-night/50 to-falcon-night"></div>

      {/* Falling Feathers Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-10"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, 30, -20, 10],
            rotate: [0, 180, 360, 540],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeIn",
            repeatDelay: 2,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-60 text-lg"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 right-20"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, -25, 15, -10],
            rotate: [0, 270, 450, 630],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeIn",
            delay: 3,
            repeatDelay: 1,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-40 text-sm"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 left-1/3"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, 20, -30, 5],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeIn",
            delay: 6,
            repeatDelay: 0.5,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-50 text-base"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 right-1/3"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, -15, 25, -5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeIn",
            delay: 1,
            repeatDelay: 3,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-30 text-sm"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 left-1/4"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, 15, -10, 20],
            rotate: [0, 270, 540],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeIn",
            delay: 4,
            repeatDelay: 1.5,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-35 text-base"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 right-1/4"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, -20, 12, -8],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeIn",
            delay: 2,
            repeatDelay: 2.5,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-45 text-sm"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 left-3/4"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, 25, -18, 6],
            rotate: [0, 180, 360, 540],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeIn",
            delay: 5,
            repeatDelay: 1,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-25 text-lg"></i>
        </motion.div>
        <motion.div
          className="absolute top-0 left-1/2"
          animate={{
            y: [0, window.innerHeight + 100],
            x: [0, -12, 22, -8],
            rotate: [0, 450, 900],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeIn",
            delay: 7,
            repeatDelay: 2,
          }}
        >
          <i className="fas fa-feather text-falcon-sky opacity-55 text-base"></i>
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Falcon Silhouette */}
        <img
          src="/images/profilepic.jpg"
          alt="Peregrine falcon silhouette"
          className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full object-center border-4 border-falcon-sky"
        />
        <br />
        <motion.h1
          className="font-orbitron font-black text-6xl md:text-8xl mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="block text-6xl text-falcon-cloud">HEIR TO THE</span>
          <span className="block text-falcon-sky bg-gradient-to-r from-falcon-blue to-falcon-sky bg-clip-text text-transparent">
            SKY'S EDGE
          </span>
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-4 font-light text-falcon-steel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Born to fall.
        </motion.p>
        <motion.p
          className="text-2xl md:text-3xl mb-12 font-light text-falcon-steel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Built to fly.
        </motion.p>

        <motion.button
          onClick={scrollToDive}
          className="group relative px-12 py-4 bg-falcon-blue hover:bg-falcon-sky transition-all duration-300 rounded-full font-orbitron font-bold text-lg cursor-feather transform hover:scale-105 animate-pulse-glow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">BEGIN DESCENT</span>
          <div className="absolute inset-0 bg-gradient-to-r from-falcon-blue to-falcon-sky rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <i className="fas fa-chevron-down ml-3 group-hover:animate-bounce"></i>
        </motion.button>

        {/* Scroll Indicator
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-falcon-sky text-2xl"></i>
        </motion.div>*/}
      </div>
    </section>
  );
}
