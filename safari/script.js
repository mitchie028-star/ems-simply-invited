window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  if (!startScreen || !video) return;

  video.muted = true;
  video.playsInline = true;

  const unlockAudio = (audio) => {
    if (!audio) return;
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // SOUND
    unlockAudio(whooshAudio);

    // SCENE 1
    document.body.classList.add("open");

    // STOP WHOOSH
    setTimeout(() => {
      whooshAudio?.pause();
      whooshAudio.currentTime = 0;
    }, 3200);

    // AMBIENCE
    unlockAudio(jungleAudio);

    // VIDEO START
    setTimeout(() => {
      video.play().catch(() => {});
    }, 600);

    // SCENE 2
    setTimeout(() => {
      document.body.classList.add("scene2-active");
    }, 3400);

    // SCENE 3 (MOBILE SAFE FIX - NO timeupdate)
    setTimeout(() => {
      video.pause();
      document.body.classList.add("scene3-active");
    }, 9000);

  });

});
