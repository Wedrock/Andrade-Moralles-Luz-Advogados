<?php
/**
 * Template Name: Consulta processual
 *
 * Mostra a página de consulta indicada no campo _aml_chave (escolha do estado,
 * escolha do tribunal, links do tribunal ou consulta embutida). Os dados
 * ficam em inc/tribunais.php.
 */

get_header();

$paginas = aml_paginas_consulta();
$chave   = get_post_meta( get_the_ID(), '_aml_chave', true );
$pagina  = isset( $paginas[ $chave ] ) ? $paginas[ $chave ] : null;

if ( ! $pagina ) :
	// Modelo aplicado a outra página: mostra o conteúdo dela normalmente.
	?>
	<main id="conteudo" class="documento">
		<article class="conteudo documento__conteudo">
			<h1><?php the_title(); ?></h1>
			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile;
			?>
		</article>
	</main>
	<?php
	get_footer();
	return;
endif;

if ( 'estados' === $pagina['tipo'] ) :
	?>
	<main id="conteudo" class="consulta">
		<section class="consulta__secao">
			<div class="conteudo consulta__conteudo">
				<h1>Consulte o seu processo</h1>
				<p>
					Escolha o estado em que o processo tramita para ver os links oficiais de consulta
					de cada tribunal. Se tiver dúvidas, <a href="<?php echo aml_link_secao( 'contato' ); ?>">fale com a nossa equipe</a>.
				</p>
				<div class="consulta__estados">
					<a href="<?php echo esc_url( aml_link_chave( 'rn' ) ); ?>" class="consulta__estado">Rio Grande do Norte</a>
				</div>
				<p class="consulta__outros">
					Também atuamos em processos na Paraíba, no Distrito Federal, em Roraima, no Ceará, em
					Pernambuco e em São Paulo. A consulta para esses estados ainda não está nesta página;
					para saber do andamento, <a href="<?php echo aml_link_secao( 'contato' ); ?>">entre em contato</a>.
				</p>
			</div>
		</section>
	</main>
	<?php
	get_footer();
	return;
endif;

// Trilha de navegação: Início > ... > página atual.
$trilha = array();
$pai    = $pagina['pai'];

while ( $pai && isset( $paginas[ $pai ] ) ) {
	array_unshift( $trilha, array( $paginas[ $pai ]['titulo'], aml_link_chave( $pai ) ) );
	$pai = $paginas[ $pai ]['pai'];
}
?>

	<main id="conteudo" class="consulta-page">

		<section class="destaque consulta-cabecalho">
			<div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(180deg, rgba(11, 13, 18, 0.55), rgba(11, 13, 18, 0.8)), url('<?php echo aml_arquivo( 'colunas.webp' ); ?>');"></div>
			<div class="conteudo">
				<h1 class="destaque__titulo"><?php echo esc_html( $pagina['titulo'] ); ?></h1>
				<nav class="migalhas" aria-label="Você está em">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Início</a> &gt;
					<?php foreach ( $trilha as $item ) : ?>
						<a href="<?php echo esc_url( $item[1] ); ?>"><?php echo esc_html( $item[0] ); ?></a> &gt;
					<?php endforeach; ?>
					<span aria-current="page"><?php echo esc_html( $pagina['titulo'] ); ?></span>
				</nav>
			</div>
		</section>

		<?php if ( 'orgaos' === $pagina['tipo'] ) : ?>

			<section class="tribunais">
				<div class="conteudo tribunais__grade tribunais__grade--orgaos">
					<?php foreach ( $pagina['orgaos'] as $orgao ) : ?>
						<a href="<?php echo esc_url( aml_link_chave( $orgao['pagina'] ) ); ?>" class="tribunal-cartao">
							<img src="<?php echo aml_arquivo( $orgao['logo'] ); ?>" alt="<?php echo esc_attr( $orgao['alt'] ); ?>" loading="lazy" decoding="async">
							<h2 style="color: <?php echo esc_attr( $orgao['cor'] ); ?>;"><?php echo esc_html( $orgao['titulo'] ); ?></h2>
							<?php if ( $orgao['subtitulo'] ) : ?>
								<p style="color: <?php echo esc_attr( $orgao['cor_sub'] ); ?>;"><?php echo esc_html( $orgao['subtitulo'] ); ?></p>
							<?php endif; ?>
						</a>
					<?php endforeach; ?>
				</div>
			</section>

		<?php elseif ( 'links' === $pagina['tipo'] ) : ?>

			<section class="tribunais">
				<div class="conteudo tribunais__grade">
					<?php
					foreach ( $pagina['links'] as $link ) :
						$interno = 0 === strpos( $link[1], 'pagina:' );
						$destino = $interno ? aml_link_chave( substr( $link[1], 7 ) ) : $link[1];
						?>
						<a href="<?php echo esc_url( $destino ); ?>" class="tribunal-link"<?php echo $interno ? '' : ' target="_blank" rel="noopener noreferrer"'; ?>>
							<span class="tribunal-link__icone"><?php aml_icone( 'search' ); ?></span>
							<h2><?php echo esc_html( $link[0] ); ?></h2>
						</a>
					<?php endforeach; ?>
				</div>
			</section>

		<?php elseif ( 'iframe' === $pagina['tipo'] ) : ?>

			<section class="tribunais tribunais--embutido">
				<div class="conteudo">
					<iframe class="tribunal-embutido" src="<?php echo esc_url( $pagina['iframe'] ); ?>" title="<?php echo esc_attr( $pagina['rotulo'] ); ?>" loading="lazy"></iframe>
				</div>
			</section>

		<?php endif; ?>

	</main>

<?php
get_footer();
