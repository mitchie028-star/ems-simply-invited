window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const ethan = document.getElementById("ethan");
  const title = document.getElementById("title");
  const rsvp = document.getElementById("rsvp");

  const leafLeft = document.getElementById("leafLeft");
  const leafRight = document.getElementById("leafRight");

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    // play video
    try {
      await video.play();
    } catch (e) {}

    // 🌿 LEAVES OPEN
    document.body.classList.add("open");

    // 👶 ETHAN appears
    setTimeout(() => {
      ethan.style.opacity = "1";
    }, 2000);

    // 📝 TITLE
    setTimeout(() => {
      title.style.opacity = "1";
    }, 3200);

    // ✉️ RSVP SCENE (FULL SCREEN)
    setTimeout(() => {
      rsvp.style.opacity = "1";
      rsvp.style.pointerEvents = "auto";
    }, 4500);

  });

});
