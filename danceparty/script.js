// Safe autoplay fix for all browsers
window.addEventListener("load", () => {
  document.querySelectorAll("video").forEach(video => {
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        console.log("Autoplay blocked but handled safely.");
      });
    }
  });
});
