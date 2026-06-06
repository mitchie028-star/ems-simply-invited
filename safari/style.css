window.addEventListener("load", () => {

  const sounds = {
    whoosh1: document.getElementById("whoosh1"),
    whoosh2: document.getElementById("whoosh2"),
    roar: document.getElementById("roar")
  };

  function playSound(audio, volume = 1) {
    if (!audio) return;

    try {
      audio.currentTime = 0;
      audio.volume = volume;

      const promise = audio.play();

      if (promise !== undefined) {
        promise.catch(() => {
          console.log("Audio blocked (needs user interaction)");
        });
      }
    } catch (err) {
      console.log("Audio error:", err);
    }
  }

  const timeline = [
    { delay: 900, sound: "whoosh1", volume: 0.6 },
    { delay: 4500, sound: "whoosh2", volume: 0.5 },
    { delay: 6000, sound: "roar", volume: 0.7 }
  ];

  timeline.forEach(event => {
    setTimeout(() => {
      playSound(sounds[event.sound], event.volume);
    }, event.delay);
  });

});
