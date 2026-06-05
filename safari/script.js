document.addEventListener("DOMContentLoaded", () => {

  const bg = document.querySelector(".bg");
  const overlay = document.querySelector(".overlay");
  const title = document.querySelector(".title");
  const animals = document.querySelectorAll(".animal");
  const rsvpBtn = document.querySelector(".rsvp-btn");

  let zoom = 1.05;
  let x = 0, y = 0;

  // =========================
  // AUTO START (SAFE)
  // =========================
  overlay.classList.add("fade-in");

  setTimeout(() => {
    title.classList.add("show");
  }, 600);

  // animals sequence
  animals.forEach((a, i) => {
    setTimeout(() => {
      a.classList.add("enter");
    }, 1400 + i * 700);
  });

  // button
  setTimeout(() => {
    rsvpBtn.classList.add("show");
  }, 4500);

  // =========================
  // SAFE BACKGROUND RENDER LOOP
  // =========================
  function render() {
    bg.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`;
    requestAnimationFrame(render);
  }
  render();

  // zoom slowly
  setInterval(() => {
    zoom += 0.0005;
  }, 50);

  // mouse movement
  document.addEventListener("mousemove", (e) => {
    x = (window.innerWidth / 2 - e.pageX) * 0.01;
    y = (window.innerHeight / 2 - e.pageY) * 0.01;
  });

  // RSVP
  rsvpBtn.addEventListener("click", () => {
    rsvpBtn.innerText = "Welcome to the Safari 🦁";
    rsvpBtn.disabled = true;
  });

});
