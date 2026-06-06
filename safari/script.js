window.addEventListener("load", () => {

  const whoosh1 = document.getElementById("whoosh1");
  const whoosh2 = document.getElementById("whoosh2");
  const roar = document.getElementById("roar");

  function playSound(audio, volume = 1) {
    if (!audio) return;

    audio.volume = volume;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — will only work after user interaction
        console.log("Audio blocked until user interaction");
      });
    }
  }

  setTimeout(() => {
    playSound(whoosh1, 0.6);
  }, 900);

  setTimeout(() => {
    playSound(whoosh2, 0.5);
  }, 4500);

  setTimeout(() => {
    playSound(roar, 0.7);
  }, 6000);

});
