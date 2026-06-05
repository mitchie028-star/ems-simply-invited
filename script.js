document.addEventListener("DOMContentLoaded", function () {

  const config = {
    hero: {
      title: "Princess Aiofee",
      subtitle: "You are invited to a royal celebration"
    },

    sections: [
      {
        title: "Royal Celebration",
        text: "Princess Aiofee is turning 7 years old.",
        image: "assets/baby-level.png"
      },
      {
        title: "Venue",
        text: "Jollibee Puregold Luzon Commonwealth",
        image: "assets/child-level.png"
      },
      {
        title: "Details",
        text: "Saturday, June 14, 2026 - 11:00 AM",
        image: "assets/princess-level.png"
      },
      {
        title: "RSVP",
        text: "Confirm your attendance below",
        image: "assets/princess-level.png",
        rsvp: true
      }
    ]
  };

  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const sectionsContainer = document.getElementById("sections");

  heroTitle.textContent = config.hero.title;
  heroSubtitle.textContent = config.hero.subtitle;

  sectionsContainer.innerHTML = "";

  config.sections.forEach(section => {
    const el = document.createElement("section");
    el.className = "section";

    el.innerHTML = `
      <h2>${section.title}</h2>
      <p>${section.text}</p>
      <img src="${section.image}" />
      ${section.rsvp ? `<a class="rsvp-btn" href="#" target="_blank">RSVP</a>` : ""}
    `;

    sectionsContainer.appendChild(el);
  });

});
