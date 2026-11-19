---
name: organizer
description: Organizar o acervo reutilizável e os projetos de vídeos TikTok neste repositório. Usar ao iniciar episódio, incorporar assets, preparar entrega ou arquivar uma versão.
---

# Organizer do acervo TikTok

Implementação original específica deste projeto, escrita em 19/11/2026. Não é cópia da skill File Organizer consultada. Consultar `../SOURCES.json` para a pesquisa e a procedência.

## Executar

1. Ler AGENTS.md, IA_MEMORY.md e o README do episódio. Priorizar a orientação mais recente da usuária e distinguir aprovado, proposto e reprovado.
2. Inventariar antes de mover. Preservar os originais e a história Git; nunca apagar para fazer a pasta parecer limpa.
3. Reservar `projects/<numero>-<slug>/` para cada vídeo. Manter dentro dela `README.md`, `script/`, `assets/`, `audio/`, `src/`, `review/` e `renders/`, conforme houver arquivos reais.
4. Usar `assets/characters/<id>/` para referências, peças, expressões e rig; `assets/scenes/<id>/` para fundos, camadas e props. Não colocar asset exclusivo de um episódio no acervo comum sem necessidade.
5. Reservar `shared/characters/`, `shared/audio/`, `shared/fonts/` e `shared/rigs/` somente para itens efetivamente reutilizáveis. Registrar os consumidores e a licença.
6. Nomear arquivos em minúsculas, ASCII e hífens. Usar sufixo de versão ao preservar alternativa fora do Git, nunca sobrescrever uma referência aprovada inadvertidamente.
7. Criar manifesto com id, caminho relativo, tipo, origem, licença, hash SHA-256, resolução/duração e estado de aprovação. Marcar licença desconhecida como desconhecida; geração própria não implica exclusividade legal garantida.
8. Atualizar os imports após cada mudança. Executar build/render mínimo e verificar arquivos ausentes e caminhos sensíveis a maiúsculas.
9. Atualizar o README do episódio com link relativo para MP4, capa, fontes, roteiro, comando de render, revisão e limitações conhecidas.
10. Registrar o que mudou em `review/changelog.md`, incluindo caminhos anteriores quando houve movimentação.

## Concluir

- Manter código, assets, sons, narração e timings suficientes para reproduzir o render.
- Publicar somente dentro do repositório e branch autorizados; não publicar o vídeo no TikTok sem pedido específico.
- Não incluir tokens, senhas, caches, modelos baixados ou node_modules.
- Conferir que links do índice abrem arquivos existentes. Não criar pastas vazias como prova de trabalho concluído.

