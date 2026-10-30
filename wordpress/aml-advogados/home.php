<?php
/**
 * Lista de artigos (a página "Artigos", definida em Configurações → Leitura).
 * Também serve para categorias, tags e arquivos por data (veja archive.php).
 */

get_header();

if ( is_home() ) {
	$titulo    = 'Artigos jurídicos';
	$descricao = 'Textos da nossa equipe sobre família, consumidor, trabalho, tributação e sucessões. Cada artigo traz a data de publicação.';
} else {
	$titulo    = wp_strip_all_tags( get_the_archive_title() );
	$descricao = wp_strip_all_tags( get_the_archive_description() );
}
?>

	<main id="conteudo" class="lista-artigos">
		<div class="lista-artigos__conteudo">

			<header class="lista-artigos__cabecalho">
				<span class="lista-artigos__selo">Blog AML</span>
				<h1><?php echo esc_html( $titulo ); ?></h1>
				<?php if ( $descricao ) : ?>
					<p><?php echo esc_html( $descricao ); ?></p>
				<?php endif; ?>
			</header>

			<?php if ( have_posts() ) : ?>
				<div class="lista-artigos__grade">
					<?php
					while ( have_posts() ) :
						the_post();
						$capa = aml_capa_artigo( get_the_ID(), 'medium_large' );
						?>
						<article class="lista-artigos__item">
							<a href="<?php the_permalink(); ?>">
								<img src="<?php echo esc_url( $capa['url'] ); ?>" alt="" width="<?php echo (int) $capa['largura']; ?>" height="<?php echo (int) $capa['altura']; ?>" loading="lazy" decoding="async">
								<div class="lista-artigos__corpo">
									<time class="lista-artigos__data" datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_date( 'd/m/Y' ) ); ?></time>
									<h2><?php the_title(); ?></h2>
									<p>Por <?php echo esc_html( aml_autor( get_the_ID() ) ); ?></p>
								</div>
							</a>
						</article>
					<?php endwhile; ?>
				</div>

				<?php
				the_posts_pagination(
					array(
						'class'              => 'paginacao',
						'prev_text'          => '← Anteriores',
						'next_text'          => 'Próximos →',
						'screen_reader_text' => 'Navegação entre as páginas de artigos',
						'aria_label'         => 'Páginas de artigos',
					)
				);
				?>
			<?php else : ?>
				<p class="lista-artigos__vazio">Nenhum artigo publicado ainda.</p>
			<?php endif; ?>

		</div>
	</main>

<?php
get_footer();
