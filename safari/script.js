window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const whoosh = document.getElementById("whoosh");
  const form = document.getElementById("rsvpForm");

  startScreen.addEventListener("click", async () => {

    // hide intro
    startScreen.style.opacity = "0";
    setTimeout(() => startScreen.style.display = "none", 500);

    // sound
    if (whoosh) {
      whoosh.currentTime = 0;
      whoosh.play().catch(() => {});
    }

    // video (Safari safe)
    try {
      video.muted = true;
      await video.play();
      setTimeout(() => video.muted = false, 400);
    } catch (e) {}

    // SCENE FLOW (synchronized)
    setTimeout(() => {
      document.body.classList.add("reveal-ethan");
    }, 1000);

    setTimeout(() => {
      document.body.classList.add("reveal-title");
    }, 2000);

    setTimeout(() => {
      document.body.classList.add("show-rsvp");
    }, 3000);

  });

  // RSVP submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const card = document.querySelector(".card");

      card.innerHTML = `
        <h2>🌿 Thank You!</h2>
        <p style="text-align:center;margin-top:10px;">
          You're officially part of Ethan's Wild One Safari Adventure!
        </p>
        <p style="text-align:center;margin-top:15px;">
          We can't wait to celebrate with you.
        </p>
      `;
    });
  }

});
