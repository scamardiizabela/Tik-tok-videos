# Revisão independente v1 — quadros e cenários

Revisor: agente diretor. Evidência: os onze `frame-*.png` (1,8; 5,8; 13,4; 19,5; 24,5; 30; 37,3; 44,8; 50,4; 57; 65,8 s), `src/index.jsx`, `Rig.jsx`, `Didactic.jsx`, `Environment.jsx`, `words.json` e os seis cenários brutos 00–05. Nenhum clip com áudio foi recebido: movimento, mixagem e sincronia real permanecem NÃO VERIFICADOS.

## Decisão

**Não aprovar esta composição como vídeo final.** Há membros destacados, apoio espacial inconsistente e explicações apresentadas sobretudo como gráficos flutuantes. Os cenários brutos têm qualidade artística aproveitável. Essa avaliação não transfere aprovação do cenário ao vídeo.

## Correções prioritárias

| Prioridade | Evidência | Problema | Correção verificável |
|---|---|---|---|
| P0 | 44,8 s e 37,3 s | Manga direita termina antes do antebraço; mão/antebraço aparecem como peça solta. Também há separações entre quadril/coxa/canela. | Medir conteúdo alfa de cada sprite e ancorar pelo ponto anatômico, não caixa total. Sobrepor articulações 5–10 px de textura; renderizar extremos de ombro/cotovelo/joelho. |
| P0 | 1,8; 5,8; 24,5; 50,4; 65,8 s | A paira no meio da parede, sobre prateleira ou janela, sem superfície compatível com seus pés. Sombra calculada não estabelece chão. | Fixar palco real no mesmo plano dos pés, ou usar enquadramento de busto explicitamente apresentador. No mundo macro, colocar pés sobre plataforma; na penteadeira, evitar corpo inteiro flutuante. |
| P0 | index.jsx/Rig.jsx | Mesma pose `point` domina quase tudo; t absoluto produz balanço contínuo sem relação causal. `walk` não é usado. Não há objeto parentado à mão. | Criar poses por cena e timeline de antecipação → contato → ação → reação. Pelo menos abrir/virar pote, acionar teste, interromper dose, ler rótulo e organizar produtos devem ser ações visíveis. |
| P1 | Todos os frames | Artistas/cenários detalhados contrastam com fio como cilindro SVG, potes simples e diagramas circulares. Elemento explicativo parece sobreposto a wallpaper. | Compartilhar acabamento: sombreado, textura leve, mesma direção de luz, bordas e espessuras compatíveis. Transformar fio em asset coerente ou reconstruir com escamas e volume melhor. Reduzir contraste do fundo durante demonstração. |
| P1 | 13,4; 24,5; 37,3 s | Título do capítulo é repetido no topo e no centro, competindo com ação e legenda. | Manter uma identificação pequena no topo; remover título duplicado central e texto redundante. Usar labels apenas quando explicam algo que imagem não mostra. |
| P1 | 13,4 s + Hair | Água cai acima do fio; não há efeito observável de maciez ou troca de água. | Animar captura/retenção/liberação moderada em superfície ilustrativa, ou deslocamento suave de mecha; sem representar saturação total como benefício. Revelação deve coincidir com as palavras de 9,38–18,5 s. |
| P1 | 19,5 s | Diagrama de bolinhas pode parecer molécula química específica da glicerina, mas é arbitrário. | Substituir por símbolo funcional inequívoco de umectante com gotas atraídas/retenção; ou desenhar molécula correta com fonte e rótulos. Não usar ball-and-stick pseudoquímico. |
| P1 | 24,5 s + Didactic | “Menos atrito” aparece escrito; fibras não executam teste relativo entre si. | Mostrar duas fibras próximas, movimento relativo antes/depois de película; diminuir resistência de trajeto, sem prometer mudança mensurada. |
| P1 | 30 s | Barra deslizante move-se por seno; nenhuma relação causal com quantidade. | A dosa; pequena dose antecede filme fino; excesso produz peso visual e ela interrompe; ligação com “mais óleo não significa...” em 30–33 s. |
| P1 | 37,3 s | Proteínas permanecem suspensas em fila acima da fibra, com duplicatas aderidas. | Mover partículas individuais até regiões danificadas, desaparecer a versão em trânsito no contato. Não sugerir reconstrução química permanente. |
| P1 | 50,4 s | Venn estático comunica mistura pela convenção gráfica, não pela ação. | Gota/óleo/proteína convergem para um pote que gira mostrando nome e composição; a atriz acompanha com olhar e gesto. |
| P1 | 57 s | Lista de tarefas sobreposta sem interação; instruções são legíveis mas são cartela. | A segura e gira embalagem; acionar quantidade/pausa/frequência sequencialmente na fala. |
| P1 | 65,8 s | CTA em badge estreito, texto encosta/ultrapassa borda; duas chamadas de compra duplicadas. | Ampliar badge ou reduzir texto; remover título central repetido; reservar gesto de A ao bookmark, sem apontar para potes flutuantes. |
| P2 | Environment.jsx | Movimento de um bitmap inteiro + partículas + folhas não comprova cenário vivo em 2.5D. fg parece faixa de imagem que pode repetir piso/objetos. | Separar primeiro plano, plano de ação e fundo com oclusão/movimento independente; revisar em clip para linhas de emenda e parallax inconsistente. |

