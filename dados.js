const pilares = [
  {
    icone: "account_balance",
    titulo: "MISSÃO",
    texto: "Atuar com excelência, pautada na construção de um relacionamento sólido e de confiança com clientes e parceiros, aplicando a expertise jurídica que melhor se adeque a cada realidade para atingir os resultados esperados.",
    escuro: false
  },

  {
    icone: "public",
    titulo: "VISÃO",
    texto: "Com um olhar amplo, que abrange diferentes mercados e disciplinas, somos uma sociedade de advogados que atende com agilidade, honestidade e transparência em suas relações profissionais e interpessoais.",
    escuro: true
  },

  {
    icone: "diversity_3",
    titulo: "VALORES",
    texto: "Inspirados nos mais elevados princípios éticos, oferecemos serviços jurídicos com qualidade diferenciada, apoiando nossos clientes com uma abordagem integrada e equipes adaptadas às suas necessidades.",
    escuro: false
  }
];

const areasDeAtuacao = [
  {
    icone: "account_balance",
    titulo: "DIREITO ADMINISTRATIVO",
    texto: "Assessoria em licitações, contratos com a administração, defesas em tribunais de contas, improbidade administrativa e consultoria regulatória.",
    rotulo: "Consultivo e litígio"
  },

  {
    icone: "corporate_fare",
    titulo: "DIREITO EMPRESARIAL",
    texto: "Estruturação societária, fusões e aquisições, governança corporativa, dissolução de sociedades, recuperação judicial e proteção patrimonial.",
    rotulo: "Estratégia corporativa"
  },

  {
    icone: "receipt_long",
    titulo: "DIREITO TRIBUTÁRIO",
    texto: "Planejamento tributário, recuperação de créditos fiscais, defesas em autuações administrativas e ações tributárias complexas.",
    rotulo: "Eficiência fiscal"
  },

  {
    icone: "badge",
    titulo: "DIREITO DO TRABALHO",
    texto: "Defesa de contingências laborais patronais, assessoria preventiva em RH, auditorias de conformidade e atuação em dissídios e rescisões.",
    rotulo: "Prevenção e defesa"
  },

  {
    icone: "handshake",
    titulo: "DIREITO CIVIL",
    texto: "Elaboração e revisão de contratos, responsabilidade civil, indenizações, litígios possessórios, direito de família e planejamento sucessório.",
    rotulo: "Relações e patrimônio"
  },

  {
    icone: "gavel",
    titulo: "DIREITO CRIMINAL",
    texto: "Direito penal econômico, crimes contra o sistema financeiro, ordem tributária, crimes ambientais e atuação nos tribunais superiores.",
    rotulo: "Defesa estratégica"
  },

  {
    icone: "military_tech",
    titulo: "DIREITO MILITAR",
    texto: "Assessoria e defesa de militares em processos administrativos e judiciais, englobando questões disciplinares, promoções e previdência.",
    rotulo: "Defesa especializada"
  },

  {
    icone: "sports_soccer",
    titulo: "DIREITO DESPORTIVO",
    texto: "Assessoria jurídica para atletas, clubes e federações, incluindo contratos de trabalho desportivo, direitos de imagem e justiça desportiva.",
    rotulo: "Atuação esportiva"
  },

  {
    icone: "how_to_vote",
    titulo: "ADVOCACIA PARTIDÁRIA",
    texto: "Consultoria para partidos políticos e candidatos, englobando registro de candidaturas, prestação de contas, propaganda eleitoral e contencioso.",
    rotulo: "Eleitoral e política"
  },

  {
    icone: "fact_check",
    titulo: "COMPLIANCE EM EMPRESAS",
    texto: "Implementação de programas de integridade, gestão de riscos, auditorias preventivas e adequação estrutural para mitigação de passivos.",
    rotulo: "Prevenção e controle"
  }
];

const socios = [
  {
    nome: "Adriano Moralles",
    cargo: "Associado",
    telefone: "(84) 98735-7317",
    numero: "5584987357317",
    foto: "imagens_time/Adriano-Moralles-400x400.png"
  },

  {
    nome: "Leandro Luz",
    cargo: "Associado",
    telefone: "(84) 99652-6162",
    numero: "5584996526162",
    foto: "imagens_time/Leandro-Luz2-400x400.png"
  },

  {
    nome: "Katrh Andrade",
    cargo: "Associada",
    telefone: "(84) 99990-1411",
    numero: "5584999901411",
    foto: "imagens_time/Katrh-Andrade-400x400.png"
  }
];

