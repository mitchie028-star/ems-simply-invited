console.log("SCRIPT LOADED");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM READY");

  const title = document.querySelector(".title");
  const animals = document.querySelectorAll(".animal");
  const btn = document.querySelector(".rsvp-btn");
  const overlay = document.querySelector(".overlay");

  console.log("FOUND ELEMENTS:", {
    title,
    animals: animals.length,
    btn,
    overlay
  });

  overlay?.classList.add("fade-in");

  setTimeout(() => {
    title?.classList.add("show");
    console.log("TITLE TRIGGERED");
  }, 600);

  animals.forEach((a, i) => {
    setTimeout(() => {
      a?.classList.add("enter");
      console.log("ANIMAL", i, "TRIGGERED");
    }, 1200 + i * 700);
  });

  setTimeout(() => {
    btn?.classList.add("show");
    console.log("BUTTON SHOWN");
  }, 4000);
});
