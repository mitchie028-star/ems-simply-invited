console.log("Safari loaded");

let current = 1;

function showScene(next) {
  const currentScene = document.getElementById("scene" + current);
  const nextScene = document.getElementById("scene" + next);

  if (!currentScene || !nextScene) {
    console.log("Scene missing:", current, next);
    return;
  }

  currentScene.classList.remove("active");
  nextScene.classList.add("active");

  current = next;
}

window.addEventListener("load", () => {
  document.body.addEventListener("click", (e) => {
    // prevent form elements from triggering scene change
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "TEXTAREA" ||
      e.target.tagName === "BUTTON"
    ) {
      return;
    }

    if (current < 6) {
      showScene(current + 1);
    }
  });

  const btn = document.getElementById("submitBtn");

  if (btn) {
    btn.addEventListener("click", () => {
      const name = document.getElementById("name")?.value || "";
      const guests = document.getElementById("guests")?.value || "";
      const message = document.getElementById("message")?.value || "";

      alert(
        "RSVP Sent!\n\n" +
        "Name: " + name +
        "\nGuests: " + guests +
        "\nMessage: " + message
      );
    });
  }
});
