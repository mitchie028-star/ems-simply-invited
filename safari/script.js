window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const ethan = document.getElementById("ethan");
  const title = document.getElementById("title");
  const rsvp = document.getElementById("rsvp");

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    try {
      await video.play();
    } catch (e) {
      console.log("Autoplay blocked");
    }

    setTimeout(() => {
      ethan.style.opacity = "1";
    }, 2000);

    setTimeout(() => {
      title.style.opacity = "1";
    }, 3500);

    setTimeout(() => {
      rsvp.style.opacity = "1";
    }, 5000);

  });

});
