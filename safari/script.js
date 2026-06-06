const whoosh =
document.getElementById("whoosh");

startScreen.addEventListener("click", async () => {

startScreen.style.display = "none";

whoosh.currentTime = 0;
whoosh.volume = 0.8;

whoosh.play().catch(()=>{});

document.body.classList.add("open");

setTimeout(async () => {

```
whoosh.pause();

try{
  await video.play();
}catch(err){
  console.log(err);
}
```

},2800);

});
