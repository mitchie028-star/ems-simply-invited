window.addEventListener("load", () => {
  const video = document.querySelector(".bg-video");
  const music = document.getElementById("bg-music");

  // 1. Ensure Video is Muted and Playing
  if (video) {
    video.muted = true;
    video.playsInline = true;
    // Attempt playback, but don't worry if it's blocked until interaction
    video.play().catch((err) => console.warn("Video autoplay blocked:", err));
  }

  // 2. Setup Audio Playback on First Interaction
  const startAudio = () => {
    if (music) {
      music.play().catch((err) => console.warn("Audio playback failed:", err));
    }
    
    // Remove the listener once the music has started to clean up
    document.removeEventListener('click', startAudio);
    document.removeEventListener('touchstart', startAudio);
  };

  // Add listeners for both click and touch (better for mobile devices)
  document.addEventListener('click', startAudio);
  document.addEventListener('touchstart', startAudio);
});
