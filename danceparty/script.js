window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Video must be muted to autoplay
  if (video) {
    video.muted = true;
    video.play().catch(e => console.log("Video autoplay blocked:", e));
  }

  // Audio plays on the first user interaction (required by browser policy)
  const startAudio = () => {
    music.play().catch(e => console.log("Audio play failed:", e));
    document.removeEventListener('click', startAudio);
    document.removeEventListener('touchstart', startAudio);
  };

  document.addEventListener('click', startAudio);
  document.addEventListener('touchstart', startAudio);
});
