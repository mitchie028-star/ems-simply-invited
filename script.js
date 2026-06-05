
/* ======================
   🌟 CONFIG (EDIT ONLY THIS)
====================== */

const config = {
  theme: "princess",

  hero: {
    title: "My Landing Page Builder",
    subtitle: "Switch themes instantly",
    video: "assets/intro.mp4"
  },

  sections: [
    {
      title: "About",
      text: "Describe your service or story here",
      image: "assets/img1.png"
    },
    {
      title: "Services",
      text: "What you offer your clients",
      image: "assets/img2.png"
    },
    {
      title: "Contact",
      text: "Get in touch with us",
      image: "assets/img3.png"
    }
  ]
};

/* ======================
   🚀 RENDER SYSTEM
====================== */

function renderHero() {
  document.getElementById("heroTitle").innerText = config.hero.title;
  document.getElementById("heroSubtitle").innerText = config.hero.subtitle;
}

function renderSections() {
  const container = document.getElementById("sections");
  container.innerHTML = "";

  config.sections.forEach(sec => {
    container.innerHTML += `
      <section class="section">
        <h2>${sec.title}</h2>
        <p>${sec.text}</p>
        <img src="${sec.image}" />
      </section>
    `;
  });
}

/* ======================
   🎨 THEME SYSTEM
====================== */

function applyTheme() {
  document.body.classList.remove("princess", "business");

  if (config.theme === "princess") {
    document.body.classList.add("princess");
  } else {
    document.body.classList.add("business");
  }
}

/* ======================
   🎮 THEME SWITCHER
====================== */

function setTheme(theme) {
  config.theme = theme;
  applyTheme();
}

/* ======================
   🚀 INIT APP
====================== */

function init() {
  renderHero();
  renderSections();
  applyTheme();
}

document.addEventListener("DOMContentLoaded", init);
