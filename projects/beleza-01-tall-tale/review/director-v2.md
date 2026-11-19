# Direção independente v2 — revisão estática

Evidência diretamente inspecionada: novos frames em 1,8; 13,4; 19,5; 24,5; 37,3; 50,4; 65,8 segundos, código atualizado Rig/index/Didactic. A revisão v1 dos seis cenários brutos permanece válida. Não recebi clip, logo não declaro escuta, movimento ou sincronia perceptual aprovados.

## Resultado das correções

- Peças do corpo que estavam separadas agora se conectam nas poses amostradas. O código usa sockets anatômicos e hierarquia ombro → cotovelo → antebraço. Pés permanecem fixos no idle.
- Apoio agora foi escolhido conforme palco: plataformas nos micromundos e bancada/piso nos interiores. A leitura é de protagonista em miniatura; isso é coerente com o conceito de micromundos, embora a escala ainda deva permanecer consistente nos cortes.
- Pote preso à mão esquerda em 1,8 s melhora contato e dá propósito ao gesto. Os demais símbolos podem flutuar como explicação, mas não devem ser confundidos com objeto físico que A segura.
- Títulos duplicados removidos; cena respira melhor e a legenda mantém contraste.
- Diagrama químico arbitrário removido. O símbolo de glicerina atual é funcional, mas se parece com balde: melhorar para frasco conta-gotas identificado como ingrediente ou símbolo abstrato de umectante.
- Badge final comporta o CTA sem cortar texto. Conteúdo científico permanece condicional e limitado por fórmula/quantidade.
- Nutrição tem deslocamento relativo das fibras no código; proteína em trânsito desaparece ao aderir; categorias convergem ao pote. São correções implementadas, mas sua legibilidade em movimento ainda precisa ser observada.

## Notas editoriais estáticas parciais

Escala subjetiva de 0 a 10, válida somente para amostras visuais. Não é nota do vídeo ou garantia de equivalência a um estúdio.

| Dimensão estática | Nota | Justificativa |
|---|---:|---|
| Cenários brutos: acabamento e continuidade visual | 8,8 | Luz, profundidade e materiais consistentes; cada cenário pertence ao universo de autocuidado. |
| Rig nas poses renderizadas | 8,6 | Conexões anatômicas corrigidas, silhueta adulta legível, pote parentado à mão; extremos e transições ainda não examinados. |
| Layout e hierarquia | 8,3 | Melhorou com menos títulos; ainda há distância entre algumas demonstrações e A, excesso de texto auxiliar e arte didática menos refinada que o fundo. |
| Clareza dos mecanismos em quadros isolados | 8,1 | Nutrição, proteína e temporariedade são identificáveis; água/umectante e quantidade ainda dependem de texto e precisam do movimento para demonstrar causa. |

Não calcular média final com dimensões ausentes. **A meta de 8,5 por cena do vídeo não está comprovada.** Cenários estão aptos à integração; a composição v2 está apta ao render de revisão, sem os dois maiores bloqueios visuais encontrados na v1 nas amostras examinadas.

## Próxima revisão operacional

1. Ver sequência de frames dos extremos de gestos, início/meio/fim das demonstrações e todos os cortes; confirmar que articular não abre fissuras nos sockets.
2. Verificar se gota efetivamente alcança o fio, se duas fibras deslizam de forma inteligível e se mistura converge para um único pote antes da frase terminar.
3. Conferir timings de palavras com narração real. `words.json` e fala estão presentes; algoritmo de legenda não substitui conferência perceptual.
4. Dados técnicos informados pelo produtor: narração 67,656 s, 187 palavras, média -18,8 dB e pico -2,5 dB. São medições técnicas reportadas, não escuta do diretor. Não comprovam voz natural, pronúncia ou relação voz/trilha; medir também mixagem final para clipping.
5. Não entregar com afirmação “aprovado 8,5” enquanto a rubrica de movimento/som/sincronia estiver pendente. Se o artefato for entregue como versão de revisão, nomear seu estado corretamente.

## Limites que permanecem

A encenação ainda usa a mesma família de gestos de apontar em boa parte das cenas; não foi comprovado andar, dosar, organizar produtos ou ler fisicamente o rótulo. Os cenários são bitmaps com camadas adicionais e câmera, o que pode produzir parallax, mas não torna todos seus elementos animados. A apresentação deve descrever essa técnica com precisão.
