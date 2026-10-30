<?php
/**
 * Conteúdo fixo da página inicial.
 *
 * Para mudar a equipe, as áreas de atuação, o portfólio ou os números,
 * edite as listas abaixo. As fotos ficam nas pastas imagens_time/ e
 * imagens_portfolio/ do tema, em WebP.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function aml_conteudo( $secao ) {
	$conteudo = array(

		'pilares' => array(
			array(
				'icone'  => 'account_balance',
				'titulo' => 'MISSÃO',
				'texto'  => 'Atuar com excelência, pautada na construção de um relacionamento sólido e de confiança com clientes e parceiros, aplicando a expertise jurídica que melhor se adeque a cada realidade para atingir os resultados esperados.',
				'escuro' => false,
			),
			array(
				'icone'  => 'public',
				'titulo' => 'VISÃO',
				'texto'  => 'Com um olhar amplo, que abrange diferentes mercados e disciplinas, somos uma sociedade de advogados que atende com agilidade, honestidade e transparência em suas relações profissionais e interpessoais.',
				'escuro' => true,
			),
			array(
				'icone'  => 'diversity_3',
				'titulo' => 'VALORES',
				'texto'  => 'Inspirados nos mais elevados princípios éticos, oferecemos serviços jurídicos com qualidade diferenciada, apoiando nossos clientes com uma abordagem integrada e equipes adaptadas às suas necessidades.',
				'escuro' => false,
			),
		),

		'numeros' => array(
			array( '+500', 'Clientes atendidos' ),
			array( '+1.500', 'Ações trabalhadas' ),
			array( '7', 'Estados de atuação' ),
		),

		'areas' => array(
			array(
				'icone'  => 'account_balance',
				'titulo' => 'DIREITO ADMINISTRATIVO',
				'texto'  => 'Assessoria em licitações, contratos com a administração, defesas em tribunais de contas, improbidade administrativa e consultoria regulatória.',
				'rotulo' => 'Consultivo e litígio',
			),
			array(
				'icone'  => 'corporate_fare',
				'titulo' => 'DIREITO EMPRESARIAL',
				'texto'  => 'Estruturação societária, fusões e aquisições, governança corporativa, dissolução de sociedades, recuperação judicial e proteção patrimonial.',
				'rotulo' => 'Estratégia corporativa',
			),
			array(
				'icone'  => 'receipt_long',
				'titulo' => 'DIREITO TRIBUTÁRIO',
				'texto'  => 'Planejamento tributário, recuperação de créditos fiscais, defesas em autuações administrativas e ações tributárias complexas.',
				'rotulo' => 'Eficiência fiscal',
			),
			array(
				'icone'  => 'badge',
				'titulo' => 'DIREITO DO TRABALHO',
				'texto'  => 'Defesa de contingências laborais patronais, assessoria preventiva em RH, auditorias de conformidade e atuação em dissídios e rescisões.',
				'rotulo' => 'Prevenção e defesa',
			),
			array(
				'icone'  => 'handshake',
				'titulo' => 'DIREITO CIVIL',
				'texto'  => 'Elaboração e revisão de contratos, responsabilidade civil, indenizações, litígios possessórios, direito de família e planejamento sucessório.',
				'rotulo' => 'Relações e patrimônio',
			),
			array(
				'icone'  => 'gavel',
				'titulo' => 'DIREITO CRIMINAL',
				'texto'  => 'Direito penal econômico, crimes contra o sistema financeiro, ordem tributária, crimes ambientais e atuação nos tribunais superiores.',
				'rotulo' => 'Defesa estratégica',
			),
			array(
				'icone'  => 'military_tech',
				'titulo' => 'DIREITO MILITAR',
				'texto'  => 'Assessoria e defesa de militares em processos administrativos e judiciais, englobando questões disciplinares, promoções e previdência.',
				'rotulo' => 'Defesa especializada',
			),
			array(
				'icone'  => 'sports_soccer',
				'titulo' => 'DIREITO DESPORTIVO',
				'texto'  => 'Assessoria jurídica para atletas, clubes e federações, incluindo contratos de trabalho desportivo, direitos de imagem e justiça desportiva.',
				'rotulo' => 'Atuação esportiva',
			),
			array(
				'icone'  => 'how_to_vote',
				'titulo' => 'ADVOCACIA PARTIDÁRIA',
				'texto'  => 'Consultoria para partidos políticos e candidatos, englobando registro de candidaturas, prestação de contas, propaganda eleitoral e contencioso.',
				'rotulo' => 'Eleitoral e política',
			),
			array(
				'icone'  => 'fact_check',
				'titulo' => 'COMPLIANCE EM EMPRESAS',
				'texto'  => 'Implementação de programas de integridade, gestão de riscos, auditorias preventivas e adequação estrutural para mitigação de passivos.',
				'rotulo' => 'Prevenção e controle',
			),
		),

		'socios' => array(
			array(
				'nome'     => 'Adriano Moralles',
				'cargo'    => 'Associado',
				'telefone' => '(84) 98735-7317',
				'numero'   => '5584987357317',
				'foto'     => 'imagens_time/adriano-moralles.webp',
			),
			array(
				'nome'     => 'Leandro Luz',
				'cargo'    => 'Associado',
				'telefone' => '(84) 99652-6162',
				'numero'   => '5584996526162',
				'foto'     => 'imagens_time/leandro-luz.webp',
			),
			array(
				'nome'     => 'Katrh Andrade',
				'cargo'    => 'Associada',
				'telefone' => '(84) 99990-1411',
				'numero'   => '5584999901411',
				'foto'     => 'imagens_time/katrh-andrade.webp',
			),
		),

		'portfolio' => array(
			array( 'imagens_portfolio/abs-wind.webp', 'ABS Wind Brasil' ),
			array( 'imagens_portfolio/seedconstrutora.webp', 'SEED Construtora' ),
			array( 'imagens_portfolio/viva-o-centro.webp', 'Viva o centro' ),
			array( 'imagens_portfolio/brasloger.webp', 'Brasloger' ),
		),

		'areas_rodape' => array(
			'Administrativo e Licitações',
			'Empresarial e Societário',
			'Tributário e Fiscal',
			'Trabalho Patronal',
			'Civil e Sucessões',
			'Criminal Econômico',
		),

		'areas_formulario' => array(
			'Direito Empresarial e Societário',
			'Direito Tributário',
			'Direito Administrativo e Licitações',
			'Direito Civil e Contratos',
			'Direito do Trabalho',
			'Direito Criminal',
			'Direito Militar',
			'Direito Desportivo',
			'Direito Eleitoral e Partidário',
			'Compliance',
			'Outra questão jurídica',
		),
	);

	return isset( $conteudo[ $secao ] ) ? $conteudo[ $secao ] : array();
}
