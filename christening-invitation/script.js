window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  const hero = document.querySelector(".hero");

  // Step 1: open clouds
  setTimeout(() => {
    intro.classList.add("open");
  }, 500);

  // Step 2: reveal hero
  setTimeout(() => {
    intro.classList.add("hide");
    hero.classList.remove("hidden");
  }, 3200);

});
