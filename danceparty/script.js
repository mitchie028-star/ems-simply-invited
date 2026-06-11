// Ensures autoplay works across browsers
window.addEventListener("load", () => {
  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked but muted fallback is active.");
      });
    }
  });
});
