document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Start video
  if (video) {
    video.muted = true;
    video.play().catch(() => {});
  }

  // Play music on first user interaction
  const startAudio = () => {
    music.play().catch(err => console.log("Audio error:", err));

    window.removeEventListener("click", startAudio);
    window.removeEventListener("touchstart", startAudio);
  };

  window.addEventListener("click", startAudio, { once: true });
  window.addEventListener("touchstart", startAudio, { once: true });
});
