document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // 1. Play video muted immediately
  if (video) {
    video.muted = true;
    video.play().catch(e => console.log("Video autoplay blocked", e));
  }

  // 2. Immediate attempt to play music
  music.play().then(() => {
    console.log("Music started automatically");
  }).catch(error => {
    console.log("Autoplay blocked, waiting for first interaction");
    
    // 3. Fallback: Start music on the very first touch/click
    const startAudio = () => {
      music.play();
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };

    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);
  });
});
