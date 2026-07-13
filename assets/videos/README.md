# Videos

Don't commit raw video files here — GitHub blocks files over 100MB and gets slow
with large binaries in history.

Instead:
1. Upload your video to YouTube (set visibility to **Unlisted** if you don't want
   it publicly searchable — it's still viewable by anyone with the link/embed).
2. Grab the video ID from the URL (`youtube.com/watch?v=VIDEO_ID`).
3. In the relevant project page, uncomment the video embed block and swap in
   your `VIDEO_ID`:

```html
<div class="media-block video">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Project demo" allowfullscreen></iframe>
</div>
```
