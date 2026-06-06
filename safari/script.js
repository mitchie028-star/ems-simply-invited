window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  if (!startScreen || !video) return;

  // Ensure video is ready for mobile autoplay behavior
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
       WHOOSH SOUND (SCENE 1 ENTRY)
    ========================= */
    if (whooshAudio) {
      whooshAudio.pause();
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;

      whooshAudio.play().catch(() => {});
    }

    /* =========================
       OPEN JUNGLE OVERLAY
    ========================= */
    document.body.classList.add("open");

    /* =========================
       STOP WHOOSH (MATCH CSS 3.2s)
    ========================= */
    setTimeout(() => {
      if (whooshAudio) {
        whooshAudio.pause();
        whooshAudio.currentTime = 0;
      }
    }, 3200);

    /* =========================
       START JUNGLE AMBIENCE
    ========================= */
    if (jungleAudio) {
      jungleAudio.volume = 0.5;

      jungleAudio.play().catch(() => {
        // fallback for autoplay restrictions
      });
    }

    /* =========================
       START VIDEO (SLIGHT DELAY)
    ========================= */
    setTimeout(async () => {
      try {
        await video.play();
      } catch (e) {
        console.log("Video play blocked:", e);
      }
    }, 600);

  });

});
