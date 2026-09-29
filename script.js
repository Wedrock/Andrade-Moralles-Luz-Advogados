const numeroWhatsapp = "5584987357317";

const modelos = {
  pilares: (item) => `
    <article class="pilar ${item.escuro ? "pilar--escuro" : ""}">
      <span class="pilar__icone material-symbols-outlined">
        ${item.icone}
      </span>

      <div>
        <h3>${item.titulo}</h3>
        <p>${item.texto}</p>
      </div>
    </article>
  `,

  areas: (item) => `
    <article class="cartao-area">
      <span class="cartao-area__icone material-symbols-outlined">
        ${item.icone}
      </span>

      <h3>${item.titulo}</h3>
      <p>${item.texto}</p>

      <a href="#contato">
        ${item.rotulo}
        <span class="material-symbols-outlined">chevron_right</span>
      </a>
    </article>
  `,

  socios: (item) => `
    <article class="socio">
      <img
        src="${item.foto}"
        alt="${item.nome}"
        loading="lazy"
      >

      <div class="socio__cartao">
        <h3>${item.nome}</h3>
        <span>${item.cargo}</span>

        <div>
          <a href="tel:${item.numero.slice(2)}">
            <span class="material-symbols-outlined">call</span>
            ${item.telefone}
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=${item.numero}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp de ${item.nome}"
          >
            <span class="material-symbols-outlined">chat</span>
          </a>
        </div>
      </div>
    </article>
  `,

  artigos: (item) => `
    <article class="artigo">
      <div
        class="artigo__capa"
        style="background-image: url('${item.capa}')"
      >
        <span>Leia no blog</span>
      </div>

      <div class="artigo__corpo">
        <small>${item.data} • ${item.autor}</small>
        <h3>${item.titulo}</h3>
        <a href="#contato">Leia mais →</a>
      </div>
    </article>
  `
};

const destinos = {
  pilares: "pilares",
  areas: "listaAreas",
  socios: "listaSocios",
  artigos: "listaArtigos"
};

const listas = {
  pilares,
  areas: areasDeAtuacao,
  socios,
  artigos
};

for (const nome in destinos) {
  document.getElementById(destinos[nome]).innerHTML =
    listas[nome].map(modelos[nome]).join("");
}

const janelaSocios = document.querySelector(".socios__janela");
const faixaSocios = document.getElementById("listaSocios");
const controleAnterior = document.querySelector(
  ".socios__controle--anterior"
);
const controleProximo = document.querySelector(
  ".socios__controle--proximo"
);
const carrosselSocios = document.querySelector(".socios__carrossel");

const prefereMovimentoReduzido = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const cartoesOriginais = Array.from(faixaSocios.children);

cartoesOriginais.forEach((cartao) => {
  const copia = cartao.cloneNode(true);

  copia.setAttribute("aria-hidden", "true");

  copia.classList.remove("revelar", "visivel");
  copia.style.removeProperty("--atraso");

  faixaSocios.appendChild(copia);
});

let distanciaCicloSocios = 0;

const medirCicloSocios = () => {
  const primeiraCopia =
    faixaSocios.children[cartoesOriginais.length];

  distanciaCicloSocios =
    primeiraCopia.getBoundingClientRect().left -
    faixaSocios.firstElementChild.getBoundingClientRect().left;

  if (janelaSocios.scrollLeft >= distanciaCicloSocios) {
    janelaSocios.scrollLeft %= distanciaCicloSocios;
  }
};

medirCicloSocios();

janelaSocios.classList.toggle(
  "socios__janela--automatico",
  !prefereMovimentoReduzido
);

const moverCarrosselSocios = (direcao) => {
  const primeiroCartao = faixaSocios.querySelector(".socio");

  const intervalo =
    Number.parseFloat(
      window.getComputedStyle(faixaSocios).gap
    ) || 0;

  const movimento =
    primeiroCartao.getBoundingClientRect().width + intervalo;

  let destino =
    janelaSocios.scrollLeft + direcao * movimento;

  if (destino < 0) {
    destino += distanciaCicloSocios;
  }

  janelaSocios.scrollTo({
    left: destino,
    behavior: prefereMovimentoReduzido ? "auto" : "smooth"
  });
};

let ultimoQuadroSocios = 0;
let pausaAteSocios = 0;

const pausarCarrosselSocios = () => {
  pausaAteSocios = performance.now() + 4000;
};

