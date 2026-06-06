window.addEventListener("load", () => {

const startScreen =
document.getElementById("startScreen");

const video =
document.getElementById("bgVideo");

const jungle =
document.getElementById("jungle");

const whoosh =
document.getElementById("whoosh");

const ethan =
document.getElementById("ethan");

const title =
document.getElementById("title");

const rsvp =
document.getElementById("rsvp");

const form =
document.getElementById("rsvpForm");

startScreen.addEventListener("click", async () => {

```
startScreen.style.display = "none";

try{
  await video.play();
}catch(err){}

document.body.classList.add("open");

/* Jungle fade in */

jungle.volume = 0;

jungle.play().catch(()=>{});

let volume = 0;

const fade = setInterval(() => {

  volume += 0.02;

  if(volume >= 0.35){

    volume = 0.35;

    clearInterval(fade);
  }

  jungle.volume = volume;

},120);

/* Whoosh */

setTimeout(() => {

  whoosh.volume = 0.8;
  whoosh.play().catch(()=>{});

},700);

/* Ethan */

setTimeout(() => {
  ethan.classList.add("show");
},2000);

/* Title */

setTimeout(() => {
  title.classList.add("show");
},3200);

/* RSVP */

setTimeout(() => {
  rsvp.classList.add("show");
},4500);
```

});

form.addEventListener("submit", (e) => {

```
e.preventDefault();

document.body.innerHTML = `
  <div style="
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background:#0f2418;
    color:white;
    font-family:Trebuchet MS, Arial;
    text-align:center;
    padding:20px;
  ">
    <h1>🌿 Thank You!</h1>
    <br>
    <p>
      You're officially part of
      Ethan's Wild One Safari Adventure
    </p>
    <br>
    <p>
      See you at Shakey's Matalino!
    </p>
  </div>
`;
```

});

});
