import { motion } from "framer-motion";

export default function LaunchPoint() {
  const scrollToDive = () => {
    const element = document.querySelector("#dive");
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const contactLinks = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      href: "mailto:gouravsapaliga125@gmail.com",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/gourav-sapaliga-658032262",
    },
    {
      icon: "fab fa-github",
      label: "GitHub",
      href: "https://github.com/shadowofdominance",
    },
    {
      icon: "fab fa-twitter",
      label: "Twitter",
      href: "https://twitter.com/not_gourav007",
    },
    {
      icon: "fas fa-download",
      label: "Download Resume",
      href: "/docs/GouravSapaligaResumeUpdated.pdf",
    },
  ];

  return (
    <section
      id="launch"
      className="min-h-screen relative flex items-center justify-center parallax-bg"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('/images/wallhaven-0p2q2m.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-falcon-night/50 to-falcon-night" />

      {/* Falling Feathers Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {[
          {
            pos: "left-10",
            delay: 0,
            dur: 8,
            cls: "opacity-60 text-lg",
            x: [0, 30, -20, 10],
            rot: [0, 180, 360, 540],
          },
          {
            pos: "right-20",
            delay: 3,
            dur: 10,
            cls: "opacity-40 text-sm",
            x: [0, -25, 15, -10],
            rot: [0, 270, 450, 630],
          },
          {
            pos: "left-1/3",
            delay: 6,
            dur: 12,
            cls: "opacity-50 text-base",
            x: [0, 20, -30, 5],
            rot: [0, 360, 720],
          },
          {
            pos: "right-1/3",
            delay: 1,
            dur: 9,
            cls: "opacity-30 text-sm",
            x: [0, -15, 25, -5],
            rot: [0, 180, 360],
          },
          {
            pos: "left-1/4",
            delay: 4,
            dur: 11,
            cls: "opacity-35 text-base",
            x: [0, 15, -10, 20],
            rot: [0, 270, 540],
          },
          {
            pos: "right-1/4",
            delay: 2,
            dur: 7,
            cls: "opacity-45 text-sm",
            x: [0, -20, 12, -8],
            rot: [0, 360, 720],
          },
          {
            pos: "left-3/4",
            delay: 5,
            dur: 13,
            cls: "opacity-25 text-lg",
            x: [0, 25, -18, 6],
            rot: [0, 180, 360, 540],
          },
          {
            pos: "left-1/2",
            delay: 7,
            dur: 9,
            cls: "opacity-55 text-base",
            x: [0, -12, 22, -8],
            rot: [0, 450, 900],
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            className={`absolute top-0 ${f.pos}`}
            animate={{
              y: [
                0,
                typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
              ],
              x: f.x,
              rotate: f.rot,
            }}
            transition={{
              duration: f.dur,
              repeat: Infinity,
              ease: "easeIn",
              delay: f.delay,
              repeatDelay: 1,
            }}
          >
            <i className={`fas fa-feather text-falcon-sky ${f.cls}`} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 md:pt-24 lg:pt-16">
        <img
          src="/images/profilepic.jpg"
          alt="Portrait of Gourav Sapaliga"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full object-cover border-4 border-falcon-sky shadow-lg"
          loading="lazy"
        />
        <motion.h1
          className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] break-words tracking-tight mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="block text-falcon-cloud">GOURAV</span>
          <span className="block bg-gradient-to-r from-falcon-blue to-falcon-sky bg-clip-text text-transparent">
            SAPALIGA
          </span>
        </motion.h1>

        <div className="mt-10 sm:mt-12 pt-8 border-t border-falcon-steel/20">
          <h3 className="font-orbitron font-bold text-lg sm:text-xl text-falcon-cloud text-center mb-6 sm:mb-8">
            Alternative Flight Paths
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-falcon-storm/80 hover:bg-falcon-blue/90 rounded-lg transition-all duration-300 cursor-feather group backdrop-blur-sm text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i
                  className={`${link.icon} text-falcon-sky group-hover:text-white`}
                />
                <span className="text-falcon-cloud group-hover:text-white whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.button
          onClick={scrollToDive}
          className="mt-10 group relative px-10 sm:px-12 py-4 bg-falcon-blue hover:bg-falcon-sky transition-all duration-300 rounded-full font-orbitron font-bold text-base sm:text-lg cursor-feather transform hover:scale-105 animate-pulse-glow"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">BEGIN DESCENT</span>
          <div className="absolute inset-0 bg-gradient-to-r from-falcon-blue to-falcon-sky rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <i className="fas fa-chevron-down ml-3 group-hover:animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
