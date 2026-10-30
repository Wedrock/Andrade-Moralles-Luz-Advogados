<?php
/**
 * Página não encontrada.
 */

get_header();
?>

	<main id="conteudo" class="documento documento--erro">
		<div class="conteudo documento__conteudo">
			<p class="documento__codigo">Erro 404</p>
			<h1>Página não encontrada</h1>
			<p>
				O endereço pode ter mudado ou ter sido digitado com erro. Os artigos estão
				todos na <a href="<?php echo esc_url( aml_link_artigos() ); ?>">página de artigos</a>.
			</p>
			<p>
				<a class="botao botao--escuro botao--auto" href="<?php echo esc_url( home_url( '/' ) ); ?>">Voltar para o início</a>
			</p>
		</div>
	</main>

<?php
get_footer();
