window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  if (!startScreen || !video) return;

  video.muted = true;
  video.playsInline = true;

  video.addEventListener("loadeddata", () => {
    try {
      video.currentTime = 0.1;
    } catch (e) {}
  });

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    /* =========================
       WHOOSH
    ========================= */
    if (whooshAudio) {
      whooshAudio.pause();
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(() => {});
    }

    /* =========================
       OPEN JUNGLE (SCENE 1)
    ========================= */
    document.body.classList.add("open");

    /* stop whoosh AFTER zoom animation */
    setTimeout(() => {
      if (whooshAudio) {
        whooshAudio.pause();
        whooshAudio.currentTime = 0;
      }
    }, 3200);

    /* =========================
       AMBIENCE
    ========================= */
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(() => {});
    }

    /* =========================
       VIDEO START
    ========================= */
    setTimeout(async () => {
      try {
        await video.play();
      } catch (e) {
        console.log("Video blocked:", e);
      }
    }, 600);

    /* =========================
       SCENE 2 TRIGGER (THIS WAS MISSING)
    ========================= */
    setTimeout(() => {
      document.body.classList.add("scene2-active");
    }, 3400);

  });

});
