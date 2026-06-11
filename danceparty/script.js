document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Play video immediately
  if (video) {
    video.muted = true;
    video.play().catch(() => {});
  }

  // Try autoplay music
  music.play().catch(() => {
    // If blocked, wait for first interaction
    const startAudio = () => {
      music.play().catch(err => console.log("Audio error:", err));

      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };

    document.addEventListener("click", startAudio);
    document.addEventListener("touchstart", startAudio);
  });
});
