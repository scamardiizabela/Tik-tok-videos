# Revisão independente — retomada v2, 19/11/2026

Revisor: agente diretor, independente do autor do rig e da composição. Esta revisão cobre os arquivos de imagem efetivamente examinados, as peças PNG e o código do rig. Não representa escuta da nova narração nem reprodução audiovisual integral do master. Não atribuí nota audiovisual de 8,5 por cena.

## Feedback que motivou a revisão

A usuária identificou atuação estática/artificial, braço que parecia contrário ao apontar, narração inadequada e personagem pequena em relação aos cenários e produtos. A aprovação anterior da protagonista e dos cenários não constitui aprovação do vídeo.

## Evidência examinada

- Baseline: `frame-1.8.png`, `frame-5.8.png`, `frame-13.4.png`, `frame-24.5.png`, `frame-37.3.png`, `frame-65.8.png` e peças originais de braços, antebraços, torso e cabeça.
- Onze planos da nova composição em `v2/frame-1.80.png`, `8.00`, `16.00`, `23.00`, `29.00`, `36.00`, `44.00`, `52.00`, `58.00`, `66.00`, `74.00`.
- Reinspeção dos sete planos afetados pelas sobreposições, após correção: 16/23/29/44/58/66/74 s, arquivos atualizados em 19/11 às 20:06 UTC.
- Amostra temporal 14,1/14,7/15,3/15,9/16,5 s, em versão intermediária de enquadramento: repouso, extensão e ajuste do apontar. Essa amostra demonstra mudança real de pose e conexão das articulações; não certifica todos os movimentos do master final.

## Defeitos encontrados e correções verificadas

| Defeito observado | Diagnóstico e ação | Verificação |
| --- | --- | --- |
| Lábios exibiam cores do cenário | Filtro global de remoção de vermelho apagava pixels naturais dos lábios. Confirmado alpha zero em pixels internos da boca do PNG. Extração passou a preservar regiões internas. | Boca íntegra nos sete planos finais reinspecionados. |
| Personagem pequena e pose quase constante | Baseline usava escala 1,03, três poses e oscilação mínima. Nova composição aproxima protagonista e rig usa poses com antecipação, extensão, espera e retorno. | Rosto e torso maiores nos onze planos; sequência de apontar observada em amostra temporal. |
| Antebraço encobria texto e mão ultrapassava alvo | Ampliação revelou conflito de espaço entre ator e objetos; ângulo de cotovelo foi recolhido, gráficos priorizados em camada de primeiro plano e labels redundantes retirados. | Alvo do apontar coincide com região do fio no plano16; checklist66 inteiro. |
| CTA era parcialmente ocultado pelo braço | Cartela de salvar passou para frente do ator. | Texto completo e legível no plano74. |
| Frasco de glicerina e rótulo do pote eram cobertos pela mão | Gráficos em primeiro plano. | Frasco23 e rótulo58 visíveis. |
| Pescoço longo e recortes de joelho evidentes | Cabeça aproximada da gola, sobreposição das peças de perna e enquadramento mais fechado. | Pescoço mais curto; joelhos deixam de ser foco do plano. |

## Observações dos planos finais

| Tempo | Observação verificável |
| --- | --- |
| 1,8 s | Protagonista próxima; potes H/N/R e pergunta visíveis. A margem esquerda corta parte da silhueta, conforme enquadramento próximo. |
| 8 s | Três funções e ícones legíveis; identidade visual preservada. |
| 16 s | Ombro, manga e antebraço conectados; fio e gotas visíveis; ponta indicadora parcialmente ocultada pelo fio em primeiro plano. |
| 23 s | Frasco da glicerina legível, sem mão encobrindo seu símbolo; gesto de apresentação abaixo dele. |
| 29 s | Duas fibras e película visíveis; objeto diante dos dedos é convenção gráfica, não manipulação física realista. |
| 36 s | Dose/quantidade legíveis; pose de explicação distinta do apontar. |
| 44 s | Partículas e fio visíveis; texto de queratina em primeiro plano. |
| 52 s | Relógio e ponta bifurcada continuam identificáveis; não há fechamento milagroso da bifurcação no quadro. |
| 58 s | Pote e rótulo visíveis, mão parcialmente atrás do gráfico. |
| 66 s | Checklist com quantidade, tempo de pausa e frequência inteiro. |
| 74 s | CTA de salvar inteiro, sorriso e potes visíveis. |

## Resultado e limites

Não identifiquei bloqueador estrutural ou de legibilidade nos sete planos finais reinspecionados. A composição resolve a escala excessivamente pequena do baseline e as poses agora variam por intenção. O acabamento continua sendo animação por recortes com gráficos didáticos em primeiro plano: os objetos não são todos manipulados fisicamente pela personagem, e o rosto não faz sincronização labial articulada. Não tratar isso como animação plenamente natural já comprovada ou equivalência a estúdio.

Permanecem não verificados por este revisor: qualidade perceptual da nova voz, pronúncia, mixagem, precisão de sincronismo ouvida por palavra, naturalidade de todos os movimentos em reprodução contínua e ausência de defeitos nos frames não amostrados. Os tempos de legenda e as medições técnicas devem ser conferidos separadamente pelo produtor. A entrega deve ser descrita como versão revisada por amostragem, sem alegar aprovação final da usuária ou nota audiovisual integral.

## Complemento — amostra temporal final

Examinei também `v2/motion-final.jpg`: treze quadros de 14,1 a 16,5 s, em passos de 0,2 s, já no enquadramento final. O braço parte de repouso, antecipa, dobra o cotovelo e aponta para a região do fio; não observei separação entre manga/antebraço. O olhar passa da câmera para a explicação. A imagem de 15,9 s mostra a sobreposição da transição entre duas expressões; ela suaviza a troca mas não constitui deformação facial ou animação labial. A folha `v2/contact-final.jpg` foi examinada integralmente e é compatível com os onze planos individuais revisados. Não encontrei regressão de legibilidade nessa amostra adicional.

## Conferência do master exportado

Examinei integralmente a folha `master-v2/contact.jpg`, extraída diretamente do MP4 final em doze tempos: 1,8 / 8 / 16 / 23 / 29 / 36 / 44 / 52 / 58 / 66 / 74 / 76,9 s. Não observei regressão de composição, articulação ou legibilidade em relação aos planos corrigidos. O encerramento de 76,9 s mantém a protagonista, os três potes e o CTA; não mostra quadro preto ou corte incompleto nessa amostra. A frase de legenda pode desaparecer após o fim da fala, preservando o CTA visual.

Arquivo: `renders/beleza-01-v2.mp4`. SHA-256 calculado localmente: `81854f0ac6a3cae10b98d87700e415a32f49dc20740757bf0b37dc6ea1d10f5e`.

O produtor informou decodificação integral sem erros e formato 1080×1920, 30 fps, 2316 quadros, duração de contêiner 77,205 s. Esses dados técnicos não substituem escuta perceptual ou revisão de todos os quadros. Resultado desta revisão independente: sem bloqueador visual observado nas amostras do master; qualidade sonora e aprovação audiovisual integral continuam não verificadas por este revisor.
