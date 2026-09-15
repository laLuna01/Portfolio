# Design Spec: Redesign do Portfólio Profissional

**Data:** 2026-09-15

**Status:** Aguardando revisão final da usuária

**Classificação:** Architectural

## 1. Objetivo

Reformular estrutural e visualmente o portfólio existente para apresentar Luana Matos como desenvolvedora Fullstack profissional, com visão sistêmica e uma identidade pessoal reconhecível.

Esta primeira implementação prioriza estrutura, sistema visual, responsividade e interações. O conteúdo profissional definitivo será preenchido posteriormente pela proprietária do portfólio. Nenhuma experiência, resultado ou métrica será inventada.

O resultado deve:

- Remover a foto da página inicial.
- Dar protagonismo à apresentação profissional e fornecer acesso claro aos projetos e à trajetória.
- Evitar aparência de portfólio estudantil, template genérico ou landing page baseada em buzzwords.
- Combinar uma estética de retrocomputação leve com leitura profissional.
- Funcionar bem em desktop e mobile.
- Atender prioritariamente recrutadores e lideranças técnicas, mantendo contato freelance como objetivo secundário.

## 2. Direção aprovada

A direção escolhida é **Desktop editorial modular**.

A linguagem de sistemas operacionais antigos será usada como moldura visual, não como uma simulação literal. A barra superior, o terminal da home, as molduras de janelas, os pequenos controles e determinados detalhes tipográficos formarão a identidade. O conteúdo profissional continuará organizado como uma publicação digital clara e fácil de consultar.

Foram rejeitadas duas direções:

- Uma simulação integral de sistema operacional, por elevar a complexidade e o risco de parecer um experimento temático.
- Um layout editorial convencional com detalhes retrô apenas na home, por enfraquecer a coerência da identidade entre páginas.

## 3. Arquitetura de informação

O site continuará usando páginas independentes e não terá footer nesta versão.

| Rota | Responsabilidade |
| --- | --- |
| `/` | Apresentação profissional, links principais e composição visual de janelas. |
| `/trajectory` | Breve seção pessoal, experiência profissional, formação e certificações. |
| `/skills` | Competências agrupadas por camadas de atuação. |
| `/projects` | Vitrine de projetos com links externos, sem páginas individuais. |
| `/contact` | Formulário de contato e canais diretos. |

As rotas atuais `/services`, `/resume` e `/work` deixarão de fazer parte da navegação. `/services` será removida; o conteúdo útil de `/resume` e `/work` será substituído pela nova estrutura de `/trajectory` e `/projects`.

## 4. Navegação global

A barra superior será compartilhada por todas as páginas.

### Desktop

A composição aprovada é:

`Luana Matos.exe` — `Trajetória / Skills / Projetos / Contato` — pasta `CV / EN/PT / minimizar / maximizar / fechar`

Requisitos:

- A assinatura será somente textual, sem computador, monograma ou símbolo à esquerda.
- O acesso ao currículo usará uma pasta como ícone.
- Os controles de minimizar, maximizar e fechar serão decorativos.
- Controles decorativos não deverão receber foco nem comunicar ações inexistentes a tecnologias assistivas.
- O item correspondente à página atual terá um estado ativo perceptível sem depender somente de cor.

### Mobile

A barra mostrará `Luana Matos.exe` e um botão de menu. O botão abrirá um painel deslizante contendo:

- Links das quatro páginas internas.
- Acesso ao currículo.
- Seletor EN/PT.
- Controles de janela exclusivamente decorativos.

O painel deverá suportar teclado, fechamento por `Escape`, gerenciamento de foco e áreas de toque adequadas.

## 5. Sistema visual

### Linguagem

A identidade usará retrocomputação com contenção:

- Molduras finas de janelas.
- Barras de título compactas.
- Sombras deslocadas discretas.
- Ícones lineares.
- Separadores e rótulos monoespaçados.
- Cursor de terminal e brilhos pontuais quando não prejudicarem legibilidade.

Scanlines, filtros, ruído ou efeitos nostálgicos não serão aplicados intensamente à página inteira. A interface deve sugerir um computador antigo sem se comportar como uma reprodução literal de um sistema operacional.

### Tema claro

- Fundo branco azulado.
- Superfícies em lavanda muito suave.
- Texto principal azul-marinho.
- Bordas e sombras em azul dessaturado.
- Roxo ou azul-violeta como destaque pontual.

### Tema escuro

