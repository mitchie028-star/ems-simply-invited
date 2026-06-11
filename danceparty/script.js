window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // 1. Play video muted (this is always allowed)
  if (video) {
    video.muted = true;
    video.play().catch(e => console.log("Video autoplay blocked", e));
  }

  // 2. Attempt to play music immediately
  music.play().then(() => {
    console.log("Music started automatically");
  }).catch(error => {
    console.log("Autoplay blocked, waiting for first click");
    
    // 3. If blocked, play on first touch/click anywhere
    const playOnInteraction = () => {
      music.play();
      document.removeEventListener('click', playOnInteraction);
      document.removeEventListener('touchstart', playOnInteraction);
    };
    
    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
  });
});
