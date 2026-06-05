window.addEventListener("load", () => {

  const whoosh1 = document.getElementById("whoosh1");
  const whoosh2 = document.getElementById("whoosh2");
  const roar = document.getElementById("roar");

  setTimeout(() => {
    whoosh1.volume = 0.6;
    whoosh1.play().catch(()=>{});
  }, 900);

  setTimeout(() => {
    whoosh2.volume = 0.5;
    whoosh2.play().catch(()=>{});
  }, 4500);

  setTimeout(() => {
    roar.volume = 0.7;
    roar.play().catch(()=>{});
  }, 6000);

});
