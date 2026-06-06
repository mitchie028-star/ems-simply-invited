window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const overlay = document.getElementById("jungleOverlay");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  video.muted = true;
  video.playsInline = true;

  video.addEventListener("loadeddata", () => {
    video.currentTime = 0.1;
  });

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // WHOOSH SOUND
    if (whooshAudio) {
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(() => {});
    }

    // OPEN JUNGLE (ZOOM OUT OVERLAY)
    document.body.classList.add("open");

    // STOP WHOOSH AFTER TRANSITION
    setTimeout(() => {
      if (whooshAudio) {
        whooshAudio.pause();
        whooshAudio.currentTime = 0;
      }
    }, 1500);

    // START AMBIENCE
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(() => {});
    }

    // START VIDEO SLIGHTLY AFTER TRANSITION STARTS
    setTimeout(async () => {
      try {
        await video.play();
      } catch (e) {
        console.log(e);
      }
    }, 500);

  });

});
