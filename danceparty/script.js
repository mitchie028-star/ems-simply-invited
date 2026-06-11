document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Ensure audio is ready
  music.load();
  music.volume = 1;

  // Play video
  if (video) {
    video.muted = true;
    video.play().catch(() => {});
  }

  function startAudio() {
    music.play()
      .then(() => {
        console.log("🎵 Music started");
      })
      .catch(err => {
        console.log("❌ Audio blocked:", err);
      });

    document.removeEventListener("click", startAudio);
    document.removeEventListener("touchstart", startAudio);
  }

  // IMPORTANT: user gesture only
  document.addEventListener("click", startAudio, { once: true });
  document.addEventListener("touchstart", startAudio, { once: true });
});
