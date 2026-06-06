window.addEventListener("load", () => {
  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const jungleAudio = document.getElementById("jungleAudio");
  const whooshAudio = document.getElementById("whooshAudio");

  startScreen.addEventListener("click", async () => {

    // hide start screen
    startScreen.style.display = "none";

    // open leaves animation
    document.body.classList.add("open");

    // 🌬️ WHOOSH (instant transition sound)
    if (whooshAudio) {
      whooshAudio.currentTime = 0;
      whooshAudio.volume = 0.8;
      whooshAudio.play().catch(err => console.log("Whoosh blocked:", err));
    }

    // 🌿 JUNGLE AMBIENCE (loop)
    if (jungleAudio) {
      jungleAudio.volume = 0.5;
      jungleAudio.play().catch(err => console.log("Jungle blocked:", err));
    }

    // 🎥 VIDEO PLAY
    try {
      video.muted = true;
      video.playsInline = true;

      if (video.readyState < 2) {
        await new Promise(resolve =>
          video.addEventListener("canplay", resolve, { once: true })
        );
      }

      await video.play();

      console.log("Video playing ✔");

    } catch (err) {
      console.log("Video failed:", err);
    }
  });
});
