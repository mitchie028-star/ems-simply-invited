window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const startAudio = () => {
    music.play().catch(e => console.warn(e));
    document.removeEventListener('click', startAudio);
    document.removeEventListener('touchstart', startAudio);
  };
  document.addEventListener('click', startAudio);
  document.addEventListener('touchstart', startAudio);
});

function toggleRSVP() {
    document.getElementById('rsvp-section').classList.toggle('hidden');
}
