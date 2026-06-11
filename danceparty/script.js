window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const video = document.querySelector(".bg-video");

  // Attempt to play music automatically
  if (music) {
    music.play().catch(error => {
      console.log("Autoplay was prevented by the browser. Interaction required.");
    });
  }

  // Ensure video stays muted
  if (video) {
    video.muted = true;
    video.play().catch(e => console.log(e));
  }
});
