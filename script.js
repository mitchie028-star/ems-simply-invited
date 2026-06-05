
console.log("SCRIPT LOADED");

const config = {
  hero: {
    title: "Princess Aiofee",
    subtitle: "You're invited to a royal celebration 👑"
  },

  sections: [
    {
      title: "Section 1",
      text: "Test content 1",
      image: "assets/baby-level.png"
    },
    {
      title: "Section 2",
      text: "Test content 2",
      image: "assets/child-level.png"
    }
  ]
};

function renderHero() {
  console.log("renderHero running");

  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");

  console.log("hero elements:", title, subtitle);

  if (title) title.textContent = config.hero.title;
  if (subtitle) subtitle.textContent = config.hero.subtitle;
}

function renderSections() {
  console.log("renderSections running");

  const container = document.getElementById("sections");

  console.log("sections container:", container);

  if (!container) {
    console.error("❌ #sections NOT FOUND in HTML");
    return;
  }

  container.innerHTML = "";

  config.sections.forEach(sec => {
    const div = document.createElement("section");
    div.className = "section";

    div.innerHTML = `
      <h2>${sec.title}</h2>
      <p>${sec.text}</p>
    `;

    container.appendChild(div);
  });

  console.log("sections rendered:", container.children.length);
}

function init() {
  console.log("INIT START");

  renderHero();
  renderSections();

  console.log("INIT DONE");
}

document.addEventListener("DOMContentLoaded", init);
