#!/usr/bin/env bash
# Monta o tema de WordPress em dist/aml-advogados.zip.
#
# Os modelos PHP ficam em wordpress/aml-advogados/. O CSS, o JavaScript e as
# imagens vêm da raiz do repositório (os mesmos arquivos do site estático),
# para o tema e o site nunca ficarem diferentes.
#
# Uso, a partir da raiz do repositório:
#   bash wordpress/gerar-tema.sh

set -euo pipefail

raiz="$(cd "$(dirname "$0")/.." && pwd)"
destino="$raiz/dist"
tema="$destino/aml-advogados"

rm -rf "$tema" "$destino/aml-advogados.zip"
mkdir -p "$destino"

cp -R "$raiz/wordpress/aml-advogados" "$tema"

for arquivo in styles.css script.js logo.webp colunas.webp video-capa.webp og-image.jpg favicon.png apple-touch-icon.png; do
  cp "$raiz/$arquivo" "$tema/"
done

for pasta in imagens_time imagens_portfolio imagens_tribunais; do
  cp -R "$raiz/$pasta" "$tema/"
done

(cd "$destino" && zip -qr aml-advogados.zip aml-advogados)

echo "Tema pronto: $destino/aml-advogados.zip"
