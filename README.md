# Terraço Gaúcho Grill

Site oficial do Terraço Gaúcho Grill, em Monte Mor - SP. Um espaço para apresentar a casa, destacar seus diferenciais e ajudar os clientes a encontrar as principais informações.

## Sobre o projeto

O site foi desenvolvido com React e TypeScript, usando TanStack Start para as rotas e Vite como servidor de desenvolvimento. O build pré-renderiza a página inicial como HTML estático, sem necessidade de servidor ou Worker em produção.

## Comece a usar

### Requisitos

- Node.js 22 ou superior
- npm

### Instalação

1. Abra a pasta do projeto no VS Code.
2. No terminal, instale as dependências:

   ```sh
   npm install
   ```

3. Inicie o servidor local:

   ```sh
   npm run dev
   ```

4. Abra no navegador o endereço exibido no terminal, normalmente `http://localhost:5173`.

Para abrir a versão estática com a extensão Live Server do VS Code:

1. Rode `npm run build`.
2. Abra a pasta `dist/client` como pasta do workspace no VS Code.
3. Abra o `index.html` dessa pasta com o Live Server.

O site precisa ser servido na raiz `/`. Se abrir `dist/client/index.html` enquanto a raiz do Live Server continua sendo a pasta principal do projeto, o endereço fica `/dist/client/index.html` e o roteador mostra a página 404. Como alternativa, rode `npm run preview` na pasta principal e acesse o endereço exibido no terminal.

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

## Comandos disponíveis

| Comando           | Descrição                                    |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Inicia o servidor local para desenvolvimento |
| `npm run build`   | Gera o site estático em `dist/client`        |
| `npm run preview` | Abre localmente a versão gerada              |
| `npm run lint`    | Verifica o código com ESLint                 |
| `npm test`        | Executa os testes                            |

Para conferir a versão de produção localmente:

```sh
npm run build
npm run preview
```

## Publicação estática

- **GitHub Pages:** o workflow `.github/workflows/deploy-pages.yml` publica automaticamente `dist/client` a cada push para `main`. Nas configurações do repositório, abra **Settings → Pages** e selecione **GitHub Actions** como origem da publicação.
- **Cloudflare Pages:** use `npm run build` como comando de build e `dist/client` como diretório de saída.

O diretório publicado contém o `index.html` pré-renderizado e os recursos necessários; não publique a pasta `dist` inteira.

## Estrutura principal

```text
src/
  assets/             Imagens usadas no site
  routes/
    index.tsx         Conteúdo da página inicial
    __root.tsx        Estrutura geral e metadados do site
  styles.css          Estilos globais, cores e tipografia
public/               Arquivos públicos
```

## Onde fazer alterações

- **Textos, botões e informações da página:** `src/routes/index.tsx`
- **Título da aba, descrição e ícone:** `src/routes/__root.tsx`
- **Cores e estilos globais:** `src/styles.css`
- **Fotos:** `src/assets/`

Ao substituir uma foto, mantenha o nome do arquivo existente para que o site continue encontrando a imagem.

## Tecnologias

- React
- TypeScript
- TanStack Start e TanStack Router
- Vite
- Tailwind CSS
