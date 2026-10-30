<?php
/**
 * Opções do site em Aparência → Personalizar → "Site AML".
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function aml_opcoes_padrao() {
	return array(
		'titulo_topo'    => 'Ética, Inovação<br> e comprometimento.',
		'texto_topo'     => 'Um escritório com soluções jurídicas desenvolvidas para atender com excelência de maneira ágil e eficiente à obtenção de seus objetivos.',
		'botao_topo'     => 'Entre em contato',
		'descricao_site' => 'Sociedade de advogados em Natal (RN) desde 2017. Atuação consultiva e contenciosa em direito empresarial, tributário, trabalhista, civil, criminal e administrativo.',
		'telefone'       => '(84) 3025-1835',
		'whatsapp'       => '5584987357317',
		'email'          => 'contato@andrademoralleseluz.adv.br',
		'endereco'       => 'Rua Princesa Isabel, 477 - Sala 1 – Cidade Alta',
		'cidade'         => 'Natal – RN, CEP 59025-400',
		'horario'        => 'Atendimento de segunda a sexta, das 08h às 18h',
		'facebook'       => 'https://www.facebook.com/andrademoralleseluz',
		'linkedin'       => 'https://www.linkedin.com/company/andrademoralleseluz/',
		'instagram'      => 'https://www.instagram.com/andrademoralleseluz/',
		'video_youtube'  => 'FWVehlWibjY',
	);
}

/**
 * Valor de uma opção, ou o padrão do site se ela nunca foi alterada.
 */
function aml_opcao( $chave ) {
	$padrao = aml_opcoes_padrao();

	return get_theme_mod( 'aml_' . $chave, isset( $padrao[ $chave ] ) ? $padrao[ $chave ] : '' );
}

/**
 * Telefone no formato de link (tel:+558430251835).
 */
function aml_telefone_link( $telefone ) {
	$digitos = preg_replace( '/\D/', '', $telefone );

	if ( strlen( $digitos ) <= 11 ) {
		$digitos = '55' . $digitos;
	}

	return 'tel:+' . $digitos;
}

function aml_limpar_titulo( $valor ) {
	return wp_kses( $valor, array( 'br' => array() ) );
}

function aml_limpar_youtube( $valor ) {
	// Aceita o código do vídeo ou o link completo do YouTube.
	if ( preg_match( '~(?:v=|youtu\.be/|shorts/|embed/)([\w-]{11})~', $valor, $partes ) ) {
		return $partes[1];
	}

	return preg_match( '/^[\w-]{11}$/', $valor ) ? $valor : '';
}

add_action(
	'customize_register',
	function ( $personalizar ) {
		$padrao = aml_opcoes_padrao();

		$personalizar->add_section(
			'aml_site',
			array(
				'title'       => 'Site AML',
				'priority'    => 30,
				'description' => 'Textos do topo, contatos, redes sociais e vídeo da página inicial.',
			)
		);

		$campos = array(
			'titulo_topo'    => array( 'Título do topo (use <br> para quebrar a linha)', 'text', 'aml_limpar_titulo' ),
			'texto_topo'     => array( 'Texto do topo', 'textarea', 'sanitize_textarea_field' ),
			'botao_topo'     => array( 'Texto do botão do topo', 'text', 'sanitize_text_field' ),
			'descricao_site' => array( 'Descrição do site no Google (até 155 caracteres)', 'textarea', 'sanitize_textarea_field' ),
			'telefone'       => array( 'Telefone fixo', 'text', 'sanitize_text_field' ),
			'whatsapp'       => array( 'WhatsApp que recebe o formulário (só números, com 55 e DDD)', 'text', 'aml_limpar_numeros' ),
			'email'          => array( 'E-mail', 'email', 'sanitize_email' ),
			'endereco'       => array( 'Endereço (rua, número, bairro)', 'text', 'sanitize_text_field' ),
			'cidade'         => array( 'Cidade e CEP', 'text', 'sanitize_text_field' ),
			'horario'        => array( 'Horário de atendimento', 'text', 'sanitize_text_field' ),
			'facebook'       => array( 'Facebook', 'url', 'esc_url_raw' ),
			'linkedin'       => array( 'LinkedIn', 'url', 'esc_url_raw' ),
			'instagram'      => array( 'Instagram', 'url', 'esc_url_raw' ),
			'video_youtube'  => array( 'Vídeo institucional (link ou código do YouTube)', 'text', 'aml_limpar_youtube' ),
		);

		foreach ( $campos as $chave => $campo ) {
			$personalizar->add_setting(
				'aml_' . $chave,
				array(
					'default'           => $padrao[ $chave ],
					'sanitize_callback' => $campo[2],
				)
			);
			$personalizar->add_control(
				'aml_' . $chave,
				array(
					'label'   => $campo[0],
					'section' => 'aml_site',
					'type'    => $campo[1],
				)
			);
		}
	}
);

function aml_limpar_numeros( $valor ) {
	return preg_replace( '/\D/', '', $valor );
}
