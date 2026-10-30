<?php
/**
 * Página de um artigo.
 */

get_header();

while ( have_posts() ) :
	the_post();

	$capa        = aml_capa_artigo( get_the_ID(), 'large' );
	$publicado   = get_the_date( 'd/m/Y' );
	$atualizado  = get_the_modified_date( 'd/m/Y' );
	$foi_editado = get_the_modified_date( 'Y-m-d' ) !== get_the_date( 'Y-m-d' );
	?>

	<main id="conteudo" class="artigo-page">

		<section class="artigo-header" style="background-image: linear-gradient(rgba(11, 13, 18, 0.85), rgba(11, 13, 18, 0.95)), url('<?php echo esc_url( $capa['url'] ); ?>');">
			<div class="artigo-header__conteudo">
				<span class="artigo-header__selo">Blog AML</span>
				<h1><?php the_title(); ?></h1>
				<div class="artigo-header__meta">
					<span><?php aml_icone( 'calendar_today' ); ?> <time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( $publicado ); ?></time></span>
					<span><?php aml_icone( 'person' ); ?> <?php echo esc_html( aml_autor( get_the_ID() ) ); ?></span>
				</div>
			</div>
		</section>

		<section class="artigo-content">
			<div class="artigo-texto">
				<?php the_content(); ?>

				<div class="artigo-aviso" role="note">
					<p>
						<strong>Publicado em <?php echo esc_html( $publicado ); ?><?php echo $foi_editado ? esc_html( ', atualizado em ' . $atualizado ) : ''; ?>.</strong>
						Leis e entendimentos dos tribunais mudam com o tempo, e este texto pode não refletir a situação atual.
						Antes de tomar uma decisão, <a href="<?php echo aml_link_secao( 'contato' ); ?>">fale com a nossa equipe</a>.
					</p>
				</div>
			</div>
		</section>

	</main>

	<?php
endwhile;

get_footer();
