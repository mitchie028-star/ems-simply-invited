window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
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

    whooshAudio?.play().catch(() => {});
    jungleAudio?.play().catch(() => {});

    document.body.classList.add("open");

    setTimeout(async () => {
      try {
        await video.play();
      } catch (e) {}
    }, 400);

  });

});
