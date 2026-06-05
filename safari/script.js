document.addEventListener("DOMContentLoaded", () => {

  const scenes = document.querySelectorAll(".scene");
  let currentScene = 0;

  // -------------------------
  // SCENE SWITCHER
  // -------------------------
  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });
  }

  function nextScene() {
    currentScene++;
    if (currentScene < scenes.length) {
      showScene(currentScene);
      setTimeout(nextScene, 2500);
    }
  }

  showScene(0);
  setTimeout(nextScene, 2500);

  // -------------------------
  // RSVP BUTTON
  // -------------------------
  const btn = document.getElementById("btn");

  if (btn) {
    btn.addEventListener("click", () => {
      btn.innerText = "Sent!";
      btn.disabled = true;
    });
  }

  // -------------------------
  // CINEMATIC PARALLAX (FIXED)
  // -------------------------
  const jungle = document.querySelector(".jungle-scene");

  if (jungle) {
    const layers = jungle.querySelectorAll(".layer");

    jungle.addEventListener("mousemove", (e) => {

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      layers.forEach(layer => {

        const speed = parseFloat(layer.dataset.speed || 1);

        const x = (e.clientX - centerX) * (speed / 90);
        const y = (e.clientY - centerY) * (speed / 90);

        // IMPORTANT: use CSS variables (no transform conflict)
        layer.style.setProperty("--x", `${x}px`);
        layer.style.setProperty("--y", `${y}px`);

        layer.style.transform = `translate3d(var(--x), var(--y), 0)`;
      });
    });
  }

});
