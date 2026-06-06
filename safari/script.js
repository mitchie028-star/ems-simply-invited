window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  video.muted = true;
  video.playsInline = true;

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // SCENE 1 SOUND
    whooshAudio?.play().catch(() => {});

    document.body.classList.add("open");

    // STOP WHOOSH
    setTimeout(() => {
      whooshAudio?.pause();
      whooshAudio.currentTime = 0;
    }, 3200);

    // AMBIENCE
    jungleAudio?.play().catch(() => {});

    // VIDEO START
    setTimeout(() => {
      video.play().catch(() => {});
    }, 600);

    // SCENE 2
    setTimeout(() => {
      document.body.classList.add("scene2-active");
    }, 3400);

    // SCENE 3 TRIGGER (FREEZE AT 9s)
    video.addEventListener("timeupdate", () => {
      if (video.currentTime >= 9) {
        video.pause();
        document.body.classList.add("scene3-active");
      }
    });

  });

});
