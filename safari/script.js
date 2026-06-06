window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const ethan = document.getElementById("ethan");
  const title = document.getElementById("title");
  const rsvp = document.getElementById("rsvp");

  // STEP 1: CLICK TO START
  startScreen.addEventListener("click", async () => {

    // hide intro
    startScreen.style.opacity = "0";
    startScreen.style.pointerEvents = "none";

    setTimeout(() => {
      startScreen.style.display = "none";
    }, 800);

    // STEP 2: play video
    try {
      await video.play();
    } catch (e) {
      console.log("Video autoplay blocked");
    }

    // STEP 3: Ethan appears (after 3s)
    setTimeout(() => {
      ethan.style.opacity = "1";
    }, 3000);

    // STEP 4: Title reveal (5s)
    setTimeout(() => {
      title.style.opacity = "1";
    }, 5000);

    // STEP 5: RSVP reveal (7s)
    setTimeout(() => {
      rsvp.style.opacity = "1";
    }, 7000);

  });

});
