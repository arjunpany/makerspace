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
