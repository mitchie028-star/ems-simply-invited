window.addEventListener("load", () => {

const startScreen = document.getElementById("startScreen");
const video = document.getElementById("bgVideo");
const whoosh = document.getElementById("whoosh");

const ethan = document.getElementById("ethan");
const title = document.getElementById("title");
const rsvp = document.getElementById("rsvp");

const form = document.getElementById("rsvpForm");

if (!startScreen || !video) {
console.error("Missing required elements.");
return;
}

startScreen.addEventListener("click", async () => {

```
/* Hide intro */
startScreen.style.opacity = "0";

setTimeout(() => {
  startScreen.style.display = "none";
}, 500);

/* Play leaf sound */
if (whoosh) {
  whoosh.currentTime = 0;
  whoosh.volume = 0.8;

  try {
    await whoosh.play();
  } catch (err) {
    console.log("Whoosh blocked:", err);
  }
}

/* Open leaves */
document.body.classList.add("open");

/* Start video after leaves animation */
setTimeout(async () => {

  if (whoosh) {
    whoosh.pause();
    whoosh.currentTime = 0;
  }

  try {
    video.muted = false;
    await video.play();
  } catch (err) {
    console.log("Video play error:", err);
  }

}, 2800);

/* Ethan appears */
setTimeout(() => {

  if (ethan) {
    ethan.classList.add("show");
  }

}, 3300);

/* Title appears */
setTimeout(() => {

  if (title) {
    title.classList.add("show");
  }

}, 4200);

/* RSVP appears */
setTimeout(() => {

  if (rsvp) {
    rsvp.classList.add("show");
  }

}, 5200);
```

});

/* RSVP submit */
if (form) {

```
form.addEventListener("submit", (e) => {

  e.preventDefault();

  const card = document.querySelector(".card");

  if (card) {

    card.innerHTML = `
      <h2>🌿 Thank You!</h2>

      <p style="text-align:center;margin-top:10px;">
        You're officially part of
        Ethan's Wild One Safari Adventure!
      </p>

      <p style="text-align:center;margin-top:15px;">
        We can't wait to celebrate with you.
      </p>

      <a
        href="https://maps.google.com/?q=Shakeys+Matalino"
        target="_blank"
        class="map-btn"
        style="margin-top:20px;"
      >
        View Location
      </a>
    `;
  }

});
```

}

});
