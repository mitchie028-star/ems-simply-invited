window.addEventListener("load", () => {
  const video = document.querySelector(".bg-video");
  const music = document.getElementById("bg-music");

  if (video) {
    video.muted = true;
    video.playsInline = true;
    video.play().catch(e => console.warn("Video autoplay blocked", e));
  }

  const startAudio = () => {
    if (music) music.play().catch(e => console.warn("Audio playback failed", e));
    document.removeEventListener('click', startAudio);
    document.removeEventListener('touchstart', startAudio);
  };

  document.addEventListener('click', startAudio);
  document.addEventListener('touchstart', startAudio);
});

function toggleRSVP() {
    document.getElementById('rsvp-section').classList.toggle('hidden');
}
