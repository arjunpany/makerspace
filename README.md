# makerspace

A maker portfolio site — plain HTML/CSS/JS, no build step required. Deploys directly
to Cloudflare Pages from this repo.

## Structure

- `index.html` — Engineering page: devices, code, and DIY projects (auto-generated from `data/projects.js`)
- `music.html` — Music page, same data source, filtered to the `"music"` category
- `timeline.html` — chronological timeline of all projects across both categories (same data source)
- `about.html` — bio / contact page
- `projects/*.html` — one detail page per project
- `data/projects.js` — single source of truth for project metadata (title, date, tags, thumbnail, link, category).
  Each project has a `category` of `"engineering"` or `"music"`, used to route it to the right page.
- `assets/images/` — photos (compressed, committed to the repo)
- `assets/videos/` — small clips (~20MB or less) can be committed directly; larger files should be
  embedded from YouTube/Vimeo instead — see `assets/videos/README.md`
- `assets/audio/` — beats/tracks for the Music page; small files (~20MB or less) can be committed
  directly — see `assets/audio/README.md`

## Adding a new project

1. Add a new entry to the `PROJECTS` array in [`data/projects.js`](data/projects.js), including a
   `category` of `"engineering"` or `"music"`.
2. Copy an existing file in `projects/` (e.g. `projects/lecturelog.html`) as a
   starting template and fill in your own write-up, photos, and (optionally) a
   video embed.
3. Add your photos to `assets/images/`, keeping them reasonably compressed
   (aim under ~500KB each — resize/export at web resolution, not camera-original).
4. Commit and push — Cloudflare Pages redeploys automatically.

## Local preview

No build step needed. Just open `index.html` in a browser, or serve the folder
with any static server, e.g. `python -m http.server` from this directory.

## Deployment

This repo is connected to Cloudflare Pages:
- Build command: *(none)*
- Build output directory: `/`

Every push to `main` triggers a new deployment automatically.
