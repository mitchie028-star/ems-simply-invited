const config = {
  theme: {
    primary: "#ff4da6",
    secondary: "#ffd700"
  },

  hero: {
    title: "My Landing Page",
    subtitle: "Built with simple page builder system",
    video: "assets/intro.mp4"
  },

  sections: [
    {
      title: "About",
      text: "Describe your business here",
      image: "assets/img1.png"
    },
    {
      title: "Services",
      text: "What you offer",
      image: "assets/img2.png"
    },
    {
      title: "Contact",
      text: "Get in touch",
      image: "assets/img3.png"
    }
  ]
};

function renderPage() {
  document.getElementById("heroTitle").innerText = config.hero.title;
  document.getElementById("heroSubtitle").innerText = config.hero.subtitle;

  const container = document.getElementById("sections");

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

renderPage();
