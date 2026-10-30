<?php
/**
 * Tema AML Advogados.
 *
 * Os arquivos em inc/ dividem as responsabilidades:
 * - ajudantes.php: funções pequenas usadas pelos modelos (imagens, links).
 * - conteudo.php: textos e listas da página inicial (equipe, áreas, portfólio).
 * - tribunais.php: links das páginas de consulta processual.
 * - personalizar.php: opções editáveis em Aparência → Personalizar.
 * - seo.php: título, descrição, Open Graph, dados estruturados e cabeçalhos.
 * - ativacao.php: o que o tema configura sozinho ao ser ativado.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AML_VERSAO', '1.0.0' );

// Só os ícones usados no site são baixados da fonte Material Symbols.
define(
	'AML_ICONES',
	'account_balance,arrow_forward,badge,calendar_today,call,chat,chevron_left,chevron_right,corporate_fare,diversity_3,fact_check,gavel,handshake,how_to_vote,location_on,mail,map,menu,military_tech,pause,person,play_arrow,public,receipt_long,search,sports_soccer'
);

require get_template_directory() . '/inc/ajudantes.php';
require get_template_directory() . '/inc/conteudo.php';
require get_template_directory() . '/inc/tribunais.php';
require get_template_directory() . '/inc/personalizar.php';
require get_template_directory() . '/inc/seo.php';
require get_template_directory() . '/inc/ativacao.php';

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
		add_theme_support( 'responsive-embeds' );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style(
			'aml-fontes',
			'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap',
			array(),
			null
		);
		wp_enqueue_style(
			'aml-icones',
			'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=' . AML_ICONES . '&display=block',
			array(),
			null
		);
		wp_enqueue_style( 'aml-site', get_theme_file_uri( 'styles.css' ), array(), AML_VERSAO );
		wp_enqueue_style( 'aml-tema', get_theme_file_uri( 'tema.css' ), array( 'aml-site' ), AML_VERSAO );

		wp_enqueue_script( 'aml-site', get_theme_file_uri( 'script.js' ), array(), AML_VERSAO, true );
	}
);

// Conecta antecipadamente ao Google Fonts, como no site estático.
add_filter(
	'wp_resource_hints',
	function ( $urls, $tipo ) {
		if ( 'preconnect' === $tipo ) {
			$urls[] = 'https://fonts.googleapis.com';
			$urls[] = array(
				'href'        => 'https://fonts.gstatic.com',
				'crossorigin' => 'anonymous',
			);
		}
		return $urls;
	},
	10,
	2
);

// Na página inicial, a foto das colunas é a primeira coisa a aparecer.
add_action(
	'wp_head',
	function () {
		if ( is_front_page() ) {
			printf(
				'<link rel="preload" as="image" type="image/webp" href="%s" fetchpriority="high">' . "\n",
				esc_url( get_theme_file_uri( 'colunas.webp' ) )
			);
		}
	},
	2
);

// Novas imagens enviadas à biblioteca de mídia geram tamanhos em WebP.
add_filter(
	'image_editor_output_format',
	function ( $formatos ) {
		$formatos['image/jpeg'] = 'image/webp';
		$formatos['image/png']  = 'image/webp';
		return $formatos;
	}
);

// Lista de artigos: 12 por página.
add_action(
	'pre_get_posts',
	function ( $consulta ) {
		if ( ! is_admin() && $consulta->is_main_query() && ( $consulta->is_home() || $consulta->is_archive() ) ) {
			$consulta->set( 'posts_per_page', 12 );
		}
	}
);
