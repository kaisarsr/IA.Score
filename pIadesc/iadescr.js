

document.addEventListener("DOMContentLoaded", () => {
    const nomeIA = localStorage.getItem("iaSelecionada");
    const info = dadosIA[nomeIA];
    

    if (info) {
      document.getElementById("tituloIA").textContent = info.titulo;
      document.getElementById("imagemIA").src = info.imagem;
      document.getElementById("descricaoIA").textContent = info.descricao;
      document.getElementById("linkIA").href = info.link;
      

    const categoriaContainer = document.getElementById("categoriaIA");
        categoriaContainer.innerHTML = ""; 

        info.categoria.forEach(cat => {
      const span = document.createElement("span");
        span.className = "categoria-tag categoria-" + cat.toLowerCase(); 
        span.textContent = cat;
  categoriaContainer.appendChild(span);

  
});

      document.getElementById("notaIA").textContent = `Nota: ${info.estrelas}/5`;
      document.getElementById("avaliacoesIA").textContent = "avaliações: " + info.avaliacoes;
      document.getElementById("estrelasIA").innerHTML = gerarEstrelas(info.estrelas);
      
    } else {
      document.getElementById("tituloIA").textContent = "IA não encontrada";
      document.getElementById("descricaoIA").textContent = "Verifique se você acessou essa página corretamente.";
    }
  });



  
  // Atalho para permitir Enter também
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleSearch();
      }
      
    });
  });

  
  function gerarEstrelas(qtd) {
    const total = 5; // número total de estrelas
    let estrelasHTML = "";
  
    for (let i = 0; i < total; i++) {
      if (i < qtd) {
        estrelasHTML += `<img src="../imgs/estrela.png" alt="Estrela cheia" class="estrela-icon">`;
      } else {
        estrelasHTML += `<img src="../imgs/semestrela.png" alt="Estrela vazia" class="estrela-icon">`;
      }
    }
  
    return estrelasHTML;
  }
  
 

  
  

  
  

  //----------------PARTICULAS---------------//

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

  function verDetalhesIA(nomeIA) {
    localStorage.setItem("iaSelecionada", nomeIA);
  }