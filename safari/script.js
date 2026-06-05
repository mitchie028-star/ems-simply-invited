document.addEventListener("DOMContentLoaded", () => {

  const scenes = document.querySelectorAll(".scene");
  let i = 0;

  function show(n) {
    scenes.forEach((s, idx) => {
      s.classList.toggle("active", idx === n);
    });
  }

  function next() {
    i++;
    if (i < scenes.length) {
      show(i);
      setTimeout(next, 2500);
    }
  }

  show(0);
  setTimeout(next, 2500);

  // RSVP
  const btn = document.getElementById("btn");

  btn?.addEventListener("click", () => {
    btn.innerText = "Sent!";
    btn.disabled = true;
  });

  // PARALLAX (SCENE 3 ONLY)
  const jungle = document.querySelector(".jungle-scene");

  if (jungle) {
    jungle.addEventListener("mousemove", (e) => {
      const layers = jungle.querySelectorAll(".layer");

      layers.forEach(layer => {
        const speed = layer.dataset.speed || 1;

        const x = (e.clientX - window.innerWidth / 2) * (speed / 80);
        const y = (e.clientY - window.innerHeight / 2) * (speed / 80);

        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    });
  }

});
