document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Play background video
  if (video) {
    video.muted = true;
    video.play().catch(() => {});
  }

  // Start music on first interaction
  function startAudio() {
    music.play()
      .then(() => console.log("Music playing"))
      .catch(err => console.log("Audio error:", err));

    document.removeEventListener("click", startAudio);
    document.removeEventListener("touchstart", startAudio);
  }

  document.addEventListener("click", startAudio);
  document.addEventListener("touchstart", startAudio);
});
