
/* ======================
   👑 CONFIG
====================== */

const config = {
  hero: {
    title: "Princess Aiofee",
    subtitle: "You're invited to a royal celebration 👑",
    video: "assets/intro.mp4"
  },

  sections: [
    {
      title: "👑 Royal Celebration",
      text: "Princess Aiofee is turning 7 years old!",
      image: "assets/baby-level.png"
    },
    {
      title: "📍 Venue",
      text: "Jollibee Puregold Luzon Commonwealth",
      image: "assets/child-level.png"
    },
    {
      title: "📅 Details",
      text: "Saturday, June 14, 2026 • 11:00 AM",
      image: "assets/princess-level.png"
    },
    {
      title: "🎂 RSVP Now",
      text: "Click below to confirm your attendance 👑",
      image: "assets/princess-level.png",
      rsvp: true
    }
  ]
};


/* ======================
   🎬 HERO
====================== */

function renderHero() {
  document.getElementById("heroTitle").innerText = config.hero.title;
  document.getElementById("heroSubtitle").innerText = config.hero.subtitle;
}


/* ======================
   🧱 SECTIONS
====================== */

function renderSections() {
  const container = document.getElementById("sections");
  container.innerHTML = "";

  config.sections.forEach(sec => {
    container.innerHTML += `
      <section class="section">
        <h2>${sec.title}</h2>
        <p>${sec.text}</p>
        <img src="${sec.image}" />

        ${sec.rsvp ? `
          <a class="rsvp-btn" href="https://forms.gle/YOUR_FORM_LINK" target="_blank">
            🎂 RSVP Now
          </a>
        ` : ""}
      </section>
    `;
  });
}


/* ======================
   🎮 LEVEL UNLOCK
====================== */

function observeSections() {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // 🎉 CONFETTI ON LAST SECTION
        if (entry.target === sections[sections.length - 1]) {
          launchConfetti();
        }
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
}


/* ======================
   ✨ CONFETTI
====================== */

function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.background = ["#ff4da6", "#ffd700", "#fff"][Math.floor(Math.random() * 3)];
    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}


/* ======================
   🚀 INIT
====================== */

function init() {
  renderHero();
  renderSections();
  observeSections();
}

document.addEventListener("DOMContentLoaded", init);
