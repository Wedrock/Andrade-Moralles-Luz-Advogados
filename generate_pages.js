const fs = require('fs');
const path = require('path');

function main() {
    const html = fs.readFileSync('index.html', 'utf-8');
    
    const headerStart = html.indexOf('<header');
    const headerEnd = html.indexOf('</header>') + '</header>'.length;
    
    const footerStart = html.indexOf('<footer');
    const footerEnd = html.indexOf('</html>') + '</html>'.length;
    
    const headStart = 0;
    const headEnd = html.indexOf('</head>') + '</head>'.length;
    
    let rawHead = html.substring(headStart, headEnd);
    let rawHeader = html.substring(headerStart, headerEnd);
    let rawFooter = html.substring(footerStart, footerEnd);
    
    rawHeader = rawHeader.replace(/href="#/g, 'href="index.html#');
    rawFooter = rawFooter.replace(/href="#/g, 'href="index.html#');

    function applyPrefix(content, depth) {
        if (depth === 0) return content;
        const prefix = '../'.repeat(depth);
        let res = content;
        res = res.replace(/href="styles\.css"/g, `href="${prefix}styles.css"`);
        res = res.replace(/src="logo\.png"/g, `src="${prefix}logo.png"`);
        res = res.replace(/src="dados\.js"/g, `src="${prefix}dados.js"`);
        res = res.replace(/src="script\.js"/g, `src="${prefix}script.js"`);
        res = res.replace(/href="index\.html/g, `href="${prefix}index.html`);
        res = res.replace(/href="consulta\.html"/g, `href="${prefix}consulta.html"`);
        return res;
    }

    // 1. Generate root consulta.html
    const head0 = applyPrefix(rawHead, 0);
    const header0 = applyPrefix(rawHeader, 0);
    const footer0 = applyPrefix(rawFooter, 0);

    const consulta_html = `${head0}
<body>
    ${header0}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; min-height: 80vh; display: flex; align-items: center;">
        <section class="consulta-secao" style="padding: 4rem 0; width: 100%;">
            <div class="conteudo" style="text-align: center; max-width: 900px; margin: 0 auto; padding: 0 1.5rem;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: #111;">Consulte o seu processo</h2>
                <p style="color: #666; margin-bottom: 3rem; line-height: 1.6; font-size: 0.95rem;">Utilize a nossa ferramenta a baixo para realizar a consulta do seu processo, certifique-se de utilizar o Estado correto ao qual o seu processo se encontra. Em caso de dúvidas, entre em contato com nossa equipe de suporte.</p>
                <div class="estados-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <a href="rn/index.html" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Rio Grande do Norte</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Paraíba</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Distrito Federal</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Roraima</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">Pernambuco</a>
                    <a href="#" class="btn-estado" style="display: block; padding: 1.25rem; background: linear-gradient(135deg, #d4a373, #a0744b); color: white; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 0.9rem; transition: transform 0.2s;">São Paulo</a>
                </div>
            </div>
        </section>
    </main>
    ${footer0}
`;
    fs.writeFileSync('consulta.html', consulta_html, 'utf-8');

    // 2. Setup RN folder
    if (!fs.existsSync('rn')) {
        fs.mkdirSync('rn');
    }

    const head1 = applyPrefix(rawHead, 1);
    const header1 = applyPrefix(rawHeader, 1);
    const footer1 = applyPrefix(rawFooter, 1);
    const bgImage = "../justica.png";

    // rn/index.html (Main RN Page)
    const rn_html = `${head1}
<body>
    ${header1}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0d12;">
        <section class="destaque" style="padding: clamp(3.25rem, 6vh, 5rem) 0 clamp(2.5rem, 5vh, 4rem);">
            <div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(90deg, #0b0d12 28%, rgba(11, 13, 18, 0.88) 50%, rgba(11, 13, 18, 0.38) 72%, rgba(11, 13, 18, 0.78) 100%), linear-gradient(180deg, rgba(11, 13, 18, 0.75) 0%, transparent 18%, transparent 78%, #0b0d12 100%), url('${bgImage}');"></div>
            <div class="conteudo" style="text-align: center;">
                <h1 class="destaque__titulo" style="margin: 0 auto 1rem; font-size: 2.5rem;">Consulta Processual – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-weight: 500;">
                    <a href="../index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <span style="color: #d4a373;">Consulta Processual – Rio Grande do Norte</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0; background-color: #fff;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="federal.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #005A9C; margin-bottom: 1rem;">❖</div>
                        <h3 style="font-size: 1rem; color: #333; margin-bottom: 0.5rem;">JUSTIÇA FEDERAL</h3>
                        <p style="font-size: 0.8rem; color: #777;">Seção Judiciária do Rio Grande do Norte</p>
                    </a>
                    
                    <a href="tj.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #B31B1B; margin-bottom: 1rem;">⚖</div>
                        <h3 style="font-size: 1rem; color: #B31B1B; margin-bottom: 0.5rem;">TRIBUNAL DE JUSTIÇA</h3>
                        <p style="font-size: 0.8rem; color: #B31B1B; font-weight: bold;">RIO GRANDE DO NORTE</p>
                    </a>

                    <a href="trt.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #005A9C; margin-bottom: 1rem;">JT</div>
                        <h3 style="font-size: 1.1rem; color: #005A9C; margin-bottom: 0.5rem;">JUSTIÇA DO TRABALHO</h3>
                        <p style="font-size: 0.75rem; color: #005A9C;">Tribunal Regional do Trabalho da 21ª Região (RN)</p>
                    </a>

                    <a href="tre.html" style="display: block; border: 1px solid #eee; padding: 2.5rem 1.5rem; text-align: center; text-decoration: none; color: inherit; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border-radius: 8px; transition: transform 0.3s, box-shadow 0.3s;">
                        <div style="font-size: 3rem; color: #008000; margin-bottom: 1rem;">⊕</div>
                        <h3 style="font-size: 1.1rem; color: #111; margin-bottom: 0;">Tribunal Regional</h3>
                        <h3 style="font-size: 1.1rem; color: #111;">Eleitoral-RN</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer1}
`;
    fs.writeFileSync('rn/index.html', rn_html, 'utf-8');

    // rn/federal.html
    const rn_federal_html = `${head1}
<body>
    ${header1}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0d12;">
        <section class="destaque" style="padding: clamp(3.25rem, 6vh, 5rem) 0 clamp(2.5rem, 5vh, 4rem);">
            <div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(90deg, #0b0d12 28%, rgba(11, 13, 18, 0.88) 50%, rgba(11, 13, 18, 0.38) 72%, rgba(11, 13, 18, 0.78) 100%), linear-gradient(180deg, rgba(11, 13, 18, 0.75) 0%, transparent 18%, transparent 78%, #0b0d12 100%), url('${bgImage}');"></div>
            <div class="conteudo" style="text-align: center;">
                <h1 class="destaque__titulo" style="margin: 0 auto 1rem; font-size: 2.5rem;">Justiça Federal – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-weight: 500;">
                    <a href="../index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="index.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">Justiça Federal – Rio Grande do Norte</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0; background-color: #fff;">
            <div class="conteudo" style="max-width: 1000px; margin: 0 auto; padding: 0 1.5rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem;">
                    
                    <a href="https://juizado.jfrn.jus.br/cretainternetrn/consulta/processo/pesquisar2.wsp" target="_blank" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Juizado (Creta)</h3>
                    </a>

                    <a href="federal-pje.html" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe</h3>
                    </a>

                    <a href="federal-pje-juizado.html" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">PJe Juizado Especial</h3>
                    </a>

                    <a href="federal-pje-turma.html" style="display: flex; align-items: center; gap: 1rem; background-color: #1a1a1a; color: white; padding: 2rem 1.5rem; text-decoration: none; border-radius: 4px; transition: background-color 0.2s;">
                        <span style="background: linear-gradient(135deg, #d4a373, #a0744b); padding: 0.5rem; border-radius: 4px; display: inline-flex; justify-content: center; align-items: center;">
                            <span class="material-symbols-outlined" style="font-size: 1.2rem; color: white;">search</span>
                        </span>
                        <h3 style="font-size: 1.1rem; font-weight: 600; margin: 0;">Pje Turma Recursal</h3>
                    </a>

                </div>
            </div>
        </section>
    </main>
    ${footer1}
`;
    fs.writeFileSync('rn/federal.html', rn_federal_html, 'utf-8');

    // Create iframe pages for PJe
    function createIframePage(filename, title, url) {
        const pje_html = `${head1}
<body>
    ${header1}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0d12;">
        <section class="destaque" style="padding: clamp(3.25rem, 6vh, 5rem) 0 clamp(2.5rem, 5vh, 4rem);">
            <div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(90deg, #0b0d12 28%, rgba(11, 13, 18, 0.88) 50%, rgba(11, 13, 18, 0.38) 72%, rgba(11, 13, 18, 0.78) 100%), linear-gradient(180deg, rgba(11, 13, 18, 0.75) 0%, transparent 18%, transparent 78%, #0b0d12 100%), url('${bgImage}');"></div>
            <div class="conteudo" style="text-align: center;">
                <h1 class="destaque__titulo" style="margin: 0 auto 1rem; font-size: 2rem;">${title}</h1>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-weight: 500;">
                    <a href="../index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="index.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <a href="federal.html" style="color: white; text-decoration: none;">Justiça Federal</a> &gt;
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
    ${footer1}
`;
        fs.writeFileSync(filename, pje_html, 'utf-8');
    }

    createIframePage('rn/federal-pje.html', 'PJe', 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam');
    createIframePage('rn/federal-pje-juizado.html', 'PJe Juizado Especial', 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam');
    createIframePage('rn/federal-pje-turma.html', 'Pje Turma Recursal', 'https://pje.jfrn.jus.br/pje/ConsultaPublica/listView.seam');

    // rn/tj.html
    const rn_tj_html = `${head1}
<body>
    ${header1}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0d12;">
        <section class="destaque" style="padding: clamp(3.25rem, 6vh, 5rem) 0 clamp(2.5rem, 5vh, 4rem);">
            <div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(90deg, #0b0d12 28%, rgba(11, 13, 18, 0.88) 50%, rgba(11, 13, 18, 0.38) 72%, rgba(11, 13, 18, 0.78) 100%), linear-gradient(180deg, rgba(11, 13, 18, 0.75) 0%, transparent 18%, transparent 78%, #0b0d12 100%), url('${bgImage}');"></div>
            <div class="conteudo" style="text-align: center;">
                <h1 class="destaque__titulo" style="margin: 0 auto 1rem; font-size: 2.5rem;">Tribunal de Justiça – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-weight: 500;">
                    <a href="../index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="index.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">Tribunal de Justiça (TJRN)</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0; background-color: #fff;">
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
    ${footer1}
`;
    fs.writeFileSync('rn/tj.html', rn_tj_html, 'utf-8');

    // rn/trt.html
    const rn_trt_html = `${head1}
<body>
    ${header1}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0d12;">
        <section class="destaque" style="padding: clamp(3.25rem, 6vh, 5rem) 0 clamp(2.5rem, 5vh, 4rem);">
            <div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(90deg, #0b0d12 28%, rgba(11, 13, 18, 0.88) 50%, rgba(11, 13, 18, 0.38) 72%, rgba(11, 13, 18, 0.78) 100%), linear-gradient(180deg, rgba(11, 13, 18, 0.75) 0%, transparent 18%, transparent 78%, #0b0d12 100%), url('${bgImage}');"></div>
            <div class="conteudo" style="text-align: center;">
                <h1 class="destaque__titulo" style="margin: 0 auto 1rem; font-size: 2.5rem;">Justiça do Trabalho (TRT 21) – Rio Grande do Norte</h1>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-weight: 500;">
                    <a href="../index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="index.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">Justiça do Trabalho (TRT 21)</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0; background-color: #fff;">
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
    ${footer1}
`;
    fs.writeFileSync('rn/trt.html', rn_trt_html, 'utf-8');

    // rn/tre.html
    const rn_tre_html = `${head1}
<body>
    ${header1}
    <main class="consulta-page" style="font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0d12;">
        <section class="destaque" style="padding: clamp(3.25rem, 6vh, 5rem) 0 clamp(2.5rem, 5vh, 4rem);">
            <div class="destaque__imagem" aria-hidden="true" style="background-image: linear-gradient(90deg, #0b0d12 28%, rgba(11, 13, 18, 0.88) 50%, rgba(11, 13, 18, 0.38) 72%, rgba(11, 13, 18, 0.78) 100%), linear-gradient(180deg, rgba(11, 13, 18, 0.75) 0%, transparent 18%, transparent 78%, #0b0d12 100%), url('${bgImage}');"></div>
            <div class="conteudo" style="text-align: center;">
                <h1 class="destaque__titulo" style="margin: 0 auto 1rem; font-size: 2.5rem;">Tribunal Regional Eleitoral – RN</h1>
                <p style="font-size: 0.85rem; color: #cbd5e1; font-weight: 500;">
                    <a href="../index.html" style="color: white; text-decoration: none;">Início</a> &gt; 
                    <a href="index.html" style="color: white; text-decoration: none;">Consulta Processual – Rio Grande do Norte</a> &gt; 
                    <span style="color: #d4a373;">TRE-RN</span>
                </p>
            </div>
        </section>
        
        <section style="padding: 5rem 0; background-color: #fff;">
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
    ${footer1}
`;
    fs.writeFileSync('rn/tre.html', rn_tre_html, 'utf-8');

}

main();
