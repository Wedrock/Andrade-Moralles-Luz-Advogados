import sys

def main():
    with open("index.html", "r", encoding="utf-8") as f:
        html = f.read()
    
    header_start = html.find('<header')
    header_end = html.find('</header>') + len('</header>')
    
    footer_start = html.find('<footer')
    footer_end = html.find('</html>') + len('</html>')
    
    head_start = 0
    head_end = html.find('</head>') + len('</head>')
    
    head = html[head_start:head_end]
    header = html[header_start:header_end]
    footer = html[footer_start:footer_end]
    
    # Adjust paths in header/footer if necessary, though they should be fine
    header = header.replace('href="#', 'href="index.html#')
    footer = footer.replace('href="#', 'href="index.html#')
    
    # Generate consulta.html
    consulta_html = f"""{head}
<body>
    {header}
    <main class="consulta-page" style="padding-top: 100px;">
        <section class="consulta-secao" style="padding: 4rem 0;">
            <div class="conteudo" style="text-align: center; max-width: 900px; margin: 0 auto;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #000;">Consulte o seu processo</h2>
                <p style="color: #666; margin-bottom: 3rem; line-height: 1.6;">Utilize a nossa ferramenta a baixo para realizar a consulta do seu processo, certifique-se de utilizar o Estado correto ao qual o seu processo se encontra. Em caso de dúvidas, entre em contato com nossa equipe de suporte.</p>
                <div class="estados-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <a href="consulta-rn.html" class="btn-estado" style="display: block; padding: 1.25rem; background-color: #b58d59; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">Rio Grande do Norte</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background-color: #b58d59; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">Paraíba</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background-color: #b58d59; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">Distrito Federal</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background-color: #b58d59; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">Roraima</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background-color: #b58d59; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">Pernambuco</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background-color: #b58d59; color: white; text-decoration: none; border-radius: 4px; font-weight: 500;">São Paulo</a>
                </div>
            </div>
        </section>
    </main>
    {footer}
"""
    with open("consulta.html", "w", encoding="utf-8") as f:
        f.write(consulta_html)

    # Generate consulta-rn.html
    rn_html = f"""{head}
<body>
    {header}
    <main class="consulta-page" style="padding-top: 100px;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Consulta Processual – Rio Grande do Norte</h1>
                <p style="font-size: 0.9rem; color: #ccc;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <span style="color: #b58d59;">Consulta Processual – Rio Grande do Norte</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 4rem 0;">
            <div class="conteudo">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="consulta-rn-federal.html" style="display: block; border: 1px solid #eee; padding: 2rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px;">
                        <!-- Placeholder for Justiça Federal logo -->
                        <div style="font-size: 3rem; color: #005A9C; margin-bottom: 1rem;">❖</div>
                        <h3 style="font-size: 1rem; color: #555;">JUSTIÇA FEDERAL</h3>
                        <p style="font-size: 0.8rem; color: #888;">Seção Judiciária do Rio Grande do Norte</p>
                    </a>
                    
                    <a href="#" style="display: block; border: 1px solid #eee; padding: 2rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px;">
                        <div style="font-size: 3rem; color: #B31B1B; margin-bottom: 1rem;">⚖</div>
                        <h3 style="font-size: 1rem; color: #B31B1B;">TRIBUNAL DE JUSTIÇA</h3>
                        <p style="font-size: 0.8rem; color: #B31B1B; font-weight: bold;">RIO GRANDE DO NORTE</p>
                    </a>

                    <a href="#" style="display: block; border: 1px solid #eee; padding: 2rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px;">
                        <div style="font-size: 3rem; color: #005A9C; margin-bottom: 1rem;">JT</div>
                        <h3 style="font-size: 1.2rem; color: #005A9C;">JUSTIÇA DO TRABALHO</h3>
                        <p style="font-size: 0.7rem; color: #005A9C;">Tribunal Regional do Trabalho da 21ª Região (RN)</p>
                    </a>

                    <a href="#" style="display: block; border: 1px solid #eee; padding: 2rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px;">
                        <div style="font-size: 3rem; color: #008000; margin-bottom: 1rem;">⊕</div>
                        <h3 style="font-size: 1.1rem; color: #000;">Tribunal Regional</h3>
                        <h3 style="font-size: 1.1rem; color: #000;">Eleitoral-RN</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    {footer}
"""
    with open("consulta-rn.html", "w", encoding="utf-8") as f:
        f.write(rn_html)

    # Generate consulta-rn-federal.html
    rn_federal_html = f"""{head}
<body>
    {header}
    <main class="consulta-page" style="padding-top: 100px;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">Justiça Federal – Rio Grande do Norte</h1>
                <p style="font-size: 0.9rem; color: #ccc;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #b58d59;">Justiça Federal – Rio Grande do Norte</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 4rem 0;">
            <div class="conteudo">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
                    
                    <a href="consulta-rn-federal-creta.html" style="display: flex; align-items: center; gap: 1rem; background-color: #222; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Juizado (Creta)</h3>
                    </a>

                    <a href="consulta-rn-federal-pje.html" style="display: flex; align-items: center; gap: 1rem; background-color: #222; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe</h3>
                    </a>

                    <a href="#" style="display: flex; align-items: center; gap: 1rem; background-color: #222; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe Juizado Especial</h3>
                    </a>

                    <a href="#" style="display: flex; align-items: center; gap: 1rem; background-color: #222; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Pje Turma Recursal</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    {footer}
"""
    with open("consulta-rn-federal.html", "w", encoding="utf-8") as f:
        f.write(rn_federal_html)

    # Generate consulta-rn-federal-creta.html
    rn_federal_creta_html = f"""{head}
<body>
    {header}
    <main class="consulta-page" style="padding-top: 100px;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 4rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2rem; margin-bottom: 1rem;">Juizado (Creta)</h1>
                <p style="font-size: 0.9rem; color: #ccc;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <a href="consulta-rn-federal.html" style="color: white; text-decoration: none;">Justiça Federal</a> &gt;
                    <span style="color: #b58d59;">Juizado (Creta)</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 2rem 0; min-height: 800px;">
            <div class="conteudo">
                <iframe src="https://juizado.jfrn.jus.br/cretainternetrn/consulta/processo/pesquisar2.wsp" style="width: 100%; height: 800px; border: none;"></iframe>
            </div>
        </section>
    </main>
    {footer}
"""
    with open("consulta-rn-federal-creta.html", "w", encoding="utf-8") as f:
        f.write(rn_federal_creta_html)

    # Generate consulta-rn-federal-pje.html
    rn_federal_pje_html = f"""{head}
<body>
    {header}
    <main class="consulta-page" style="padding-top: 100px;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 4rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2rem; margin-bottom: 1rem;">PJe</h1>
                <p style="font-size: 0.9rem; color: #ccc;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <a href="consulta-rn-federal.html" style="color: white; text-decoration: none;">Justiça Federal</a> &gt;
                    <span style="color: #b58d59;">PJe</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 2rem 0; min-height: 800px;">
            <div class="conteudo">
                <iframe src="https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam" style="width: 100%; height: 800px; border: none;"></iframe>
            </div>
        </section>
    </main>
    {footer}
"""
    with open("consulta-rn-federal-pje.html", "w", encoding="utf-8") as f:
        f.write(rn_federal_pje_html)

if __name__ == "__main__":
    main()
