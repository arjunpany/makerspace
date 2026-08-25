// Single source of truth for all projects.
// Add a new project here, then create the matching page in /projects/.
// date format: "YYYY-MM" (used for sorting the timeline)
// category: "engineering" (devices, code, DIY builds) or "music"
const PROJECTS = [
  {
    id: "class-d-amplifier-dead-time-study",
    title: "Class-D Amplifier Dead-Time Study",
    date: "2026-08",
    dateLabel: "August 2026",
    tagline: "Simulating how a Class-D amplifier's switching safety gap affects audio distortion.",
    thumbnail: "assets/images/class-d-amplifier-dead-time-study-thumb.jpg",
    tags: ["LTspice", "Power Electronics", "Circuit Simulation", "PWM"],
    page: "projects/class-d-amplifier-dead-time-study.html",
    category: "engineering"
  },
  {
    id: "aureus-frc-1318",
    title: "AUREUS — FRC Team 1318 Competition Robot",
    date: "2026-04",
    dateLabel: "April 2026",
    tagline: "Contributed to the electrical assembly and integration of AUREUS, Team 1318's competition robot for the 2026 FIRST Robotics Competition season.",
    thumbnail: "assets/images/aureus-frc-1318-thumb.jpg",
    tags: ["FIRST Robotics", "Electrical Engineering", "Robot Wiring", "CAN Bus"],
    page: "projects/aureus-frc-1318.html",
    category: "engineering"
  },
  {
    id: "lecturelog",
    title: "AI Note-Taking Device",
    date: "2026-07",
    dateLabel: "July 2026",
    tagline: "A Raspberry Pi device that records a lecture, transcribes it, and turns it into clean AI-generated study notes with charts and diagrams.",
    thumbnail: "assets/images/lecturelog-thumb.jpg",
    tags: ["Raspberry Pi", "Python", "AI / Claude API", "Whisper"],
    page: "projects/lecturelog.html",
    category: "engineering"
  },
  {
    id: "riptide-frc-1318",
    title: "Riptide — FRC Team 1318 Competition Robot",
    date: "2025-04",
    dateLabel: "April 2025",
    tagline: "Joined Team 1318's electrical subteam as a rookie, learning FRC robot systems while the team developed Riptide for the 2025 REEFSCAPE season.",
    thumbnail: "assets/images/riptide-frc-1318-thumb.jpg",
    tags: ["FIRST Robotics", "Electrical Engineering", "Robotics", "FRC"],
    page: "projects/riptide-frc-1318.html",
    category: "engineering"
  },
  {
    id: "karr-vehicle-registration-flow",
    title: "KARR Vehicle Registration Flow",
    date: "2025-08",
    dateLabel: "August 2025",
    tagline: "Built a mobile registration and vehicle onboarding flow using React Native, with API integration for KARR's vehicle reporting platform.",
    thumbnail: "assets/images/karr-vehicle-registration-flow-thumb.jpg",
    tags: ["React Native", "TypeScript", "API Integration", "Mobile Development"],
    page: "projects/karr-vehicle-registration-flow.html",
    category: "engineering"
  },
  {
    id: "raspberry-pi-weather-station",
    title: "Raspberry Pi Weather Station",
    date: "2024-08",
    dateLabel: "August 2024",
    tagline: "Built a Raspberry Pi weather station from hardware originally intended for a night-vision project, turning an unsuccessful prototype into a functional device.",
    thumbnail: "assets/images/raspberry-pi-weather-station-thumb.jpg",
    tags: ["Raspberry Pi", "Python", "API Integration", "Hardware"],
    page: "projects/raspberry-pi-weather-station.html",
    category: "engineering"
  },
  {
    id: "careerfinder",
    title: "CareerFinder",
    date: "2024-08",
    dateLabel: "August 2024",
    tagline: "Built a data-driven career exploration app for low-income students, placing 85th and in the top 5% at Empower Hacks 2.0 among 1,800+ participants.",
    thumbnail: "assets/images/careerfinder-thumb.jpg",
    tags: ["Web Development", "Data", "Career Exploration", "Hackathon"],
    page: "projects/careerfinder.html",
    category: "engineering"
  },
  {
    id: "periodiq",
    title: "PeriodiQ",
    date: "2024-08",
    dateLabel: "August 2024",
    tagline: "Built an interactive periodic table study and quiz app to help students practice identifying chemical elements during GIA Hacks 2.",
    thumbnail: "assets/images/periodiq-thumb.jpg",
    tags: ["JavaScript", "Code.org App Lab", "Data", "Education"],
    page: "projects/periodiq.html",
    category: "engineering"
  },
  {
    id: "first-gaming-pc-build",
    title: "Gaming PC",
    date: "2021-08",
    dateLabel: "August 2021",
    tagline: "Researched, budgeted, and assembled my first custom gaming PC at 13, selecting compatible components for performance within a ~$1,300 budget.",
    thumbnail: "assets/images/first-gaming-pc-build-thumb.jpg",
    tags: ["PC Building", "Computer Hardware", "Component Research", "Hardware Assembly"],
    page: "projects/first-gaming-pc-build.html",
    category: "engineering"
  },
  {
    id: "thatha-lego-story",
    title: "Thatha Lego Story",
    date: "2017-02",
    dateLabel: "February 2017",
    tagline: "A series of handmade LEGO dioramas telling my grandfather's life story, built for his funeral in February 2017.",
    thumbnail: "assets/images/thatha-lego-story-thumb.jpg",
    tags: ["LEGO", "Diorama", "Storytelling", "Family Tribute"],
    page: "projects/thatha-lego-story.html",
    category: "engineering"
  }
];

// Sorted newest-first for the homepage grid.
function projectsByDateDesc() {
  return [...PROJECTS].sort((a, b) => b.date.localeCompare(a.date));
}

// Sorted oldest-first for the timeline.
function projectsByDateAsc() {
  return [...PROJECTS].sort((a, b) => a.date.localeCompare(b.date));
}

// Newest-first, filtered to a single category ("engineering" or "music").
function projectsByCategoryDesc(category) {
  return projectsByDateDesc().filter(p => p.category === category);
}
