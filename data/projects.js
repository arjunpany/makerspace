// Single source of truth for all projects.
// Add a new project here, then create the matching page in /projects/.
// date format: "YYYY-MM" (used for sorting the timeline)
// category: "engineering" (devices, code, DIY builds) or "music"
const PROJECTS = [
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
    id: "solar-tracker",
    title: "Dual-Axis Solar Tracker",
    date: "2026-04",
    dateLabel: "April 2026",
    tagline: "An Arduino-driven mount that follows the sun to boost panel output ~30%.",
    thumbnail: "assets/images/solar-tracker-thumb.jpg",
    tags: ["Arduino", "3D Printing", "Electronics"],
    page: "projects/solar-tracker.html",
    category: "engineering"
  },
  {
    id: "robot-arm",
    title: "3-DOF Robotic Arm",
    date: "2025-11",
    dateLabel: "November 2025",
    tagline: "A servo-actuated arm controlled by inverse kinematics running on a Raspberry Pi.",
    thumbnail: "assets/images/robot-arm-thumb.jpg",
    tags: ["Robotics", "Python", "CAD"],
    page: "projects/robot-arm.html",
    category: "engineering"
  },
  {
    id: "smart-garden",
    title: "Self-Watering Smart Garden",
    date: "2025-06",
    dateLabel: "June 2025",
    tagline: "A soil-sensing irrigation box that waters itself and logs data to a web dashboard.",
    thumbnail: "assets/images/smart-garden-thumb.jpg",
    tags: ["IoT", "Woodworking", "Web Dev"],
    page: "projects/smart-garden.html",
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
