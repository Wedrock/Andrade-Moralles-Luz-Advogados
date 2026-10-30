const numeroWhatsapp = "5584987357317";

const prefereMovimentoReduzido = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Duplica os cartões para o carrossel infinito. As cópias continuam
// clicáveis com o mouse, mas ficam fora do Tab e dos leitores de tela.
const duplicarCartoes = (faixa) => {
  const originais = Array.from(faixa.children);

  originais.forEach((cartao) => {
    const copia = cartao.cloneNode(true);

    copia.setAttribute("aria-hidden", "true");
    copia.querySelectorAll("a, button").forEach((elemento) => {
      elemento.setAttribute("tabindex", "-1");
    });

    copia.classList.remove("revelar", "visivel");
    copia.style.removeProperty("--atraso");

    faixa.appendChild(copia);
  });

  return originais;
};

// O Safari nem sempre carrega imagens com loading="lazy" que entram na
// tela pela rolagem horizontal do carrossel. Aqui o próprio script pede o
// carregamento quando o cartão chega perto da área visível.
const carregarImagensDoCarrossel = (janela) => {
  const imagens = janela.querySelectorAll('img[loading="lazy"]');

  if (!("IntersectionObserver" in window)) {
    imagens.forEach((imagem) => {
      imagem.loading = "eager";
    });
    return;
  }

  const observador = new IntersectionObserver(
    (entradas, observer) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.loading = "eager";
          observer.unobserve(entrada.target);
        }
      });
    },
    { root: janela, rootMargin: "0px 100% 0px 100%" }
  );

  imagens.forEach((imagem) => observador.observe(imagem));
};

// Quando a rolagem para depois do fim dos cartões originais (inclusive
// arrastando com o dedo), volta para o trecho equivalente do início, sem
// salto visível, para o carrossel nunca chegar ao fim.
const manterCicloInfinito = (janela, faixa, quantidade) => {
  let espera;

  janela.addEventListener(
    "scroll",
    () => {
      clearTimeout(espera);

      espera = setTimeout(() => {
        const primeiraCopia = faixa.children[quantidade];
        if (!primeiraCopia) return;

        const ciclo =
          primeiraCopia.offsetLeft - faixa.children[0].offsetLeft;

        if (ciclo > 0 && janela.scrollLeft >= ciclo) {
          janela.scrollLeft -= ciclo;
        }
      }, 150);
    },
    { passive: true }
  );
};

const configurarBotaoPausa = (botao, aoAlternar) => {
  if (!botao) return;

  if (prefereMovimentoReduzido) {
    botao.hidden = true;
    return;
  }

  botao.addEventListener("click", () => {
    const pausado = botao.getAttribute("aria-pressed") !== "true";

    botao.setAttribute("aria-pressed", String(pausado));
    botao.setAttribute(
      "aria-label",
      pausado ? botao.dataset.rotuloRetomar : botao.dataset.rotuloPausar
    );
    botao.querySelector(".material-symbols-outlined").textContent =
      pausado ? "play_arrow" : "pause";

    aoAlternar(pausado);
  });
};

const janelaSocios = document.querySelector(".socios__janela");
const faixaSocios = document.getElementById("listaSocios");
const controleAnterior = document.querySelector(
  ".socios__controle--anterior"
);
const controleProximo = document.querySelector(
  ".socios__controle--proximo"
);
const carrosselSocios = document.querySelector(".socios__carrossel");

if (janelaSocios && faixaSocios) {
  const cartoesOriginais = duplicarCartoes(faixaSocios);

  let distanciaCicloSocios = 0;
  let sociosPausadoPeloUsuario = false;

  const medirCicloSocios = () => {
    const primeiraCopia =
      faixaSocios.children[cartoesOriginais.length];

    if (!primeiraCopia || !faixaSocios.firstElementChild) return;

    distanciaCicloSocios =
      primeiraCopia.getBoundingClientRect().left -
      faixaSocios.firstElementChild.getBoundingClientRect().left;

    if (
      distanciaCicloSocios > 0 &&
      janelaSocios.scrollLeft >= distanciaCicloSocios
    ) {
      janelaSocios.scrollLeft %= distanciaCicloSocios;
    }
  };

  medirCicloSocios();
  window.addEventListener("load", medirCicloSocios);

  carregarImagensDoCarrossel(janelaSocios);
  manterCicloInfinito(janelaSocios, faixaSocios, cartoesOriginais.length);

  janelaSocios.classList.toggle(
    "socios__janela--automatico",
    !prefereMovimentoReduzido
  );

  const moverCarrosselSocios = (direcao) => {
    const primeiroCartao = faixaSocios.querySelector(".socio");
    if (!primeiroCartao) return;

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
      !sociosPausadoPeloUsuario &&
      carrosselSocios &&
      !carrosselSocios.matches(":hover") &&
      !carrosselSocios.contains(document.activeElement) &&
      tempo >= pausaAteSocios
    ) {
      janelaSocios.scrollLeft += intervalo * 0.07;

      if (distanciaCicloSocios <= 0) {
        medirCicloSocios();
      }

      if (
        distanciaCicloSocios > 0 &&
        janelaSocios.scrollLeft >= distanciaCicloSocios
      ) {
        janelaSocios.scrollLeft -= distanciaCicloSocios;
      }
    }

    window.requestAnimationFrame(animarCarrosselSocios);
  };

  if (controleAnterior) {
    controleAnterior.addEventListener("click", () => {
      moverCarrosselSocios(-1);
    });
  }

  if (controleProximo) {
    controleProximo.addEventListener("click", () => {
      moverCarrosselSocios(1);
    });
  }

  if (carrosselSocios) {
    carrosselSocios.addEventListener(
      "pointerdown",
      pausarCarrosselSocios
    );
  }

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

  configurarBotaoPausa(
    document.querySelector(".socios__pausa"),
    (pausado) => {
      sociosPausadoPeloUsuario = pausado;
    }
  );

  if (!prefereMovimentoReduzido) {
    window.requestAnimationFrame(animarCarrosselSocios);
  }
}

