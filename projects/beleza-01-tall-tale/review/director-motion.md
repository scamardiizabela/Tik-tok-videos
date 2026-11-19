# Revisão temporal amostrada — primeiro MP4 completo

Examinei diretamente as onze folhas `motion-00.jpg` a `motion-10.jpg`, oito quadros por cena, total de 88 amostras extraídas do master. Hash do master: `1c4fe6f9f277a0a1f31a92d086dd6a9fc9d04c03bf1008b2559050094f58b582`. Essa revisão compara sequências de imagens e código; não equivale a assistir a todos os 2064 frames em reprodução contínua nem ouvir a mixagem.

## Resultado

Não encontrei bloqueador estrutural nas amostras: articulações mantêm conexão, pés permanecem apoiados, pote segue a mão nas cenas 0/5/9 e as legendas mostradas ficam dentro do quadro. Não identifiquei texto truncado, membro extra, mudança acidental de identidade, quadro preto ou ponta dupla sendo permanentemente colada.

O vídeo tem progressão visual compreensível e coerência entre os capítulos e as palavras amostradas. O nível de atuação permanece limitado: a protagonista aponta, sustenta um pote e apresenta expressões por cena; não realiza o conjunto originalmente solicitado de operações complexas com objetos. A câmera produz aproximações e afastamentos e o cenário possui elementos em camadas, mas a maior parte da ilustração ambiental permanece um bitmap. **Não atribuir aprovação audiovisual de 8,5 por cena nem equivalência a Kurzgesagt com base nessa revisão.**

## Evidência por sequência

| Cena | Observação temporal amostrada |
|---|---|
| 00 | Potes entram e oscilam, A mantém contato com pote menor; pergunta visual acompanha a fala inicial. |
| 01 | Ícones aparecem em sequência e o fio permanece referência comum; pés continuam sobre a bancada após a correção. |
| 02 | Gotas mudam de posição até a região do fio; câmera varia escala; relação água/maciez é identificável, mas não um experimento de eficácia. |
| 03 | Gotas convergem para símbolo de ingrediente em conta-gotas; rótulo coincide com trecho de glicerina/umectante. |
| 04 | Película cresce e fibras mudam posição relativa entre amostras; o texto “menos atrito” ainda participa substancialmente da explicação. |
| 05 | Dose pequena/excesso e sinal de limite aparecem; A segura pote. A barra ilustra quantidade, não uma dose clínica ou universal. |
| 06 | Partículas chegam à superfície e permanecem aderidas; não reaparecem duplicadas em trânsito nas amostras posteriores. Frase de melhora é condicional. |
| 07 | Relógio avança e ponta continua bifurcada durante toda a sequência; o limite da reconstrução permanece explícito. |
| 08 | Ingredientes convergem, pote fecha e rótulo muda de pergunta para H N R; encadeamento visual explica mistura no mesmo produto. |
| 09 | Itens de instrução aparecem progressivamente no frasco; apoio e contato do pote menor consistentes. A não chega a virar/ler o objeto fisicamente. |
| 10 | CTA e expressão final permanecem legíveis; pequena variação de câmera, ícone e potes. Encerramento sem quadro ausente nas amostras. |

## Timing: escopo e cautela

Os capítulos seguem a ordem da narração e as palavras visíveis nas amostras correspondem ao assunto da cena. A extração usa `fps=2` e aproxima índices com `round(t*2)+1`, enquanto o texto da folha mostra o tempo alvo. Isso gera desvio de amostragem de algumas décimas e, perto dos cortes, pode mostrar a cena seguinte antes do tempo impresso. Não diagnosticar erro de sincronização do render a partir desse rótulo. A conferência de precisão por palavra exige áudio real e frame exato; permanece não verificada perceptualmente.

## Áudio e integridade

Dados técnicos fornecidos pelo produtor: 1080×1920, 30 fps, 2064 frames, 68,8 s; mixagem com média -21,9 dB e pico -5,6 dB, sem clipping medido. Esses dados sustentam integridade e margem de nível. Não sustentam avaliação de pronúncia, atuação vocal, inteligibilidade da voz sobre a trilha ou qualidade perceptual dos efeitos. Não atribuí nota sonora.

## Estado final desta revisão

Revisão estática completa: layout 8,5, rig em poses 8,6, cenários brutos 8,8. Revisão temporal amostrada: integridade e coerência causal sem bloqueadores observados. Aprovação audiovisual integral: **não verificada**. Limite editorial: atuação ainda simples e cenários principalmente ilustrados com movimento de câmera/camadas. O artefato pode ser apresentado como vídeo produzido e revisado por amostragem, com essa descrição precisa; não como meta integral de acabamento já comprovada.
