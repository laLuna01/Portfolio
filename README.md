# Portfólio — Luana Matos

Portfólio bilíngue construído com Next.js e React.

## Executar localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

## Conteúdo

Os textos, links profissionais, projetos, trajetória e skills em português e inglês ficam centralizados em [`src/content/portfolio.js`](src/content/portfolio.js). Atualize esse arquivo para substituir o conteúdo provisório sem alterar os componentes visuais.

## Tema e idioma

- O tema claro ou escuro acompanha automaticamente `prefers-color-scheme`; não há seletor manual.
- Na primeira visita, o idioma acompanha a preferência do navegador, com português como fallback.
- A escolha entre PT e EN fica salva em `localStorage` e é mantida ao navegar entre páginas.

## Verificações

```bash
npm test
npm run lint
npm run build
```

## Formulário de contato

O formulário envia os dados pelo adaptador em [`src/services/contact.js`](src/services/contact.js), atualmente configurado para o endpoint assíncrono do FormSubmit. Para trocar o serviço de envio, mantenha o contrato desse adaptador e atualize somente a integração nele.
