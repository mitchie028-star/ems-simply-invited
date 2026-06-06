window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  /* =========================
     PREP VIDEO (DO NOT PLAY YET)
  ========================= */
  video.muted = true;
  video.playsInline = true;

  video.addEventListener("loadeddata", () => {
    video.currentTime = 0.1; // show first frame (no black screen)
  });

  /* =========================
     CLICK START
  ========================= */
  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // SOUND: whoosh
    if (whooshAudio) {
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(() => {});
    }

    // SOUND: jungle ambience
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(() => {});
    }

    // OPEN LEAVES FIRST
    document.body.classList.add("open");

    // START VIDEO AFTER LEAVES BEGIN OPENING
    setTimeout(async () => {
      try {
        await video.play();
        console.log("Video playing ✔");
      } catch (err) {
        console.log("Video failed:", err);
      }
    }, 400);
  });

});
