# Videos

**Small clips (roughly under ~20MB) can be committed directly here.** Use an
`<video>` tag in the project page:

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

**Anything larger — GitHub blocks files over 100MB outright, and large binaries
slow things down in git history well before that.** For those, route through
YouTube/Vimeo instead:

1. Upload your video to YouTube (set visibility to **Unlisted** if you don't want
   it publicly searchable — it's still viewable by anyone with the link/embed).
2. Grab the video ID from the URL (`youtube.com/watch?v=VIDEO_ID`).
3. In the relevant project page, use an iframe embed instead:

```html
<div class="media-block video">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Project demo" allowfullscreen></iframe>
</div>
```