- Fundo azul meia-noite.
- Superfícies em tons de azul ligeiramente mais claros.
- Texto branco azulado.
- Bordas em azul médio.
- Destaques em pervinca ou lilás.

O tema será determinado automaticamente por `prefers-color-scheme`. Não haverá toggle manual nem persistência de tema própria.

### Tipografia

- Uma fonte sans-serif legível será usada em títulos, parágrafos e conteúdo profissional.
- Uma fonte monoespaçada será usada na navegação, no terminal, em rótulos e metadados.
- Uma fonte pixelada poderá aparecer somente em detalhes decorativos curtos.
- Textos longos nunca usarão fonte pixelada.

## 6. Páginas

### 6.1 Home

A home será uma abertura concisa, sem rolagem longa. Não exibirá foto, projetos, métricas, experiência ou skills.

Conteúdo principal:

- Identificação como desenvolvedora Fullstack.
- Nome.
- Uma frase profissional curta e editável.
- Links para GitHub, LinkedIn e e-mail.

Elemento visual:

- Uma **mesa em camadas** à direita no desktop.
- O terminal será a janela principal.
- Um explorador de arquivos e uma janela pequena de status ficarão parcialmente sobrepostos ao terminal.
- O conteúdo dessas janelas será abstrato ou virá do conteúdo fornecido pela usuária; não conterá métricas ou experiências inventadas.
- No mobile, as três janelas serão empilhadas sem sobreposição, na ordem terminal, explorador e status. Os grupos de controles decorativos das janelas secundárias serão ocultados; títulos e conteúdo permanecerão legíveis.

### 6.2 Trajetória

A página reunirá:

1. Uma breve seção pessoal.
2. Experiência profissional.
3. Formação acadêmica.
4. Certificações.

A experiência será apresentada em uma linha do tempo vertical em todos os tamanhos de tela. Em telas amplas, o espaço lateral poderá acomodar metadados ou detalhes do item ativo sem alterar a ordem cronológica. Formação e certificações usarão cards compactos. Não serão usadas abas nem regiões com scroll interno.

### 6.3 Skills

As tecnologias serão agrupadas por camadas:

- Frontend.
- Backend.
- Dados.
- Infraestrutura.
- Ferramentas.

Cada grupo terá título, descrição curta e tecnologias associadas. Ícones serão complementares: nomes textuais sempre estarão disponíveis. A composição deverá comunicar relações entre áreas e visão sistêmica, não uma contagem de tecnologias.

### 6.4 Projetos

Os projetos serão exibidos simultaneamente em uma grade responsiva, sem carrossel e sem página individual.

Cada card aceitará:

- Imagem opcional.
- Título.
- Descrição curta.
- Stack ou categorias.
- Link para demonstração, quando disponível.
- Link para repositório, quando disponível.

A ausência de demo ou repositório não deixará botões vazios. A ação correspondente simplesmente não será renderizada.

### 6.5 Contato

A página combinará formulário e canais diretos.

O formulário terá:

- Nome.
- E-mail.
- Assunto.
- Mensagem.

Os canais diretos previstos são e-mail, LinkedIn e GitHub. Telefone e endereço residencial não serão exibidos por padrão.

## 7. Conteúdo e internacionalização

O conteúdo ficará separado da apresentação em estruturas centralizadas para `pt` e `en`. Componentes visuais consumirão uma interface comum de conteúdo, permitindo trocar textos sem duplicar páginas ou layouts.

As URLs permanecerão simples e independentes do idioma. A troca EN/PT:

- Será funcional em todas as páginas.
- Manterá a pessoa na rota atual.
- Salvará a preferência no navegador.
- Usará o idioma do navegador na primeira visita.
- Usará português como fallback.
- Atualizará o atributo `lang` do documento.

Como o idioma não fará parte da URL, um link compartilhado não garantirá uma língua específica e mecanismos de busca não receberão páginas separadas por locale. Essa limitação foi aceita para manter a primeira versão simples.

Dados provisórios deverão ser claramente identificados como conteúdo a substituir. Não serão adicionadas informações profissionais, métricas ou resultados não fornecidos pela usuária.

## 8. Interações e movimento

O movimento será curto e funcional:

- Entrada suave de conteúdo.
- Abertura e fechamento do menu mobile.
- Pequeno deslocamento ou profundidade nas janelas.
- Cursor do terminal.
- Estados de hover e foco.

Não haverá transições longas entre páginas nem bloqueios artificiais de conteúdo. `prefers-reduced-motion` reduzirá ou removerá animações não essenciais.

