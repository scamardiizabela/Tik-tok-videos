---
name: project-improvement
description: Revisar cenas animadas e registrar melhorias reproduzíveis entre episódios. Usar durante storyboard, render de teste, revisão final e início do próximo vídeo desta série.
---

# Aperfeiçoamento por evidências

Skill original do projeto. O aperfeiçoamento depende de aplicar e registrar a revisão; não representa treinamento automático do modelo nem garante qualidade futura.

## Iniciar

1. Ler as decisões aprovadas, as limitações da produção e `review/lessons.md` dos episódios anteriores. Preservar a personagem A aprovada e distinguir proposta visual de feedback real da usuária.
2. Definir para cada cena uma intenção compreensível em uma frase, ação principal, causa e efeito visíveis, palavra de revelação, assets, áudio e duração.
3. Distribuir produção e crítica entre agentes distintos quando disponíveis. O diretor avalia o artefato, não apenas a descrição de intenção do produtor.

## Revisar cada cena

Renderizar uma amostra em movimento, revisar quadros de antecipação, contato, ação e consequência, e ouvir a mixagem. A folha de contato complementa o vídeo; não substitui inspeção do movimento e áudio.

Pontuar de 0 a 10 com evidência por item:

| Critério | Peso | Evidência mínima |
|---|---:|---|
| Clareza da ação e correspondência à narração | 25% | Causa e consequência visíveis no trecho |
| Construção visual, profundidade e composição | 20% | Camadas, luz, escala e zona de legenda |
| Atuação e acabamento da animação | 20% | Pivôs corretos, apoio, gestos e continuidade |
| Sincronia e legibilidade | 15% | Conferência de palavras e revelações no áudio |
| Som | 10% | Voz inteligível, efeitos com causa, trilha discreta |
| Consistência e rigor factual | 10% | Identidade preservada e fontes compatíveis |

Calcular a média ponderada, registrar a justificativa e exigir pelo menos 8,5 por cena. A nota é uma avaliação editorial subjetiva; não é certificado de equivalência a um estúdio. Não arredondar uma reprovação para aprovação.

Bloquear entrega final independentemente da média se houver: membro solto, interpenetração evidente, personagem flutuando, legenda ilegível/cortada, termo errado na fala ou legenda, som estourado, afirmação enganosa, quadro ausente ou render incompleto.

## Corrigir

1. Registrar defeito com cena, timestamp/frame, observação, severidade, responsável e ação verificável.
2. Corrigir primeiro os bloqueadores e a legibilidade da ação; depois ajustar acabamento.
3. Renderizar novamente o trecho afetado e as transições de entrada e saída. Atualizar a revisão somente após verificar o novo artefato.
4. Se faltar evidência, usar estado `não verificado`; nunca inventar nota, escuta ou inspeção.

## Consolidar

Salvar em `review/quality.json` as notas, versão/hash do render, revisores, defeitos, correções e limitações. Usar o schema em `review-schema.json`.

Guardar em `review/lessons.md`: problema observado, causa, correção aplicada, prevenção e evidência. Promover uma regra ao acervo comum somente quando ela for reutilizável. Registrar feedback da usuária como feedback, não inferir aprovação do silêncio.

No próximo episódio, testar as prevenções relevantes antes do render completo. Atualizar o índice e os links da revisão junto do código e dos assets publicados.

