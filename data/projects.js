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
    id: "4wd-sensor-robot-car",
    title: "4WD Sensor Robot Car",
    date: "2019-07",
    dateLabel: "July 2019",
    tagline: "Built a 4-wheel-drive robot car with onboard sensors and IR remote control at an Amazon-hosted STEM robotics camp.",
    thumbnail: "assets/images/4wd-sensor-robot-car-thumb.jpg",
    tags: ["Arduino", "Robotics", "Sensors", "STEM Camp"],
    page: "projects/4wd-sensor-robot-car.html",
    category: "engineering"
  },
  {
    id: "thatha-lego-story",
    title: "Thatha Lego Story",
    date: "2017-07",
    dateLabel: "July 2017",
    tagline: "A series of handmade LEGO dioramas telling my grandfather's life story, built for his funeral in July 2017.",
    thumbnail: "assets/images/thatha-lego-story-hero.png",
    tags: ["LEGO", "Diorama", "Storytelling", "Family Tribute"],
    page: "projects/thatha-lego-story.html",
    category: "engineering"
  },
  {
    id: "lego-beyblades",
    title: "LEGO Beyblades",
    date: "2017-02",
    dateLabel: "February 2017",
    tagline: "Built custom spinning-top toys out of LEGO bricks, designed to spin like beyblades.",
    thumbnail: "assets/images/lego-beyblades-hero.png",
    tags: ["LEGO", "DIY Toys", "Mechanical Design"],
    page: "projects/lego-beyblades.html",
    category: "engineering"
  },
  {
    id: "diy-foosball-table",
    title: "DIY Foosball Table",
    date: "2017-03",
    dateLabel: "March 2017",
    tagline: "Built a working foosball table from a cardboard box, wooden dowel rods, and color-coded clothespins standing in for players.",
    thumbnail: "assets/images/diy-foosball-table-hero.jpeg",
    tags: ["Cardboard Engineering", "DIY", "Recycled Materials", "Woodworking"],
    page: "projects/diy-foosball-table.html",
    category: "engineering"
  },
  {
    id: "21-savage-acapella-beat",
    title: "21 Savage Acapella Beat",
    date: "2022-04",
    dateLabel: "April 2022",
    tagline: "A hip-hop beat built around a snapped 21 Savage acapella, with a catchy repetitive melody grown from a single sample hit and layered trap drums.",
    thumbnail: "assets/images/21-savage-acapella-beat-thumb.jpg",
    tags: ["Hip-Hop", "Trap", "Beat Making", "Sampling"],
    page: "projects/21-savage-acapella-beat.html",
    category: "music"
  },
  {
    id: "repitched-sample-beat",
    title: "Lil Mosey Type Beat",
    date: "2022-08",
    dateLabel: "August 2022",
    tagline: "A beat built by re-pitching a sample and layering drums on top of it.",
    thumbnail: "assets/images/repitched-sample-beat-thumb.jpg",
    tags: ["Hip-Hop", "Beat Making", "Sampling"],
    page: "projects/repitched-sample-beat.html",
    category: "music"
  },
  {
    id: "weeknd-travis-scott-beat",
    title: "The Weeknd x Travis Scott Beat",
    date: "2023-08",
    dateLabel: "August 2023",
    tagline: "A two-part beat: a Weeknd-style first half built for singing, transitioning through a water sample into a hard-hitting Travis Scott-style hip-hop second half.",
    thumbnail: "assets/images/weeknd-travis-scott-beat-thumb.jpg",
    tags: ["Hip-Hop", "Beat Making", "Sampling"],
    page: "projects/weeknd-travis-scott-beat.html",
    category: "music"
  },
  {
    id: "rod-wave-type-beat",
    title: "Rod Wave Type Beat",
    date: "2022-09",
    dateLabel: "September 2022",
    tagline: "A beat built from a sample, with a few melodies layered on top of it and drums added in.",
    thumbnail: "assets/images/rod-wave-type-beat-thumb.jpg",
    tags: ["Hip-Hop", "Beat Making", "Sampling"],
    page: "projects/rod-wave-type-beat.html",
    category: "music"
  },
  {
    id: "nle-choppa-type-beat",
    title: "NLE Choppa Type Beat",
    date: "2023-11",
    dateLabel: "November 2023",
    tagline: "A three-part beat moving from electronic, to dark and cinematic, to a late-night dreamy feel.",
    thumbnail: "assets/images/nle-choppa-type-beat-thumb.jpg",
    tags: ["Hip-Hop", "Beat Making", "Sampling"],
    page: "projects/nle-choppa-type-beat.html",
    category: "music"
  },
  {
    id: "metro-boomin-type-beat",
    title: "Metro Boomin Type Beat",
    date: "2024-03",
    dateLabel: "March 2024",
    tagline: "A dark trap beat built with piano and dark synth, with layered trap drums on top.",
    thumbnail: "assets/images/metro-boomin-type-beat-thumb.jpg",
    tags: ["Trap", "Hip-Hop", "Beat Making"],
    page: "projects/metro-boomin-type-beat.html",
    category: "music"
  },
  {
    id: "future-type-beat",
    title: "Future Melodic Type Beat",
    date: "2024-04",
    dateLabel: "April 2024",
    tagline: "A melodic trap beat built from guitars, pianos, and pads, with trap drums layered on top.",
    thumbnail: "assets/images/future-type-beat-thumb.jpg",
    tags: ["Trap", "Hip-Hop", "Beat Making"],
    page: "projects/future-type-beat.html",
    category: "music"
  },
  {
    id: "khalid-cinematic-beat",
    title: "Khalid Cinematic Beat",
    date: "2026-01",
    dateLabel: "January 2026",
    tagline: "A cinematic beat built from guitar and flutes with simple drums, made for someone to sing over.",
    thumbnail: "assets/images/khalid-cinematic-beat-thumb.jpg",
    tags: ["Cinematic", "Beat Making"],
    page: "projects/khalid-cinematic-beat.html",
    category: "music"
  },
  {
    id: "nightfall-in-houston",
    title: "Nightfall in Houston - Don Toliver Octane Type Beat",
    date: "2026-02",
    dateLabel: "February 2026",
    tagline: "Inspired by the cinematic feel of Don Toliver's latest album — bells, pads, and leads, built as a two-part beat.",
    thumbnail: "assets/images/nightfall-in-houston-thumb.jpg",
    tags: ["Cinematic", "Hip-Hop", "Beat Making"],
    page: "projects/nightfall-in-houston.html",
    category: "music"
  },
  {
    id: "dopamine-lil-tecca-type-beat",
    title: "Dopamine - Lil Tecca Type Beat",
    date: "2026-04",
    dateLabel: "April 2026",
    tagline: "Inspired by Lil Tecca's latest album, built around the same high-energy melodies and drums the title \"Dopamine\" points to.",
    thumbnail: "assets/images/dopamine-lil-tecca-type-beat-thumb.jpg",
    tags: ["Hip-Hop", "Beat Making"],
    page: "projects/dopamine-lil-tecca-type-beat.html",
    category: "music"
  },
  {
    id: "rodeo-travis-scott-type-beat",
    title: "RODEO - Travis Scott Type Beat",
    date: "2026-04",
    dateLabel: "April 2026",
    tagline: "Heavy distorted guitars and spooky melodies inspired by Travis Scott's 2015 album Rodeo.",
    thumbnail: "assets/images/rodeo-travis-scott-type-beat-thumb.jpg",
    tags: ["Hip-Hop", "Beat Making"],
    page: "projects/rodeo-travis-scott-type-beat.html",
    category: "music"
  },
  {
    id: "guitar-in-heaven-trap-beat",
    title: "Guitar in Heaven - Trap Beat",
    date: "2026-04",
    dateLabel: "April 2026",
    tagline: "A guitar sample flipped into a full trap beat.",
    thumbnail: "assets/images/guitar-in-heaven-trap-beat-thumb.jpg",
    tags: ["Trap", "Hip-Hop", "Beat Making", "Sampling"],
    page: "projects/guitar-in-heaven-trap-beat.html",
    category: "music"
  },
  {
    id: "dual-threat",
    title: "Dual Threat - Arjun Pany",
    date: "2026-08",
    dateLabel: "August 2026",
    tagline: "A jazz-hip-hop fusion piece written at a Stanford CCRMA workshop, blending a piano MIDI composition with live guitar, bass, violin, sax, and vocals from fellow workshop musicians.",
    thumbnail: "assets/images/dual-threat-thumb.jpg",
    tags: ["Jazz", "Hip-Hop", "Composition", "Collaboration"],
    page: "projects/dual-threat.html",
    category: "music"
  },
  {
    id: "mixed-emotions",
    title: "Mixed Emotions - Arjun Pany & Chris Hill",
    date: "2025-01",
    dateLabel: "January 2025",
    tagline: "Piano melodies, lyrics, and arrangement by Arjun Pany, with songwriting teacher Chris Hill on vocals.",
    thumbnail: "assets/images/mixed-emotions-thumb.jpg",
    tags: ["Songwriting", "Piano", "Collaboration"],
    page: "projects/mixed-emotions.html",
    category: "music"
  },
  {
    id: "big-feeling-remix",
    title: "Big Feeling Remix",
    date: "2026-06",
    dateLabel: "June 2026",
    tagline: "Took a beat I made and added vocals on top for Skio Music's BIG FEELING Remix Contest — placed #1 in Composition and Mixing within the Hip-Hop genre, #6 overall.",
    thumbnail: "assets/images/big-feeling-remix-thumb.jpg",
    tags: ["Remix", "Hip-Hop", "Contest"],
    page: "projects/big-feeling-remix.html",
    category: "music"
  }
];

// Sorted newest-first for the homepage grid.
function projectsByDateDesc() {
  return [...PROJECTS].sort((a, b) => b.date.localeCompare(a.date));
}

// Newest-first, filtered to a single category ("engineering" or "music").
function projectsByCategoryDesc(category) {
  return projectsByDateDesc().filter(p => p.category === category);
}
