# Aprendizados do episódio 01

## Peças e articulações
- Problema: rig inicial escalonava imagens pelas células do atlas e deixou mangas, antebraços e joelhos destacados.
- Causa: margem transparente e pivôs não anatômicos; rotação de antebraços na orientação errada.
- Correção: sockets medidos nos pixels úteis das peças, sobreposição nas mangas/joelhos e pescoço atrás do queixo/gola. Pés não acompanham o movimento respiratório.
- Prevenção: renderizar poses extremas e revisar o personagem montado antes de compor todas as cenas.
- Evidência: frames v1 versus v2, relatórios director-v1.md e director-v2.md.

## Apoio no cenário
- Problema: personagem pairava na parede nos ambientes de banheiro/loja.
- Causa: mesma altura de chão em cenários com bancadas ou plataformas distintas.
- Correção: altura de apoio por cena e sombra no contato; cenas 0/1/10 usam bancada1550; mundos macro e oficina têm outros planos.
- Prevenção: registrar plano de apoio no storyboard e verificar todos os cortes, inclusive os que reutilizam cenário.

## Hierarquia e função
- Problema: títulos duplicados, texto longo e gráfico molecular genérico para glicerina.
- Correção: um título por contexto, labels curtos, frasco funcional ilustrativo e nenhuma falsa estrutura molecular.
- Prevenção: o objeto deve explicar a fala; não usar ornamentação científica como prova de funcionamento.

## Causalidade e acabamento
- Óleo passa a acompanhar duas fibras com deslocamento relativo; partículas em trânsito desaparecem quando aderem; funções convergem no mesmo pote; checklist entra no rótulo de uma embalagem.
- CTA ganhou badge com largura calculada pelo conteúdo.
- Elementos vetoriais de plantas genéricos foram retirados; primeiros planos gerados mantêm o acabamento dos fundos.

## Reprodução
- Chromium de desktop falhou no ambiente atual; renderer usa headless shell empacotado como dependência, com caminho configurável.
- Não declarar áudio ouvido ou equivalência a estúdio a partir de screenshots. Notas estáticas e verificações técnicas permanecem separadas de avaliação audiovisual.

## Feedback efetivo da usuária
- Personagem A foi escolhida pela usuária.
- Usuária elogiou a arte gerada e pediu os cenários.
- Não interpretar esses comentários como aprovação automática do vídeo completo.
