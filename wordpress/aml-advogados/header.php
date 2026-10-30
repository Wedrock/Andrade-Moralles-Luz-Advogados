<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<a class="pular-conteudo" href="#conteudo">Pular para o conteúdo</a>

	<header class="cabecalho">
		<div class="cabecalho__container">
			<a class="cabecalho__marca" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<img src="<?php echo aml_arquivo( 'logo.webp' ); ?>" alt="<?php echo esc_attr( AML_NOME ); ?>" width="357" height="284">
				<span>Andrade, Moralles &amp; Luz</span>
			</a>

			<div class="cabecalho__menu">
				<button class="cabecalho__botao" type="button" aria-label="Abrir menu" aria-expanded="false"
					aria-controls="menu-principal">
					<?php aml_icone( 'menu' ); ?>
				</button>

				<nav class="cabecalho__navegacao" id="menu-principal" aria-label="Menu principal">
					<?php
					$itens = array(
						'inicio'     => 'Início',
						'escritorio' => 'O escritório',
						'areas'      => 'Áreas de atuação',
						'socios'     => 'Equipe',
						'portfolio'  => 'Portfólio',
						'artigos'    => 'Artigos',
						'contato'    => 'Contato',
					);

					foreach ( $itens as $ancora => $rotulo ) {
						$ativo = is_front_page() && 'inicio' === $ancora;

						printf(
							'<a href="%s" class="cabecalho__link%s"%s>%s</a>',
							aml_link_secao( $ancora ),
							$ativo ? ' cabecalho__link--ativo' : '',
							$ativo ? ' aria-current="page"' : '',
							esc_html( $rotulo )
						);
					}
					?>
					<a href="<?php echo esc_url( aml_link_chave( 'consulta' ) ); ?>" class="cabecalho__cta">Consulta processual</a>
				</nav>
			</div>

			<div class="cabecalho__sociais">
				<?php get_template_part( 'template-parts/redes-sociais' ); ?>
			</div>
		</div>
	</header>
