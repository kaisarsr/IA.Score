// botão
const toggle = document.getElementById("toggleTheme");
const prefersLight = localStorage.getItem("tema") === "claro";

// tema ao carregar
if (prefersLight) {
  document.body.classList.add("light-mode");
  if (toggle) toggle.textContent = "🌞";
  carregarParticulas("#000000");
} else {
  carregarParticulas("#00ffff");
}

// função para alternar tema
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isClaro = document.body.classList.contains("light-mode");

    toggle.textContent = isClaro ? "🌞" : "🌙";
    localStorage.setItem("tema", isClaro ? "claro" : "escuro");

    carregarParticulas(isClaro ? "#000000" : "#00ffff");
  });
}

// função para carregar partículas com cor dinâmica
function carregarParticulas(cor = "#00ffff") {
  if (!document.getElementById("particles-js")) return;

  if (window.pJSDom && window.pJSDom.length) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = [];
  }

  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: cor },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.3, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: cor,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        bounce: false
      }
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false }
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.5 } }
      }
    },
    retina_detect: true
  });
}
