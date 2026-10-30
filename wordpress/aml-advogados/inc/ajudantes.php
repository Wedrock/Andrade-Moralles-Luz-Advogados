<?php
/**
 * Funções pequenas usadas pelos modelos do tema.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Endereço de um arquivo do tema (imagens, por exemplo).
 */
function aml_arquivo( $caminho ) {
	return esc_url( get_theme_file_uri( $caminho ) );
}

/**
 * Endereço de uma página pelo caminho (slug). Se a página não existir,
 * volta para a página inicial em vez de gerar um link quebrado.
 */
function aml_link_pagina( $caminho ) {
	$pagina = get_page_by_path( $caminho );

	return $pagina ? get_permalink( $pagina ) : home_url( '/' );
}

/**
 * Endereço de uma seção da página inicial (por exemplo, #contato).
 */
function aml_link_secao( $ancora ) {
	return esc_url( home_url( '/#' . $ancora ) );
}

/**
 * Endereço da página de artigos.
 */
function aml_link_artigos() {
	$id = (int) get_option( 'page_for_posts' );

	return $id ? get_permalink( $id ) : home_url( '/' );
}

/**
 * Ícone da fonte Material Symbols, escondido dos leitores de tela.
 */
function aml_icone( $nome, $classe = '' ) {
	printf(
		'<span class="material-symbols-outlined%s" aria-hidden="true">%s</span>',
		$classe ? ' ' . esc_attr( $classe ) : '',
		esc_html( $nome )
	);
}

/**
 * Imagem de capa de um artigo, com a imagem padrão do site como reserva.
 *
 * @return array{url: string, largura: int, altura: int}
 */
function aml_capa_artigo( $post_id, $tamanho = 'large' ) {
	$id_imagem = get_post_thumbnail_id( $post_id );

	if ( $id_imagem ) {
		$imagem = wp_get_attachment_image_src( $id_imagem, $tamanho );

		if ( $imagem ) {
			return array(
				'url'     => $imagem[0],
				'largura' => (int) $imagem[1],
				'altura'  => (int) $imagem[2],
			);
		}
	}

	return array(
		'url'     => get_theme_file_uri( 'og-image.jpg' ),
		'largura' => 1200,
		'altura'  => 630,
	);
}

/**
 * Nome do autor como aparece no site.
 */
function aml_autor( $post_id ) {
	$autor = get_the_author_meta( 'display_name', (int) get_post_field( 'post_author', $post_id ) );

	return $autor ? $autor : 'Equipe AML';
}
