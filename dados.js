const pilares = [
  {
    icone: "account_balance",
    titulo: "Missão",
    texto: "Atuar com excelência, pautada na construção de um relacionamento sólido e de confiança com clientes e parceiros, aplicando a expertise jurídica que melhor se adeque a cada realidade para atingir os resultados esperados.",
    escuro: false
  },

  {
    icone: "public",
    titulo: "Visão",
    texto: "Com um olhar amplo, que abrange diferentes mercados e disciplinas, somos uma sociedade de advogados que atende com agilidade, honestidade e transparência em suas relações profissionais e interpessoais.",
    escuro: true
  },

  {
    icone: "diversity_3",
    titulo: "Valores",
    texto: "Inspirados nos mais elevados princípios éticos, oferecemos serviços jurídicos com qualidade diferenciada, apoiando nossos clientes com uma abordagem integrada e equipes adaptadas às suas necessidades.",
    escuro: false
  }
];

const areasDeAtuacao = [
  {
    icone: "account_balance",
    titulo: "Direito Administrativo",
    texto: "Assessoria em licitações, contratos com a administração, defesas em tribunais de contas, improbidade administrativa e consultoria regulatória.",
    rotulo: "Consultivo e litígio"
  },

  {
    icone: "corporate_fare",
    titulo: "Direito Empresarial",
    texto: "Estruturação societária, fusões e aquisições, governança corporativa, dissolução de sociedades, recuperação judicial e proteção patrimonial.",
    rotulo: "Estratégia corporativa"
  },

  {
    icone: "receipt_long",
    titulo: "Direito Tributário",
    texto: "Planejamento tributário, recuperação de créditos fiscais, defesas em autuações administrativas e ações tributárias complexas.",
    rotulo: "Eficiência fiscal"
  },

  {
    icone: "badge",
    titulo: "Direito do Trabalho",
    texto: "Defesa de contingências laborais patronais, assessoria preventiva em RH, auditorias de conformidade e atuação em dissídios e rescisões.",
    rotulo: "Prevenção e defesa"
  },

  {
    icone: "handshake",
    titulo: "Direito Civil",
    texto: "Elaboração e revisão de contratos, responsabilidade civil, indenizações, litígios possessórios, direito de família e planejamento sucessório.",
    rotulo: "Relações e patrimônio"
  },

  {
    icone: "gavel",
    titulo: "Direito Criminal",
    texto: "Direito penal econômico, crimes contra o sistema financeiro, ordem tributária, crimes ambientais e atuação nos tribunais superiores.",
    rotulo: "Defesa estratégica"
  },

  {
    icone: "military_tech",
    titulo: "Direito Militar",
    texto: "Assessoria e defesa de militares em processos administrativos e judiciais, englobando questões disciplinares, promoções e previdência.",
    rotulo: "Defesa especializada"
  },

  {
    icone: "sports_soccer",
    titulo: "Direito Desportivo",
    texto: "Assessoria jurídica para atletas, clubes e federações, incluindo contratos de trabalho desportivo, direitos de imagem e justiça desportiva.",
    rotulo: "Atuação esportiva"
  },

  {
    icone: "how_to_vote",
    titulo: "Advocacia Partidária",
    texto: "Consultoria para partidos políticos e candidatos, englobando registro de candidaturas, prestação de contas, propaganda eleitoral e contencioso.",
    rotulo: "Eleitoral e política"
  },

  {
    icone: "fact_check",
    titulo: "Compliance em Empresas",
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
    foto: "https://lh3.googleusercontent.com/aida/AEtjO1XZB414j-82v030kLant2bUIDWe1EQTqxUAkPhGUzdu8WvtkYCoaBYqCL7904D14Sqly7x534ZyPuMayldPr--a_84W8xu-W7z4oUtVa3IEnR7cCu4SWVahCWckDleyQjQjL6VCHChEKqJgvr-DNSFepWut4cVYonhmUZ0pjGD6cTrm7IG5N-LoSSVFISOu0QXEGxpYpd9ezZvEk0ZD15wOw8c7WcAKzxqEqoNQ10Pp6LD-IMpMJeTJDA"
  },

  {
    nome: "Leandro Luz",
    cargo: "Associado",
    telefone: "(84) 99652-6162",
    numero: "5584996526162",
    foto: "https://lh3.googleusercontent.com/aida/AEtjO1V9obVE-AA1MSenKFnrtFTtvPn9zPDRTC_Q78s_Dfx-hI7oiRK96jRf6ffoazeHdInI9-9gLiDxWcsglGetHYbVvkoD5DBv7OK360If5LfadJiHPvlhlDmpcKCXZXc2c2buve86zCGon2ESExxl0RmtGyd18sOvH3yR14iKkAbhJumlEeCkgEX0P5GXwT4qdYsVFjwFQjtfuH1FyI2rDRzfK1x-mB30Xo-vktnJETJdhNpJXvNMmmWuOg"
  },

  {
    nome: "Katrh Andrade",
    cargo: "Associada",
    telefone: "(84) 99990-1411",
    numero: "5584999901411",
    foto: "https://lh3.googleusercontent.com/aida/AEtjO1VPXpmt-ay2dE10liNFCHHV4Fb4rHmT4asJGEJZGasorB0_MUOlO3Qn1S-KxyjzqPILWAJI8Y9zMlQTG4MnoB8SHPd8dvyAZwodcOj8P6Ut-FimWVoo8AjmgPFcFOw0MJHpivbKVhUKPyT7fyoPIwVDUGRWi1LA2U9jSDhu9g1PfF8GslRU1UbttoNw4w9bErJpxReVaAE89X5tJu0SBKotJJinEeUszi4K792o278l_QKR0k5TL8FGIg"
  }
];

