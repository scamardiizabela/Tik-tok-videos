# Episódio 01 — Hidratação, nutrição e reconstrução

Nova produção com protagonista A, sem reutilizar a personagem Lia. Roteiro e voz anteriores preservados; arte, rig e encenação novos.

## Arquivos

- `narration.txt`: roteiro humanizado com hook e CTA.
- `words.json`: tempos reais por palavra recuperados junto da locução original.
- `direction.md`: storyboard, limites factuais e rubrica do diretor.
- `public/character/`: peças PNG independentes para o rig hierárquico.
- `public/env-*.png`, `public/fg-*.png`: fundos e primeiros planos.
- `public/audio/`: locução, trilha e efeitos originais gerados por código.
- `src/Rig.jsx`: articulações de ombro, cotovelo, quadril e joelho.
- `src/Didactic.jsx`: ações didáticas por conceito.
- `src/Environment.jsx`: câmera, parallax, luz e partículas.
- `review/`: imagens, críticas e aprendizados. Nota só após revisão do render.
- `renders/`: exportações de vídeo.

## Reproduzir

Node 22+, Python com numpy/Pillow e ffmpeg. Na pasta deste projeto:

```bash
npm ci
python3 prepare-assets.py
python3 make-audio.py
node render.cjs --stills
node render.cjs
```

O render usa Chromium; ajustar `REMOTION_BROWSER_EXECUTABLE` se necessário. Proporção 1080×1920, 30 fps, 68,8 s. Nenhum upload em rede social é executado.

## Estado

Vídeo produzido e revisado por amostragem temporal (88 quadros em 11 cenas). Sem bloqueadores estruturais identificados na amostra. A nota editorial estática de layout é 8,5; isso não certifica nota audiovisual integral. A escuta perceptual não foi verificada. Imagens/áudio/MP4 são entregues em pacote privado; este repositório publica código e documentação legíveis. Assets gerados são arte conceitual e ilustrativa, não prova de eficácia de cosméticos.


Os assets e mídia novos desta versão são fornecidos privadamente com o projeto completo. Esta branch mantém código legível e metadados de integridade em `../../asset-manifest.json`, sem workflow de materialização nem chunks binários.
