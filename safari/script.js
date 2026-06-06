window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const whoosh = document.getElementById("whoosh");

  const ethan = document.getElementById("ethan");
  const title = document.getElementById("title");
  const rsvp = document.getElementById("rsvp");

  const form = document.getElementById("rsvpForm");

  if (!startScreen) {
    console.error("Missing startScreen.");
    return;
  }

  startScreen.addEventListener("click", async () => {

    startScreen.style.opacity = "0";

    setTimeout(() => {
      startScreen.style.display = "none";
    }, 500);

    /* WHOOSH */
    if (whoosh) {
      whoosh.currentTime = 0;
      whoosh.volume = 0.8;
      try {
        await whoosh.play();
      } catch (err) {
        console.log("Whoosh blocked:", err);
      }
    }

    document.body.classList.add("open");

    /* VIDEO */
    setTimeout(async () => {

      if (whoosh && !whoosh.paused) {
        whoosh.pause();
        whoosh.currentTime = 0;
      }

      if (video) {
        try {
          video.muted = true;
          await video.play();
          video.muted = false;
        } catch (err) {
          console.log("Video play error:", err);
        }
      }

    }, 2800);

    /* ETHAN */
    setTimeout(() => {
      ethan?.classList.add("show");
    }, 3300);

    /* TITLE */
    setTimeout(() => {
      title?.classList.add("show");
    }, 4200);

    /* RSVP */
    setTimeout(() => {
      rsvp?.classList.add("show");
    }, 5200);

  });

  /* RSVP FORM */
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const card = document.querySelector(".card");

      if (card) {
        card.classList.add("submitted");
      }
    });
  }

});
