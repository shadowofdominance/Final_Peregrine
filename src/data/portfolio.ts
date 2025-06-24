export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
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
    id: "swift-edit",
    title: "SwiftEdit",
    description: "SwiftEdit is a lightning-fast, no-frills text editor built for desktop warriors who crave speed and simplicity.",
    image: "/images/Swiftedit.png",
    technologies: [".NET", "C#", "WinForms"],
    
    codeUrl: "https://github.com/shadowofdominance/Swift_Edit_final.git"
  },
  {
    id: "medai",
    title: "MedAI",
    description: "Med-AI is a sleek web app that scans your symptoms from text and predicts possible diseases in a flash.",
    image: "/images/medai.jpeg",
    technologies: ["Python", "TypeScript","BERT", "React.js"],
    codeUrl: "https://github.com/shadowofdominance/MedAI.git"
  },
  {
    id: "CustomEventSystem",
    title: "Custom Event System",
    description: "A C# console-based game event system using delegates, events, and file I/O. Mimics in-game triggers where multiple systems react to a single action.",
    image: "/images/customeventsystem.png",
    technologies: ["C#", ".NET", "Console"],
    codeUrl: "https://github.com/shadowofdominance/CustomEventSystem.git"
  },
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
    id: "cyber-sentinal",
    title: "Cyber Sentinel Champion",
    description: "4-time winner in inter-college Capture the Flag (CTF) competitions",
    icon: "fas fa-trophy"
  },
  {
    id: "hackathon-highlights",
    title: "Hackathon Highlights",
    description: "Runner-Up at a college-level Hackathon and Top 12 out of 100+ participants in a large-scale tech hackathon.",
    icon: "fas fa-code"
  },
  {
    id: "tech-event-lead",
    title: "Tech Event Lead",
    description: "Led the planning and execution of 2 successful cybersecurity events in college.",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    id: "rising-star",
    title: "CodeZone Secretary",
    description: "Elected Secretary of CodeZone in final year.",
    icon: "fas fa-users"
  }
];

export const skills: string[] = [
  "C++",
  "Unreal Engine",
  "C#",
  "Cyber Security",
  "Blender",
];
