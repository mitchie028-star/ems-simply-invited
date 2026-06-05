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

  // START AUTOMATICALLY
  show(0);
  setTimeout(next, 2500);

  // RSVP ONLY LOGIC
  const btn = document.getElementById("btn");

  btn?.addEventListener("click", () => {
    btn.innerText = "Sent!";
    btn.disabled = true;
  });

});
