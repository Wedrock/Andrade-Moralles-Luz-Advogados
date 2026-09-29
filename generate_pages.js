const fs = require('fs');

function main() {
    const html = fs.readFileSync('index.html', 'utf-8');
    
    const headerStart = html.indexOf('<header');
    const headerEnd = html.indexOf('</header>') + '</header>'.length;
    
    const footerStart = html.indexOf('<footer');
    const footerEnd = html.indexOf('</html>') + '</html>'.length;
    
    const headStart = 0;
    const headEnd = html.indexOf('</head>') + '</head>'.length;
    
    let head = html.substring(headStart, headEnd);
    let header = html.substring(headerStart, headerEnd);
    let footer = html.substring(footerStart, footerEnd);
    
    header = header.replace(/href="#/g, 'href="index.html#');
    footer = footer.replace(/href="#/g, 'href="index.html#');
    
    const consulta_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; min-height: 80vh; display: flex; align-items: center;">
        <section class="consulta-secao" style="padding: 4rem 0; width: 100%;">
            <div class="conteudo" style="text-align: center; max-width: 900px; margin: 0 auto; padding: 0 1.5rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #111;">Consulte o seu processo</h2>
                <p style="color: #666; margin-bottom: 3rem; line-height: 1.6; font-size: 0.95rem;">Utilize a nossa ferramenta a baixo para realizar a consulta do seu processo, certifique-se de utilizar o Estado correto ao qual o seu processo se encontra. Em caso de dúvidas, entre em contato com nossa equipe de suporte.</p>
                <div class="estados-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <a href="consulta-rn.html" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Rio Grande do Norte</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Paraíba</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Distrito Federal</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Roraima</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Pernambuco</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">São Paulo</a>
                </div>
            </div>
        </section>
    </main>
    ${footer}
`;
    fs.writeFileSync('consulta.html', consulta_html, 'utf-8');

    const rn_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Consulta Processual – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #ddd; font-weight: 500;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <span style="color: #d4a373;">Consulta Processual – Rio Grande do Norte</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="consulta-rn-federal.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #005A9C; margin-bottom: 1rem;">❖</div>
                        <h3 style="font-size: 1rem; color: #333; margin-bottom: 0.5rem;">JUSTIÇA FEDERAL</h3>
                        <p style="font-size: 0.8rem; color: #777;">Seção Judiciária do Rio Grande do Norte</p>
                    </a>
                    
                    <a href="consulta-rn-tj.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #B31B1B; margin-bottom: 1rem;">⚖</div>
                        <h3 style="font-size: 1rem; color: #B31B1B; margin-bottom: 0.5rem;">TRIBUNAL DE JUSTIÇA</h3>
                        <p style="font-size: 0.8rem; color: #B31B1B; font-weight: bold;">RIO GRANDE DO NORTE</p>
                    </a>

                    <a href="consulta-rn-trt.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #005A9C; margin-bottom: 1rem;">JT</div>
                        <h3 style="font-size: 1.1rem; color: #005A9C; margin-bottom: 0.5rem;">JUSTIÇA DO TRABALHO</h3>
                        <p style="font-size: 0.75rem; color: #005A9C;">Tribunal Regional do Trabalho da 21ª Região (RN)</p>
                    </a>

                    <a href="consulta-rn-tre.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #008000; margin-bottom: 1rem;">⊕</div>
                        <h3 style="font-size: 1.1rem; color: #111; margin-bottom: 0;">Tribunal Regional</h3>
                        <h3 style="font-size: 1.1rem; color: #111;">Eleitoral-RN</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer}
`;
    fs.writeFileSync('consulta-rn.html', rn_html, 'utf-8');

    const rn_federal_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Justiça Federal – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #ddd; font-weight: 500;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">Justiça Federal – Rio Grande do Norte</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <!-- Creta Link: External -->
                    <a href="https://juizado.jfrn.jus.br/cretainternetrn/consulta/processo/pesquisar2.wsp" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Juizado (Creta)</h3>
                    </a>

                    <!-- PJe Links: Internal iframes -->
                    <a href="consulta-rn-federal-pje.html" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe</h3>
                    </a>

                    <a href="consulta-rn-federal-pje-juizado.html" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe Juizado Especial</h3>
                    </a>

                    <a href="consulta-rn-federal-pje-turma.html" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Pje Turma Recursal</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer}
`;
    fs.writeFileSync('consulta-rn-federal.html', rn_federal_html, 'utf-8');

    // Create iframe pages for PJe
    function createIframePage(filename, title, url) {
        const pje_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 4rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">${title}</h1>
                <p style="font-size: 0.85rem; color: #ddd; font-weight: 500;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <a href="consulta-rn-federal.html" style="color: white; text-decoration: none;">Justiça Federal</a> &gt;
                    <span style="color: #d4a373;">${title}</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 2rem 0; min-height: 800px; background-color: #f9f9f9;">
            <div class="conteudo" style="max-width: 1200px; margin: 0 auto;">
                <iframe src="${url}" style="width: 100%; height: 800px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); background: white;"></iframe>
            </div>
        </section>
    </main>
    ${footer}
`;
        fs.writeFileSync(filename, pje_html, 'utf-8');
    }

    createIframePage('consulta-rn-federal-pje.html', 'PJe', 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam');
    createIframePage('consulta-rn-federal-pje-juizado.html', 'PJe Juizado Especial', 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam');
    createIframePage('consulta-rn-federal-pje-turma.html', 'Pje Turma Recursal', 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam');

    // TJRN Page
    const rn_tj_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Tribunal de Justiça – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #ddd; font-weight: 500;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">Tribunal de Justiça (TJRN)</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="https://pje1g.tjrn.jus.br/pje/ConsultaPublica/listView.seam" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe (1º Grau)</h3>
                    </a>

                    <a href="https://pje2g.tjrn.jus.br/pje/ConsultaPublica/listView.seam" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe (2º Grau)</h3>
                    </a>
                    
                    <a href="https://esaj.tjrn.jus.br/cpopg/open.do" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">e-SAJ</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer}
`;
    fs.writeFileSync('consulta-rn-tj.html', rn_tj_html, 'utf-8');

    // TRT Page
    const rn_trt_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Justiça do Trabalho (TRT 21) – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #ddd; font-weight: 500;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">Justiça do Trabalho (TRT 21)</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="https://pje.trt21.jus.br/consultaprocessual/" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe (TRT 21)</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer}
`;
    fs.writeFileSync('consulta-rn-trt.html', rn_trt_html, 'utf-8');

    // TRE Page
    const rn_tre_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <section class="hero-consulta" style="background-image: url('justica.png'); background-size: cover; background-position: center; padding: 6rem 0; color: white; text-align: center; position: relative;">
            <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
            <div class="conteudo" style="position: relative; z-index: 1;">
                <h1 style="font-size: 2.5rem; margin-bottom: 1rem; font-family: 'Playfair Display', serif;">Tribunal Regional Eleitoral – RN</h1>
                <p style="font-size: 0.85rem; color: #ddd; font-weight: 500;">
                    <a href="index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="consulta-rn.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">TRE-RN</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="https://consultaunificadapje.tse.jus.br/" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Consulta Pública Unificada PJe</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer}
`;
    fs.writeFileSync('consulta-rn-tre.html', rn_tre_html, 'utf-8');

}

main();
