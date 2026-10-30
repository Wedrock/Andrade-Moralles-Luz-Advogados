<?php
/**
 * Página inicial. Usada automaticamente para a página definida como inicial
 * em Configurações → Leitura (o tema define a página "Início" ao ser ativado).
 */

get_header();

$endereco_mapa = rawurlencode( 'Rua Princesa Isabel, 477, Cidade Alta, Natal - RN, 59025-400' );
?>

	<main id="conteudo">

		<section class="abertura" id="inicio">
			<div class="conteudo abertura__conteudo">
				<h1><?php echo aml_limpar_titulo( aml_opcao( 'titulo_topo' ) ); ?></h1>

				<span class="abertura__divisor" aria-hidden="true"></span>

				<p><?php echo esc_html( aml_opcao( 'texto_topo' ) ); ?></p>

				<a class="abertura__botao" href="#contato"><?php echo esc_html( aml_opcao( 'botao_topo' ) ); ?></a>
			</div>
		</section>

		<section class="pilares" aria-labelledby="titulo-pilares">
			<h2 class="visualmente-oculto" id="titulo-pilares">Missão, visão e valores</h2>
			<div class="conteudo pilares__grade" id="pilares">
				<?php foreach ( aml_conteudo( 'pilares' ) as $pilar ) : ?>
					<article class="pilar <?php echo $pilar['escuro'] ? 'pilar--escuro' : ''; ?>">
						<?php aml_icone( $pilar['icone'], 'pilar__icone' ); ?>
						<div>
							<h3><?php echo esc_html( $pilar['titulo'] ); ?></h3>
							<p><?php echo esc_html( $pilar['texto'] ); ?></p>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</section>

		<section class="historia" id="escritorio">
			<div class="conteudo historia__grade">

				<div class="historia__texto">
					<span class="etiqueta etiqueta--linha">
						Nossa origem
					</span>

					<h2>
						Conheça um pouco da nossa <em>história</em>
					</h2>

					<p>
						O Escritório de Advocacia Andrade, Moralles e Luz Advogados está
						sediado na cidade de Natal, Rio Grande do Norte e foi fundado em 2017
						com foco na atuação ética e tratamento individualizado de cada processo,
						de atuação diversificada (<em>full-service</em>) e especializado em
						operações multidisciplinares. Atuando também com foco no contencioso e
						consultivo, de forma a prevenir, solucionar conflitos e entregar
						soluções inovadoras para nossos clientes e parceiros.
					</p>

					<p>
						Está em nosso DNA contribuir significativamente para a estratégia de
						negócio de nossos clientes e parceiros em ambientes cada vez mais
						complexos, oferecendo uma visão abrangente e antecipando questões que
						se refletem no Direito. A exclusividade no atendimento e a eficiência
						nos resultados são traços marcantes em nosso escritório.
					</p>

					<p>
						Seus fundadores tomaram para alicerce os valores individuais e um
						tratamento diferenciado, mantendo um espírito inovador em tudo que
						fazem. Com uma visão ampla e abrangente, nasce a missão de levar a cada
						pessoa um atendimento humanizado, confiante, ético e transparente.
					</p>

					<a class="botao botao--escuro botao--auto" href="#contato">
						Entrar em contato
						<?php aml_icone( 'arrow_forward' ); ?>
					</a>

					<small class="historia__fundadores">
						<?php aml_icone( 'gavel' ); ?>
						Fundado pelos Sócios Adriano Moralles, Leandro Luz,
						Katrh Andrade e Daliana Luz
					</small>
				</div>

				<?php if ( aml_opcao( 'video_youtube' ) ) : ?>
					<div class="historia__video">
						<button class="historia__video-botao" type="button" data-video="<?php echo esc_attr( aml_opcao( 'video_youtube' ) ); ?>"
							aria-label="Assistir ao vídeo institucional do escritório (abre o player do YouTube)">
							<img src="<?php echo aml_arquivo( 'video-capa.webp' ); ?>" alt="" width="960" height="720" loading="lazy" decoding="async">
							<span class="historia__video-play" aria-hidden="true">
								<span class="material-symbols-outlined">play_arrow</span>
							</span>
						</button>
					</div>
				<?php endif; ?>

			</div>
		</section>

		<section class="numeros">
			<div class="conteudo">
				<ul class="numeros__lista">
					<?php foreach ( aml_conteudo( 'numeros' ) as $numero ) : ?>
						<li>
							<strong><?php echo esc_html( $numero[0] ); ?></strong>
							<span><?php echo esc_html( $numero[1] ); ?></span>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</section>

		<section class="areas" id="areas">
			<div class="conteudo">

				<header class="secao__cabecalho">
					<div>
						<span class="etiqueta">Expertise jurídica</span>
						<h2>Áreas de atuação multidisciplinar</h2>
					</div>

					<p>
						Atuação coordenada nas principais ramificações do direito público
						e privado, com suporte estratégico para pessoas físicas e empresas.
					</p>
				</header>

				<div class="areas__grade" id="listaAreas">
					<?php foreach ( aml_conteudo( 'areas' ) as $area ) : ?>
						<article class="cartao-area">
							<?php aml_icone( $area['icone'], 'cartao-area__icone' ); ?>
							<h3><?php echo esc_html( $area['titulo'] ); ?></h3>
							<p><?php echo esc_html( $area['texto'] ); ?></p>
							<a href="#contato"><?php echo esc_html( $area['rotulo'] ); ?><?php aml_icone( 'chevron_right' ); ?></a>
						</article>
					<?php endforeach; ?>
				</div>

			</div>
		</section>

		<section class="socios" id="socios">
			<div class="conteudo">

				<header class="secao__cabecalho">
					<div>
						<span class="etiqueta">Equipe</span>
						<h2>
							Conheça nosso <span class="ouro">time de sócios.</span>
						</h2>
					</div>

					<p>
						Parceiros de confiança na busca das soluções jurídicas mais
						adequadas a cada cliente. Criamos relacionamentos duradouros,
						baseados em comprometimento, colaboração e atualização permanente
						dos nossos conhecimentos jurídicos e de negócios.
					</p>
				</header>

				<div class="socios__carrossel">

					<button class="socios__controle socios__controle--anterior" type="button"
						aria-label="Ver sócios anteriores" aria-controls="listaSocios">
						<span class="material-symbols-outlined">chevron_left</span>
					</button>

					<div class="socios__janela" role="region" aria-roledescription="carrossel"
						aria-label="Sócios do escritório" tabindex="0">
						<div class="socios__grade" id="listaSocios">
							<?php foreach ( aml_conteudo( 'socios' ) as $socio ) : ?>
								<article class="socio">
									<img src="<?php echo aml_arquivo( $socio['foto'] ); ?>" alt="Foto de <?php echo esc_attr( $socio['nome'] ); ?>" width="400" height="400" loading="lazy" decoding="async">
									<div class="socio__cartao">
										<h3><?php echo esc_html( $socio['nome'] ); ?></h3>
										<span><?php echo esc_html( $socio['cargo'] ); ?></span>
										<div>
											<a href="tel:+<?php echo esc_attr( $socio['numero'] ); ?>"><?php aml_icone( 'call' ); ?><?php echo esc_html( $socio['telefone'] ); ?></a>
											<a href="https://api.whatsapp.com/send?phone=<?php echo esc_attr( $socio['numero'] ); ?>" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de <?php echo esc_attr( $socio['nome'] ); ?>"><?php aml_icone( 'chat' ); ?></a>
										</div>
									</div>
								</article>
							<?php endforeach; ?>
						</div>
					</div>

					<button class="socios__controle socios__controle--proximo" type="button"
						aria-label="Ver próximos sócios" aria-controls="listaSocios">
						<span class="material-symbols-outlined">chevron_right</span>
					</button>

				</div>

			</div>
		</section>

		<section class="portfolio" id="portfolio">
			<div class="conteudo">
				<header class="secao__cabecalho">
					<div>
						<span class="etiqueta">Portfólio</span>
						<h2>
							Parceiros que confiam em nosso <span class="ouro">trabalho.</span>
						</h2>
					</div>
					<p>
						Marcas e organizações que acreditam na nossa advocacia parceira, estratégica e voltada para resultados eficientes.
					</p>
				</header>

				<div class="portfolio__grade">
					<?php foreach ( aml_conteudo( 'portfolio' ) as $marca ) : ?>
						<div class="portfolio__item"><img src="<?php echo aml_arquivo( $marca[0] ); ?>" alt="<?php echo esc_attr( $marca[1] ); ?>" width="450" height="450" loading="lazy" decoding="async"></div>
					<?php endforeach; ?>
				</div>
			</div>
		</section>

		<?php
		$artigos = new WP_Query(
			array(
				'post_type'           => 'post',
				'posts_per_page'      => 12,
				'ignore_sticky_posts' => true,
				'no_found_rows'       => true,
			)
		);
		?>
		<?php if ( $artigos->have_posts() ) : ?>
			<section class="artigos" id="artigos">
				<div class="conteudo">

					<header class="secao__cabecalho">
						<div>
							<span class="etiqueta etiqueta--escura">
								Últimas publicações
							</span>

							<h2>
								Artigos, notícias e informes do
								<span class="ouro">Mundo Jurídico</span>
							</h2>
						</div>

						<p>
							Novas perspectivas e conteúdos dos nossos colaboradores no blog.
						</p>
					</header>

					<div class="artigos__carrossel">
						<button class="artigos__controle artigos__controle--anterior" type="button"
							aria-label="Ver artigos anteriores" aria-controls="listaArtigos">
							<span class="material-symbols-outlined">chevron_left</span>
						</button>

						<div class="artigos__janela" role="region" aria-roledescription="carrossel"
							aria-label="Artigos do blog" tabindex="0">
							<div class="artigos__grade" id="listaArtigos">
								<?php
								while ( $artigos->have_posts() ) :
									$artigos->the_post();
									$capa = aml_capa_artigo( get_the_ID(), 'medium_large' );
									?>
									<article class="artigo">
										<a href="<?php the_permalink(); ?>" class="artigo__capa" tabindex="-1" aria-hidden="true">
											<img src="<?php echo esc_url( $capa['url'] ); ?>" alt="" width="<?php echo (int) $capa['largura']; ?>" height="<?php echo (int) $capa['altura']; ?>" loading="lazy" decoding="async">
											<div class="artigo__overlay"><div class="artigo__plus">+</div></div>
											<span>Leia no blog</span>
										</a>
										<div class="artigo__corpo">
											<div class="artigo__meta">
												<span><?php aml_icone( 'calendar_today' ); ?> <time datetime="<?php echo esc_attr( get_the_date( 'Y-m-d' ) ); ?>"><?php echo esc_html( get_the_date( 'd/m/Y' ) ); ?></time></span>
												<span><?php aml_icone( 'person' ); ?> <?php echo esc_html( aml_autor( get_the_ID() ) ); ?></span>
											</div>
											<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
											<a class="artigo__btn" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">Leia mais</a>
										</div>
									</article>
								<?php endwhile; ?>
								<?php wp_reset_postdata(); ?>
							</div>
						</div>

						<button class="artigos__controle artigos__controle--proximo" type="button"
							aria-label="Ver próximos artigos" aria-controls="listaArtigos">
							<span class="material-symbols-outlined">chevron_right</span>
						</button>
					</div>

					<div class="artigos__mais">
						<a href="<?php echo esc_url( aml_link_artigos() ); ?>" class="botao botao--ouro">
							Veja mais artigos <?php aml_icone( 'arrow_forward' ); ?>
						</a>
					</div>
				</div>
			</section>
		<?php endif; ?>

		<section class="contato" id="contato">
			<div class="conteudo contato__grade">

				<form class="formulario" id="formularioContato" data-whatsapp="<?php echo esc_attr( aml_opcao( 'whatsapp' ) ); ?>">

					<span class="etiqueta">Atendimento ágil</span>

					<h2>Envie-nos sua mensagem</h2>

					<p>
						Preencha os campos abaixo. Nossa equipe entrará em contato
						o mais breve possível.
					</p>

					<label>
						Nome completo
						<input name="nome" autocomplete="name" placeholder="Ex.: Carlos Eduardo Silva" required>
					</label>

					<div class="formulario__duplo">

						<label>
							Telefone / WhatsApp
							<input name="telefone" type="tel" autocomplete="tel" placeholder="(84) 99999-9999" required>
						</label>

						<label>
							E-mail
							<input name="email" type="email" autocomplete="email" placeholder="seuemail@exemplo.com" required>
						</label>

					</div>

					<label>
						Área de interesse

						<select name="area">
							<?php foreach ( aml_conteudo( 'areas_formulario' ) as $opcao ) : ?>
								<option><?php echo esc_html( $opcao ); ?></option>
							<?php endforeach; ?>
						</select>
					</label>

					<label>
						Mensagem ou resumo do caso

						<textarea name="mensagem" rows="4" placeholder="Descreva brevemente sua necessidade..."
							required></textarea>
					</label>

					<p class="formulario__aviso">
						Ao enviar, a mensagem abre no WhatsApp do escritório. Usamos seus
						dados só para responder ao contato, como explica a
						<a href="<?php echo esc_url( get_privacy_policy_url() ? get_privacy_policy_url() : home_url( '/' ) ); ?>">Política de Privacidade</a>.
					</p>

					<button class="botao botao--escuro" type="submit">
						Enviar mensagem
					</button>

				</form>

				<div class="sede">

					<span class="etiqueta">Sede presencial</span>

					<h3>Visite-nos em Natal</h3>

					<ul>

						<li>
							<?php aml_icone( 'location_on' ); ?>

							<div>
								<b>Endereço</b>
								<?php echo esc_html( aml_opcao( 'endereco' ) ); ?>,
								<?php echo esc_html( aml_opcao( 'cidade' ) ); ?>
							</div>
						</li>

						<li>
							<?php aml_icone( 'call' ); ?>

							<div>
								<b>Atendimento</b>
								<a href="<?php echo esc_attr( aml_telefone_link( aml_opcao( 'telefone' ) ) ); ?>"><?php echo esc_html( aml_opcao( 'telefone' ) ); ?></a>
							</div>
						</li>

						<li>
							<?php aml_icone( 'mail' ); ?>

							<div>
								<b>E-mail</b>
								<a href="mailto:<?php echo esc_attr( aml_opcao( 'email' ) ); ?>"><?php echo esc_html( aml_opcao( 'email' ) ); ?></a>
							</div>
						</li>

					</ul>

					<p class="sede__horario">
						<?php echo esc_html( aml_opcao( 'horario' ) ); ?>
					</p>

					<div class="sede__mapa-espaco">
						<button class="sede__mapa-botao" type="button"
							data-src="<?php echo esc_url( 'https://www.google.com/maps?q=' . $endereco_mapa . '&output=embed' ); ?>"
							data-titulo="Mapa da sede <?php echo esc_attr( AML_NOME ); ?> em Natal">
							<?php aml_icone( 'map' ); ?>
							Carregar mapa do Google
						</button>
						<a class="sede__mapa-link" href="<?php echo esc_url( 'https://www.google.com/maps/search/?api=1&query=' . $endereco_mapa ); ?>"
							target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
					</div>

				</div>

			</div>
		</section>

	</main>

<?php
get_footer();