if ("IntersectionObserver" in window && !prefereMovimentoReduzido) {
  const formatoNumero = new Intl.NumberFormat("pt-BR");

  const animarContagem = (numero) => {
    if (!numero || numero.dataset.contagemIniciada) {
      return;
    }

    const textoFinal = numero.textContent.trim();
    const partes = textoFinal.match(/^([^\d]*)(\d[\d.]*)(.*)$/);

    if (!partes) {
      return;
    }

    const [, prefixo, digitos, sufixo] = partes;
    const valorFinal = Number(digitos.replace(/\./g, ""));
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
          : `${prefixo}${formatoNumero.format(valorAtual)}${sufixo}`;

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
    ".socio:not([aria-hidden='true']), .artigo:not([aria-hidden='true']), .formulario, .sede";

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

if (cabecalho) {
  const botaoMenu = cabecalho.querySelector(".cabecalho__botao");

  const definirMenuAberto = (aberto) => {
    cabecalho.classList.toggle("cabecalho--aberto", aberto);

    if (botaoMenu) {
      botaoMenu.setAttribute("aria-expanded", String(aberto));
      botaoMenu.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
      );
    }
  };

  if (botaoMenu) {
    botaoMenu.addEventListener("click", () => {
      definirMenuAberto(
        !cabecalho.classList.contains("cabecalho--aberto")
      );
    });
  }

  document.addEventListener("keydown", (evento) => {
    if (
      evento.key === "Escape" &&
      cabecalho.classList.contains("cabecalho--aberto")
    ) {
      definirMenuAberto(false);
      botaoMenu?.focus();
    }
  });

  cabecalho
    .querySelectorAll("nav a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        definirMenuAberto(false);
      });
    });
}