const animarCarrosselSocios = (tempo) => {
  if (!ultimoQuadroSocios) {
    ultimoQuadroSocios = tempo;
  }

  const intervalo = Math.min(
    tempo - ultimoQuadroSocios,
    40
  );

  ultimoQuadroSocios = tempo;

  if (
    !document.hidden &&
    !carrosselSocios.matches(":hover") &&
    !carrosselSocios.contains(document.activeElement) &&
    tempo >= pausaAteSocios
  ) {
    janelaSocios.scrollLeft += intervalo * 0.07;

    if (janelaSocios.scrollLeft >= distanciaCicloSocios) {
      janelaSocios.scrollLeft -= distanciaCicloSocios;
    }
  }

  window.requestAnimationFrame(animarCarrosselSocios);
};

controleAnterior.addEventListener("click", () => {
  moverCarrosselSocios(-1);
});

controleProximo.addEventListener("click", () => {
  moverCarrosselSocios(1);
});

carrosselSocios.addEventListener(
  "pointerdown",
  pausarCarrosselSocios
);

janelaSocios.addEventListener(
  "wheel",
  pausarCarrosselSocios,
  { passive: true }
);

janelaSocios.addEventListener(
  "touchstart",
  pausarCarrosselSocios,
  { passive: true }
);

window.addEventListener("resize", medirCicloSocios);

if (!prefereMovimentoReduzido) {
  window.requestAnimationFrame(animarCarrosselSocios);
}

if ("IntersectionObserver" in window && !prefereMovimentoReduzido) {
  const animarContagem = (numero) => {
    if (!numero || numero.dataset.contagemIniciada) {
      return;
    }

    const textoFinal = numero.textContent.trim();
    const partes = textoFinal.match(/^([^\d]*)(\d+)(.*)$/);

    if (!partes) {
      return;
    }

    const [, prefixo, digitos, sufixo] = partes;
    const valorFinal = Number(digitos);
    const inicio = performance.now();
    const duracao = 1400;

    numero.dataset.contagemIniciada = "true";

    const atualizarContagem = (tempo) => {
      const progresso = Math.min(
        (tempo - inicio) / duracao,
        1
      );

      const valorAtual = Math.floor(
        valorFinal * (1 - (1 - progresso) ** 3)
      );

      numero.textContent =
        progresso === 1
          ? textoFinal
          : `${prefixo}${valorAtual}${sufixo}`;

      if (progresso < 1) {
        window.requestAnimationFrame(atualizarContagem);
      }
    };

    window.requestAnimationFrame(atualizarContagem);
  };

  const seletoresAnimados =
    ".pilar, .historia .etiqueta, .historia h2, " +
    ".historia p, .historia .botao, .historia__fundadores, " +
    ".numeros__lista li, .secao__cabecalho, .cartao-area, " +
    ".socio:not([aria-hidden='true']), .artigo, .formulario, .sede";

  const elementosAnimados =
    document.querySelectorAll(seletoresAnimados);

  const gradesComAtraso = [
    "pilares__grade",
    "areas__grade",
    "socios__grade",
    "artigos__grade",
    "numeros__lista"
  ];

  elementosAnimados.forEach((elemento) => {
    elemento.classList.add("revelar");

    if (
      gradesComAtraso.some((classe) =>
        elemento.parentElement.classList.contains(classe)
      )
    ) {
      const indice =
        Array.from(elemento.parentElement.children)
          .indexOf(elemento);

      elemento.style.setProperty(
        "--atraso",
        `${Math.min(indice, 3) * 90}ms`
      );
    }
  });

  document.documentElement.classList.add("animacoes");

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");

          if (
            entrada.target.matches(".numeros__lista li")
          ) {
            animarContagem(
              entrada.target.querySelector("strong")
            );
          }

          observer.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -32px 0px"
    }
  );

  elementosAnimados.forEach((elemento) => {
    observador.observe(elemento);
  });
}

const cabecalho = document.querySelector(".cabecalho");

cabecalho
  .querySelector(".cabecalho__botao")
  .addEventListener("click", () => {
    cabecalho.classList.toggle("cabecalho--aberto");
  });

cabecalho
  .querySelectorAll("nav a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      cabecalho.classList.remove("cabecalho--aberto");
    });
  });

document
  .getElementById("formularioContato")
  .addEventListener("submit", (evento) => {
    evento.preventDefault();

    const campos = Object.fromEntries(
      new FormData(evento.target)
    );

    const texto =
      `Olá! Meu nome é ${campos.nome}.\n` +
      `Área: ${campos.area}\n` +
      `Telefone: ${campos.telefone}\n` +
      `E-mail: ${campos.email}\n\n` +
      `${campos.mensagem}`;

    window.open(
      `https://api.whatsapp.com/send?phone=${numeroWhatsapp}` +
      `&text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener"
    );

    evento.target.reset();
  });

