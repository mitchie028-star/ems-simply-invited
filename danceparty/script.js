window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  const overlay = document.getElementById("start-overlay");

  const startParty = () => {
    music.play().catch(e => console.log("Audio failed:", e));
    if (overlay) overlay.style.display = 'none'; // Removes the button
    document.removeEventListener('click', startParty);
  };

  if (overlay) {
    overlay.addEventListener('click', startParty);
  }
});
