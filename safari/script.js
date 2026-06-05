// ===============================
// Safari Invitation — Cinematic V2
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // ELEMENTS
  // -------------------------------
  const bg = document.querySelector(".bg");
  const overlay = document.querySelector(".overlay");
  const title = document.querySelector(".title");
  const animals = document.querySelectorAll(".animal");
  const rsvpBtn = document.querySelector(".rsvp-btn");

  // Optional ambient audio (if you add it in HTML)
  const audio = document.querySelector("audio");
  let audioEnabled = false;

  // -------------------------------
  // CINEMATIC START (soft fade-in)
  // -------------------------------
  setTimeout(() => overlay?.classList.add("fade-in"), 400);
  setTimeout(() => title?.classList.add("show"), 1200);

  // -------------------------------
  // CAMERA ZOOM (slow cinematic push-in)
  // -------------------------------
  let zoom = 1.02;
  const zoomInterval = setInterval(() => {
    zoom += 0.0008;
    if (bg) bg.style.transform = `scale(${zoom})`;
    if (zoom > 1.08) clearInterval(zoomInterval);
  }, 50);

  // -------------------------------
  // ANIMAL ENTRANCE SEQUENCE (timed beats)
  // -------------------------------
  const animalTimings = [
    { delay: 1600, name: "lion" },
    { delay: 2600, name: "elephant" },
    { delay: 3400, name: "giraffe" },
    { delay: 4200, name: "bird" }
  ];

  animalTimings.forEach((t, i) => {
    setTimeout(() => {
      animals[i]?.classList.add("enter");
      triggerDustBurst();
      pulseLight();
    }, t.delay);
  });

  // -------------------------------
  // LIGHT PULSE (CSS hook trigger)
  // -------------------------------
  function pulseLight() {
    document.body.classList.add("light-pulse");
    setTimeout(() => document.body.classList.remove("light-pulse"), 600);
  }

  // -------------------------------
  // FLOATING DUST PARTICLES
  // -------------------------------
  function createDustParticle() {
    const p = document.createElement("div");
    p.className = "dust";

    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";
    p.style.animationDuration = 3 + Math.random() * 5 + "s";

    document.body.appendChild(p);

    setTimeout(() => p.remove(), 8000);
  }

  function startDust() {
    setInterval(() => {
      createDustParticle();
    }, 250);
  }

  startDust();

  function triggerDustBurst() {
    for (let i = 0; i < 10; i++) createDustParticle();
  }

  // -------------------------------
  // PARALLAX CAMERA MOVEMENT
  // -------------------------------
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) * 0.015;
    const y = (window.innerHeight / 2 - e.pageY) * 0.015;

    if (bg) {
      bg.style.transform += ` translate(${x}px, ${y}px)`;
    }
  });

  // -------------------------------
  // TOUCH / MOBILE INTERACTION
  // -------------------------------
  document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];

    const ripple = document.createElement("div");
    ripple.className = "ripple";

    ripple.style.left = touch.clientX + "px";
    ripple.style.top = touch.clientY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 1000);
  });

  // -------------------------------
  // AMBIENT SOUND TOGGLE
  // -------------------------------
  rsvpBtn?.addEventListener("click", () => {

    // Confetti burst (kept from V1 but refined)
    createConfettiBurst();

    // Toggle audio if present
    if (audio && !audioEnabled) {
      audio.play().catch(() => {});
      audioEnabled = true;
    }

    rsvpBtn.innerText = "Welcome to the Safari 🦁";
    rsvpBtn.disabled = true;
  });

  // -------------------------------
  // CONFETTI SYSTEM (refined)
  // -------------------------------
  function createConfettiBurst() {
    for (let i = 0; i < 80; i++) {
      const c = document.createElement("div");
      c.className = "confetti";

      c.style.left = Math.random() * 100 + "vw";
      c.style.backgroundColor = randomColor();
      c.style.animationDuration = 2 + Math.random() * 2.5 + "s";
      c.style.transform = `rotate(${Math.random() * 360}deg)`;

      document.body.appendChild(c);

      setTimeout(() => c.remove(), 5000);
    }
  }

  function randomColor() {
    const colors = ["#ffd166", "#06d6a0", "#ef476f", "#118ab2", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

});
