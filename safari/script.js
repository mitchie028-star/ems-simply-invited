window.addEventListener("load", () => {

  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");

  const jungle = document.getElementById("jungle");
  const whoosh = document.getElementById("whoosh");

  const ethan = document.getElementById("ethan");
  const title = document.getElementById("title");
  const rsvp = document.getElementById("rsvp");

  function playAudio(audio, volume = 1) {
    if (!audio) return;
    audio.volume = volume;
    audio.currentTime = 0;
    audio.play().catch(err => {
      console.log("Audio blocked:", err);
    });
  }

  startScreen.addEventListener("click", async () => {

    startScreen.style.display = "none";

    /* 🎥 VIDEO */
    await video.play().catch(()=>{});

    /* 🌿 OPEN LEAVES */
    document.body.classList.add("open");

    /* 🎧 SOUND START */

    // jungle ambience (continuous background)
    setTimeout(() => {
      jungle.volume = 0.4;
      jungle.play().catch(()=>{});
    }, 500);

    // whoosh (leaf opening)
    setTimeout(() => {
      playAudio(whoosh, 0.8);
    }, 800);

    /* 👶 ETHAN */
    setTimeout(() => {
      ethan.style.opacity = "1";
    }, 2000);

    /* 📝 TITLE */
    setTimeout(() => {
      title.style.opacity = "1";
    }, 3200);

    /* ✉️ RSVP */
    setTimeout(() => {
      rsvp.style.opacity = "1";
    }, 4500);

  });

});
