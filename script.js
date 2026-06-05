/* =========================
   🌟 CONFIG (EDIT THIS ONLY)
========================= */

const config = {
  theme: "princess", // "princess" | "business"

  hero: {
    title: "My Landing Page",
    subtitle: "Built with a simple theme system",
    video: "assets/intro.mp4"
  },

  sections: [
    {
      title: "About",
      text: "Describe your business or story here",
      image: "assets/img1.png"
    },
    {
      title: "Services",
      text: "What you offer",
      image: "assets/img2.png"
    },
    {
      title: "Contact",
      text: "Get in touch with us",
      image: "assets/img3.png"
    }
  ]
};


/* =========================
   🎮 RENDER ENGINE
========================= */

function renderHero() {
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const video = document.getElementById("bgVideo");

  if (title) title.innerText = config.hero.title;
  if (subtitle) subtitle.innerText = config.hero.subtitle;
  if (video) video.src = config.hero.video;
}

function renderSections() {
  const container = document.getElementById("sections");

  if (!container) return;

  container.innerHTML = "";

  config.sections.forEach((sec) => {
    const section = document.createElement("section");
    section.className = "section";

    section.innerHTML = `
      <h2>${sec.title}</h2>
      <p>${sec.text}</p>
      <img src="${sec.image}" />
    `;

    container.appendChild(section);
  });
}


/* =========================
   👑 THEME SYSTEM
========================= */

function applyTheme() {
  const body = document.body;

  body.classList.remove("princess", "business");

  if (config.theme === "princess") {
    body.classList.add("princess");
  }

  if (config.theme === "business") {
    body.classList.add("business");
  }
}


/* =========================
   🚀 INIT APP
========================= */

function init() {
  renderHero();
  renderSections();
  applyTheme();
}

document.addEventListener("DOMContentLoaded", init);