const artigos = [
  {
    titulo: "MEU FILHO COMPLETOU 18 ANOS, POSSO PARAR DE PAGAR PENSÃO ALIMENTÍCIA?",
    data: "16/03/2022",
    autor: "Admin",
    capa: "imagens_artigos/18anosparardepagarpensao-600x398.png",
    link: "artigos/artigo-pensao.html"
  },

  {
    titulo: "INCIDE IMPOSTO DE RENDA SOBRE HERANÇA?",
    data: "07/03/2022",
    autor: "Admin",
    capa: "imagens_artigos/incide-imposto-de-renda-sobre-heranca-600x398.png",
    link: "artigos/artigo-imposto-heranca.html"
  },

  {
    titulo: "PERDI A COMANDA. TENHO QUE PAGAR MULTA?",
    data: "07/02/2022",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/COMANDA-PRATICA-ABUSIVA-600x398.png",
    link: "artigos/artigo-comanda-multa.html"
  },

  {
    titulo: "BLACK FRIDAY: OS CUIDADOS QUE SUA EMPRESA DEVE TER",
    data: "26/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/BLACK-FRIDAY-OS-CUIDADOS-QUE-SUA-EMPRESA-DEVE-TER-600x398.png",
    link: "artigos/artigo-black-friday.html"
  },

  {
    titulo: "QUAIS SÃO OS TIPOS DE RESCISÃO CONTRATUAL?",
    data: "29/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/QUAIS-SAO-OS-TIPOS-DE-RESCISAO-CONTRATUAL-600x398.png",
    link: "artigos/artigo-rescisao-contratual.html"
  },

  {
    titulo: "O EMPREGADOR PODE OBRIGAR O FUNCIONÁRIO A SE VACINAR?",
    data: "10/05/2022",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/post-copiar-600x398.png",
    link: "artigos/artigo-vacinacao.html"
  }
,

  {
    titulo: "5 DICAS PARA APROVEITAR A BLACK FRIDAY",
    data: "19/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/5-DICAS-PARA-APROVEITAR-A-BLACK-FRIDAY-980x580.jpg",
    link: "artigos/artigo-5-dicas-para-aproveitar-a-black-friday.html"
  },

  {
    titulo: "A CITAÇÃO NA AÇÃO DE COBRANÇA E O ARTIGO 290 DO CÓDIGO CIVIL",
    data: "01/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/A-CITACAO-NA-ACAO-DE-COBRANCA-E-O-ARTIGO-290-DO-CODIGO-CIVIL-copiar-980x580.jpg",
    link: "artigos/artigo-citacao-acao-cobranca-art-290-cc.html"
  },

  {
    titulo: "A MORTE DESAUTORIZADA",
    data: "27/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/A-MORTE-DESAUTORIZADA-980x580.jpg",
    link: "artigos/artigo-a-morte-desautorizada.html"
  },

  {
    titulo: "A QUEM COMPETE JULGAR PROCESSOS DE EXECUÇÃO FISCAL?",
    data: "23/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/a-quem-compete-julgar-processos-de-execucao-fiscal-980x580.jpg",
    link: "artigos/artigo-competencia-julgar-processos-execucao-fiscal.html"
  },

  {
    titulo: "AUXILIAR DE HIGIENIZAÇÃO QUE NÃO POSSUÍA INTERVALO PARA AMAMENTAR O FILHO DEVE SER INDENIZADA",
    data: "17/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/AUXILIAR-DE-HIGIENIZACAO-QUE-NAO-POSSUIA-INTERVALO-PARA-AMAMENTAR-O-FILHO-DEVE-SER-INDENIZADA-980x580.jpg",
    link: "artigos/artigo-auxiliar-de-higienizacao-que-nao-possuia-intervalo-para-amamentar-o-filho-deve-ser-indenizada.html"
  },

  {
    titulo: "AUXÍLIO BRASIL: COMO SERÁ PAGO?",
    data: "12/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/AUXILIO-BRASIL-COM-OSERA-PAGO-980x580.jpg",
    link: "artigos/artigo-auxilio-brasil-como-sera-pago.html"
  },

  {
    titulo: "BLACK FRIDAY MOVIMENTA O COMÉRCIO ELETRÔNICO E CRESCEM OS RISCOS DE GOLPES",
    data: "24/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/black-friday-riscos-de-golpes-980x580.png",
    link: "artigos/artigo-black-friday-riscos-de-golpes.html"
  },

  {
    titulo: "CIA AÉREA INDENIZARÁ POR FALTA DE ASSISTÊNCIA APÓS CANCELAMENTO DE VOO",
    data: "08/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/CIA-AEREA-INDENIZARA-POR-FALTA-DE-ASSISTENCIA-APOS-CANCELAMENTO-DE-VOO-copiar-980x580.jpg",
    link: "artigos/artigo-cia-aerea-indenizara.html"
  },

  {
    titulo: "EM QUAIS SITUAÇÕES OCORRE O DANO MORAL PRESUMIDO",
    data: "14/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/Em quais situações ocorre o dano moral presumido.jpg",
    link: "artigos/artigo-situacoes-dano-moral-presumido.html"
  },

  {
    titulo: "INCIDE IMPOSTO DE RENDA SOBRE VALORES DECORRENTES DO PAGAMENTO DE PENSÃO ALIMENTÍCIA?",
    data: "11/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/imposto-de-renda-980x580.jpg",
    link: "artigos/artigo-imposto-renda-pensao-alimenticia.html"
  },

  {
    titulo: "JUIZ RECONHECE DUPLA MATERNIDADE DE CASAL HOMOAFETIVO QUE FEZ INSEMINAÇÃO CASEIRA",
    data: "15/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/JUIZ-RECONHECE-DUPLA-MATERNIDADE-DE-CASAL-980x580.jpg",
    link: "artigos/artigo-juiz-reconhece-dupla-maternidade-de-casal-homoafetivo-que-fez-inseminacao-caseira.html"
  },

  {
    titulo: "JUSTIÇA DETERMINA QUE CAIXA INDENIZE CLIENTE EM R$ 10 MIL APÓS ERRO DE UM CENTAVO",
    data: "15/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/JUSTIÇA DETERMINA QUE CAIXA INDENIZE CLIENTE EM R$ 10 MIL APÓS ERRO DE UM CENTAVO.jpg",
    link: "artigos/artigo-justica-determina-caixa-indenize-cliente-erro-centavo.html"
  },

  {
    titulo: "MOTORISTAS DA UBER TÊM DIREITO A CARTEIRA ASSINADA?",
    data: "03/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/Motoristas-da-Uber-tem-direito-a-carteira-assinada-980x580.jpg",
    link: "artigos/artigo-motoristas-uber-tem-direito-carteira-assinada.html"
  },

  {
    titulo: "NA AÇÃO RESCISÓRIA FUNDADA NO ART. 966, V, DO CPC, É POSSÍVEL ANALISAR VIOLAÇÃO DE NORMA NÃO APONTADA PELO AUTOR?",
    data: "10/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/Na-acao-rescisoria-fundada-no-art.-966-V-do-CPC-e-possivel-analisar-violacao-de-norma-nao-apontada-pelo-autor-980x580.jpg",
    link: "artigos/artigo-na-acao-rescisoria-fundada-no-art-966-v-do-cpc.html"
  },

  {
    titulo: "OBRIGATORIEDADE OU NÃO DE COBERTURA, PELOS PLANOS DE SAÚDE, DA TÉCNICA DE FERTILIZAÇÃO IN VITRO",
    data: "01/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/OBG-OU-NAO-980x580.jpg",
    link: "artigos/artigo-obrigatoriedade-cobertura-fertilizacao-in-vitro.html"
  },

  {
    titulo: "POSSIBILIDADE DE COBRAR ALUGUÉIS PELO USO EXCLUSIVO DO BEM COMUM",
    data: "29/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/Possibilidade-de-cobrar-alugueis-980x580.jpg",
    link: "artigos/artigo-possibilidade-cobrar-alugueis-uso-exclusivo-bem-comum.html"
  },

  {
    titulo: "PRESIDENTE DO STJ SUSPENDE LIMINAR QUE AUTORIZAVA VOTO DOS INADIMPLENTES NAS ELEIÇÕES DA OAB",
    data: "05/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/Presidente-do-STJ-suspende-liminar-que-autorizava-voto-dos-inadimplentes-nas-eleicoes-da-OAB-980x580.jpg",
    link: "artigos/artigo-stj-suspende-liminar-voto-inadimplentes-oab.html"
  },

  {
    titulo: "QUAIS OS PRESSUPOSTOS PARA A CONDENAÇÃO DOS PAIS POR ABANDONO AFETIVO?",
    data: "18/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/pressupostos-abandono-afetivo-980x580.jpg",
    link: "artigos/artigo-pressupostos-condenacao-abandono-afetivo.html"
  },

  {
    titulo: "QUEM HERDA BENS DE PESSOAS SOLTEIRAS E SEM FILHOS?",
    data: "22/11/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/QUEM-HERDA-BENS-DE-PESSOAS-SOLTEIRAS-E-SEM-FILHOS-980x580.png",
    link: "artigos/artigo-quem-herda-bens-de-pessoas-solteiras-e-sem-filhos.html"
  },

  {
    titulo: "DE QUEM É A COMPETÊNCIA PARA DEFINIR SOBRE VACINAÇÃO AOS ADOLESCENTES?",
    data: "25/10/2021",
    autor: "Adriano Moralles",
    capa: "imagens_artigos/vacina-980x580.jpg",
    link: "artigos/artigo-competencia-vacinacao-adolescentes.html"
  }
];
