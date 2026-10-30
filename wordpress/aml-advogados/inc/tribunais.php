<?php
/**
 * Páginas de consulta processual.
 *
 * Todas usam o modelo "Consulta processual". Cada página guarda no campo
 * _aml_chave qual item desta lista ela mostra; o tema preenche isso sozinho
 * ao ser ativado (veja inc/ativacao.php).
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function aml_paginas_consulta() {
	return array(

		// Escolha do estado.
		'consulta'            => array(
			'titulo' => 'Consulta processual',
			'slug'   => 'consulta-processual',
			'pai'    => '',
			'tipo'   => 'estados',
		),

		// Escolha do tribunal no Rio Grande do Norte.
		'rn'                  => array(
			'titulo' => 'Consulta Processual – Rio Grande do Norte',
			'slug'   => 'consulta-processual-rio-grande-do-norte',
			'pai'    => '',
			'tipo'   => 'orgaos',
			'orgaos' => array(
				array(
					'pagina'    => 'federal',
					'logo'      => 'imagens_tribunais/justica-federal-rn.webp',
					'alt'       => 'Justiça Federal',
					'titulo'    => 'JUSTIÇA FEDERAL',
					'subtitulo' => 'Seção Judiciária do Rio Grande do Norte',
					'cor'       => '#333',
					'cor_sub'   => '#666',
				),
				array(
					'pagina'    => 'tj',
					'logo'      => 'imagens_tribunais/tjrn.webp',
					'alt'       => 'Tribunal de Justiça',
					'titulo'    => 'TRIBUNAL DE JUSTIÇA',
					'subtitulo' => 'RIO GRANDE DO NORTE',
					'cor'       => '#B31B1B',
					'cor_sub'   => '#B31B1B',
				),
				array(
					'pagina'    => 'trt',
					'logo'      => 'imagens_tribunais/trt21-rn.webp',
					'alt'       => 'Justiça do Trabalho',
					'titulo'    => 'JUSTIÇA DO TRABALHO',
					'subtitulo' => 'Tribunal Regional do Trabalho da 21ª Região (RN)',
					'cor'       => '#005A9C',
					'cor_sub'   => '#005A9C',
				),
				array(
					'pagina'    => 'tre',
					'logo'      => 'imagens_tribunais/tre-rn.webp',
					'alt'       => 'TRE-RN',
					'titulo'    => 'Tribunal Regional Eleitoral-RN',
					'subtitulo' => '',
					'cor'       => '#111',
					'cor_sub'   => '#111',
				),
			),
		),

		'federal'             => array(
			'titulo' => 'Justiça Federal – Rio Grande do Norte',
			'slug'   => 'justica-federal-rio-grande-do-norte',
			'pai'    => 'rn',
			'tipo'   => 'links',
			'links'  => array(
				array( 'Juizado (Creta)', 'https://juizado.jfrn.jus.br/cretainternetrn/consulta/processo/pesquisar2.wsp' ),
				array( 'PJe', 'pagina:federal-pje' ),
				array( 'PJe Juizado Especial', 'pagina:federal-pje-juizado' ),
				array( 'PJe Turma Recursal', 'pagina:federal-pje-turma' ),
			),
		),

		'tj'                  => array(
			'titulo' => 'Tribunal de Justiça – Rio Grande do Norte',
			'slug'   => 'tribunal-de-justica-rn',
			'pai'    => 'rn',
			'tipo'   => 'links',
			'links'  => array(
				array( 'PJe (1º Grau)', 'https://pje1g.tjrn.jus.br/pje/ConsultaPublica/listView.seam' ),
				array( 'PJe (2º Grau)', 'https://pje2g.tjrn.jus.br/pje/ConsultaPublica/listView.seam' ),
				array( 'e-SAJ', 'https://esaj.tjrn.jus.br/cpopg/open.do' ),
			),
		),

		'trt'                 => array(
			'titulo' => 'Justiça do Trabalho (TRT 21) – Rio Grande do Norte',
			'slug'   => 'trt-21-rn',
			'pai'    => 'rn',
			'tipo'   => 'links',
			'links'  => array(
				array( 'PJe (TRT 21)', 'https://pje.trt21.jus.br/consultaprocessual/' ),
			),
		),

		'tre'                 => array(
			'titulo' => 'Tribunal Regional Eleitoral – RN',
			'slug'   => 'tre-rn',
			'pai'    => 'rn',
			'tipo'   => 'links',
			'links'  => array(
				array( 'Consulta Pública Unificada PJe', 'https://consultaunificadapje.tse.jus.br/' ),
			),
		),

		'federal-pje'         => array(
			'titulo' => 'PJe',
			'slug'   => 'pje-justica-federal-rn',
			'pai'    => 'federal',
			'tipo'   => 'iframe',
			'iframe' => 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam',
			'rotulo' => 'Consulta pública do PJe da Justiça Federal no RN',
		),

		'federal-pje-juizado' => array(
			'titulo' => 'PJe Juizado Especial',
			'slug'   => 'pje-juizado-especial-federal-rn',
			'pai'    => 'federal',
			'tipo'   => 'iframe',
			'iframe' => 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam',
			'rotulo' => 'Consulta pública do PJe do Juizado Especial Federal (JFRN)',
		),

		'federal-pje-turma'   => array(
			'titulo' => 'PJe Turma Recursal',
			'slug'   => 'pje-turma-recursal-federal-rn',
			'pai'    => 'federal',
			'tipo'   => 'iframe',
			'iframe' => 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam',
			'rotulo' => 'Consulta pública do PJe da Turma Recursal (JFRN)',
		),
	);
}

/**
 * Endereço de uma página do tema pela chave (por exemplo, "tj").
 */
function aml_link_chave( $chave ) {
	$ids = (array) get_option( 'aml_paginas', array() );

	if ( ! empty( $ids[ $chave ] ) && get_post_status( $ids[ $chave ] ) ) {
		return get_permalink( $ids[ $chave ] );
	}

	$paginas = aml_paginas_consulta();

	if ( isset( $paginas[ $chave ] ) ) {
		return aml_link_pagina( $paginas[ $chave ]['slug'] );
	}

	return home_url( '/' );
}
