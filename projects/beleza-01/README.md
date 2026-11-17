# Episódio 01 — Hidratação, nutrição e reconstrução

MP4 renderizado em 17/11/2026: 70 s, 720 × 1280, 30 fps, H.264 + AAC.
Lia, cenários e narração recuperados foram preservados.

## Reprodução
`npm ci`
`npx remotion browser ensure`
`node render.cjs`

## Legendas
`words.raw.json` contém os tempos acústicos do faster-whisper base em português.
`prepare-captions.py` restaura a grafia do roteiro sem ratear durações e gera
`words.json` e `captions-word.json`, com até três palavras por bloco.
O deslocamento de 0,5 s corresponde ao início da narração no Remotion.
`captions.json` preserva os blocos anteriores, sem uso no novo render.

Para recalcular os tempos: Python 3.12, faster-whisper 1.2.1 e modelo base;
fornecer áudio mono float32 a 16 kHz decodificado por ffmpeg e ativar
`language='pt', word_timestamps=True, beam_size=5`. Somar 0,5 s aos tempos.

## Revisão
`python qa-check.py` extrai 140 quadros a cada 0,5 s e valida ordem e duração
das palavras. Os quatro painéis do MP4 foram inspecionados, além de um quadro
em tamanho original com destaque de palavra. O áudio exportado foi decodificado
e transcrito novamente; pico -5,6 dBFS, sem clipping.
Esta verificação técnica não equivale à aprovação estética da usuária.
