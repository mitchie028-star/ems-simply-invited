13console.log("Safari loaded");

let current = 1;
const TOTAL = 6;

function showScene(next) {
document.getElementById("scene" + current).classList.remove("active");
document.getElementById("scene" + next).classList.add("active");
current = next;
}

window.addEventListener("load", () => {

document.addEventListener("click", (e) => {

```
if (["INPUT","TEXTAREA","BUTTON"].includes(e.target.tagName)) return;

if (current < TOTAL) {
  showScene(current + 1);
}
```

});

document.getElementById("submitBtn")
.addEventListener("click", () => {

```
  alert("RSVP Sent!");

}); 26K

});
