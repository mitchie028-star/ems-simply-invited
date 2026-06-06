window.addEventListener("load", () => {
  const startScreen = document.getElementById("startScreen");
  const video = document.getElementById("bgVideo");
  const whoosh = document.getElementById("whoosh");
  const form = document.getElementById("rsvpForm");

  startScreen.addEventListener("click", async () => {
    // 1. Hide the dark intro start screen overlay
    startScreen.style.opacity = "0";
    setTimeout(() => startScreen.style.display = "none", 500);

    // 2. Play the jungle environment transition sound
    if (whoosh) {
      whoosh.currentTime = 0;
      whoosh.play().catch((err) => console.log("Audio play blocked:", err));
    }

    // 3. Trigger Leaf Curtain split-open animation instantly
    document.body.classList.add("open-leaves");

    // 4. Start the animal background video right as leaves pull back
    try {
      video.muted = true; // Required to bypass strict mobile autoplay rules
      await video.play();
      setTimeout(() => { video.muted = false; }, 300); // Unmute cleanly once running
    } catch (e) {
      console.log("Video playback interrupted:", e);
    }

    // 5. Ethan pops up from the bottom (0.8 seconds after leaves begin splitting)
    setTimeout(() => {
      document.body.classList.add("reveal-ethan");
    }, 800);

    // 6. Main Safari Adventure Text fades in from top 
    setTimeout(() => {
      document.body.classList.add("reveal-title");
    }, 1800);

    // 7. The RSVP details interactive form slides up securely
    setTimeout(() => {
      document.body.classList.add("show-rsvp");
    }, 2800);
  });

  // Handle Dynamic RSVP Form Submission Response
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const card = document.querySelector(".card");
      card.innerHTML = `
        <h2>🌿 Thank You!</h2>
        <p style="text-align:center; margin-top:10px; line-height: 1.4;">
          You're officially part of Ethan's Wild One Safari Adventure!
        </p>
        <p style="text-align:center; margin-top:15px; color:#40916c; font-weight:bold;">
          See you at the camp! 🦁🦒
        </p>
      `;
    });
  }
});
