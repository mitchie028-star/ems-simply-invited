window.addEventListener("load", () => {
  const video = document.querySelector(".bg-video");
  if (video) {
    video.muted = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => console.log("Autoplay blocked."));
    }
  }
});
