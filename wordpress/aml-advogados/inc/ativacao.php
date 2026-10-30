<?php
/**
 * Configuração feita uma vez, quando o tema é ativado em Aparência → Temas.
 *
 * - Usa a página "inicio" como página inicial e "artigos" como lista de artigos.
 * - Cria ou reaproveita a Política de Privacidade.
 * - Cria ou reaproveita as páginas de consulta processual.
 *
 * Páginas que já existem são reaproveitadas pelo endereço (slug), sem mudar
 * o endereço delas. Artigos, links permanentes e plugins não são alterados.
 * Pode ser repetida sem duplicar nada: basta reativar o tema.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Procura uma página pelo slug, em qualquer nível, inclusive rascunhos.
 */
function aml_encontrar_pagina( $slug ) {
	$paginas = get_posts(
		array(
			'post_type'      => 'page',
			'name'           => $slug,
			'post_status'    => array( 'publish', 'draft', 'pending', 'private' ),
			'posts_per_page' => 1,
			'orderby'        => 'ID',
			'order'          => 'ASC',
		)
	);

	return $paginas ? $paginas[0] : null;
}

/**
 * Garante que uma página exista e devolve o ID dela.
 */
function aml_garantir_pagina( $slug, $titulo, $pai = 0, $conteudo = '' ) {
	$pagina = aml_encontrar_pagina( $slug );

	if ( $pagina ) {
		return (int) $pagina->ID;
	}

	return (int) wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => $titulo,
			'post_name'    => $slug,
			'post_parent'  => $pai,
			'post_content' => $conteudo,
		)
	);
}

function aml_configurar_site() {
	$ids = (array) get_option( 'aml_paginas', array() );

	// Página inicial e página de artigos.
	$ids['inicio']  = aml_garantir_pagina( 'inicio', 'Início' );
	$ids['artigos'] = aml_garantir_pagina( 'artigos', 'Artigos' );

	update_option( 'show_on_front', 'page' );
	update_option( 'page_on_front', $ids['inicio'] );
	update_option( 'page_for_posts', $ids['artigos'] );

	// Política de Privacidade: o texto do tema só entra se a página ainda não
	// estiver publicada, para nunca sobrescrever um texto já revisado.
	$politica       = get_theme_file_path( 'conteudo-padrao/politica-de-privacidade.html' );
	$texto_politica = file_exists( $politica ) ? file_get_contents( $politica ) : '';
	$id_politica    = (int) get_option( 'wp_page_for_privacy_policy' );

	if ( ! $id_politica || ! get_post( $id_politica ) ) {
		$id_politica = aml_garantir_pagina( 'politica-de-privacidade', 'Política de Privacidade', 0, $texto_politica );
	}

	if ( 'publish' !== get_post_status( $id_politica ) ) {
		wp_update_post(
			array(
				'ID'           => $id_politica,
				'post_title'   => 'Política de Privacidade',
				'post_content' => $texto_politica,
				'post_status'  => 'publish',
			)
		);
	}

	update_option( 'wp_page_for_privacy_policy', $id_politica );
	$ids['privacidade'] = $id_politica;

	// Páginas de consulta processual (os pais vêm antes dos filhos na lista).
	foreach ( aml_paginas_consulta() as $chave => $pagina ) {
		$pai = ( $pagina['pai'] && ! empty( $ids[ $pagina['pai'] ] ) ) ? $ids[ $pagina['pai'] ] : 0;
		$id  = aml_garantir_pagina( $pagina['slug'], $pagina['titulo'], $pai );

		update_post_meta( $id, '_wp_page_template', 'page-templates/consulta-processual.php' );
		update_post_meta( $id, '_aml_chave', $chave );

		$ids[ $chave ] = $id;
	}

	update_option( 'aml_paginas', $ids );
}

add_action( 'after_switch_theme', 'aml_configurar_site' );
