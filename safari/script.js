window.addEventListener("DOMContentLoaded", () => {

  console.log("Safari JS loaded ✔");

  const startBtn = document.getElementById("startBtn");

  const whoosh1 = document.getElementById("whoosh1");
  const whoosh2 = document.getElementById("whoosh2");
  const roar = document.getElementById("roar");

  if (!startBtn) {
    console.log("Start button missing ❌");
    return;
  }

  startBtn.addEventListener("click", () => {

    console.log("Start clicked ✔");

    startBtn.style.display = "none";

    function play(audio, vol){
      if (!audio) {
        console.log("Missing audio element ❌");
        return;
      }

      audio.currentTime = 0;
      audio.volume = vol;

      audio.play()
        .then(() => console.log("Playing:", audio.id))
        .catch(err => console.log("Audio blocked:", err));
    }

    setTimeout(() => play(whoosh1, 0.6), 900);
    setTimeout(() => play(whoosh2, 0.5), 4500);
    setTimeout(() => play(roar, 0.7), 6000);

  });

});
