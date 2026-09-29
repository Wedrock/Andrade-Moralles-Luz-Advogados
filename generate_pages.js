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
    
    // ... (Keep existing pages generating logic, updated below)

    const rn_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="padding-top: 100px; font-family: 'Plus Jakarta Sans', sans-serif;">
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
    <main class="consulta-page" style="padding-top: 100px; font-family: 'Plus Jakarta Sans', sans-serif;">
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
                    
                    <!-- Fixed Creta Link -->
                    <a href="https://juizado.jfrn.jus.br/cretainternetrn/consulta/processo/pesquisar2.wsp" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Juizado (Creta)</h3>
                    </a>

                    <a href="https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe</h3>
                    </a>

                    <a href="https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe Juizado Especial</h3>
                    </a>

                    <a href="https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
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

    // TJRN Page
    const rn_tj_html = `${head}
<body>
    ${header}
    <main class="consulta-page" style="padding-top: 100px; font-family: 'Plus Jakarta Sans', sans-serif;">
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
    <main class="consulta-page" style="padding-top: 100px; font-family: 'Plus Jakarta Sans', sans-serif;">
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
    <main class="consulta-page" style="padding-top: 100px; font-family: 'Plus Jakarta Sans', sans-serif;">
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
