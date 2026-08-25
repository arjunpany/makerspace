# Audio

**Small tracks (roughly under ~20MB) can be committed directly here.** Use a `<video>` tag
(handles audio-only files fine too) in the project page:

```html
<div class="media-block video">
  <video src="../assets/audio/your-track.mp3" controls playsinline>
    Your browser doesn't support inline playback of this file — you can
    <a href="../assets/audio/your-track.mp3">download the track</a> instead.
  </video>
</div>
```

`.mp3`, `.wav`, or `.mp4` (audio-only or with a screen recording of the DAW) all work.

**Anything larger** — GitHub blocks files over 100MB outright, and large binaries slow things
down in git history well before that. For those, host the track externally (SoundCloud, YouTube,
etc.) and embed a player the same way `assets/videos/README.md` describes for video.
