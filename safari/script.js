const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

  startBtn.style.display = "none";

  const sounds = {
    whoosh1: document.getElementById("whoosh1"),
    whoosh2: document.getElementById("whoosh2"),
    roar: document.getElementById("roar")
  };

  function playSound(audio, volume = 1) {
    if (!audio) return;

    audio.currentTime = 0;
    audio.volume = volume;

    audio.play().catch(() => {
      console.log("Audio blocked");
    });
  }

  setTimeout(() => playSound(sounds.whoosh1, 0.6), 900);
  setTimeout(() => playSound(sounds.whoosh2, 0.5), 4500);
  setTimeout(() => playSound(sounds.roar, 0.7), 6000);

});
