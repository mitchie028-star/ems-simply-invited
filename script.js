
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
      title: "🎂 RSVP",
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
   🚀 INIT
====================== */

function init() {
  renderHero();
  renderSections();
}

document.addEventListener("DOMContentLoaded", init);
