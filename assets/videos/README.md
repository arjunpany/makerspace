# Videos

**Clips under 25 MiB can be committed directly here.** This site deploys as a Cloudflare
Worker with static assets, which hard-caps every individual file at 25 MiB — go over that and
the *entire site* fails to build, not just that one file. GitHub's 100MB limit doesn't apply
here; 25 MiB is the real ceiling. Check a file's size before committing it.

Use a `<video>` tag in the project page:

```html
<div class="media-block video">
  <video src="../assets/videos/your-clip.mov" controls playsinline poster="../assets/images/your-hero.jpg">
    Your browser doesn't support inline video playback of this file — you can
    <a href="../assets/videos/your-clip.mov">download the demo clip</a> instead.
  </video>
</div>
```

Note: iPhone videos are often encoded as HEVC/H.265, which desktop Chrome and
Firefox generally can't play (Safari can). If a clip doesn't play back in most
browsers, re-export it as H.264 MP4 (QuickTime Player → File → Export As, or
HandBrake) before committing.

**Anything 25 MiB or larger** must be routed through YouTube/Vimeo instead — it cannot be
committed to this repo at all:

1. Upload your video to YouTube (set visibility to **Unlisted** if you don't want
   it publicly searchable — it's still viewable by anyone with the link/embed).
2. Grab the video ID from the URL (`youtube.com/watch?v=VIDEO_ID`).
3. In the relevant project page, use an iframe embed instead:

```html
<div class="media-block video">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Project demo" allowfullscreen></iframe>
</div>
```