const artigos = [
  {
    titulo: "Meu filho completou 18 anos, posso parar de pagar pensão alimentícia?",
    data: "16/03/2022",
    autor: "Admin",
    capa: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSib4pE_Q9p0tWA621YRqoROFM3DB8mDxWpvEVx1rSs-8aVnMSkLm532KlkEu4zd-ajHQbiErEkV1_tlfdRjm9iNaZgam9eE2PGjjY9QEjYu8u82qBbOWR02Q_QaeofGJp-evlH8M_N-mK2Uz4diTSQsHwJaFaQuk3DoZdGTHVnz9_Dx7qwsIgCX8XJJzn-ExqxuPEX80YEveEPBn_J_Zm29IsdkJv4K3d7bTg3r9c9ad8f_10GAY"
  },

  {
    titulo: "Incide Imposto de Renda sobre herança?",
    data: "07/03/2022",
    autor: "Admin",
    capa: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8BpcUpc0duf2cMQaTiNwsPl9Hu4vix2HAeS0_iYZ4YvtjB059bjoSoNnUGNGktoW8TXgYnd57nGcjTCn-_CFl_Qj_9M2E3UTdbiUGIhJDpuOW_GM4DwuXoPfsmlTgujTX0naEXP2NIi7j-h_1O2vYHIzamvbHhbV_J2bWvMoCVeGe2O8ssQwasF89iVXDlcJiLQQGs4tGj9s-UMY9itSWyPDMMkOqc_glP2oZnkN_-lQwZD-CLDA"
  },

  {
    titulo: "Perdi a comanda. Tenho que pagar multa?",
    data: "07/02/2022",
    autor: "Adriano Moralles",
    capa: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGpXwV_O8a1ghp_aPQAJ64X6VocxeH5v4xR-RzdEREmZTNquRhMFODVNYZpyFHejBxNUV0eQVnwRkaKoKAreHlzSk25DYJn9eEvnR1lsmOzP7s0j_vRDGVuwgGkzEgoslEXhgH_fMTMUis-sVofFRWvozNTPIWlTXA2iYKQ6dWkomLQS4lsKPwaI41C0lW0hLGtmJYONnH9xbT0ild-2-_aMwBwjRzefZq9_SJjTKTLqB3_SgKzQQ"
  }
];
