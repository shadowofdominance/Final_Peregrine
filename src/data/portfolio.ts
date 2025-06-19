export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
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
    id: "mystic-realms",
    title: "SwiftEdit",
    description: "SwiftEdit is a lightning-fast, no-frills text editor built for desktop warriors who crave speed and simplicity.",
    image: "/images/Swiftedit.png",
    technologies: [".NET", "C#", "WinForms"],
    demoUrl: "https://github.com/shadowofdominance/Swift_Edit_final.git",
    codeUrl: "https://github.com/shadowofdominance/Swift_Edit_final.git"
  },
  {
    id: "medai",
    title: "MedAI",
    description: "Med-AI is a sleek web app that scans your symptoms from text and predicts possible diseases in a flash.",
    image: "/images/medai.jpeg",
    technologies: ["Python", "TypeScript","BERT", "React.js"],
    demoUrl: "https://github.com/shadowofdominance/MedAI.git",
    codeUrl: "https://github.com/shadowofdominance/MedAI.git"
  },
  {
    id: "CustomEventSystem",
    title: "Custom Event System",
    description: "A C# console-based game event system using delegates, events, and file I/O. Mimics in-game triggers where multiple systems react to a single action.",
    image: "/images/customeventsystem.png",
    technologies: ["C#", ".NET", "Console"],
    demoUrl: "https://github.com/shadowofdominance/CustomEventSystem.git",
    codeUrl: "https://github.com/shadowofdominance/CustomEventSystem.git"
  }
];

export const events: Event[] = [
  {
    id: "techsoar-2023",
    title: "Evogen and Magnum 2025",
    role: "Event Head for Cybersecurity",
    description: "Led two flagship cybersecurity events—Evogen (intercollege) and Magnum (in-house) with 90+ participants, 2 speakers, and a crisp 85% satisfaction rate.",
    image: "/images/evogen2.jpg",
    stats: ["100+ Participants", "2 Judges", "90% Satisfaction"]
  },
  {
    id: "game-dev-championship",
    title: "Communities Leadership",
    role: "Admin & Meetup Organizer",
    description: "Drive synergy across 4 active communities—hosting meetups and nurturing dev culture from the trenches to the summit.                                  ",
    image: "/images/codezone.jpg",
    stats: ["200+ Developers Overall"]
  },
  {
    id: "code-flight-workshop",
    title: "Team Bounters Belgavi",
    role: "Meet-up Speaker and an Organizer",
    description: "Led hands-on Cybersecurity sessions on Web App Vulnerabilities basics and clean security habits. Kept engagement high and saw 90% of attendees power through to meetup.",
    image: "/images/teambounters.jpg",
    stats: ["2 Sessions", "50+ Students", "90% Completion"]
  }
];

export const achievements: Achievement[] = [
  {
    id: "game-dev-excellence",
    title: "Cybersecurity Winners and Runners",
    description: "Winners once and Runners twice",
    icon: "fas fa-trophy"
  },
  {
    id: "community-leader",
    title: "Community Leader",
    description: "Outstanding Leadership Award for Event Management",
    icon: "fas fa-users"
  },
  {
    id: "technical-innovation",
    title: "Technical Innovation",
    description: "Best Technical Implementation - Indie Game Showcase",
    icon: "fas fa-code"
  },
  {
    id: "rising-star",
    title: "Rising Star",
    description: "Emerging Developer Recognition - Tech Conference 2023",
    icon: "fas fa-star"
  }
];

export const skills: string[] = [
  "C++",
  "Unreal Engine",
  "C#",
  "Cyber Security",
  "Blender",
];
