<?php
/**
 * Ícones das redes sociais do cabeçalho.
 */

$redes = array(
	'facebook'  => array(
		'Facebook',
		'<svg aria-hidden="true" focusable="false" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3h1.8l.3-2.1h-2.1V9.8c0-.6.2-1 1-1h1.1V6.9c-.2 0-.9-.1-1.7-.1-1.7 0-2.8 1-2.8 2.9v1.4H13v2.1h1.9v5.3h3.6z" /></svg>',
	),
	'linkedin'  => array(
		'LinkedIn',
		'<svg aria-hidden="true" focusable="false" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-3.36v8.37h3.36v-4.65c0-.98.79-1.77 1.77-1.77s1.77.79 1.77 1.77v4.65h3.36zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>',
	),
	'instagram' => array(
		'Instagram',
		'<svg aria-hidden="true" focusable="false" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
	),
);

foreach ( $redes as $chave => $rede ) {
	$url = aml_opcao( $chave );

	if ( $url ) {
		printf(
			'<a href="%s" target="_blank" rel="noopener noreferrer" aria-label="%s">%s</a>',
			esc_url( $url ),
			esc_attr( $rede[0] ),
			$rede[1] // SVG fixo do próprio tema.
		);
	}
}
