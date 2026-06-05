document.addEventListener("DOMContentLoaded", () => {

  const bg = document.querySelector(".bg");
  const overlay = document.querySelector(".overlay");
  const title = document.querySelector(".title");
  const animals = document.querySelectorAll(".animal");
  const rsvpBtn = document.querySelector(".rsvp-btn");

  let zoom = 1.02;

  // -------------------------------
  // AUTO START SEQUENCE (NO CLICK NEEDED)
  // -------------------------------
  startCinematic();

  function startCinematic() {

    // 1. Fade in scene immediately
    overlay?.classList.add("fade-in");

    // 2. Title appears
    setTimeout(() => {
      title?.classList.add("show");
    }, 800);

    // 3. Slow camera zoom starts immediately
    const zoomInterval = setInterval(() => {
      zoom += 0.0008;
      if (bg) bg.style.transform = `scale(${zoom})`;
      if (zoom > 1.08) clearInterval(zoomInterval);
    }, 50);

    // 4. Animals enter in sequence (this fixes your "stuck" issue)
    const delays = [1500, 2500, 3500, 4500];

    animals.forEach((animal, i) => {
      setTimeout(() => {
        animal?.classList.add("enter");
      }, delays[i] || (1500 + i * 900));
    });

    // 5. Enable RSVP after everything
    setTimeout(() => {
      rsvpBtn?.classList.add("show");
    }, 5000);
  }

  // -------------------------------
  // PARALLAX (safe version)
  // -------------------------------
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) * 0.01;
    const y = (window.innerHeight / 2 - e.pageY) * 0.01;

    if (bg) {
      bg.style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;
    }
  });

  // -------------------------------
  // RSVP ACTION
  // -------------------------------
  rsvpBtn?.addEventListener("click", () => {
    createConfettiBurst();
    rsvpBtn.innerText = "Welcome to the Safari 🦁";
    rsvpBtn.disabled = true;
  });

  // -------------------------------
  // CONFETTI
  // -------------------------------
  function createConfettiBurst() {
    for (let i = 0; i < 70; i++) {
      const c = document.createElement("div");
      c.className = "confetti";

      c.style.left = Math.random() * 100 + "vw";
      c.style.backgroundColor = randomColor();
      c.style.animationDuration = 2 + Math.random() * 2 + "s";

      document.body.appendChild(c);

      setTimeout(() => c.remove(), 4000);
    }
  }

  function randomColor() {
    const colors = ["#ffd166", "#06d6a0", "#ef476f", "#118ab2", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

});
