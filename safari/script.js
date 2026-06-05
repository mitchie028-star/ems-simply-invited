document.addEventListener("DOMContentLoaded", () => {

  const bg = document.querySelector(".bg");
  const overlay = document.querySelector(".overlay");
  const title = document.querySelector(".title");
  const animals = document.querySelectorAll(".animal");
  const rsvpBtn = document.querySelector(".rsvp-btn");

  let zoom = 1.05;

  // ===============================
  // AUTO START (NO TAP, NO BLOCKS)
  // ===============================
  start();

  function start() {

    // safety: ensure everything starts even if CSS is slow
    requestAnimationFrame(() => {
      overlay?.classList.add("fade-in");
      title?.classList.add("show");
    });

    // camera zoom
    const zoomInterval = setInterval(() => {
      zoom += 0.0006;
      if (bg) bg.style.transform = `scale(${zoom})`;
      if (zoom > 1.1) clearInterval(zoomInterval);
    }, 50);

    // animals sequence (guaranteed execution)
    animals.forEach((a, i) => {
      setTimeout(() => {
        a?.classList.add("enter");
      }, 1200 + i * 700);
    });

    // show button last (fixes “stuck feeling”)
    setTimeout(() => {
      rsvpBtn?.classList.add("show");
    }, 4500);
  }

  // ===============================
  // PARALLAX
  // ===============================
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) * 0.01;
    const y = (window.innerHeight / 2 - e.pageY) * 0.01;

    bg.style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;
  });

  // ===============================
  // RSVP + CONFETTI
  // ===============================
  rsvpBtn?.addEventListener("click", () => {
    burst();
    rsvpBtn.innerText = "Welcome to the Safari 🦁";
    rsvpBtn.disabled = true;
  });

  function burst() {
    for (let i = 0; i < 70; i++) {
      const c = document.createElement("div");
      c.className = "confetti";

      c.style.left = Math.random() * 100 + "vw";
      c.style.background = randomColor();
      c.style.animationDuration = (2 + Math.random() * 2) + "s";

      document.body.appendChild(c);

      setTimeout(() => c.remove(), 4000);
    }
  }

  function randomColor() {
    const colors = ["#ffd166", "#06d6a0", "#ef476f", "#118ab2", "#fff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

});
