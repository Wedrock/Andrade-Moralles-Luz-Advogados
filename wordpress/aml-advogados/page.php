<?php
/**
 * Página comum (por exemplo, a Política de Privacidade).
 */

get_header();

while ( have_posts() ) :
	the_post();
	?>

	<main id="conteudo" class="documento">
		<article class="conteudo documento__conteudo">
			<h1><?php the_title(); ?></h1>

			<?php if ( (int) get_option( 'wp_page_for_privacy_policy' ) === get_the_ID() ) : ?>
				<p class="documento__data">
					Última atualização:
					<time datetime="<?php echo esc_attr( get_the_modified_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_modified_date( 'j \d\e F \d\e Y' ) ); ?></time>
				</p>
			<?php endif; ?>

			<?php the_content(); ?>
		</article>
	</main>

	<?php
endwhile;

get_footer();
