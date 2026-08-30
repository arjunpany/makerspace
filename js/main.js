function projectCardHTML(p) {
  return `
    <article class="project-card">
      <a class="card-link" href="${p.page}">
        <div class="thumb"><img src="${p.thumbnail}" alt="${p.title}" loading="lazy"></div>
        <div class="card-body">
          <div class="date">${p.dateLabel}</div>
          <h3>${p.title}</h3>
          <p>${p.tagline}</p>
          <ul class="tag-list">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
        </div>
      </a>
    </article>
  `;
}

function timelineItemHTML(p) {
  return `
    <div class="timeline-item">
      <div class="date">${p.dateLabel}</div>
      <h3><a href="${p.page}">${p.title}</a></h3>
      <p>${p.tagline}</p>
      <ul class="tag-list">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    </div>
  `;
}

function renderProjectGrid(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const projects = category ? projectsByCategoryDesc(category) : projectsByDateDesc();
  el.innerHTML = projects.length
    ? projects.map(projectCardHTML).join("")
    : `<p class="empty-state">Nothing here yet — check back soon.</p>`;
}

function renderTimeline(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const projects = category ? projectsByCategoryDesc(category) : projectsByDateDesc();
  el.innerHTML = projects.length
    ? projects.map(timelineItemHTML).join("")
    : `<p class="empty-state">Nothing here yet — check back soon.</p>`;
}

// Adds a play-button overlay on top of any poster'd <video> so it reads as a
// video (not a static photo) before playback starts.
function initVideoPlayOverlays() {
  document.querySelectorAll(".media-block.video").forEach(block => {
    const video = block.querySelector("video");
    if (!video) return;

    const overlay = document.createElement("div");
    overlay.className = "play-overlay";
    overlay.setAttribute("aria-label", "Play video");
    overlay.innerHTML = `
      <span class="play-icon">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      </span>
    `;
    block.appendChild(overlay);

    overlay.addEventListener("click", () => video.play());
    video.addEventListener("play", () => { overlay.style.display = "none"; });
    video.addEventListener("pause", () => { overlay.style.display = "flex"; });
    video.addEventListener("ended", () => { overlay.style.display = "flex"; });
  });
}

document.addEventListener("DOMContentLoaded", initVideoPlayOverlays);
