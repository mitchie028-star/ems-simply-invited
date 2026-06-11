document.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");

  music.load();
  music.volume = 1;

  // Try autoplay (may or may not work)
  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // fallback: first interaction
      const start = () => {
        music.play().catch(() => {});
        document.removeEventListener("click", start);
        document.removeEventListener("touchstart", start);
      };

      document.addEventListener("click", start, { once: true });
      document.addEventListener("touchstart", start, { once: true });
    });
  }
});
