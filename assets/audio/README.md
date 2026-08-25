# Audio

**Tracks under 25 MiB can be committed directly here.** This site deploys as a Cloudflare
Worker with static assets, which hard-caps every individual file at 25 MiB — go over that and
the *entire site* fails to build, not just that one file. GitHub's 100MB limit doesn't apply
here; 25 MiB is the real ceiling. Check a file's size before committing it.

Use a `<video>` tag (handles audio-only files fine too) in the project page:

```html
<div class="media-block video">
  <video src="../assets/audio/your-track.mp3" controls playsinline>
    Your browser doesn't support inline playback of this file — you can
    <a href="../assets/audio/your-track.mp3">download the track</a> instead.
  </video>
</div>
```

`.mp3`, `.wav`, or `.mp4` (audio-only or with a screen recording of the DAW) all work.

**Anything 25 MiB or larger** must be hosted externally (SoundCloud, YouTube, etc.) and embedded
as a player the same way `assets/videos/README.md` describes for video — it cannot be committed
to this repo at all.
