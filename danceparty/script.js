window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Video plays muted automatically
  if (video) {
    video.muted = true;
    video.play().catch(e => console.log(e));
  }

  // Attempt to play music automatically
  music.play().catch(error => {
    console.log("Autoplay blocked. Music will start on first touch.");
    
    // Fallback: Start music on the first touch/click anywhere on the page
    const startAudio = () => {
      music.play();
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
    };

    document.addEventListener('click', startAudio);
    document.addEventListener('touchstart', startAudio);
  });
});
