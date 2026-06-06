window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  // =========================
  // PREP VIDEO (SHOW FIRST FRAME)
  // =========================
  video.muted = true;
  video.playsInline = true;

  video.addEventListener("loadeddata", () => {
    video.currentTime = 0.1;
  });

  // =========================
  // START INTERACTION
  // =========================
  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // WHOOSH SOUND
    if (whooshAudio) {
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(() => {});
    }

    // OPEN LEAVES
    document.body.classList.add("open");

    // JUNGLE AMBIENCE
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(() => {});
    }

    // STOP WHOOSH AFTER ANIMATION
    setTimeout(() => {
      if (whooshAudio) {
        whooshAudio.pause();
        whooshAudio.currentTime = 0;
      }
    }, 1300);

    // START VIDEO AFTER LEAVES BEGIN OPENING
    setTimeout(async () => {
      try {
        await video.play();
      } catch (e) {
        console.log("Video play blocked:", e);
      }
    }, 400);

  });

});