## 9. Formulário e estados de erro

O formulário seguirá o fluxo:

1. Validar campos obrigatórios e formato do e-mail.
2. Exibir estado de envio e impedir submissões duplicadas.
3. Confirmar sucesso apenas depois de uma resposta válida do serviço.
4. Exibir erro claro quando a submissão falhar.
5. Preservar os valores preenchidos após falha.

O endpoint ficará isolado do componente visual por meio de um adaptador. A primeira implementação usará o FormSubmit já configurado no projeto, por uma requisição assíncrona que valide a resposta real antes de exibir sucesso. A configuração do endpoint ficará separada do formulário para permitir sua substituição posterior.

## 10. Responsividade

O desenvolvimento será mobile-first e se adaptará ao espaço disponível.

### Desktop

- Barra superior completa.
- Home em duas colunas.
- Janelas visuais sobrepostas.
- Grades amplas nas páginas internas.

### Mobile

- Barra compacta com painel deslizante.
- Home em coluna única.
- Janelas empilhadas, sem sobreposição, na ordem terminal, explorador e status.
- Linha do tempo vertical.
- Cards em uma coluna ou duas quando houver espaço suficiente.
- Nenhum conteúdo dependerá de hover.

## 11. Acessibilidade

- Contraste adequado nos dois temas.
- Foco visível em todos os controles reais.
- Navegação completa por teclado.
- Hierarquia semântica de títulos.
- Rótulos explícitos no formulário.
- Mensagens de erro e sucesso anunciadas por tecnologias assistivas.
- Áreas de toque confortáveis.
- Significado não dependente apenas de cor ou ícone.
- Elementos decorativos removidos da árvore de acessibilidade.
- Estados ativos comunicados visual e semanticamente.

## 12. Limpeza do código existente

Serão removidos ou substituídos:

- Componente e asset da foto.
- Contadores e requisições à API pública do GitHub.
- Página de serviços.
- Carrossel de projetos e dependência do Swiper.
- Intro de barras verticais, transições de escada e atrasos de entrada.
- Ilustração genérica da página de currículo.
- Abas e áreas de scroll interno da página atual de currículo.
- Links sociais sem função.
- Conteúdo pessoal desnecessário, como idade e endereço detalhado.
- Componentes, dependências e assets que ficarem sem uso após o redesign.

Poderão ser reaproveitados:

- Next.js com App Router.
- Tailwind CSS.
- Primitivas acessíveis do Radix UI.
- Utilitário de composição de classes.
- Links e imagens existentes que a usuária validar.

As animações serão implementadas com CSS e a dependência Framer Motion será removida. Metadados, README e navegação duplicada também serão atualizados.

## 13. Estratégia de testes e validação

A implementação deverá incluir:

- Testes dos componentes interativos.
- Testes da troca PT/EN e persistência da preferência.
- Testes de validação, sucesso e falha do formulário.
- Verificação de todas as rotas.
- Verificação de links externos opcionais.
- Testes dos estados ativo, hover, foco e disabled.
- Testes responsivos nos principais breakpoints.
- Navegação por teclado.
- Auditoria de acessibilidade.
- Verificação de `prefers-color-scheme`.
- Verificação de `prefers-reduced-motion`.
- Lint e build de produção.

## 14. Fora de escopo

Não fazem parte desta primeira implementação:

- Escrita do conteúdo profissional definitivo.
- Criação de métricas profissionais.
- CMS ou painel administrativo.
- Páginas individuais de projetos.
- Blog.
- Footer.
- Toggle manual de tema.
- Locales na URL.
- Simulação funcional de minimizar, maximizar ou fechar o site.
- Reprodução integral de qualquer portfólio usado como referência.

## 15. Critérios de aceite

O redesign estará pronto quando:

- As cinco rotas aprovadas estiverem implementadas e responsivas.
- A home não contiver foto, métricas ou prévias de projetos.
- A identidade retrocomputacional estiver presente sem comprometer a leitura profissional.
- Os temas claro e escuro seguirem automaticamente o sistema.
- PT/EN funcionar e persistir no navegador.
- O menu mobile for acessível e operável por teclado.
- Projetos forem exibidos em grade com ações externas condicionais.
- O formulário representar corretamente envio, sucesso e erro.
- Não houver transições longas bloqueando conteúdo.
- Componentes e dependências antigas sem uso tiverem sido removidos.
- Lint, testes e build de produção passarem.
