# Terraço Gaúcho Grill — site

Site da churrascaria Terraço Gaúcho Grill (Monte Mor - SP).
Feito com [Lovable](https://lovable.dev) e salvo aqui no repositório.

## Rodar na sua máquina (passo a passo)

1. Instale o **Node.js** (versão 22) em https://nodejs.org — é o único programa extra necessário.
2. Baixe este repositório (no GitHub: **Code → Download ZIP**, ou `git clone <url-do-repositório>`).
3. Abra a pasta no VS Code.
4. Abra o terminal do VS Code: menu **Terminal → New Terminal** (atalho `Ctrl + '` no Windows/Linux, `Ctrl + Shift + \`` no Mac).
5. Digite, um de cada vez, apertando Enter depois de cada linha:

```sh
npm install
npm run dev
```

6. O `npm run dev` mostra um endereço no terminal (normalmente `http://localhost:5173`).
   Abra esse endereço no navegador — é o site, e ele se atualiza sozinho quando você salva um arquivo.

Para ver a versão final, igual à que vai para o ar:

```sh
npm run build
npm run preview
```

## Onde mexer

- `src/routes/index.tsx` → todo o texto, botões, telefone, endereço e Instagram da página.
- `src/routes/__root.tsx` → título da aba do navegador, descrição e ícone (favicon).
- `src/styles.css` → cores e fontes. As cores ficam nas variáveis no topo do arquivo.
- `src/assets/fotos/` → as fotos que aparecem na página. Para trocar uma foto,
  salve outra com o mesmo nome por cima (ex.: `foto-01.jpg`) e pronto, nada muda no código.

## Observações

- O site **não usa banco de dados nem login**, então não precisa configurar nenhuma chave ou senha.
- O mapa no fim da página é o Google Maps embutido pelo endereço, funciona sem chave.
- As fotos já estão dentro de `src/assets/fotos/`, ou seja: vêm junto no download do GitHub.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