const formContato = document.getElementById("formularioContato");
if (formContato) {
  formContato.addEventListener("submit", (evento) => {
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
}

// O mapa do Google só é carregado quando o visitante pede, o que evita
// cerca de 1,5 MB de scripts e o envio de dados ao Google sem necessidade.
document.querySelectorAll(".sede__mapa-botao").forEach((botao) => {
  botao.addEventListener("click", () => {
    const mapa = document.createElement("iframe");

    mapa.className = "sede__mapa";
    mapa.src = botao.dataset.src;
    mapa.title = botao.dataset.titulo;
    mapa.referrerPolicy = "no-referrer-when-downgrade";
    mapa.allowFullscreen = true;

    botao.closest(".sede__mapa-espaco").replaceChildren(mapa);
    mapa.focus();
  });
});

// O vídeo institucional só carrega o player do YouTube quando o visitante
// clica no play. Até lá a página mostra apenas a imagem de capa.
document.querySelectorAll(".historia__video-botao").forEach((botao) => {
  botao.addEventListener("click", () => {
    const video = document.createElement("iframe");

    video.src =
      `https://www.youtube-nocookie.com/embed/${botao.dataset.video}` +
      "?autoplay=1&rel=0";
    video.title =
      "Vídeo institucional do escritório Andrade, Moralles & Luz Advogados";
    video.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    video.allowFullscreen = true;

    const caixa = botao.closest(".historia__video");
    caixa.classList.add("historia__video--tocando");
    caixa.replaceChildren(video);
    video.focus();
  });
});

// --- Lógica Carrossel de Artigos ---
const janelaArtigos = document.querySelector(".artigos__janela");
const faixaArtigos = document.getElementById("listaArtigos");
const controleAnteriorArtigo = document.querySelector(".artigos__controle--anterior");
const controleProximoArtigo = document.querySelector(".artigos__controle--proximo");
const carrosselArtigos = document.querySelector(".artigos__carrossel");

if (janelaArtigos && faixaArtigos && carrosselArtigos) {
  const artigosOriginais = duplicarCartoes(faixaArtigos);

  let distanciaCicloArtigos = 0;
  let artigosPausadoPeloUsuario = false;

  const medirCicloArtigos = () => {
    const primeiraCopia = faixaArtigos.children[artigosOriginais.length];
    if (!primeiraCopia || !faixaArtigos.firstElementChild) return;
    distanciaCicloArtigos =
      primeiraCopia.getBoundingClientRect().left -
      faixaArtigos.firstElementChild.getBoundingClientRect().left;

    if (distanciaCicloArtigos > 0 && janelaArtigos.scrollLeft >= distanciaCicloArtigos) {
      janelaArtigos.scrollLeft %= distanciaCicloArtigos;
    }
  };

  medirCicloArtigos();
  window.addEventListener("resize", medirCicloArtigos);
  window.addEventListener("load", medirCicloArtigos);

  carregarImagensDoCarrossel(janelaArtigos);
  manterCicloInfinito(janelaArtigos, faixaArtigos, artigosOriginais.length);

  janelaArtigos.classList.toggle("artigos__janela--automatico", !prefereMovimentoReduzido);

  let animacaoArtigosId = null;

  const moverCarrosselArtigos = (direcao) => {
    const primeiroCartao = faixaArtigos.querySelector(".artigo");
    if (!primeiroCartao) return;
    const intervalo = Number.parseFloat(window.getComputedStyle(faixaArtigos).gap) || 0;
    const movimento = primeiroCartao.getBoundingClientRect().width + intervalo;
    let destino = janelaArtigos.scrollLeft + direcao * movimento;

    if (destino < 0) {
      janelaArtigos.scrollTo({ left: destino + distanciaCicloArtigos, behavior: "auto" });
      destino = janelaArtigos.scrollLeft + direcao * movimento;
    }

    if (animacaoArtigosId) cancelAnimationFrame(animacaoArtigosId);

    if (prefereMovimentoReduzido) {
      janelaArtigos.scrollTo({ left: destino, behavior: "auto" });
      if (janelaArtigos.scrollLeft >= distanciaCicloArtigos) {
        janelaArtigos.scrollTo({ left: janelaArtigos.scrollLeft - distanciaCicloArtigos, behavior: "auto" });
      }
    } else {
      const inicio = janelaArtigos.scrollLeft;
      const distancia = destino - inicio;
      const duracao = 1000; // transição leve de 1 segundo
      const tempoInicio = performance.now();

      const animar = (tempoAtual) => {
        const progresso = Math.min((tempoAtual - tempoInicio) / duracao, 1);
        // Easing mais suave (ease-in-out cubic)
        const facilidade = progresso < 0.5 ? 4 * progresso * progresso * progresso : 1 - Math.pow(-2 * progresso + 2, 3) / 2;

        janelaArtigos.scrollLeft = inicio + distancia * facilidade;

        if (progresso < 1) {
          animacaoArtigosId = window.requestAnimationFrame(animar);
        } else {
          if (janelaArtigos.scrollLeft >= distanciaCicloArtigos) {
            janelaArtigos.scrollTo({ left: janelaArtigos.scrollLeft - distanciaCicloArtigos, behavior: "auto" });
          }
        }
      };
      animacaoArtigosId = window.requestAnimationFrame(animar);
    }
  };

  let intervaloArtigos;

  const iniciarCarrosselArtigos = () => {
    if (prefereMovimentoReduzido || artigosPausadoPeloUsuario) return;
    clearInterval(intervaloArtigos);
    intervaloArtigos = setInterval(() => {
      moverCarrosselArtigos(1);
    }, 5000); // Espera 5 segundos parado
  };

  const pausarCarrosselArtigos = () => {
    clearInterval(intervaloArtigos);
  };

  carrosselArtigos.addEventListener("mouseenter", pausarCarrosselArtigos);
  carrosselArtigos.addEventListener("mouseleave", iniciarCarrosselArtigos);
  carrosselArtigos.addEventListener("focusin", pausarCarrosselArtigos);
  carrosselArtigos.addEventListener("focusout", iniciarCarrosselArtigos);
  carrosselArtigos.addEventListener("touchstart", pausarCarrosselArtigos, { passive: true });
  carrosselArtigos.addEventListener("touchend", iniciarCarrosselArtigos, { passive: true });

  if (controleAnteriorArtigo) {
    controleAnteriorArtigo.addEventListener("click", () => {
      moverCarrosselArtigos(-1);
      pausarCarrosselArtigos();
      setTimeout(iniciarCarrosselArtigos, 5000);
    });
  }

  if (controleProximoArtigo) {
    controleProximoArtigo.addEventListener("click", () => {
      moverCarrosselArtigos(1);
      pausarCarrosselArtigos();
      setTimeout(iniciarCarrosselArtigos, 5000);
    });
  }

  configurarBotaoPausa(
    document.querySelector(".artigos__pausa"),
    (pausado) => {
      artigosPausadoPeloUsuario = pausado;

      if (pausado) {
        pausarCarrosselArtigos();
      } else {
        iniciarCarrosselArtigos();
      }
    }
  );

  iniciarCarrosselArtigos();
}
