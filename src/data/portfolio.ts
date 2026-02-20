export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeUrl: string;
  playUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  role: string;
  description: string;
  image: string;
  stats: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: "chaos-drop",
    title: "Chaos Drop",
    description:
      "Chaos Drop is a fast-paced 2D arcade game where players catch the right colors and dodge the wrong ones as the speed escalates into pure chaos.",
    image: "/images/ChaosDrop2.png",
    technologies: ["Unity", "C#", "2D Physics"],

    codeUrl: "https://github.com/shadowofdominance/Creative_Prototype.git",
    playUrl:
      "https://play.unity.com/en/games/c0d7356e-3b5b-4032-97c1-559ad334db5a/chaos-drop",
  },
  {
    id: "Unity test game",
    title: "Isometric Tactics Prototype – Grid, Pathfinding & AI",
    description:
      "A Unity-built prototype featuring grid-based movement, custom editor tools for obstacle placement, BFS pathfinding, and responsive enemy AI. Developed from scratch to simulate turn-based tactical gameplay.",
    image: "/images/Isometric.png",
    technologies: ["C#", "Unity3D"],
    codeUrl: "https://github.com/shadowofdominance/UnityTestGame.git",
  },
  {
    id: "unity-gameplay-prototypes",
    title: "Unity Gameplay Systems – Prototype Collection",
    description:
      "A structured collection of gameplay-focused Unity prototypes demonstrating core systems including player mechanics, object spawning, endless runner gameplay, animation & SFX integration, wave and powerup mechanics, and full UI implementation",
    image: "/images/unitylogo.png",
    technologies: ["Unity", "C#", "Game Development", "UI Systems"],
    codeUrl:
      "https://github.com/shadowofdominance/Unity_Learning_Prototypes.git",
  },
  {
    id: "swift-edit",
    title: "SwiftEdit",
    description:
      "SwiftEdit is a lightning-fast, no-frills text editor built for desktop warriors who crave speed and simplicity.",
    image: "/images/Swiftedit.png",
    technologies: [".NET", "C#", "WinForms"],
    codeUrl: "https://github.com/shadowofdominance/Swift_Edit_final.git",
  },
];

export const events: Event[] = [
  {
    id: "techsoar-2023",
    title: "Evogen and Magnum 2025",
    role: "Event Head for Cybersecurity",
    description:
      "Led two flagship cybersecurity events—Evogen (intercollege) and Magnum (in-house) with 90+ participants, 2 speakers, and a crisp 85% satisfaction rate.",
    image: "/images/evogen2.jpg",
    stats: ["100+ Participants", "2 Judges", "90% Satisfaction"],
  },
  {
    id: "game-dev-championship",
    title: "Communities Leadership",
    role: "Admin & Meetup Organizer",
    description:
      "Drive synergy across 4 active communities—hosting meetups and nurturing dev culture from the trenches to the summit.                                  ",
    image: "/images/codezone.jpg",
    stats: ["200+ Developers Overall"],
  },
  {
    id: "code-flight-workshop",
    title: "Team Bounters Belgavi",
    role: "Meet-up Speaker and an Organizer",
    description:
      "Led hands-on Cybersecurity sessions on Web App Vulnerabilities basics and clean security habits. Kept engagement high and saw 90% of attendees power through to meetup.",
    image: "/images/teambounters.jpg",
    stats: ["2 Sessions", "50+ Students", "90% Completion"],
  },
];

export const achievements: Achievement[] = [
  {
    id: "cyber-sentinal",
    title: "Cyber Sentinel Champion",
    description:
      "4-time winner in inter-college Capture the Flag (CTF) competitions",
    icon: "fas fa-trophy",
  },
  {
    id: "hackathon-highlights",
    title: "Hackathon Highlights",
    description:
      "Runner-Up at a college-level Hackathon and Top 12 out of 100+ participants in a large-scale tech hackathon.",
    icon: "fas fa-code",
  },
  {
    id: "tech-event-lead",
    title: "Tech Event Lead",
    description:
      "Led the planning and execution of 2 successful cybersecurity events in college.",
    icon: "fas fa-chalkboard-teacher",
  },
  {
    id: "rising-star",
    title: "CodeZone Secretary",
    description: "Elected Secretary of CodeZone in final year.",
    icon: "fas fa-users",
  },
];

export const skills: string[] = [
  "C++",
  "Unreal Engine",
  "C#",
  "Blender",
  "Unity",
];
