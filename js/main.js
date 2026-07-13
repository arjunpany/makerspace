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

function renderProjectGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = projectsByDateDesc().map(projectCardHTML).join("");
}

function renderTimeline(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = projectsByDateAsc().map(timelineItemHTML).join("");
}
