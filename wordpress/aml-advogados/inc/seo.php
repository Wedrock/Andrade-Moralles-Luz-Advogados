<?php
/**
 * Título, descrição, Open Graph, dados estruturados (JSON-LD), cabeçalhos de
 * segurança e limpeza do <head>.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'AML_NOME', 'Andrade, Moralles & Luz Advogados' );

/**
 * Yoast e Rank Math já geram descrição, Open Graph e canonical. Com um
 * deles ativo, o tema deixa essas tags com o plugin.
 */
function aml_plugin_seo_ativo() {
	return defined( 'WPSEO_VERSION' ) || class_exists( 'RankMath' );
}

add_filter(
	'document_title_separator',
	function () {
		return '|';
	}
);

add_filter(
	'pre_get_document_title',
	function ( $titulo ) {
		if ( is_front_page() && ! aml_plugin_seo_ativo() ) {
			return AML_NOME . ' | Advocacia em Natal – RN';
		}
		return $titulo;
	}
);

/**
 * Resumo de até 155 caracteres, cortado no fim de uma palavra.
 */
function aml_resumo( $texto, $limite = 155 ) {
	$texto = trim( preg_replace( '/\s+/', ' ', wp_strip_all_tags( strip_shortcodes( $texto ) ) ) );

	if ( mb_strlen( $texto ) <= $limite ) {
		return $texto;
	}

	$corte = mb_substr( $texto, 0, $limite );
	$corte = mb_substr( $corte, 0, (int) mb_strrpos( $corte, ' ' ) );

	return rtrim( $corte, ',.;:' ) . '…';
}

function aml_descricao_pagina() {
	if ( is_front_page() ) {
		return aml_opcao( 'descricao_site' );
	}

	if ( is_home() ) {
		return 'Artigos sobre família, consumidor, trabalho, tributação e sucessões, escritos pela equipe do escritório Andrade, Moralles & Luz, de Natal (RN).';
	}

	if ( is_singular() ) {
		$post = get_queried_object();

		return aml_resumo( has_excerpt( $post ) ? $post->post_excerpt : $post->post_content );
	}

	return '';
}

function aml_url_pagina() {
	if ( is_front_page() ) {
		return home_url( '/' );
	}

	if ( is_home() ) {
		return aml_link_artigos();
	}

	if ( is_singular() ) {
		return wp_get_canonical_url();
	}

	return '';
}

add_action(
	'wp_head',
	function () {
		if ( aml_plugin_seo_ativo() || is_404() ) {
			return;
		}

		$descricao = aml_descricao_pagina();
		$url       = aml_url_pagina();
		$imagem    = is_singular( 'post' ) ? aml_capa_artigo( get_queried_object_id(), 'large' )['url'] : get_theme_file_uri( 'og-image.jpg' );
		if ( is_front_page() ) {
			$titulo = AML_NOME;
		} elseif ( is_singular() ) {
			$titulo = wp_strip_all_tags( get_the_title( get_queried_object_id() ) );
		} else {
			$titulo = wp_strip_all_tags( wp_get_document_title() );
		}

		if ( $descricao ) {
			printf( '<meta name="description" content="%s">' . "\n", esc_attr( $descricao ) );
		}

		$tags = array(
			'og:type'        => is_singular( 'post' ) ? 'article' : 'website',
			'og:locale'      => 'pt_BR',
			'og:site_name'   => AML_NOME,
			'og:title'       => $titulo,
			'og:description' => $descricao,
			'og:url'         => $url,
			'og:image'       => $imagem,
		);

		foreach ( $tags as $propriedade => $valor ) {
			if ( $valor ) {
				printf( '<meta property="%s" content="%s">' . "\n", esc_attr( $propriedade ), esc_attr( $valor ) );
			}
		}

		echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
	},
	1
);

// Ícones do navegador e do celular.
add_action(
	'wp_head',
	function () {
		if ( has_site_icon() ) {
			return;
		}

		printf( '<link rel="icon" type="image/png" sizes="48x48" href="%s">' . "\n", aml_arquivo( 'favicon.png' ) );
		printf( '<link rel="apple-touch-icon" href="%s">' . "\n", aml_arquivo( 'apple-touch-icon.png' ) );
		echo '<meta name="theme-color" content="#0b0f17">' . "\n";
	},
	3
);

