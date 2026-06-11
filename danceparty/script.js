window.addEventListener("load", () => {
  const video = document.querySelector(".bg-video");
  if (video) {
    video.muted = true;
    video.playsInline = true;
    
    // Attempt autoplay
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        console.log("Autoplay blocked, user interaction required.");
      });
    }
  }
});
