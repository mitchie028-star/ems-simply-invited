
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
      text: "Tap below to confirm attendance",
      image: "assets/princess-level.png",
      rsvp: true
    }
  ]
};

function renderHero() {
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");

  if (title) title.textContent = config.hero.title;
  if (subtitle) subtitle.textContent = config.hero.subtitle;
}

function renderSections() {
  const container = document.getElementById("sections");

  if (!container) {
    console.error("Missing #sections in HTML");
    return;
  }

  container.innerHTML = "";

  config.sections.forEach(sec => {
    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `
      <h2>${sec.title}</h2>
      <p>${sec.text}</p>
      <img src="${sec.image}" />

      ${sec.rsvp ? `
        <a class="rsvp-btn" href="https://forms.gle/YOUR_FORM_LINK" target="_blank">
          🎂 RSVP Now
        </a>
      ` : ""}
    `;

    container.appendChild(section);
  });
}

function init() {
  renderHero();
  renderSections();
}

document.addEventListener("DOMContentLoaded", init);
