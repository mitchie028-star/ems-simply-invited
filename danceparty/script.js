window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  if (video) {
    video.muted = true;
    video.play().catch(e => console.log(e));
  }

  const startAudio = () => {
    music.play().catch(e => console.log(e));
    document.removeEventListener('click', startAudio);
  };

  document.addEventListener('click', startAudio);
});
