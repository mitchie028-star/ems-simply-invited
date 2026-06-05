document.addEventListener("DOMContentLoaded", () => {

  const scenes = document.querySelectorAll(".scene");
  let current = 0;

  function show(i) {
    scenes.forEach((s, idx) => {
      s.classList.toggle("active", idx === i);
    });
  }

  function next() {
    current++;
    if (current < scenes.length) {
      show(current);
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

  // DISNEY PARALLAX (SMOOTH INERTIA)
  const jungle = document.querySelector(".jungle-scene");

  if (jungle) {
    const layers = jungle.querySelectorAll(".layer");

    let mx = 0, my = 0;
    let cx = 0, cy = 0;

    jungle.addEventListener("mousemove", (e) => {
      mx = e.clientX - window.innerWidth / 2;
      my = e.clientY - window.innerHeight / 2;
    });

    function animate() {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;

      layers.forEach(layer => {
        const speed = parseFloat(layer.dataset.speed || 1);

        const x = cx * (speed / 100);
        const y = cy * (speed / 100);

        layer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

});
