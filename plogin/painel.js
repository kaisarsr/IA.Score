// parte de chamar o perfil da ia
document.addEventListener("DOMContentLoaded", () => {
  const containerId = "resultados-container"; 
  if (document.getElementById(containerId)) {
    renderizarCards(iaList, containerId);
  }

  const user = localStorage.getItem("usuarioLogado");
  if (user && document.getElementById("userDisplay")) {
    
    document.getElementById("nomeUsuario").textContent = "@" + user;
  }
});


  function handleSearch() {
    const searchValue = document.getElementById("searchInput").value.trim();
  
    if (searchValue) {
      // Redireciona para outra página com o termo na URL
      window.location.href = `resultado.html?busca=${encodeURIComponent(searchValue)}`;
    }
  }
  
  // Atalho para permitir Enter também
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("searchInput");
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleSearch();
      }
      
    });
  });

  function getParametroBusca() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('busca') || '';
}

document.addEventListener("DOMContentLoaded", () => {
  const termo = getParametroBusca().toLowerCase();

  // exibe na tela o termo buscado
  const span = document.getElementById("termo-busca");
  if (span) span.textContent = termo;

  const resultados = iaList.filter(ia =>
    ia.nome.toLowerCase().includes(termo) ||
    ia.descricao.toLowerCase().includes(termo)
  );

  renderizarCards(resultados, "resultados-container");
});

  //---------------PARTICULAS------------//

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

  function carregarParticulas(cor = "#00ffff") {
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


  function verDetalhesIA(nomeIA) {
    localStorage.setItem("iaSelecionada", nomeIA);
  }


  //------------------------------------------[resultado.html]---------------------------------------------------\\

  function gerarEstrelas(qtd) {
    let html = '';
    for (let i = 0; i < 5; i++) {
      if (i < qtd) {
        html += `<img src="../imgs/estrela.png" alt="⭐">`;
      } else {
        html += `<img src="../imgs/semestrela.png" alt="☆">`; // opcional: estrela vazia
      }
    }
    return html;
  }
  

const params = new URLSearchParams(window.location.search);
const termo = params.get('busca')?.toLowerCase() || '';

// Mostra o termo na página
document.getElementById('termo-busca').textContent = termo;


const iaList = [
  {
    nome: "ChatGPT",
    categoria: ["texto", "assistente"],
    plano: "gratis",
    imagem: "../imgs/chatgpt.png",
    descricao: "IA para escrita, conversa e código.",
    estrelas: 5
  },
  {
    nome: "Midjourney",
    categoria: ["imagem"],
    plano: "pago",
    imagem: "../imgs/midjourney.png",
    descricao: "Geração de imagens com prompts.",
    estrelas: 4
  },
  {
    nome: "Copilot",
    categoria: ["programacao", "assistente"],
    plano: "pago",
    imagem: "../imgs/githubcopilot.webp",
    descricao: "Ajuda na programação com IA.",
    estrelas: 4
  },
  {
    nome: "Claude",
    categoria: ["texto", "assistente"],
    plano: "gratis",
    imagem: "../imgs/claude.jfif",
    descricao: "Assistente de IA com foco em segurança e contexto longo.",
    estrelas: 4
  },
  {
    nome: "Notion AI",
    categoria: ["produtividade", "texto"],
    plano: "pago",
    imagem: "../imgs/notion.png",
    descricao: "Gera textos, resumos e automatiza anotações dentro do Notion.",
    estrelas: 3
  },
  {
    nome: "Runway ML",
    categoria: ["video", "imagem"],
    plano: "pago",
    imagem: "../imgs/runway.png",
    descricao: "Transforma texto em vídeos, usado para edição criativa com IA.",
    estrelas: 5
  },

  {
  nome: "Gemini",
  categoria: ["texto", "assistente"],
  plano: "gratis",
  imagem: "../imgs/gemini.png",
  descricao: "IA do Google para respostas, resumos e integração com serviços.",
  estrelas: 4
},
{
  nome: "Poe",
  categoria: ["assistente"],
  plano: "gratis",
  imagem: "../imgs/poe.png",
  descricao: "Agregador de múltiplas IAs como GPT-4, Claude e mais, em um só lugar.",
  estrelas: 4
},
{
  nome: "DALL·E",
  categoria: ["imagem"],
  plano: "pago",
  imagem: "../imgs/dalle.png",
  descricao: "Geração de imagens a partir de texto com qualidade realista.",
  estrelas: 4
},
{
  nome: "Synthesia",
  categoria: ["video"],
  plano: "pago",
  imagem: "../imgs/synthesia.png",
  descricao: "Criação de vídeos com avatares falantes baseados em texto.",
  estrelas: 4
},
{
  nome: "Perplexity",
  categoria: ["texto", "pesquisa"],
  plano: "gratis",
  imagem: "../imgs/perplexity.png",
  descricao: "IA de busca e respostas com fontes e referências em tempo real.",
  estrelas: 5
},
{
  nome: "Fireflies",
  categoria: ["produtividade", "voz"],
  plano: "pago",
  imagem: "../imgs/fireflies.png",
  descricao: "Grava e transcreve reuniões automaticamente com IA.",
  estrelas: 3
},

// falta analisar e colocar imagens ----------------------------------------------------------------------------------



{
  nome: "Gradescope",
  categoria: ["educacao", "produtividade"],
  plano: "pago",
  imagem: "../imgs/gradescope.png",
  descricao: "Plataforma que usa IA para corrigir provas, testes e trabalhos escolares.",
  estrelas: 4
},
{
  nome: "Elicit",
  categoria: ["educacao", "pesquisa"],
  plano: "gratis",
  imagem: "../imgs/elicit.png",
  descricao: "Ajuda estudantes e pesquisadores a resumir artigos e encontrar estudos com IA.",
  estrelas: 5
},
{
  nome: "TutorAI",
  categoria: ["educacao", "assistente"],
  plano: "pago",
  imagem: "../imgs/tutorai.png",
  descricao: "Plataforma onde você digita o que quer aprender e a IA cria aulas personalizadas.",
  estrelas: 4
}

]; 


//chama perfil da ia

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
function renderizarCards(lista, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  lista.forEach(ia => {
    const card = document.createElement("a");
    card.href = "../pIadesc/iadescr.html";
    card.classList.add("card-link");
    card.onclick = () => localStorage.setItem("iaSelecionada", ia.nome.toLowerCase());

    card.innerHTML = `
      <div class="card">
        <img src="${ia.imagem}" alt="${ia.nome}">
        <h4>${ia.nome}</h4>
        <p class="descricao-curta">${ia.descricao}</p>
        <div class="avaliacao-estrelas">${gerarEstrelas(ia.estrelas)}</div>
      </div>
    `;

    container.appendChild(card);
  });
}


// Filtra pelo nome da IA
const resultados = iaList.filter(ia =>
  ia.nome.toLowerCase().includes(termo) ||
  ia.descricao.toLowerCase().includes(termo)
);

const container = document.getElementById('resultados-container');

if (resultados.length > 0) {
  resultados.forEach(ia => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${ia.imagem}" alt="${ia.nome}">
      <h4>${ia.nome}</h4>
      <p class="descricao-curta">${ia.descricao}</p>
      <div class="avaliacao-estrelas">
      ${gerarEstrelas(ia.estrelas)}
    </div>
    `;
    container.appendChild(card);
  });
} else {
  container.innerHTML = '<p>Nenhum resultado encontrado.</p>';
}

// Função que faz funcionar o clique da descrição/busca/filtro
function aplicarFiltro() {
  const categoriasSelecionadas = [...document.querySelectorAll('input[name="categoria"]:checked')]
    .map(el => el.value);

  const planoSelecionado = document.querySelector('input[name="plano"]:checked')?.value;

  const filtradas = iaList.filter(ia => {
    const categoriaOk =
      categoriasSelecionadas.length === 0 ||
      ia.categoria.some(cat => categoriasSelecionadas.includes(cat));

    const planoOk = !planoSelecionado || ia.plano === planoSelecionado;

    return categoriaOk && planoOk;
  });

  // Renderiza usando a função que já cria o <a> clicável
  renderizarCards(filtradas, "resultados-container");
}


document.addEventListener("DOMContentLoaded", () => {
  const termo = localStorage.getItem("termoBusca") || "";
  document.getElementById("termo-busca").textContent = termo;

  const resultados = iaList.filter(ia =>
    ia.nome.toLowerCase().includes(termo.toLowerCase()) ||
    ia.descricao.toLowerCase().includes(termo.toLowerCase())
  );

  renderizarCards(resultados, "resultados-container");
});

function handleSearch() {
  const termo = document.getElementById("searchInput").value;
  if (termo.trim() === "") return;

  localStorage.setItem("termoBusca", termo);
  window.location.href = "resultado.html";
}

function voltarPagina() {
  history.back(); // ou use: history.go(-1);
}









