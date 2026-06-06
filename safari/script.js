window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  // =========================
  // PREP VIDEO (VISIBLE BUT PAUSED)
  // =========================
  video.muted = true;
  video.playsInline = true;

  video.addEventListener("loadeddata", () => {
    video.currentTime = 0.1; // show first frame, no black screen
  });

  // =========================
  // CLICK START
  // =========================
  startScreen.addEventListener("click", async () => {

    // hide intro
    startScreen.style.display = "none";

    // =========================
    // SOUND: WHOOSH (LEAVES OPEN)
    // =========================
    if (whooshAudio) {
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(() => {});
    }

    // =========================
    // OPEN LEAVES
    // =========================
    document.body.classList.add("open");

    // =========================
    // SOUND: JUNGLE AMBIENCE (LOOP)
    // =========================
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(() => {});
    }

    // =========================
    // STOP WHOOSH AFTER ANIMATION
    // (matches 1.2s CSS transition)
    // =========================
    setTimeout(() => {
      if (whooshAudio) {
        whooshAudio.pause();
        whooshAudio.currentTime = 0;
      }
    }, 1300);

    // =========================
    // START VIDEO AFTER LEAVES OPEN
    // =========================
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
