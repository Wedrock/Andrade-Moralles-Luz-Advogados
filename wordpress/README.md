# Tema de WordPress — AML Advogados

Este tema leva o site novo para o WordPress do escritório, com o mesmo visual do
site estático. Os artigos que já estão no WordPress aparecem com o visual novo
sem precisar copiar nada.

## Gerar o arquivo do tema

Na raiz do repositório:

```bash
bash wordpress/gerar-tema.sh
```

O arquivo fica em `dist/aml-advogados.zip`. O script junta os modelos PHP desta
pasta com o `styles.css`, o `script.js` e as imagens do site estático, para os
dois nunca ficarem diferentes. Sempre que mudar o site, gere o `.zip` de novo.

## Instalar

1. Faça um backup do site (pela hospedagem ou com o plugin UpdraftPlus).
2. No painel: **Aparência → Temas → Adicionar novo → Enviar tema**, escolha o
   `aml-advogados.zip`, clique em **Instalar** e depois em **Ativar**.
3. Se o visual antigo continuar aparecendo, limpe o cache em **LiteSpeed Cache**.
4. Confira a página inicial, um artigo, a lista de artigos, a Política de
   Privacidade e a consulta processual.

Para voltar atrás, basta reativar o tema antigo em **Aparência → Temas**.

## O que o tema faz ao ser ativado

- Define a página "Início" (`inicio`) como página inicial e cria a página
  "Artigos" (`artigos`) para a lista de artigos.
- Publica a **Política de Privacidade** com o texto do site novo, se ela ainda não
  estiver publicada. Uma política já publicada não é alterada.
- Cria as páginas de consulta processual que faltam e reaproveita as que já
  existem (`consulta-processual`, `consulta-processual-rio-grande-do-norte`,
  `justica-federal-rio-grande-do-norte`), sem mudar o endereço delas.

Os artigos, os links permanentes e os plugins não são alterados. Reativar o tema
repete a configuração sem duplicar páginas.

## Onde editar

- **Aparência → Personalizar → Site AML:** título e texto do topo, descrição do
  site no Google, telefone, WhatsApp do formulário, e-mail, endereço, horário,
  redes sociais e o vídeo do YouTube.
- **`aml-advogados/inc/conteudo.php`:** missão/visão/valores, números, áreas de
  atuação, equipe (sócios), portfólio e as listas do rodapé e do formulário.
- **`aml-advogados/inc/tribunais.php`:** links das páginas de consulta processual.
- **Artigos e Política de Privacidade:** pelo editor do WordPress, como sempre.

## Depois de ativar

- **Slider Revolution:** pode ser desativado; o tema novo não usa.
- **WPBakery:** mantenha ativo. As páginas internas "controle-de-tarefas",
  "controle-de-despachos" e "consultar-processo" dependem dele.
- **Imagens em WebP:** novas imagens enviadas já geram versões em WebP. Para
  converter as que já estão na biblioteca, use o plugin Regenerate Thumbnails.
- **SEO:** o tema já gera título, descrição, Open Graph e dados estruturados. Se
  instalar Yoast ou Rank Math, o tema deixa a descrição e o Open Graph com o plugin.
- **Cabeçalhos de segurança:** o tema envia `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` e, com HTTPS, HSTS.
