document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // GET ALL SCENES
  // =========================
  const scenes = document.querySelectorAll(".scene");
  const animals = document.querySelectorAll(".animal-area img");
  const btn = document.getElementById("submitBtn");

  let currentScene = 0;

  // =========================
  // SHOW SCENE FUNCTION
  // =========================
  function showScene(index) {
    scenes.forEach((scene, i) => {
      scene.classList.toggle("active", i === index);
    });
  }

  // =========================
  // NEXT SCENE
  // =========================
  function nextScene() {
    currentScene++;

    if (currentScene < scenes.length) {
      showScene(currentScene);
      runSceneLogic(currentScene);
    }
  }

  // =========================
  // SCENE LOGIC CONTROLLER
  // =========================
  function runSceneLogic(i) {

    // Scene 1 → auto proceed (no tap dependency)
    if (i === 0) {
      setTimeout(nextScene, 2000);
    }

    // Scene 2 → explorer reveal
    if (i === 1) {
      setTimeout(nextScene, 2500);
    }

    // Scene 3 → animals animation
    if (i === 2) {

      animals.forEach((animal, idx) => {
        setTimeout(() => {
          animal.classList.add("show");
        }, idx * 300);
      });

      setTimeout(nextScene, 3500);
    }

    // Scene 4 → invite reveal
    if (i === 3) {
      setTimeout(nextScene, 2500);
    }

    // Scene 5 → map reveal
    if (i === 4) {
      setTimeout(nextScene, 2500);
    }

    // Scene 6 → RSVP (STOP HERE)
    if (i === 5) {

      if (btn) {
        btn.addEventListener("click", () => {
          btn.innerText = "Sent! 🦁";
          btn.disabled = true;
        });
      }
    }
  }

  // =========================
  // START EVERYTHING
  // =========================
  function start() {
    showScene(0);
    runSceneLogic(0);
  }

  start();

});
