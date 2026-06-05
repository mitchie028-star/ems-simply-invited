console.log("Safari script loaded");

let current = 1;
const TOTAL_SCENES = 6;

// Switch scenes safely
function showScene(next) {
  const currentScene = document.getElementById("scene" + current);
  const nextScene = document.getElementById("scene" + next);

  console.log("Switching:", current, "→", next);

  if (!currentScene) {
    console.error("Missing current scene:", current);
    return;
  }

  if (!nextScene) {
    console.error("Missing next scene:", next);
    return;
  }

  currentScene.classList.remove("active");
  nextScene.classList.add("active");

  current = next;
}

// Wait for full page load
window.addEventListener("load", () => {
  console.log("Page loaded, listeners attached");

  // GLOBAL CLICK TO ADVANCE SCENE
  document.addEventListener("click", (e) => {
    console.log("Click detected on:", e.target.tagName);

    // Prevent form elements from triggering scene change
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.tagName === "BUTTON"
    ) {
      return;
    }

    if (current < TOTAL_SCENES) {
      showScene(current + 1);
    }
  });

  // RSVP BUTTON
  const btn = document.getElementById("submitBtn");

  if (!btn) {
    console.warn("submitBtn not found");
    return;
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameEl = document.getElementById("name");
    const guestsEl = document.getElementById("guests");
    const messageEl = document.getElementById("message");

    const name = nameEl ? nameEl.value : "";
    const guests = guestsEl ? guestsEl.value : "";
    const message = messageEl ? messageEl.value : "";

    alert(
      "RSVP Sent!\n\n" +
      "Name: " + name +
      "\nGuests: " + guests +
      "\nMessage: " + message
    );
  });
});
