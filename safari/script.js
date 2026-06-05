console.log("Safari loaded");

let current = 1;

function showScene(next) {

document
.getElementById("scene" + current)
.classList.remove("active");

document
.getElementById("scene" + next)
.classList.add("active");

current = next;
}

window.addEventListener("load", () => {

document.body.addEventListener("click", (e) => {

```
// Prevent inputs and buttons from changing scenes
if (
  e.target.tagName === "INPUT" ||
  e.target.tagName === "TEXTAREA" ||
  e.target.tagName === "BUTTON"
) {
  return;
}

// Advance to next scene
if (current < 6) {
  showScene(current + 1);
}
```

});

// RSVP button
document
.getElementById("submitBtn")
.addEventListener("click", () => {

```
  const name =
    document.getElementById("name").value;

  const guests =
    document.getElementById("guests").value;

  const message =
    document.getElementById("message").value;

  alert(
    "RSVP Sent!\n\n" +
    "Name: " + name +
    "\nGuests: " + guests +
    "\nMessage: " + message
  );

});

});

