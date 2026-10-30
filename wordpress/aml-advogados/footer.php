	<footer class="rodape">

		<div class="conteudo rodape__grade">

			<div>
				<img src="<?php echo aml_arquivo( 'logo.webp' ); ?>" alt="<?php echo esc_attr( AML_NOME ); ?>" width="357" height="284"
					loading="lazy" decoding="async">

				<p>
					Sociedade de advogados com foco em atendimento personalizado,
					ética inegociável e soluções estratégicas de alto padrão técnico.
				</p>

				<b class="ouro">Natal • Rio Grande do Norte</b>
			</div>

			<div>
				<h2>Navegação</h2>
				<a href="<?php echo aml_link_secao( 'inicio' ); ?>">Início</a>
				<a href="<?php echo aml_link_secao( 'escritorio' ); ?>">O escritório</a>
				<a href="<?php echo aml_link_secao( 'areas' ); ?>">Áreas de atuação</a>
				<a href="<?php echo aml_link_secao( 'socios' ); ?>">Equipe</a>
				<a href="<?php echo aml_link_secao( 'portfolio' ); ?>">Portfólio</a>
				<a href="<?php echo aml_link_secao( 'artigos' ); ?>">Artigos</a>
				<a href="<?php echo aml_link_secao( 'contato' ); ?>">Contato</a>
			</div>

			<div>
				<h2>Áreas principais</h2>
				<?php foreach ( aml_conteudo( 'areas_rodape' ) as $area ) : ?>
					<span><?php echo esc_html( $area ); ?></span>
				<?php endforeach; ?>
			</div>

			<div>
				<h2>Sede Natal</h2>

				<span>
					<?php echo esc_html( aml_opcao( 'endereco' ) ); ?><br>
					<?php echo esc_html( aml_opcao( 'cidade' ) ); ?>
				</span>

				<span>
					Telefone: <?php echo esc_html( aml_opcao( 'telefone' ) ); ?>
				</span>
			</div>

		</div>

		<div class="conteudo rodape__base">
			<span>
				© <?php echo esc_html( AML_NOME ); ?>.
				Todos os direitos reservados.
			</span>
			<?php
			$id_politica = (int) get_option( 'wp_page_for_privacy_policy' );

			if ( $id_politica && 'publish' === get_post_status( $id_politica ) ) {
				printf( '<a href="%s">Política de Privacidade</a>', esc_url( get_permalink( $id_politica ) ) );
			}
			?>
		</div>

	</footer>

	<?php wp_footer(); ?>
</body>

</html>