// A página de erro 404 não deve aparecer no Google.
add_filter(
	'wp_robots',
	function ( $robots ) {
		if ( is_404() ) {
			$robots['noindex'] = true;
		}
		return $robots;
	}
);

/**
 * Dados estruturados: o escritório na página inicial e cada artigo.
 */
function aml_json_ld( $dados ) {
	echo '<script type="application/ld+json">' . wp_json_encode( $dados, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) . "</script>\n";
}

add_action(
	'wp_head',
	function () {
		$id_escritorio = home_url( '/#escritorio' );

		if ( is_front_page() ) {
			$fundadores = array();

			foreach ( array( 'Adriano Moralles', 'Leandro Luz', 'Katrh Andrade', 'Daliana Luz' ) as $nome ) {
				$fundadores[] = array(
					'@type' => 'Person',
					'name'  => $nome,
				);
			}

			$areas = array();

			foreach ( aml_conteudo( 'areas' ) as $area ) {
				$areas[] = mb_convert_case( $area['titulo'], MB_CASE_TITLE, 'UTF-8' );
			}

			aml_json_ld(
				array(
					'@context'                  => 'https://schema.org',
					'@type'                     => 'LegalService',
					'@id'                       => $id_escritorio,
					'name'                      => AML_NOME,
					'url'                       => home_url( '/' ),
					'logo'                      => get_theme_file_uri( 'logo.webp' ),
					'image'                     => get_theme_file_uri( 'og-image.jpg' ),
					'description'               => aml_opcao( 'descricao_site' ),
					'foundingDate'              => '2017',
					'telephone'                 => str_replace( 'tel:', '', aml_telefone_link( aml_opcao( 'telefone' ) ) ),
					'email'                     => aml_opcao( 'email' ),
					'address'                   => array(
						'@type'           => 'PostalAddress',
						'streetAddress'   => aml_opcao( 'endereco' ),
						'addressLocality' => 'Natal',
						'addressRegion'   => 'RN',
						'postalCode'      => '59025-400',
						'addressCountry'  => 'BR',
					),
					'openingHoursSpecification' => array(
						array(
							'@type'     => 'OpeningHoursSpecification',
							'dayOfWeek' => array( 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' ),
							'opens'     => '08:00',
							'closes'    => '18:00',
						),
					),
					'founder'                   => $fundadores,
					'knowsAbout'                => $areas,
					'areaServed'                => array(
						'@type' => 'State',
						'name'  => 'Rio Grande do Norte',
					),
					'sameAs'                    => array_values(
						array_filter( array( aml_opcao( 'facebook' ), aml_opcao( 'linkedin' ), aml_opcao( 'instagram' ) ) )
					),
				)
			);
		}

		if ( is_singular( 'post' ) ) {
			$post = get_queried_object();

			aml_json_ld(
				array(
					'@context'         => 'https://schema.org',
					'@type'            => 'BlogPosting',
					'headline'         => mb_substr( wp_strip_all_tags( get_the_title( $post ) ), 0, 110 ),
					'description'      => aml_descricao_pagina(),
					'image'            => aml_capa_artigo( $post->ID, 'large' )['url'],
					'datePublished'    => get_the_date( 'c', $post ),
					'dateModified'     => get_the_modified_date( 'c', $post ),
					'inLanguage'       => 'pt-BR',
					'author'           => array(
						'@type' => 'Person',
						'name'  => aml_autor( $post->ID ),
					),
					'publisher'        => array(
						'@type' => 'LegalService',
						'@id'   => $id_escritorio,
						'name'  => AML_NOME,
					),
					'mainEntityOfPage' => get_permalink( $post ),
				)
			);
		}
	}
);

// Cabeçalhos de segurança nas páginas públicas.
add_action(
	'send_headers',
	function () {
		if ( is_admin() ) {
			return;
		}

		header( 'X-Content-Type-Options: nosniff' );
		header( 'Referrer-Policy: strict-origin-when-cross-origin' );
		header( 'Permissions-Policy: camera=(), microphone=(), geolocation=()' );
		header( 'X-Frame-Options: SAMEORIGIN' );

		if ( is_ssl() ) {
			header( 'Strict-Transport-Security: max-age=31536000' );
		}
	}
);

// Tira do <head> o que só serve para revelar a versão ou pesar a página.
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
add_filter( 'the_generator', '__return_empty_string' );
