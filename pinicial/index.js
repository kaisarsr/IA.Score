if (!document.getElementById("particles-js")) {
  const div = document.createElement("div");
  div.id = "particles-js";
  document.body.prepend(div);
}

if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00ffff" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.3, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffff",
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

function openLogin() {
  document.getElementById('loginModal').style.display = 'block';
}

function openRegistro() {
  closeLogin();
  document.getElementById('registroModal').style.display = 'block';
}

function closeLogin() {
  document.getElementById('loginModal').style.display = 'none';
}

function closeRegistro() {
  document.getElementById('registroModal').style.display = 'none';
}

// Fecha modais ao clicar fora
window.onclick = function (event) {
  const loginModal = document.getElementById('loginModal');
  const registroModal = document.getElementById('registroModal');
  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === registroModal) registroModal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector('.login-button');
  const registroBtn = document.querySelector('.registro-button');

  loginBtn.addEventListener('click', function () {
    const gmail = document.getElementById('login-gmail').value;
    const pass = document.getElementById('login-password').value;

    if (gmail && pass) {
      loginBtn.textContent = "Carregando...";
      loginBtn.disabled = true;
      setTimeout(() => {
        window.location.href = "../plogin/painel.html";
      }, 1500);
    } else {
      alert("Preencha todos os campos para continuar.");
    }
  });

  registroBtn.addEventListener('click', function () {
    const user = document.getElementById('registro-user').value;
    const gmail = document.getElementById('registro-gmail').value;
    const pass = document.getElementById('registro-password').value;
  
    if (user && gmail && pass) {
      registroBtn.textContent = "Registrando...";
      registroBtn.disabled = true;
  
      // Salva no localStorage
      localStorage.setItem('usuarioLogado', user);
  
      setTimeout(() => {
        window.location.href = "../plogin/painel.html";
      }, 1500);
    } else {
      alert("Preencha todos os campos para registrar.");
    }
  });
});
