// ===============================
// Safari Invitation Script
// Cinematic Interaction Layer
// ===============================

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------
  // ELEMENTS
  // -------------------------------
  const bg = document.querySelector(".bg");
  const overlay = document.querySelector(".overlay");
  const title = document.querySelector(".title");
  const animals = document.querySelectorAll(".animal");
  const rsvpBtn = document.querySelector(".rsvp-btn");

  // -------------------------------
  // INITIAL ANIMATION SEQUENCE
  // -------------------------------
  setTimeout(() => {
    overlay.classList.add("fade-in");
  }, 500);

  setTimeout(() => {
    title.classList.add("show");
  }, 1200);

  // -------------------------------
  // ANIMAL ENTRANCE ANIMATION
  // -------------------------------
  animals.forEach((animal, index) => {
    setTimeout(() => {
      animal.classList.add("enter");
    }, 1800 + index * 600);
  });

  // -------------------------------
  // BACKGROUND PARALLAX EFFECT
  // -------------------------------
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) * 0.01;
    const y = (window.innerHeight / 2 - e.pageY) * 0.01;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });

  // -------------------------------
  // RSVP CONFETTI BURST
  // -------------------------------
  rsvpBtn?.addEventListener("click", () => {
    createConfettiBurst();
    rsvpBtn.innerText = "See you on Safari! 🦁";
    rsvpBtn.disabled = true;
  });

  // -------------------------------
  // CONFETTI FUNCTION
  // -------------------------------
  function createConfettiBurst() {
    for (let i = 0; i < 60; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");

      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor = randomColor();
      confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  }

  function randomColor() {
    const colors = ["#ffd166", "#06d6a0", "#ef476f", "#118ab2", "#ffffff"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

});