## Confronto com words.json

Os cortes gerais estão semanticamente próximos dos blocos de fala; a narração termina em cerca de 67,65 s e a composição segue até 68,8 s. O corte em 3,65 s ocorre depois do início de “Hidratação”; se os três ícones devem entrar por palavra, usar os timings de cada termo dentro de 3,2–5 s em vez de fazer todos já aparecerem no corte seguinte. Não declarar sincronização por palavra aprovada com base apenas em `words.find`: é preciso ouvir áudio e ver o render.

## Cenários brutos — somente direção de arte estática

| Arquivo | Aspectos positivos | Limite / decisão de produção |
|---|---|---|
| 00-vanity-v1 | Banheiro original, moldura lavanda, luz quente, centro livre e objetos capilares plausíveis. | A região central é parede/espelho, não chão. Ótimo para busto ou objetos sobre a bancada; exige reposicionar personagem de corpo inteiro. |
| 01-hydration-v1 | Melhor cenário de micromundo: fio gigante, água legível, plataformas e profundidade atmosférica. | Flores e pedras são ornamentais; não provar hidratação por cachoeira. Usar plataforma central como apoio físico e macro explicativo da fibra. |
| 02-nutrition-v1 | Estufa dourada, elementos de óleo e manteiga, fio ampliado e palco claro. | Frasco e móveis à esquerda colidem com A atual. Reservar centro para ação, A sobre plataforma; luz ajuda integrar assets. |
| 03-reconstruction-v1 | Oficina lilás, microscópio, corte transversal do fio e área central limpa. | Contas decorativas já estão gravadas no bitmap e não podem interagir. Tratar como decoração ou separar; nenhum teste de reconstrução deve depender delas. |
| 04-selection-v1 | Loja coerente, variedade de frascos sem marca, corredor profundo e bancada frontal. | Corpo inteiro atual paira junto a prateleiras. Pode caminhar no corredor com escala coerente ou aparecer como busto atrás da bancada; leitura do rótulo requer prop distinto. |
| 05-sunset-v1 | Encerramento mais forte: clima tranquilo, produtos e janela com profundidade. | Janela ocupa fundo central: não posicionar pés sobre paisagem. Melhor plano médio da personagem sentada/atrás da penteadeira e mãos organizando potes. |

Conjunto dos cenários: acabamento e continuidade de luz/paleta fortes; não encontrei defeito grosseiro que impeça reutilização dos seis bitmaps. São **assets estáticos prontos para integração e separação em camadas**, não cenas animadas aprovadas. Preferir conservar a arte e corrigir encenação/composição a regenerar tudo.

## Aplicação da skill project-improvement

Skill aplicada diretamente aos artefatos, com evidência por timestamp. Bloqueadores acionados: membro solto e personagem flutuando. As categorias de clareza, visual, atuação, sincronia, som e fatos são pertinentes. Notas globais não calculadas porque faltam movimento e áudio; qualquer média seria incompleta. O registro de `não verificado` evita aprovação artificial. Após correções, receber clips de 3–6 s das cenas 0, 4, 6, 7 e 10, mais transições de entrada e saída; depois revisar vídeo integral.
