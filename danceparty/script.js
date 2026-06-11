window.addEventListener("load", () => {
  const video = document.querySelector(".bg-video");
  
  // 1. Mute and play video
  if (video) {
    video.muted = true;
    video.playsInline = true;
    video.play().catch(() => console.log("Video autoplay blocked."));
  }

  // 2. Setup Audio
  const music = new Audio('assets/dancing-queen.mp3');
  music.loop = true;

  // 3. Start audio on user interaction
  const startAudio = () => {
    music.play();
    document.removeEventListener('click', startAudio);
  };
  
  document.addEventListener('click', startAudio, { once: true });
});
