document.addEventListener("DOMContentLoaded", () => {

  const scenes = document.querySelectorAll(".scene");
  let current = 0;

  function showScene(i) {
    scenes.forEach((s, index) => {
      s.classList.toggle("active", index === i);
    });
  }

  function next() {
    current++;
    if (current < scenes.length) {
      showScene(current);
      run(current);
    }
  }

  function run(i) {

    // Scene 1 (intro)
    if (i === 0) {
      setTimeout(next, 2500);
    }

    // Scene 2 (explorer)
    if (i === 1) {
      setTimeout(next, 2500);
    }

    // Scene 3 (animals reveal)
    if (i === 2) {
      const animals = document.querySelectorAll(".animal-area img");

      animals.forEach((el, idx) => {
        setTimeout(() => {
          el.style.transform = "scale(1)";
          el.style.opacity = "1";
        }, idx * 300);
      });

      setTimeout(next, 3500);
    }

    // Scene 4 (invite)
    if (i === 3) {
      setTimeout(next, 3000);
    }

    // Scene 5 (map)
    if (i === 4) {
      setTimeout(next, 3000);
    }

    // Scene 6 (form stop)
    if (i === 5) {
      const btn = document.getElementById("submitBtn");

      btn?.addEventListener("click", () => {
        btn.innerText = "Sent! 🦁";
        btn.disabled = true;
      });
    }
  }

  // START
  showScene(0);
  run(0);

});
