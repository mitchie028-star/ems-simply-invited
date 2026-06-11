document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");

  // Prepare audio
  music.load();
  music.volume = 1;

  // Attempt autoplay
  music.play().catch(() => {

    // If autoplay is blocked, wait for first interaction
    const startMusic = () => {
      music.play().catch(() => {});

      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("click", startMusic, { once: true });
    document.addEventListener("touchstart", startMusic, { once: true });

  });
});
