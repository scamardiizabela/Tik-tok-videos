# Retomada — 17/11/2026

## Base preservada
- Lia: atlas original recuperado, 1448 × 1086 RGBA; original sem alterações em assets/characters/lia/originals/lia-atlas.png.
- A usuária confirmou os cenários apresentados nesta retomada como a base do projeto.
- Tema recuperado: hidratação, nutrição e reconstrução. Narração anterior preservada, 67,656 s. Composição de trabalho: 70 s, 720 × 1280, 30 fps.

## Aplicação da skill faceless-shorts
SKILL.md e README.md da raiz foram lidos integralmente. Aplicam-se roteiro coloquial, causa antes do efeito, props apoiados, checagem de colisões e revisão visual antes de entrega. A estética, a duração e os assets seguem as instruções específicas de Iza. A produção continua em Remotion, conforme AGENTS.md.

O repositório remoto consultado contém SKILL.md e README.md, mas não contém scripts/setup.sh, scripts/selftest.sh, voice.py, words.py ou styles/*/STYLE.md. Portanto, o kit completo da skill não foi instalado nem passou no selftest. Não substituir esses arquivos por scripts inventados com alegação de importação.

## Estado verificável
- Rig reconstruído hierarquicamente usando recortes SVG das peças originais. Não se recuperou o código do rig anterior.
- Oito cenários alternados por conceito; potes agora têm suportes desenhados.
- Áudio original + trilha e sinais suaves gerados por síntese local, sem amostras externas.
- Legendas recuperadas: tempos por frases/blocos, NÃO alinhamento exato por palavra.
- Revisão SVG estática disponível com `node review.cjs`. É alternativa de inspeção estática, não comprova render Remotion.
- Render Remotion bloqueado neste ambiente: Chromium falha ao criar socket de ProcessSingleton. Download do Chrome Headless Shell falhou por timeout do proxy. Não há novo MP4 validado.
- Na primeira revisão foi corrigida a separação do cotovelo esquerdo e reduzido o espaço do pescoço.
- Diretor: aprovação final e nota 8,5 PENDENTES. Stills não substituem revisão do vídeo e áudio.

## Próximas verificações antes da entrega final
1. Renderizar Remotion em ambiente com Chrome compatível.
2. Fazer alinhamento de palavras em português usando áudio real; nunca tratar rateio de duração como Whisper.
3. Refinar as ações didáticas e os cortes/enquadramentos a cada 1,5–3,5 s.
4. Separar camadas dos cenários para paralaxe real; por enquanto há imagem por ambiente e elementos móveis sobrepostos.
5. Revisar todos os frames a cada 0,5 s, vídeo em movimento, contato, anatomia e mixagem.
6. Só publicar MP4 como final após revisão e aprovação crítica.

## Reprodução
`npm ci`
`python3 make-soundscape.py`
`REMOTION_BROWSER_EXECUTABLE=/caminho/do/chrome node render.cjs --stills`
`REMOTION_BROWSER_EXECUTABLE=/caminho/do/chrome node render.cjs`

## Fontes do roteiro
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4387693/ — revisão sobre cosméticos capilares, condicionamento, atrito e proteínas hidrolisadas.
- https://www.aad.org/public/everyday-care/hair-scalp-care/hair/healthy-hair-tips — práticas gerais de cuidado.
As categorias comerciais se sobrepõem e os efeitos dependem da formulação. Não representar a ilustração como demonstração de eficácia.
