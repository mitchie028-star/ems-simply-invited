window.addEventListener("load", () => {
  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");

  startScreen.addEventListener("click", async () => {

    // hide start screen
    startScreen.style.display = "none";

    // trigger leaves
    document.body.classList.add("open");

    // FORCE video play safely
    try {
      video.muted = true;
      video.playsInline = true;

      // ensure loaded
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
