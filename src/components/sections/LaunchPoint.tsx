import React, { useEffect, useState } from "react";
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
      icon: "fas fa-download",
      label: "Resume",
      href: "/docs/GouravJrGameDev.pdf",
    },
  ];

  const initialLatestUpdates = [
    {
      id: 1,
      type: "Unity Play",
      title: "Just deployed my first game on Unity play!",
      thumb: "/images/unitylogo.png",
      href: "https://play.unity.com/en/games/c0d7356e-3b5b-4032-97c1-559ad334db5a/chaos-drop",
    },
    {
      id: 2,
      type: "github",
      title: "Created an Index for my Unity Prototypes",
      thumb: "/images/githublogo.png",
      href: "https://github.com/shadowofdominance/Unity_Learning_Prototypes.git",
    },
    {
      id: 3,
      type: "github",
      title: "Learning the new Input System Package in Unity",
      thumb: "/images/githublogo.png",
      href: "https://github.com/shadowofdominance/Input_System_Learning.git",
    },
    {
      id: 4,
      type: "github",
      title: "My First Project during College!",
      thumb: "/images/githublogo.png",
      href: "https://github.com/shadowofdominance/Swift_Edit_final.git",
    },
    {
      id: 5,
      type: "github",
      title: "Learning about character controllers and player movement in Unity",
      thumb: "/images/githublogo.png",
      href: "https://github.com/shadowofdominance/Character_Controller_Learning.git",
    },
  ];

  const [updates, setUpdates] = useState(initialLatestUpdates.slice(0, 5));

  // expose a helper to add updates dynamically (useful for testing or hooking an API)
  useEffect(() => {
    const addLatestUpdate = (item: any) => {
      const entry = {
        id: item.id ?? Date.now(),
        type: item.type ?? "misc",
        title: item.title ?? "Untitled",
        thumb: item.thumb ?? "/images/Webp/profilepic.webp",
        href: item.href ?? "#",
      };

      setUpdates((prev) => {
        // remove any existing entry with same id, then prepend
        const filtered = prev.filter((u) => u.id !== entry.id);
        const next = [entry, ...filtered];
        // keep only the latest 5 items
        return next.slice(0, 5);
      });
    };

    // attach to window for quick runtime additions from console
    // e.g. window.addLatestUpdate({ title: 'New video', href: 'https://...', type: 'youtube' })
    (window as any).addLatestUpdate = addLatestUpdate;

    return () => {
      try {
        delete (window as any).addLatestUpdate;
      } catch (e) {}
    };
  }, []);

  return (
    <section
      id="launch"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (solid overlay, no gradients) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/images/wallhaven-0p2q2m.jpg"
          alt="Peregrine silhouette sky"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/55" />
      </div>
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
            <i className={`fas fa-feather text-ring ${f.cls}`} />
          </motion.div>
        ))}
      </div>
      {/* Bottom fade to blend into next section */}
      <div className="section-fade-bottom" />

      <div className="relative z-10 w-full px-4 sm:px-6 pt-28 sm:pt-32 md:pt-24 lg:pt-16">
        <div className="flex flex-col md:flex-row items-start gap-10 max-w-6xl md:ml-6 lg:ml-8">
          {/* Left column: profile/details (left-aligned) */}
          <div className="flex-1 text-left md:pl-6 lg:pl-10">
            <img
              src="/images/Webp/profilepic.webp"
              alt="Portrait of Gourav Sapaliga"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-ring shadow-lg"
              loading="lazy"
            />

            <motion.h1
              className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] break-words tracking-tight mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="block text-foreground">GOURAV</span>
              <span className="block text-primary">SAPALIGA</span>
            </motion.h1>

            <div className="mt-6 pt-4 border-t border-muted-foreground/20">
              <h3 className="font-orbitron font-bold text-lg sm:text-xl text-foreground mb-4">
                Alternative Flight Paths
              </h3>
              <div className="flex flex-wrap justify-start gap-3 sm:gap-4 md:gap-6">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="flex items-center space-x-2 sm:space-x-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-muted/70 hover:bg-primary/70 rounded-lg transition-all duration-300 cursor-feather group backdrop-blur-sm text-sm sm:text-base"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i
                      className={`${link.icon} text-ring group-hover:text-white`}
                    />
                    <span className="text-foreground group-hover:text-white whitespace-nowrap">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.button
              onClick={scrollToDive}
              className="mt-8 group relative px-10 sm:px-12 py-4 rounded-full font-orbitron font-bold text-base sm:text-lg cursor-feather bg-primary hover:bg-primary/90 transition-colors duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/40 shadow-lg shadow-primary/30 hover:shadow-primary/50 overflow-hidden"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                BEGIN DESCENT
                <i className="fas fa-chevron-down ml-3 text-white transition-transform duration-300 group-hover:translate-y-1" />
              </span>
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_70%)]" />
            </motion.button>
          </div>

          {/* Right column: Latest Updates */}
          <aside className="w-full md:w-80 lg:w-96 md:absolute md:top-1/2 md:right-12 md:transform md:-translate-y-1/2 md:z-20">
            <div className="bg-muted/40 backdrop-blur-sm rounded-xl p-4 border border-muted-foreground/20 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-foreground">Latest Updates</h4>
                <span className="text-sm text-muted-foreground">Live</span>
              </div>

              <div className="space-y-3">
                {updates.map((u: any) => (
                  <a
                    key={u.id}
                    href={u.href}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/60 transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={u.thumb}
                      alt={u.title}
                      className="w-16 h-10 object-cover rounded-sm flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-foreground line-clamp-2">
                        {u.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{u.type.toUpperCase()}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
