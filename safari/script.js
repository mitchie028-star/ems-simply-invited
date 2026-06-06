window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  // SHOW FIRST FRAME (avoid black screen)
  video.muted = true;
  video.playsInline = true;

  video.addEventListener("loadeddata", () => {
    video.currentTime = 0.1;
  });

  // START SEQUENCE
  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // WHOOSH
    if (whooshAudio) {
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(() => {});
    }

    // OPEN LEAVES
    document.body.classList.add("open");

    // JUNGLE SOUND
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(() => {});
    }

    // START VIDEO AFTER LEAVES BEGIN OPENING
    setTimeout(async () => {
      try {
        await video.play();
      } catch (e) {
        console.log(e);
      }
    }, 400);

  });

});
